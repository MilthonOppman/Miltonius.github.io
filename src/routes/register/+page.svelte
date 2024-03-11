
<script>
    let firstname = ''
    let lastname = ''
    let email = ''
    let password = ''
    let qoute = ''
    let clicked = false
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    clicked = true;
    }
    </script>¨
    
<h1>Registration Form</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label for = 'firstname'>First Name:</label>
    <input id = 'firstnamne' type = 'text' bind:value = {firstname}/>
    <label for = 'lastname' >Last Name:</label>
    <input id = 'last' type = 'text' bind:value = {lastname}/>
    <label for = 'email' >Email:</label>
    <input id = 'email' type = 'email' bind:value = {email}/>
    <label for = 'Password' >Password:</label>
    <input id = 'Password' type = 'password' bind:value = {password}/>
    <label for = 'qoute'> Quote:</label>
    <input id = 'qoute' type = 'text' bind:value = {qoute}/>
    <button

type="submit">Register</button>

</form>

{#if clicked}
<h2>
    Is this you {firstname} {lastname}?
    This your mail:{email} and this your password: {password}
</h2>

<h3>
    {qoute}
    Very intresting qoute there you got!
</h3>
{/if}

<p>Have an account? <a

    href="/login">Log in</a>></p>

<style>
    form{display:grid;
        width:60vw;
        max-width: 500px;
        min-width: 300px;
        margin: auto;
}
    
</style>
