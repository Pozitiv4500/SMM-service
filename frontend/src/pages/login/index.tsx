import { cn } from "@/shared/lib";
import { buttonVariants } from "@/shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthForm } from "./user-auth-form";
import { useTranslation } from "react-i18next";
import { API_URL, TOKEN_HEADER } from "@/shared/lib/constants";
import { useEffect } from "react";

export function AuthenticationPage() {
  const navigate = useNavigate()
  const { t } = useTranslation();
  useEffect(() => {
    (async () => {
      const res = await fetch(API_URL + "/me", {
        headers: {
          Authorization: TOKEN_HEADER,
        },
      });
      if (res.ok) {
        navigate("/");
      }
    })();
  }, []);
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          {t('login')}
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            SMM service
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Если у тебя не падал прод ты не знал жизни.
              </p>
              <footer className="text-sm">Конфункций</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {t('enter-username')}
              </h1>
            </div>
            <UserAuthForm />
          </div>
        </div>
      </div>
    </>
  )
}