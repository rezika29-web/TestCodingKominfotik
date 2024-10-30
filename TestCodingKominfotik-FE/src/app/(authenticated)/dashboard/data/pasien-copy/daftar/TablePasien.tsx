"use client";
import { api } from "@/lib/api";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Input,
  message,
  Modal,
  Pagination,
  PaginationProps,
  Select,
  Table,
  theme,
} from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { useToken } = theme;

const { Option } = Select;
interface DataType {
  key: string;
  id: string;
  nik: string;
  nama: string;
  tempatlahir: string;
  tgllahir: string;
  provinsi: string;
  kabkot: string;
  kec: string;
  kel: string;
  alamat: string;
}
const NstRowActionButton: React.FC<ButtonProps> = (props) => {
  const { token } = useToken();

  const customToken = {
    ...token,
  };

  const buttonToken = {
    paddingBlock: 8,
    paddingInline: 30,
  };

  return (
    <ConfigProvider
      theme={{
        token: customToken,
        components: {
          Button: buttonToken,
        },
      }}
    >
      <Button {...props} />
    </ConfigProvider>
  );
};

const CustomButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = "", onClick }) => (
  <button
    className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
interface CustomPaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}
const CustomPagination: React.FC<PaginationProps> = (props) => {
  const { token } = useToken();

  const customToken = {
    ...token,
    colorPrimary: "#FFFFFF", // You can adjust this to your preferred primary color
    colorText: "#2E7628", // This sets the inactive text color to red
    fontSize: 18,
    fontWeightStrong: 800,
    lineWidth: 0,
  };

  const paginationToken = {
    itemActiveColorText: "white", // This sets the active text color to white
    itemActiveBg: "#2E7628",
    itemBg: "#F6F6F9",
    itemActiveColorDisabled: "#FFFFFF",
    itemSize: 48,
    // Remove borders
    itemBorderColor: "transparent",
    itemActiveBorderColor: "transparent",
    itemLinkBg: "transparent",
    itemInputBg: "transparent",
    itemBorderWidth: 0,
  };

  return (
    <ConfigProvider
      theme={{
        token: customToken,
        components: {
          Pagination: paginationToken,
        },
      }}
    >
      <Pagination {...props} />
    </ConfigProvider>
  );
};
const TablePasien: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchData = async (page: number, size: number) => {
    try {
      const response = await api.get(`/pasien?page=${page}&pageSize=${size}`);
      
      console.log("respose",response.data);
      const roles  = response.data;
      const count  = response.data.length;
      console.log("roles",roles);
      const formattedData = roles.map((item: any, index: number) => ({
        // key: ((page - 1) * size + index + 1).toString(),
        key: index.toString(),
        id: item.id,
        nik: item.nik,
        nama: item.nama,
        tempatlahir: item.tempatlahir,
        tgllahir: item.tgllahir,
        provinsi: item.provinsi,
        kabkot: item.kabkot,
        kec: item.kec,
        kel: item.kel,
        alamat: item.alamat,
      }));
      setData(roles);
      console.log("format", formattedData);

      setTotalItems(count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("data", data);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const columns = [
    {
      title: "NO",
      dataIndex: "key",
      key: "no",
    },
    {
      title: "NIK Pasien copy",
      dataIndex: "nik",
      key: "nik",
    },
    {
      title: "NAMA Pasien",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "KETERANGAN",
      key: "aksi",
      render: (_: any, record: DataType) => (
        <div className="flex space-x-2">
          <Button.Group>
            <Button
              icon={<EditOutlined />}
              onClick={() => handleEdit(record.id)}
              className="text-[#2E7628] border-[#DBDBDE] hover:text-white hover:bg-blue-600"
            />
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record.id)}
              className="text-[#626272] border-[#DBDBDE] hover:text-white hover:bg-red-600"
            />
          </Button.Group>
        </div>
      ),
    },
  ];
  const handleEdit = (id: string) => {
    router.push(`/dashboard/data/pasien/edit/${id}`);
    // Implement edit logic here
  };
  const handleDelete = (key: string) => {
    console.log(key);
    
    const itemToDelete = data.find((item) => item.id === key);

    if (!itemToDelete) {
      message.error("Item tidak ditemukan");
      return;
    }

    Modal.confirm({
      title: "Konfirmasi",
      content: `Apakah Anda yakin ingin menghapus pasien "${itemToDelete.nama}"?`,
      okText: "Ya, Hapus",
      cancelText: "Batal",
      onOk: async () => {
        try {
          // Kirim permintaan DELETE ke API
          const response = await api.delete(`/pasien/${itemToDelete.id}`);

          if (response.status === 200) {
            message.success("pasien berhasil dihapus");
            // Hapus item dari state setelah berhasil dihapus
            setData((prevData) =>
              prevData.filter((item: { key: string }) => item.key !== key)
            );
            window.location.reload
          } else {
            message.error("Gagal menghapus pasien");
          }
        } catch (error) {
          console.error("Error deleting pasien:", error);
          message.error("Terjadi kesalahan saat menghapus pasien");
        }
      },
    });
  };
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Pasien</h1>
        <div className="space-x-2">
          <CustomButton className="text-[#2E7628] bg-white border border-gray-300 hover:bg-gray-100">
            Import Data
          </CustomButton>
          <CustomButton className="text-[#2E7628] bg-white border border-gray-300 hover:bg-gray-100">
            Export Data
          </CustomButton>
          <CustomButton
            className="text-white bg-[#2E7628] hover:bg-green-700"
            onClick={() => router.push("/dashboard/data/pasien/tambah")}
          >
            + Tambah Baru
          </CustomButton>
        </div>
      </div>
      <div className="flex items-center space-x-4 mb-6 bg-white p-2 rounded-lg">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          className="w-64"
        />
        <CustomButton className="text-gray-700 bg-white border border-gray-300 hover:bg-gray-100">
          <ReloadOutlined className="mr-2" />
          Reset
        </CustomButton>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="mb-6"
        scroll={{ x: "max-content" }}
      />

      <div className="flex justify-end">
        <CustomPagination
          current={currentPage}
          total={totalItems}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
export default TablePasien;
function setData(arg0: (prevData: any) => any) {
  throw new Error("Function not implemented.");
}
