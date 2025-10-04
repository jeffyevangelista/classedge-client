import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="bg-background text-foreground min-h-svh antialiased">
      <div className="relative flex min-h-svh flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
