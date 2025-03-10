import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import { useStore } from "../store";

const Country = () => {

    const location = useLocation()
    const data = location.state
    const dark = useStore((state)=> state.dark)

    console.log(data);

  return (
    <div className={`w-full min-h-screen pb-10 ${dark ? 'bg-[#202C36]' : 'bg-white'}`}>

        <Header/>

        <Link to={"/"}>
        <button className={`flex items-center gap-3 w-[136px] h-[40px] ${dark ? 'bg-[#2B3844]' : 'bg-[#f4f4f4]'} rounded-[6px] shadow-2xl justify-center cursor-pointer mt-[80px] ml-[80px] max-sm:ml-5`}>
        <i className={`fa-solid fa-arrow-left ${dark ? 'text-white' : 'text-[#111517]'}`}></i>
        <p className={`font-light text-[16px] ${dark ? 'text-white' : 'text-[#111517]'}`}>Back</p>
        </button>
        </Link>

        <div className={`flex mt-20 max-2xl:flex-col max-2xl:items-center`}>
            <img className={`w-[560px] h-[401px] object-cover ml-20 max-2xl:ml-0 max-sm:w-[320px] max-sm:h-[229px]`}  src={data.flags.png} alt="" />


            <div className={`ml-60 mt-8 max-2xl:ml-0 max-2xl:w-[560px] max-sm:w-[320px]`}>
                <p className={`font-extrabold text-[32px] ${dark ? 'text-white' : 'text-[#111517]'} mb-7`}>{data.name.common}</p>

                <div className={`flex w-[574px] justify-between max-sm:flex-col max-sm:w-full`}>
                <div>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Native Name: <span className={`font-normal`}>{data.name.common}</span></p>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Population: <span className={`font-normal`}>{data.population}</span></p>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Region: <span className={`font-normal`}>{data.region}</span></p>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Sub Region: <span className={`font-normal`}>{data.subregion ? data.subregion : data.region}</span></p>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-20 max-sm:mb-14`}>Capital: <span className={`font-normal`}>{data.capital[0]}</span></p>
                </div>


                <div>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Top Level Domain: <span className={`font-normal`}>{data.tld}</span></p>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Currencies: <span className={`font-normal`}>{Object.values(data.currencies).map((item: any)=> item.name)}</span></p>
                    <p className={`font-semibold text-[16px] w-[250px] ${dark ? 'text-white' : 'text-[#111517]'} mb-2`}>Languages: <span className={`font-normal`}>{Object.values(data.languages).slice(0, 5).join(", ")}</span></p>
                </div>
                </div>

                <div className={`flex flex-wrap gap-3 w-[600px] max-sm:w-[300px]`}>
                    <p className={`font-semibold text-[16px] ${dark ? 'text-white' : 'text-[#111517]'}`}>Border Countries: </p>
                    {data.borders?.map((each: string)=>{    

                        return <div className={`w-[96px] h-[28px] ${dark ? 'bg-[#2B3844]' : 'bg-[#f4f4f4]'} shadow-2xl rounded-[2px] flex justify-center ${dark ? 'text-white' : 'text-[#111517]'} font-light`}>{each}</div>
                    })}
                </div>

            </div>
        </div>

    </div>
  );
};

export default Country;
