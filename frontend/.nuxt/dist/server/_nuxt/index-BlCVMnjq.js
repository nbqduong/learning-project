import { _ as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cm3TNErY.js";
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
  async setup(__props) {
    let __temp, __restore;
    const api = useApi();
    const courses = ref([]);
    const loading = ref(true);
    const error = ref("");
    try {
      const result = ([__temp, __restore] = withAsyncContext(() => api.listCourses()), __temp = await __temp, __restore(), __temp);
      courses.value = result.items;
    } catch (err) {
      error.value = err?.data?.error || err?.message || "Failed to load courses";
    } finally {
      loading.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "24px", "max-width": "1100px", "margin": "0 auto" } }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 16px" })}">Course Catalog</h1>`);
      if (unref(loading)) {
        _push(`<p>Loading...</p>`);
      } else if (unref(error)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#b91c1c" })}">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "repeat(auto-fill, minmax(260px, 1fr))", "gap": "14px" })}"><!--[-->`);
        ssrRenderList(unref(courses), (course) => {
          _push(`<article style="${ssrRenderStyle({ "background": "#fff", "border": "1px solid #e5e7eb", "padding": "14px" })}"><h2 style="${ssrRenderStyle({ "font-size": "18px", "margin": "0 0 8px" })}">${ssrInterpolate(course.title)}</h2><p style="${ssrRenderStyle({ "color": "#4b5563", "margin": "0 0 12px" })}">${ssrInterpolate(course.subtitle)}</p><p style="${ssrRenderStyle({ "font-weight": "700", "margin": "0 0 14px" })}">$${ssrInterpolate((course.price_cents / 100).toFixed(2))}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/courses/${course.slug}`,
            style: { "text-decoration": "none" }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`View course`);
              } else {
                return [
                  createTextVNode("View course")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</article>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BlCVMnjq.js.map
