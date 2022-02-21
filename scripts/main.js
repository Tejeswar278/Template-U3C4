async function apiCall(url) {


    //add api call logic here
    try {
        let res = await fetch(url);

        let data = await res.json();
        return data;

    }catch(error){
        console.log("error:", error);
    }

}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(element => {
        
        let div = document.createElement("div");

        div.addEventListener("click", () =>{
            localStorage.setItem("article",JSON.stringify(element));
            window.location.href = "news.html";
        });

        let image = document.createElement("img");
        image.src = element.urlToImage;
        image.setAttribute("class","image")
        
        let title = document.createElement("h4");
        title.innerText = element.title;
        title.setAttribute("class","title")

        let discription = document.createElement("p");
        discription.innerText = element.description;
        discription.setAttribute("class","discription")

        div.append(title,discription,image);
        div.setAttribute("class","newsflex")

        div.onclick = () => {
            localStorage.setItem("clicked_image", JSON.stringify(element));
        }

        main.append(div);


    });

}

export { apiCall, appendArticles }