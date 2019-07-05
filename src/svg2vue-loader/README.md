Node-module for convertion svg-source to Vue-component on importing

#### Usage

file.ts

```ts
import ComplexCam from "@/plugins/vsvg/ComplexCam.vsvg"
export default {
    components: { ComplexCam },
    methods: {
        onIconClick() {  alert('onIconClick: ComplexCam'); }
    }
}
```
file.vue

```html
<template>
  <ComplexCam :className="'test'" @click="onIconClick()"/>
</template>
```

file.vsvg

```html
<svg viewBox="0 0 100 100">
  <ellipse cx="50" cy="50" rx="50" ry="50"></ellipse>
</svg>
```

#### Configuring

* TS (vsvg.d.ts:):

```ts
declare module "*.vsvg" {
  import Vue from 'vue'
  export default Vue
}
```

* Vue-CLI (vue.config.js)

```js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vsvg')
            .test(/\.vsvg$/)
            .use('svg2vue-loader')
            .loader('svg2vue-loader')
            .end();
    },
    configureWebpack: {
        // fix error: You are using the runtime-only build of Vue...
        resolve: {
            extensions: ['.ts'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
};
```

# npm

Local-package

```
npm link src\npm-modules\svg2vue-loader
```