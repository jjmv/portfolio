import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { type PropsWithChildren } from "react";
import clsx from "clsx";

import stylesheet from "~/tailwind.css";
import { Navbar } from "./components/Navbar";
import type { Theme } from "./components/contexts/ThemeContext";
import {
  NonFlashOfWrongTheme,
  ThemeProvider,
  useTheme,
} from "./components/contexts/ThemeContext";
import { getThemeSession } from "./utils/theme.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  {
    rel: "icon",
    href: "/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png",
  },
  {
    rel: "icon",
    href: "/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export type LoaderData = {
  theme: Theme | null;
};

export const loader = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);

  return json({ theme: themeSession.getTheme() });
};

function Document({
  children,
  title = "Javier Moreno",
}: PropsWithChildren<{ title?: string }>) {
  const [theme] = useTheme();

  return (
    <html lang="en" className={`h-full ${clsx(theme)}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
        <NonFlashOfWrongTheme ssrTheme={Boolean(theme)} />
      </head>
      <body className="h-full w-full bg-white p-10 transition duration-500 dark:bg-black">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme}>
      <Document>
        <Outlet />
      </Document>
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const errorMessage = error instanceof Error ? error.message : "Unknown Error";

  return (
    <Document title="Oops!">
      <div className="flex h-full w-full items-center justify-center bg-white">
        <h1>Something went wrong!</h1>
        <pre>{errorMessage}</pre>
      </div>
    </Document>
  );
}
