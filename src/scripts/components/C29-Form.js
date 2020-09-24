import Pristine from "pristinejs/dist/pristine";
import {Component} from "../modules";
import forEach from "lodash/forEach";

/**
 * PristineJS Forms
 *
 * @class Forms
 * @extends {Component}
 */
class Form extends Component {
  constructor() {
    super("C29");

    if (super.exists()) {
      const self = this;

      forEach(self.elements, (elm) => {
        if (elm) {

          const defaultConfig = {
            // class of the parent element where the error/success class is added
            classTo: "uk-form-controls",
            errorClass: "uk-text-danger",
            successClass: "uk-text-success",
            // class of the parent element where error text element is appended
            errorTextParent: "uk-form-controls",
            // type of element to create for the error text

            errorTextTag: "div",
            // class of the error text element
            errorTextClass: "uk-text-danger"
          };
          const pristine = new Pristine(elm, defaultConfig);
          // console.log(pristine);

          const files = elm.querySelectorAll('[type="file"]');
          files.forEach((file) => {
            pristine.addValidator(file, function(value,) {
              if (!this.files[0]) {
                return true;
              }
              // 5000000 = 5mb
              // console.log(this.files[0].size, this.maxLength, (this.files[0].size > this.maxLength));
              return !(this.files[0].size > this.maxLength);
            }, "File is too big, must be smaller than " + file.maxLength / 1000000  + "MB", 2, false);
          });

          elm.addEventListener("submit", function(e) {
            e.preventDefault();
            // check if the form is valid
            const valid = pristine.validate();
            // console.log('pristine.getErrors():', pristine.getErrors());
            if (!valid) {
              return false;
            }
            return true;
          });
        }
      });
    }
  }
}

export {Form};
