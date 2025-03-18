import _implicitStylesheets from "./navbar.css";
import _implicitScopedStylesheets from "./navbar.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<nav class="slds-grid slds-grid_align-spread slds-grid_vertical-align-center slds-p-horizontal_medium${0}"${2}><a href="/"${3}><img src="/public/assets/honda/honda-logo.svg" alt="Honda logo" height="80px" width="200px"${3}></a><a href="/build_and_price"${3}>Build your CR-V</a></nav>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1, 1)];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-3htsh0d98um";
tmpl.legacyStylesheetToken = "undefined-navbar_navbar";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
