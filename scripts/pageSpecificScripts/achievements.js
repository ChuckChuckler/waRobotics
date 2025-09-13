const achievements = ["inspire", "connect", "competing"];

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
    timeline.from(".inner-body",{
        marginTop: "300px",
        ease: "power3.out",
        opacity: 0,
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

