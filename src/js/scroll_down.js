export function scrollDown() {
    const scrollDownAnimation = gsap.to(".scroll-down", {
        y: "+=20", // Cambia este valor para ajustar la cantidad de bounce
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power3.inOut",
    });

    // Detener la animación cuando se desplace hasta cierta posición
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            // Cambia este valor para ajustar la posición de scroll
            scrollDownAnimation.pause();
            document.querySelector(".scroll-down").style.opacity = 0;
        }
        if (window.scrollY < 250) {
            // Cambia este valor para ajustar la posición de scroll
            document.querySelector(".scroll-down").style.opacity = 1;
            scrollDownAnimation.play();
        }
    });
}