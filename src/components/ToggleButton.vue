<template>
  <div class="toggler" :class="{ playing: isPlaying }">
    <button class="toggler__play" @click="onBtnClick"></button>
    <button class="toggler__pause" @click="onBtnClick"></button>
    <span class="toggler__helper"></span>
  </div>
</template>
<script>
export default {
  name: "ToggleButton",

  data() {
    return {
      isPlaying: true,
    };
  },

  methods: {
    onBtnClick() {
      // console.log('this', this)
      this.$store.commit("setPageTheme");
      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>
<style lang="scss">
:root {
  font-size: 16px;
  --red: #ff3c2d;
  --green: #00ff99;
  --blue: #0e5ef8;
  --pink: #cb2d6f;
  --black: #212121;
  --white: #ffffff;
}

body {
  background: black;
}

.toggler {
  //   margin: 200px auto;
  width: 100px;
  height: 50px;
  background: var(--black);
  position: relative;
}
.toggler button {
  cursor: pointer;
  display: inline-block;
  float: left;
  text-align: center;
  vertical-align: top;
  width: 50px;
  height: 50px;
  border: none;
  font-weight: bold;
  font-size: 0.6rem;
<<<<<<< Updated upstream
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all .2s ease-in-out .2s;
=======
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all 0.1s ease-in-out 0.1s;
>>>>>>> Stashed changes
  background: transparent;
  position: relative;
  z-index: 2;
}
.toggler__play {
  color: var(--black);
}
.toggler__play:after {
  content: "Светлая";
}
.toggler__pause {
  color: var(--white);
}
.toggler__pause:after {
  content: "Тёмная";
}

.toggler.playing .toggler__play {
  color: var(--white);
}
.toggler.playing .toggler__pause {
  color: var(--black);
}

.toggler span {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  z-index: 1;
  background: var(--green);
<<<<<<< Updated upstream
  transition: all .5s cubic-bezier(.666, -.666, .2666, 1.666);
=======
  transition: all 0.2s cubic-bezier(0.666, -0.666, 0.2666, 1.666);
>>>>>>> Stashed changes
}
.toggler.playing .toggler__helper {
  background: var(--red);
  left: 50px;
}
</style>