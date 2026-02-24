const container = document.getElementById("singleBlogContainer");

// URL se ID nikalna
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// ID match karna
const blog = blogs.find(b => b.id == blogId);

if (blog) {
    container.innerHTML = `
        <div class="single-card">
            <img src="${blog.image}">
            <h1>${blog.blogTitle}</h1>
            <p>${blog.blogContent}</p>
            <h3>Rating: ${"⭐".repeat(blog.rating)}</h3>
            <a href="index.html" class="btn">Back</a>
        </div>
    `;
}