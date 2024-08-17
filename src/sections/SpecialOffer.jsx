import { arrowRight } from "../assets/icons"
import {image} from "../assets/images"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex 
    justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
        src = {image}
        width={700}
        height={600}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="lg:max-w-lg font-palanquin capitalize text-4xl  font-bold">
          
          <span className="text-coral-red "> Special</span> Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines experiences with 
        unbeatable deals.From premier selections to the incredible 
        savings, we offer unparalled value that sets us apart at 
        competitve price.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor, 
          sit amet consectetur 
          adipisicing elit. Eius ipsum saepe 
          commodi nulla, harum quam cum impedit.
           Corporis, explicabo earum.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop now" 
        iconURL={arrowRight}  
        />
        <Button label= "Learn more"
        backgroundColor = "bg-white"
        borderColor = "border-slate-gray"
        textColor = "text-slate-gray"
        />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer