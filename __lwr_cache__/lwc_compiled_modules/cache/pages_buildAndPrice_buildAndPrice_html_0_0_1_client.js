import _implicitStylesheets from "./buildAndPrice.css";
import _implicitScopedStylesheets from "./buildAndPrice.scoped.css?scoped=true";
import _componentsCarDetails from "components/carDetails";
import _componentsRangeSelection from "components/rangeSelection";
import _componentsColorSelection from "components/colorSelection";
import _componentsPriceFooter from "components/priceFooter";
import _componentsLeadForm from "components/leadForm";
import _componentsModal from "components/modal";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h2 class="slds-text-heading_large${0}"${2}>CR-V Range</h2>`;
const $fragment2 = parseFragment`<h2 class="slds-text-heading_large slds-m-top_large${0}"${2}>CR-V Colors</h2>`;
const $fragment3 = parseFragment`<button class="slds-button slds-button_neutral${0}"${2}>Cancel</button>`;
const $fragment4 = parseFragment`<button class="slds-button slds-button_destructive${0}"${2}>Submit</button>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-m-bottom_large": true,
    "slds-p-around_medium": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_8-of-12": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-size_12-of-12": true,
    "slds-large-size_4-of-12": true
  },
  key: 4
};
const stc4 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 11
};
const stc5 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_12-of-12": true
  },
  key: 12
};
const stc6 = {
  props: {
    "heading": "Fill in your details"
  },
  key: 15
};
const stc7 = {
  slotAssignment: "footer",
  key: 17
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, h: api_element, st: api_static_fragment, b: api_bind, k: api_key, i: api_iterator, f: api_flatten, sp: api_static_part, fr: api_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("main", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("components-car-details", _componentsCarDetails, {
    props: {
      "selectedVariant": $cmp.selectedVariant
    },
    key: 3
  })]), api_element("div", stc3, api_flatten([api_static_fragment($fragment1, 6), api_custom_element("components-range-selection", _componentsRangeSelection, {
    props: {
      "variants": $cmp.crvVariants
    },
    key: 7,
    on: _m0 || ($ctx._m0 = {
      "selection": api_bind($cmp.selectionHandler)
    })
  }), api_static_fragment($fragment2, 9), api_iterator($cmp.colorsList, function (item) {
    return api_custom_element("components-color-selection", _componentsColorSelection, {
      props: {
        "color": item
      },
      key: api_key(10, item.value),
      on: _m1 || ($ctx._m1 = {
        "colorselection": api_bind($cmp.colorSelectionHandler)
      })
    });
  })]))]), api_element("div", stc4, [api_element("div", stc5, [api_custom_element("components-price-footer", _componentsPriceFooter, {
    props: {
      "price": $cmp.animatedPriceValue
    },
    key: 13,
    on: _m2 || ($ctx._m2 = {
      "openmodal": api_bind($cmp.openModalHandler)
    })
  })])])]), $cmp.showModal ? api_fragment(14, [api_custom_element("components-modal", _componentsModal, stc6, [api_custom_element("components-lead-form", _componentsLeadForm, {
    props: {
      "description": $cmp.description
    },
    key: 16
  }), api_element("div", stc7, [api_static_fragment($fragment3, 19, [api_static_part(0, {
    on: _m4 || ($ctx._m4 = {
      "click": api_bind($cmp.cancelHandler)
    })
  }, null)]), api_static_fragment($fragment4, 21, [api_static_part(0, {
    on: _m6 || ($ctx._m6 = {
      "click": api_bind($cmp.submitHander)
    })
  }, null)])])])], 0) : null];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-igm28e5dgl";
tmpl.legacyStylesheetToken = "pages-buildAndPrice_buildAndPrice";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
