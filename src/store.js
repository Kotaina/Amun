import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            pageColor: 'white'
        }
    },
    mutations: {
        setPageTheme(state) {
            state.pageColor = state.pageColor === 'white' ? 'black' : 'white'
        }
    }
})
