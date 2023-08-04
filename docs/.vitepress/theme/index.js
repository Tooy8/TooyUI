// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
// import "element-plus/dist/index.css";
// import elementplus from "element-plus"
import YUI from '../../../node_modules/tooy-ui'
import "../../../node_modules/tooy-ui/dist/style.css";

export default {
    ...DefaultTheme,
    enhanceApp: async ({ app, router, siteData }) => {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        app.use(YUI);

    },
};
