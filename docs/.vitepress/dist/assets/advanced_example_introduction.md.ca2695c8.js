import { _ as e, c as o, o as n, b as t, d as a } from "./app.61809bb9.js";
const x = JSON.parse(
    '{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"advanced/example/introduction.md"}'
  ),
  c = { name: "advanced/example/introduction.md" },
  s = t(
    "h1",
    { id: "introduction", tabindex: "-1" },
    [
      a("Introduction "),
      t(
        "a",
        {
          class: "header-anchor",
          href: "#introduction",
          "aria-hidden": "true",
        },
        "#"
      ),
    ],
    -1
  ),
  d = t(
    "div",
    { class: "tip custom-block" },
    [
      t("p", { class: "custom-block-title" }, "TIP"),
      t(
        "p",
        null,
        "\u5F02\u6B65\u7F16\u7A0B\u3001\u4E8B\u4EF6\u5FAA\u73AF\u3001this \u6307\u5411\u3001\u4F5C\u7528\u57DF\u3001\u53D8\u91CF\u63D0\u5347\u3001\u95ED\u5305\u3001\u539F\u578B\u3001\u7EE7\u627F\u3002"
      ),
      t(
        "p",
        null,
        "\u77E5\u8BC6\u70B9\u5F80\u5F80\u4E0D\u662F\u5355\u72EC\u51FA\u73B0\u7684\uFF0C\u800C\u662F\u5728\u540C\u4E00\u6BB5\u4EE3\u7801\u4E2D\u5305\u542B\u591A\u4E2A\u77E5\u8BC6\u70B9\u3002"
      ),
    ],
    -1
  ),
  i = [s, d];
function r(l, p, u, _, h, m) {
  return n(), o("div", null, i);
}
const v = e(c, [["render", r]]);
export { x as __pageData, v as default };
