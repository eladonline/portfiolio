import { lilita_One } from "@/ui/fonts";
import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const projectsMeta = [
  {
    title: "VR-Era",
    source: "https://vr-era.netlify.app/",
    desc: "A site I designed and created",
  },
  { title: "INX", source: "https://www.inx.co", desc: "Crypto Token System" },
  {
    title: "Agora",
    source: "https://agorareal.com/",
    desc: "Real Estate Software",
  },
  {
    title: "Salmon Coin",
    source: "https://thesalmoncoin.com/",
    desc: "Crypto Coin",
  },
];
const Projects = () => {
  return (
    <section className={"mt-[100px] "}>
      <header
        className={`text-[50px]  lg:text-[70px] ${lilita_One.className} text-center mb-[50px] md:mb-[80px]`}
      >
        Projects
      </header>

      <Grid2
        rowSpacing={6}
        columnSpacing={6}
        className={"p-[30px]"}
        justifyContent={{xs:"center",md:"space-between"}}
        container
      >
        {projectsMeta.map(({ title, source, desc }) => {
          return (
            <Grid2 key={title} xs={9} sm={6} lg={4} xl={3}>
              <a className={" text-amber-200 "} target={"_blank"} href={source}>
                <Box
                  className={`bg-amber-700 transition duration-300 group hover:bg-amber-900 text-center p-4 pt-[40px] rounded-[5px] flex flex-col cursor-pointer w-full h-[150px]  items-center`}
                  gap={1}
                >
                  <Typography
                    className={
                      "group-hover:text-amber-100  group-hover:scale-110 transition"
                    }
                    fontWeight={"bold"}
                    letterSpacing={2}
                    variant={"h6"}
                  >
                    {title}
                  </Typography>
                  <Typography
                    className={"decoration-none text-amber-100"}
                    style={{ textDecorationLine: "none" }}
                    variant={"subtitle2"}
                  >
                    {desc}
                  </Typography>
                </Box>
              </a>
            </Grid2>
          );
        })}
      </Grid2>
    </section>
  );
};

export default Projects;
