import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you want to use
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you want to use
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
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}