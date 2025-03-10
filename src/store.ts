import axios from "axios";
import { create } from "zustand";

interface Props {
    data:[]
    fetchData : ()=> void
    dark:boolean,
    SetDark: ()=> void
}

export const useStore = create<Props>((set) => ({
    data:[],
    fetchData: async () => {
        const res = await axios.get("https://restcountries.com/v3.1/all");
        set({data: res.data})
    },
    dark:false,
    SetDark: ()=> set((state)=> ({dark: !state.dark}))
}));