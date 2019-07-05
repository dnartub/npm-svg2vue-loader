"use strict";

exports.default = function (source) {
    var pathItems = this.resourcePath.split(/[\\\.\/]/);
    var fileName = pathItems[pathItems.length-2];
    var fileText = source.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    return `
    import Vue from 'vue'
    const component = Vue.component('${fileName}', {
        template: '<div :class="className" @click="$emit(\\'click\\', $event)" >${fileText.replace(/\r?\n|\r/g, "")}</div>',
        props: ["className"]
    });
    export default component;
    `;
};