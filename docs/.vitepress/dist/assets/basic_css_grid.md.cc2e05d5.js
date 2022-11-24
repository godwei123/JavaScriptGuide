import { _ as s, c as a, o as n, a as l } from "./app.61809bb9.js";
const D = JSON.parse(
    '{"title":"Grid","description":"","frontmatter":{},"headers":[],"relativePath":"basic/css/grid.md"}'
  ),
  o = { name: "basic/css/grid.md" },
  p = l(
    `<h1 id="grid" tabindex="-1">Grid <a class="header-anchor" href="#grid" aria-hidden="true">#</a></h1><p>grid \u662F\u4E00\u4E2A CSS \u7B80\u5199\u5C5E\u6027\uFF0C\u53EF\u4EE5\u7528\u6765\u8BBE\u7F6E\u4EE5\u4E0B\u5C5E\u6027\uFF1A \u663E\u5F0F\u7F51\u683C\u5C5E\u6027 grid-template-rows\u3001grid-template-columns \u548C grid-template-areas\uFF0C \u9690\u5F0F\u7F51\u683C\u5C5E\u6027 grid-auto-rows\u3001grid-auto-columns \u548C grid-auto-flow\uFF0C \u95F4\u8DDD\u5C5E\u6027 grid-column-gap \u548C grid-row-gap \u3002</p><p><strong>\u5907\u6CE8\uFF1A</strong> \u60A8\u4EC5\u53EF\u5728\u4E00\u4E2A <code>grid</code> \u5C5E\u6027\u4E2D\u58F0\u660E\u663E\u5F0F\u6216\u9690\u5F0F\u7F51\u683C\u3002\u4E0E\u5176\u4ED6\u7B80\u5199\u5C5E\u6027\u540C\u6837\uFF0C\u82E5\u6709\u6B21\u7EA7\u5C5E\u6027\u672A\u88AB\u58F0\u660E\uFF0C\u5176\u5C06\u4F7F\u7528\u521D\u59CB\u503C\u3002\u53E6\u5916\uFF0C\u5C3D\u7BA1\u6B64\u7B80\u5199\u58F0\u660E\u65E0\u6CD5\u8BBE\u7F6E\u7F51\u683C\u7684\u69FD\uFF08gutter\uFF09\uFF0C\u69FD\u4F1A\u88AB\u8BE5\u58F0\u660E\u91CD\u7F6E\u3002</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* &lt;&#39;grid-template&#39;&gt; values */</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: &quot;a&quot; 100px &quot;b&quot; 1fr;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">linename1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> &quot;a&quot; 100px </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">linename2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: &quot;a&quot; 200px &quot;b&quot; </span><span style="color:#FFCB6B;">min-content</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: &quot;a&quot; minmax(100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">max-content</span><span style="color:#A6ACCD;">) &quot;b&quot; 20%;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: 100px / 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: minmax(400px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">min-content</span><span style="color:#A6ACCD;">) / repeat(</span><span style="color:#FFCB6B;">auto-fill</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 50px);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* &lt;&#39;grid-template-rows&#39;&gt; /</span></span>
<span class="line"><span style="color:#676E95;">   [ auto-flow &amp;&amp; dense? ] &lt;&#39;grid-auto-columns&#39;&gt;? values */</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: 200px / </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: 30% / </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> dense;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: repeat(3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">line1 line2 </span><span style="color:#C792EA;">line3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 200px) / </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> 300px;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">line1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> minmax(20em</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">max-content</span><span style="color:#A6ACCD;">) / </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> dense 40%;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* [ auto-flow &amp;&amp; dense? ] &lt;&#39;grid-auto-rows&#39;&gt;? /</span></span>
<span class="line"><span style="color:#676E95;">   &lt;&#39;grid-template-columns&#39;&gt; values */</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> / 200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> dense / 30%;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> 300px / repeat(3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">line1 line2 </span><span style="color:#C792EA;">line3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> 200px);</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: </span><span style="color:#FFCB6B;">auto-flow</span><span style="color:#A6ACCD;"> dense 40% / </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">line1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> minmax(20em</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">max-content</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* Global values */</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: inherit;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: initial;</span></span>
<span class="line"><span style="color:#A6ACCD;">grid: unset;</span></span>
<span class="line"></span></code></pre></div><p><code>&lt;&#39;grid-template&#39;&gt;</code> \u5B9A\u4E49\u4E86 grid-template\uFF0C\u5176\u5305\u542B grid-template-columns\uFF0Cgrid-template-rows \u548C grid-template-areas\u3002</p><p><code>&lt;&#39;grid-template-rows&#39;&gt; / [ auto-flow &amp;&amp; dense? ] &lt;&#39;grid-auto-columns&#39;&gt;? </code>\u901A\u8FC7 grid-template-rows \u5C5E\u6027\u663E\u5F0F\u8BBE\u7F6E\u884C\u8F68\u9053\u6765\u8BBE\u7F6E\u81EA\u52A8\u6D41\uFF08grid-template-columns \u5C5E\u6027\u8BBE\u4E3A none\uFF09\uFF0C\u5E76\u901A\u8FC7 grid-auto-columns \u660E\u786E\u8BE5\u5982\u4F55\u81EA\u52A8\u91CD\u590D\u5217\u8F68\u9053\uFF08\u540C\u65F6 grid-auto-rows \u5C5E\u6027\u8BBE\u4E3A auto\uFF09\u3002grid-auto-flow \u5C5E\u6027\u4E5F\u88AB\u76F8\u5E94\u7684\u8BBE\u7F6E\u4E3A column\uFF0C\u5E76\u53EF\u9644\u6709 dense\u3002 \u6240\u6709\u5176\u4F59 grid \u6B21\u7EA7\u5C5E\u6027\u88AB\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u3002</p><p><code>[ auto-flow &amp;&amp; dense? ] &lt;&#39;grid-auto-rows&#39;&gt;? / &lt;&#39;grid-template-columns&#39;&gt;</code> \u901A\u8FC7 grid-template-columns \u5C5E\u6027\u663E\u5F0F\u8BBE\u7F6E\u5217\u8F68\u9053\u6765\u8BBE\u7F6E\u81EA\u52A8\u6D41\uFF08grid-template-rows \u5C5E\u6027\u8BBE\u4E3A none\uFF09\uFF0C\u5E76\u901A\u8FC7 grid-auto-rows \u660E\u786E\u8BE5\u5982\u4F55\u81EA\u52A8\u91CD\u590D\u884C\u8F68\u9053\uFF08\u540C\u65F6 grid-auto-columns \u5C5E\u6027\u8BBE\u4E3A auto\uFF09\u3002grid-auto-flow \u5C5E\u6027\u4E5F\u88AB\u76F8\u5E94\u7684\u8BBE\u7F6E\u4E3A row\uFF0C\u5E76\u53EF\u9644\u6709 dense\u3002 \u6240\u6709\u5176\u4F59 grid \u6B21\u7EA7\u5C5E\u6027\u88AB\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u3002</p>`,
    7
  ),
  e = [p];
function t(r, c, i, C, d, A) {
  return n(), a("div", null, e);
}
const g = s(o, [["render", t]]);
export { D as __pageData, g as default };
