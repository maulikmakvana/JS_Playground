let products = JSON.parse(localStorage.getItem("products")) || [];

let editIndex = -1;


// storage
function saveData(){
    localStorage.setItem("products", JSON.stringify(products));
}


// updet product
function addProduct(){

    let title = document.getElementById("title").value;

    let price = document.getElementById("price").value;

    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;

    if
    
    (title=="" || price==""){
        alert("Enter title and price");
        return;
    }

    let product = {
        id: Date.now(),
        title,
        price,
        image,
        category
    };

    if(editIndex==-1){
        products.push(product);
    }
    else{
        products[editIndex] = product;
        editIndex = -1;
    }

    saveData();

    showAdminProducts();

    clearForm();
}


// product show admin page 
function showAdminProducts(){

    let list = document.getElementById("adminList");

    if(!list) return;

    list.innerHTML = "";

    products.forEach((p,index)=>{

        list.innerHTML += `

        <div class="card">

        <img src="${p.image}">

        <h3>${p.title}</h3>

        <p>₹${p.price}</p>

        <p>${p.category}</p>

        <button onclick="editProduct(${index})">Rename/Edit</button>

        <button onclick="deleteProduct(${index})">Delete</button>

        </div>

        `;

    });

}


// show products 
function showUserProducts(){

    let list = document.getElementById("productList");

    if(!list) return;

    list.innerHTML = "";

    products.forEach((p)=>{

        list.innerHTML += `

        <div class="card">

        <img src="${p.image}">

        <h3>${p.title}</h3>

        <p>₹${p.price}</p>

        <p>${p.category}</p>

        </div>

        `;

    });

}


// delet prodduct 
function deleteProduct(index){

    products.splice(index,1);

    saveData();

    showAdminProducts();

}


// edit product
function editProduct(index){

    let p = products[index];

    document.getElementById("title").value = p.title;
    document.getElementById("price").value = p.price;
    document.getElementById("image").value = p.image;
    document.getElementById("category").value = p.category;

    editIndex = index;

}


// cliyar form 
function clearForm(){

    document.getElementById("title").value="";
    document.getElementById("price").value="";
    document.getElementById("image").value="";
    document.getElementById("category").value="";

}



showAdminProducts();

showUserProducts();