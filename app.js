


let emote = document.querySelector(".emote");
let show_Joke = document.querySelector(".display-joke");
let show_Joke_punchline = document.querySelector(".display-joke-punchline");
let display_Joke = document.querySelector(".display-btn");
let reset = document.querySelector(".reset-btn");

let URL = "https://official-joke-api.appspot.com/random_joke";


const fetchJoke = async () => {
    let getting = await fetch(URL);
    console.log(getting);
    let setting = await getting.json();
    console.log(setting.setup.toString());
    show_Joke.innerText = "Ques: " + setting.setup.toString();
    show_Joke_punchline.innerText = "Ans: " + setting.punchline.toString();
    emote.innerText = "😂";
};

display_Joke.addEventListener("click" , fetchJoke);

const clear = () => {
    show_Joke.innerText = "Ques: ";
    show_Joke_punchline.innerText = "Ans: ";
    emote.innerText = "Feeling sad? Get A Joke and be Happy..";
};

reset.addEventListener("click" , clear);