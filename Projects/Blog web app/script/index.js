const container = document.getElementById("blogContainer");
const searchInput = document.getElementById("search");

let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function displayBlogs(data) {
    container.innerHTML = "";

    data.forEach(blog => {

        let shortContent = blog.blogContent.substring(0, 100) + "...";

        container.innerHTML += `
            <div class="card">
                <img src="${blog.image}">
                <h3>${blog.blogTitle}</h3>
                <p>${shortContent}</p>
                <p>Rating: ${"⭐".repeat(blog.rating)}</p>

                <a href="singleBlog.html?id=${blog.id}" class="btn">
                    See More
                </a>
            </div>
        `;
    });
}
displayBlogs(blogs);