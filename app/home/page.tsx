import { inter } from "@/ui/fonts";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

export default async function Page() {
  return (
    <main
      className={`${inter.className} pt-[50px] md:pt-[100px] flex-col gap-x-10 content-column`}
    >
      <Typography variant={"h5"}>Powered By:</Typography>
      <Box className={"text-4xl   flex-grow mh-[30dvh] mt-6 mb-6"}>
        <Grid2
          columns={{ xs: 12, md: 14 }}
          justifyContent={"space-around"}
          alignItems={"center"}
          container
          rowGap={3}
        >
          <Grid2 container justifyContent={"center"} xs={8} md={4}>
            <div
              className={
                "w-[70%] bg-[url('/next.svg')] h-[150px] bg-no-repeat bg-contain bg-center"
              }
            />
          </Grid2>
          <Grid2
            xs={8}
            md={4}
            className={
              "bg-[url('/tailwindcss.svg')] h-[150px] bg-no-repeat bg-cover bg-center"
            }
          />
          <Grid2
            className={
              "bg-[url('/materialui.png')] h-[150px] bg-no-repeat bg-cover bg-center"
            }
            xs={8}
            md={4}
          />
        </Grid2>
      </Box>

      <Button variant="contained">my btn</Button>
    </main>
  );
}
