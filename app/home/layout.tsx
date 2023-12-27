import ResponsiveAppBar from "@/ui/navbar/Navbar";
import Container from "@mui/material/Container";
import Footer from "@/home/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const maxWidth = "xl";
  return (
    <div className="flex-col h-screen">
      <ResponsiveAppBar maxWidth={maxWidth} />
      <Container maxWidth={maxWidth}>{children}</Container>
      <Footer maxWidth={maxWidth} />
    </div>
  );
}
