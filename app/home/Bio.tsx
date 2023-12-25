import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
const Bio = () => {
  return (
    <section
      className={
        "flex flex-col items-center justify-center w-full gap-[50px] mt-[80px] "
      }
    >
      <Grid2 container xs={12} md={7}>
        <Paper
          sx={{ padding: "30px 50px" }}
          className={"flex flex-col items-center w-full gap-[20px]"}
          elevation={3}
        >
          <div
            className={
              "bg-amber-500 rounded-[50%] h-[80px] w-[80px] flex justify-center items-center"
            }
          >
            <div
              className={
                " bg-[url('/code.svg')] bg-no-repeat bg-contain bg-center h-[40px] w-[40px]"
              }
            />
          </div>

          <Typography fontWeight={"bold"} variant={"h6"}>
            Senior Fullstack Developer
          </Typography>

          <Typography textAlign={"center"} variant={"body1"}>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </Typography>
        </Paper>
      </Grid2>

      {/*Blue background*/}
      <div
        className={
          "w-full top-[630px] sm:top-[590px]  md:top-[500px]  lg:top-[530px] absolute bg-blue-500 h-[500px] z-[-1]"
        }
      />
    </section>
  );
};

export default Bio;
