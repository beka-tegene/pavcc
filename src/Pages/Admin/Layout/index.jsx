import React from 'react'
import { AdminSidebar } from '../Sidebar'
import { Nav } from '../Nav'

export const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-11 h-screen">
    <div className="col-span-2 h-full">
      <AdminSidebar />
    </div>
    <div className="col-span-9 h-full">
      <Nav />
      <main className="max-h-[91vh] overflow-y-scroll h-full">{children}</main>
    </div>
  </div>
  )
}
