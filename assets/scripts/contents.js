//Menampilkan list hama
const cardList = document.querySelector(".card-list");
if(cardList){
    fetch("../assets/data/database.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data["hama"].forEach(type => {
            const dataCard = document.createElement("div");
            const dataCardBody = document.createElement("div");
            const dataCardInfo = document.createElement("div");
            const dataCardImage = document.createElement("img");
            const dataCardUl = document.createElement("ol");
    
            dataCard.setAttribute("class","data-card");
            dataCard.innerHTML = `
                                <div class="data-card-header">
                                    <h3 class="data-card-title">${type["nama"]}</h3>
                                    <p>(<i>${type["latin"]}</i>)</p>
                                </div>`;
    
            dataCardBody.setAttribute("class","data-card-body");
            dataCardImage.setAttribute("class","data-card-image");
            dataCardImage.src = `../assets/img/hama/${type['gambar']}`;
            dataCardInfo.setAttribute("class","data-card-info");
            
            data["gejala"][type["gejala"]].forEach(el => {
                const dataCardList = document.createElement("li");
                dataCardList.setAttribute("class","rf-15");
                const textContent = document.createTextNode(el);
                dataCardList.appendChild(textContent);
                dataCardUl.appendChild(dataCardList);
            });
            dataCardInfo.innerHTML = `<p class="rf-15"> Gejala yang ditimbulkan : </p>`;
            dataCardInfo.appendChild(dataCardUl);
            dataCardBody.appendChild(dataCardImage);
            dataCardBody.appendChild(dataCardInfo);
            dataCard.appendChild(dataCardBody);
            cardList.appendChild(dataCard);
        });
    });
}