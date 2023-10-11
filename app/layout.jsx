import { Poppins } from 'next/font/google';
import Header from './componets/Header';
import NavBar from "./componets/NavBar";
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'POST Demo',
  description: 'Mern stack developement',
  keywords:
    'Basic server side Component and client side component implementation',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* <Header /> */}
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
