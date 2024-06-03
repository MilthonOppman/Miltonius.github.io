<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
    let images = [image,photo,picture,image,photo,picture]
    </script>


<title>Photo App</title> /*Titeln som visas vanligtvis i webbläsarens
titelfält/fliknamn*/
<h1>Photo App</h1>

/*Vår bild behöver en bildaddress och även en text som beskriver vad som
bilden föreställer ifall det skulle bli något fel vid inladdningen av
bilden eller för att öka tillgängligheten av sidan.*/
<div class="photos">
    <div class="image-wrapper">
        <img src={images[0]} alt="flexbox rules">
    </div>
    
    <div class="image-wrapper">
        <img src={images[1]} alt="flexbox rules">
    </div>
    
    <div class="image-wrapper">
        <img src={images[2]} alt="flexbox vsgridbox">
    </div>

    {#each images as img}
    <div class="image-wrapper">
        <img src={img} alt="flexbox vsgridbox">
    </div>

    {/each}
</div>¨

<style>
.photos{
display:flex;
/*Sätter att bredden på vår box enbart får vara 90% av webbfönstrets
bredd*/

max-width: 90vw;
overflow:hidden;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
}
.image-wrapper{
    flex:1;
    
}
.image-wrapper img {
    max-width: 300px;
    flex-wrap: wrap;
}
</style>

