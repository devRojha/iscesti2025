// app/layout.tsx
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";


export const metadata = {
  title: "ISCESTI-2025",
  description: "International Conference on Innovations and Sustainability in Civil Engineering: Shaping Tomorrow's Infrastructure",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
