<template>
<main>
<header><h1>$james-burgess | grep -wo work</h1></header>
<body>

<div class="container">
	<h2>SimHome</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>/simone/ A home automation system built on a raspberryPi with Django, Python and Bash</p>
	<a href="https://github.com/James-Burgess/simHome">Check it out</a>
</div>

<div class="container">
	<h2>Project Head</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Project Description</p>
	<a href="#">link to project</a>
</div>

<div class="container">
	<h2>Project Head</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Project Description</p>
	<a href="#">link to project</a>
</div>

<div class="container">
	<h2>Project Head</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Project Description</p>
	<a href="#">link to project</a>
</div>

<div class="container">
	<h2>Project Head</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Project Description</p>
	<a href="#">link to project</a>
</div>

<div class="container">
	<h2>Project Head</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Project Description</p>
	<a href="#">link to project</a>
</div>
</body>

</main>
</template>

<script>
export default {
  name: 'work',
}
</script>

<style scoped>
body{
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	width: 80vw;
	height: calc(100% - 100px);
	left: 10vw;
	position: absolute;

}
.container{
	width: 30vw;
	height: 20vh;
	box-shadow: 10px 10px 35px 5px rgba(0,0,0,0.2);
	background: #9e9e9e;
	transition-duration: 1s;
}
.container:hover{
	background: #1e1e1e;
}
.container:hover ~ a{
	color: white;
}
img{
	float: right;
	position: relative;
	top: -30px;
	right: 10px;

	max-width: 50px;
	max-height: 50px;
}
h2, p, a{
	padding-top: 20px;
	padding-left: 20px;
}
h2{
	font-size: 1.25em;
	color: white;
}
p{
	color: lightgrey;
}
a{
	
	text-decoration: none;
	color: black;
	font-weight: bold;
	margin-top: 20px;
	display: block;
	transition-duration: 1.5s;

}
a:hover{
	border-bottom: 1px soild white;
	color: white;
}

</style>
