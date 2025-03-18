import _implicitStylesheets from "./colorSelection.css";
import _implicitScopedStylesheets from "./colorSelection.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<label${"c0"}${"a0:for"}${2}></label>`;
const $fragment2 = parseFragment`<div class="slds-text-heading_medium slds-m-left_medium${0}"${2}>${"t1"}</div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-m-top_medium": true,
    "slds-grid_vertical-align-center": true
  },
  key: 0
};
const stc1 = {
  "slds-hidden": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, h: api_element, ncls: api_normalize_class_name, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("input", {
    classMap: stc1,
    attrs: {
      "type": "radio",
      "id": api_scoped_id($cmp.color.value),
      "name": "colors"
    },
    props: {
      "checked": $cmp.color.checked,
      "value": $cmp.color.value
    },
    key: 1,
    on: _m0 || ($ctx._m0 = {
      "change": api_bind($cmp.selectionHandler)
    })
  }), api_static_fragment($fragment1, 3, [api_static_part(0, {
    className: api_normalize_class_name($cmp.colorClassList),
    attrs: {
      "for": api_scoped_id($cmp.color.value)
    }
  }, null)]), api_static_fragment($fragment2, 5, [api_static_part(1, null, api_dynamic_text($cmp.color.label))])])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-739jhth4bt6";
tmpl.legacyStylesheetToken = "components-colorSelection_colorSelection";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
