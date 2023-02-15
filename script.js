//add at least 3 dynamic components to your webpage
//contact box 

const myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
  if (mySrc === "https://images.squarespace-cdn.com/content/v1/5531eb6de4b0c759b385ac75/1560479909116-HN4PHGEH8P3URAE0OAQ6/Screen+Shot+2019-06-13+at+6.26.02+PM.png?format=1000w") {
    myImage.setAttribute("src", "bacon.jfif");
  } else {
    myImage.setAttribute("src", "https://images.squarespace-cdn.com/content/v1/5531eb6de4b0c759b385ac75/1560479909116-HN4PHGEH8P3URAE0OAQ6/Screen+Shot+2019-06-13+at+6.26.02+PM.png?format=1000w");
  }
};

function alertBtn(){
  alert("Recipe Submissions Coming Soon!");

}


let x = "Failing is just another word for learning.";

let variable a equal "Welcome John Doe";


((2 * 90) === 180) && (false && 'true')


function helloWorld(name) {
  console.log('A new world awaits, ' + name);
}

var helloWorld = function(name) {
  console.log('A new world awaits, ' + name);
}

