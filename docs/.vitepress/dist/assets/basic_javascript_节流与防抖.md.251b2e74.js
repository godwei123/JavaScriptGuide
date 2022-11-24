import { _ as s, c as n, o as a, a as l } from "./app.61809bb9.js";
const C = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8282\u6D41\u4E0E\u9632\u6296","slug":"\u8282\u6D41\u4E0E\u9632\u6296","link":"#\u8282\u6D41\u4E0E\u9632\u6296","children":[{"level":3,"title":"\u975E\u7ACB\u5373\u6267\u884C\u7248","slug":"\u975E\u7ACB\u5373\u6267\u884C\u7248","link":"#\u975E\u7ACB\u5373\u6267\u884C\u7248","children":[]},{"level":3,"title":"\u7ACB\u5373\u6267\u884C\u7248","slug":"\u7ACB\u5373\u6267\u884C\u7248","link":"#\u7ACB\u5373\u6267\u884C\u7248","children":[]},{"level":3,"title":"\u7EFC\u5408\u7248","slug":"\u7EFC\u5408\u7248","link":"#\u7EFC\u5408\u7248","children":[]},{"level":3,"title":"**\u8282\u6D41(throttle): **","slug":"\u8282\u6D41-throttle","link":"#\u8282\u6D41-throttle","children":[]},{"level":3,"title":"\u65F6\u95F4\u6233\u7248","slug":"\u65F6\u95F4\u6233\u7248","link":"#\u65F6\u95F4\u6233\u7248","children":[]},{"level":3,"title":"\u5B9A\u65F6\u5668\u7248","slug":"\u5B9A\u65F6\u5668\u7248","link":"#\u5B9A\u65F6\u5668\u7248","children":[]}]}],"relativePath":"basic/javascript/\u8282\u6D41\u4E0E\u9632\u6296.md"}'
  ),
  p = { name: "basic/javascript/\u8282\u6D41\u4E0E\u9632\u6296.md" },
  o = l(
    `<h2 id="\u8282\u6D41\u4E0E\u9632\u6296" tabindex="-1">\u8282\u6D41\u4E0E\u9632\u6296 <a class="header-anchor" href="#\u8282\u6D41\u4E0E\u9632\u6296" aria-hidden="true">#</a></h2><p><strong>\u9632\u6296(debounce):\u6240\u8C13\u9632\u6296\uFF0C\u662F\u6307\u89E6\u53D1\u4E8B\u4EF6\u540E\u5728 n \u79D2\u5185\u51FD\u6570\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF0C\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u4E8B\u4EF6\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u65F6\u95F4\u3002</strong></p><p><strong>\u9632\u6296\u51FD\u6570\u5206\u4E3A\u975E\u7ACB\u5373\u6267\u884C\u7248\u548C\u7ACB\u5373\u6267\u884C\u7248\u3002</strong></p><p>\u975E\u7ACB\u5373\u6267\u884C\u7248\u7684\u610F\u601D\u662F\u89E6\u53D1\u4E8B\u4EF6\u540E\u51FD\u6570\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u800C\u662F\u5728 n \u79D2\u540E\u6267\u884C\uFF0C\u5982\u679C\u5728 n \u79D2\u5185\u53C8\u89E6\u53D1\u4E86\u4E8B\u4EF6\uFF0C\u5219\u4F1A\u91CD\u65B0\u8BA1\u7B97\u51FD\u6570\u6267\u884C\u65F6\u95F4\u3002</p><blockquote><ul><li>\u9650\u5236 <strong>\u9F20\u6807\u8FDE\u51FB</strong> \u89E6\u53D1</li><li>\u6BCF\u6B21 resize/scroll \u89E6\u53D1\u7EDF\u8BA1\u4E8B\u4EF6</li><li>\u6587\u672C\u8F93\u5165\u7684\u9A8C\u8BC1\uFF08\u8FDE\u7EED\u8F93\u5165\u6587\u5B57\u540E\u53D1\u9001 AJAX \u8BF7\u6C42\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E00\u6B21\u5C31\u597D\uFF09</li></ul></blockquote><h3 id="\u975E\u7ACB\u5373\u6267\u884C\u7248" tabindex="-1">\u975E\u7ACB\u5373\u6267\u884C\u7248 <a class="header-anchor" href="#\u975E\u7ACB\u5373\u6267\u884C\u7248" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u9632\u6296\u52A8\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">function debounce(func,delay) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	let context = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(timer) clearTimeout(timer) // \u6BCF\u6B21\u6267\u884C\u7684\u65F6\u5019\u628A\u524D\u4E00\u4E2A setTimeout clear \u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">        timer = setTimeout(()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            func.apply(context,arguments)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },delay)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7ACB\u5373\u6267\u884C\u7248" tabindex="-1">\u7ACB\u5373\u6267\u884C\u7248 <a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u7248" aria-hidden="true">#</a></h3><p>\u7ACB\u5373\u6267\u884C\u7248\u7684\u610F\u601D\u662F\u89E6\u53D1\u4E8B\u4EF6\u540E\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u7136\u540E n \u79D2\u5185\u4E0D\u89E6\u53D1\u4E8B\u4EF6\u624D\u80FD\u7EE7\u7EED\u6267\u884C\u51FD\u6570\u7684\u6548\u679C\u3002</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u9632\u6296\u52A8\u51FD\u6570-\u7ACB\u5373\u6267\u884C\u7248</span></span>
<span class="line"><span style="color:#A6ACCD;">function debounce(func, delay) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let timer;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        let context = this;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (timer) clearTimeout(timer); // \u6BCF\u6B21\u6267\u884C\u7684\u65F6\u5019\u628A\u524D\u4E00\u4E2A setTimeout clear \u6389</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        let callNow = !timer;</span></span>
<span class="line"><span style="color:#A6ACCD;">        timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            timer = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, delay)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        if (callNow) func.apply(context, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7EFC\u5408\u7248" tabindex="-1">\u7EFC\u5408\u7248 <a class="header-anchor" href="#\u7EFC\u5408\u7248" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">desc</span><span style="color:#676E95;"> \u51FD\u6570\u9632\u6296</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">func</span><span style="color:#676E95;"> \u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#676E95;"> \u5EF6\u8FDF\u6267\u884C\u6BEB\u79D2\u6570</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">immediate</span><span style="color:#676E95;"> true \u8868\u7ACB\u5373\u6267\u884C\uFF0Cfalse \u8868\u975E\u7ACB\u5373\u6267\u884C</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">debounce</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">immediate</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u53CC\u5251\u5408\u74A7\u7248</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">immediate</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">callNow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">timer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">callNow</span><span style="color:#F07178;">) </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">delay</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8282\u6D41-throttle" tabindex="-1">**\u8282\u6D41(throttle): ** <a class="header-anchor" href="#\u8282\u6D41-throttle" aria-hidden="true">#</a></h3><p><strong>\u6240\u8C13\u8282\u6D41\uFF0C\u5C31\u662F\u6307\u8FDE\u7EED\u89E6\u53D1\u4E8B\u4EF6\u4F46\u662F\u5728 n \u79D2\u4E2D\u53EA\u6267\u884C\u4E00\u6B21\u51FD\u6570\u3002\u8282\u6D41\u4F1A\u7A00\u91CA\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\u3002</strong></p><p>\u5BF9\u4E8E\u8282\u6D41\uFF0C\u4E00\u822C\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u5206\u522B\u662F\u65F6\u95F4\u6233\u7248\u548C\u5B9A\u65F6\u5668\u7248\u3002</p><blockquote><ul><li>\u5C04\u51FB\u6E38\u620F\u7684 mousedown/keydown \u4E8B\u4EF6\uFF08\u5355\u4F4D\u65F6\u95F4\u53EA\u80FD\u53D1\u5C04\u4E00\u9897\u5B50\u5F39\uFF09</li><li>\u641C\u7D22\u8054\u60F3\uFF08keyup\uFF09</li><li>\u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6\u5224\u65AD\u662F\u5426\u5230\u9875\u9762\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\u66F4\u591A\uFF1A\u7ED9 scroll \u52A0\u4E86 debounce \u540E\uFF0C\u53EA\u6709\u7528\u6237\u505C\u6B62\u6EDA\u52A8\u540E\uFF0C\u624D\u4F1A\u5224\u65AD\u662F\u5426\u5230\u4E86\u9875\u9762\u5E95\u90E8\uFF1B\u5982\u679C\u662F throttle \u7684\u8BDD\uFF0C\u53EA\u8981\u9875\u9762\u6EDA\u52A8\u5C31\u4F1A\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u5224\u65AD\u4E00\u6B21</li></ul></blockquote><h3 id="\u65F6\u95F4\u6233\u7248" tabindex="-1">\u65F6\u95F4\u6233\u7248 <a class="header-anchor" href="#\u65F6\u95F4\u6233\u7248" aria-hidden="true">#</a></h3><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u65F6\u95F4\u6233\u7248</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">previous</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">now</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">previous</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">previous</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">now</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u65F6\u95F4\u6233\u7248\u6CA1\u6709\u7528\u5230\u5B9A\u65F6\u5668\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u518D\u58F0\u660E\u4E00\u4E2A this \u53D8\u91CF\u3002</p><h3 id="\u5B9A\u65F6\u5668\u7248" tabindex="-1">\u5B9A\u65F6\u5668\u7248 <a class="header-anchor" href="#\u5B9A\u65F6\u5668\u7248" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">throttle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5B9A\u65F6\u5668\u7248</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">timer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">context</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">timer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">context</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">wait</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,
    21
  ),
  e = [o];
function t(c, r, y, F, D, i) {
  return a(), n("div", null, e);
}
const u = s(p, [["render", t]]);
export { C as __pageData, u as default };
