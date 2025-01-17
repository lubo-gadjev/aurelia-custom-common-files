import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import 'Eonasdan/bootstrap-datetimepicker';
import 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!';
import moment from 'moment';

@customElement('datepicker')
@inject(Element)
export class Datepicker {
  @bindable value = null;
  @bindable options = null;
  @bindable disabled = false;

  constructor(element) {
    this.element = element;
  }

  bind() {
    const defaultOpts = {
      collapse: false,
      useCurrent: false,
      calendarWeeks: true,
      locale: moment.locale(),
      format: 'L'
    };

    var div = this.element.firstElementChild;
    this.$element = $(div);

    this.options = this.options || {};
    if (this.options.format !== undefined) {
      delete this.options.format;
    }
    this.options = $.extend({}, defaultOpts, this.options);

    this.datepicker = this.$element.datetimepicker(this.options);
    var self = this;

    this.datepicker.on('dp.change', (event) => {
      this.value = event.date;
      //Find better way to invoke observable before function!!!
      setTimeout(function () {
        self.element.dispatchEvent(new Event("change"));
      });
    });

    this.valueChanged(this.value);
  }

  valueChanged(newValue, oldValue) {
    if (newValue === undefined) {
      throw new Error('Do not use undefined!');
    }

    if (newValue === null) {
      var input = this.element.firstElementChild.firstElementChild;
      input.value = '';
      return;
    }

    // check if date is valid and moment object
    if (newValue.isValid() !== true) {
      throw new Error('This has to be moment type!');
    }

    if (newValue.isSame(oldValue)) {
      return;
    }

    this.$element.data('DateTimePicker').date(newValue);
  }
}
