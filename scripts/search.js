// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import { appendNews } from "../components/fetch.js";
// document.getElementById("results").innerHTML = appendNews()

let data = JSON.parse(localStorage.getItem("news"))

appendNews(data)




