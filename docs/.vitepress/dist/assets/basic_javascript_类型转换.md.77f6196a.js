import { _ as s, c as n, o as a, a as e } from "./app.61809bb9.js";
const y = JSON.parse(
    '{"title":"\u7C7B\u578B\u8F6C\u6362\uFF08\u7384\u5B66\uFF09","description":"","frontmatter":{},"headers":[],"relativePath":"basic/javascript/\u7C7B\u578B\u8F6C\u6362.md"}'
  ),
  p = { name: "basic/javascript/\u7C7B\u578B\u8F6C\u6362.md" },
  l = e(
    `<h1 id="\u7C7B\u578B\u8F6C\u6362-\u7384\u5B66" tabindex="-1">\u7C7B\u578B\u8F6C\u6362\uFF08\u7384\u5B66\uFF09 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362-\u7384\u5B66" aria-hidden="true">#</a></h1><blockquote><ol><li><p>undefined == null\uFF0C\u7ED3\u679C\u662F true\u3002\u4E14\u5B83\u4FE9\u4E0E\u6240\u6709\u5176\u4ED6\u503C\u6BD4\u8F83\u7684\u7ED3\u679C\u90FD\u662F false\u3002</p></li><li><p>String == Boolean\uFF0C\u9700\u8981\u4E24\u4E2A\u64CD\u4F5C\u6570\u540C\u65F6\u8F6C\u4E3A Number\u3002</p></li><li><p>String/Boolean == Number\uFF0C\u9700\u8981 String/Boolean \u8F6C\u4E3A Number\u3002</p></li><li><p>Object == Primitive\uFF0C\u9700\u8981 Object \u8F6C\u4E3A Primitive(\u5177\u4F53\u901A\u8FC7 valueOf \u548C toString \u65B9\u6CD5)\u3002</p></li></ol></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ToPrimitive(obj,preferredType)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">JS\u5F15\u64CE\u5185\u90E8\u8F6C\u6362\u4E3A\u539F\u59CB\u503CToPrimitive(obj,preferredType)\u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2Aobj\u4E3A\u88AB\u8F6C\u6362\u7684\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">preferredType\u4E3A\u5E0C\u671B\u8F6C\u6362\u6210\u7684\u7C7B\u578B\uFF08\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u63A5\u53D7\u7684\u503C\u4E3ANumber\u6216String\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5728\u6267\u884CToPrimitive(obj,preferredType)\u65F6\u5982\u679C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u7A7A\u5E76\u4E14obj\u4E3ADate\u7684\u4E8B\u4F8B\u65F6\uFF0C\u6B64\u65F6preferredType\u4F1A</span></span>
<span class="line"><span style="color:#A6ACCD;">\u88AB\u8BBE\u7F6E\u4E3AString\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0BpreferredType\u90FD\u4F1A\u88AB\u8BBE\u7F6E\u4E3ANumber\u5982\u679CpreferredType\u4E3ANumber\uFF0CToPrimitive\u6267</span></span>
<span class="line"><span style="color:#A6ACCD;">\u884C\u8FC7\u7A0B\u5982</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4E0B\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">1. \u5982\u679Cobj\u4E3A\u539F\u59CB\u503C\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">2. \u5426\u5219\u8C03\u7528 obj.valueOf()\uFF0C\u5982\u679C\u6267\u884C\u7ED3\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u4E4B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">3. \u5426\u5219\u8C03\u7528 obj.toString()\uFF0C\u5982\u679C\u6267\u884C\u7ED3\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u4E4B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">4. \u5426\u5219\u629B\u5F02\u5E38\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679CpreferredType\u4E3AString\uFF0C\u5C06\u4E0A\u9762\u7684\u7B2C2\u6B65\u548C\u7B2C3\u6B65\u8C03\u6362\uFF0C\u5373\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">1. \u5982\u679Cobj\u4E3A\u539F\u59CB\u503C\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">2. \u5426\u5219\u8C03\u7528 obj.toString()\uFF0C\u5982\u679C\u6267\u884C\u7ED3\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u4E4B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">3. \u5426\u5219\u8C03\u7528 obj.valueOf()\uFF0C\u5982\u679C\u6267\u884C\u7ED3\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u4E4B\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">4. \u5426\u5219\u629B\u5F02\u5E38\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,
    3
  ),
  o = [l];
function r(t, i, c, C, A, d) {
  return a(), n("div", null, o);
}
const b = s(p, [["render", r]]);
export { y as __pageData, b as default };
