import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen bg-[#202C36] flex justify-center items-center flex-col'>

        <p className='text-6xl text-white font-black'>Go Back To The Kitchen</p>

        <button className='w-[200px] h-[50px] bg-red-50 rounded-2xl cursor-pointer mt-7'><Link to={"/"}>Main</Link></button>
    </div>
  )
}

export default ErrorPage