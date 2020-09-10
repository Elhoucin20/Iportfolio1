var demo = document.getElementById("demo");
// TYPING EFFECT
var typewriter = new Typewriter(demo, {
  cursor: "|",
  delay: "natural", // 'natural' or Number
  loop: true, // infinite loop
  autoStart: true,
  devMode: false,
});
typewriter
  .typeString("Hello World!")
  .pauseFor(2000)
  .deleteAll()
  .typeString("I am front End Developer")
  .pauseFor(2000)
  .deleteAll()
  .start();

//TOGGLE open_btn
const open_btn = document.querySelector(".open_btn");
const side_menu = document.querySelector(".side_menu");
open_btn.addEventListener("click", (e) => {
  if (side_menu.classList.contains("open")) {
    side_menu.classList.remove("open");
  } else {
    side_menu.classList.add("open");
  }
});

//ACTIVATE left and right animation EFFECR WHEN SCROLLING TO ABOUT SECTION
const facts = document.querySelector(".facts");
var about = document.querySelector(".about");
var Image_box = document.querySelector("#image_box");
var info_box = document.querySelector("#info_box");
var facts_details = document.querySelector(".facts_details");
var skills = document.querySelector(".skills");
var Allskills = document.querySelectorAll(".skills .progress-bar");

window.onscroll = function () {
  //general
  var windowHeight = this.innerHeight;
  var scrolltop = this.pageYOffset;

  //SKILLS
  var ofset_top = skills.offsetTop;
  var ofset_Height = skills.offsetHeight;

  //FACTS
  var offset_top = facts_details.offsetTop;
  var offset_Height = facts_details.offsetHeight;

  //ABOUT US
  var off_set_top = about.offsetTop;
  var ofset_height = about.offsetHeight;

  if (scrolltop >= off_set_top + ofset_height - windowHeight) {
    image_box.classList.add("show_image_box");
    info_box.classList.add("showinfo_box");
  }
  if (scrolltop >= offset_top + offset_Height - windowHeight) {
    counter();
  }
  if (scrolltop >= ofset_top + ofset_Height - windowHeight) {
    Allskills.forEach((skill) => {
      skill.style.width = skill.dataset.prgress;
    });
  }
};

function counter(e) {
  //FACTS COUNTER UP
  const counters = document.querySelectorAll(".fact_items #nmb");
  counters.forEach((counter) => {
    counter.innerHTML = "0";
    const updateCounter = () => {
      const data_value = +counter.getAttribute("data-taget");
      const c = +counter.innerHTML;
      const increment = data_value / 300;

      if (c < data_value) {
        counter.innerHTML = Math.ceil(c + increment);
        setTimeout(updateCounter, 2);
      } else {
        counter.innerHTML = c + data_value;
      }
    };
    updateCounter();
  });
}

//FILTER GALLERY
const btns = document.querySelector("#btns").children;
const items = document.querySelector(".items").children;
const allItems = document.querySelectorAll(".items .box");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    //lop trough all the btn then remove class active
    for (let b = 0; b < btns.length; b++) {
      btns[b].classList.remove("active");
    }
    //add class active to the btns
    this.classList.add("active");
    const target = this.getAttribute("data-target");

    //loop through the boxes elements
    for (let c = 0; c < items.length; c++) {
      items[c].style.opacity = "0.2";
      items[c].style.transform = "scale(0.8)";
      //check if the target is equal  to the target id
      if (items[c].getAttribute("data-id") === target) {
        items[c].style.opacity = "1";
        items[c].style.transform = "scale(1)";
      }
      if (target === "all") {
        items[c].style.opacity = "1";
        items[c].style.transform = "scale(1)";
      }
    }
  });
}

//show the clicked box in fixed container
allItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    //overllay class
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    //show_box class
    const show_box = document.createElement("div");
    show_box.className = "show_box";
    const img_show = document.createElement("img");
    img_show.src = e.target.src;
    console.log(img_show);
    show_box.appendChild(img_show);
    document.body.appendChild(show_box);
    //close btn
    const closeBtn = document.createElement("span");
    closeBtn.className = "closebtn";
    let x = document.createTextNode("X");
    closeBtn.appendChild(x);
    show_box.appendChild(closeBtn);
  });
});
//close btn function
document.addEventListener("click", (e) => {
  if (e.target.className === "closebtn") {
    document.querySelector(".show_box").remove();
    document.querySelector(".overlay").remove();
  }
});

//OUR TEAM SLIDER
const MyTeamArray = [
  {
    id: "m1",
    text1:
      "bad this gxf me I just sfgh to say that it s succeed so tyhank guys hello this is me I just want to say that it actualyy succeed so tyhank guys",
    text2:
      "hello this is me gfffffffffff just want to sfggggggggg that it gggggggggg succeed so sssssssssssss guys hello this is me I just want to say that it actualyy succeed so tyhank guys",
    text3:
      "hello thrrrrrrrrrrrrrrrrrrrjust rrrrrrrrrrrrrrrrrrrr to say that it rrrrrrrrrrr succeed so tyhank rrrrrrrrrrr hello this is me I just want to say that it actualyy succeed so tyhank guys",
  },
  {
    id: "m2",
    f:
      "bbbbbbb bbbbbbbbbbb bbb bbbb bbbbbbbbb bbbbbbb bbbbbbb bbbbbbbbb bbbb  bbbbbbst want to say that it actualyy succeed so tyhank guys",
  },
  {
    id: "m3",
    r:
      "hhh hhhhhhhhhhh hhhhhh hhhhhhhhhhh hhhhh hhhhhhh hhhhhhhhh hhhhhhhhh hhhhhhhhhhhh hhhhhhhh hhhhhhh",
  },
];

const members1_m1 = document.querySelectorAll(".our_team .team_members1 .m1");
const members1 = document.querySelector(".our_team .team_members1");
const p = document.querySelector(".p");
const pp = document.querySelector(".pp");
const ppp = document.querySelector(".ppp");
const y = document.querySelector(".y");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
var counttter = 0;

//change content function
function toTEHnext(e) {
  const item = MyTeamArray[counttter];
  p.innerHTML = MyTeamArray[counttter].text1;
  pp.innerHTML = MyTeamArray[counttter].text2;
  ppp.innerHTML = MyTeamArray[counttter].text3;
  console.log(item);
}
//next btn
next.addEventListener("click", (e) => {
  toTEHnext();
});
prev.addEventListener("click", (e) => {
  p.innerHTML = y.innerHTML;
});

//scroll to function
const linkat = document.querySelectorAll(".links a");
const bolks = document.querySelectorAll("#bolkts li");


function scrollTo(element) {
  element.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollTo(bolks);
scrollTo(linkat);
console.log(bolks);
