import {
  createFileRoute,
  Outlet,
} from "@tanstack/react-router"
import {
  SidebarInset,
  SidebarProvider,

} from "@/components/ui/sidebar"
import { type CSSProperties } from "react"
import { DashHeader } from "@/components/layout/dash/dash-header.tsx"
import { DashSidebar } from "@/components/layout/dash/dash-sidebar.tsx"

export const Route = createFileRoute("/dash")({
  component: RouteComponent,
})

function RouteComponent() {
  const sidebarStyle = { "--sidebar": "transparent" } as CSSProperties
  return (
    <SidebarProvider style={sidebarStyle}>
      <DashHeader />
      <SidebarInset className="flex min-h-svh">
        <DashSidebar />
        <main className="flex flex-1 flex-col bg-background p-2">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
