import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { map,SETTINGS } from "../constants/setting";

export function SettingsHome() {
  const settingsArray = Object.values(SETTINGS).map((setting)=> map(setting));

  return (
    <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Projects</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {settingsArray.map((setting) => (
                <SidebarMenuItem key={setting.name}>
                  <SidebarMenuButton asChild>
                    <a href={setting.url}>
                      <span>{setting.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  
  )
}