// import { createApp } from 'vue'
import { createStore } from 'vuex'
// Create a new store instance.
export default createStore({
    state() {
        return {
            count: 0,
            pageColor: 'white'
        }
    },
    mutations: {
        setPageTheme(state) {
            console.log('commit init')
            state.pageColor = state.pageColor === 'white' ? 'black' : 'white'
        }
    }
})

// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)
