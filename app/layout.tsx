import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-6">
          &copy; 2025 Jaykant Yadav
        </footer>
      </body>
    </html>
  );
}
