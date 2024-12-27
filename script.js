import { blogs } from './blogs.js';

const blogContainer = document.getElementById("blogs");
const contactForm = document.getElementById("contact-form");

// Load blogs using the template
function loadBlogs() {
    const template = document.getElementById("blog-card-template");
    blogContainer.innerHTML = ""; // Clear container
    blogs.forEach((blog) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".blog-card__image").src = blog.image;
        clone.querySelector(".blog-card__image").alt = blog.title;
        clone.querySelector(".blog-card__title").textContent = blog.title;
        clone.querySelector(".blog-card__content").textContent = blog.content;
        blogContainer.appendChild(clone);
    });
}

// Handle form submission
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));
    alert("Message submitted!");
    contactForm.reset();
});

// Initialize the app
document.addEventListener("DOMContentLoaded", loadBlogs);
