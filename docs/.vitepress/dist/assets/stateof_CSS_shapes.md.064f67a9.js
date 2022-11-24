import { _ as s, c as e, o as a, a as n } from "./app.61809bb9.js";
const u = JSON.parse(
    '{"title":"shapes","description":"","frontmatter":{},"headers":[{"level":2,"title":"shape-image-threshold","slug":"shape-image-threshold","link":"#shape-image-threshold","children":[]},{"level":2,"title":"shape-margin","slug":"shape-margin","link":"#shape-margin","children":[]},{"level":2,"title":"shape-outside","slug":"shape-outside","link":"#shape-outside","children":[]}],"relativePath":"stateof/CSS/shapes.md"}'
  ),
  p = { name: "stateof/CSS/shapes.md" },
  o = n(
    `<h1 id="shapes" tabindex="-1">shapes <a class="header-anchor" href="#shapes" aria-hidden="true">#</a></h1><p><strong>CSS Shapes</strong> \u662F\u4E00\u4E2A CSS \u6A21\u5757\uFF0C\u7528\u4E8E\u5B9A\u4E49\u5728 CSS \u503C\u4E2D\u4F7F\u7528\u7684\u51E0\u4F55\u5F62\u72B6\u3002</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-image-threshold" target="_blank" rel="noreferrer"><code>shape-image-threshold</code></a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-margin" target="_blank" rel="noreferrer"><code>shape-margin</code></a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/shape-outside" target="_blank" rel="noreferrer"><code>shape-outside</code></a></li></ul><h2 id="shape-image-threshold" tabindex="-1">shape-image-threshold <a class="header-anchor" href="#shape-image-threshold" aria-hidden="true">#</a></h2><p>CSS \u5C5E\u6027 shape-image-threshold \u901A\u8FC7\u8BBE\u5B9A\u4E00\u4E2A alpha \u901A\u9053\u7684\u754C\u9650\u503C\u6765\u63D0\u53D6 shape-outside \u503C\u4E3A\u56FE\u50CF\u7684\u5F62\u72B6\u3002</p><p>\u6240\u6709 alpha \u503C\u6BD4\u8FD9\u4E2A\u754C\u9650\u503C\u5927\u7684\u50CF\u7D20\u90FD\u4F1A\u88AB\u5F53\u505A\u5F62\u72B6\u7684\u4E00\u90E8\u5206\uFF0C\u4EE5\u6B64\u786E\u5B9A\u5F62\u72B6\u7684\u8FB9\u754C\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u754C\u9650\u503C\u4E3A<code>0.5</code>\u65F6\uFF0C\u5F62\u72B6\u4F1A\u5305\u542B\u6240\u6709\u4E0D\u900F\u660E\u5EA6\u8D85\u8FC7 50% \u7684\u50CF\u7D20\u3002</p><p>\u53D6\u503C\u8303\u56F4\uFF1A[0.0,1.0] \uFF5C \u767E\u5206\u6BD4</p><h2 id="shape-margin" tabindex="-1">shape-margin <a class="header-anchor" href="#shape-margin" aria-hidden="true">#</a></h2><p>CSS \u5C5E\u6027 shape-margin \u7528\u4E8E\u8BBE\u5B9A\u7531 shape-outside \u521B\u5EFA\u7684 CSS \u5F62\u72B6\u7684\u5916\u8FB9\u8DDD\u3002</p><p>\u8FD9\u4E2A\u5916\u8FB9\u8DDD\u53EF\u4EE5\u8BA9\u4F60\u8C03\u6574\uFF08\u6D6E\u52A8\u5143\u7D20\u7684\uFF09\u5F62\u72B6\u8FB9\u7F18\u4E0E\u73AF\u7ED5\u5185\u5BB9\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002</p><p>\u4F7F\u7528 <code>&lt;length&gt;</code> \u503C\uFF0C\u6216\u8005\u76F8\u5BF9\u4E8E\u5143\u7D20\u5BB9\u7EB3\u5757\u7684 <code>&lt;percentage&gt;</code> \u503C\u6765\u8BBE\u5B9A\u5F62\u72B6\u7684\u5916\u8FB9\u8DDD\u3002</p><h2 id="shape-outside" tabindex="-1">shape-outside <a class="header-anchor" href="#shape-outside" aria-hidden="true">#</a></h2><p>shape-outside \u7684 CSS \u5C5E\u6027\u5B9A\u4E49\u4E86\u4E00\u4E2A\u53EF\u4EE5\u662F\u975E\u77E9\u5F62\u7684\u5F62\u72B6\uFF0C\u76F8\u90BB\u7684\u5185\u8054\u5185\u5BB9\u5E94\u56F4\u7ED5\u8BE5\u5F62\u72B6\u8FDB\u884C\u5305\u88C5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5185\u8054\u5185\u5BB9\u5305\u56F4\u5176\u8FB9\u8DDD\u6846; shape-outside \u63D0\u4F9B\u4E86\u4E00\u79CD\u81EA\u5B9A\u4E49\u6B64\u5305\u88C5\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5C06\u6587\u672C\u5305\u88C5\u5728\u590D\u6742\u5BF9\u8C61\u5468\u56F4\u800C\u4E0D\u662F\u7B80\u5355\u7684\u6846\u4E2D\u3002</p><p><code>shape-outside</code> \u5C5E\u6027\u6307\u5B9A\u4F7F\u7528\u4E0B\u9762\u5217\u8868\u7684\u503C\u6765\u5B9A\u4E49\u6D6E\u52A8\u5143\u7D20\u7684\u6D6E\u52A8\u533A\u57DF\u3002\u8FD9\u4E2A\u6D6E\u52A8\u533A\u57DF\u51B3\u5B9A\u4E86\u884C\u5185\u5185\u5BB9\uFF08\u6D6E\u52A8\u5143\u7D20\uFF09\u6240\u5305\u88F9\u7684\u5F62\u72B6\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/_ \u5173\u952E\u5B57\u503C _/</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: margin-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: content-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: padding-box;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/_ \u51FD\u6570\u503C _/</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: circle();</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: ellipse();</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: inset(10px 10px 10px 10px);</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: polygon(10px 10px, 20px 20px, 30px 30px);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/_ &lt;url&gt; \u503C _/</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: url(image.png);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/_ \u6E10\u53D8\u503C _/</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: linear-gradient(45deg, rgba(255, 255, 255, 0) 150px, red 150px);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/_ \u5168\u5C40\u503C _/</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: initial;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: inherit;</span></span>
<span class="line"><span style="color:#A6ACCD;">shape-outside: unset;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>none \u8BE5\u6D6E\u52A8\u533A\u57DF\u4E0D\u4EA7\u751F\u5F71\u54CD\uFF0C\u884C\u5185\u5143\u7D20\u4EE5\u9ED8\u8BA4\u7684\u65B9\u5F0F\u5305\u88F9\u7740\u8BE5\u5143\u7D20\u7684 margin box\u3002</p><p><code>&lt;shape-box&gt;</code> \u6839\u636E\u6D6E\u52A8\u5143\u7D20\u7684\u8FB9\u7F18\uFF08\u901A\u8FC7 CSS box model \u6765\u5B9A\u4E49\uFF09\u5F62\u72B6\u8BA1\u7B97\u51FA\u6D6E\u52A8\u7684\u533A\u57DF\u3002\u53EF\u80FD\u662F margin-box, border-box, padding-box, \u6216\u8005 content-box\u3002\u8FD9\u4E2A\u5F62\u72B6\u5305\u62EC\u4E86\u7531 border-radius \u5C5E\u6027\u5236\u9020\u51FA\u6765\u7684\u5F27\u5EA6\uFF08\u4E0E background-clip \u7684\u8868\u73B0\u7C7B\u4F3C\uFF09\u3002</p><ul><li><p>margin-box \u5B9A\u4E49\u4E00\u4E2A\u7531\u5916\u8FB9\u8DDD\u7684\u5916\u8FB9\u7F18\u5C01\u95ED\u5F62\u6210\u7684\u5F62\u72B6\u3002\u8FD9\u4E2A\u5F62\u72B6\u7684\u89D2\u7684\u534A\u5F84\u7531\u76F8\u5E94\u7684 border-radius \u548C margin \u7684\u503C\u51B3\u5B9A\u3002\u5982\u679C border-radius / margin \u7684\u6BD4\u7387\u5927\u4E8E\u7B49\u4E8E 1 , \u90A3\u4E48\u8FD9\u4E2A margin box \u7684\u89D2\u7684\u5F27\u5EA6\u5C31\u662F border-radius + margin \uFF1B\u5982\u679C\u6BD4\u7387\u5C0F\u4E8E 1\uFF0C\u90A3\u4E48\u8FD9\u4E2A margin box \u7684\u89D2\u7684\u5F27\u5EA6\u5C31\u662F border-radius + (margin * (1 + (ratio-1)^3)) \u3002</p></li><li><p>border-box \u5B9A\u4E49\u4E00\u4E2A\u7531\u8FB9\u754C\u7684\u5916\u8FB9\u7F18\u5C01\u95ED\u5F62\u6210\u7684\u5F62\u72B6\u3002\u8FD9\u4E2A\u5F62\u72B6\u9075\u5FAA\u6B63\u5E38\u7684\u8FB9\u754C\u5916\u90E8\u5706\u89D2\u7684\u5F62\u6210\u89C4\u5219\u3002</p></li><li><p>padding-box \u5B9A\u4E49\u4E00\u4E2A\u7531\u5185\u8FB9\u8DDD\u7684\u5916\u8FB9\u7F18\u5C01\u95ED\u5F62\u6210\u7684\u5F62\u72B6\u3002\u8FD9\u4E2A\u5F62\u72B6\u9075\u5FAA\u6B63\u5E38\u7684\u8FB9\u754C\u5185\u90E8\u5706\u89D2\u7684\u5F62\u6210\u89C4\u5219\u3002</p></li><li><p>content-box \u5B9A\u4E49\u4E00\u4E2A\u7531\u5185\u5BB9\u533A\u57DF\u7684\u5916\u8FB9\u7F18\u5C01\u95ED\u5F62\u6210\u7684\u5F62\u72B6\uFF08\u8BD1\u8005\uFF1A\u8868\u8FF0\u7684\u4E0D\u592A\u597D\uFF0C\u5C31\u662F\u88AB padding \u5305\u88F9\u7684\u533A\u57DF\uFF0C\u5728 chrome \u63A7\u5236\u53F0\u4E2D\u7684\u76D2\u5B50\u6A21\u578B\u56FE\u4E2D\u7684\u84DD\u8272\u533A\u57DF\u3002\uFF09\u3002\u6BCF\u4E00\u4E2A\u89D2\u7684\u5F27\u5EA6\u53D6 0 \u6216 border-radius - border-width - padding \u4E2D\u7684\u8F83\u5927\u503C\u3002</p></li></ul><p><code>&lt;basic-shape&gt;</code> \u57FA\u4E8E inset() (en-US)\u3001circle() (en-US)\u3001ellipse() (en-US) \u6216 polygon() (en-US) \u5176\u4E2D\u4E00\u4E2A\u521B\u9020\u51FA\u6765\u7684\u5F62\u72B6\u8BA1\u7B97\u51FA\u6D6E\u52A8\u533A\u57DF\u3002\u5982\u679C\u540C\u65F6\u5B58\u5728 <code>&lt;shape-box&gt;</code>\uFF0C\u90A3\u4E48\u4F1A\u4E3A <code>&lt;basic-shape&gt;</code> \u65B9\u6CD5\u5B9A\u4E49\u4E00\u4E2A\u53C2\u8003\u76D2\uFF0C\u8FD9\u4E2A\u53C2\u8003\u76D2\u9ED8\u8BA4\u4E3A margin-box\u3002</p><p><code>&lt;image&gt;</code> \u63D0\u53D6\u5E76\u4E14\u8BA1\u7B97\u6307\u5B9A <code>&lt;image&gt;</code> \u7684 alpha \u901A\u9053\u5F97\u51FA\u6D6E\u52A8\u533A\u57DF\uFF08\u8BD1\u8005\uFF1A\u5373\u6839\u636E\u56FE\u7247\u7684\u975E\u900F\u660E\u533A\u57DF\u8FDB\u884C\u5305\u88F9\uFF09\u3002\u5C31\u8DDF\u901A\u8FC7 shape-image-threshold \u6765\u5B9A\u4E49\u4E00\u6837\u3002</p>`,
    20
  ),
  l = [o];
function i(r, t, d, c, h, g) {
  return a(), e("div", null, l);
}
const A = s(p, [["render", i]]);
export { u as __pageData, A as default };
