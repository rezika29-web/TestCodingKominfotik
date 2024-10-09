"use client";

import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Alert,
  Select,
  Col,
  Row,
  DatePicker,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";

const { Title } = Typography;

interface PasienFormProps {
  id?: string;
  mode: "add" | "edit";
}
const { Option } = Select;

const PasienForm: React.FC<PasienFormProps> = ({ id, mode }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [initialData, setInitialData] = useState<{
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
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id && mode === "edit") {
        try {
          setLoading(true);
          const response = await api.get(`/pasien/${id}`);
          if (response.status === 200) {
            const pasienData = response.data;
            // setInitialData(response.data);
            setInitialData({
              ...pasienData,
              tgllahir: moment(pasienData.tgllahir, "YYYY-MM-DD"), // Pastikan formatnya sesuai
            });
            // form.setFieldsValue({
            //   nik: response.data.nik,
            //   nama: response.data.nama,
            //   tempatlahir: response.data.tempatlahir,
            //   tgllahir: response.data.tgllahir,
            //   provinsi: response.data.provinsi,
            //   kabkot: response.data.kabkot,
            //   kec: response.data.kec,
            //   kel: response.data.kel,
            //   alamat: response.data.alamat,
            // });
            form.setFieldsValue({
              ...pasienData,
              tgllahir: moment(pasienData.tgllahir, "YYYY-MM-DD"),
            });
          }
        } catch (error: any) {
          setError("Failed to fetch Pasien data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id, mode, form]);

  const onFinish = async (values: {
    nik: string;
    nama: string;
    tempatahir: string;
    tgllahir: Date;
    provinsi: string;
    kabkot: string;
    kec: string;
    kel: string;
    alamat: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      let response;
      if (mode === "add") {
        response = await api.post("/pasien", values);
      } else {
        response = await api.put(`/pasien/${initialData?.id}`, values);
      }

      if (response.status === 200 || response.status === 201) {
        setSuccess(response.data.message);
        form.setFieldsValue(values);
        router.push(`/dashboard/data/pasien/daftar`);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4338CA",
          borderRadius: 8,
        },
        components: {
          Card: {
            headerBg: "#FFFFFF",
            headerFontSize: 18,
          },
          Button: {
            colorPrimary: "#15803D",
          },
        },
      }}
    >
      <div style={{ padding: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <Link href="/dashboard/management/pasien/daftar">
            <ArrowLeftOutlined
              style={{
                fontSize: "18px",
                marginRight: "8px",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/management/pasien/daftar")}
            />
          </Link>
          <Title level={4} style={{ margin: 0 }}>
            Tambah Pasien
          </Title>
        </div>
        <Card
          title="PASIEN"
          extra={<span style={{ cursor: "pointer" }}>▼</span>}
          style={{ width: "100%" }}
        >
          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              style={{ marginBottom: "16px" }}
            />
          )}
          {success && (
            <Alert
              message={success}
              type="success"
              showIcon
              style={{ marginBottom: "16px" }}
            />
          )}
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              ...initialData,
              tgllahir: initialData?.tgllahir ? moment(initialData.tgllahir, "YYYY-MM-DD") : null,
            }}
            id="pasienForm"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="nik"
                  label={<span style={{ color: "#000000" }}>NIK Pasien</span>}
                  rules={[
                    { required: true, message: "NIK pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan nik pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="nama"
                  label={<span style={{ color: "#000000" }}>Nama Pasien</span>}
                  rules={[
                    { required: true, message: "Nama pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan nama pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="tempatlahir"
                  label={
                    <span style={{ color: "#000000" }}>tempatlahir Pasien</span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "tempatlahir pasien is required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Masukkan tempatlahir pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="tgllahir"
                  label={
                    <span style={{ color: "#000000" }}>
                      Tanggl Lahir Pasien
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Tanggal Lahir pasien is required",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="provinsi"
                  label={
                    <span style={{ color: "#000000" }}>
                      Provinsi Alamat Pada KTP Pasien
                    </span>
                  }
                  rules={[
                    { required: true, message: "Provinsi pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan Provinsi pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="kabkot"
                  label={
                    <span style={{ color: "#000000" }}>
                      kabupaten / kota Alamat Pada KTP Pasien
                    </span>
                  }
                  rules={[
                    { required: true, message: "kabupaten pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan kabupaten pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="kec"
                  label={
                    <span style={{ color: "#000000" }}>
                      kecamatan Alamat Pada KTP Pasien
                    </span>
                  }
                  rules={[
                    { required: true, message: "kecamatan pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan kecamatan pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="kel"
                  label={
                    <span style={{ color: "#000000" }}>
                      kelurahan Alamat Pada KTP Pasien
                    </span>
                  }
                  rules={[
                    { required: true, message: "kelurahan pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan kelurahan pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="alamat"
                  label={
                    <span style={{ color: "#000000" }}>
                      Alamat Lengkap Pada KTP Pasien
                    </span>
                  }
                  rules={[
                    { required: true, message: "alamat pasien is required" },
                  ]}
                >
                  <Input
                    placeholder="Masukkan alamat pasien"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
              {/* <Col span={12}>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[{ required: true, message: "Pilih status Pasien" }]}
                >
                  <Select placeholder="Pilih status Pasien">
                    <Option value="Aktif">Aktif</Option>
                    <Option value="Tidak Aktif">Tidak Aktif</Option>
                  </Select>
                </Form.Item>
              </Col> */}
            </Row>
            {/* <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="description"
                  label={<span style={{ color: "#000000" }}>Deskripsi</span>}
                  rules={[{ required: true, message: "Deskripsi is required" }]}
                >
                  <TextArea
                    placeholder="Masukkan deskripsi"
                    disabled={!!success}
                  />
                </Form.Item>
              </Col>
            </Row> */}
          </Form>
        </Card>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ float: "right", marginTop: "16px" }}
          loading={loading}
          disabled={!!success}
          form="pasienForm"
        >
          Simpan
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default PasienForm;
