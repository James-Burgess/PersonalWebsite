<template>
<main>
<header><h1>$ cd ~/james-burgess/resume && ls -al</h1></header>
<div class="body">
<p>Due to privacy concerns, this information has been omitted.
<br><br>
Please <router-link to="/contact">contact</router-link> James to recieve a complete copy of his resume.</p>
</div>
</main>
</template>

<script>
export default {
  name: 'resume',
}
</script>

<style scoped>
.body{
	margin-top: 0;
	background: #464646;
	width: 80vw;
	max-width: 550px;
	max-height: 600px;
	height: 60vh;
	position: fixed;
	transform: translate(10vw, 40%);
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 20px 15px 20px 1px rgba(0,0,0,0.1)
}
p{
	width: 80%;
	font-size: 1.3em;
	color: black;
}
a{
	text-decoration: none;
	color: white;
	font-size: 1.3012em;
}
a:hover{
	border-bottom: 1px solid white;
}
</style>
