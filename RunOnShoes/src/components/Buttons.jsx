const Buttons = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-blue rounded-full text-white border-coral-blue">{label}
    <i class="fa-solid fa-circle-arrow-right"></i>
    </button>
  )
}

export default Buttons