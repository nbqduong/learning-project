import { defineComponent, ref, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "enrollments",
  __ssrInlineRender: true,
  async setup(__props) {
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
        error.value = err?.data?.error || err?.message || "Failed to load enrollments";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=enrollments-BYvf9zI_.js.map
