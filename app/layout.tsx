import "./globals.css";
import { abel } from "@/ui/fonts";
import ThemeRegistry from "@/lib/ThemeRegistry";

// @ts-ignore
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={abel.className}>
        <ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
