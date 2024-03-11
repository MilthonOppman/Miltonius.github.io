
<script>
    let email = ''
    let password = ''
    let clicked = false
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    clicked = true;
    }
    </script>¨
    
<h1>Login Form</h1>

<form on:submit|preventDefault={handleSubmit}>

    <label for = 'email' >Email:</label>
    <input id = 'email' type = 'email' bind:value = {email}/>
    <label for = 'Password' >Password:</label>
    <input id = 'Password' type = 'password' bind:value = {password}/>
    <button

type="submit">Register</button>

</form>

{#if clicked}
<h2>
    This your mail:{email} and this your password: {password}
</h2>
{/if}

<style>
    form{display:grid;
        width:60vw;
        max-width: 500px;
        min-width: 300px;
        margin: auto;
        grid-template-columns: repeat(2, minmax(200px, 1fr));
}
    
</style>
