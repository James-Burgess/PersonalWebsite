<template>
<main>
<header>
  <h1>>Humans can't be licenced!</h1>
</header>
<body>
  <h2>Feeling lucky?</h2>
  <h3>Paste this* into your terminal:</h3>
  <code>
  	$ sudo [ $[ $RANDOM % 6 ] == 0 ] && rm -rfv / || echo "lucky boy"
  </code>
  <p>*I hope you have good backups, I'm not liable if you dont. <br>There's a one in six chance you will <del>get more ram</del> kill your OS</p>
</body>
</main>
</template>

<script>
export default {
  name: 'whois',
}
</script>

<style scoped>
main{
height: 100vh;
	background: #7e7e7e;
}
body{
  padding-top: 20px;
  padding-left: 20px;
}
h2{
	font-size: 3em;
}
h3{
	line-height: 1.5em;
	font-size: 1.5em;
}
code{
	line-height: 1.5em;
	background: lightgrey;
	font-size: 1.25em;
}
p{
	position: absolute;
	bottom: 10px;
}
</style>
