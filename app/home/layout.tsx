import ResponsiveAppBar from "@/ui/navbar/Navbar";
import Container from "@mui/material/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col h-screen">
      <div className="w-full">
        <ResponsiveAppBar />
      </div>
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
}
