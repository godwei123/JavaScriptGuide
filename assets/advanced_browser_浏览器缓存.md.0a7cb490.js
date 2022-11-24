import{_ as e,c as a,o as i,a as t}from"./app.61809bb9.js";const l="/javascript-guide/assets/32362e706e67.659670c8.png",_=JSON.parse('{"title":"\u6D4F\u89C8\u5668\u7F13\u5B58","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B","slug":"\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B","link":"#\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u7F13\u5B58\u4F4D\u7F6E","slug":"\u7F13\u5B58\u4F4D\u7F6E","link":"#\u7F13\u5B58\u4F4D\u7F6E","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"\u5F3A\u7F13\u5B58","slug":"\u5F3A\u7F13\u5B58","link":"#\u5F3A\u7F13\u5B58","children":[]},{"level":2,"title":"\u534F\u5546\u7F13\u5B58","slug":"\u534F\u5546\u7F13\u5B58","link":"#\u534F\u5546\u7F13\u5B58","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}],"relativePath":"advanced/browser/\u6D4F\u89C8\u5668\u7F13\u5B58.md"}'),r={name:"advanced/browser/\u6D4F\u89C8\u5668\u7F13\u5B58.md"},d=t('<h1 id="\u6D4F\u89C8\u5668\u7F13\u5B58" tabindex="-1">\u6D4F\u89C8\u5668\u7F13\u5B58 <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7F13\u5B58" aria-hidden="true">#</a></h1><h2 id="\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B" tabindex="-1">\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7F13\u5B58\u8FC7\u7A0B" aria-hidden="true">#</a></h2><ul><li>\u6D4F\u89C8\u5668\u7B2C\u4E00\u6B21\u52A0\u8F7D\u8D44\u6E90\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE 200\uFF0C\u6D4F\u89C8\u5668\u4ECE\u670D\u52A1\u5668\u4E0B\u8F7D\u8D44\u6E90\u6587\u4EF6\uFF0C\u5E76\u7F13\u5B58\u8D44\u6E90\u6587\u4EF6\u4E0E response header\uFF0C\u4EE5\u4F9B\u4E0B\u6B21\u52A0\u8F7D\u65F6\u5BF9\u6BD4\u4F7F\u7528\uFF1B</li><li>\u4E0B\u4E00\u6B21\u52A0\u8F7D\u8D44\u6E90\u65F6\uFF0C\u7531\u4E8E\u5F3A\u5236\u7F13\u5B58\u4F18\u5148\u7EA7\u8F83\u9AD8\uFF0C\u5148\u6BD4\u8F83\u5F53\u524D\u65F6\u95F4\u4E0E\u4E0A\u4E00\u6B21\u8FD4\u56DE 200 \u65F6\u7684\u65F6\u95F4\u5DEE\uFF0C\u5982\u679C\u6CA1\u6709\u8D85\u8FC7 cache-control \u8BBE\u7F6E\u7684 max-age\uFF0C\u5219\u6CA1\u6709\u8FC7\u671F\uFF0C\u5E76\u547D\u4E2D\u5F3A\u7F13\u5B58\uFF0C\u76F4\u63A5\u4ECE\u672C\u5730\u8BFB\u53D6\u8D44\u6E90\u3002\u5982\u679C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 HTTP1.1\uFF0C\u5219\u4F7F\u7528 expires \u5934\u5224\u65AD\u662F\u5426\u8FC7\u671F\uFF1B</li><li>\u5982\u679C\u8D44\u6E90\u5DF2\u8FC7\u671F\uFF0C\u5219\u8868\u660E\u5F3A\u5236\u7F13\u5B58\u6CA1\u6709\u88AB\u547D\u4E2D\uFF0C\u5219\u5F00\u59CB\u534F\u5546\u7F13\u5B58\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u9001\u5E26\u6709 If-None-Match \u548C If-Modified-Since \u7684\u8BF7\u6C42\uFF1B</li><li>\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u4F18\u5148\u6839\u636E Etag \u7684\u503C\u5224\u65AD\u88AB\u8BF7\u6C42\u7684\u6587\u4EF6\u6709\u6CA1\u6709\u505A\u4FEE\u6539\uFF0CEtag \u503C\u4E00\u81F4\u5219\u6CA1\u6709\u4FEE\u6539\uFF0C\u547D\u4E2D\u534F\u5546\u7F13\u5B58\uFF0C\u8FD4\u56DE 304\uFF1B\u5982\u679C\u4E0D\u4E00\u81F4\u5219\u6709\u6539\u52A8\uFF0C\u76F4\u63A5\u8FD4\u56DE\u65B0\u7684\u8D44\u6E90\u6587\u4EF6\u5E26\u4E0A\u65B0\u7684 Etag \u503C\u5E76\u8FD4\u56DE 200\uFF1B</li><li>\u5982\u679C\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u6CA1\u6709 Etag \u503C\uFF0C\u5219\u5C06 If-Modified-Since \u548C\u88AB\u8BF7\u6C42\u6587\u4EF6\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u505A\u6BD4\u5BF9\uFF0C\u4E00\u81F4\u5219\u547D\u4E2D\u534F\u5546\u7F13\u5B58\uFF0C\u8FD4\u56DE 304\uFF1B\u4E0D\u4E00\u81F4\u5219\u8FD4\u56DE\u65B0\u7684 last-modified \u548C\u6587\u4EF6\u5E76\u8FD4\u56DE 200\uFF1B</li></ul><p>\u5F88\u591A\u7F51\u7AD9\u7684\u8D44\u6E90\u540E\u9762\u90FD\u52A0\u4E86\u7248\u672C\u53F7\uFF0C\u8FD9\u6837\u505A\u7684\u76EE\u7684\u662F\uFF1A\u6BCF\u6B21\u5347\u7EA7\u4E86 JS \u6216 CSS \u6587\u4EF6\u540E\uFF0C\u4E3A\u4E86\u9632\u6B62\u6D4F\u89C8\u5668\u8FDB\u884C\u7F13\u5B58\uFF0C\u5F3A\u5236\u6539\u53D8\u7248\u672C\u53F7\uFF0C\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u5C31\u4F1A\u91CD\u65B0\u4E0B\u8F7D\u65B0\u7684 JS \u6216 CSS \u6587\u4EF6 \uFF0C\u4EE5\u4FDD\u8BC1\u7528\u6237\u80FD\u591F\u53CA\u65F6\u83B7\u5F97\u7F51\u7AD9\u7684\u6700\u65B0\u66F4\u65B0\u3002</p><p><img src="'+l+'" alt="32362e706e67"></p><p><a href="https://github.com/lgwebdream/FE-Interview/issues/923" target="_blank" rel="noreferrer">https://github.com/lgwebdream/FE-Interview/issues/923</a></p><h2 id="\u7F13\u5B58\u4F4D\u7F6E" tabindex="-1">\u7F13\u5B58\u4F4D\u7F6E <a class="header-anchor" href="#\u7F13\u5B58\u4F4D\u7F6E" aria-hidden="true">#</a></h2><h4 id="memory-cache" tabindex="-1">Memory Cache <a class="header-anchor" href="#memory-cache" aria-hidden="true">#</a></h4><p>\u5185\u5B58\u7F13\u5B58\u662F\u4E00\u79CD\u6BD4\u8F83\u7279\u6B8A\u7684\u7F13\u5B58\uFF0C\u4ED6\u4E0D\u53D7 max-age\u3001no-cache \u7B49\u914D\u7F6E\u7684\u5F71\u54CD\uFF0C\u5373\u4F7F\u6211\u4EEC\u4E0D\u8BBE\u7F6E\u7F13\u5B58\uFF0C\u5982\u679C\u5F53\u524D\u7684\u5185\u5B58\u7A7A\u95F4\u6BD4\u8F83\u5145\u88D5\u7684\u8BDD\uFF0C\u4E00\u4E9B\u8D44\u6E90\u8FD8\u662F\u4F1A\u88AB\u7F13\u5B58\u4E0B\u6765\u3002\u4F46\u8FD9\u79CD\u7F13\u5B58\u662F\u6682\u65F6\u7684\uFF0C\u4E00\u65E6\u5173\u95ED\u4E86\u6D4F\u89C8\u5668\uFF0C\u8FD9\u4E00\u90E8\u5206\u7528\u4E8E\u7F13\u5B58\u7684\u5185\u5B58\u7A7A\u95F4\u5C31\u4F1A\u88AB\u91CA\u653E\u6389\u3002\u5982\u679C\u771F\u7684\u4E0D\u60F3\u4F7F\u7528\u7F13\u5B58\uFF0C\u53EF\u4EE5\u8BBE\u7F6E no-store\uFF0C\u8FD9\u6837\uFF0C\u5373\u4FBF\u662F\u5185\u5B58\u7F13\u5B58\uFF0C\u4E5F\u4E0D\u4F1A\u751F\u6548\u3002</p><p>\u5185\u5B58\u7F13\u5B58\u867D\u7136\u6BD4\u8F83\u9AD8\u6548\uFF0C\u4F46\u8FD8\u662F\u53D7\u9650\u4E8E\u8BA1\u7B97\u673A\u5185\u5B58\u7684\u5927\u5C0F\uFF0C\u6240\u4EE5\u80FD\u8BA9\u6211\u4EEC\u4F7F\u7528\u7684\u5185\u5B58\u5E76\u4E0D\u591A\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u786C\u76D8\u6765\u5B58\u50A8\u5927\u91CF\u7684\u7F13\u5B58\u3002</p><h4 id="disk-cache" tabindex="-1">Disk Cache <a class="header-anchor" href="#disk-cache" aria-hidden="true">#</a></h4><p>Disk Cache \u4E5F\u5C31\u662F\u5B58\u50A8\u5728\u786C\u76D8\u4E2D\u7684\u7F13\u5B58\u3002\u76F8\u6BD4\u8F83\u5185\u5B58\u7F13\u5B58\u7684\u4F18\u52BF\u5C31\u662F\u957F\u65F6\u6548\u3002 \u5B83\u4F1A\u6839\u636E HTTP Header \u4E2D\u8BBE\u7F6E\u7684\u5B57\u6BB5\u7C7B\u578B\uFF0C\u6765\u5224\u65AD\u8D44\u6E90\u662F\u5426\u9700\u8981\u91CD\u65B0\u8BF7\u6C42\uFF0C\u662F\u5426\u4E0D\u9700\u8981\u8BF7\u6C42\u3002 \u5982\u679C\u5F53\u524D\u5185\u5B58\u4F7F\u7528\u7387\u9AD8\u7684\u8BDD\uFF0C\u8BF7\u6C42\u8D44\u6E90\u5927\u6982\u7387\u4F1A\u88AB\u7F13\u5B58\u5230 disk cache\u3002</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u5F3A\u7F13\u5B58" tabindex="-1">\u5F3A\u7F13\u5B58 <a class="header-anchor" href="#\u5F3A\u7F13\u5B58" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u5F3A\u7F13\u5B58\u7B56\u7565\u65F6\uFF0C\u5982\u679C\u7F13\u5B58\u8D44\u6E90\u6709\u6548\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u8D44\u6E90\uFF0C\u4E0D\u5FC5\u518D\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\u3002</p><p>\u5F3A\u7F13\u5B58\u7B56\u7565\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u6765\u8BBE\u7F6E\uFF0C\u5206\u522B\u662F http \u5934\u4FE1\u606F\u4E2D\u7684 Expires \u5C5E\u6027\u548C Cache-Control \u5C5E\u6027\u3002</p><p>\uFF081\uFF09\u670D\u52A1\u5668\u901A\u8FC7\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 Expires \u5C5E\u6027\uFF0C\u6765\u6307\u5B9A\u8D44\u6E90\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u5728\u8FC7\u671F\u65F6\u95F4\u4EE5\u5185\uFF0C\u8BE5\u8D44\u6E90\u53EF\u4EE5\u88AB\u7F13\u5B58\u4F7F\u7528\uFF0C\u4E0D\u5FC5\u518D\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u3002\u8FD9\u4E2A\u65F6\u95F4\u662F\u4E00\u4E2A\u7EDD\u5BF9\u65F6\u95F4\uFF0C\u5B83\u662F\u670D\u52A1\u5668\u7684\u65F6\u95F4\uFF0C\u56E0\u6B64\u53EF\u80FD\u5B58\u5728\u8FD9\u6837\u7684\u95EE\u9898\uFF0C\u5C31\u662F\u5BA2\u6237\u7AEF\u7684\u65F6\u95F4\u548C\u670D\u52A1\u5668\u7AEF\u7684\u65F6\u95F4\u4E0D\u4E00\u81F4\uFF0C\u6216\u8005\u7528\u6237\u53EF\u4EE5\u5BF9\u5BA2\u6237\u7AEF\u65F6\u95F4\u8FDB\u884C\u4FEE\u6539\u7684\u60C5\u51B5\uFF0C\u8FD9\u6837\u5C31\u53EF\u80FD\u4F1A\u5F71\u54CD\u7F13\u5B58\u547D\u4E2D\u7684\u7ED3\u679C\u3002 \uFF082\uFF09Expires \u662F http1.0 \u4E2D\u7684\u65B9\u5F0F\uFF0C\u56E0\u4E3A\u5B83\u7684\u4E00\u4E9B\u7F3A\u70B9\uFF0C\u5728 HTTP 1.1 \u4E2D\u63D0\u51FA\u4E86\u4E00\u4E2A\u65B0\u7684\u5934\u90E8\u5C5E\u6027\u5C31\u662F Cache-Control \u5C5E\u6027\uFF0C\u5B83\u63D0\u4F9B\u4E86\u5BF9\u8D44\u6E90\u7684\u7F13\u5B58\u7684\u66F4\u7CBE\u786E\u7684\u63A7\u5236\u3002\u5B83\u6709\u5F88\u591A\u4E0D\u540C\u7684\u503C\uFF0C</p><p>Cache-Control \u53EF\u8BBE\u7F6E\u7684\u5B57\u6BB5\uFF1A</p><ul><li>public\uFF1A\u8BBE\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u503C\u7684\u8D44\u6E90\u8868\u793A\u53EF\u4EE5\u88AB\u4EFB\u4F55\u5BF9\u8C61\uFF08\u5305\u62EC\uFF1A\u53D1\u9001\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u3001\u4EE3\u7406\u670D\u52A1\u5668\u7B49\u7B49\uFF09\u7F13\u5B58\u3002\u8FD9\u4E2A\u5B57\u6BB5\u503C\u4E0D\u5E38\u7528\uFF0C\u4E00\u822C\u8FD8\u662F\u4F7F\u7528 max-age=\u6765\u7CBE\u786E\u63A7\u5236\uFF1B</li><li>private\uFF1A\u8BBE\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u503C\u7684\u8D44\u6E90\u53EA\u80FD\u88AB\u7528\u6237\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u4E0D\u5141\u8BB8\u4EFB\u4F55\u4EE3\u7406\u670D\u52A1\u5668\u7F13\u5B58\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u5F53\u4E2D\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u542B\u6709\u7528\u6237\u4FE1\u606F\u7684 HTML\uFF0C\u901A\u5E38\u90FD\u8981\u8BBE\u7F6E\u8FD9\u4E2A\u5B57\u6BB5\u503C\uFF0C\u907F\u514D\u4EE3\u7406\u670D\u52A1\u5668(CDN)\u7F13\u5B58\uFF1B</li><li>no-cache\uFF1A\u8BBE\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u9700\u8981\u5148\u548C\u670D\u52A1\u7AEF\u786E\u8BA4\u8FD4\u56DE\u7684\u8D44\u6E90\u662F\u5426\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5982\u679C\u8D44\u6E90\u672A\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u597D\u7684\u8D44\u6E90\uFF1B</li><li>no-store\uFF1A\u8BBE\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u8868\u793A\u7981\u6B62\u4EFB\u4F55\u7F13\u5B58\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u5411\u670D\u52A1\u7AEF\u53D1\u8D77\u65B0\u7684\u8BF7\u6C42\uFF0C\u62C9\u53D6\u6700\u65B0\u7684\u8D44\u6E90\uFF1B</li><li>max-age=\uFF1A\u8BBE\u7F6E\u7F13\u5B58\u7684\u6700\u5927\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF1B</li><li>s-maxage=\uFF1A\u4F18\u5148\u7EA7\u9AD8\u4E8E max-age=\uFF0C\u4EC5\u9002\u7528\u4E8E\u5171\u4EAB\u7F13\u5B58(CDN)\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E max-age \u6216\u8005 Expires \u5934\uFF1B</li><li>max-stale=\uFF1A\u8BBE\u7F6E\u4E86\u8BE5\u5B57\u6BB5\u8868\u660E\u5BA2\u6237\u7AEF\u613F\u610F\u63A5\u6536\u5DF2\u7ECF\u8FC7\u671F\u7684\u8D44\u6E90\uFF0C\u4F46\u662F\u4E0D\u80FD\u8D85\u8FC7\u7ED9\u5B9A\u7684\u65F6\u95F4\u9650\u5236\u3002</li></ul><p>\u4E00\u822C\u6765\u8BF4\u53EA\u9700\u8981\u8BBE\u7F6E\u5176\u4E2D\u4E00\u79CD\u65B9\u5F0F\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5F3A\u7F13\u5B58\u7B56\u7565\uFF0C\u5F53\u4E24\u79CD\u65B9\u5F0F\u4E00\u8D77\u4F7F\u7528\u65F6\uFF0CCache-Control \u7684\u4F18\u5148\u7EA7\u8981\u9AD8\u4E8E Expires\u3002</p><p>no-cache \u548C no-store \u5F88\u5BB9\u6613\u6DF7\u6DC6\uFF1A</p><ul><li>no-cache \u662F\u6307\u5148\u8981\u548C\u670D\u52A1\u5668\u786E\u8BA4\u662F\u5426\u6709\u8D44\u6E90\u66F4\u65B0\uFF0C\u5728\u8FDB\u884C\u5224\u65AD\u3002\u4E5F\u5C31\u662F\u8BF4\u6CA1\u6709\u5F3A\u7F13\u5B58\uFF0C\u4F46\u662F\u4F1A\u6709\u534F\u5546\u7F13\u5B58\uFF1B</li><li>no-store \u662F\u6307\u4E0D\u4F7F\u7528\u4EFB\u4F55\u7F13\u5B58\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u76F4\u63A5\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\u3002</li></ul><h2 id="\u534F\u5546\u7F13\u5B58" tabindex="-1">\u534F\u5546\u7F13\u5B58 <a class="header-anchor" href="#\u534F\u5546\u7F13\u5B58" aria-hidden="true">#</a></h2><p>\u5982\u679C\u547D\u4E2D\u5F3A\u5236\u7F13\u5B58\uFF0C\u6211\u4EEC\u65E0\u9700\u53D1\u8D77\u65B0\u7684\u8BF7\u6C42\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58\u5185\u5BB9\uFF0C\u5982\u679C\u6CA1\u6709\u547D\u4E2D\u5F3A\u5236\u7F13\u5B58\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u534F\u5546\u7F13\u5B58\uFF0C\u8FD9\u4E2A\u65F6\u5019\u534F\u5546\u7F13\u5B58\u5C31\u4F1A\u53D1\u6325\u4F5C\u7528\u4E86\u3002</p><p>\u4E0A\u9762\u5DF2\u7ECF\u8BF4\u5230\u4E86\uFF0C\u547D\u4E2D\u534F\u5546\u7F13\u5B58\u7684\u6761\u4EF6\u6709\u4E24\u4E2A\uFF1A</p><ul><li>max-age=xxx \u8FC7\u671F\u4E86</li><li>\u503C\u4E3A no-cache</li></ul><p>\u4F7F\u7528\u534F\u5546\u7F13\u5B58\u7B56\u7565\u65F6\uFF0C\u4F1A\u5148\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5982\u679C\u8D44\u6E90\u6CA1\u6709\u53D1\u751F\u4FEE\u6539\uFF0C\u5219\u8FD4\u56DE\u4E00\u4E2A 304 \u72B6\u6001\uFF0C\u8BA9\u6D4F\u89C8\u5668\u4F7F\u7528\u672C\u5730\u7684\u7F13\u5B58\u526F\u672C\u3002\u5982\u679C\u8D44\u6E90\u53D1\u751F\u4E86\u4FEE\u6539\uFF0C\u5219\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u8D44\u6E90\u3002</p><p>\u534F\u5546\u7F13\u5B58\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u6765\u8BBE\u7F6E\uFF0C\u5206\u522B\u662F http \u5934\u4FE1\u606F\u4E2D\u7684 Etag \u548C Last-Modified \u5C5E\u6027\u3002</p><p>\uFF081\uFF09\u670D\u52A1\u5668\u901A\u8FC7\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 Last-Modified \u5C5E\u6027\u6765\u6307\u51FA\u8D44\u6E90\u6700\u540E\u4E00\u6B21\u4FEE\u6539\u7684\u65F6\u95F4\uFF0C\u5F53\u6D4F\u89C8\u5668\u4E0B\u4E00\u6B21\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u4E00\u4E2A If-Modified-Since \u7684\u5C5E\u6027\uFF0C\u5C5E\u6027\u503C\u4E3A\u4E0A\u4E00\u6B21\u8D44\u6E90\u8FD4\u56DE\u65F6\u7684 Last-Modified \u7684\u503C\u3002\u5F53\u8BF7\u6C42\u53D1\u9001\u5230\u670D\u52A1\u5668\u540E\u670D\u52A1\u5668\u4F1A\u901A\u8FC7\u8FD9\u4E2A\u5C5E\u6027\u6765\u548C\u8D44\u6E90\u7684\u6700\u540E\u4E00\u6B21\u7684\u4FEE\u6539\u65F6\u95F4\u6765\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4EE5\u6B64\u6765\u5224\u65AD\u8D44\u6E90\u662F\u5426\u505A\u4E86\u4FEE\u6539\u3002\u5982\u679C\u8D44\u6E90\u6CA1\u6709\u4FEE\u6539\uFF0C\u90A3\u4E48\u8FD4\u56DE 304 \u72B6\u6001\uFF0C\u8BA9\u5BA2\u6237\u7AEF\u4F7F\u7528\u672C\u5730\u7684\u7F13\u5B58\u3002\u5982\u679C\u8D44\u6E90\u5DF2\u7ECF\u88AB\u4FEE\u6539\u4E86\uFF0C\u5219\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u8D44\u6E90\u3002\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5C31\u662F Last-Modified \u6807\u6CE8\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u53EA\u80FD\u7CBE\u786E\u5230\u79D2\u7EA7\uFF0C\u5982\u679C\u67D0\u4E9B\u6587\u4EF6\u5728 1 \u79D2\u949F\u4EE5\u5185\uFF0C\u88AB\u4FEE\u6539\u591A\u6B21\u7684\u8BDD\uFF0C\u90A3\u4E48\u6587\u4EF6\u5DF2\u5C06\u6539\u53D8\u4E86\u4F46\u662F Last-Modified \u5374\u6CA1\u6709\u6539\u53D8\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u7F13\u5B58\u547D\u4E2D\u7684\u4E0D\u51C6\u786E\u3002</p><p>\uFF082\uFF09\u56E0\u4E3A Last-Modified \u7684\u8FD9\u79CD\u53EF\u80FD\u53D1\u751F\u7684\u4E0D\u51C6\u786E\u6027\uFF0Chttp \u4E2D\u63D0\u4F9B\u4E86\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662F Etag \u5C5E\u6027\u3002\u670D\u52A1\u5668\u5728\u8FD4\u56DE\u8D44\u6E90\u7684\u65F6\u5019\uFF0C\u5728\u5934\u4FE1\u606F\u4E2D\u6DFB\u52A0\u4E86 Etag \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u662F\u8D44\u6E90\u751F\u6210\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u5F53\u8D44\u6E90\u53D1\u751F\u6539\u53D8\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u503C\u4E5F\u4F1A\u53D1\u751F\u6539\u53D8\u3002\u5728\u4E0B\u4E00\u6B21\u8D44\u6E90\u8BF7\u6C42\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5728\u8BF7\u6C42\u5934\u4E2D\u6DFB\u52A0\u4E00\u4E2A If-None-Match \u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u7684\u503C\u5C31\u662F\u4E0A\u6B21\u8FD4\u56DE\u7684\u8D44\u6E90\u7684 Etag \u7684\u503C\u3002\u670D\u52A1\u63A5\u6536\u5230\u8BF7\u6C42\u540E\u4F1A\u6839\u636E\u8FD9\u4E2A\u503C\u6765\u548C\u8D44\u6E90\u5F53\u524D\u7684 Etag \u7684\u503C\u6765\u8FDB\u884C\u6BD4\u8F83\uFF0C\u4EE5\u6B64\u6765\u5224\u65AD\u8D44\u6E90\u662F\u5426\u53D1\u751F\u6539\u53D8\uFF0C\u662F\u5426\u9700\u8981\u8FD4\u56DE\u8D44\u6E90\u3002\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6BD4 Last-Modified \u7684\u65B9\u5F0F\u66F4\u52A0\u7CBE\u786E\u3002</p><p>\u5F53 Last-Modified \u548C Etag \u5C5E\u6027\u540C\u65F6\u51FA\u73B0\u7684\u65F6\u5019\uFF0CEtag \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\u3002\u4F7F\u7528\u534F\u5546\u7F13\u5B58\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u9700\u8981\u8003\u8651\u8D1F\u8F7D\u5E73\u8861\u7684\u95EE\u9898\uFF0C\u56E0\u6B64\u591A\u4E2A\u670D\u52A1\u5668\u4E0A\u8D44\u6E90\u7684 Last-Modified \u5E94\u8BE5\u4FDD\u6301\u4E00\u81F4\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u670D\u52A1\u5668\u4E0A Etag \u7684\u503C\u90FD\u4E0D\u4E00\u6837\uFF0C<strong>\u56E0\u6B64\u5728\u8003\u8651\u8D1F\u8F7D\u5E73\u8861\u65F6\uFF0C\u6700\u597D\u4E0D\u8981\u8BBE\u7F6E Etag \u5C5E\u6027\u3002</strong></p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5F3A\u7F13\u5B58\u7B56\u7565\u548C\u534F\u5546\u7F13\u5B58\u7B56\u7565\u5728\u7F13\u5B58\u547D\u4E2D\u65F6\u90FD\u4F1A\u76F4\u63A5\u4F7F\u7528\u672C\u5730\u7684\u7F13\u5B58\u526F\u672C\uFF0C\u533A\u522B\u53EA\u5728\u4E8E<strong>\u534F\u5546\u7F13\u5B58\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u4E00\u6B21\u8BF7\u6C42\u3002</strong> \u5B83\u4EEC\u7F13\u5B58\u4E0D\u547D\u4E2D\u65F6\uFF0C\u90FD\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u6765\u83B7\u53D6\u8D44\u6E90\u3002\u5728\u5B9E\u9645\u7684\u7F13\u5B58\u673A\u5236\u4E2D\uFF0C\u5F3A\u7F13\u5B58\u7B56\u7565\u548C\u534F\u5546\u7F13\u5B58\u7B56\u7565\u662F\u4E00\u8D77\u5408\u4F5C\u4F7F\u7528\u7684\u3002\u6D4F\u89C8\u5668\u9996\u5148\u4F1A\u6839\u636E\u8BF7\u6C42\u7684\u4FE1\u606F\u5224\u65AD\uFF0C\u5F3A\u7F13\u5B58\u662F\u5426\u547D\u4E2D\uFF0C\u5982\u679C\u547D\u4E2D\u5219\u76F4\u63A5\u4F7F\u7528\u8D44\u6E90\u3002\u5982\u679C\u4E0D\u547D\u4E2D\u5219\u6839\u636E\u5934\u4FE1\u606F\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u4F7F\u7528\u534F\u5546\u7F13\u5B58\uFF0C\u5982\u679C\u534F\u5546\u7F13\u5B58\u547D\u4E2D\u7684\u8BDD\uFF0C\u5219\u670D\u52A1\u5668\u4E0D\u8FD4\u56DE\u8D44\u6E90\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u4F7F\u7528\u672C\u5730\u8D44\u6E90\u7684\u526F\u672C\uFF0C\u5982\u679C\u534F\u5546\u7F13\u5B58\u4E0D\u547D\u4E2D\uFF0C\u5219\u6D4F\u89C8\u5668\u8FD4\u56DE\u6700\u65B0\u7684\u8D44\u6E90\u7ED9\u6D4F\u89C8\u5668\u3002</p><p>\u4F7F\u7528\u6D4F\u89C8\u5668\u7F13\u5B58\uFF0C\u6709\u4EE5\u4E0B\u4F18\u70B9\uFF1A</p><ul><li>\u51CF\u5C11\u4E86\u670D\u52A1\u5668\u7684\u8D1F\u62C5\uFF0C\u63D0\u9AD8\u4E86\u7F51\u7AD9\u7684\u6027\u80FD</li><li>\u52A0\u5FEB\u4E86\u5BA2\u6237\u7AEF\u7F51\u9875\u7684\u52A0\u8F7D\u901F\u5EA6</li><li>\u51CF\u5C11\u4E86\u591A\u4F59\u7F51\u7EDC\u6570\u636E\u4F20\u8F93</li></ul><p><strong>\u70B9\u51FB\u5237\u65B0\u6309\u94AE\u6216\u8005\u6309 F5\u3001\u6309 Ctrl+F5 \uFF08\u5F3A\u5236\u5237\u65B0\uFF09\u3001\u5730\u5740\u680F\u56DE\u8F66\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</strong></p><ul><li>\u70B9\u51FB\u5237\u65B0\u6309\u94AE\u6216\u8005\u6309 F5\uFF1A\u6D4F\u89C8\u5668\u76F4\u63A5\u5BF9\u672C\u5730\u7684\u7F13\u5B58\u6587\u4EF6\u8FC7\u671F\uFF0C\u4F46\u662F\u4F1A\u5E26\u4E0A If-Modifed-Since\uFF0CIf-None-Match\uFF0C\u8FD9\u5C31\u610F\u5473\u7740\u670D\u52A1\u5668\u4F1A\u5BF9\u6587\u4EF6\u68C0\u67E5\u65B0\u9C9C\u5EA6\uFF0C\u8FD4\u56DE\u7ED3\u679C\u53EF\u80FD\u662F 304\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F 200\u3002</li><li>\u7528\u6237\u6309 Ctrl+F5\uFF08\u5F3A\u5236\u5237\u65B0\uFF09\uFF1A\u6D4F\u89C8\u5668\u4E0D\u4EC5\u4F1A\u5BF9\u672C\u5730\u6587\u4EF6\u8FC7\u671F\uFF0C\u800C\u4E14\u4E0D\u4F1A\u5E26\u4E0A If-Modifed-Since\uFF0CIf-None-Match\uFF0C\u76F8\u5F53\u4E8E\u4E4B\u524D\u4ECE\u6765\u6CA1\u6709\u8BF7\u6C42\u8FC7\uFF0C\u8FD4\u56DE\u7ED3\u679C\u662F 200\u3002</li><li>\u5730\u5740\u680F\u56DE\u8F66\uFF1A \u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u6309\u7167\u6B63\u5E38\u6D41\u7A0B\uFF0C\u672C\u5730\u68C0\u67E5\u662F\u5426\u8FC7\u671F\uFF0C\u7136\u540E\u670D\u52A1\u5668\u68C0\u67E5\u65B0\u9C9C\u5EA6\uFF0C\u6700\u540E\u8FD4\u56DE\u5185\u5BB9\u3002</li></ul>',37),h=[d];function s(n,c,o,p,f,g){return i(),a("div",null,h)}const x=e(r,[["render",s]]);export{_ as __pageData,x as default};
