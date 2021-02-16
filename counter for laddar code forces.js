y = document.createElement('button')

y.textContent = "number of problems solved"

y.setAttribute("onClick","count()")

z = document.createElement('div')

z.appendChild(y)

x = document.getElementById("cf_username")

x.appendChild(z)

function count() {
var y = 0 ;
var x = document.querySelectorAll("tbody")[1];
var z = x.children.length - 1;


for (var i = 0 ; i < x.children.length ; i++)
{
    if(x.rows[i].style[0] == "background-color"){y++;}
}
window.alert(`${y} / ${z}`)
}