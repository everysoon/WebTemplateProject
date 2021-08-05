import Vue     from 'vue';
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
                'light-coral':'#F08080',
                gray:'#B7B9BA',
                'dark-gray':'#5A5A5A',
                'light-gray':'#959595',
                white:'#FFFFFF',
                black:'#000000',
                'primary-l-1' : '#EC407A',
                'primary-d-3':'#AD1457',
                'teal-l-5':'#E0F2F1',
            }
        }
    }
});
