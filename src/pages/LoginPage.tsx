import { LoginForm } from "@/features/auth/LoginForm";
import BackgroundImage from "@/assets/bldg.jpg";
import SchoolLogo from "@/assets/school-logo.png";
const LoginPage = () => {
  return (
    <div className="grid min-h-svh md:p-2.5 lg:grid-cols-2">
      <div className="bg-muted relative hidden lg:block">
        <img
          src={BackgroundImage}
          alt="Image"
          className="absolute inset-0 h-full w-full rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col gap-4 p-3 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-14 items-center justify-center rounded-md md:size-10">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
            <span className="hidden md:block">
              Holy Child Central Colleges Inc.
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
