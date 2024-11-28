import LightningCircle from "../assets/images/lightning-circle.svg?react";
import Button from "../components/shared/Button";
import { RightArrowIcon } from "../assets/icons/index";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-4xl space-y-8 text-center text-dark">
        <p className="flex items-center gap-2 md:gap-4 p-2.5 justify-center w-60 md:w-[19rem] mx-auto bg-white rounded-full font-semibold text-sm md:text-lg md:font-medium">
          <span>
            <LightningCircle className="size-6 md:size-11" />
          </span>
          <span>Bring your vision to life 🎉</span>
        </p>
        <h1 className="leading-relaxed font-ppMori text-4xl font-extrabold md:text-7xl md:font-bold">
          Crafting UX design
          <br />
          for smooth interactions
        </h1>
        <p className="md:text-2xl">
          We Design <span className="text-primary font-bold">UI/UX</span> that
          users love and investors believe in.
        </p>

        <div className="flex gap-4 justify-center">
          <Button>Book Free Consultation</Button>
          <Button outline={true}>
            <RightArrowIcon className="fill-black" />
            See Our Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
