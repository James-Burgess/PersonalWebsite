<template>
<main>
<header><h1>$ ping -T james-burgess</h1></header>
<div class="body">
	<div class="card">
		<h2>Mail Me</h2>
		<p>via <a class="link" href="mailto:james.burgess@protonmail.com">email</a></p>
		<a href="mailto:james.burgess@protonmail.com">
			<img src="../assets/email.png" alt=""></a>
		
	</div>

	<div class="card">
		<h2>Fork Me</h2>
		<p>on <a class="link" href="https://github.com/James-Burgess">github</a></p>
		<a href="https://github.com/James-Burgess"><img src="../assets/github.svg" alt=""></a>

	</div>

	<div class="card">
		<h2>Ask Me</h2>
		<p>on <a class="link" href="https://stackoverflow.com/users/6372042/james-burgess?tab=profile">SO</a></p>
		<a href="https://stackoverflow.com/users/6372042/james-burgess?tab=profile"><img src="../assets/stackoverflow.png" alt=""></a>

	</div>

	<div class="card">
		<h2>++ Me</h2>
		<p>on <a class="link" href="https://devrant.com/users/chzbgr">devRant</a></p>
		<a href="https://devrant.com/users/chzbgr"><img src="../assets/devrant.png" alt=""></a>

	</div>

	<div class="card">
		<h2>IM Me</h2>
		<p>on <a class="link" href="https://matrix.to/#/@chzbgr:matrix.org">riot</a></p>
		<a href="https://matrix.to/#/@chzbgr:matrix.org"><img src="../assets/riot.png" ></a>

	</div>

	<div class="card">
		<h2>@ Me</h2>
		<p>on <a class="link" href="https://twitter.com/Its_me_JimmyB">Twitter</a></p>
		<a href="https://twitter.com/Its_me_JimmyB"><img src="../assets/Twitter-logo.jpg" alt=""></a>

	</div>
</div>
</main>
</template>

<script>
export default {
  name: 'contact',
}
</script>

<style scoped>
.body{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100vw;
	max-width: 947px;
	margin-top: 20vh;
}
.card{
	border: 5px solid #1e1e1e;
	width: 80vw;
	max-width: 400px;
	height: 150px;
	margin: 20px;
	border-radius: 10px;
}
.card:hover a{
	border-bottom: 2px solid white;
	size: 1.3em;
}
h2{
	font-size: 1.3em;
	padding: 20px;
	color: white;
}
p{
	font-size: 1.2em;
	color: white;
	padding-top: 40px;
	padding-left: 15px;
}
a{
	color: white;
	text-decoration: none;
}
.link{
	padding-right: 10px;
}
img{
	max-width: 50%;
	height: auto;
	max-height: 120px;
	width: auto;
	transform: translate(-50%, -50%);
	top: -50px;
	position: relative;
	border-radius: 50vw;
	margin: 0 30%;
}

.card:nth-child(even){
	background: linear-gradient(
    to right, 
    #1e1e1e 0%, 
    #1e1e1e 40%, 
    white 35%, 
    white 100%
  );
}
.card:nth-child(even) img{
	float: right;
	transform: translate(50%, -50%);
}
.card:nth-child(odd){
	background: linear-gradient(
    to right,  
    white 0%, 
    white 60%,
    #1e1e1e 60%, 
    #1e1e1e 100%
  );

}
.card:nth-child(odd) h2{
	float: right;
}
.card:nth-child(odd) p{
	text-align: right;
	padding-top: 100px;
	padding-right: 10px;
}
</style>
