const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'web developer',
        img: 'https://i.ibb.co/HD5JdqY/muse-4394716-1920.jpg',
        text: "This is my first review as sarah smith and this will tell if this is the first review or not",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web designer',
        img: 'https://i.ibb.co/Vjf0ckJ/orpheus-cave-117480-1920.jpg',
        text: "I'm so glad I get to know about this website and the owner, they are a set of wonderful peeps that do their job wonderfully and also on time too",
    },
    {
        id: 3,
        name: 'Sam Mike',
        job: 'Product Manager',
        img: 'https://i.ibb.co/hCSwWSm/runner-4392687-1920.jpg',
        text: "As a product manager, I come across somany websites and product but I must say, this beats my imaginations in every way",
    },
    {
        id: 4,
        name: 'Kosi Ben',
        job: 'Business Analyst',
        img: 'https://i.ibb.co/ZXcLnwh/sculpture-1111260-1920.jpg',
        text: "Business analyst comes accross many businesses each day, and this business is a good and better business compared to others, they put their clients first and give their best to all without discriminating",
    }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

// show person based on item

let showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// show random person 

randomBtn.addEventListener('click', () => {
        currentItem = getRandomReview();
        console.log(currentItem);
        showPerson(currentItem);
})

let getRandomReview = () => {
    return Math.floor(Math.random() * reviews.length);
}