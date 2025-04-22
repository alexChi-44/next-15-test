import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ST Messenger",
  description: "Chat application",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    icon: [{ url: "/globe.svg" }, { url: "/dogs.svg" }],
    apple: [{ url: "/window.svg" }],
  },
  appleWebApp: {
    capable: true,
    title: "ST Messenger",
    statusBarStyle: "default",
  },
};
