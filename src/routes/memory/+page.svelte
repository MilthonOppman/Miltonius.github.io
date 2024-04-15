<script>
  let cards = [];
  let pictures = []
  let flipped_cards = []
  let images_number = 6
  let blå = 0
  let röd = 0
  let blueturn = true
  
  for(let i = 0; i< images_number; i++){
    pictures.push("https://picsum.photos/200/200?random"+i.toString())
  }

  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index,
      img: pictures[index%images_number], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
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

shuffleArray(cards)
  
let flipcount = 0;


  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped = true
      flipcount ++
      flipped_cards.push(card.img)
    
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        if(flipped_cards[0] === flipped_cards[1]){
          console.log('samma kort')
          cards.forEach((card) => {
            if(card.flipped){card.completed = true}
        });
        flipcount = 0
        flipped_cards = []
        if(blueturn){blå++}
        else {röd ++}
      }
        
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
                console.log('vänder korten') 
                console.log(card.completed)
            cards=cards
          });
          flipcount = 0
          flipped_cards = []
          blueturn = !blueturn
          }, 1000);

      }

    } 
    cards = cards;
  }


</script>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>
  <div class = "box" id = "red-box">
    <p>
      {röd}
    </p>
  </div>
  <div class= 'box' id = "blue-box">
    <p>
      {blå}
    </p>
  </div>
  <div class = 'box' id = 'turn-box' style={blueturn?"right: 10px;":"left:10px"}>
  </div>
</main>
<div style="width:600px; height:800px; background-
color:bisque;"></div>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
  .box {
width: 100px;
height: 100px;
position: fixed;
text-align: center;
font-size: 30px;
}  
  #red-box, #blue-box {
z-index: 2;
bottom: 0;
}
#red-box {
background-color: red;
z-index:2;
left: 0px;
text-align: center; font-size: 30px;
}
#blue-box {
background-color: blue;
z-index: 2;
Right: 0px;
text-align: center; font-size: 30px;

}
#turn-box{
bottom: 10px;
z-index: 1;
background-color: greenyellow;
box-shadow: 0 0 20px 20px greenyellow;
}

</style>
