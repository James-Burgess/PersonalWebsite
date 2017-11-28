<template>
<main>
<header><h1>$james-burgess | grep -wo work</h1></header>
<body>

<div class="container">
	<h2>SimHome</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>/simone/ A home automation system built on a raspberryPi with Django, Python and Bash.</p>
	<a href="https://github.com/James-Burgess/simHome">Fork Me</a>
</div>

<div class="container">
	<h2>LoopHole Studio</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Front-end Development for a graphic design agencey in Cape Town. JS, HTML, CSS.</p>
	<a href="http://www.1solution.co.za">View the page</a>
</div>

<div class="container">
	<h2>Month of Julia</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>30 days of Julia-lang, a preformance orientated language based on Python</p>
	<a href="https://github.com/James-Burgess/MonthOfJulia">Read the Notebook</a>
</div>

<div class="container">
	<h2>1Solution</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Front-end Development of a website for a local handyman - in Progress. Jquery HTML CSS.</p>
	<a href="http://loophole.studio">Visit the site</a>
</div>

<div class="container">
	<h2>Computer Science</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>I have been teaching GCSE Computer Science at<a href="https://www.theacademyhoutbay.co.za" class="normal_anchor">Hout Bay Academy</a> for over 2 years now.</p>
	<a href="https://github.com/James-Burgess/computerScience">Check my Notes</a>
</div>

<div class="container">
	<h2>Interferometer</h2>
	<img src="../../build/logo.png" height="100" width="100" alt="">
	<p>Searching for the optimal Placement of interferometer nodes because why not.</p>
	<a href="https://github.com/James-Burgess/Interferomotery">Help me out</a>
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
	width: 100vw;
	max-width: 750px;
	height: calc(100% - 100px);
	transform: translate(-50%);
	left: 50vw;
	position: absolute;

}
.container{
	width: 300px;
	height: 180px;
	box-shadow: 10px 10px 35px 5px rgba(0,0,0,0.2);
	background: #3e3e3e;
	transition-duration: 1s;
	margin-top: 25px;
}
.container:hover{
	background: #0e0e0e;
}
.container:hover a{
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
	margin-top: 10px;
	display: block;
	transition-duration: 1.5s;
}
a:hover{
	color:white;
}
.normal_anchor{
	margin-top: 0;
	line-height: 1em;
	display: inline;
	color: white;
	padding-left: 5px;
}
</style>
