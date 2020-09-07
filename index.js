var name1=prompt("Enter player  1 name");
name1=name1.toUpperCase();
var name2=prompt("Enter player  2 name");
name2=name2.toUpperCase();

document.querySelectorAll("p")[0].textContent="P1: "+name1;
document.querySelectorAll("p")[1].textContent="P2: "+name2;

document.querySelector(".click").onclick=function(){

    var randomNumber1=Math.floor(Math.random()*6)+1;
    var randomNumber2=Math.floor(Math.random()*6)+1;
    var randomImageSource1="images/dice"+randomNumber1+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageSource1);

    var randomImageSource2="images/dice"+randomNumber2+".png";
    var image1=document.querySelectorAll("img")[1];
    image1.setAttribute("src",randomImageSource2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent=("🎆"+name1+" WON🎆");
    }
    else if (randomNumber1<randomNumber2) {
        document.querySelector("h1").textContent=("🎉"+name2+" WON🎉");
    }
    else{
        document.querySelector("h1").textContent=("🤍DRAW🤍");
    }
}
