let dataList = document.getElementById('songs');
const para = document.querySelector('p');
const input = document.getElementById("input-box");
const picture = document.querySelector("img");
const title = document.getElementById("title");
const author = document.getElementById("author");
const contributor = document.getElementById("contributor");
let titles = [];

let jsonOptions;

const getData = async () => {
    const response = await fetch("songs.json");
    const data = await response.json();
    jsonOptions = data;
    return data;
};
function clearInput() {
        document.getElementById("song-form").reset();
        contributor.textContent = picture.src = para.textContent = title.textContent = author.textContent = picture.src = "";

        }
(async () => {
    await getData();
    // Loop over the JSON array.
    jsonOptions.forEach(function(item) {
        let option = document.createElement('option');
        titles.push(item.title);
        option.value = item.title;
        option.id = item.id;
        option.dataset.author = item.author;
        option.dataset.contributor = item.contributor;
        option.dataset.cover = item.cover;
        dataList.appendChild(option);

    });
    input.addEventListener("input", () => {
        if (titles.includes(input.value)) {                
            let option = Array.prototype.find.call(input.list.options, function(option) {
                return option.value === input.value;
            });
            picture.src = option.getAttribute("data-cover");
            title.textContent = input.value;
            author.textContent = option.getAttribute("data-author");
            para.textContent = "La canzone è stata inserita da:";
            contributor.textContent = option.getAttribute('data-contributor');
            contributor.href = "contributor.html?contributor=" + option.getAttribute('data-contributor');
            author.href =  "author.html?author=" + option.getAttribute('data-author');
        }
    })
    
})();

