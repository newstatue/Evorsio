import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar.tsx"
import { Link, useMatches } from "@tanstack/react-router"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { Fragment } from "react"
import { cn } from "cn"

export function DashHeader() {
  const { open, isMobile } = useSidebar()

  const matches = useMatches()
  const breadcrumbMatches = matches.filter(
    (match) => match.staticData?.breadcrumb
  )
  return (
    <header className="flex h-10 items-center gap-2 bg-background p-2">
      <div
        className={cn(
          "shrink-0 transition-[width] duration-200 ease-linear",
          open && !isMobile ? "w-(--sidebar-width)" : "w-0"
        )}
      />
      <SidebarTrigger size="icon" />
      <Separator orientation="vertical" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbMatches.map((match, index) => {
            const isLast = index === breadcrumbMatches.length - 1
            const label = match.staticData!.breadcrumb as string
            return (
              <Fragment key={match.id}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink render={<Link to={match.pathname} />}>
                      {label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
