<template>
    <div class="toggler" :class="{ 'playing': isPlaying }">
    <button class="toggler__play" @click="onBtnClick"></button>
    <button class="toggler__pause" @click="onBtnClick"></button>
    <span class="toggler__helper"></span>
    </div>
</template>
<script>
export default {
  name: 'ToggleButton',

    data() {
        return {
            isPlaying: true,
        }
    },

    methods: {
    onBtnClick() {
      this.isPlaying = !this.isPlaying
      this.$store.commit('setPageTheme')
    }
  },
}
</script>
<style lang="scss">
:root {
  font-size: 16px;
  --red: #FF3C2D;
  --green: #00FF99;
  --blue: #0E5EF8;
  --pink: #CB2D6F;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: all .2s ease-in-out .2s;
  background: transparent;
  position: relative;
  z-index: 2;
}
.toggler__play {
  color: var(--black);
}
.toggler__play:after {
  content: 'Светлая';
}
.toggler__pause {
  color: var(--white);
}
.toggler__pause:after {
  content: 'Тёмная';
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
  transition: all .5s cubic-bezier(.666, -.666, .2666, 1.666);
}
.toggler.playing .toggler__helper {
  background: var(--red);
  left: 50px;
}
</style>