const adminContainer = document.getElementById("adminContainer");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function showAdminBlogs() {
    adminContainer.innerHTML = "";

    blogs.forEach(blog => {
        adminContainer.innerHTML += `
            <div class="card">
                <img src="${blog.image}">
                <h3>${blog.blogTitle}</h3>
                <p>${blog.blogContent}</p>
                <p>Rating: ${"⭐".repeat(blog.rating)}</p>

                <button onclick="deleteBlog(${blog.id})">Delete</button>
                <button onclick="editBlog(${blog.id})">Edit</button>
            </div>
        `;
    });
}

function deleteBlog(id) {
    blogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    showAdminBlogs();
}

function editBlog(id) {
    const blog = blogs.find(blog => blog.id === id);

    const newTitle = prompt("Edit Title:", blog.blogTitle);
    const newContent = prompt("Edit Content:", blog.blogContent);

    if(newTitle && newContent) {
        blog.blogTitle = newTitle;
        blog.blogContent = newContent;

        localStorage.setItem("blogs", JSON.stringify(blogs));
        showAdminBlogs();
    }
}

showAdminBlogs();