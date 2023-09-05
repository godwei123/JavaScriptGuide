import{_ as e,c as i,o,V as l}from"./chunks/framework.25f281e8.js";const r="/javascript-guide/assets/201803071735.8fc58ebd.png",C=JSON.parse('{"title":"浏览器安全","description":"","frontmatter":{},"headers":[],"relativePath":"basic/browser/浏览器安全.md","filePath":"basic/browser/浏览器安全.md"}'),t={name:"basic/browser/浏览器安全.md"},a=l('<h1 id="浏览器安全" tabindex="-1">浏览器安全 <a class="header-anchor" href="#浏览器安全" aria-label="Permalink to &quot;浏览器安全&quot;">​</a></h1><h2 id="xss-跨站脚本攻击" tabindex="-1">XSS 跨站脚本攻击 <a class="header-anchor" href="#xss-跨站脚本攻击" aria-label="Permalink to &quot;XSS 跨站脚本攻击&quot;">​</a></h2><p>就是攻击者想尽一切办法将可以执行的代码注入到网页中。</p><p>XSS 全称（Cross Site Scripting）跨站脚本攻击，是最常见的 Web 应⽤程序安全漏洞之⼀，XSS 是指攻击者在⽹页中嵌⼊客户端脚本，通常是 JavaScript 编写的危险代码，当⽤户使⽤浏览器浏览⽹页时，脚本就会在⽤户的浏览器上执⾏，从⽽达到攻击者的⽬的。</p><p>XSS 的本质是因为网站没有对恶意代码进行过滤，与正常的代码混合在一起了，浏览器没有办法分辨哪些脚本是可信的，从而导致了恶意代码的执行。</p><p>攻击者可以通过这种攻击方式来进行以下操作：</p><ul><li>获取页面的数据，如 DOM，包括 DOM、cookie、localStorage，</li><li>DOS 攻击，发送合理请求，占用服务器资源，从而使用户无法访问服务器</li><li>破坏页面结构</li><li>流量劫持（将链接指向某网站）</li></ul><h3 id="存储型-server-端" tabindex="-1">存储型（server 端） <a class="header-anchor" href="#存储型-server-端" aria-label="Permalink to &quot;存储型（server 端）&quot;">​</a></h3><p><strong>场景</strong></p><p>见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。</p><p><strong>攻击步骤</strong></p><ul><li>攻击者将恶意代码提交到目标网站的数据库中</li><li>用户打开目标网站时，服务端将恶意代码从数据库中取出来，拼接在 HTML 中返回给浏览器</li><li>用户浏览器在收到响应后解析执行，混在其中的恶意代码也同时被执行</li><li>恶意代码窃取用户数据，并发送到指定攻击者的网站，或者冒充用户行为，调用目标网站的接口，执行恶意操作</li></ul><p><strong>攻击类型</strong></p><ul><li>DOM 型 XSS： 攻击者将带有恶意 js 代码的参数传递到网站的前端页面中，该代码不会传入服务器直接在客户的浏览器执行。</li><li>反射性型 XSS： 攻击者将带有恶意 js 代码的参数传递给网站，经过服务器的然后返回到客户端，在客户的浏览器执行。</li><li>存储型 XSS： 攻击者将带有恶意 js 代码的参数传递给网站，经过服务器存储在数据库中，任何一个客户端在访问该条数据时，恶意的 js 代码都会在该客户端的浏览器执行。</li></ul><h3 id="反射型-server-端" tabindex="-1">反射型（Server 端） <a class="header-anchor" href="#反射型-server-端" aria-label="Permalink to &quot;反射型（Server 端）&quot;">​</a></h3><p>与存储型的区别在于，存储型的恶意代码存储在数据库中，反射型的恶意代码在 URL 上</p><p><strong>场景</strong></p><p>通过 URL 传递参数的功能，如网站搜索、跳转等。</p><p><strong>攻击步骤</strong></p><ul><li>攻击者构造出特殊的 URL，其中包含恶意代码。</li><li>用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器。</li><li>用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ul><h3 id="dom-型-浏览器端" tabindex="-1">Dom 型(浏览器端） <a class="header-anchor" href="#dom-型-浏览器端" aria-label="Permalink to &quot;Dom 型(浏览器端）&quot;">​</a></h3><p>DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。</p><p><strong>场景</strong></p><p>通过 URL 传递参数的功能，如网站搜索、跳转等。</p><p><strong>攻击步骤</strong></p><ul><li>攻击者构造出特殊的 URL，其中包含恶意代码。</li><li>用户打开带有恶意代码的 URL。</li><li>用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行。</li><li>恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。</li></ul><h3 id="预防方案" tabindex="-1">预防方案 <a class="header-anchor" href="#预防方案" aria-label="Permalink to &quot;预防方案&quot;">​</a></h3><p>防止攻击者提交恶意代码，防止浏览器执行恶意代码</p><p><strong>对数据进行严格的输出编码</strong></p><ul><li>如 HTML 元素的编码，JS 编码，CSS 编码，URL 编码等等</li><li>避免拼接 HTML；Vue/React 技术栈，避免使用 v-html / dangerouslySetInnerHTML</li><li>CSP HTTP Header，即 Content-Security-Policy、X-XSS-Protection</li><li>增加攻击难度，配置 CSP(本质是建立白名单，由浏览器进行拦截)</li><li><code>Content-Security-Policy: default-src &#39;self&#39; </code>-所有内容均来自站点的同一个源（不包括其子域名）</li><li><code>Content-Security-Policy: default-src &#39;self&#39; *.trusted.com</code>-允许内容来自信任的域名及其子域名 (域名不必须与 CSP 设置所在的域名相同)</li><li><code>Content-Security-Policy: default-src https://yideng.com</code>-该服务器仅允许通过 HTTPS 方式并仅从 yideng.com 域名来访问文档</li><li>设置 Cookie 的 httpOnly 为 true</li></ul><p><strong>输入验证</strong></p><ul><li>比如一些常见的数字、URL、电话号码、邮箱地址等等做校验判断</li><li>开启浏览器 XSS 防御：Http Only cookie，禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。</li><li>验证码</li></ul><h2 id="csrf-跨站请求伪造" tabindex="-1">CSRF：跨站请求伪造 <a class="header-anchor" href="#csrf-跨站请求伪造" aria-label="Permalink to &quot;CSRF：跨站请求伪造&quot;">​</a></h2><p>攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。</p><p>CSRF（Cross-site request forgery）：跨站请求伪造。</p><p>CSRF 攻击的本质是利用了 cookie 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。</p><h3 id="攻击" tabindex="-1">攻击 <a class="header-anchor" href="#攻击" aria-label="Permalink to &quot;攻击&quot;">​</a></h3><p><img src="'+r+'" alt="201803071735"> 用户是网站 A 的注册用户，且登录进去，于是网站 A 就给用户下发 cookie。</p><p>从上图可以看出，要完成一次 CSRF 攻击，受害者必须满足两个必要的条件：</p><p>（1）登录受信任网站 A，并在本地生成 Cookie。（如果用户没有登录网站 A，那么网站 B 在诱导的时候，请求网站 A 的 api 接口时，会提示你登录）</p><p>（2）在不登出 A 的情况下，访问危险网站 B（其实是利用了网站 A 的漏洞）。</p><p>我们在讲 CSRF 时，一定要把上面的两点说清楚。</p><p>一般的 CSRF 有三种：</p><ul><li>GET 类型的 CSRF 攻击，比如在网站中的一个 img 标签里构建一个请求，当用户打开这个网站的时候就会自动发起提交。</li><li>POST 类型的 CSRF 攻击，比如说构建一个表单，然后隐藏它，当用户进入页面时，自动提交这个表单。</li><li>链接类型的 CSRF 攻击，比如说在 a 标签的 href 属性里构建一个请求，然后诱导用户去点击。</li></ul><p>::: cookie 保证了用户可以处于登录状态，但网站 B 其实拿不到 cookie。 :::</p><h3 id="预防方案-1" tabindex="-1">预防方案 <a class="header-anchor" href="#预防方案-1" aria-label="Permalink to &quot;预防方案&quot;">​</a></h3><p>CSRF 通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对 CSRF 的防护能力来提升安全性。</p><p><strong>同源检测</strong></p><p>通过 Header 中的 Origin Header 、Referer Header 确定，但不同浏览器可能会有不一样的实现，不能完全保证</p><p>第一种是同源检测的方法，服务器根据 http 请求头中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而对请求进行过滤。当 origin 或者 referer 信息都不存在的时候，直接阻止。这种方式的缺点是有些情况下 referer 可以被伪造。还有就是我们这种方法同时把搜索引擎的链接也给屏蔽了，所以一般网站会允许搜索引擎的页面请求，但是相应的页面请求这种请求方式也可能被攻击者给利用。</p><p><strong>CSRF Token 校验</strong></p><p>将 CSRF Token 输出到页面中（通常保存在 Session 中），页面提交的请求携带这个 Token，服务器验证 Token 是否正确</p><p>（1）服务器发送给客户端一个 token；</p><p>（2）客户端提交的表单中带着这个 token。</p><p>（3）如果这个 token 不合法，那么服务器拒绝这个请求。</p><p>第二种方法是使用 CSRF Token 来进行验证，服务器向用户返回一个随机数 Token ，当网站再次发起请求时，在请求参数中加入服务器端返回的 token ，然后服务器对这个 token 进行验证。这种方法解决了使用 cookie 单一验证方式时，可能会被冒用的问题，但是这种方法存在一个缺点就是，我们需要给网站中的所有请求都添加上这个 token，操作比较繁琐。还有一个问题是一般不会只有一台网站服务器，如果我们的请求经过负载平衡转移到了其他的服务器，但是这个服务器的 session 中没有保留这个 token 的话，就没有办法验证了。这种情况我们可以通过改变 token 的构建方式来解决。</p><p><strong>双重 cookie 验证</strong></p><p>第三种方式使用双重 Cookie 验证的办法，服务器在用户访问网站页面时，向请求域名注入一个 Cookie，内容为随机字符串，然后当用户再次向服务器发送请求的时候，从 cookie 中取出这个字符串，添加到 URL 参数中，然后服务器通过对 cookie 中的数据和参数中的数据进行比较，来进行验证。使用这种方式是利用了攻击者只能利用 cookie，但是不能访问获取 cookie 的特点。并且这种方法比 CSRF Token 的方法更加方便，并且不涉及到分布式访问的问题。这种方法的缺点是如果网站存在 XSS 漏洞的，那么这种方式会失效。同时这种方式不能做到子域名的隔离。</p><ul><li>流程： <ul><li>步骤 1：在用户访问网站页面时，向请求域名注入一个 Cookie，内容为随机字符串（例如 csrfcookie=v8g9e4ksfhw）</li><li>步骤 2：在前端向后端发起请求时，取出 Cookie，并添加到 URL 的参数中（接上例 POST <code>https://www.a.com/comment?csrfcookie=v8g9e4ksfhw</code>）</li><li>步骤 3：后端接口验证 Cookie 中的字段与 URL 参数中的字段是否一致，不一致则拒绝。</li></ul></li><li>优点： <ul><li>无需使用 Session，适用面更广，易于实施。</li><li>Token 储存于客户端中，不会给服务器带来压力。</li><li>相对于 Token，实施成本更低，可以在前后端统一拦截校验，而不需要一个个接口和页面添加。</li></ul></li><li>缺点： <ul><li>Cookie 中增加了额外的字段。</li><li>如果有其他漏洞（例如 XSS），攻击者可以注入 Cookie，那么该防御方式失效。</li><li>难以做到子域名的隔离。</li><li>为了确保 Cookie 传输安全，采用这种防御方式的最好确保用整站 HTTPS 的方式，如果还没切 HTTPS 的使用这种方式也会有风险。</li></ul></li><li>Samesite Cookie 属性：Google 起草了一份草案来改进 HTTP 协议，那就是为 Set-Cookie 响应头新增 Samesite 属性，它用来标明这个 Cookie 是个“同站 Cookie”，同站 Cookie 只能作为第一方 Cookie，不能作为第三方 Cookie，Samesite 有两个属性值，Strict 为任何情况下都不可以作为第三方 Cookie ，Lax 为可以作为第三方 Cookie , 但必须是 Get 请求</li></ul><p><strong>Samesite</strong></p><ul><li>第四种方式是使用在设置 cookie 属性的时候设置 Samesite ，限制 cookie 不能作为被第三方使用，从而可以避免被攻击者利用。Samesite 一共有两种模式，一种是严格模式，在严格模式下 cookie 在任何情况下都不可能作为第三方 Cookie 使用，在宽松模式下，cookie 可以被请求是 GET 请求，且会发生页面跳转的请求所使用。</li></ul><h2 id="csrf-和-xss-的区别" tabindex="-1">CSRF 和 XSS 的区别 <a class="header-anchor" href="#csrf-和-xss-的区别" aria-label="Permalink to &quot;CSRF 和 XSS 的区别&quot;">​</a></h2><p>区别一：</p><p>CSRF：需要用户先登录网站 A，获取 cookie。</p><p>XSS：不需要登录。</p><p>区别二：（原理的区别）</p><p>CSRF：是利用网站 A 本身的漏洞，去请求网站 A 的 api。</p><p>XSS：是向网站 A 注入 JS 代码，然后执行 JS 里的代码，篡改网站 A 的内容。</p>',68),s=[a];function p(n,c,S,k,d,h){return o(),i("div",null,s)}const g=e(t,[["render",p]]);export{C as __pageData,g as default};
