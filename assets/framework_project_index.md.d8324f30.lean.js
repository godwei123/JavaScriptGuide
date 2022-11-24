import{_ as e,c as a,o as s,a as l}from"./app.61809bb9.js";const n="/javascript-guide/assets/2f696d672d73746.856fa011.png",C=JSON.parse('{"title":"\u9879\u76EE\u5DE5\u7A0B\u5316\uFF08Webpack\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u89C1\u7684 Loader","slug":"\u5E38\u89C1\u7684-loader","link":"#\u5E38\u89C1\u7684-loader","children":[]},{"level":2,"title":"\u5E38\u89C1\u7684 Plugin","slug":"\u5E38\u89C1\u7684-plugin","link":"#\u5E38\u89C1\u7684-plugin","children":[]},{"level":2,"title":"Loader \u548C Plugin \u7684\u533A\u522B\uFF1F","slug":"loader-\u548C-plugin-\u7684\u533A\u522B","link":"#loader-\u548C-plugin-\u7684\u533A\u522B","children":[]},{"level":2,"title":".browerslist","slug":"browerslist","link":"#browerslist","children":[]},{"level":2,"title":"Webpack \u6784\u5EFA\u6D41\u7A0B","slug":"webpack-\u6784\u5EFA\u6D41\u7A0B","link":"#webpack-\u6784\u5EFA\u6D41\u7A0B","children":[]},{"level":2,"title":"sourcemap \u662F\u4EC0\u4E48\uFF1F\u751F\u4EA7\u73AF\u5883\u600E\u4E48\u7528\uFF1F","slug":"sourcemap-\u662F\u4EC0\u4E48-\u751F\u4EA7\u73AF\u5883\u600E\u4E48\u7528","link":"#sourcemap-\u662F\u4EC0\u4E48-\u751F\u4EA7\u73AF\u5883\u600E\u4E48\u7528","children":[]},{"level":2,"title":"\u6A21\u5757\u6253\u5305\u539F\u7406","slug":"\u6A21\u5757\u6253\u5305\u539F\u7406","link":"#\u6A21\u5757\u6253\u5305\u539F\u7406","children":[]},{"level":2,"title":"\u6587\u4EF6\u76D1\u542C\u539F\u7406\u5462\uFF1F","slug":"\u6587\u4EF6\u76D1\u542C\u539F\u7406\u5462","link":"#\u6587\u4EF6\u76D1\u542C\u539F\u7406\u5462","children":[]},{"level":2,"title":"Webpack \u7684\u70ED\u66F4\u65B0\u539F\u7406","slug":"webpack-\u7684\u70ED\u66F4\u65B0\u539F\u7406","link":"#webpack-\u7684\u70ED\u66F4\u65B0\u539F\u7406","children":[]},{"level":2,"title":"\u6587\u4EF6\u6307\u7EB9\u662F\u4EC0\u4E48\uFF1F\u600E\u4E48\u7528\uFF1F","slug":"\u6587\u4EF6\u6307\u7EB9\u662F\u4EC0\u4E48-\u600E\u4E48\u7528","link":"#\u6587\u4EF6\u6307\u7EB9\u662F\u4EC0\u4E48-\u600E\u4E48\u7528","children":[]},{"level":2,"title":"\u5982\u4F55\u4FDD\u8BC1\u5404\u4E2A loader \u6309\u7167\u9884\u60F3\u65B9\u5F0F\u5DE5\u4F5C\uFF1F","slug":"\u5982\u4F55\u4FDD\u8BC1\u5404\u4E2A-loader-\u6309\u7167\u9884\u60F3\u65B9\u5F0F\u5DE5\u4F5C","link":"#\u5982\u4F55\u4FDD\u8BC1\u5404\u4E2A-loader-\u6309\u7167\u9884\u60F3\u65B9\u5F0F\u5DE5\u4F5C","children":[]},{"level":2,"title":"\u4F18\u5316 Webpack \u7684\u6784\u5EFA\u901F\u5EA6","slug":"\u4F18\u5316-webpack-\u7684\u6784\u5EFA\u901F\u5EA6","link":"#\u4F18\u5316-webpack-\u7684\u6784\u5EFA\u901F\u5EA6","children":[]},{"level":2,"title":"Babel \u539F\u7406","slug":"babel-\u539F\u7406","link":"#babel-\u539F\u7406","children":[]},{"level":2,"title":"Webpack \u91CC\u9762\u7684\u63D2\u4EF6\u662F\u600E\u4E48\u5B9E\u73B0\u7684","slug":"webpack-\u91CC\u9762\u7684\u63D2\u4EF6\u662F\u600E\u4E48\u5B9E\u73B0\u7684","link":"#webpack-\u91CC\u9762\u7684\u63D2\u4EF6\u662F\u600E\u4E48\u5B9E\u73B0\u7684","children":[]},{"level":2,"title":"Webpack \u4E3A\u4EC0\u4E48\u6162\uFF0C\u5982\u4F55\u8FDB\u884C\u4F18\u5316","slug":"webpack-\u4E3A\u4EC0\u4E48\u6162-\u5982\u4F55\u8FDB\u884C\u4F18\u5316","link":"#webpack-\u4E3A\u4EC0\u4E48\u6162-\u5982\u4F55\u8FDB\u884C\u4F18\u5316","children":[]},{"level":2,"title":"Webpack \u70ED\u66F4\u65B0\u7684\u539F\u7406","slug":"webpack-\u70ED\u66F4\u65B0\u7684\u539F\u7406","link":"#webpack-\u70ED\u66F4\u65B0\u7684\u539F\u7406","children":[{"level":3,"title":"\u4E00\u3001\u57FA\u7840\u6982\u5FF5","slug":"\u4E00\u3001\u57FA\u7840\u6982\u5FF5","link":"#\u4E00\u3001\u57FA\u7840\u6982\u5FF5","children":[]},{"level":3,"title":"\u4E8C\u3001\u539F\u7406","slug":"\u4E8C\u3001\u539F\u7406","link":"#\u4E8C\u3001\u539F\u7406","children":[]},{"level":3,"title":"\u4E09\u3001HMR \u539F\u7406\u8BE6\u89E3","slug":"\u4E09\u3001hmr-\u539F\u7406\u8BE6\u89E3","link":"#\u4E09\u3001hmr-\u539F\u7406\u8BE6\u89E3","children":[]}]},{"level":2,"title":"Webpack \u7684\u6784\u5EFA\u6D41\u7A0B","slug":"webpack-\u7684\u6784\u5EFA\u6D41\u7A0B","link":"#webpack-\u7684\u6784\u5EFA\u6D41\u7A0B","children":[{"level":3,"title":"tree-shaking \u7684\u539F\u7406","slug":"tree-shaking-\u7684\u539F\u7406","link":"#tree-shaking-\u7684\u539F\u7406","children":[]}]},{"level":2,"title":"JavaScript \u6A21\u5757\u5316\u5B9E\u73B0\u7684\u6280\u672F","slug":"javascript-\u6A21\u5757\u5316\u5B9E\u73B0\u7684\u6280\u672F","link":"#javascript-\u6A21\u5757\u5316\u5B9E\u73B0\u7684\u6280\u672F","children":[{"level":3,"title":"\u4E00\u3001CommonJS","slug":"\u4E00\u3001commonjs","link":"#\u4E00\u3001commonjs","children":[]},{"level":3,"title":"\u4E8C\u3001ES6 \u6A21\u5757\u5316","slug":"\u4E8C\u3001es6-\u6A21\u5757\u5316","link":"#\u4E8C\u3001es6-\u6A21\u5757\u5316","children":[]},{"level":3,"title":"\u4E09\u3001AMD","slug":"\u4E09\u3001amd","link":"#\u4E09\u3001amd","children":[]},{"level":3,"title":"\u56DB\u3001CMD","slug":"\u56DB\u3001cmd","link":"#\u56DB\u3001cmd","children":[]},{"level":3,"title":"\u4E94\u3001UMD \u901A\u7528\u6A21\u5757\u89C4\u8303","slug":"\u4E94\u3001umd-\u901A\u7528\u6A21\u5757\u89C4\u8303","link":"#\u4E94\u3001umd-\u901A\u7528\u6A21\u5757\u89C4\u8303","children":[]},{"level":3,"title":"\u516D\u3001\u603B\u7ED3","slug":"\u516D\u3001\u603B\u7ED3","link":"#\u516D\u3001\u603B\u7ED3","children":[]}]},{"level":2,"title":"CommonJS \u548C ES6 Module \u7684\u533A\u522B","slug":"commonjs-\u548C-es6-module-\u7684\u533A\u522B","link":"#commonjs-\u548C-es6-module-\u7684\u533A\u522B","children":[]}],"relativePath":"framework/project/index.md"}'),p={name:"framework/project/index.md"},i=l("",105),r=[i];function o(t,c,d,h,u,b){return s(),a("div",null,r)}const k=e(p,[["render",o]]);export{C as __pageData,k as default};
