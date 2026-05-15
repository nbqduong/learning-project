import { a as _export_sfc, _ as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import "/app/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/app/node_modules/hookable/dist/index.mjs";
import "/app/node_modules/unctx/dist/index.mjs";
import "/app/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/app/node_modules/defu/dist/defu.mjs";
import "/app/node_modules/ufo/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "40px 24px", "max-width": "1100px", "margin": "0 auto" } }, _attrs))}><section style="${ssrRenderStyle({ "padding": "32px", "background": "#fff", "border": "1px solid #e5e7eb" })}"><h1 style="${ssrRenderStyle({ "margin": "0 0 16px", "font-size": "34px" })}">Build and sell practical courses</h1><p style="${ssrRenderStyle({ "margin": "0 0 20px", "max-width": "680px", "color": "#374151" })}"> A marketplace baseline for instructors and students, with Nuxt on the frontend, Go on the backend, and provider adapters ready for video streaming and split payments. </p><div style="${ssrRenderStyle({ "display": "flex", "gap": "12px", "flex-wrap": "wrap" })}">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/courses",
    style: { "background": "#7c3aed", "color": "#fff", "padding": "12px 18px", "text-decoration": "none" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Browse courses `);
      } else {
        return [
          createTextVNode(" Browse courses ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/instructor",
    style: { "background": "#111827", "color": "#fff", "padding": "12px 18px", "text-decoration": "none" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Instructor dashboard `);
      } else {
        return [
          createTextVNode(" Instructor dashboard ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-BUSx0L_F.js.map
