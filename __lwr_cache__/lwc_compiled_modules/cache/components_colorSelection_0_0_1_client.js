import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./colorSelection.html";
class ColorSelection extends LightningElement {
  constructor(...args) {
    super(...args);
    this.color = void 0;
  }
  get colorClassList() {
    return `slds-radio__label color_circle ${this.color.value}`;
  }
  selectionHandler(event) {
    this.dispatchEvent(new CustomEvent("colorselection", {
      detail: this.color.value
    }));
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(ColorSelection, {
  publicProps: {
    color: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(ColorSelection, {
  tmpl: _tmpl,
  sel: "-color-selection",
  apiVersion: 63
});
export default __lwc_component_class_internal;