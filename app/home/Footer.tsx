import { abel, inter } from "@/ui/fonts";
import Container from "@mui/material/Container";
import { Breakpoint } from "@mui/system";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid2 from "@mui/material/Unstable_Grid2";

const Footer = ({ maxWidth }: { maxWidth: Breakpoint }) => {
  return (
    <footer className={`${abel.className} bg-blue-700 mt-[100px]`}>
      <Container maxWidth={maxWidth}>
        <Grid2 className={"flex flex-col items-center"}>
          <header className={"p-[60px] text-center text-white text-[50px]"}>
            Where you can find me ?{" "}
          </header>
          <List className={"w-min"}>
            <ListItem>Linkeding</ListItem>
            <ListItem>Linkeding</ListItem>
            <ListItem>Linkeding</ListItem>
          </List>
        </Grid2>
      </Container>
    </footer>
  );
};
export default Footer;
