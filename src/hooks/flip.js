import { useEffect } from "react";

export const useFlipCard = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".box .card");

        const tap = (event) => {
            event.stopPropagation();  // Prevents the event from bubbling up
            event.currentTarget.classList.toggle("is-flipped");
        };

        cards.forEach(card => {
            card.addEventListener("click", tap);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener("click", tap);
            });
        };
    }, []);
};