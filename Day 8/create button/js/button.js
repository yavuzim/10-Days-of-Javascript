let btn = document.createElement("Button")
btn.innerHTML = 0
btn.id = "btn"

document.body.appendChild(btn)

btn.onclick = function(){
    btn.innerHTML = Number(btn.innerHTML) + 1
}