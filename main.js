const generatememebutton = document.querySelector(".meme-generator.generate-meme-button");
const memeimage = document.querySelector(".meme-generator img");
const memetitle = document.querySelector(".meme-generator .meme-title");
const memeauthor = document.querySelector(".meme-generator .meme-author");

const updatedetails = (url, title, author) => { 
    memeimage.setAttribute("src", url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = author;
};

const generatememe = () => {
    fetch("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")
        .then((response) => response.json())
        .then((data) => {
            updatedetails(data.url, data.title, data.author);
        });
};

generatememebutton.addEventListener("click", generatememe);
