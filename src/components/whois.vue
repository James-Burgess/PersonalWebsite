<template>
<main>
<header>
  <h1>$whois -v james-burgess</h1>
</header>
<div class="body">
	<div class="head">

		<h4><svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg> README.md</h4>
	</div>
  	<div class="content">
  		<h2>James Burgess</h2>
  		<br>
  		<img src="http://forthebadge.com/images/badges/uses-h9rbs.svg" alt="">
  		<img src="http://forthebadge.com/images/badges/built-with-grav.svg" alt="">
  		<img src="http://forthebadge.com/images/badges/compatibility-betamax.svg" alt="">
  		<img src="http://forthebadge.com/images/badges/powered-by-jeffs-keyboard.svg" alt="">
		
		<h3 class="underline">Introduction</h3>
		<p>Self taught software developer with a passion for the web. </p>

		<h3 class="underline">Getting Started</h3>
		<p>Having left school halfway through highschool due to medical reasons, James compleated his education alone and achieved his As Levels by himself.<br> After realising his ability to self-study he ommited university and took up the challenge of teaching himself how both computers and humans work. <br>Years of study later, He took up the art of teaching and has just compleated a two year tenure as the Head of Computer Scicence for <a href="www.theacademyhoutbay.co.za">The Academy Hout Bay</a></p>

		<h3>Prerequisites</h3>
		<p>james-burgess is known to run best on 
		<br><code>Gnu/Linux - Manjaro - i3wm - <a href="https://github.com/James-Burgess/dotfiles">dotfiles</a></code></p>

		<h3>Installing</h3>
		<p>Please <router-link to="/contact">contact</router-link> James to place a job offer</p>

		<h3 class="underline">Versioning</h3>
		<p>james-burgess is currentley stable at version 22.9.8</p>

		<h3 class="underline">Deployment</h3>
		<p>optio doloribus odit eveniet vel consequuntur fuga vero pariatur laborum voluptatum aliquam consequatur. Quaerat praesentium earum, iusto repudiandae!</p>

		<h3 class="underline">Built With</h3>
		<ul>
			<li><a href="#">Python</a> - Fluent</li>
			<li><a href="#">Javascript</a> - Conversive</li>
			<li><a href="#">Bash</a> - Apprentice</li>
			<li><a href="#">Julia-Lang</a> - Conversive</li>
			<li><a href="#">HTML</a> - Fluent</li>
			<li><a href="#">CSS</a> - Expert</li>
			<li><a href="#">JQuery</a> - Conversive</li>
			<li><a href="#">Django</a> - Novice</li>
			<li><a href="#">Vue</a> - Apprentice</li>
		</ul>

		<h3 class="underline">License</h3>
		<p>
		  <svg xmlns="http://www.w3.org/2000/svg" style="padding-bottom: 10px" width="120" height="20">
			<linearGradient id="m1" x2="0" y2="100%">
			<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
			<stop offset="1" stop-opacity=".1"/>
			</linearGradient>
			<g mask="url(#m1)">
			<rect x="0" y="0"  width="95" height="20" rx="4" ry="4"  style="fill:#555"/>
			<rect x="90" y="0" width="25" height="20" style="fill:#46BC99"/>
			<rect x="110" y="0" width="10" height="20" rx="4" ry="4" style="fill:#46BC99"/>
			<path fill="url(#m1)" d="M0 0h120v20H0z"/>
			</g>
			<g font-family="DejaVu Sans,Verdana,Geneva,sans-serif">
			<g font-size="12" fill="#fff">
			<text x="5" y="15" fill="#DDD" fill-opacity=".4">Open Source</text>
			<text x="5" y="14">Open Source</text>
			</g>
			<g font-size="18" fill="red">
			<text x="97" y="16" stroke="white" stroke-width="1">❤</text>
			</g>
			</g>
		  </svg> 
		 <br>This Human is licensed under the HIGC License - see the LICENSE.md file for details
		</p>
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
	max-width: 978px;
	border: 1px solid rgba(27,31,35,0.15);
	border-radius: 3px 3px 0 0;

	margin-bottom: 10vh;

}
.head{
	width: 100%;
	height: 40px;
	
    background-color: #fafbfc;
    border-bottom: 1px solid rgba(27,31,35,0.15);
    border-radius: 3px 3px 0 0;

}
h4{
	padding:10px;
	color: black;
}
h4 svg{
	transform: translate(0%, 11%);
}
.content{
	padding: 30px 46px;
}
img{
	height: 30px;
	width: auto;
}
h3, h2, p{
	padding: 15px 0;
}
code{
	padding: 10px;
	margin-top: 10px;
	background: #F6F8FA;
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
