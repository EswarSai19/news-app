let appendNews = (data)=>{
    
    data.forEach(({urlToImage,title,description})=>{
        // console.log(urlToImage)
        let news = document.createElement("div")
        news.addEventListener("click",()=>{
            window.location.href = "../news.html"
        })
        news.className = "news"
        let img = document.createElement("img")
        img.src = urlToImage
        img.id = "img"
        let text_div = document.createElement("div")
        
        let tit = document.createElement("h3")
        tit.id = "tit"
        tit.innerText = title
        let des = document.createElement("p")
        des.id = "des"
        des.innerText = description
        text_div.append(tit,des)
        news.append(img,text_div)
        results.append(news)
    })
   
}

export {appendNews}