/**  В задании указано что надо использовать апи https://picsum.photos/v2/list?limit=10 но у меня запрос возвращал 403, "Елизавета Малышева | Ментор" сказала что можно использовать https://jsonplaceholder.typicode.com/photos .
     У них не нашел в описании апи как можно ограничить выборку по кол-ву. Реализовал ограничение програмно.
*/

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

const showImage = function (apiData, limitImage) {
    let cards = "";
    debugger;

    for(let i = 0; i < limitImage; i++) {
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

    httpClient.open("GET", `https://jsonplaceholder.typicode.com/photos`, true);

    httpClient.onload = function () {
        if (httpClient.status != 200) {
            consolt.log("Статус ответа: ", httpClient.status);
        } else {
            const response = JSON.parse(httpClient.response);
            if (callback) {
                callback(response, limitImage);
            }
        }
    }

    httpClient.onerror = function () {
        console.log("Ошибка! Статсу ответа: ", httpClient.status)
    }

    httpClient.send();
}
