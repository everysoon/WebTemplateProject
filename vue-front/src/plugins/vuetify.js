import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/_index.scss'
Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes:{
            light:{
                primary:'#FFB6C1',
                secondary:'#FFC0CB',
                accent:'#F1B1CB',
                coral:'#FFCAC1',
                lightCoral:'#F08080',
                gray:'#B7B9BA',
                darkGray:'#5A5A5A',
                lightGray:'#959595',
                white:'#FFFFFF',
                black:'#000000'
            }
        }
    }
});
