import { footerLinks } from "../constants"
import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"
import { copyrightSign } from "../assets/icons"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col justify-evenly items-start">
          <a href="/">
            <img
             src="./sneakers.png"
             width={150}
             height={46}/>
            <p className="mt-3 text-white-400 font-montserrat  hover:text-slate-gray  cursor-pointer "
            >
            <span className="text-coral-blue inline-block mt-3 font-bold text-2xl">RunOn  </span> Shoes</p> 
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm
          ">Get shoes ready for the new term at your nearest Run On store. Find Your perfect Size In Store. Get Reward</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) =>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img
                src={icon.src}
                alt={icon.alt}
                width
                />
                </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key ={section.title}>
            <h4 className="text-white font-montserrat text-2xl font-medium leading-normal mb-6">
              {section.title}</h4>
            <ul>
              {section.links.map((link) => (
                <li className="mt-3 text-white-400 font-montserrat leading-normal hover:text-slate-gray text-sm cursor-pointer"
                key={link.name}>
                  <a href="/">{link.name}</a>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
      </div>
      

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:flex-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                <img
                src={copyrightSign}
                alt="copy right sign"
                width={20}
                height={20}
                className="rounded-full m-0"
                />
                <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>

      </div>
    </footer>
  )
}

export default Footer