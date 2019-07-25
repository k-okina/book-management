import '@/firebase/index'
import { auth } from '@/firebase/index'
import { Upload } from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/upload.css'
import { setting } from 'typescript-fsa-vuex'
import Vue from 'vue'
import ProxyComponent from 'vue-proxy-component'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import { isProd } from './submodules/env'

locale.use(lang)

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Upload)
Vue.use(ProxyComponent)

Vue.use(Vuetify)

auth().setPersistence(auth.Auth.Persistence.LOCAL)

if (isProd()) {
  setting({
    addIdToSuffix: true,
  })
} else {
  setting({
    doNotUseSamePrefix: true,
    doNotCreateSameFluxType: true,
    addIdToSuffix: true,
  })
}
