import { _ as e, c as o, o as a, b as t, d as n } from "./app.61809bb9.js";
const b = JSON.parse(
    '{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"basic/javascript/introduction.md"}'
  ),
  c = { name: "basic/javascript/introduction.md" },
  r = t(
    "h1",
    { id: "introduction", tabindex: "-1" },
    [
      n("Introduction "),
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
  i = t(
    "blockquote",
    null,
    [
      t(
        "p",
        null,
        "JavaScript \u662F\u524D\u7AEF\u7684\u6838\u5FC3\u6280\u672F\u3002"
      ),
    ],
    -1
  ),
  s = [r, i];
function d(_, u, p, l, h, f) {
  return a(), o("div", null, s);
}
const v = e(c, [["render", d]]);
export { b as __pageData, v as default };
