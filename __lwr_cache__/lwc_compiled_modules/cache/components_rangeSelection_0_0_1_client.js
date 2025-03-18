import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./rangeSelection.html";
class RangeSelection extends LightningElement {
  constructor(...args) {
    super(...args);
    this.variants = [];
  }
  selectionHandler(event) {
    const {
      value
    } = event.target;
    console.log("value", value);
    let selected = this.variants.find(item => item.variant === value);
    this.dispatchEvent(new CustomEvent("selection", {
      detail: {
        selected: selected,
        variant: value
      }
    }));
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(RangeSelection, {
  publicProps: {
    variants: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(RangeSelection, {
  tmpl: _tmpl,
  sel: "components-range-selection",
  apiVersion: 63
});
export default __lwc_component_class_internal;