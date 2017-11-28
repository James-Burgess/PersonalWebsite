<template>
<main>
<header>
  <h1>$whois -v james-burgess</h1>
</header>
<div class="body">
	<div class="head">
		<h4>README.md</h4>
	</div>
  	<div class="content">
  		<h2>James Burgess v22.9.8</h2>
		<p>Self taught software developer with a passion for the web</p>
		<h3 class="underline">Getting Started</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa totam hic, ipsa atque, perspiciatis</p>
		<h3>Prerequisites</h3>
		<p>Gnu/Linux - Manjaro - i3wm <a href="https://github.com/James-Burgess/dotfiles">(dotfiles)</a></p>
		<h3>Installing</h3>
		<p>Please <router-link to="/contact">contact</router-link> James to place a job offer</p>
		<h3 class="underline">Deployment</h3>
		<p>optio doloribus odit eveniet vel consequuntur fuga vero pariatur laborum voluptatum aliquam consequatur. Quaerat praesentium earum, iusto repudiandae!</p>
		<h3 class="underline">Built With</h3>
		<ul>
			<li><a href="#">Python</a></li>
			<li><a href="#">Javascript</a></li>
			<li><a href="#">Julia-Lang</a></li>
			<li><a href="#">Bash</a></li>
			<li><a href="#">HTML</a></li>
			<li><a href="#">CSS</a></li>
			<li><a href="#">JQuery</a></li>
			<li><a href="#">Django</a></li>
			<li><a href="#">Vue</a></li>
		</ul>
		<h3 class="underline">License</h3>
		<p>This Human is licensed under the HIGC License - see the LICENSE.md file for details</p>
		</div>
  	</div>
</main>
</template>

<script>
export default {
  name: 'whois',
}
</script>

<style scoped>
.body{
	position: absolute;

	top: 150px;
	left: 10vw;
	border: 1px solid #F6F8FA;
	width: 80vw;

}
.head{
	width: 100%;
	height: 40px;
	
    background-color: #fafbfc;
    border-bottom: 1px solid #e1e4e8;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    color: #0366D6;
}
h4{
	padding:10px;
}
.content{
	padding: 50px 20px;
}
h3, h2, p{
	padding: 10px 0;
}

h2{
	font-size: 2em;
	border-bottom: 1px solid #eaecef;
}
.underline{
	border-bottom: 1px solid #eaecef;
	font-size: 1.75em;
}
h3{

	font-size: 1.5em;
}

ul{
	padding-left: 40px;


}

</style>
