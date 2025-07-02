function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function redirect(url){
  window.open(url, "_blank");
}

function openPage(page){
  window.location.href = `${page}.html`;
}

document.getElementById("gitIcon").addEventListener("mouseenter", function(){
  document.getElementById("gitInfo").innerText = "Github";
});

document.getElementById("gitIcon").addEventListener("mouseleave", function(){
  document.getElementById("gitInfo").innerText = "";
});

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(TextPlugin, SplitText);

let animPlaying = true;

//window.onload animations

window.onload = function(){  
  ScrollTrigger.refresh();
  let timeline = gsap.timeline();
  let splitText1 = SplitText.create(".wa-robotics-title", {
    type: "chars, words",
    charsClass: "char",
  });
  let chars = splitText1.chars;

  new TypeIt(".wa-teams-title", {
    speed: 55
  }).go();

  sleep(3000).then(()=>{
    document.getElementById("wa-robotics-title").style.opacity = 1;
    timeline.to("body", {
      duration: 2,
      backgroundColor: "#410b14ff"
    })
    timeline.from(chars, {
      duration: 3,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 130,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
      onComplete: () => {
          splitText1.revert();
          document.getElementById("wa-robotics-title").removeAttribute("aria-hidden");
      }
    }, "<")
    timeline.to(".name-title-hr", {
      duration: 2,
      opacity: 1,
      ease: "power3.out"
    }, "<")
    timeline.to(".name-title-hr", {
      duration: 2,
      width: "80%",
      ease: "power3.out"
    }, "<")
    timeline.to(".banner-img", {
      duration: 1.5,
      opacity: 1,
      width: "98%"
    }, "<")
    timeline.to(".navbar", {
      duration: 2,
      top: "0px",
      ease: "power3.out"
    }, "<")
    timeline.to(".footer", {
      duration: 2,
      bottom: "0px",
      ease: "power3.out"
    }, "<")
    timeline.to(".wa-teams-title", {
      duration: 2.5,
      marginTop: 0,
      fontSize: "30px",
      ease: "power3.out"
    }, "<")

    animPlaying = false;
  })
}

//scrolling down

ScrollTrigger.create({
  trigger:".inner-info",
  start:"top bottom",
  end:"bottom bottom",
  onEnter:()=>{
    if(!animPlaying){
      animPlaying = true;
      let timeline = gsap.timeline();
      timeline.to(window, {
        duration: 1.5,
        scrollTo: ".about-us",
        ease: "power3.out"
      })
      timeline.to(".name-title-hr", {
        duration: 1.5,
        width: "1%",
        opacity: 0
      }, "<");

      sleep(500).then(()=>{
        animPlaying = false;
      });
    }
  }
});

ScrollTrigger.create({
  trigger:".sponsors",
  start:"top bottom",
    end:"bottom bottom",
    onEnter:()=>{
      if(!animPlaying){
        animPlaying = true;
        let timeline = gsap.timeline();
        timeline.to(window, {
          duration: 1.5,
          scrollTo: ".sponsors",
          ease: "power3.out"
        });

        sleep(500).then(()=>{
          animPlaying = false;
        });
      }
    }
});

ScrollTrigger.create({
  trigger:".ftc-info",
  start:"top bottom",
    end:"bottom bottom",
    onEnter:()=>{
      if(!animPlaying){
        animPlaying = true;
        let timeline = gsap.timeline();
        timeline.to(window, {
          duration: 1.5,
          scrollTo: ".ftc-info",
          ease: "power3.out"
        });
        
        sleep(500).then(()=>{
          animPlaying = false;
        });
      }
    }
});

//scrolling up