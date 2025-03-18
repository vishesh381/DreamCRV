import _implicitStylesheets from "./leadForm.css";
import _implicitScopedStylesheets from "./leadForm.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-form-element${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>Title</label><div class="slds-form-element__control${0}"${2}><input type="text"${"a4:id"} maxlength="40" name="title" size="20" class="slds-input${0}" required${2}></div></div>`;
const $fragment2 = parseFragment`<div class="slds-form-element${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>First Name</label><div class="slds-form-element__control${0}"${2}><input type="text"${"a4:id"} maxlength="40" name="first_name" size="20" class="slds-input${0}" required${2}></div></div>`;
const $fragment3 = parseFragment`<div class="slds-form-element${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>Last Name</label><div class="slds-form-element__control${0}"${2}><input type="text"${"a4:id"} maxlength="80" name="last_name" size="20" class="slds-input${0}" required${2}></div></div>`;
const $fragment4 = parseFragment`<div class="slds-form-element${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>Email</label><div class="slds-form-element__control${0}"${2}><input type="text"${"a4:id"} maxlength="80" name="email" size="20" class="slds-input${0}" required${2}></div></div>`;
const $fragment5 = parseFragment`<label class="slds-form-element__label${0}"${"a0:for"}${2}>Company</label>`;
const $fragment6 = parseFragment`<div class="slds-form-element${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>City</label><div class="slds-form-element__control${0}"${2}><input type="text"${"a4:id"} maxlength="40" name="city" size="20" class="slds-input${0}" required${2}></div></div>`;
const $fragment7 = parseFragment`<div class="slds-form-element slds-hide${0}"${2}><label class="slds-form-element__label${0}"${"a1:for"}${2}>Description</label><div class="slds-form-element__control${0}"${2}><textarea name="description"${"a4:id"} class="slds-textarea${0}" required${2}>${"t5"}</textarea></div></div>`;
const $fragment8 = parseFragment`<input type="submit" name="submit" class="slds-hide${0}"${2}>`;
const stc0 = {
  attrs: {
    "action": "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dak00000KDJ69",
    "method": "POST"
  },
  key: 0
};
const stc1 = {
  attrs: {
    "type": "hidden",
    "name": "oid"
  },
  props: {
    "value": "00Dak00000KDJ69"
  },
  key: 1
};
const stc2 = {
  attrs: {
    "type": "hidden",
    "name": "retURL"
  },
  props: {
    "value": "https://67d9e1a8e090052bafd15e8c--eloquent-macaron-167554.netlify.app/"
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-form-element": true,
    "slds-hide": true
  },
  key: 11
};
const stc4 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 14
};
const stc5 = {
  "slds-input": true
};
const stc6 = {
  "value": "Honda LWC"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, gid: api_scoped_id, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text} = $api;
  return [api_element("form", stc0, [api_element("input", stc1), api_element("input", stc2), api_static_fragment($fragment1, 4, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("title")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("title")
    }
  }, null)]), api_static_fragment($fragment2, 6, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("first_name")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("first_name")
    }
  }, null)]), api_static_fragment($fragment3, 8, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("last_name")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("last_name")
    }
  }, null)]), api_static_fragment($fragment4, 10, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("email")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("email")
    }
  }, null)]), api_element("div", stc3, [api_static_fragment($fragment5, 13, [api_static_part(0, {
    attrs: {
      "for": api_scoped_id("company")
    }
  }, null)]), api_element("div", stc4, [api_element("input", {
    classMap: stc5,
    attrs: {
      "type": "text",
      "id": api_scoped_id("company"),
      "maxlength": "40",
      "name": "company",
      "size": "20",
      "required": ""
    },
    props: stc6,
    key: 15
  })])]), api_static_fragment($fragment6, 17, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("city")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("city")
    }
  }, null)]), api_static_fragment($fragment7, 19, [api_static_part(1, {
    attrs: {
      "for": api_scoped_id("description")
    }
  }, null), api_static_part(4, {
    attrs: {
      "id": api_scoped_id("description")
    }
  }, null), api_static_part(5, null, api_dynamic_text($cmp.description))]), api_static_fragment($fragment8, 21)])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-6ioiujje6p5";
tmpl.legacyStylesheetToken = "components-leadForm_leadForm";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
