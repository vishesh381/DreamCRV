import _implicitStylesheets from "./carDetails.css";
import _implicitScopedStylesheets from "./carDetails.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-grid slds-wrap${0}"${2}><div class="slds-col slds-size_12-of-12${0}"${2}><img${"a2:src"} alt="honda image"${3}></div><div class="slds-col slds-size_12-of-12 slds-large-size_4-of-12 slds-text-align_center${0}"${2}><div class="slds-text-heading_large${0}"${2}><strong${3}>${"t6"}</strong></div><div class="slds-text-heading_medium${0}"${2}>Fuel Consumption (litres/100km)<sup${3}>D32</sup></div></div><div class="slds-col slds-size_12-of-12 slds-large-size_4-of-12 slds-text-align_center${0}"${2}><div class="slds-text-heading_large${0}"${2}><strong${3}>${"t14"}</strong></div><div class="slds-text-heading_medium${0}"${2}>Seating Capacity</div></div><div class="slds-col slds-size_12-of-12 slds-large-size_4-of-12 slds-text-align_center${0}"${2}><div class="slds-text-heading_large${0}"${2}><strong${3}>${"t20"}</strong></div><div class="slds-text-heading_medium${0}"${2}>Alloy Wheels</div></div></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, sp: api_static_part, st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1, [api_static_part(2, {
    attrs: {
      "src": $cmp.selectedVariant.selectedimage
    }
  }, null), api_static_part(6, null, api_dynamic_text($cmp.selectedVariant.fuelConsumption)), api_static_part(14, null, api_dynamic_text($cmp.selectedVariant.seatingCapacity)), api_static_part(20, null, api_dynamic_text($cmp.selectedVariant.allowWheels) + "\"")])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-3re1gl0c0i7";
tmpl.legacyStylesheetToken = "components-carDetails_carDetails";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
