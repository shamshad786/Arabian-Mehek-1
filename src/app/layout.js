import { Amiri, Open_Sans } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  // Change to all lowercase
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Arabian Mehek ",
  description: "It is a landing page for Arabian Mehek",
  icons: {
    icon: "/Logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${amiri.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}