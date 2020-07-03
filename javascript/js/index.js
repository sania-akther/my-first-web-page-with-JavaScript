

function setDate(){
    document.getElementById('test').innerHTML='sania';
}

function displayDate(){
    document.getElementById('date').innerHTML=Date();
}
function undo(){
    document.getElementById('date').innerHTML="";
}


/**    var paragraph = document.getElementsByTagName('p');
document.write(paragraph + "<br/>");
document.write(paragraph.length); **/    

function setNewImage(){
    document.getElementById('a44').src = "images/a1.jpg";
    document.getElementById('b44').src = "images/b1.jpg";
    document.getElementById('c44').src = "images/c1.jpg";
    document.getElementById('d44').src = "images/d1.jpg";
    document.getElementById('e44').src = "images/e1.jpg";
    document.getElementById('f44').src = "images/f1.jpg";
    document.getElementById('g44').src = "images/g1.jpg";
    document.getElementById('h44').src = "images/h1.jpg";

} 
function changeText(obj, text){
    obj.innerText = text;
}

function setOldImage(){
    
    document.getElementById('a44').src = "images/a.jpg";
    document.getElementById('b44').src = "images/b.png";
    document.getElementById('c44').src = "images/c.jpg";
    document.getElementById('d44').src = "images/d.jpg";
    document.getElementById('e44').src = "images/e.jpg";
    document.getElementById('f44').src = "images/f.jpg";
    document.getElementById('g44').src = "images/g.png";
    document.getElementById('h44').src = "images/h.png";



    document.getElementsByTagName('span').innerHTML = 'Day care'; 
}

