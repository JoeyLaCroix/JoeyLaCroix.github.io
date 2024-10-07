
class Bird {
    constructor(name, image, size, lifespan, food, habitat, fact) {
        this.name = name;
        this.image = image;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
    }

    getSection() {
        const section = document.createElement('div');
        section.className = 'bird-box';
        section.onclick = () => showDetails(this.name);

        const title = document.createElement('h3');
        title.innerText = this.name;
        section.appendChild(title);

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        section.appendChild(img);

        return section;
    }

    getExpandedSection() {
    
        const container = document.createElement('div');
        container.id = 'bird-details';
        const title = document.createElement('h3');
        title.innerText = this.name;
        container.appendChild(title);

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        container.appendChild(img);

        const size = document.createElement('p');
        size.innerHTML = "<strong>Size:</strong> " + this.size;
        container.appendChild(size);

        const lifespan = document.createElement('p');
        lifespan.innerHTML = "<strong>Lifespan:</strong> " + this.lifespan;
        container.appendChild(lifespan);

        const food = document.createElement('p');
        food.innerHTML = "<strong>Food:</strong> " + this.food;
        container.appendChild(food);

        const habitat = document.createElement('p');
        habitat.innerHTML = "<strong>Habitat:</strong> " + this.habitat;
        container.appendChild(habitat);

        const fact = document.createElement('p');
        fact.innerHTML = "<strong>Interesting Fact:</strong> " + this.fact;
        container.appendChild(fact);

        return container;
    }
}

const birds = [
    new Bird('Bald Eagle', 'images/baldeagle.jpg', '2.5 feet', '10-20 years', 'Small rodents and fish', 'Trees', 'They are the national bird of the USA'),
    new Bird('Flamingo', 'images/flamingo.webp', '3-4.5 feet', '20-25 years', 'shrimp', 'marshes', 'They are naturally white'),
    new Bird('Osprey', 'images/osprey.jpg', '1.5 feet', '15', 'small rodents and fish', 'coastlines', 'They are also known as sea hawks'),
    new Bird('Ostrich', 'images/ostrich.jpg', '6-9 feet', '20 years', 'grass, greens and flowery plants', 'sierras and sarahas', 'They are the largest bird in the world'),
];

const birdsContainer = document.getElementById('birds-container');
birdsContainer.id = 'bird-details';

birds.forEach(bird => {
    birdsContainer.appendChild(bird.getSection());
});

function showDetails(birdName) {
    const bird = birds.find(b => b.name === birdName);
    document.getElementById('modalTitle').innerText = bird.name;

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = '';
    modalContent.appendChild(bird.getExpandedSection());
    document.getElementById('birdModal').style.display = 'block';
}