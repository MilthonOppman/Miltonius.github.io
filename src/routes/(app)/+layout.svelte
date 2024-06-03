<script>
    import "../../app.postcss"
    import { AppShell, AppBar } from '@skeletonlabs/skeleton';



    let templates = []
    let linksNews = ["/news/local/betting","/news/local/wikipedia", "/news/local/pancakes","/news/local/space"]
    let template_texts = ['Sport', 'Kultur', 'Lokalt']
    let linkMenu = ["/news/sport", "/news/culture", "/news/local"]

    for (let i = 0; i < template_texts.length; i++) {
	templates.push({
		template_text: template_texts[i],
		templateLink: linkMenu[i]
		});
    }

    </script>
    
    
    <AppShell>
        <svelte:fragment slot="header">
            <AppBar>
                <div class = "titelStructure">
                        <p class ="titel">
                            <a href="/news"> Årets-toppnyheter</a>
                        </p>
                        <div class="menu">
                            {#each templates as template, i}
                            <a href={template.templateLink} class ="menu">
                            <p>{templates[i].template_text}</p>
                            </a>
                            {/each}
                        </div>
            </div>
            </AppBar>
        </svelte:fragment>
        <slot />
        <!-- ---- / ---- -->
        <svelte:fragment slot="pageFooter">

        <div class="footnote">
            <p>Kundtjänst: 123- 456 78 90</p>
            <p>Email: Årets-toppnyheter@supreme.com</p>
            <p>Umeå Sweden</p>
        </div>

        </svelte:fragment>
        <!-- (footer) -->
    </AppShell>
    
    <style>
    .titelStructure{
    display: flex;
    justify-content:space-around;
    width: 100vw;
    }
    .titel{
        text-align: left;
        font-size: large;
        color: #333;
        width: 20vw;
    }
    .menu{
    display:flex;
	width:40vw;
	justify-content: space-evenly;
    }
    .menu a{
    border-radius: 10px;
    border-color: black;
    border-width: 1px;
    margin-left: 5px;
}
    .footnote {
        display: flex;
        justify-content: space-evenly;
        background-color: white;
        padding: 20px;
        text-align: center;
        color: #333;
    }
    a:hover{background-color:rgb(190, 190, 190);
    font-size: large;}
    </style>