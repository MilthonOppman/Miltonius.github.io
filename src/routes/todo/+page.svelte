<script>
let sak = '';
let todo = []
let done = []



</script>

<div class ="container">

    <h1>
    TODO LIST
    </h1>
    <h2>
        Todos: <input bind:value= {sak} />    
        <button on:click= {()=>{todo.push(sak); todo=todo}}> Add thing </button>
    </h2>
    

    <div class ="layout">
        <div>
            <h1>NEW</h1>
            <ol>
                {#each todo as obj, i}
                    <li>{obj}</li>
                    <button on:click= {()=>{done.push(todo.splice(i,1)); done=done}}> Add thing </button>
                {/each}
            </ol>
        </div>
        <div>
            <h1>COMPLETED</h1>
            <ul>
                {#each done as obj, i}
                    <li>{obj}</li>
                    <button on:click = {()=> {done.splice(i,1); done=done}}> Erase </button>
                {/each}
            </ul>
        </div>
    </div>
</div>

<style>
.container{
    
    width: 80vw;
    height: 70vw;
    background-color: green;
    border-width: 10px;
    border-style:solid;
    border-color: black;
    border-radius:30px;
    padding-top: 10px;
    padding-left: 10px;

}
.layout{
    display:grid;
    width:100%;
    grid-template-columns: 50% 50%;
}
ul{
    list-style-type: square;
    -webkit-text-fill-color: white;
}

ol{
    list-style-type:decimal-leading-zero;
    -webkit-text-fill-color: white;
    display:flex;
    

}
button{
    background-color: black;
    -webkit-text-fill-color: white;
    margin-left: 5px;
}
input{background-color: green;
    border-color:green;
    border-style:none;
    border-width: 3px;
    -webkit-text-fill-color: white;
}
</style>