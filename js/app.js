"use strict";

let containerEl = document.getElementById("container");
console.log(containerEl);

let imageEl1 = document.getElementById("firstimage")
containerEl.appendChild(imageEl1);

let imageEl2 = document.getElementById("secondimage")
containerEl.appendChild(imageEl2);

let imageEl3 = document.getElementById("thirdimage")
containerEl.appendChild(imageEl3);

let img_array = ["bag.jpg", "banana.jpg", "bathroom.jpg", "boots.jpg", "breakfast.jpg", "bubblegum.jpg", "chair.jpg", "cthulhu.jpg", "dog-duck.jpg", "dragon.jpg", "pen.jpg", "pet-sweep.jpg", "scissors.jpg", "shark.jpg", "sweep.png", "tauntaun.jpg", "unicorn.jpg", "water-can.jpg", "wine-glass.jpg"];

let objects_array = [];

let attempts = 0
let max_attempts = 25;



function createimg(imgpath) {


    this.imgname = imgpath.split('.')[0];
    this.imgpath = "img/" + imgpath;
    this.imgview = 0;
    this.votes = 0;
    objects_array.push(this);


}


function randomindex() {

    return Math.floor(Math.random() * img_array.length);

}

let leftindex;
let middleindex;
let rightindex;

function displayimg() {

    leftindex = randomindex();
    middleindex = randomindex();
    rightindex = randomindex();

    while (leftindex == rightindex || rightindex == middleindex || middleindex == leftindex) {
        leftindex = randomindex();
        middleindex= randomindex();
        rightindex = randomindex();

    }

    imageEl1.setAttribute("src", objects_array[leftindex].imgpath);
    imageEl2.setAttribute("src", objects_array[middleindex].imgpath);
    imageEl3.setAttribute("src", objects_array[rightindex].imgpath);


    imageEl1.setAttribute("alt", objects_array[leftindex].imgname);
    imageEl2.setAttribute("alt", objects_array[middleindex].imgname);
    imageEl3.setAttribute("alt", objects_array[rightindex].imgname);


    imageEl1.setAttribute("title", objects_array[leftindex].imgname);
    imageEl2.setAttribute("title", objects_array[middleindex].imgname);
    imageEl3.setAttribute("title", objects_array[rightindex].imgname);

    objects_array[leftindex].imgview++;
    objects_array[middleindex].imgview++;
    objects_array[rightindex].imgview++;

}

// console.log(randomindex(),leftindex,middleindex,rightindex); 


for (let i = 0; i < img_array.length; i++) {

    new createimg(img_array[i]);
    // console.log(objects_array[i]);

}

displayimg();


let buttonEl = document.getElementById("viewchart");


function clickbutton(event) {

    let ulEl = document.getElementById('list');


    for (let i = 0; i < objects_array.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = `${objects_array[i].imgname} has ${objects_array[i].votes} votes and ${objects_array[i].imgview} views .`;
        ulEl.appendChild(liEl);
        containerEl.appendChild(ulEl);
    }
}


imageEl1.addEventListener('click', clicks);
imageEl2.addEventListener('click', clicks);
imageEl3.addEventListener('click', clicks);

// let ulEl=document.getElementById("list");
// containerEl.appendChild(ulEl)
// buttonEl.addEventListener("click",clicks);




function clicks(event) {

    if (attempts < max_attempts) {
        let clickedimg = event.target.id;
        if (clickedimg == "firstimage") {
            objects_array[leftindex].votes++;
        }
        else if (clickedimg == "secondimage") {
            objects_array[middleindex].votes++;
        } else if (clickedimg == "thirdimage") {
            objects_array[rightindex].votes++;
        }
        displayimg();
        // console.log(clickedImg);

    } else {

        // buttonEl.textContent='View Result';
        buttonEl.addEventListener('click', clickbutton);
        // containerEl.appendChild(buttonEl);
        imageEl1.removeEventListener('click', clicks);
        imageEl2.removeEventListener('click', clicks);
        imageEl3.removeEventListener('click', clicks);



        // leftImgEl.removeEventListener('click', handelClicks);
        // rightImgEl.removeEventListener('click', handelClicks);
    }
    attempts++;


}













// console.log(objects_array[11]);



