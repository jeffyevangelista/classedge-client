import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeftIcon } from "lucide-react";
import SchoolLogo from "@/assets/school-logo.png";
import ForgotPasswordForm from "@/features/auth/ForgotPasswordForm";
import { Link } from "react-router";

const ForgotPasswordPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8">
      <Card className="z-1 w-full border-none shadow-md sm:max-w-md">
        <CardHeader className="gap-6">
          <div className="flex items-center gap-2">
            <img className="size-9" src={SchoolLogo} alt="School Logo" />
            <span className="text-sm font-semibold">
              Holy Child Central Colleges Inc.
            </span>
          </div>

          <div>
            <CardTitle className="mb-1.5 text-2xl">Forgot Password?</CardTitle>
            <CardDescription className="text-base">
              Enter your email to receive an OTP for password reset.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <ForgotPasswordForm />

          <Link
            to="/login"
            className="group mx-auto flex w-fit items-center gap-2"
          >
            <ChevronLeftIcon className="size-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span>Back to login</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
