"use client"

import * as React from "react"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { FileIcon } from "lucide-react"

const files = [
  {
    label: "profile-card.tsx",
    value: "profile-card.tsx",
  },
  {
    label: "page.tsx",
    value: "page.tsx",
  },
]

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  activeFile: string
}

export function AppSidebar({ activeFile, ...props }: AppSidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Files</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {files.map((file) => (
                <SidebarMenuItem key={file.value}>
                  <SidebarMenuButton asChild isActive={activeFile === file.value}>
                    <Link href={`/?file=${encodeURIComponent(file.value)}`}>
                      <FileIcon />
                      {file.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
