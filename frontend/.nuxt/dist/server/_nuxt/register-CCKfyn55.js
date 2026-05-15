import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { u as useApi } from "./useApi-Cm3TNErY.js";
import { c as useRouter } from "../server.mjs";
import "/app/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/app/node_modules/hookable/dist/index.mjs";
import "/app/node_modules/unctx/dist/index.mjs";
import "/app/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/app/node_modules/defu/dist/defu.mjs";
import "/app/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    useRouter();
    const email = ref("");
    const password = ref("");
    const fullName = ref("");
    const role = ref("student");
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ style: { "padding": "24px", "max-width": "560px", "margin": "0 auto" } }, _attrs))}><h1 style="${ssrRenderStyle({ "margin": "0 0 16px" })}">Create account</h1><form style="${ssrRenderStyle({ "display": "grid", "gap": "12px", "background": "#fff", "border": "1px solid #e5e7eb", "padding": "16px" })}"><input${ssrRenderAttr("value", unref(fullName))} placeholder="Full name" style="${ssrRenderStyle({ "padding": "10px" })}"><input${ssrRenderAttr("value", unref(email))} placeholder="Email" type="email" style="${ssrRenderStyle({ "padding": "10px" })}"><input${ssrRenderAttr("value", unref(password))} placeholder="Password" type="password" style="${ssrRenderStyle({ "padding": "10px" })}"><select style="${ssrRenderStyle({ "padding": "10px" })}"><option value="student"${ssrIncludeBooleanAttr(Array.isArray(unref(role)) ? ssrLooseContain(unref(role), "student") : ssrLooseEqual(unref(role), "student")) ? " selected" : ""}>Student</option><option value="instructor"${ssrIncludeBooleanAttr(Array.isArray(unref(role)) ? ssrLooseContain(unref(role), "instructor") : ssrLooseEqual(unref(role), "instructor")) ? " selected" : ""}>Instructor</option></select><button style="${ssrRenderStyle({ "background": "#7c3aed", "color": "#fff", "border": "0", "padding": "11px" })}">Register</button>`);
      if (unref(error)) {
        _push(`<p style="${ssrRenderStyle({ "color": "#b91c1c", "margin": "0" })}">${ssrInterpolate(unref(error))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-CCKfyn55.js.map
