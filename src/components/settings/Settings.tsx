import { IconPalette, IconTool, IconUser } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Main } from "@/components/Layout/Main";

import { Outlet } from "react-router-dom";
import SidebarNav from "./sidbar-nav";
import SettingsProfile from "./profile/SettingsProfile";
import path from "path";

export default function Settings() {
  return (
    <>
      <Main fixed>
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-4 lg:my-6" />
        <div className="flex flex-1 flex-col space-y-2 md:space-y-2 overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="top-0 lg:sticky lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex w-full p-1 pr-4 overflow-y-hidden">
            <Outlet />
          </div>
        </div>
      </Main>
    </>
  );
}

const sidebarNavItems = [
  {
    title: "Profile",
    icon: <IconUser size={18} />,
    href: "/settings",
  },
  {
    title: "Account",
    icon: <IconTool size={18} />,
    href: "/settings/account",
  },
  {
    title: "Appearance",
    icon: <IconPalette size={18} />,
    href: "/settings/appearance",
  },
];
