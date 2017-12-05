<template>
  <div class="hello">
    <h1 class=" slideInLeft">Hello</h1>
    <div class="black animated slideInDown">
        
        <h2 class="animated bounceInRight">My name is James</h2>
    </div>
    <div class="white">
        <h2 class="animated slideInDownHidden">I built the internet*</h2>
        <h3 class="animated slideInLeft" >*some of it</h3>
        
  </div>
  </div>
</template>

<script>

export default {
  name: 'Hello',
}
</script>

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
h1{
  font-size: 12em;
  bottom: 43vh;
  position: fixed;
  color: white;
  z-index: 3;
}
.black h2{
  bottom: 1vh;
  left: 500px;
  position: fixed;
  font-size: 1.5em;
  animation-delay: .5s;
}
.wrapper{
  max-width: 900px;
  height: 100%;
  border: 5px solid pink;
}

.white h2{
  padding-top: 5px;
  left: 500px;
  position: absolute;
  font-size: 2em;
  animation-delay: 1s;
  z-index: -1;
}
h3{
  bottom: 3px;
  left: 3px;
  position: absolute;
  font-size: 15px;
  animation-delay: 2s;
}

.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideInDownHidden {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideInDown {
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: none;
  }
}


.bounceInRight {
  animation-name: bounceInRight;
}
.slideInDownHidden {
  animation-name: slideInDownHidden;
}
.slideInDown {
  animation-name: slideInDown;
}
.slideInLeft {
  animation-name: slideInLeft;
}

@media screen and (max-width: 637px) {
    h1{
        font-size: 8em;
        bottom: 45vh;
    }
    .black h2{
      left: 330px;
    }
    .white h2{
      left: 5px;
    }
}
@media screen and (max-width: 405px) {
    h1{
        font-size: 6em;
        bottom: 45vh;
    }
    .black h2{
      left: 240px;
      font-size: 1.25em;
      bottom: 3vh;
    }
}
</style>
