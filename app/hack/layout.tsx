import ResponsiveAppBar from "@/ui/navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col h-screen">
      <div className="w-full">
        <ResponsiveAppBar />
      </div>
      <div className="grow p-1 md:overflow-y-auto">{children}</div>
    </div>
  );
}
