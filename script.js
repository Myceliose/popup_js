let show = document.getElementById('show');
let img = show.firstElementChild;
//console.log(img);
let thumbCol = document.getElementsByClassName('thumb');
//console.log(thumbCol);
let thumbs = Array.from(thumbCol);
//console.log(thumbs)
thumbs.forEach(function (thumb) {
    let imgUrl = thumb.src;
    thumb.onclick = function (params) {
    img.src = imgUrl;
    show.style.visibility = 'visible'; 
    }
    
});
 
show.onclick = function () {
    show.style.visibility = 'hidden';
}
