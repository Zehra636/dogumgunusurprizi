const text =
"Bu siteyi hazırlarken her satırına sevgimi koydum. Umarım gezerken her anında gülümsersin. ❤️";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);

    }

}

function startSite() {

    // Butonu gizle
    document.querySelector("button").style.display = "none";

    // Yazıyı temizle (tekrar basılırsa yeniden yazabilsin)
    document.getElementById("typing").innerHTML = "";

    // Sayaç sıfırlansın
    i = 0;

    // Yazıyı yazdır
    typeWriter();

    // 4 saniye sonra hikâyeye kaydır
    setTimeout(() => {

        document.getElementById("story").scrollIntoView({
            behavior: "smooth"
        });

    }, 4000);

}
const startDate = new Date("2024-10-31T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor(diff / (1000*60*60));

    const minutes = Math.floor(diff / (1000*60));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;

}

updateCounter();

setInterval(updateCounter,60000);
const celebrateBtn = document.getElementById("celebrateBtn");

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        document.getElementById("finalMessage").style.display = "block";

        window.scrollTo({

            top: document.body.scrollHeight,

            behavior: "smooth"

        });

    });

}
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>observer.observe(el));
function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(Math.random()*3+5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,600);
const loveDate = new Date("2024-10-31T00:00:00");

function updateLoveCounter(){

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveDays").textContent = days;
    document.getElementById("loveHours").textContent = hours;
    document.getElementById("loveMinutes").textContent = minutes;
    document.getElementById("loveSeconds").textContent = seconds;

}

updateLoveCounter();

setInterval(updateLoveCounter,1000);