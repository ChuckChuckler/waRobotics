window.onload = function(){
    let timeline = gsap.timeline();
    timeline.from(".title-block", {
        marginTop: "-50px",
        ease: "power3.out",
        duration: 1
    })
    timeline.from(".ghost-robotics-title", {
        marginTop: "-50px",
        ease: "power3.out",
        duration: 1
    }, "<")
    timeline.from(".page-title", {
        marginTop: "-50px",
        ease: "power3.out",
        duration: 1
    }, "<")
}