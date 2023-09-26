import Buttons from "../components/Buttons";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe3 } from "../assets/images";
const Hero = () => {
  return (
    <section
     id="home"
     className="mx-20 w-full flex xl:flex-row flex-col justify-center min-h-screen gap-8 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ">
        <p className="text-xl font-montserrat text-coral-blue">Our Summer Collection</p>
        <h1 className="mt-9 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br/>
          <span className="text-coral-blue inline-block mt-3">RunOn  </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish RunOn arrivals,quality comfort,and innovation for your active life</p>
        <Buttons label="Shop now"><i class="fa-solid fa-circle-arrow-right"></i></Buttons>

        <div className="flex justify-start items-start flex-wrap w-full mt-12 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>

      {/* image-section */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen">
        <img
           src={bigShoe3} 
           alt="shoe collection"
           height={500}
           width={610}
           className="object-contain relative z-10"
           />
      </div>
     </section>
  )
}

export default Hero