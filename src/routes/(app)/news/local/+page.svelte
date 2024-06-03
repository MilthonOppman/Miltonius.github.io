<script>
    let pictures = ["/CasinoBild2.jpg","/Nicholaswiki.webp", "/pannkakor.jpg", "/MelvinRymd.jpg"]
    let titels = ["Betting: Noahs casino öppnar", "Nicholas Ekeborg - Mannen Bakom Nikipedia","Pannkakor förbjudna på grund av hälsorisker!", "Melvin öppnar nya möjligt"]
    let articles = []
    
    let linksNews = ["/news/local/betting","/news/local/wikipedia", "/news/local/pancakes","/news/local/space"]
    

    for (let i = 0; i < titels.length; i++) {
        articles.push({
            titel: titels[i],
            picture: pictures[i],
            link: linksNews[i]
            });
    }
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    shuffleArray(articles)
    
    
    </script>
    
    <main style = "background-color:#f0f0f0;">
    <h1>
        <div class="news-container">
            {#each articles as article, i}
            <a href={article.link} class ="news">
                <img src={articles[i].picture} alt="" />
                <p>{articles[i].titel}</p>
            </a>
            {/each}
        </div>
    
    </h1>
    </main>
    
    <style>
    
    .news-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    
    }
    .news{
        display: inline-block;
        width: 44%;
        margin-left: 3%;
        margin-right: 3%;
        margin-top:3vw;
        margin-bottom: 10px;
        padding-bottom: 5px;
        color: black;
        justify-content: space-evenly;
        border: 2px solid black;
        font-size: larger ;
        text-align: center;
        background-color: white;
    }
    .news:hover{text-decoration: underline;}
    img{
        margin: auto;
        max-width: 100%;
        height: 200px;
        width: 500px;
        flex-basis: 100px;
        margin-bottom: 30px;
        margin-top: 20px;
    }
    
    @media only screen and (max-width: 768px) {
        .news {
            width: 100%;
        }
    
        .news img {
            max-width: 100%;
        }
    }
    
    </style>