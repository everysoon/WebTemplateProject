const path = require('path')
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions:
        {
          scss: {
            additionalData: ` @import "@/styles/variables.scss"; `,
          }
        },
  },
    configureWebpack:{
      resolve:{
          alias:{
              '@' : path.join(__dirname,'src/')
          }
      }
    }

}
