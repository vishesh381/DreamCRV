import _implicitStylesheets from "./priceFooter.css";
import _implicitScopedStylesheets from "./priceFooter.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<footer class="slds-p-around_medium slds-wrap slds-grid slds-grid_align-spread${0}"${2}><div class="price${0}"${2}>${"t2"}<sup${3}>*</sup></div><button class="slds-button slds-button_destructive${0}"${2}>Save and Contact Us</button></footer>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, b: api_bind, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(2, null, api_dynamic_text($cmp.formattedPrice)), api_static_part(5, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.contactUsHandler)
    })
  }, null)])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-jcicmu9s7k";
tmpl.legacyStylesheetToken = "components-priceFooter_priceFooter";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
