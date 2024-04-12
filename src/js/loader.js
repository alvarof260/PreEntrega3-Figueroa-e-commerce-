export function loaderFn() {
    document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("stop-scrolling");
        const isMobile = window.innerWidth < 768;
        gsap.set(".loader__content", { y: isMobile ? 1700 : 800 });
        gsap.set(".loader__img", { x: isMobile ? 0 : 800 });
        gsap.set(".header__logo , .header__icon-user , .header__icon-bar", {
            y: -25,
            opacity: 0,
        });
        gsap.set(".home__welcome-title", { y: 100, opacity: 0 });
        gsap.set(".scroll-down", { opacity: 0 });
        gsap.set(".modal-new--off", { opacity: 0, x: 100 });

        const tl = gsap.timeline({
            delay: 1,
            onComplete: () => {
                document.body.classList.remove("stop-scrolling");
                document.body.classList.add("content-loaded");
            },
        });
        tl.to(".loader__content", {
            y: 0,
            duration: 1.5,
            stagger: 0.05,
            ease: "power3.inOut",
        })
            .to(
                ".loader__img",
                {
                    x: 0,
                    duration: 3,
                    ease: "power3.inOut",
                },
                "-=2.5"
            )
            .to(
                ".loader__img:not(.loader__img--logo)",
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.inOut",
                },
                "-=1"
            )
            .to(
                ".loader",
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    ease: "power3.inOut",
                },
                "-=0.5"
            )
            .to(
                ".header__logo , .header__icon-user , .header__icon-bar , .home__welcome-title , .scroll-down",
                {
                    y: 0,
                    stagger: 0.1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.inOut",
                },
                "-=0.5"
            )
            /* .to(
                ".modal-new--off",
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.inOut",
                },
                "-=0.5"
            ); */
    });
}