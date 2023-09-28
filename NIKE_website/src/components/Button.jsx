import React from 'react'

const Button = ({label,iconURL,backgroundColor, textColor,borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
      ? `${backgroundColor} ${textColor} ${borderColor}`:" bg-coral-blue text-white border-coral-blue"} rounded-full w-full"}`}>{label}
    </button>
  )
}

export default Button