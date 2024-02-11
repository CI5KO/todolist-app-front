import "../utils/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const APP_NAME = "Todo App";
const APP_DEFAULT_TITLE = "Todo App";
const APP_TITLE_TEMPLATE = "Todo App | %s";
const APP_DESCRIPTION = "Todo App";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  icons: {
    icon: "/icon-256x256.png",
  },
  manifest: "/manifest.json",
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
