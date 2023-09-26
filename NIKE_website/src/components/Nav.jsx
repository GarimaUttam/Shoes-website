// import {headerLogo} from "../assets/images";
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x pt-4 z-10 w-full pb-1">
      <nav className="flex justify-between items-center max-container">
         <a href="/"> 
        <img src="./headerLogo.png" alt="/" width={200} height={90}/>
         </a> 

         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
         </ul>
         <div className="hidden max-lg:block">
          <img src={hamburger}
          alt="Hamburger"
          width={25}
          height={25}
          />
         </div>
      </nav>
    </header>
  )
}

export default Nav;