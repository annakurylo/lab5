const first=document.getElementById('first');
const second=document.querySelector('#second');
let numOfClicks = 0;

first.onclick=function(){
    ++numOfClicks;
    if(numOfClicks % 2 !== 0)
        first.id="oneColor";
    else
        first.id="twoColor";
}

second.onclick=function(){
    ++numOfClicks;
    if(numOfClicks % 2 !== 0)
        second.id="threeColor";
    else
        second.id="fourColor";
}

add.onclick = function(){
    var block=document.getElementById('feodosia');
    if(!document.getElementById('image')){
        block.insertAdjacentHTML(
            'afterend', /*після закриваючого тега*/ 
            '<img id="image" src="feodosia.jpg"></img>'
        );
    }
}   

delet.onclick = function(){
    var elem = document.getElementById('image');
    image.remove();
}

increase.onclick = function(){
    if(document.getElementById('image')){
        var image = document.getElementById('image');
        var imageHeight = image.offsetHeight;/*висота елемента */
        var imageWidth = image.offsetWidth;
        var numHeight = Number(imageHeight);/*перетворення типу */
        var numWidth = Number(imageWidth)

        if(numHeight<500 && numWidth<1000){
            numHeight+=50;
            numWidth+=100;
            image.style.width = numWidth+'px';
            image.style.height = numHeight+'px';
        }
    }
}

decrease.onclick = function(){
    if(document.getElementById('image')){
        var image = document.getElementById('image');
        var imageHeight = image.offsetHeight;
        var imageWidth = image.offsetWidth;
        var numHeight = Number(imageHeight);
        var numWidth = Number(imageWidth)
        
        if(numHeight>50 && numWidth>100){
            numHeight-=50;
            numWidth-=100;
            image.style.width = numWidth+'px';
            image.style.height = numHeight+'px';
        }
    }
}

