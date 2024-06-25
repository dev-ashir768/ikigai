import { Inter } from "next/font/google";
import "./globals.css";
import Sidenav from "@/components/Sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ikigai",
  description: "Create by ashir arif 👨‍💻",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidenav>{children}</Sidenav>
      </body>
    </html>
  );
}
