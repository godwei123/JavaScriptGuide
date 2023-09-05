import{_ as t,c as e,o as i,V as o}from"./chunks/framework.25f281e8.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/DOM.md","filePath":"javascript/DOM.md"}'),l={name:"javascript/DOM.md"},d=o('<p>1、clientWidth：目标元素的 width+padding(左右两侧)</p><p>2、offsetWidth：目标元素的 width+padding(左右两侧)+border(左右两侧)</p><p>3、clientLeft：目标元素左边框 border 的宽度</p><p>4、offsetLeft：目标元素左边框离其具有定位的父元素之间的距离</p><p>5、clientX：鼠标相对于浏览器窗口可视区域的 X 坐标（横向）</p><p>6、offsetX：鼠标相对于绑定事件元素的 X 坐标</p><p>7、pageX：鼠标相对于文档的 X 坐标，会计算滚动距离；如果没有滚动距离，值与 clientX 一样</p><p>8、screenX：鼠标相对于<strong>显示器</strong>屏幕左侧的 X 坐标</p><p>9、getBoundingClientRect().left：目标元素左边框相对于浏览器可视区域的距离，可能为负值</p><h2 id="几种获得宽高的方式" tabindex="-1">几种获得宽高的方式 <a class="header-anchor" href="#几种获得宽高的方式" aria-label="Permalink to &quot;几种获得宽高的方式&quot;">​</a></h2><ul><li>dom.style.width/height   这种方式只能取到 dom 元素内联样式所设置的宽高，也就是说如果该节点的样式是在 style 标签中或外联的 CSS 文件中设置的话，通过这种方法是获取不到 dom 的宽高的。</li><li>dom.currentStyle.width/height   这种方式获取的是在页面渲染完成后的结果，就是说不管是哪种方式设置的样式，都能获取到。但这种方式只有 IE 浏览器支持。</li><li>window.getComputedStyle(dom).width/height   这种方式的原理和 2 是一样的，这个可以兼容更多的浏览器，通用性好一些。</li><li>dom.getBoundingClientRect().width/height   这种方式是根据元素在视窗中的绝对位置来获取宽高的</li><li><strong>dom.offsetWidth/offsetHeight</strong>   这个就没什么好说的了，最常用的，也是兼容最好的。</li></ul><h2 id="拓展-各种获得宽高的方式" tabindex="-1">拓展 各种获得宽高的方式 <a class="header-anchor" href="#拓展-各种获得宽高的方式" aria-label="Permalink to &quot;拓展 各种获得宽高的方式&quot;">​</a></h2><ul><li>获取屏幕的高度和宽度（屏幕分辨率）： window.screen.height/width</li><li>获取屏幕工作区域的高度和宽度（去掉状态栏）： window.screen.availHeight/availWidth</li><li>网页全文的高度和宽度： document.body.scrollHeight/Width</li><li>滚动条卷上去的高度和向右卷的宽度： document.body.scrollTop/scrollLeft</li><li>网页可见区域的高度和宽度（不加边线）： document.body.clientHeight/clientWidth</li><li>网页可见区域的高度和宽度（加边线）： document.body.offsetHeight/offsetWidth</li></ul>',13),a=[d];function n(r,s,c,h,p,f){return i(),e("div",null,a)}const m=t(l,[["render",n]]);export{g as __pageData,m as default};
