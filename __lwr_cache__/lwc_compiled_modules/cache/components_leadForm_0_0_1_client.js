import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./leadForm.html";
class LeadForm extends LightningElement {
  constructor(...args) {
    super(...args);
    this.description = '';
  }
  formSubmit() {
    this.template.querySelector('input[type="submit"]').click();
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(LeadForm, {
  publicProps: {
    description: {
      config: 0
    }
  },
  publicMethods: ["formSubmit"]
});
const __lwc_component_class_internal = _registerComponent(LeadForm, {
  tmpl: _tmpl,
  sel: "components-lead-form",
  apiVersion: 63
});
export default __lwc_component_class_internal;