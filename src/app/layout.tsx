import type { Metadata } from "next";
import "@/app/globals.css"; // Global styles
import DragDropProvider from "@/components/DragDropProvider"; // Import the provider

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Test your knowledge with interactive quizzes!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <DragDropProvider>{children}</DragDropProvider>
      </body>
    </html>
  );
}
