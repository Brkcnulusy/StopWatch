const baslat = document.getElementById("start");
const durdur = document.getElementById("stop");
const resetle = document.getElementById("reset");
const kaydet = document.getElementById("save");
const second = document.getElementById("seconds");
const tens = document.getElementById("tens");
const minute = document.getElementById("minute");
const clear = document.getElementById("clear");
const list = document.getElementById("list");

let interval;


baslat.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(say, 10);
    function say() {
        let salise = Number(tens.textContent);
        let saniye = Number(second.textContent);
        let dakika = Number(minute.textContent);
        salise++;

        if(salise <= 9){
            tens.innerHTML = "0" + salise.toString();
        }
        if(salise > 9){
            tens.innerHTML = salise.toString();
        }
        if(salise > 99){
            saniye++;
            second.innerHTML = "0" + saniye.toString();
            let rgb1 = Math.floor(Math.random()*255);
            let rgb2 = Math.floor(Math.random()*255);
            let rgb3 = Math.floor(Math.random()*255);
            let changeColor = `rgb(${rgb1},${rgb2},${rgb3})`;
            document.body.style.backgroundColor = changeColor;

            salise = 0;
            tens.innerHTML = "0" + 0;
        }
        if(saniye <= 9){
            second.innerHTML = "0" + saniye.toString();
        }
        if(saniye > 9){
            second.innerHTML = saniye.toString();
        }
        if(saniye > 60){
            dakika++;
            minute.innerHTML = "0" + dakika.toString();
            saniye = 0;
            second.innerHTML = "0" + 0;
        }
        if(dakika <= 9){
            minute.innerHTML = "0" + dakika.toString();
        }
        if(dakika > 9){
            minute.innerHTML = dakika.toString();
        }

    }
});

durdur.addEventListener("click", () => {

    clearInterval(interval);
});

resetle.addEventListener("click",()=>{
    clearInterval(interval);
    tens.innerHTML = "00";
    second.innerHTML = "00";
    minute.innerHTML = "00";

});

kaydet.addEventListener("click",()=>{
    let newElement = document.createElement("li");
    list.appendChild(newElement);   
    newElement.textContent = minute.textContent + ":" + second.textContent + ":" + tens.textContent;
});

clear.addEventListener("click",()=>{
    for(i = list.children.length; i > 0; i--) {
        list.removeChild(list.lastElementChild);
    }
});
