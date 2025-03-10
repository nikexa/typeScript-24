import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";
import Header from "../Header";


interface Country {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital?: string[];
}

interface StoreState {
  data: Country[];
  fetchData: () => void;
  dark: boolean;
}

function Main() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [modal, setModal] = useState(false);
  const modalRef = useRef<any>(null);
  const navigate = useNavigate();

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const data = useStore((state : StoreState) => state.data);
  const fetchData = useStore((state:StoreState) => state.fetchData);
  const dark = useStore((state:StoreState) => state.dark);

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCountries = data
    .filter((country) => country.name.common.toLowerCase().includes(search))
    .filter((country) => (region ? country.region === region : true));

  function closeModal(e:any) {
    if (!modalRef.current?.contains(e.target)) {
      setModal(false);
    }
  }

  document.addEventListener("mousedown", closeModal);

  return (
    <div className={`w-full min-h-screen ${dark ? "bg-[#202C36]" : "bg-white"}`}>
      <Header />

      <div className={`w-full h-[170px] flex justify-between items-center px-20 max-lg:flex-col max-lg:mt-10 max-lg:mb-10 md:`}>
        <div className={`flex w-[480px] h-[56px] rounded-lg ${dark ? "bg-[#2B3844]" : "bg-white"} shadow-md px-5 items-center gap-3 max-md:w-[343px]`}>
          <i className={`fa-solid fa-magnifying-glass ${dark ? "text-white" : "text-[#C4C4C4]"}`}></i>
          <input
            className={`bg-transparent ${dark ? "text-white" : "text-[#C4C4C4]"} outline-none w-full`}
            type="text"
            placeholder="Search for a country…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          ref={modalRef}
          onClick={() => setModal((prev) => !prev)}
          className={`relative w-[200px] h-[56px] rounded-lg ${dark ? "bg-[#2B3844]" : "bg-white"} shadow-md flex items-center justify-between px-5 cursor-pointer max-lg:mr-[280px] max-md:mr-[140px]`}
        >
          <p className={`font-normal text-[14px] ${dark ? "text-white" : "#111517"}`}>
            {region ? region : "Filter by Region"}
          </p>
          <i className={`fa-solid fa-chevron-down ${dark ? "text-white" : "#111517"} absolute right-5`}></i>

          {modal && (
            <div className={`absolute w-[200px] h-[164px] right-0 top-15 ${dark ? "bg-[#2B3844]" : "bg-white"} shadow-md rounded-[5px] flex flex-col justify-center gap-1`}>
              {regions.map((item) => (
                <button
                  key={item}
                  value={item}
                  onClick={(e) => setRegion(e.currentTarget.value)}
                  className={`w-[50px] pl-6 ${dark ? "text-white" : "#111517"} cursor-pointer`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-4 gap-10 px-20 pb-20 justify-items-center max-xl:grid-cols-2 max-lg:grid-cols-1`}>
        {filteredCountries.length > 0 &&
          filteredCountries.map((item) => (
            <div
              key={item.name.common}
              onClick={() => navigate(`/${item.name.common}`, { state: item })}
              className={`w-[264px] h-[336px] ${dark ? "bg-[#2B3844]" : "bg-white"} shadow-md rounded-lg cursor-pointer`}
            >
              <img
                className={`w-full h-[160px] object-cover rounded-lg`}
                src={item.flags.png}
                alt={item.name.common}
              />
              <div className={`p-5 ${dark ? "text-white" : "text-[#111517]"} flex flex-col gap-1`}>
                <p className={`font-extrabold text-[18px] mb-4`}>
                  {item.name.common}
                </p>
                <p className={`text-[14px] font-semibold`}>
                  Population: <span className={`font-light`}>{item.population}</span>
                </p>
                <p className={`text-[14px] font-semibold`}>
                  Region: <span className={`font-light`}>{item.region}</span>
                </p>
                <p className={`text-[14px] font-semibold`}>
                  Capital: <span className={`font-light`}>{item.capital?.[0]}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Main;
