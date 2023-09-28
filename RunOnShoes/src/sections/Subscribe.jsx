import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col px-5 gap-10 py-[3px] mt-[1px]" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for <span className="text-coral-blue"> 
          Updates
        </span> & Newsletter
      </h3>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2 sm:border sm:border-slate-gray rounded-full ">
        <input type="text"
        placeholder="subscribe$runon.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section> 
  )
}

export default Subscribe