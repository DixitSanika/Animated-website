var crsr = document.querySelector("#cursor")
var b = document.querySelector("#cursor-b")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    b.style.left = dets.x-200+ "px"
    b.style.top = dets.y-200+"px"
})
gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
    // markers:true,
       start:"top-30%",
       end:"top -80%",
       scrub:2

    }
})
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }


})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})