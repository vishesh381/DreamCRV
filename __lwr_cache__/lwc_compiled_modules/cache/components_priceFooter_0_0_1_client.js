import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./priceFooter.html";
class PriceFooter extends LightningElement {
  constructor(...args) {
    super(...args);
    this.price = void 0;
  }
  get formattedPrice() {
    return this.formatter(this.price);
  }
  formatter(value) {
    if (value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
    } else {
      return null;
    }
  }
  contactUsHandler() {
    this.dispatchEvent(new CustomEvent('openmodal'));
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(PriceFooter, {
  publicProps: {
    price: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(PriceFooter, {
  tmpl: _tmpl,
  sel: "components-price-footer",
  apiVersion: 63
});
export default __lwc_component_class_internal;