import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.00751356.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/节流与防抖.md","filePath":"javascript/节流与防抖.md"}'),p={name:"javascript/节流与防抖.md"},o=l(`<h2 id="节流与防抖" tabindex="-1">节流与防抖 <a class="header-anchor" href="#节流与防抖" aria-label="Permalink to &quot;节流与防抖&quot;">​</a></h2><p><strong>防抖(debounce):所谓防抖，是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。</strong></p><p><strong>防抖函数分为非立即执行版和立即执行版。</strong></p><p>非立即执行版的意思是触发事件后函数不会立即执行，而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。</p><blockquote><ul><li>限制 <strong>鼠标连击</strong> 触发</li><li>每次 resize/scroll 触发统计事件</li><li>文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）</li></ul></blockquote><h3 id="非立即执行版" tabindex="-1">非立即执行版 <a class="header-anchor" href="#非立即执行版" aria-label="Permalink to &quot;非立即执行版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 防抖动函数</span></span>
<span class="line"><span style="color:#e1e4e8;">function debounce(func,delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let timer;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    	let context = this;</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(timer) clearTimeout(timer) // 每次执行的时候把前一个 setTimeout clear 掉</span></span>
<span class="line"><span style="color:#e1e4e8;">        timer = setTimeout(()=&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            func.apply(context,arguments)</span></span>
<span class="line"><span style="color:#e1e4e8;">        },delay)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 防抖动函数</span></span>
<span class="line"><span style="color:#24292e;">function debounce(func,delay) {</span></span>
<span class="line"><span style="color:#24292e;">    let timer;</span></span>
<span class="line"><span style="color:#24292e;">    return function() {</span></span>
<span class="line"><span style="color:#24292e;">    	let context = this;</span></span>
<span class="line"><span style="color:#24292e;">        if(timer) clearTimeout(timer) // 每次执行的时候把前一个 setTimeout clear 掉</span></span>
<span class="line"><span style="color:#24292e;">        timer = setTimeout(()=&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            func.apply(context,arguments)</span></span>
<span class="line"><span style="color:#24292e;">        },delay)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="立即执行版" tabindex="-1">立即执行版 <a class="header-anchor" href="#立即执行版" aria-label="Permalink to &quot;立即执行版&quot;">​</a></h3><p>立即执行版的意思是触发事件后函数会立即执行，然后 n 秒内不触发事件才能继续执行函数的效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 防抖动函数-立即执行版</span></span>
<span class="line"><span style="color:#e1e4e8;">function debounce(func, delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let timer;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let context = this;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (timer) clearTimeout(timer); // 每次执行的时候把前一个 setTimeout clear 掉</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        let callNow = !timer;</span></span>
<span class="line"><span style="color:#e1e4e8;">        timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            timer = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }, delay)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (callNow) func.apply(context, arguments);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 防抖动函数-立即执行版</span></span>
<span class="line"><span style="color:#24292e;">function debounce(func, delay) {</span></span>
<span class="line"><span style="color:#24292e;">    let timer;</span></span>
<span class="line"><span style="color:#24292e;">    return function () {</span></span>
<span class="line"><span style="color:#24292e;">        let context = this;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (timer) clearTimeout(timer); // 每次执行的时候把前一个 setTimeout clear 掉</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        let callNow = !timer;</span></span>
<span class="line"><span style="color:#24292e;">        timer = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            timer = null;</span></span>
<span class="line"><span style="color:#24292e;">        }, delay)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (callNow) func.apply(context, arguments);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="综合版" tabindex="-1">综合版 <a class="header-anchor" href="#综合版" aria-label="Permalink to &quot;综合版&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@desc</span><span style="color:#6A737D;"> 函数防抖</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">func</span><span style="color:#6A737D;"> 函数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">wait</span><span style="color:#6A737D;"> 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">immediate</span><span style="color:#6A737D;"> true 表立即执行，false 表非立即执行</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">debounce</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">delay</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">immediate</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 双剑合璧版</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (timer) </span><span style="color:#B392F0;">clearTimeout</span><span style="color:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (immediate) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> callNow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">timer;</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, delay);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (callNow) func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(context, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(context, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, delay);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@desc</span><span style="color:#6A737D;"> 函数防抖</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">func</span><span style="color:#6A737D;"> 函数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">wait</span><span style="color:#6A737D;"> 延迟执行毫秒数</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">immediate</span><span style="color:#6A737D;"> true 表立即执行，false 表非立即执行</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">debounce</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">delay</span><span style="color:#24292E;">, </span><span style="color:#E36209;">immediate</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 双剑合璧版</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (timer) </span><span style="color:#6F42C1;">clearTimeout</span><span style="color:#24292E;">(timer);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (immediate) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> callNow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">timer;</span></span>
<span class="line"><span style="color:#24292E;">      timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }, delay);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (callNow) func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      }, delay);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="节流-throttle" tabindex="-1">**节流(throttle): ** <a class="header-anchor" href="#节流-throttle" aria-label="Permalink to &quot;**节流(throttle): **&quot;">​</a></h3><p><strong>所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。</strong></p><p>对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。</p><blockquote><ul><li>射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）</li><li>搜索联想（keyup）</li><li>监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次</li></ul></blockquote><h3 id="时间戳版" tabindex="-1">时间戳版 <a class="header-anchor" href="#时间戳版" aria-label="Permalink to &quot;时间戳版&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">throttle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wait</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 时间戳版</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> previous </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> now </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (now </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> previous </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> wait) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      previous </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> now;</span></span>
<span class="line"><span style="color:#E1E4E8;">      func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">throttle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wait</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时间戳版</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> now </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (now </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> previous </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> wait) {</span></span>
<span class="line"><span style="color:#24292E;">      previous </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> now;</span></span>
<span class="line"><span style="color:#24292E;">      func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>时间戳版没有用到定时器，所以不需要再声明一个 this 变量。</p><h3 id="定时器版" tabindex="-1">定时器版 <a class="header-anchor" href="#定时器版" aria-label="Permalink to &quot;定时器版&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">throttle</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">func</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">wait</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 定时器版</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> timer;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> context </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">timer) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        timer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        func.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(context, </span><span style="color:#79B8FF;">arguments</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, wait);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">throttle</span><span style="color:#24292E;">(</span><span style="color:#E36209;">func</span><span style="color:#24292E;">, </span><span style="color:#E36209;">wait</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 定时器版</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> timer;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> context </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">timer) {</span></span>
<span class="line"><span style="color:#24292E;">      timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        timer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        func.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(context, </span><span style="color:#005CC5;">arguments</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      }, wait);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21),e=[o];function t(c,r,y,E,i,u){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{m as __pageData,F as default};
