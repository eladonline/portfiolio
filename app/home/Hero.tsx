import { abel, lilita_One } from "@/ui/fonts";

const Hero = () => {
  return (
    <section
      className={
        "flex flex-col items-center justify-center w-full gap-[50px] mt-[40px]"
      }
    >
      <header className={`flex flex-col items-center `}>
        <h6
          className={`text-[30px]  lg:text-[70px] ${lilita_One.className} m-0 `}
        >
          Senior Fullstack Developer
        </h6>
        <h6 className={`m-0 ${abel.className} text-[16px] md:text-[26px] `}>
          I love what I do, and always try doing it better.
        </h6>
      </header>

      <div
        className={
          "w-[200px] h-[200px] bg-[url('/avatar.jpg')] rounded-[50%] bg-no-repeat bg-cover bg-center"
        }
      />
    </section>
  );
};

export default Hero;
