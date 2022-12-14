//Menampilkan alert hasil diagnosa
const fc = document.querySelector(".floating-card");
const fcImg = document.querySelector(".floating-card-image");
const fcTitle = document.querySelector(".floating-card-title");
const fcSubtitle = document.querySelector(".floating-card-subTitle");
const fcText = document.querySelector(".floating-card-text");
const fcSection = document.querySelector(".floating-card-section");
const closeBtn = document.querySelector(".close-button");

closeBtn.addEventListener("click",() => {
    fc.classList.remove("active");
    fcImg.src = "";
    fcTitle.innerText = "";
    fcSubtitle.innerHTML = "";
    fcText.innerText = "";
    fcSection.innerHTML = "";
});

function showDiagnoseResult(kodeHama,nilaiKepastian){
    fetch("../assets/data/database.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        let idx = 0;
        for(el of data["hama"]){
            if(el["kode"] == kodeHama){
                break;
            }
            idx++;
        }
        const hama = data["hama"][idx];
        fc.classList.add("active");
        fcImg.src = `../assets/img/hama/${hama["gambar"]}`;
        fcTitle.innerText = hama["nama"];
        fcSubtitle.innerHTML = `<i>${hama["latin"]}</i>`;
        fcText.innerText = `(${nilaiKepastian}% Akurat)`;

        const dataCardUl = document.createElement("ol");
        data["gejala"][hama["gejala"]].forEach(el => {
            const dataCardList = document.createElement("li");
            dataCardList.setAttribute("class","rf-15");
            const textContent = document.createTextNode(el);
            dataCardList.appendChild(textContent);
            dataCardUl.appendChild(dataCardList);
        });
        fcSection.innerHTML = `<p class="rf-15"> Gejala yang ditimbulkan : </p>`;
        fcSection.appendChild(dataCardUl);
    });
}

//mencegah user menginput angka diluar range
const number_inputs = document.querySelectorAll('.input-cf');
number_inputs.forEach(el => {
    el.onkeypress = function (e) {
        var ev = e || window.event;
        if(ev.charCode < 48 || ev.charCode > 57) {
            return false; // not a digit
        } else if(this.value * 10 + ev.charCode - 48 > this.max) {
            return false;
        } else {
            return true;
        }
    }
});