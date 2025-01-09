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

// Function to handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
        localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));
        alert("Message submitted successfully!");
        contactForm.reset();
    } catch (error) {
        alert("Failed to submit the message. Please try again.");
    }
}

// Handle form submission
contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate an async operation (e.g., API call)
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
        localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));
        alert("Message submitted successfully!");
        contactForm.reset();
    } catch (error) {
        alert("Failed to submit the message. Please try again.");
    }
});

// Initialize the app
document.addEventListener("DOMContentLoaded", loadBlogs);
