const blogs = [
    { title: "Venti's Rerun", content: "Venti's Banner has Re-arrive!  Let's Pull for our first Arcon at the scene!", image: "assets/Venti.jpg" },
    { title: "Prime Vandal's Issue", content: "A bug has discover in Prime Vandal during reloading scene!", image: "assets/Vandal.jpg" },
    { title: "Kelra's Debut!", content: "Kelra being the MVP of the recent M6 tournament ay Malaysia!", image: "assets/Kelra.jpg" },
];

const blogContainer = document.getElementById("blog-container");

// Load blogs
function loadBlogs() {
    blogContainer.innerHTML = ""; // Clear container
    blogs.forEach((blog, index) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}" />
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
      `;
        blogContainer.appendChild(blogCard);
    });
}

// Contact form
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify({ name, email, message }));
    alert("Message submitted!");
});

loadBlogs();
