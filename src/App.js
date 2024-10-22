import React from "react";
import "swiper/css";
import "./App.css";
import { useLocalStorage } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation, HashNavigation } from "swiper/modules";
import NavBar from "./components/navbar/Navbar.js";
import Home from "./components/home/dawn.js"
import About from "./components/about/noon.js";
import Achievements from "./components/achievements/dusk.js";
import Other from "./components/other/midnight.js";

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
                modules={[Mousewheel, Pagination, Navigation, HashNavigation]}
            >
                <SwiperSlide data-hash="dawn"><Home darkMode={darkMode} /></SwiperSlide>
                <SwiperSlide data-hash="noon"><About darkMode={darkMode} /></SwiperSlide>
                <SwiperSlide data-hash="dusk"><Achievements /></SwiperSlide>
                <SwiperSlide data-hash="midnight"><Other /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;