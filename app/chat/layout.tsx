import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  );
}
