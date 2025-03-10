import { Link } from 'react-router-dom'
import { useStore } from '../store'

const Header = () => {
    const dark = useStore((state)=> state.dark)
    const SetDark = useStore((state)=> state.SetDark)
  return (
    <div className={`w-full h-[80px] ${dark ? "bg-[#2B3844]" : "bg-white"} shadow-md flex justify-between items-center px-20 max-md:px-10`}>
    <p className={`font-extrabold text-[24px] ${dark ? "text-white" : "text-[#111517]"} max-md:text-[14px]`}>
      <Link to={"/"}>Where in the world?</Link>
    </p>
    <div onClick={SetDark} className="flex items-center gap-4 cursor-pointer">
      <i className={`fa-solid fa-moon ${dark ? "text-white" : "text-[#111517]"}`}></i>
      <p className={`font-semibold text-[16px] ${dark ? "text-white" : "text-[#111517]"} max-md:text-[12px]`}>Dark Mode</p>
    </div>
  </div>
  )
}

export default Header