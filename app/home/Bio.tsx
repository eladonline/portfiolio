"use client";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { useState } from "react";

const PaperComponent = ({ children }: { children: React.ReactNode }) => {
  const [elevation, setElevation] = useState<number>(3);

  return (
    <Paper
      onMouseOver={() => setElevation(16)}
      onMouseOut={() => setElevation(3)}
      sx={{ padding: "30px 50px", height: "752px" }}
      className={"flex flex-col items-center w-full gap-[40px]"}
      elevation={elevation}
    >
      {children}
    </Paper>
  );
};

const Bio = () => {
  return (
    <section
      className={
        "flex flex-col items-center justify-center w-full gap-[50px] mt-[80px] "
      }
    >
      <Grid2 justifyContent={"space-around"} rowSpacing={5} container>
        <Grid2 xs={12} lg={5}>
          <PaperComponent>
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
                <u>Environ</u>ments
              </Typography>

              <Typography textAlign={"center"} variant={"body1"}>
                Webstorm, CRA, NextJS, Kubernetes, Docker, Microservices, CI/CD,
                Agile.
              </Typography>
            </section>
          </PaperComponent>
        </Grid2>
        <Grid2 xs={12} lg={5}>
          <PaperComponent>
            <section className={"flex flex-col items-center w-full gap-[20px]"}>
              <div
                className={
                  "bg-amber-500 rounded-[50%] h-[80px] w-[80px] flex justify-center items-center"
                }
              >
                <div
                  className={
                    " bg-[url('/project.svg')] bg-no-repeat bg-contain bg-center h-[40px] w-[40px]"
                  }
                />
              </div>
              <Typography fontWeight={"bold"} variant={"h6"}>
                My Latest Project
              </Typography>

              <Typography
                fontWeight={"bold"}
                className={"text-blue-600"}
                variant={"body1"}
                textAlign={"center"}
              >
                <u>KWAAP</u> <br /> (Kubernetes Web App Protection)
              </Typography>

              <Typography variant={"body1"}>
                A SPA to configure and visualize site traffic.
              </Typography>
              <List disablePadding subheader={"In the app:"}>
                <ListItem>Dashboards with statistics graphs.</ListItem>
                <ListItem>Responsive(onType) advanced forms.</ListItem>
                <ListItem>
                  Big Data Visualization with advanced and interactive tables.
                </ListItem>
              </List>
            </section>

            <section className={"flex flex-col items-center w-full gap-[20px]"}>
              <Typography
                fontWeight={"bold"}
                className={"text-blue-600"}
                variant={"body1"}
              >
                <u>Project achie</u>vement
              </Typography>

              <Typography textAlign={"center"} variant={"body1"}>
                Succeeded to production and sold licenses
              </Typography>
            </section>
          </PaperComponent>
        </Grid2>
      </Grid2>

      {/*Blue background*/}
      <div
        className={
          "w-full top-[630px] sm:top-[590px]  md:top-[500px]  lg:top-[530px] absolute h-[1700px] lg:h-[900px] z-[-1] bg-gradient-to-b from-blue-500  to-white"
        }
      />
    </section>
  );
};

export default Bio;
