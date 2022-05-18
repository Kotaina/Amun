<template>
<div class="page-body" :class="catchTheClass">
  <img alt="Vue logo" src="./assets/logo.png">
  <span class="page-body__title">Hello World</span>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      backgroundColor: () => {this.$store.state.pageColor},
      // actualSheme: () => {
      //   if (this.backgroundColor === 'white') {
      //     import('src/lightColors.scss')
      //   } 
      // }
    }
  },
  mounted() {
    this.backgroundColor = this.$store.state.pageColor
  },

  computed: {
    catchTheClass() {
      const base = 'page-body'
      return base + `--${this.$store.state.pageColor}` 
      // return base + `--${this.backgroundColor}` 
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

body {
  margin: 0;
}

.page-body {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    margin-bottom: 30px;
  }

  &--black { 
    background-color: black;
  }

  &__title {
    color: color('green')
  }
}
</style>
