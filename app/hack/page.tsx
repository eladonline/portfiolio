import { inter } from "@/ui/fonts";
import Button from "@mui/material/Button";

export default async function Page() {
  return (
    <main className={`${inter.className} flex gap-x-10`}>
      <div className={"text-4xl"}>Dashboard</div>

      <Button variant="contained">my btn</Button>
    </main>
  );
}
