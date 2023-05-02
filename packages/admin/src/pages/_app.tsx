import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
export const isSSR = typeof window === "undefined";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const subdomainPaths = {
    admin: "admin",
  };

  const isSubdomainRoute = () => {
    const paths = Object.values(subdomainPaths).filter((path) =>
      router.pathname.startsWith(path)
    );
    return !!paths.length;
  };

  if (!isSSR) {
    if (
      window.location.host.includes(subdomainPaths.admin) &&
      !isSubdomainRoute()
    ) {
      return <Component {...pageProps} />;
      // show 404 or redirect somewhere else
    } else {
      window.location.hostname = subdomainPaths.admin + ".localhost";
      // @refresh reset
    }
  }
  return <Component {...pageProps} />;
}
