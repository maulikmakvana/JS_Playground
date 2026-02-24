const form = document.getElementById("blogForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const rating = document.getElementById("rating").value;
    const imageInput = document.getElementById("image");

    const reader = new FileReader();

    reader.onload = function () {
        const imageBase64 = reader.result;

        const blog = {
            id: Date.now(),
            blogTitle: title,
            blogContent: content,
            image: imageBase64,
            rating: rating
        };

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.push(blog);

        localStorage.setItem("blogs", JSON.stringify(blogs));

        alert("Blog Added Successfully!");
        window.location.href = "index.html";
    };

    reader.readAsDataURL(imageInput.files[0]);
});