const imageWrapperNode = document.querySelector(".image-wrapper");
let input_btn = document.querySelector('#input_btn');

input_btn.addEventListener("click", function () {
    let limitImage = document.querySelector('#input').value;
    console.log(limitImage);

    if (limitImage < 1 || limitImage > 10) {
        console.log("Число вне диапазона от 1 до 10") // Нужно вывести в див это текст
    } else {
        getImage(limitImage, );
    }
})

const showImage = function (apiData) {
    let cards = "";

    apiData.array.forEach(element => {
        const cardBlock = `
        <div class="card">
            <img src="${element.download_url}" class="card-image"/>
        </div>`;
        cards += cardBlock;
    });
    imageWrapperNode.innerHTML(cardBlock);
}

const getImage = function (limitImage, callback) {
    let httpClient = new XMLHttpRequest();

    httpClient.open("GET", `https://picsum.photos/v2/list?limit=${limitImage}`, true);

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
