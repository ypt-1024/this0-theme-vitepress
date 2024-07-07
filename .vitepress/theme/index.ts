// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'
// 完整导入elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {

    app.use(ElementPlus);


    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
} satisfies Theme

