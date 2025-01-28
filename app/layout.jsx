import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Work Flow 360",
  description: "Work Flow 360",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header title="Work Flow"/>
        {children}
        <Footer title="Work Flow"/>
      </body>
    </html>
  );
}
