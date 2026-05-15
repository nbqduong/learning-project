import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'file:///app/node_modules/vue/server-renderer/index.mjs';
import { b as useRoute } from './server.mjs';
import { u as useApi } from './useApi-Cm3TNErY.mjs';
import { u as useAuth } from './useAuth-BEkUIvjK.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const api = useApi();
    useAuth();
    const course = ref(null);
    const error = ref("");
    const checkoutMessage = ref("");
    try {
      course.value = ([__temp, __restore] = withAsyncContext(() => api.getCourse(String(route.params.slug))), __temp = await __temp, __restore(), __temp);
    } catch (err) {
      error.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) || (err == null ? void 0 : err.message) || "Failed to load course";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "24px", "max-width": "900px", "margin": "0 auto" } }, _attrs))}>`);
      if (unref(error)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#b91c1c" })}">${ssrInterpolate(unref(error))}</p>`);
      } else if (unref(course)) {
        _push(`<article style="${ssrRenderStyle({ "background": "#fff", "border": "1px solid #e5e7eb", "padding": "24px" })}"><h1 style="${ssrRenderStyle({ "margin": "0 0 10px" })}">${ssrInterpolate(unref(course).title)}</h1><p style="${ssrRenderStyle({ "color": "#374151", "margin": "0 0 20px" })}">${ssrInterpolate(unref(course).subtitle)}</p><p style="${ssrRenderStyle({ "margin": "0 0 20px" })}">${ssrInterpolate(unref(course).description)}</p><p style="${ssrRenderStyle({ "font-weight": "700", "font-size": "22px" })}">$${ssrInterpolate((unref(course).price_cents / 100).toFixed(2))}</p><button style="${ssrRenderStyle({ "background": "#7c3aed", "color": "#fff", "border": "0", "padding": "12px 18px" })}"> Enroll with mock checkout </button>`);
        if (unref(checkoutMessage)) {
          _push(`<p style="${ssrRenderStyle({ "margin-top": "14px" })}">${ssrInterpolate(unref(checkoutMessage))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BRDQMdmq.mjs.map
