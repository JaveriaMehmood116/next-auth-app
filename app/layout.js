import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Next Auth Lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
