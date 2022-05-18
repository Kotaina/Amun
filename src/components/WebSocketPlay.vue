<template>
  <h2 class="websocket__title">WebSocket</h2>
  <section class="websocket">
    <div>
      <input
        class="websocket__path-input"
        required
        placeholder="WS path"
        v-model="webSocketPath"
      />
      <button @click="onSendBtnClick">Open WS</button>
    </div>
    <div>
      <input
        class="websocket__message-input"
        placeholder="message"
        v-model="messageToSend"
      />
      <button @click="onMessageSend()">Отправить сообщение</button>
    </div>
    <!-- <section>
    <ul>
      <li></li>
    </ul>
  </section> -->
  </section>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => {
    return {
      webSocketPath:
        "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self",
      messageToSend: "",
      // webConnection: {},
    };
  },

  methods: {
    onSendBtnClick() {
      const protocols = [];
      const myWS = new WebSocket(this.webSocketPath, protocols);
      console.log("myWS.readyState", myWS); // CONNECTING
      myWS.onopen = function () {
        // Отправляем сообщение по WS
        myWS.send(this.messageToSend || "Hey server");
      };
      myWS.onmessage = (event) => {
        // Делаем с данными все что захотим, но я их просто выведу😊
        console.log(event.data);
      };
      this.webConnection = myWS;
      console.log(" this.webConnection", this.webConnection);
    },

    onMessageSend() {
      // console.log(" this.webConnection", this.webConnection);
      console.log(" this", this);
      this.webConnection.send(this.messageToSend);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.websocket {
  div {
    display: flex;
    justify-content: space-between;
  }
}
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
