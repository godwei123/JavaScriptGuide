import { _ as l, c as o, o as s, a as e } from "./app.61809bb9.js";
const C = JSON.parse(
    '{"title":"BFC","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9AD8\u5EA6\u584C\u7F29","slug":"\u9AD8\u5EA6\u584C\u7F29","link":"#\u9AD8\u5EA6\u584C\u7F29","children":[]},{"level":2,"title":"margin \u91CD\u53E0\u95EE\u9898","slug":"margin-\u91CD\u53E0\u95EE\u9898","link":"#margin-\u91CD\u53E0\u95EE\u9898","children":[]},{"level":2,"title":"BFC \u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","slug":"bfc-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","link":"#bfc-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","children":[]},{"level":2,"title":"\u5C42\u53E0\u4E0A\u4E0B\u6587","slug":"\u5C42\u53E0\u4E0A\u4E0B\u6587","link":"#\u5C42\u53E0\u4E0A\u4E0B\u6587","children":[]},{"level":2,"title":"\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","slug":"\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","link":"#\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587","children":[]},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]}],"relativePath":"basic/css/bfc.md"}'
  ),
  n = { name: "basic/css/bfc.md" },
  a = e(
    `<h1 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-hidden="true">#</a></h1><h2 id="\u9AD8\u5EA6\u584C\u7F29" tabindex="-1">\u9AD8\u5EA6\u584C\u7F29 <a class="header-anchor" href="#\u9AD8\u5EA6\u584C\u7F29" aria-hidden="true">#</a></h2><p>\u5728\u6D6E\u52A8\u5E03\u5C40\u4E2D,\u7236\u5143\u7D20\u9ED8\u8BA4\u662F\u88AB\u5B50\u5143\u7D20\u6491\u5F00\u7684,\u5F53\u5B50\u5143\u7D20\u6D6E\u52A8\u540E,\u5176\u4F1A\u5B8C\u5168\u8131\u79BB\u6587\u6863\u6D41,\u5B50\u5143\u7D20\u4ECE\u6587\u6863\u6D41\u4E2D\u8131\u79BB,\u5C06\u4F1A\u65E0\u6CD5\u6491\u8D77\u7236\u5143\u7D20\u7684\u9AD8\u5EA6,\u5BFC\u81F4\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u4E22\u5931,\u7236\u5143\u7D20\u9AD8\u5EA6\u4E22\u5931\u540E,\u5176\u4E0B\u7684\u5143\u7D20\u4F1A\u81EA\u52A8\u4E0A\u79FB,\u5BFC\u81F4\u9875\u9762\u5E03\u5C40\u6DF7\u4E71,\u6240\u4EE5\u9AD8\u5EA6\u584C\u9677\u662F\u6BD4\u8F83\u5E38\u89C1\u7684\u95EE\u9898.</p><p><strong>\u89E3\u51B3\u529E\u6CD5:</strong></p><ol><li><p>BFC</p><p>BFC\uFF08Block Formatting Context\uFF09\u5757\u7EA7\u683C\u5F0F\u5316\u73AF\u5883</p><p>BFC \u662F CSS \u4E2D\u7684\u4E00\u4E2A\u9690\u85CF\u5C5E\u6027,\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u5143\u7D20\u5F00\u542F BFC;\u5F00\u542F BFC \u8BE5\u5143\u7D20\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u5E03\u5C40\u533A\u57DF</p><p>\u5143\u7D20\u5F00\u542F BFC \u540E\u7684\u7279\u70B9:</p><ul><li><p>\u5F00\u542F BFC \u7684\u5143\u7D20\u4E0D\u4F1A\u88AB\u6D6E\u52A8\u5143\u7D20\u8986\u76D6</p></li><li><p>\u5F00\u542F BFC \u7684\u5143\u7D20\u5B50\u5143\u7D20\u548C\u7236\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u4E0D\u4F1A\u91CD\u53E0</p></li><li><p>\u5F00\u542F BFC \u7684\u5143\u7D20\u53EF\u4EE5\u5305\u542B\u6D6E\u52A8\u7684\u5143\u7D20</p></li></ul><p>\u9700\u8981\u901A\u8FC7\u4E00\u4E9B\u7279\u6B8A\u65B9\u5F0F\u5F00\u542F\u5143\u7D20 BFC:</p><ul><li>\u8BBE\u7F6E\u5143\u7D20\u7684\u6D6E\u52A8 \uFF08\u4E0D\u63A8\u8350\uFF09. <code>float: left;</code></li><li>\u5C06\u5143\u7D20\u8BBE\u7F6E\u4E3A\u884C\u5185\u5757\u5143\u7D20 \uFF08\u4E0D\u63A8\u8350\uFF09. <code>display: inline-block;</code></li><li>\u5C06\u5143\u7D20 overflow \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u975E visible \u7684\u503C,\u5E38\u89C1\u65B9\u5F0F\u4E3A\u5143\u7D20\u8BBE\u7F6E overflow:hidden \u5F00\u542F\u5176 BFC,\u4EE5\u4F7F\u5176\u53EF\u4EE5\u5305\u542B\u6D6E\u52A8\u7684\u5143\u7D20. <code>overflow: auto;</code></li></ul><p>\u7B2C\u4E00\u79CD\u65B9\u5F0F\u8BBE\u7F6E\u7236\u5143\u7D20\u6D6E\u52A8\u4F7F\u7236\u5143\u7D20\u4E5F\u8131\u79BB\u4E86\u6587\u6863\u6D41;\u7B2C\u4E8C\u79CD\u4E00\u822C\u4E0D\u91C7\u7528\u8BBE\u7F6E\u884C\u5185\u5757\u5143\u7D20\u7684\u65B9\u5F0F;\u7B2C\u4E09\u79CD\u53EF\u4EE5\u4F7F\u7236\u5143\u7D20\u4FDD\u6301\u5757\u5143\u7D20\u7279\u70B9,\u540C\u65F6\u5BBD\u9AD8\u7531\u5B50\u5143\u7D20\u6491\u5F00.</p></li><li><p>\u4F7F\u7528 clear \u89E3\u51B3</p></li></ol><p>\u8BBE\u7F6E\u6E05\u9664\u6D6E\u52A8\u4EE5\u540E,\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u4E3A\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A\u4E0A\u5916\u8FB9\u8DDD\u4EE5\u4F7F\u5176\u4F4D\u7F6E\u4E0D\u53D7\u5176\u4ED6\u5143\u7D20\u5F71\u54CD \u6DFB\u52A0 <code>clear: both;</code> \u6E05\u9664\u6D6E\u52A8\u5143\u7D20\u5BF9\u5F53\u524D\u5143\u7D20\u6240\u4EA7\u751F\u7684\u5F71\u54CD</p><ol start="3"><li>\u901A\u8FC7 HTML \u7684\u65B9\u5F0F\u6765\u5F71\u54CD CSS \u6837\u5F0F</li></ol><p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u4E00\u4E2A div\uFF08\u4E0E\u6D6E\u52A8\u5143\u7D20\u540C\u4E00\u7EA7\uFF09,\u7ED9\u4ED6\u8BBE\u7F6E<code>clear:both</code>\u6765\u6491\u5F00\u7236\u5143\u7D20\u7684\u7A7A\u95F4,\u8FD9\u6837\u7236\u5143\u7D20\u7684\u7A7A\u95F4\u5C31\u4F1A\u968F\u7740\u5B50\u5143\u7D20\u5BBD\u9AD8\u7684\u53D8\u5316\u800C\u53D8\u5316,\u4E0D\u53D7\u6D6E\u52A8\u5F71\u54CD;</p><ol start="4"><li>\u6700\u7EC8\u89E3\u51B3\u65B9\u6848</li></ol><p>css \u6837\u5F0F\u91CC\u5728 box \u7684\u540E\u9762\u7528 content \u6DFB\u52A0\u4E00\u4E2A\u7A7A\u5143\u7D20,\u5E76\u8BBE\u7F6E\u4E3A\u5757\u5143\u7D20,clear:both.</p><p>\u5728\u7236\u7EA7\u5143\u7D20\u6DFB\u52A0 class=\u201Cclearfix\u201D,\u6837\u5F0F\u5982\u4E0B:</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">clearfix</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> table</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="margin-\u91CD\u53E0\u95EE\u9898" tabindex="-1">margin \u91CD\u53E0\u95EE\u9898 <a class="header-anchor" href="#margin-\u91CD\u53E0\u95EE\u9898" aria-hidden="true">#</a></h2><p><strong>\u95EE\u9898\u63CF\u8FF0:</strong></p><p>\u4E24\u4E2A\u5757\u7EA7\u5143\u7D20\u7684\u4E0A\u5916\u8FB9\u8DDD\u548C\u4E0B\u5916\u8FB9\u8DDD\u53EF\u80FD\u4F1A\u5408\u5E76\uFF08\u6298\u53E0\uFF09\u4E3A\u4E00\u4E2A\u5916\u8FB9\u8DDD,\u5176\u5927\u5C0F\u4F1A\u53D6\u5176\u4E2D\u5916\u8FB9\u8DDD\u503C\u5927\u7684\u90A3\u4E2A,\u8FD9\u79CD\u884C\u4E3A\u5C31\u662F\u5916\u8FB9\u8DDD\u6298\u53E0.\u9700\u8981\u6CE8\u610F\u7684\u662F,<strong>\u6D6E\u52A8\u7684\u5143\u7D20\u548C\u7EDD\u5BF9\u5B9A\u4F4D</strong>\u8FD9\u79CD\u8131\u79BB\u6587\u6863\u6D41\u7684\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u4E0D\u4F1A\u6298\u53E0.\u91CD\u53E0\u53EA\u4F1A\u51FA\u73B0\u5728<strong>\u5782\u76F4\u65B9\u5411</strong>.</p><p>\u4E0B\u9762\u4EE3\u7801\u6548\u679C: box1 \u548C box2 \u90FD\u6709\u4E0A\u8FB9\u8DDD 100px,\u76F8\u5BF9\u4F4D\u7F6E\u6CA1\u6709\u53D8\u5316.\u548C\u9884\u671F\u6548\u679C\uFF08\u5B50\u5143\u7D20 div.box2 \u4F1A\u4ECE\u5DE6\u4E0A\u89D2\u79FB\u52A8\u5230\u7236\u5143\u7D20 div.box1 \u7684\u5DE6\u4E0B\u89D2,\u7236\u5143\u7D20\u4F4D\u7F6E\u4E0D\u53D8\uFF09\u4E0D\u540C</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> saddlebrown</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">box2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> sandybrown</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">box2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p><strong>\u8BA1\u7B97\u539F\u5219:</strong></p><p>\u6298\u53E0\u5408\u5E76\u540E\u5916\u8FB9\u8DDD\u7684\u8BA1\u7B97\u539F\u5219\u5982\u4E0B:</p><ul><li>\u5982\u679C\u4E24\u8005\u90FD\u662F\u6B63\u6570,\u90A3\u4E48\u5C31\u53BB\u6700\u5927\u8005</li><li>\u5982\u679C\u662F\u4E00\u6B63\u4E00\u8D1F,\u5C31\u4F1A\u6B63\u503C\u51CF\u53BB\u8D1F\u503C\u7684\u7EDD\u5BF9\u503C</li><li>\u4E24\u4E2A\u90FD\u662F\u8D1F\u503C\u65F6,\u7528 0 \u51CF\u53BB\u4E24\u4E2A\u4E2D\u7EDD\u5BF9\u503C\u5927\u7684\u90A3\u4E2A</li></ul><p><strong>\u89E3\u51B3\u529E\u6CD5:</strong></p><p>\u5BF9\u4E8E\u6298\u53E0\u7684\u60C5\u51B5,\u4E3B\u8981\u6709\u4E24\u79CD:<strong>\u5144\u5F1F\u4E4B\u95F4\u91CD\u53E0</strong>\u548C<strong>\u7236\u5B50\u4E4B\u95F4\u91CD\u53E0</strong></p><p>\uFF081\uFF09\u5144\u5F1F\u4E4B\u95F4\u91CD\u53E0</p><ul><li>\u5E95\u90E8\u5143\u7D20\u53D8\u4E3A\u884C\u5185\u76D2\u5B50:<code>display: inline-block</code></li><li>\u5E95\u90E8\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8:<code>float</code></li><li>\u5E95\u90E8\u5143\u7D20\u7684 position \u7684\u503C\u4E3A<code>absolute/fixed</code></li></ul><p>\uFF082\uFF09\u7236\u5B50\u4E4B\u95F4\u91CD\u53E0</p><ul><li>\u7236\u5143\u7D20\u52A0\u5165:<code>overflow: hidden</code></li><li>\u7236\u5143\u7D20\u6DFB\u52A0\u900F\u660E\u8FB9\u6846:<code>border:1px solid transparent</code></li><li>\u5B50\u5143\u7D20\u53D8\u4E3A\u884C\u5185\u76D2\u5B50:<code>display: inline-block</code></li><li>\u5B50\u5143\u7D20\u52A0\u5165\u6D6E\u52A8\u5C5E\u6027\u6216\u5B9A\u4F4D</li></ul><h2 id="bfc-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" tabindex="-1">BFC \u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#bfc-\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6844904169875177479" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904169875177479</a></p><p>BFC \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u533A\u57DF,\u5B83\u5185\u90E8\u7684\u5143\u7D20\u90FD\u4F9D\u7167\u5B83\u7684\u89C4\u5219\u6E32\u67D3,\u5E76\u4E14\u4E0D\u4F1A\u4E0E BFC \u5916\u90E8\u6253\u4EA4\u9053.</p><p><strong>\u4EE5\u4E0B\u65B9\u5F0F\u4F1A\u521B\u5EFA BFC:</strong></p><ul><li>\u6839\u5143\u7D20\u6216\u5305\u542B\u6839\u5143\u7D20\u7684\u5143\u7D20</li><li>\u6D6E\u52A8\u5143\u7D20\uFF08\u5143\u7D20\u7684 float \u4E0D\u662F none\uFF09</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08\u5143\u7D20\u7684 position \u4E3A absolute \u6216 fixed\uFF09</li><li>\u884C\u5185\u5757\u5143\u7D20\uFF08\u5143\u7D20\u7684 display \u4E3A inline-block\uFF09</li><li>\u8868\u683C\u5355\u5143\u683C\uFF08\u5143\u7D20\u7684 display \u4E3A table-cell,HTML \u8868\u683C\u5355\u5143\u683C\u9ED8\u8BA4\u4E3A\u8BE5\u503C\uFF09</li><li>\u8868\u683C\u6807\u9898\uFF08\u5143\u7D20\u7684 display \u4E3A table-caption,HTML \u8868\u683C\u6807\u9898\u9ED8\u8BA4\u4E3A\u8BE5\u503C\uFF09</li><li>\u533F\u540D\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\uFF08\u5143\u7D20\u7684 display \u4E3A table\u3001table-row\u3001 table-row-group\u3001table-header-group\u3001table-footer-group\uFF08\u5206\u522B\u662F HTML table\u3001row\u3001tbody\u3001thead\u3001tfoot \u7684\u9ED8\u8BA4\u5C5E\u6027\uFF09\u6216 inline-table\uFF09</li><li>overflow \u503C\u4E0D\u4E3A visible \u7684\u5757\u5143\u7D20</li><li>display \u503C\u4E3A flow-root \u7684\u5143\u7D20</li><li>contain \u503C\u4E3A layout\u3001content \u6216 strict \u7684\u5143\u7D20</li><li>\u5F39\u6027\u5143\u7D20\uFF08display \u4E3A flex \u6216 inline-flex \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09</li><li>\u7F51\u683C\u5143\u7D20\uFF08display \u4E3A grid \u6216 inline-grid \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09</li><li>\u591A\u5217\u5BB9\u5668\uFF08\u5143\u7D20\u7684 column-count \u6216 column-width \u4E0D\u4E3A auto,\u5305\u62EC column-count \u4E3A 1\uFF09</li><li>column-span \u4E3A all \u7684\u5143\u7D20\u59CB\u7EC8\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 BFC,\u5373\u4F7F\u8BE5\u5143\u7D20\u6CA1\u6709\u5305\u88F9\u5728\u4E00\u4E2A\u591A\u5217\u5BB9\u5668\u4E2D</li></ul><p>\u5F53\u4E00\u4E2A\u5143\u7D20\u8BBE\u7F6E\u4E86\u65B0\u7684 BFC \u540E,\u5C31\u548C\u8FD9\u4E2A\u5143\u7D20\u5916\u90E8\u7684 BFC \u6CA1\u6709\u5173\u7CFB\u4E86,\u8FD9\u4E2A\u5143\u7D20\u53EA\u4F1A\u53BB\u7EA6\u675F\u81EA\u5DF1\u5185\u90E8\u7684\u5B50\u5143\u7D20.</p><p><strong>BFC \u7684\u5E03\u5C40\u89C4\u5219\u4F8B\u5982\u4EE5\u4E0B:</strong></p><ul><li>\u5185\u90E8\u7684\u76D2\u5B50\u4F1A\u5728\u5782\u76F4\u65B9\u5411,\u4E00\u4E2A\u4E2A\u5730\u653E\u7F6E;</li><li>\u76D2\u5B50\u5782\u76F4\u65B9\u5411\u7684\u8DDD\u79BB\u7531 margin \u51B3\u5B9A,\u5C5E\u4E8E\u540C\u4E00\u4E2A BFC \u7684\u4E24\u4E2A\u76F8\u90BB Box \u7684\u4E0A\u4E0B margin \u4F1A\u53D1\u751F\u91CD\u53E0;</li><li>\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684\u5DE6\u8FB9,\u4E0E\u5305\u542B\u5757\u7684\u5DE6\u8FB9\u76F8\u63A5\u89E6\uFF08\u5BF9\u4E8E\u4ECE\u53F3\u5F80\u5DE6\u7684\u5E03\u5C40,\u5219\u76F8\u53CD\uFF09,\u5373\u4F7F\u5B58\u5728\u6D6E\u52A8\u4E5F\u662F\u5982\u6B64;</li><li>BFC \u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E float \u91CD\u53E0;</li><li>BFC \u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668,\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20.\u53CD\u4E4B\u4E5F\u5982\u6B64;</li><li>\u8BA1\u7B97 BFC \u7684\u9AD8\u5EA6\u65F6,\u6D6E\u52A8\u5143\u7D20\u4E5F\u53C3\u4E0E\u8BA1\u7B97.</li></ul><p><strong>\u5E94\u7528\u573A\u666F</strong></p><p><strong>1.\u9632\u6B62\u6D6E\u52A8\u5143\u7D20\u9AD8\u5EA6\u584C\u9677</strong></p><p>\u4E0D\u9002\u7528 BFC \u60C5\u51B5\u4E0B\uFF0C\u5B50\u5143\u7D20\u4F7F\u7528\u6D6E\u52A8\uFF0C\u7236\u5143\u7D20\u9AD8\u5EA6\u4F1A\u584C\u9677</p><p><strong>2.\u907F\u514D\u5916\u8FB9\u8DDD\u6298\u53E0</strong></p><p>\u5F53 2 \u4E2A box \u5728\u540C\u4E00\u4E2A BFC \u5BB9\u5668\u5185\uFF0C\u540C\u65F6\u4F7F\u7528 margin \u4F1A\u5F15\u8D77\u5916\u8FB9\u8DDD\u91CD\u5408</p><p><strong>3.\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40</strong></p><p>\u6839\u636E\u89C4\u5219 BFC \u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u5143\u7D20\u7684 box \u91CD\u53E0\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40</p><h2 id="\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1">\u5C42\u53E0\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5047\u5B9A\u7528\u6237\u6B63\u9762\u5411\uFF08\u6D4F\u89C8\u5668\uFF09\u89C6\u7A97\u6216\u7F51\u9875\uFF0C\u800C HTML \u5143\u7D20\u6CBF\u7740\u5176\u76F8\u5BF9\u4E8E\u7528\u6237\u7684\u4E00\u6761\u865A\u6784\u7684 z \u8F74\u6392\u5F00\uFF0C<strong>\u5C42\u53E0\u4E0A\u4E0B\u6587</strong>\u5C31\u662F\u5BF9\u8FD9\u4E9B HTML \u5143\u7D20\u7684\u4E00\u4E2A\u4E09\u7EF4\u6784\u60F3\u3002\u4F17 HTML \u5143\u7D20\u57FA\u4E8E\u5176\u5143\u7D20\u5C5E\u6027\u6309\u7167\u4F18\u5148\u7EA7\u987A\u5E8F\u5360\u636E\u8FD9\u4E2A\u7A7A\u95F4\u3002</p><p>\u5C42\u53E0\u4E0A\u4E0B\u6587</p><p>\u5728\u672C\u7BC7\u4E4B\u524D\u7684\u90E8\u5206\u2014\u2014\u8FD0\u7528 z-index\uFF0C\uFF08\u6211\u4EEC\u8BA4\u8BC6\u5230\uFF09\u67D0\u4E9B\u5143\u7D20\u7684\u6E32\u67D3\u987A\u5E8F\u662F\u7531\u5176 \xA0<code>z-index</code>\xA0 \u7684\u503C\u5F71\u54CD\u7684\u3002\u8FD9\u662F\u56E0\u4E3A\u8FD9\u4E9B\u5143\u7D20\u5177\u6709\u80FD\u591F\u4F7F\u4ED6\u4EEC\u5F62\u6210\u4E00\u4E2A<em>\u5C42\u53E0\u4E0A\u4E0B\u6587</em>\u7684\u7279\u6B8A\u5C5E\u6027\u3002</p><p>\u6587\u6863\u4E2D\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587\u7531\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u610F\u4E00\u4E2A\u6761\u4EF6\u7684\u5143\u7D20\u5F62\u6210\uFF1A</p><ul><li>\u6587\u6863\u6839\u5143\u7D20\uFF08<code>&lt;html&gt;</code>\uFF09\uFF1B</li><li><code>position</code>\xA0 \u503C\u4E3A \xA0<code>absolute</code>\uFF08\u7EDD\u5BF9\u5B9A\u4F4D\uFF09\u6216 \xA0<code>relative</code>\uFF08\u76F8\u5BF9\u5B9A\u4F4D\uFF09\u4E14 \xA0<code>z-index</code>\xA0 \u503C\u4E0D\u4E3A \xA0<code>auto</code>\xA0 \u7684\u5143\u7D20\uFF1B</li><li><code>position</code>\xA0 \u503C\u4E3A \xA0<code>fixed</code>\uFF08\u56FA\u5B9A\u5B9A\u4F4D\uFF09\u6216 \xA0<code>sticky</code>\uFF08\u7C98\u6EDE\u5B9A\u4F4D\uFF09\u7684\u5143\u7D20\uFF08\u6CBE\u6EDE\u5B9A\u4F4D\u9002\u914D\u6240\u6709\u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u6D4F\u89C8\u5668\uFF0C\u4F46\u8001\u7684\u684C\u9762\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF09\uFF1B</li><li>flex \u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF0C\u4E14 \xA0<code>z-index</code>\xA0 \u503C\u4E0D\u4E3A \xA0<code>auto</code>\uFF1B</li><li>grid \u5BB9\u5668\u7684\u5B50\u5143\u7D20\uFF0C\u4E14 \xA0<code>z-index</code>\xA0 \u503C\u4E0D\u4E3A \xA0<code>auto</code>\uFF1B</li><li><code>opacity</code>\u5C5E\u6027\u503C\u5C0F\u4E8E \xA0<code>1</code>\xA0 \u7684\u5143\u7D20\uFF1B</li><li><code>mix-blend-mode</code>\u5C5E\u6027\u503C\u4E0D\u4E3A \xA0<code>normal</code>\xA0 \u7684\u5143\u7D20\uFF1B</li><li>\u4EE5\u4E0B\u4EFB\u610F\u5C5E\u6027\u503C\u4E0D\u4E3A \xA0<code>none</code>\xA0 \u7684\u5143\u7D20\uFF1A <ul><li><code>transform</code></li><li><code>filter</code></li><li><code>backdrop-filter</code></li><li><code>perspective</code></li><li><code>clip-path</code></li><li><code>mask</code>\xA0/\xA0<code>mask-image</code>\xA0/\xA0<code>mask-border</code></li></ul></li><li><code>isolation</code>\u5C5E\u6027\u503C\u4E3A \xA0<code>isolate</code>\xA0 \u7684\u5143\u7D20\uFF1B</li><li><code>will-change</code> \u503C\u8BBE\u5B9A\u4E86\u4EFB\u4E00\u5C5E\u6027\u800C\u8BE5\u5C5E\u6027\u5728 non-initial \u503C\u65F6\u4F1A\u521B\u5EFA\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5143\u7D20\uFF1B</li><li><code>contain</code>\u5C5E\u6027\u503C\u4E3A \xA0<code>layout</code>\u3001<code>paint</code>\xA0 \u6216\u5305\u542B\u5B83\u4EEC\u5176\u4E2D\u4E4B\u4E00\u7684\u5408\u6210\u503C\uFF08\u6BD4\u5982 \xA0<code>contain: strict</code>\u3001<code>contain: content</code>\uFF09\u7684\u5143\u7D20\u3002</li></ul><p>\u5728\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5B50\u5143\u7D20\u540C\u6837\u4E5F\u6309\u7167\u4E0A\u9762\u89E3\u91CA\u7684\u89C4\u5219\u8FDB\u884C\u5C42\u53E0\u3002\u91CD\u8981\u7684\u662F\uFF0C\u5176\u5B50\u7EA7\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684 \xA0<code>z-index</code>\xA0 \u503C\u53EA\u5728\u7236\u7EA7\u4E2D\u624D\u6709\u610F\u4E49\u3002\u5B50\u7EA7\u5C42\u53E0\u4E0A\u4E0B\u6587\u88AB\u81EA\u52A8\u89C6\u4E3A\u7236\u7EA7\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u4E00\u4E2A\u72EC\u7ACB\u5355\u5143\u3002</p><p>\u603B\u7ED3\uFF1A</p><ul><li>\u5C42\u53E0\u4E0A\u4E0B\u6587\u53EF\u4EE5\u5305\u542B\u5728\u5176\u4ED6\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5E76\u4E14\u4E00\u8D77\u521B\u5EFA\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5C42\u7EA7\u3002</li><li>\u6BCF\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u90FD\u5B8C\u5168\u72EC\u7ACB\u4E8E\u5B83\u7684\u5144\u5F1F\u5143\u7D20\uFF1A\u5F53\u5904\u7406\u5C42\u53E0\u65F6\u53EA\u8003\u8651\u5B50\u5143\u7D20\u3002</li><li>\u6BCF\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u90FD\u662F\u81EA\u5305\u542B\u7684\uFF1A\u5F53\u4E00\u4E2A\u5143\u7D20\u7684\u5185\u5BB9\u53D1\u751F\u5C42\u53E0\u540E\uFF0C\u8BE5\u5143\u7D20\u5C06\u88AB\u4F5C\u4E3A\u6574\u4F53\u5728\u7236\u7EA7\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u6309\u987A\u5E8F\u8FDB\u884C\u5C42\u53E0\u3002</li></ul><p><strong>\u5907\u6CE8\uFF1A</strong>\xA0 \u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5C42\u7EA7\u662F HTML \u5143\u7D20\u5C42\u7EA7\u7684\u4E00\u4E2A\u5B50\u7EA7\uFF0C\u56E0\u4E3A\u53EA\u6709\u67D0\u4E9B\u5143\u7D20\u624D\u4F1A\u521B\u5EFA\u5C42\u53E0\u4E0A\u4E0B\u6587\u3002\u53EF\u4EE5\u8FD9\u6837\u8BF4\uFF0C\u6CA1\u6709\u521B\u5EFA\u81EA\u5DF1\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587\u7684\u5143\u7D20\u4F1A\u88AB\u7236\u5C42\u53E0\u4E0A\u4E0B\u6587<em>\u540C\u5316</em>\u3002</p><p>\u4F8B\u5B50\u4EE3\u7801\uFF0C\u6DFB\u52A0\u89E3\u91CA</p><h2 id="\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" tabindex="-1">\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h2><p><strong>\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587</strong>\uFF08Block Formatting Context\uFF0CBFC\uFF09\u662F Web \u9875\u9762\u7684\u53EF\u89C6 CSS \u6E32\u67D3\u7684\u4E00\u90E8\u5206\uFF0C\u662F\u5757\u7EA7\u76D2\u5B50\u7684\u5E03\u5C40\u8FC7\u7A0B\u53D1\u751F\u7684\u533A\u57DF\uFF0C\u4E5F\u662F\u6D6E\u52A8\u5143\u7D20\u4E0E\u5176\u4ED6\u5143\u7D20\u4EA4\u4E92\u7684\u533A\u57DF\u3002</p><p>\u4E0B\u5217\u65B9\u5F0F\u4F1A\u521B\u5EFA\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF1A</p><ul><li>\u6839\u5143\u7D20\uFF08<code>&lt;html&gt;</code>\uFF09</li><li>\u6D6E\u52A8\u5143\u7D20\uFF08<code>float</code> \u503C\u4E0D\u4E3A \xA0<code>none</code>\uFF09</li><li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08<code>position</code> \u503C\u4E3A \xA0<code>absolute</code>\xA0 \u6216 \xA0<code>fixed</code>\uFF09</li><li>\u884C\u5185\u5757\u5143\u7D20\uFF08<code>display</code> \u503C\u4E3A \xA0<code>inline-block</code>\uFF09</li><li>\u8868\u683C\u5355\u5143\u683C\uFF08<code>display</code> \u503C\u4E3A \xA0<code>table-cell</code>\uFF0CHTML \u8868\u683C\u5355\u5143\u683C\u9ED8\u8BA4\u503C\uFF09</li><li>\u8868\u683C\u6807\u9898\uFF08<code>display</code> \u503C\u4E3A \xA0<code>table-caption</code>\uFF0CHTML \u8868\u683C\u6807\u9898\u9ED8\u8BA4\u503C\uFF09</li><li>\u533F\u540D\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\uFF08<code>display</code>\xA0 \u503C\u4E3A \xA0<code>table</code>\u3001<code>table-row</code>\u3001\xA0<code>table-row-group</code>\u3001<code>table-header-group</code>\u3001<code>table-footer-group</code>\uFF08\u5206\u522B\u662F HTML table\u3001tr\u3001tbody\u3001thead\u3001tfoot \u7684\u9ED8\u8BA4\u503C\uFF09\u6216 \xA0<code>inline-table</code>\uFF09</li><li><code>overflow</code> \u503C\u4E0D\u4E3A \xA0<code>visible</code>\u3001<code>clip</code>\xA0 \u7684\u5757\u5143\u7D20</li><li><code>display</code>\xA0 \u503C\u4E3A \xA0<code>flow-root</code>\xA0 \u7684\u5143\u7D20</li><li><code>contain</code> \u503C\u4E3A \xA0<code>layout</code>\u3001<code>content</code>\xA0 \u6216 \xA0<code>paint</code>\xA0 \u7684\u5143\u7D20</li><li>\u5F39\u6027\u5143\u7D20\uFF08<code>display</code>\xA0 \u503C\u4E3A \xA0<code>flex</code>\xA0 \u6216 \xA0<code>inline-flex</code>\xA0 \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09\uFF0C\u5982\u679C\u5B83\u4EEC\u672C\u8EAB\u65E2\u4E0D\u662F \xA0flex\u3001grid \u4E5F\u4E0D\u662F \xA0table \u5BB9\u5668</li><li>\u7F51\u683C\u5143\u7D20\uFF08<code>display</code>\xA0 \u503C\u4E3A \xA0<code>grid</code>\xA0 \u6216 \xA0<code>inline-grid</code>\xA0 \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09\uFF0C\u5982\u679C\u5B83\u4EEC\u672C\u8EAB\u65E2\u4E0D\u662F \xA0flex\u3001grid \u4E5F\u4E0D\u662F \xA0table\xA0 \u5BB9\u5668</li><li>\u591A\u5217\u5BB9\u5668\uFF08<code>column-count</code>\u6216 \xA0<code>column-width</code>\u503C\u4E0D\u4E3A \xA0<code>auto</code>\uFF0C\u5305\u62EC<code>column-count</code>\xA0 \u4E3A \xA0<code>1</code>\uFF09</li><li><code>column-span</code>\xA0 \u503C\u4E3A \xA0<code>all</code>\xA0 \u7684\u5143\u7D20\u59CB\u7EC8\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 BFC\uFF0C\u5373\u4F7F\u8BE5\u5143\u7D20\u6CA1\u6709\u5305\u88F9\u5728\u4E00\u4E2A\u591A\u5217\u5BB9\u5668\u4E2D\u3002</li></ul><p>\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u5F71\u54CD\u5E03\u5C40\uFF0C\u901A\u5E38\uFF0C\u6211\u4EEC\u4F1A\u4E3A\u5B9A\u4F4D\u548C\u6E05\u9664\u6D6E\u52A8\u521B\u5EFA\u65B0\u7684 BFC\uFF0C\u800C\u4E0D\u662F\u66F4\u6539\u5E03\u5C40\uFF0C\u56E0\u4E3A\u5B83\u5C06\uFF1A</p><ul><li>\u5305\u542B\u5185\u90E8\u6D6E\u52A8</li><li>\u6392\u9664\u5916\u90E8\u6D6E\u52A8</li><li>\u963B\u6B62\u5916\u8FB9\u8DDD\u91CD\u53E0</li></ul><p><strong>\u5907\u6CE8\uFF1A</strong>\xA0flex/grid \u5BB9\u5668\uFF08display\uFF1Aflex/grid/inline-flex/inline-grid\uFF09\u5EFA\u7ACB\u65B0\u7684 flex/grid \u683C\u5F0F\u4E0A\u4E0B\u6587\uFF0C\u9664\u5E03\u5C40\u4E4B\u5916\uFF0C\u5B83\u4E0E\u5757\u683C\u5F0F\u4E0A\u4E0B\u6587\u7C7B\u4F3C\u3002flex/grid \u5BB9\u5668\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u6D6E\u52A8\u5B50\u7EA7\uFF0C\u4F46\u6392\u9664\u5916\u90E8\u6D6E\u52A8\u548C\u963B\u6B62\u5916\u8FB9\u8DDD\u91CD\u53E0\u4ECD\u7136\u6709\u6548\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context#%E7%A4%BA%E4%BE%8B" target="_blank" rel="noreferrer">\u793A\u4F8B</a> <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4F8B\u5B50\u4E5F\u5F88\u91CD\u8981\uFF0C\u53C2\u8003\u7F51\u7AD9\u4E0A\u7684\u5185\u5BB9\u5B9E\u73B0\u76F8\u5E94\u4EE3\u7801</p>`,
    61
  ),
  p = [a];
function c(i, t, r, d, F, D) {
  return s(), o("div", null, p);
}
const g = l(n, [["render", c]]);
export { C as __pageData, g as default };
