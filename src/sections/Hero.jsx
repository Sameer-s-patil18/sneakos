import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full px-6 xl:px-10 pt-28 xl:pt-36">
        {/* <p className="text-xl font-montserrat text-coral-red font-bold">Our top collections</p> */}
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[48px] max-sm:leading-[54px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrivals of</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Sneakos</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen py-20 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          className="object-contain w-[80%] sm:w-[60%] xl:w-auto"
        />
        <div className="flex gap-4 absolute bottom-4 sm:bottom-8 left-4 sm:left-8 px-4">
          {shoes.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => setBigShoeImg(image.bigShoe)} // Change image on hover
              className="cursor-pointer"
            >
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
