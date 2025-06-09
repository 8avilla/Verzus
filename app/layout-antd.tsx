"use client"

import type React from "react"
import { ConfigProvider } from "antd"
import NavbarAntd from "@/components/navbar-antd"

export default function AntdLayout({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e32b2b",
          colorLink: "#000000",
          fontFamily: "inherit",
        },
        components: {
          Menu: {
            horizontalItemHoverColor: "#000000",
            horizontalItemSelectedColor: "#000000",
            itemHoverColor: "#000000",
            itemSelectedColor: "#000000",
          },
          Button: {
            primaryColor: "#ffffff",
            defaultBg: "transparent",
          },
        },
      }}
    >
      <NavbarAntd />
      {children}
    </ConfigProvider>
  )
}
