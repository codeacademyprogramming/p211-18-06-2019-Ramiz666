const bgColor = document.getElementById("bg-color");
const career = document.getElementsByClassName ("career") [0];
bgColor.addEventListener('change', function(){

    career.style.backgroundColor = this.value;
}) 



const daireColor = document.getElementById("daire-color");
const bounce = document.getElementsByClassName ("bounce") [0];
bgColor.addEventListener('change', function(){

    bounce.style.backgroundColor = this.value;
}) 