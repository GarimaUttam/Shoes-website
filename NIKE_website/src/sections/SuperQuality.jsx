import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section 
     id="about-us"
     className="flex justify-between
     items-center max-lg:flex-col my-[1px] gap-9 w-full max-container mx-10">
      <div className="flex flex-1 flex-col mt-[1px]">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <span 
          className="text-coral-blue inline-block mt-1"> Super
          </span>
          <span 
          className="text-coral-blue inline-block mt-1"> Quality
          </span> Shoes
        </h2>
        <p className="mt-3 lg:max-w-lg info-text">
        Ensuring premium comfort and style ,our meticulously crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedicaition to detail and exellence ensures your satisfaction</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-1 items-center">
        <img
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality