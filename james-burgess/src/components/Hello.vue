<template>
  <div class="hello">
    <div class="black">
        <h1>{{ msg }}</h1>
        <h2>My name is James</h2>
    </div>
    <div class="white">
        <h2>I built the internet*</h2>
        <h3>*some of it</h3>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100vh;
  width: 100vw;
  position: fixed;
}
.black{
    background: #000000;
    height: 55vh;
    color: white;
}
.black h2{
  bottom: 46vh;
  left: 500px;
  position: fixed;
  font-size: 1.5em;
}
.wrapper{
  max-width: 900px;
  height: 100%;
  border: 5px solid pink;
}
h1{
  font-size: 12em;
  bottom: 45vh;
  position: absolute;
}
.white h2{
  padding-top: 5px;
  left: 500px;
  position: absolute;
  font-size: 2em;
}
h3{
  bottom: 3px;
  left: 3px;
  position: absolute;
  font-size: 15px;
}
</style>
