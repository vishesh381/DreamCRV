import _implicitStylesheets from "./rangeSelection.css";
import _implicitScopedStylesheets from "./rangeSelection.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<label class="slds-radio__label${0}"${"a0:for"}${2}><span${3}>${"t2"}</span><span${3}>${"t4"}</span></label>`;
const stc0 = {
  "slds-hidden": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {k: api_key, gid: api_scoped_id, b: api_bind, h: api_element, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return api_iterator($cmp.variants, function (item) {
    return api_element("div", {
      key: api_key(0, item.variant)
    }, [api_element("input", {
      classMap: stc0,
      attrs: {
        "type": "radio",
        "id": api_scoped_id(item.variant),
        "name": "variants"
      },
      props: {
        "value": item.variant,
        "checked": item.checked
      },
      key: 1,
      on: _m0 || ($ctx._m0 = {
        "change": api_bind($cmp.selectionHandler)
      })
    }), api_static_fragment($fragment1, 3, [api_static_part(0, {
      attrs: {
        "for": api_scoped_id(item.variant)
      }
    }, null), api_static_part(2, null, api_dynamic_text(item.variant)), api_static_part(4, null, "From " + api_dynamic_text(item.formattedPrice))])]);
  });
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-2l9ecvf6fe1";
tmpl.legacyStylesheetToken = "components-rangeSelection_rangeSelection";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
