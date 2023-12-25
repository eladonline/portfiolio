import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";

const PoweredBy = () => {
  return (
    <>
      <Typography variant={"body1"}>Powered By:</Typography>
      <Box className={"flex-grow mt-2 mb-2"}>
        <Grid2
          justifyContent={"space-around"}
          alignItems={"center"}
          container
          rowGap={{ xs: 5, sm: 3 }}
        >
          <Grid2 container justifyContent={"center"} xs={6} md={3}>
            <div
              className={
                "w-[70%] bg-[url('/next.svg')] h-[80px] lg:h-[60px] bg-no-repeat bg-contain bg-center"
              }
            />
          </Grid2>
          <Grid2
            xs={6}
            md={3}
            className={
              "bg-[url('/tailwindcss.svg')]  h-[80px] lg:h-[60px] bg-no-repeat bg-cover bg-center"
            }
          />
          <Grid2
            className={
              "bg-[url('/materialui.png')]  h-[80px] lg:h-[60px] bg-no-repeat bg-cover bg-center"
            }
            xs={6}
            md={3}
          />
        </Grid2>
      </Box>
    </>
  );
};

export default PoweredBy;
