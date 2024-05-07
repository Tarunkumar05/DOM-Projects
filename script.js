// Sample data for projects (you can replace this with your actual project data)
const projectsData = [
    {
        name: "Light-Dark Mode",
        description: "Light Dark Mode Website:- This is a simple website template that features a light-dark mode toggle functionality. Users can switch between light and dark themes to suit their preferences.",
        functionality: "1.Light and dark mode toggle switch. 2.Navigation menu for easy access to different sections of the website. 3.Sections for home, about, projects, and contact information. 4.Illustrations provided by Undraw.",
        githubLink: "https://github.com/Tarunkumar05/Light-dark-mode",
        projectLink: "https://tarunkumar05.github.io/Light-dark-mode/"
    },
    {
        name: "Custom-countdown",
        description: "Custom Countdown Create personalized countdowns for any event with ease! This web application allows users to set custom countdowns by selecting a date and adding a title. Whether it's a birthday, holiday, or special occasion, stay excited and organized with your own custom countdowns.",
        functionality: "1.User-friendly Interface: Easily set up countdowns with a simple and intuitive interface. 2.Customization: Add a personalized title to your countdowns for easy identification. 3.Responsive Design: Enjoy a seamless experience across various devices, ensuring accessibility wherever you go. 4.Persistent Countdowns: Even after closing the browser, your countdowns are saved, ready to resume whenever you return.",
        githubLink: "https://github.com/Tarunkumar05/Custom-countdown",
        projectLink: "https://tarunkumar05.github.io/Custom-countdown/"
    },
    {
        name: "Form-Validator",
        description: "Form Validation:- Ensure data integrity and accuracy with this form validation web application. Validate user input in real-time and provide instant feedback for a seamless user experience.",
        functionality: "1.Real-time Validation: Instantly validate form fields as users input data, providing immediate feedback on errors. 2.Custom Error Messages: Informative error messages guide users on how to correct their input, enhancing usability. 3.Password Matching: Verify password entries match for added security and data consistency. 4.Responsive Design: Enjoy a consistent user experience across devices, with responsive design ensuring usability on desktop and mobile platforms.",
        githubLink: "https://github.com/Tarunkumar05/Form-Validator",
        projectLink: "https://tarunkumar05.github.io/Form-Validator/"
    },
    {
        name: "Picture-in-picture",
        description: "Implement seamless Picture-In-Picture functionality with this handy web application! Easily select your media stream, whether it's your screen or a specific window, and enjoy the convenience of Picture-In-Picture mode. Built using HTML, CSS, and JavaScript, this project offers a user-friendly interface and smooth performance.",
        functionality: "1.Allows users to select their media stream for Picture-In-Picture mode. 2.Simple interface with a single button to start the Picture-In-Picture functionality. 3.Responsive design for optimal viewing experience across devices.",
        githubLink: "https://github.com/Tarunkumar05/Picture-in-picture",
        projectLink: "https://tarunkumar05.github.io/Picture-in-picture/"
    },
    {
        name: "Infinite Scroll",
        description: "This project implements an Infinite Scroll feature using the Unsplash API, allowing users to dynamically load and display beautiful photos as they scroll down the page. It provides an endless browsing experience and showcases a variety of stunning images from the Unsplash platform.",
        functionality: "Features: 1.Dynamically loads photos from the Unsplash API as the user scrolls down the page. 2.Seamless browsing experience with no need for manual pagination. 3.Responsive design ensures optimal viewing across devices.",
        githubLink: "https://github.com/Tarunkumar05/Infinite-Scroll",
        projectLink: "https://tarunkumar05.github.io/Infinite-Scroll/"
    },
    {
        name: "Joke Teller",
        description: "Description The Joke Teller project is a fun application that tells programming-related jokes using the VoiceRSS API. Users can click the 'Tell Me A Joke' button to hear a joke spoken aloud by a virtual assistant. The project integrates with the JokeAPI to fetch programming jokes, ensuring a delightful and humorous experience for users.",
        functionality: "1.Interactive button to request a joke. 2.Integration with the VoiceRSS API for text-to-speech functionality. 3.Fetches programming jokes from the JokeAPI to provide a variety of humorous content.",
        githubLink: "https://github.com/Tarunkumar05/Joke-Teller",
        projectLink: "https://tarunkumar05.github.io/Joke-Teller/"
    },
    {
        name: "quote-generator",
        description: "Fetches and displays random quotes from an external API. It provides functionality to load a new quote, display it with the author's name (if available), and dynamically adjust the styling based on the length of the quote. Users can also share the quote on Twitter with the click of a button.",
        functionality: "1. Fetches quotes from an external API asynchronously and displays them on the webpage.2. Provides a button to load a new random quote from the API.Dynamically adjusts the styling of the quote container based on the length of the quote to ensure readability.Allows users to share the displayed quote on Twitter by opening a new tab with the pre-populated tweet text.Displays a loading spinner while quotes are being fetched to provide feedback to users.Implements error handling to gracefully handle failures in fetching data from the API.",
        githubLink: "https://github.com/Tarunkumar05/quote-generator",
        projectLink: "https://tarunkumar05.github.io/quote-generator/"
    },
    {
        name: "Game",
        description: " a simple game where a character can jump and move horizontally to avoid obstacles. It features collision detection, scoring, and dynamic obstacle speed adjustments to create an engaging gameplay experience.",
        functionality: "Initialization: Initializes variables for score, audio elements for background music and game over sound, and starts playing background music after a delay.Event Handling: Listens for keydown events to control the dinosaur character's movement - up arrow key for jumping, right arrow key for moving right, and left arrow key for moving left.Collision Detection: Checks for collisions between the dinosaur and the obstacle. Displays a game over message, stops the game music, and plays a game over sound if a collision occurs.Scoring: Tracks the player's score by counting successful obstacle passes. Displays the score on the screen and increments it when the dinosaur passes an obstacle.Obstacle Speed: Dynamically adjusts the speed of obstacles as the game progresses to increase difficulty. Game Loop: Runs a game loop using setInterval, updating the game state, checking for collisions, and updating the score continuously.",
        githubLink: "https://github.com/Tarunkumar05/Games",
        projectLink: "https://tarunkumar05.github.io/Games/"
    },
    {
        name: "Nasa-api-pictures",
        description: "Explore the cosmos with this web application that fetches captivating images from NASA's Astronomy Picture of the Day (APOD) API. Discover awe-inspiring images, read insightful explanations, and save your favorite pictures to revisit later. The app features a user-friendly interface with the ability to switch between the latest NASA images and your saved favorites. Embark on a visual journey through space and time with the NASA API Pictures web application.",
        functionality: "1. Fetches images from the NASA API and displays them in a responsive grid layout on the webpage.2. Provides options to add images to favorites and removes them using simple click interactions.Saves user's favorite images locally in the browser's storage for persistent access across sessions.Displays a loading spinner while images are being fetched to provide feedback to users.Allows users to switch between viewing search results and saved favorites using navigation buttons.Implements error handling to gracefully handle failures in fetching data from the NASA API",
        githubLink: "https://github.com/Tarunkumar05/Nasa-api-pictures",
        projectLink: "https://tarunkumar05.github.io/Nasa-api-pictures/"
    },
    {
        name: "Animated-Navigation",
        description: "The menu bars elegantly transform into an overlay, revealing a set of seamlessly animated navigation items. Each section is smoothly brought into focus, creating a visually engaging experience for your visitors. The transition effect is not only eye-catching but also user-friendly, making navigation across different sections of your website a delightful experience.",
        functionality: "1. Toggles the visibility of a side menu when a menu button (menu-bars) is clicked.2. Animates the menu items (navItems) to slide in and out smoothly when the menu is opened or closed.Updates the appearance of the menu button (menu-bars) to indicate whether the menu is open or closed.Closes the side menu when a menu item is clicked, providing seamless navigation for users. Utilizes event listeners to trigger the toggleNav function when menu elements are clicked.",
        githubLink: "https://github.com/Tarunkumar05/Animated-Navigation",
        projectLink: "https://tarunkumar05.github.io/Animated-Navigation/"
    },
    {
        name: "Bookmark-app",
        description: "This application allows you to add, delete, and organize bookmarks in a simple and intuitive way. The user-friendly interface lets you input website names and URLs, with real-time validation ensuring accurate data. Favicon images provide visual cues for each bookmark, enhancing the browsing experience. Save your favorite links securely, and access them quickly whenever you need.",
        functionality: "1. Users can input the name and URL of a website and save it as a bookmark.2. Bookmarks are saved locally in the browser's memory.Users can delete bookmarks by clicking on the 'Delete' button next to each bookmark.Bookmarks are displayed in a list format on the webpage for easy access.The application provides basic bookmark management functionality without the need for server-side storage or authentication.",
        githubLink: "https://github.com/Tarunkumar05/Bookmark-app",
        projectLink: "https://tarunkumar05.github.io/Bookmark-app/"
    },
    
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h2>${project.name}</h2>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Functionality:</strong> ${project.functionality}</p>
        <div class="links">
            <a href="${project.githubLink}" target="_blank">GitHub Repo</a>
            <a href="${project.projectLink}" target="_blank">Live Demo</a>
        </div>
    `;
    return card;
}

// Function to display projects
function displayProjects() {
    const projectsContainer = document.getElementById('projects');
    projectsData.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });
}

// Call the displayProjects function when the page loads
window.onload = displayProjects;
