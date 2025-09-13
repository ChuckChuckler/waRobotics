window.onload = function(){
    let timeline = gsap.timeline();
    timeline.from(".camp-flex", {
        marginTop: "-100px",
        ease: "power3.out",
        opacity: 0,
        duration: 1
    }, "<")
}


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
        timeline.to(".black-screen",{
        opacity: 0,
        duration: 0.5
    }, "<")
    timeline.to(".black-screen",{
        display: "none",
    })
    timeline.to(".body",{
        overflow: "auto"
    }, "<")
}