import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./carDetails.html";
class CarDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this._selectedVariant = {};
  }
  get selectedVariant() {
    return this._selectedVariant;
  }
  set selectedVariant(data) {
    if (data) {
      let model = data.variant.toLowerCase().replaceAll(' ', '');
      let selectedimage = `/public/assets/honda/${model}/${data.imageName}.png`;
      console.log("selectedimage", selectedimage);
      this._selectedVariant = {
        ...data,
        "selectedimage": selectedimage
      };
    }
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(CarDetails, {
  publicProps: {
    selectedVariant: {
      config: 3
    }
  },
  fields: ["_selectedVariant"]
});
const __lwc_component_class_internal = _registerComponent(CarDetails, {
  tmpl: _tmpl,
  sel: "components-car-details",
  apiVersion: 63
});
export default __lwc_component_class_internal;