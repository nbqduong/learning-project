import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cm3TNErY.js";
import { u as useAuth } from "./useAuth-BEkUIvjK.js";
import "../server.mjs";
import "/app/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/app/node_modules/hookable/dist/index.mjs";
import "/app/node_modules/unctx/dist/index.mjs";
import "/app/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/app/node_modules/defu/dist/defu.mjs";
import "/app/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    useAuth();
    const title = ref("");
    const subtitle = ref("");
    const description = ref("");
    const price = ref(0);
    const published = ref(true);
    const resultMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "24px", "max-width": "760px", "margin": "0 auto" } }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 16px" })}">Instructor Dashboard</h1><p style="${ssrRenderStyle({ "margin": "0 0 16px", "color": "#4b5563" })}"> Use an instructor account to create a published course. Video upload is still adapter-backed placeholder logic. </p><form style="${ssrRenderStyle({ "display": "grid", "gap": "12px", "background": "#fff", "border": "1px solid #e5e7eb", "padding": "16px" })}"><input${ssrRenderAttr("value", unref(title))} placeholder="Course title" style="${ssrRenderStyle({ "padding": "10px" })}"><input${ssrRenderAttr("value", unref(subtitle))} placeholder="Subtitle" style="${ssrRenderStyle({ "padding": "10px" })}"><textarea placeholder="Description" rows="5" style="${ssrRenderStyle({ "padding": "10px" })}">${ssrInterpolate(unref(description))}</textarea><input${ssrRenderAttr("value", unref(price))} type="number" min="0" step="0.01" placeholder="Price in USD" style="${ssrRenderStyle({ "padding": "10px" })}"><label style="${ssrRenderStyle({ "display": "flex", "gap": "8px", "align-items": "center" })}"><input${ssrIncludeBooleanAttr(Array.isArray(unref(published)) ? ssrLooseContain(unref(published), null) : unref(published)) ? " checked" : ""} type="checkbox"> Publish immediately </label><button style="${ssrRenderStyle({ "background": "#111827", "color": "#fff", "border": "0", "padding": "11px" })}">Create course</button>`);
      if (unref(resultMessage)) {
        _push(`<p style="${ssrRenderStyle({ "margin": "0" })}">${ssrInterpolate(unref(resultMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/instructor/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BqtwSSEu.js.map
