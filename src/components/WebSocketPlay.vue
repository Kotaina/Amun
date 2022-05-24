<template>
  <h2 class="websocket__title">WebSocket</h2>
  <section class="websocket">
    <div class="websocket__connetion connection">
      <input
        class="connection__url-input"
        required
        placeholder="WS path"
        v-model="webSocketPath"
      />
      <button class="connection__btn-open" @click="onSendBtnClick">
        Open WS
      </button>
      <button class="connection__btn-close" @click="onCloseBtnClick">
        Close WS
      </button>
    </div>
    <div class="websocket__message message">
      <input
        class="message__input"
        placeholder="message"
        v-model="messageToSend"
      />
      <button class="message__btn-message" @click="onMessageSend()">
        Отправить сообщение
      </button>
    </div>
    <section class="websocket__logs">
      <ul v-if="responseItems" class="logs__list logs">
        <li
          v-for="(item, i) in responseItems"
          :key="i"
          class="logs__item"
          :class="{ 'logs__item--even': i % 2 === 0 }"
        >
          {{ item }}
        </li>
      </ul>
    </section>
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
      responseItems: [],
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
      myWS.onclose = function () {
        this.responseItems.push(event);
      };
      myWS.onmessage = (event) => {
        // Делаем с данными все что захотим, но я их просто выведу😊
        this.responseItems.push(event);
        console.log(this.responseItems);
      };
      this.webConnection = myWS;
      console.log(" this.webConnection", this.webConnection);
    },

    onCloseBtnClick() {
      this.myWS.close();
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
  // div {
  //   display: flex;
  // }
}
.connection {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-between;

  &__url-input {
    width: 100%;
    margin-bottom: 10px;
  }
}

.message {
  display: flex;
  flex-wrap: wrap;

  &__input {
    width: 100%;
    margin-bottom: 10px;
  }

  &__btn-message {
    margin: 0 auto;
  }
}
.websocket__logs {
  border: 1px solid black;
  padding: 5px;
}
.logs {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
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
