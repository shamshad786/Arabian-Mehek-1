import './globals.css';
import { Marcellus, Open_Sans } from 'next/font/google';

const marcellus = Marcellus({
  variable: '--font-marcellus',
  subsets: ['latin'],
  weight: '400',
});

// Corrected variable name and font function
const openSans = Open_Sans({
  variable: '--font-open-sans', 
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Arabian Mehek',
  description: 'It is a landing page for Arabian Mehek',
  icons: {
    icon: '/Logo.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // Corrected variable name from 'roboto' to 'openSans' and added both to the class
        className={`${marcellus.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}