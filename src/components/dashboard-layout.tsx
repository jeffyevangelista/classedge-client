import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Outlet } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Bell, MessageCircleMore } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <p>Welcome back, John - 1st Sem - SY. 2025</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Button variant={"link"}>
                <Bell className="h-[1.5rem] w-[1.5rem]" />
              </Button>

              {/* <Button variant={"link"}> */}
              <MessageCircleMore className="text-primary h-6 w-6 stroke-current" />

              {/* </Button> */}
              <ModeToggle />

              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
