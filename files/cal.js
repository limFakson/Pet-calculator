const Dog = document.getElementById('dog');
const cat = document.getElementById('cat');

Dog.addEventListener('click', ()=>{
    document.getElementById('catcal').style.display = none;
    document.getElementById('dogcal').style.display = block;
});

cat.addEventListener('click', ()=>{
    document.getElementById('catcal').style.display = block;
    document.getElementById('dogcal').style.display = none;
})