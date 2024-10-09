'use client';

import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Source_Sans_3 } from 'next/font/google'
import '@fontsource/source-sans-3'; // Defaults to weight 400
import { ConfigProvider } from 'antd';
import { customTheme } from '../styles/antd-custom';
import { customComponents } from '../styles/antd-custom-components';
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // Include the weights you want to use
  variable: '--font-source-sans', // CSS variable to use in Tailwind
});

/* 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans.className}>
      <body>
        {/* <SessionProvider> */}
          <ConfigProvider theme={{ token: customTheme, components: customComponents }}>
            {children}
          </ConfigProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
