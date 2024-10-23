import React from "react";
import "swiper/css";
import "./App.css";
import { useLocalStorage } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation, HashNavigation } from "swiper/modules";
import NavBar from "./components/navbar/Navbar.js";
import Landing from "./components/landing/home.js"
import About from "./components/about/description.js";
import FAQ from "./components/faq/questions.js";
import Agenda from "./components/agenda/times.js";
import Roles from "./components/roles/charachters.js";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setdarkMode] = useLocalStorage("darkMode", preference);

    return (
        <div theme={darkMode ? "dark" : "light"}>
            <NavBar setDarkMode={setdarkMode} darkMode={darkMode} />
            
            <Swiper 
                direction={"vertical"} 
                slidesPerView={1} 
                mousewheel={true} 
                hashNavigation={{watchState: true}}
                pagination={{clickable: true}}
                speed={750}
                modules={[Mousewheel, Pagination, Navigation, HashNavigation]}
            >
                <SwiperSlide data-hash="Home"><Landing /></SwiperSlide>
                <SwiperSlide data-hash="About"><About /></SwiperSlide>
                <SwiperSlide data-hash="FAQ"><FAQ /></SwiperSlide>
                <SwiperSlide data-hash="Agenda"><Agenda /></SwiperSlide>
                <SwiperSlide data-hash="Roles"><Roles /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;