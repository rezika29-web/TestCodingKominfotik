"use client";

import { NstAuthWrapper } from "@/components/NstAuthWrapper";
import { BreadcrumbProvider } from "@/contexts/NstBreadcrumbContext";
import { useSession, signOut } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

import React from "react";
import { Layout, Menu, theme, Avatar, Badge, Breadcrumb } from "antd";
import {
  UserOutlined,
  BarChartOutlined,
  FileSearchOutlined,
  CheckSquareOutlined,
  AimOutlined,
  RotateRightOutlined,
  AppstoreOutlined,
  FormOutlined,
  FileProtectOutlined,
  BellOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

const DashboardLayoutContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login");
  //   },
  // });

  const pathname = usePathname();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    "kebutuhan-talent",
  ]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <NstAuthWrapper>
      <Layout className="min-h-screen">
        <Header className="bg-white flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-xs font-bold text-[#92939D]">
                SISTEM KLINIK TERPADU
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-right">
              <div className="text-xs font-semibold">Admin-Klinik-Terpadu</div>
              <div className="text-xs">ADMIN</div>
            </div>
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="mr-5"
              onClick={handleLogout}
            />
            <div className="w-[60px] h-[60px] border border-[#EFF0F1] rounded-lg flex items-center justify-center">
              <Badge count={5}>
                <BellOutlined style={{ fontSize: "20px" }} />
              </Badge>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            width={250}
            style={{
              background: "#1D1E55",
            }}
          >
            <Menu
              theme="dark"
              mode="inline"
              style={{ background: "#1D1E55" }}
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              onOpenChange={handleOpenChange}
              items={[
                {
                  key: "data",
                  label: "DATA",
                  type: "group",
                  children: [
                    {
                      key: "management",
                      icon: <UsergroupDeleteOutlined />,
                      label: "Management",
                      children: [
                        {
                          key: "pasien",
                          // icon: <RotateRightOutlined />,
                          label: (
                            <Link href="/dashboard/data/pasien/daftar">
                              Pasien
                            </Link>
                          ),
                        },
                        {
                          key: "kunjungan",
                          // icon: <AppstoreOutlined />,
                          label: (
                            <Link href="/dashboard/data/kunjungan/daftar">
                              Riwayat Kunjungan
                            </Link>
                          ),
                        },
                        {
                          key: "kesehatan",
                          // icon: <AppstoreOutlined />,
                          label: (
                            <Link href="/dashboard/data/kesehatan/daftar">
                              Riwayat Kesehatan
                            </Link>
                          ),
                        },
                      ],
                    },
                  ],
                },
              ]}
            />
          </Sider>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >

            <div className="mainContent">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </NstAuthWrapper>
  );
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BreadcrumbProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </BreadcrumbProvider>
  );
}
