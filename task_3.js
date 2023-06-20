const imageWrapperNode = document.querySelector(".image-wrapper");
let input_btn = document.querySelector('#input_btn');

input_btn.addEventListener("click", function () {
    let limitImage = document.querySelector('#input').value;
    console.log(limitImage);

    if (limitImage < 1 || limitImage > 10) {
        imageWrapperNode.innerHTML =
            `
            <div>
                <p>Число вне диапазона от 1 до 10</p>
            </div>
            `;
    } else {
        getImage(showImage, limitImage);
    }
})

const showImage = function (apiData) {
    let cards = "";

    for(let i = 0; i < apiData.length; i++) {
        const cardBlock = `
        <div class="card">
            <img src="${apiData[i].url}" class="card-image"/>
        </div>`;
        cards += cardBlock;
    }

    imageWrapperNode.innerHTML = cards;
}

const getImage = function (callback, limitImage) {
    let httpClient = new XMLHttpRequest();

    httpClient.open("GET", `https://jsonplaceholder.typicode.com/photos?_limit=${limitImage}`, true);

    httpClient.onload = function () {
        if (httpClient.status != 200) {
            consolt.log("Статус ответа: ", httpClient.status);
        } else {
            const response = JSON.parse(httpClient.response);
            if (callback) {
                callback(response);
            }
        }
    }

    httpClient.onerror = function () {
        console.log("Ошибка! Статсу ответа: ", httpClient.status)
    }

    httpClient.send();
}
