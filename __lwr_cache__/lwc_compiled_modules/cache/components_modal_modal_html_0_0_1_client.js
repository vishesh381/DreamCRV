import _implicitStylesheets from "./modal.css";
import _implicitScopedStylesheets from "./modal.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-modal__header${0}"${2}><h1${"a1:id"} class="slds-modal__title slds-hyphenate${0}"${2}>${"t2"}</h1></div>`;
const $fragment2 = parseFragment`<div class="slds-backdrop slds-backdrop_open${0}" role="presentation"${2}></div>`;
const stc0 = {
  "slds-modal": true,
  "slds-fade-in-open": true
};
const stc1 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 1
};
const stc2 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc3 = {
  key: 5
};
const stc4 = [];
const stc5 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 6
};
const stc6 = {
  attrs: {
    "name": "footer"
  },
  key: 7
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, d: api_dynamic_text, sp: api_static_part, st: api_static_fragment, s: api_slot, h: api_element} = $api;
  return [api_element("section", {
    classMap: stc0,
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-modal": "true",
      "aria-labelledby": api_scoped_id("modal-heading-01")
    },
    key: 0
  }, [api_element("div", stc1, [api_static_fragment($fragment1, 3, [api_static_part(1, {
    attrs: {
      "id": api_scoped_id("modal-heading-01")
    }
  }, null), api_static_part(2, null, api_dynamic_text($cmp.heading))]), api_element("div", {
    classMap: stc2,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 4
  }, [api_slot("", stc3, stc4, $slotset)]), api_element("div", stc5, [api_slot("footer", stc6, stc4, $slotset)])])]), api_static_fragment($fragment2, 9)];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["", "footer"];
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-42s9bakjnfm";
tmpl.legacyStylesheetToken = "components-modal_modal";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
