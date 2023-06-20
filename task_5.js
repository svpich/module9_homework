const btn = document.querySelector("#input_btn");
const contentWrapper = document.querySelector(".content-wrapper");

const imageList = sessionStorage.getItem("imageList");
if (imageList) {
    contentWrapper.innerHTML = imageList;
}

btn.addEventListener("click", () => {
    const pageNumber = document.querySelector("#input_page-number").value;
    const limit = document.querySelector("#input_limit").value;

    let dataIsNotValid = checkData(limit, pageNumber);
    if (dataIsNotValid) {
        showErrorMessage(dataIsNotValid);
        
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limit}`)
        .then(response => response.json())
        .then(json => {
            let cardBlock = "";

            json.forEach(element => {
                cardBlock += `
                <div class="card">
                <img src="${element.url}" class="card-image"/>
                </div>`;
            });

            sessionStorage.setItem("imageList", cardBlock);
            
            contentWrapper.innerHTML = cardBlock;
        })
})

function checkData(limit, pageNumber) {
    if ((!typeof pageNumber == Number || pageNumber < 1 || pageNumber > 10) &&
        (!typeof limit == Number || limit < 1 || limit > 10)) {
        return "Номер страницы и лимит вне диапазона от 1 до 10";
    }

    if (!typeof pageNumber == Number || pageNumber < 1 || pageNumber > 10) {
        return "Номер страницы вне диапазона от 1 до 10";
    }

    if (!typeof limit == Number || limit < 1 || limit > 10) {
        return "Лимит вне диапазона от 1 до 10";
    }
    return false;
}

function showErrorMessage(errorMesage) {
    contentWrapper.innerHTML = `
        <div>
            <p>${errorMesage}</p>
        </div>`;
}
