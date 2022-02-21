gsap.fromTo("#h1", { color: "white", y: -200 }, { ease: "bounce", duration: 3, y: 0, color: "black" })
gsap.fromTo("form", { y: -500, backgroundColor: "grey" }, { y: 0, duration: 5, ease: "elastic", backgroundColor: "silver" }, +5)
gsap.fromTo("#header", { y: -300, x: -500 }, { y: 0, duration: 5, ease: "elastic", x: 0 })