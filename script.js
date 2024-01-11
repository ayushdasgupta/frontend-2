function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });






  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()
var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function (dets) {
  clutter += `<span>${dets}</span>`

  document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span", {
  scrollTrigger: {
    trigger: `#page2>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})
function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
  ./images/first/first00001.png
  ./images/first/first00002.png
  ./images/first/first00003.png
  ./images/first/first00004.png
  ./images/first/first00005.png
  ./images/first/first00006.png
  ./images/first/first00007.png
  ./images/first/first00008.png
  ./images/first/first00009.png
  ./images/first/first00010.png
  ./images/first/first00011.png
  ./images/first/first00012.png
  ./images/first/first00013.png
  ./images/first/first00014.png
  ./images/first/first00015.png
  ./images/first/first00016.png
  ./images/first/first00017.png
  ./images/first/first00018.png
  ./images/first/first00019.png
  ./images/first/first00020.png
  ./images/first/first00021.png
  ./images/first/first00022.png
  ./images/first/first00023.png
  ./images/first/first00024.png
  `;
return data.split("\n")[index];
}

const frameCount = 24;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()

var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function (dets) {
  clutter += `<span>${dets}</span>`

  document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span", {
  scrollTrigger: {
    trigger: `#page4>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})

function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./images/second/first00001.png
./images/second/first00002.png
./images/second/first00003.png
./images/second/first00004.png
./images/second/first00005.png
./images/second/first00006.png
./images/second/first00007.png
./images/second/first00008.png
./images/second/first00009.png
./images/second/first00010.png
./images/second/first00011.png
./images/second/first00012.png
./images/second/first00013.png
./images/second/first00014.png
./images/second/first00015.png
./images/second/first00016.png
./images/second/first00017.png
./images/second/first00018.png
./images/second/first00019.png
./images/second/first00020.png
./images/second/first00021.png
./images/second/first00022.png
./images/second/first00023.png
./images/second/first00024.png
./images/second/first00025.png
./images/second/first00026.png
./images/second/first00027.png
./images/second/first00028.png
./images/second/first00029.png
./images/second/first00030.png
./images/second/first00031.png
./images/second/first00032.png
./images/second/first00033.png
./images/second/first00034.png
./images/second/first00035.png
./images/second/first00036.png
./images/second/first00037.png
./images/second/first00038.png
./images/second/first00039.png
./images/second/first00040.png
./images/second/first00041.png
./images/second/first00042.png
./images/second/first00043.png
./images/second/first00044.png
./images/second/first00045.png
  `;
return data.split("\n")[index];
}

const frameCount = 45;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()

var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function (dets) {
  clutter += `<span>${dets}</span>`

  document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span", {
  scrollTrigger: {
    trigger: `#page6>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5,
  },
  stagger: .2,
  color: `#fff`
})