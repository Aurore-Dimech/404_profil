const button = document.getElementById('main');
const music = document.getElementById('ew');

button.addEventListener ('click', function() {
    // music.play();
    // button.style.visibility = 'hidden';
    // let elements = document.getElementsByClassName('titre')
    // for (var elem in elements){
    //     if (elements.hasOwnProperty(elem)) {
    //         elements[elem].style.visibility = 'hidden';
    //     }
    // }
    // window.location.href = 'index2.html'

    music.play();
    document.getElementById('page_1').style.visibility = 'hidden';
    document.getElementById('page_2').style.visibility = 'visible';
    document.getElementById('page_1').style.position = 'absolute';
    document.getElementById('page_2').style.position = 'relative';
})