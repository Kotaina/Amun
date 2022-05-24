<template>
  <ToggleButton />
</template>

<script>
import ToggleButton from "./ToggleButton.vue";
export default {
  name: "HelloWorld",
  components: {
    ToggleButton,
  },
  props: {
    msg: String,
  },

  mounted() {
    console.log("mounted");
    // openSocket() {
    const wsURL =
      "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";
    const protocols = [];
    const myWS = new WebSocket(wsURL, protocols);
    // myWS
    console.log("myWS.readyState", myWS); // CONNECTING

    // После того как рукопожатие (Handshake) пройдет успешно
    // readyState будет OPEN
    console.log("myWS.readyState", myWS.readyState); // OPEN
    // },

    myWS.onopen = function () {
      // Отправляем сообщение по WS
      myWS.send("Привет, сервер!");
    };
    myWS.onmessage = (event) => {
      // Делаем с данными все что захотим, но я их просто выведу😊
      console.log(event.data);
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
