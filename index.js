var randomNumber1= Math.random()*6+1;
randomNumber1=Math.floor(randomNumber1);
console.log(randomNumber1);

document.querySelectorAll(".img1")[randomNumber1].classList.add("appear");
