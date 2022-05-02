// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
import {appendNews} from "../components/fetch.js"
let results = document.getElementById("results")

let getNews = async()=>{
   let  res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`) 
   let data = await res.json()
   console.log(data.articles)
   results.innerHTML = null
   appendNews(data.articles)

}
getNews()

async function cSearch(){
      let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`)
    let data = await res.json()
    console.log(data.articles)
    results.innerHTML = null
    appendNews(data.articles)
}

let ctry_name = document.getElementById("sidebar").children

for(let el of ctry_name){
    el.addEventListener("click",cSearch)
}

// let appendNews = (data)=>{
    
//     data.forEach(({urlToImage,title,description})=>{
//         // console.log(urlToImage)
//         let news = document.createElement("div")
//         news.className = "news"
//         let img = document.createElement("img")
//         img.src = urlToImage
//         img.id = "img"
//         let text_div = document.createElement("div")
        
//         let tit = document.createElement("h3")
//         tit.id = "tit"
//         tit.innerText = title
//         let des = document.createElement("p")
//         des.id = "des"
//         des.innerText = description
//         text_div.append(tit,des)
//         news.append(img,text_div)
//         results.append(news)
//     })
   
// }
 

   
 
 let search = (el)=>{
    if(el.key === "Enter"){
        
    let input = document.getElementById("search_input").value
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${input}`)
    let data = await res.json()
    console.log(data.articles)
    localStorage.setItem("news",JSON.stringify(data.articles))
    // appendNews(data.articles)
        window.location.href = "../search.html"
    }
 }
 document.getElementById("search_input").addEventListener("keydown",search)



