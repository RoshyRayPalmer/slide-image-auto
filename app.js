const images = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.rigth');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
var index = 0;

//functionality next
suivant.addEventListener('click', slideSuivant);

function slideSuivant(){
    if (index < 3) {
        images[index].classList.remove('active'); // on enleve la class active
        index++;
        images[index].classList.add('active');
    }
    else if(index == 3){
        images[index].classList.remove('active');
        index = 0;
        images[index].classList.add('active');
    }

    //sychronisation les bar et les touch directionel
    for (let i = 0; i < cercles.length; i++) {
        
        if (cercles[i].getAttribute('data-clic') - 1 === index) {
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');

        }
    }
}

//previews functionality
precedent.addEventListener('click', slidePresecent);

function slidePresecent(){
    if (index > 0) {
        images[index].classList.remove('active'); // on enleve la class active
        index--;
        images[index].classList.add('active');
    }
    else if(index == 0){
        images[index].classList.remove('active');
        index = 3;
        images[index].classList.add('active');
    }

    for (let i = 0; i < cercles.length; i++) {
        
        if (cercles[i].getAttribute('data-clic') - 1 === index) {
            cercles[i].classList.add('active-cercle');
        } else {
            cercles[i].classList.remove('active-cercle');

        }
    }
}
// activation les touches directionel
document.addEventListener('keydown', keypressed);
function keypressed(e){
    if (e.keyCode === 37) {
        slidePresecent();
    }
    else if(e.keyCode === 39){
        slideSuivant();
    }
}

//cercles

cercles.forEach(cercle =>{
    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++){
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        images[index].classList.remove('active');
        index = this.getAttribute('data-clic') - 1;
        images[index].classList.add('active');
    })
})