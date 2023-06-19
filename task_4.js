/**  В задании указано что надо использовать апи https://picsum.photos/v2/list?limit=10 но у меня запрос возвращал 403, "Елизавета Малышева | Ментор" сказала что можно использовать https://jsonplaceholder.typicode.com/photos .
     У них не нашел в описании апи как можно указать размер картинки. Реализовал форматирование програмно. ¯\_(ツ)_/¯
*/

const imageWrapperNode = document.querySelector(".image-wrapper");
const inputBtn = document.getElementById("input_btn");

inputBtn.addEventListener("click", () => {
    const widthImage = document.getElementById("input_width").value;
    const heightImage = document.getElementById("input_height").value;  

    if (widthImage < 100 || widthImage > 300
        || heightImage < 100 || heightImage > 300) {
            imageWrapperNode.innerHTML =
            `
            <div>
                <p>Одно из чисел вне диапазона от 100 до 300</p>
            </div>
            `;
        }
    fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(response => response.json())
    .then(json => {
        imageWrapperNode.innerHTML = `
        <img src="${json.url}" class="card-image"/>
        `;

        let cardImageItem = document.querySelector(".card-image");
        cardImageItem.style.width = widthImage + "px";
        cardImageItem.style.heigh = heightImage + "px";
    })
    .catch(() => console.log("Ошибка при выполнении запроса"))
})
