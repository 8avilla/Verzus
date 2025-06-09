"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Layout, Menu, Button, Drawer, Space, Badge } from "antd"
import { MenuOutlined, UserOutlined, ShoppingOutlined, FireFilled } from "@ant-design/icons"
import SearchDialog from "@/components/search-dialog"

const { Header } = Layout

export default function NavbarAntd() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  // Elementos del menú para reutilizar en desktop y mobile
  const menuItems = [
    {
      key: "especiales",
      label: (
        <Link href="/products" style={{ color: "#e32b2b", fontWeight: "bold" }}>
          <Space>
            <FireFilled style={{ color: "#e32b2b" }} />
            ESPECIALES
          </Space>
        </Link>
      ),
    },
    {
      key: "camisetas",
      label: <Link href="/products?category=camisetas">CAMISETAS</Link>,
    },
    {
      key: "sudaderas",
      label: <Link href="/products?category=sudaderas">SUDADERAS</Link>,
    },
    {
      key: "pantalones",
      label: <Link href="/products?category=pantalones">PANTALONES</Link>,
    },
    {
      key: "accesorios",
      label: <Link href="/products?category=accesorios">ACCESORIOS</Link>,
    },
  ]

  return (
    <Header
      style={{
        background: "white",
        padding: "0 20px",
        height: "64px",
        lineHeight: "64px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center" }}>
        <Image src="/images/logo-vz.png" alt="Logo Verzus" width={48} height={48} style={{ marginRight: "12px" }} />
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>VERZUS</span>
      </Link>

      {/* Desktop Menu */}
      <div style={{ display: "none", "@media (min-width: 768px)": { display: "block" } }}>
        <Menu
          mode="horizontal"
          items={menuItems}
          style={{
            border: "none",
            background: "transparent",
            fontWeight: "bold",
          }}
          className="desktop-menu"
        />
      </div>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchDialog />

        <Button type="text" icon={<UserOutlined style={{ fontSize: "20px" }} />} style={{ marginRight: "8px" }} />

        <Badge count={0} showZero={false}>
          <Button
            type="text"
            icon={<ShoppingOutlined style={{ fontSize: "20px" }} />}
            onClick={() => setCartOpen(true)}
          />
        </Badge>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "20px" }} />}
          onClick={() => setMobileMenuOpen(true)}
          style={{
            marginLeft: "8px",
            display: "block",
            "@media (min-width: 768px)": {
              display: "none",
            },
          }}
        />
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image src="/images/logo-vz.png" alt="Logo Verzus" width={32} height={32} style={{ marginRight: "8px" }} />
            <span style={{ fontSize: "18px", fontWeight: "bold" }}>VERZUS</span>
          </div>
        }
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{
            border: "none",
            fontWeight: "bold",
          }}
        />
      </Drawer>

      {/* Estilos adicionales para hover en el menú */}
      <style jsx global>{`
        .ant-menu-horizontal > .ant-menu-item::after,
        .ant-menu-horizontal > .ant-menu-submenu::after {
          border-bottom: 2px solid #000 !important;
          transition: all 0.3s ease;
        }
        
        .ant-menu-horizontal > .ant-menu-item:hover::after,
        .ant-menu-horizontal > .ant-menu-submenu:hover::after {
          border-bottom: 2px solid #000 !important;
        }
        
        .ant-menu-horizontal > .ant-menu-item:has(a[style*="color: #e32b2b"]):hover::after {
          border-bottom: 2px solid #e32b2b !important;
        }
        
        .ant-menu-horizontal > .ant-menu-item-selected::after {
          border-bottom: 2px solid #000 !important;
        }
        
        .ant-menu-horizontal > .ant-menu-item-selected:has(a[style*="color: #e32b2b"])::after {
          border-bottom: 2px solid #e32b2b !important;
        }
        
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </Header>
  )
}
