// singal time btn click 

let btn = document.getElementById("btn")

btn.addEventListener("click",function()
{
    alert("btn click one ")


})
// dubble tyme button click 

let dbl_click_btn = document.getElementById("dbl_click_btn")

dbl_click_btn.addEventListener("dblclick",function()
{
    alert("btn dbl click ")


})

// box 
// mousedown
box.addEventListener("mousedown", function (e) 
{
    box.style.backgroundColor = 'green' ;
    box.style.height = '300px' ;
    box.style.width = '300px' ;
    console.log(e)
    console.log(e.clientX)
    console.log(e.clientY)

})

// mouseup
box.addEventListener("mouseup", function (e) 
{
    box.style.backgroundColor = 'blue' ;
    box.style.height = '200px' ;
    box.style.width = '200px' ;
    console.log(e)
    console.log(e.clientX)
    console.log(e.clientY)
})

// mouseover
box.addEventListener("mouseover", function () 
{
    box.style.backgroundColor = 'black' ;
})

// mouseout
box.addEventListener("mouseout", function () 
{
    box.style.backgroundColor = 'red' ;
})

