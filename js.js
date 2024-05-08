
function changeBackground(imagePath, title, description) {

var listItems = document.querySelectorAll('.icons li');
listItems.forEach(function(item) {
   item.classList.remove('selected');
});


event.currentTarget.classList.add('selected');


document.body.style.backgroundImage = "url('" + imagePath + "')";
document.getElementById('title').innerText = title;
document.getElementById('description').innerHTML = description; 
}


window.onload = function() {
document.body.style.backgroundImage = "url('gon.png')";
};


