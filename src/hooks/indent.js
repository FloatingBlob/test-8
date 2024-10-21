import { useEffect } from "react";

export const useIndentToggle = () => {
    useEffect(() => {
        const indentText = document.querySelector(".indent-text");
        const tap = () => {
            indentText.classList.toggle("tap");
        };

        indentText.addEventListener("click", tap);

        return () => {
            indentText.removeEventListener("click", tap);
        };
    }, []);
};