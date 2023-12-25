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
          className={"flex flex-col items-center w-full gap-[40px]"}
          elevation={3}
        >
          <section className={"flex flex-col items-center w-full gap-[20px]"}>
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
              I like to code things from scratch, following conventions is
              important to me and I enjoy a good challenge.
            </Typography>
          </section>

          <section className={"flex flex-col items-center w-full gap-[20px]"}>
            <Typography
              fontWeight={"bold"}
              className={"text-blue-600"}
              variant={"body1"}
            >
              <u>Work Ex</u>perience
            </Typography>

            <Typography textAlign={"center"} variant={"body1"}>
              Total of 5 years as a Web Developer, 3 also as a backend
              developer, my significant expertise is on the Frontend.
            </Typography>
          </section>
          <section className={"flex flex-col items-center w-full gap-[20px]"}>
            <Typography
              fontWeight={"bold"}
              className={"text-blue-600"}
              variant={"body1"}
            >
              <u>Tec</u>hs
            </Typography>

            <Typography textAlign={"center"} variant={"body1"}>
              React-Hooks, Redux, Tailwind/Styled-Components/Scss, Antd/MUI,
              Javascript, NodeJS, Express, Elasticsearch, Jest/Mocha/Chai
            </Typography>
          </section>

          <section className={"flex flex-col items-center w-full gap-[20px]"}>
            <Typography
              fontWeight={"bold"}
              className={"text-blue-600"}
              variant={"body1"}
            >
              <u>Enviro</u>ments
            </Typography>

            <Typography textAlign={"center"} variant={"body1"}>
              Webstorm, CRA, NextJS, Kubernetes, Docker, Micorservices, CI/CD, Agile.
            </Typography>
          </section>
        </Paper>
      </Grid2>

      {/*Blue background*/}
      <div
        className={
          "w-full top-[630px] sm:top-[590px]  md:top-[500px]  lg:top-[530px] absolute  h-[500px] z-[-1] bg-gradient-to-b from-blue-500  to-white"
        }
      />
    </section>
  );
};

export default Bio;
