import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///app/node_modules/vue/server-renderer/index.mjs';
import { u as useApi } from './useApi-Cm3TNErY.mjs';
import { u as useAuth } from './useAuth-BEkUIvjK.mjs';
import './server.mjs';
import 'file:///app/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///app/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///app/node_modules/h3/dist/index.mjs';
import 'file:///app/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///app/node_modules/destr/dist/index.mjs';
import 'file:///app/node_modules/hookable/dist/index.mjs';
import 'file:///app/node_modules/node-mock-http/dist/index.mjs';
import 'file:///app/node_modules/unstorage/dist/index.mjs';
import 'file:///app/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///app/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///app/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///app/node_modules/ohash/dist/index.mjs';
import 'file:///app/node_modules/klona/dist/index.mjs';
import 'file:///app/node_modules/defu/dist/defu.mjs';
import 'file:///app/node_modules/scule/dist/index.mjs';
import 'file:///app/node_modules/unctx/dist/index.mjs';
import 'file:///app/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///app/node_modules/pathe/dist/index.mjs';
import 'file:///app/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///app/node_modules/devalue/index.js';
import 'file:///app/node_modules/unhead/dist/utils.mjs';
import 'file:///app/node_modules/unhead/dist/plugins.mjs';
import 'file:///app/node_modules/vue-router/vue-router.node.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=index-BqtwSSEu.mjs.map
