import{_ as l,c as e,o as t,a as o}from"./app.61809bb9.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u73AF\u5883","slug":"\u73AF\u5883","link":"#\u73AF\u5883","children":[]},{"level":2,"title":"XSS \u653B\u51FB","slug":"xss-\u653B\u51FB","link":"#xss-\u653B\u51FB","children":[{"level":3,"title":"\u53CD\u5C04\u578B XSS \u653B\u51FB","slug":"\u53CD\u5C04\u578B-xss-\u653B\u51FB","link":"#\u53CD\u5C04\u578B-xss-\u653B\u51FB","children":[]},{"level":3,"title":"DOM \u578B XSS \u653B\u51FB","slug":"dom-\u578B-xss-\u653B\u51FB","link":"#dom-\u578B-xss-\u653B\u51FB","children":[]},{"level":3,"title":"\u5B58\u50A8\u578B XSS \u653B\u51FB","slug":"\u5B58\u50A8\u578B-xss-\u653B\u51FB","link":"#\u5B58\u50A8\u578B-xss-\u653B\u51FB","children":[]}]},{"level":2,"title":"CSRF \u653B\u51FB","slug":"csrf-\u653B\u51FB","link":"#csrf-\u653B\u51FB","children":[{"level":3,"title":"\u9632\u5FA1","slug":"\u9632\u5FA1","link":"#\u9632\u5FA1","children":[]}]}],"relativePath":"advanced/optimization/WebSecurity/README.md"}'),i={name:"advanced/optimization/WebSecurity/README.md"},c=o('<blockquote><h3 id="\u73AF\u5883" tabindex="-1">\u73AF\u5883 <a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a></h3></blockquote><ol><li>npm install</li><li>\u672C\u4EBA\u4F7F\u7528\u7684\u7F16\u8F91\u5668\u662F VSCode(\u81EA\u884C\u5B89\u88C5 Code Runner \u63D2\u4EF6\uFF0C\u7528\u4E8E\u8FD0\u884C server.js)</li></ol><blockquote><h2 id="xss-\u653B\u51FB" tabindex="-1">XSS \u653B\u51FB <a class="header-anchor" href="#xss-\u653B\u51FB" aria-hidden="true">#</a></h2></blockquote><blockquote><h3 id="\u53CD\u5C04\u578B-xss-\u653B\u51FB" tabindex="-1">\u53CD\u5C04\u578B XSS \u653B\u51FB <a class="header-anchor" href="#\u53CD\u5C04\u578B-xss-\u653B\u51FB" aria-hidden="true">#</a></h3></blockquote><ol><li>\u8FDB\u5165 XSS \u76EE\u5F55\uFF0C\u8FD0\u884C server.js (\u542F\u52A8\u672C\u5730\u670D\u52A1\u5668)</li><li>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>localhost:3000/login.html</code></li><li>\u4F7F\u7528\u9519\u8BEF\u7684\u7528\u6237\u540D/\u5BC6\u7801\u8FDB\u884C\u767B\u5F55(\u4F8B\u5982: 123 / 123)\uFF0C\u4F1A\u8DF3\u5411\uFF1A<code>http://localhost:3000/error?type=&lt;script&gt;alert(&#39;\u6076\u610F\u5185\u5BB9&#39;)&lt;/script&gt;</code></li><li>\u4F7F\u7528\u6B63\u786E\u7684\u7528\u6237\u540D: yvette / yvette \u767B\u5F55\uFF0C\u4F1A\u8DF3\u5411: <code>http://localhost:3000/welcome?type=&lt;script&gt;alert(&#39;\u6076\u610F\u5185\u5BB9&#39;)&lt;/script&gt;</code> ;\u867D\u7136 url \u4ECD\u7136\u5305\u542B\u6076\u610F\u811A\u672C\uFF0C\u4F46\u662F\u6211\u4EEC\u5DF2\u7ECF\u8FDB\u884C\u4E86\u8F6C\u4E49\uFF0C\u4E0D\u4F1A\u518D\u88AB\u653B\u51FB</li></ol><blockquote><h3 id="dom-\u578B-xss-\u653B\u51FB" tabindex="-1">DOM \u578B XSS \u653B\u51FB <a class="header-anchor" href="#dom-\u578B-xss-\u653B\u51FB" aria-hidden="true">#</a></h3></blockquote><ol><li><p>\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>localhost:3000/after.html</code></p></li><li><p>\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9: <code>2222&lt;script&gt;alert(1)&lt;/script&gt;</code></p><p>\u5F53\u7136\u5566\uFF0C\u5982\u679C\u662F\u767B\u5F55\u72B6\u6001\uFF0C\u8FD8\u53EF\u4EE5\u62FF cookie \u7B49\u4FE1\u606F~ \u8FD8\u53EF\u4EE5\u6084\u6084\u5F15\u5165\u5176\u5B83\u7684 js \u6587\u4EF6\u8FC7\u6765\uFF0C\u53EF\u6015~</p></li><li><p>\u6211\u4EEC\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u8F6C\u4E49\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u88AB\u653B\u51FB\u5566~</p></li></ol><blockquote><h3 id="\u5B58\u50A8\u578B-xss-\u653B\u51FB" tabindex="-1">\u5B58\u50A8\u578B XSS \u653B\u51FB <a class="header-anchor" href="#\u5B58\u50A8\u578B-xss-\u653B\u51FB" aria-hidden="true">#</a></h3></blockquote><ol><li>\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>localhost:3000/comments.html</code></li><li>\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\uFF0C\u5982\u672A\u767B\u5F55\u4F1A\u81EA\u52A8\u8DF3\u53BB\u767B\u5F55\u9875</li><li>\u8F93\u5165\u8BC4\u8BBA\u5185\u5BB9: <code>2222&lt;script&gt;alert(1)&lt;/script&gt;</code></li><li>\u6076\u610F\u811A\u672C\u672A\u7ECF\u8F6C\u6362\uFF0C\u5B58\u50A8\u5230\u4E86\u540E\u53F0\u3002\u4EFB\u4F55\u7528\u6237\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u90FD\u4F1A\u6267\u884C\u6076\u610F\u811A\u672C\u3002</li><li>\u9632\u8303\u5B58\u50A8\u578B XSS \u653B\u51FB\uFF0C\u9700\u8981\u6211\u4EEC\u589E\u52A0\u5B57\u7B26\u4E32\u7684\u8FC7\u6EE4\uFF1A\u524D\u7AEF\u8F93\u5165\u65F6\u8FC7\u6EE4/\u670D\u52A1\u7AEF\u589E\u52A0\u8FC7\u6EE4/\u524D\u7AEF\u8F93\u51FA\u65F6\u8FC7\u6EE4\u2014\u2014\u4E00\u53E5\u8BDD\uFF1A\u8C01\u90FD\u522B\u4FE1\uFF01</li><li>\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>localhost:3000/comments2.html</code>\uFF0C\u8F93\u5165\u8BC4\u8BBA: <code>2222&lt;script&gt;alert(1)&lt;/script&gt;</code>\uFF0C\u4E0D\u4F1A\u6709\u5F39\u6846\uFF0C\u56E0\u4E3A\u505A\u4E86\u8FC7\u6EE4\u3002</li></ol><blockquote><h2 id="csrf-\u653B\u51FB" tabindex="-1">CSRF \u653B\u51FB <a class="header-anchor" href="#csrf-\u653B\u51FB" aria-hidden="true">#</a></h2></blockquote><p>\u5077\u8D70\u4F60\u7684\u94B1:</p><ol><li>\u8FDB\u5165 CSRF \u76EE\u5F55\uFF0C\u8FD0\u884C server.js\uFF0C\u7AEF\u53E3\u53F7\u662F 3001 (runcode \u5C31\u884C)</li><li>\u5728\u63A7\u5236\u53F0: node server2.js\uFF0C\u7AEF\u53E3\u53F7 3002</li><li>\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>http://localhost:3001/</code>\uFF0C\u6CA1\u6709\u767B\u5F55\u7684\u60C5\u51B5\u4E0B\u81EA\u52A8\u8DF3\u8F6C\u767B\u5F55\u9875</li><li>\u4F7F\u7528 loki/loki \u767B\u5F55\uFF0C\u53EF\u4EE5\u770B\u5230 loki \u7684\u8D26\u53F7\u6709 10W \u7684\u4F59\u989D</li><li>loki \u5DF2\u7ECF\u767B\u5F55\u4E86\uFF0Ccookie \u5DF2\u7ECF\u6709\u4E86\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6709\u4EBA\u7ED9\u4F60\u53D1\u4E86\u4E2A\u9493\u9C7C\u7F51\u7AD9\u7684\u94FE\u63A5: <code>http://localhost:3002/fish.html</code>\uFF0C\u4F60\u70B9\u8FC7\u53BB\u4E86\uFF0C\u4F60\u7684\u94B1\u5C31\u88AB\u5077\u5077\u5077\u8D70\u4E86~~~</li><li>loki \u7684\u94B1\u5728\u4E0D\u77E5\u4E0D\u89C9\u4E2D\u5C31\u88AB\u8F6C\u5230\u4E86 yvette \u7684\u8D26\u6237</li><li>\u53EF\u6015\u4E0D~</li><li>\u4E0D\u8FC7\u94F6\u884C\u7F51\u7AD9\u7684\u5B89\u5168\u90FD\u662F\u505A\u7684\u5F88\u597D\u7684\uFF0C\u522B\u614C~</li></ol><blockquote><h3 id="\u9632\u5FA1" tabindex="-1">\u9632\u5FA1 <a class="header-anchor" href="#\u9632\u5FA1" aria-hidden="true">#</a></h3></blockquote><p>\u8BF4\u660E\uFF1Asafe1.html,safe2.html,safe3.html;fish1.html/fish2.html/fish3.html \u7684\u533A\u522B\u4EC5\u5728\u4E8E\u8BF7\u6C42\u63A5\u53E3\u4E0D\u7528\u3002</p><ol><li><p>\u4F7F\u7528\u9A8C\u8BC1\u7801\u3010\u7528\u6237\u4F53\u9A8C\u4E0D\u4F73\u3011</p><p>\u5229\u7528 svg-captcha(\u5DF2\u5B89\u88C5\u4F9D\u8D56)</p><p>\u63A5\u53E3: <code>api/transfer1</code></p></li></ol><ul><li>\u6D4F\u89C8\u5668\u8BBF\u95EE <code>http://localhost:3001/safe1.html</code>\uFF0C\u767B\u5F55\u4E4B\u540E\u53D1\u73B0\u8F6C\u8D26\u9700\u8981\u9A8C\u8BC1\u7801\u4E86~</li><li>\u73B0\u5728\u767B\u5F55\u4E4B\u540E\uFF0C\u518D\u8BF1\u60D1\u4F60\u70B9\u9493\u9C7C\u7F51\u7AD9 <code>http://localhost:3002/fish1.html</code>\uFF0C\u4F60\u7684\u94B1\u4E0D\u80FD\u88AB\u8F6C\u8D70\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u9700\u8981\u9A8C\u8BC1\u4F60\u7684\u9A8C\u8BC1\u7801\uFF0C\u53D1\u73B0\u9A8C\u8BC1\u7801\u9519\u8BEF\uFF0C\u4E0D\u4F1A\u8F6C\u8D26\u3002</li></ul><ol start="2"><li><p>\u5224\u65AD\u6765\u6E90(referer) \u3010referer \u5E76\u4E0D\u5B89\u5168\uFF0C\u5E94\u8BE5 referer \u662F\u53EF\u4EE5\u88AB\u4FEE\u6539\u7684\u3011</p><p>\u63A5\u53E3: <code>api/transfer2</code></p></li></ol><ul><li>\u6D4F\u89C8\u5668\u8BBF\u95EE <code>http://localhost:3001/safe2.html</code>\uFF0C\u767B\u5F55(loki/loki)~</li><li>\u73B0\u5728\u767B\u5F55\u4E4B\u540E\uFF0C\u518D\u8BF1\u60D1\u4F60\u70B9\u9493\u9C7C\u7F51\u7AD9 <code>http://localhost:3002/fish2.html</code>\uFF0C\u4F60\u7684\u94B1\u4E0D\u80FD\u88AB\u8F6C\u8D70\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u4F1A\u5224\u65AD\u8BF7\u6C42\u6765\u6E90\uFF0C\u53D1\u73B0\u8BF7\u6C42\u6765\u6E90\u662F <code>localhost:3002</code>\uFF0C\u4E0D\u4F1A\u8F6C\u8D26\u3002</li></ul><ol start="3"><li><p>Token\u3010\u7528\u6237\u65E0\u611F\u77E5\u3011</p><p>\u63A5\u53E3: <code>api/transfer3</code></p></li></ol><ul><li>\u6D4F\u89C8\u5668\u8BBF\u95EE <code>http://localhost:3001/safe3.html</code>\uFF0C\u767B\u5F55(loki/loki)~</li><li>\u73B0\u5728\u767B\u5F55\u4E4B\u540E\uFF0C\u518D\u8BF1\u60D1\u4F60\u70B9\u9493\u9C7C\u7F51\u7AD9 <code>http://localhost:3002/fish3.html</code>\uFF0C\u4F60\u7684\u94B1\u4E0D\u80FD\u88AB\u8F6C\u8D70\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u4F1A\u5224\u65AD\u8BF7\u6C42\u6765\u6E90\uFF0C\u53D1\u73B0\u8BF7\u6C42\u6765\u6E90\u662F <code>localhost:3002</code>\uFF0C\u4E0D\u4F1A\u8F6C\u8D26\u3002</li></ul><p>\u4E00 \u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF08XSS \u653B\u51FB\uFF09</p><p>\u653B\u51FB\u8005\u5F80 Web \u9875\u9762\u91CC\u63D2\u5165\u6076\u610F html \u4EE3\u7801\uFF0C\u5F53\u7528\u6237\u6D4F\u89C8\u8BE5\u9875\u4E4B\u65F6\uFF0C\u5D4C\u5165\u5176\u4E2D Web \u91CC\u9762\u7684 html \u4EE3\u7801\u4F1A\u88AB\u6267\u884C</p><p>xss \u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\uFF1A</p><p>\u7528\u6237\u63D0\u4EA4\u7684\u6570\u636E\u672A\u7ECF\u5904\u7406\uFF0C\u76F4\u63A5\u4F4F\u6CE8\u5165\u5230\u52A8\u6001\u9875\u9762\u4E2D</p><p>\u5371\u5BB3\uFF1A\u76D7\u53D6\u5404\u7C7B\u7528\u6237\u5E10\u53F7 \uFF0C\u4F01\u4E1A\u6570\u636E\uFF0C\u5F3A\u5236\u53D1\u9001\u7535\u5B50\u90AE\u4EF6\uFF0C\u7F51\u7AD9\u6302\u9A6C</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A\u4E0D\u4FE1\u8D56\u7528\u6237\u8F93\u5165\uFF0C\u5BF9\u7279\u6B8A\u5B57\u7B26\u5982\u201D&lt;\u201D,\u201D\u201D\u8F6C\u4E49\uFF0C\u6216\u8005\u662F\u66FF\u6362</p><p>\u5C0F\u7ED3\uFF1A\u7528\u6237\u63D0\u4EA4\u7684\u65F6\u5019 \uFF0C\u53EF\u80FD\u8F93\u5165\u4EE3\u7801\uFF0C\u5B58\u653E\u5230\u6570\u636E\u5E93</p><p>\u200B \u7528\u6237\u8BFB\u53D6\u6570\u636E\u7684\u65F6\u5019\uFF0C\u6570\u636E\u5E93\u4E2D\u4EE3\u7801\u53EF\u80FD\u4F1A\u6267\u884C</p><p>\u4E8C \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020(CSRF \u653B\u51FB)</p><p>\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020(CSRF \u653B\u51FB)</p><p>\u200B \u73B0\u8C61\uFF1A\u6709\u4E00\u4E2A\u548C\u5B98\u7F51\u4E00\u6837\u7684\u7F51\u7AD9\uFF0C\u7BE1\u6539\u5B98\u7F51\u7684\u63D0\u4EA4\u7684\u8DEF\u5F84\uFF0C\u6216\u8005 cookie \u4E00\u8D77\u63D0\u4EA4\uFF0C\u5BFC\u81F4\u63D0\u4EA4\u6570\u636E\u6D41\u5165\u5916\u90E8\u7F51\u7AD9 \u4ECE\u800C\u6CC4\u5BC6</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><p>\u200B \u7528\u6237\u5FC5\u987B\u8F93\u5165\u9A8C\u8BC1\u7801\uFF0C\u624B\u673A\u9A8C\u8BC1\u7801...</p><p>\u200B \u6DFB\u52A0 token \u6765\u8FDB\u884C\u4E8C\u6B21\u6821\u9A8C \u589E\u5F3A\u5B89\u5168\u6027</p><p>\u4E09\uFF1ASQL \u6CE8\u5165\u653B\u51FB</p><p>\u9A8C\u8BC1\u7528\u6237\u540D \u548C \u5BC6\u7801\u76F8\u7B49\u7684 sql</p><p>\u200B select * from \u8868\u540D where uName=&#39;{$uName}&#39; and uPwd=&#39;{$uPwd}&#39;;</p><p>\u200B select * from \u8868\u540D where uName=&#39;zhangsan&#39; or 1=&#39;1&#39; and uPwd=&#39;&#39;;</p><p>\u6982\u5FF5\uFF1A\u653B\u51FB\u8005\u5C06 SQL \u547D\u4EE4\u63D2\u5165\u5230 Web \u8868\u5355\u63D0\u4EA4\u3001\u8F93\u5165\u57DF\u540D\u3001\u9875\u9762\u8BF7\u6C42\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C</p><p>\u200B \u6700\u7EC8\u8FBE\u5230\u6B3A\u9A97\u670D\u52A1\u5668\u6267\u884C\u6076\u610F\u7684 SQL \u547D\u4EE4</p><p>\u5371\u5BB3\uFF1A \u4EFB\u610F\u767B\u5F55\u7CFB\u7EDF \uFF0C\u8FDB\u884C\u4EFB\u610F\u64CD\u4F5C</p><p>\u89E3\u51B3\uFF1A 1. \u589E\u52A0\u9ED1\u767D\u540D\u5355\u9A8C\u8BC1</p><p>\u200B \u767D\uFF1A\u6570\u636E\u7C7B\u578B \u957F\u5EA6 \u53D6\u503C\u8303\u56F4\uFF08js \u6B63\u5219\u9A8C\u8BC1\uFF09.. \u5305\u542B= \u2018 \uFF0C\u7EC8\u6B62\u8BF7\u6C42</p><p>\u200B \u9ED1\uFF1A\u5305\u542B\u6076\u610F\u5185\u5BB9\u62D2\u7EDD\u8BF7\u6C42</p><p>\u200B 2. \u5B89\u5168\u76D1\u6D4B \uFF0C\u4F9D\u9760\u5404\u79CD\u5B89\u5168\u6F0F\u6D1E\u7684\u5DE5\u5177 \u6765\u76D1\u6D4B\u5B89\u5168\u6027</p><p>\u200B 3. \u9632\u6B62\u654F\u611F\u4FE1\u606F\u6CC4\u9732 --\u300B\u7F29\u51CF\u7528\u6237 \u7684\u6743\u9650</p><p>\u56DB \u63A5\u53E3\u5B89\u5168\uFF1A</p><p>\u200B \u4F20\u9012\u6570\u636E\u7684\u65F6\u5019\uFF0C\u628A\u6570\u636E\u52A0\u5BC6\uFF0C\u5230\u4E86\u540E\u7AEF\u89E3\u5BC6\u6570\u636E\uFF0C\u6B63\u5E38\u5165\u5E93</p><p>\u200B \u6570\u636E crptyjs \u52A0\u5BC6</p><p>\u200B \u52A0\u5BC6 \u8FC7\u7A0B\uFF1A</p><p>\u200B</p>',51),s=[c];function a(p,r,d,h,n,u){return t(),e("div",null,s)}const S=l(i,[["render",a]]);export{f as __pageData,S as default};
