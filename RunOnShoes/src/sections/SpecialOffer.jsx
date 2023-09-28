import {offer} from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
     <section className="flex justfy-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>

      <div className="flex flex-1 flex-col mt-[1px]">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-blue inline-block mt-1 "> Special
          </span>
          <span className="text-coral-blue inline-block mt-1"> 
          </span> Offer
        </h2>
        <p className="mt-3 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selectionsto incredible savingswe offer unparallel value that sets us appart
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities to full your unique desires surpassing the loftiest expectations .Your journey with us is nothing short of exceptional</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now"/>
          <Button label="Learn more" backgroundColor="bg-white"
          borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
     </section>
  )
}

export default SpecialOffer