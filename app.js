const arr = [{name:"Suzan Smith",job:"WEB DEVELOPER",desc:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",

},
{name:"Anna Johnson",job:"WEB DESIGNER",desc:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",

},
{
  name:"Peter Jones",job:"INTERN",desc:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",

},
{
  name:"Bill Anderson",job:"THE BOSS",desc:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",

}
]
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
const RightButton = document.querySelector(".next-btn");
const leftButton=document.querySelector(".prev-btn");
const surprise = document.querySelector(".random-btn");
//////////////////////////////////////////////////
let c = 1 ;
let k=3;
RightButton.addEventListener("click",function(){
console.log("this is right button: "+c);

rightBtn(c);

if (c===4){
  c=0;
}
})
leftButton.addEventListener("click",function(){
  console.log("this is left button: "+k)
  leftBtn(k);
  if (k===-1){
    k=3;
  }


})
surprise.addEventListener("click",function(){
let r = randomNum();
surpriseBtn(r);
console.log(r);
})
function rightBtn (n){
if (n===0){
  author.textContent=arr[0].name;
  job.textContent=arr[0].job;
  info.textContent=arr[0].desc;
  img.src="Suzan.jpg";
c=1;
k=3;
}
else if (n===1){
  author.textContent=arr[1].name;
  job.textContent=arr[1].job;
  info.textContent=arr[1].desc;
  img.src="Anna.jpg";
  c=2;
  k=0;
}
else if (n===2){
  author.textContent=arr[2].name;
  job.textContent=arr[2].job;
  info.textContent=arr[2].desc;
  img.src="Peter.jpg";
  c=3;
  k=1;
}
else if (n===3){
  author.textContent=arr[3].name;
  job.textContent=arr[3].job;
  info.textContent=arr[3].desc;
  img.src="Bill.jpg";
 c=0;
 k=2;
}
}
function leftBtn (m){
  if (m===0){
    author.textContent=arr[0].name;
    job.textContent=arr[0].job;
    info.textContent=arr[0].desc;
    img.src="Suzan.jpg";
 k=-1;
 c=1;
  }
  else if (m===1){
    author.textContent=arr[1].name;
    job.textContent=arr[1].job;
    info.textContent=arr[1].desc;
    img.src="Anna.jpg";
    k=0;
    c=2;
  }
  else if (m===2){
    author.textContent=arr[2].name;
    job.textContent=arr[2].job;
    info.textContent=arr[2].desc;
    img.src="Peter.jpg";
    k=1;
    c=3;
  }
  else if (m===3){
    author.textContent=arr[3].name;
    job.textContent=arr[3].job;
    info.textContent=arr[3].desc;
    img.src="Bill.jpg";
    k=2;
    c=0;
  }
}
function surpriseBtn (r){
  if (r===0){
    author.textContent=arr[0].name;
    job.textContent=arr[0].job;
    info.textContent=arr[0].desc;
    img.src="Suzan.jpg";
  c=1;
  k=3;
  }
  else if (r===1){
    author.textContent=arr[1].name;
    job.textContent=arr[1].job;
    info.textContent=arr[1].desc;
    img.src="Anna.jpg";
    c=2;
    k=0;
  }
  else if (r===2){
    author.textContent=arr[2].name;
    job.textContent=arr[2].job;
    info.textContent=arr[2].desc;
    img.src="Peter.jpg";
    c=3;
    k=1;
  }
  else if (r===3){
    author.textContent=arr[3].name;
    job.textContent=arr[3].job;
    info.textContent=arr[3].desc;
    img.src="Bill.jpg";
   c=0;
   k=2;
  }
}
function randomNum(){
  
  let r= Math.floor(Math.random()*4);
  return r;
}