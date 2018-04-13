var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue"], function (require, exports, vue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    vue_1 = __importDefault(vue_1);
    console.log("init app");
    var app = new vue_1.default({
        el: '#app',
        data: {
            greeting: 'Welcome to your Vue.js app!',
            docsURL: 'http://vuejs.org/guide/',
            discordURL: 'https://chat.vuejs.org',
            forumURL: 'http://forum.vuejs.org/'
        },
        methods: {
            humanizeURL: function (url) {
                return url
                    .replace(/^https?:\/\//, '')
                    .replace(/\/$/, '');
            }
        }
    });
    exports.default = app;
});
