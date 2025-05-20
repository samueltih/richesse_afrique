import { defineComponent as a, createElementBlock as t, openBlock as o, renderSlot as s, createCommentVNode as r, normalizeClass as i, toDisplayString as c } from "vue";
import './index.css';const d = ["src", "alt"], m = /* @__PURE__ */ a({
  __name: "logo",
  props: {
    img: {
      type: String,
      default: "/logo.jpeg"
    },
    alt: {
      type: String,
      default: "Company Logo"
    }
  },
  setup(e) {
    return (n, l) => (o(), t("img", {
      class: "logo",
      src: e.img,
      alt: e.alt
    }, null, 8, d));
  }
}), u = { class: "relative overflow-show" }, p = /* @__PURE__ */ a({
  __name: "badge",
  props: {
    expanded: {
      type: Boolean,
      default: !1
    },
    content: {
      type: String
    },
    visible: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (n, l) => (o(), t("div", u, [
      s(n.$slots, "default"),
      e.visible ? (o(), t("span", {
        key: 0,
        class: i({ "absolute bg-red-500 text-white text-sm flex items-center justify-center rounded-full": !0, "h-5 w-5 -top-2 -right-2": e.expanded, "h-2 w-2 -top-1 -right-1": !e.expanded })
      }, c(e.expanded ? e.content : ""), 3)) : r("", !0)
    ]));
  }
});
export {
  p as Badge,
  m as Logo
};
