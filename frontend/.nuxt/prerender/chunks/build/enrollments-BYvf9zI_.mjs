import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'file:///app/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'file:///app/node_modules/vue/server-renderer/index.mjs';
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
  __name: "enrollments",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const api = useApi();
    const auth = useAuth();
    const items = ref([]);
    const loading = ref(true);
    const error = ref("");
    if (!auth.isLoggedIn.value) {
      loading.value = false;
      error.value = "Login to view your enrollments.";
    } else {
      try {
        const result = ([__temp, __restore] = withAsyncContext(() => api.listEnrollments()), __temp = await __temp, __restore(), __temp);
        items.value = result.items;
      } catch (err) {
        error.value = ((_a = err == null ? void 0 : err.data) == null ? void 0 : _a.error) || (err == null ? void 0 : err.message) || "Failed to load enrollments";
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "24px", "max-width": "900px", "margin": "0 auto" } }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 16px" })}">My Learning</h1>`);
      if (unref(loading)) {
        _push(`<p>Loading...</p>`);
      } else if (unref(error)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#b91c1c" })}">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<ul style="${ssrRenderStyle({ "background": "#fff", "border": "1px solid #e5e7eb", "padding": "16px 20px", "margin": "0" })}"><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(`<li style="${ssrRenderStyle({ "margin": "0 0 8px" })}"> Enrollment ${ssrInterpolate(item.id)} for course ${ssrInterpolate(item.course_id)}</li>`);
        });
        _push(`<!--]-->`);
        if (unref(items).length === 0) {
          _push(`<li>No enrollments yet.</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/me/enrollments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=enrollments-BYvf9zI_.mjs.map
