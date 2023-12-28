import { abel, inter } from "@/ui/fonts";
import Container from "@mui/material/Container";
import { Breakpoint } from "@mui/system";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const linkedin = {
  source: "https://www.linkedin.com/in/elad-ben-aderet-b29386139",
  title: "Linkedin",
  icon: "/linkedin.svg",
};

const email = {
  source: "eladonline91@gmail.com",
  title: "Mail",
  icon: "/mail.svg",
};

const iconsStyle = ` rounded-[50%] flex items-center justify-center border-1 h-[40px] w-[45px]`;

const Footer = ({ maxWidth }: { maxWidth: Breakpoint }) => {
  return (
    <footer className={`${abel.className} bg-blue-700 mt-[100px] pb-[100px] `}>
      <Container maxWidth={maxWidth}>
        <Grid2 className={"flex flex-col items-center"}>
          <header className={"p-[60px] text-center text-white text-[50px]"}>
            Where you can find me ?{" "}
          </header>
          <Grid2 container className={"flex flex-col"} spacing={10}>
            <Grid2
              className={"flex flex-col items-center gap-[20px]"}
              spacing={4}
            >
              <Box className={iconsStyle}>
                <img
                  alt={linkedin.title}
                  height={50}
                  width={50}
                  src={linkedin.icon}
                />{" "}
              </Box>
              <a className={"text-white"} href={linkedin.source}>
                <Typography color={"white"}>{linkedin.title}</Typography>

              </a>
            </Grid2>

            <Grid2
              className={"flex flex-col items-center gap-[20px]"}
              spacing={4}
            >
              <Box className={`top-[5px] ${iconsStyle} relative`}>
                <img
                  alt={email.title}
                  height={50}
                  width={50}
                  src={email.icon}
                />{" "}
              </Box>

              <Typography color={"white"}>{email.source}</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};
export default Footer;
