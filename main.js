let rootElement = document.querySelector("html")

let toggleTheme = function () {
    rootElement.classList.toggle("dark")
}

setInterval(toggleTheme, 5000)
