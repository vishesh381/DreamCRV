import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./modal.html";
class Modal extends LightningElement {
  constructor(...args) {
    super(...args);
    this.heading = void 0;
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(Modal, {
  publicProps: {
    heading: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(Modal, {
  tmpl: _tmpl,
  sel: "components-modal",
  apiVersion: 63
});
export default __lwc_component_class_internal;