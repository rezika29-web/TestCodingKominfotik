"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import Image from "next/image";
import { Form, Input } from "antd";
import Text from "@/components/Text";
import { CopyrightOutlined } from "@ant-design/icons";
import SimpleInput from "@/components/SimpleInput";
import LinkText from "@/components/LinkText";
import PrimaryButton from "@/components/Buttons";

type LoginPayload = {
  email: string;
  password: string;
};
export default function Login() {
  const router = useRouter();
  const [form] = Form.useForm<LoginPayload>(); 

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const result = await signIn("credentials", {
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //     redirect: false,
  //   });
  //   if (result?.error) {
  //     // Handle error
  //   } else {
  //     router.replace("/dashboard/pro-talent/kebutuhan-talent/daftar");
  //   }
  // };
  const handleSubmit = async (values: LoginPayload) => {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (result?.error) {
      // Handle error
    } else {
      router.replace("/dashboard/pro-talent/kebutuhan-talent/daftar");
    }
  };
  const customizeRequiredMark = (
    label: React.ReactNode,
    { required }: { required: boolean }
  ) => (
    <>
      {label}&nbsp;
      {required && <span style={{ color: "red" }}>*</span>}
    </>
  );
  // const steps = [
  //   {
  //     title: "Basic",
  //     content: (

  //     ),
  //   },
  // ];

  return (
    // <div className="min-h-screen flex flex-col bg-indigo-900 bg-cover bg-center" style={{backgroundImage: "url('/bpsdm-images/auth/main-background.png')"}}>
    //   <header className="p-4">
    //     <Image src="/bpsdm-images/logo-bpsdm.png" alt="Logo" width={40} height={40} />

    //     <h1 className="text-white text-sm">SISTEM MANAGEMENT TALENT</h1>
    //     <h2 className="text-white text-xs">Badan Pengembangan Sumber Daya Manusia Perhubungan</h2>
    //   </header>

    //   <main className="flex-grow flex items-center justify-center px-4">
    //     <div className="w-full max-w-5xl flex">
    //       <div className="w-1/2 bg-white rounded-l-lg shadow-lg p-8" style={{backgroundImage: "url('/bpsdm-images/auth/aura-background.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
    //         <div className="flex items-center mb-6">
    //           <div className="bg-indigo-600 rounded-full p-2 mr-3">
    //             <Image src="/bpsdm-images/auth/arrow.png" alt="Login" width={24} height={24} />
    //           </div>
    //           <h2 className="text-2xl font-bold">Login</h2>
    //         </div>

    //         <form onSubmit={handleSubmit} className="space-y-4">
    //           <div>
    //             <label htmlFor="nip" className="block text-sm font-medium text-gray-700">NIP *</label>
    //             <input id="nip" name="email" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Masukkan NIP" />
    //           </div>
    //           <div>
    //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Kata Sandi *</label>
    //             <div className="relative">
    //               <input id="password" name="password" type="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Masukkan Kata Sandi" />
    //             </div>
    //           </div>
    //           <a href="#" className="block text-sm text-green-600 hover:underline">Lupa Kata Sandi?</a>
    //           <button type="submit" className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">Login →</button>
    //         </form>
    //       </div>
    //       <div className="w-1/2 bg-indigo-800 rounded-r-lg p-8 flex flex-col justify-between">
    //         <div>
    //           <Image src="/bpsdm-images/logo-bpsdm.png" alt="Logo BPSDM" width={100} height={100} />
    //           <h2 className="text-yellow-400 text-2xl font-bold mt-4">SISTEM INFORMASI MANAGEMENT TALENT</h2>
    //           <p className="text-white text-sm mt-2">BADAN PENGEMBANGAN SUMBER DAYA MANUSIA PERHUBUNGAN</p>
    //         </div>
    //         <div>
    //           <p className="text-white text-sm mb-4">KONTAK KAMI</p>
    //           <div className="flex space-x-4">
    //             {['phone', 'email', 'facebook', 'x'].map((icon) => (
    //               <div key={icon} className="bg-white p-2 rounded-md">
    //                 <Image src={`/bpsdm-images/auth/${icon}.png`} alt={icon} width={40} height={40}  />
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>

    //   <footer className="bg-indigo-900 text-white text-xs text-center py-2">
    //     © Copyright 2024, All Rights Reserved by Badan Pengembangan Sumber Daya Manusia Perhubungan
    //   </footer>
    // </div>
    <div style={{ backgroundImage: "url('/bpsdm-images/kemenhub/Login.png')" }}>
      <div style={{ backgroundColor: "rgba(9, 0, 100, 0.9)" }}>
        <div
          className="flex px-10 py-5 top-0 z-50"
          style={{ backgroundColor: "rgba(5, 0, 61, 0.65)" }}
        >
          <div className="flex flex-row w-[40%]">
            <div style={{ width: "50px", height: "50px", marginRight: "8px" }}>
              <Image src="/bpsdm-images/logo-bpsdm.png" alt="Logo" width={45} height={15} />
            </div>
            <div className="flex flex-col align-middle justify-center">
              <Text
                size="body2"
                className="font-bold"
                style={{ color: "#FAFAFAFA" }}
              >
                SISTEM MANAGEMENT TALENT
              </Text>
              <Text
                size="subtitle"
                className="font-bold"
                style={{ color: "#FAFAFAFA" }}
              >
                Badan Pengembangan Sumber Daya Manusia Perhubungan
              </Text>
            </div>
          </div>
        </div>
        <div className="min-h-screen overflow-x-hidden bg-transparent">
          <div className="flex md:w-full px-10 pt-10 pb-10 justify-center align-middle items-center  ">
            <div className="md:flex w-[90%] max-h-screen mt-10 mb-10 gap-y-12 md:flex-row justify-center md:px-10 ">
              <div className="flex w-full md:w-[50%] flex-col justify-center items-center  bg-white  rounded-tl-2xl rounded-bl-2xl">
                <div className="flex w-[80%] mb-20 top-0 mt-0">
                  <div className="flex flex-row w-[50%] justify-start items-center">
                    <Image
                      src="/bpsdm-images/icons/kemenhub/Number.png"
                      alt="img-Login"
                      width={70}
                      height={40}
                    />
                    <Text
                      size="h4"
                      className=" mt-3"
                      style={{ color: "rgba(13, 14, 38, 1)" }}
                    >
                      Login
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-end w-[50%]">
                    <Image
                      src="/bpsdm-images/kemenhub/Frame 1000006240.png"
                      alt="img-Login"
                      width={70}
                      height={50}
                      className="flex"
                    />
                  </div>
                </div>
                <div className="flex w-[80%] ">
                  <div className="steps-content w-full">
                    <Form
                      layout="vertical"
                      form={form}
                      onFinish={handleSubmit}
                      requiredMark={customizeRequiredMark}
                    >
                      <Form.Item
                        name="email"
                        label="NIP"
                        className="font-inter text-sm font-medium"
                        rules={[
                          { required: true, message: "Tidak boleh kosong!" },
                        ]}
                      >
                        <SimpleInput
                          className="h-12 font-normal"
                          placeholder="Masukkan email"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        label="Kata Sandi"
                        className="font-inter text-sm font-medium"
                        rules={[
                          { required: true, message: "Tidak boleh kosong!" },
                        ]}
                      >
                        <Input.Password
                          className="h-12 font-normal"
                          placeholder="Masukkan password"
                        />
                      </Form.Item>
                      <div className="flex justify-end">
                        <LinkText href="/login/forgot-password">
                          <Text style={{ color: "rgba(46, 118, 40, 1)" }}>
                            Lupa Kata Sandi ?
                          </Text>
                        </LinkText>
                      </div>
                      <Form.Item className="w-full mt-8">
                        <PrimaryButton
                          htmlType="submit"
                          className="w-full h-14 text-lg"
                        >
                          Login
                        </PrimaryButton>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
              <Image
                src="/bpsdm-images/kemenhub/Rectangle 6027.png"
                alt="img-Login"
                width={16}
                height={20}
                className="flex"
              />

              <div
                className="flex justify-center items-center justify-items-center align-middle w-full md:w-[50%] rounded-tr-2xl rounded-br-2xl"
                style={{ backgroundColor: "rgba(5, 0, 61, 0.65)" }}
              >
                <div className="flex flex-col px-5  items-center justify-items-center align-middle">
                  <Image
                    src="/bpsdm-images/logo-bpsdm.png"
                    alt="img-Login"
                    width={100}
                    height={100}
                    className="flex mb-8"
                  />
                  <Text
                    size="h2"
                    style={{ color: "rgba(252, 210, 40, 1)" }}
                    className="mb-3 font-bold"
                  >
                    SISTEM INFORMASI{" "}
                  </Text>
                  <Text
                    size="h2"
                    style={{ color: "rgba(252, 210, 40, 1)" }}
                    className="mb-5 font-bold"
                  >
                    MANAGEMENT TALENT
                  </Text>
                  <Text
                    size="body1"
                    style={{ color: "rgba(219, 219, 222, 1)" }}
                    className="mb-10"
                  >
                    BADAN PENGEMBANGAN SUMBER DAYA MANUSIA PERHUBUNGAN{" "}
                  </Text>
                  <Text
                    size="body1"
                    style={{ color: "rgba(219, 219, 222, 1)" }}
                    className="mb-8"
                  >
                    KONTAK KAMI{" "}
                  </Text>
                  <div className="flex flex-row justify-between w-[50%]">
                    <Image
                      src="/bpsdm-images/icons/kemenhub/Frame 1000006245.png"
                      alt="img-Login"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="/bpsdm-images/icons/kemenhub/Frame 1000006246.png"
                      alt="img-Login"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="/bpsdm-images/icons/kemenhub/Frame 1000006247.png"
                      alt="img-Login"
                      width={50}
                      height={50}
                    />
                    <Image
                      src="/bpsdm-images/icons/kemenhub/Frame 1000006248.png"
                      alt="img-Login"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ backgroundColor: "rgba(5, 0, 61, 0.65)" }}
        >
          <div className="py-4 ">
            <Text
              className="md:text-[#FFFFFF] text-[#1088C8] text-base text-center"
              size="subtitle"
            >
              @
              <CopyrightOutlined className="mr-3" /> Copyright 2024 Copyright
              2024, All Rights Reserved by Badan Pengembangan Sumber Daya
              Manusia Perhubungan
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
