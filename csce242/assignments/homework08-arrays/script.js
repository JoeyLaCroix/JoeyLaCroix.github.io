const images = [
    {
        src: 'images/birthday.jpg',
        title: 'Birthday',
        description: 'This is a person celebrating with a party hat.'
    },
    {
        src: 'images/clown.jpg',
        title: 'Clown',
        description: 'This person is dressed as a clown.'
    },
    {
        src: 'images/rain.jpg',
        title: 'Rain',
        description: 'This person is holding an umbrella in the rain.'
    },
    {
        src: 'images/read.jpg',
        title: 'Read',
        description: 'This person is reading a book.'   
    },
    {
        src: 'images/shovel.jpg',
        title: 'Shovel',
        description: 'This person is holding a shovel, ready to garden.'
    },
    {
        src: 'images/work.jpg',
        title: 'Work',
        description: 'This person is working on a laptop.'
    }
];

const imageContainer = document.getElementById('image-container');
const title = document.getElementById('title');
const description = document.getElementById('description');

images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    img.addEventListener('click', () => {
        title.textContent = image.title;
        description.textContent = image.description;
    });
    imageContainer.appendChild(img);
});