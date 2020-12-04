import Vue from 'vue'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import Vuetify from 'vuetify'
import 'tiptap-vuetify/dist/main.css'
import 'vuetify/dist/vuetify.min.css'
const vuetify = new Vuetify({});
export default ({ app }) => {
    Vue.use(TiptapVuetifyPlugin, {
        vuetify,
        iconsGroup: 'mdi'
    })
}