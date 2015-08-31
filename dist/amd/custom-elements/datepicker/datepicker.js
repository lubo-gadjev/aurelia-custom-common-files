define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss, _moment) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var _moment2 = _interopRequireDefault(_moment);

  var Datepicker = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Datepicker, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function Datepicker(element) {
      _classCallCheck(this, _Datepicker);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      this.element = element;
    }

    Datepicker.prototype.bind = function bind() {
      var _this = this;

      var defaultOpts = {
        collapse: false,
        useCurrent: false,
        calendarWeeks: true,
        locale: _moment2['default'].locale(),
        format: 'L'
      };

      var div = this.element.firstElementChild;
      this.$element = _$['default'](div);

      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }
      this.options = _$['default'].extend({}, defaultOpts, this.options);

      this.datepicker = this.$element.datetimepicker(this.options);
      var self = this;

      this.datepicker.on('dp.change', function (event) {
        _this.value = event.date;

        setTimeout(function () {
          self.element.dispatchEvent(new Event("change"));
        });
      });

      this.valueChanged(this.value);
    };

    Datepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (newValue === undefined) {
        throw new Error('Do not use undefined!');
      }

      if (newValue === null) {
        var input = this.element.firstElementChild.firstElementChild;
        input.value = '';
        return;
      }

      if (newValue.isValid() !== true) {
        throw new Error('This has to be moment type!');
      }

      if (newValue.isSame(oldValue)) {
        return;
      }

      this.$element.data('DateTimePicker').date(newValue);
    };

    var _Datepicker = Datepicker;
    Datepicker = _aureliaFramework.inject(Element)(Datepicker) || Datepicker;
    Datepicker = _aureliaFramework.customElement('datepicker')(Datepicker) || Datepicker;
    return Datepicker;
  })();

  exports.Datepicker = Datepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFRYSxVQUFVOzs7MEJBQVYsVUFBVTs7cUNBUlEsUUFBUTs7ZUFTbkIsSUFBSTs7Ozs7cUNBVE8sUUFBUTs7ZUFVakIsSUFBSTs7Ozs7cUNBVkssUUFBUTs7ZUFXaEIsS0FBSzs7Ozs7QUFFZixhQUxBLFVBQVUsQ0FLVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7QUFQVSxjQUFVLFdBU3JCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsVUFBTSxXQUFXLEdBQUc7QUFDbEIsZ0JBQVEsRUFBRSxLQUFLO0FBQ2Ysa0JBQVUsRUFBRSxLQUFLO0FBQ2pCLHFCQUFhLEVBQUUsSUFBSTtBQUNuQixjQUFNLEVBQUUsb0JBQU8sTUFBTSxFQUFFO0FBQ3ZCLGNBQU0sRUFBRSxHQUFHO09BQ1osQ0FBQzs7QUFFRixVQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3pDLFVBQUksQ0FBQyxRQUFRLEdBQUcsY0FBRSxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxVQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUNyQyxlQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO09BQzVCO0FBQ0QsVUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkQsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0QsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixVQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDekMsY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsa0JBQVUsQ0FBQyxZQUFZO0FBQ3JCLGNBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDakQsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COztBQXZDVSxjQUFVLFdBeUNyQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixVQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDMUIsY0FBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO09BQzFDOztBQUVELFVBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNyQixZQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO0FBQzdELGFBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGVBQU87T0FDUjs7QUFHRCxVQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDL0IsY0FBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO09BQ2hEOztBQUVELFVBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM3QixlQUFPO09BQ1I7O0FBRUQsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDckQ7O3NCQTlEVSxVQUFVO0FBQVYsY0FBVSxHQUR0QixrQkFQTyxNQUFNLENBT04sT0FBTyxDQUFDLENBQ0gsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLGtCQU5lLGFBQWEsQ0FNZCxZQUFZLENBQUMsQ0FFZixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVUiLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlcic7XHJcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyL2J1aWxkL2Nzcy9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIuY3NzISc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdkYXRlcGlja2VyJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlciB7XHJcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcclxuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XHJcbiAgICAgIGNvbGxhcHNlOiBmYWxzZSxcclxuICAgICAgdXNlQ3VycmVudDogZmFsc2UsXHJcbiAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcbiAgICAgIGxvY2FsZTogbW9tZW50LmxvY2FsZSgpLFxyXG4gICAgICBmb3JtYXQ6ICdMJ1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZGl2ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZGl2KTtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmZvcm1hdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnMuZm9ybWF0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIodGhpcy5vcHRpb25zKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gZXZlbnQuZGF0ZTtcclxuICAgICAgLy9GaW5kIGJldHRlciB3YXkgdG8gaW52b2tlIG9ic2VydmFibGUgYmVmb3JlIGZ1bmN0aW9uISEhXHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNlbGYuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgdW5kZWZpbmVkIScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBpZiBkYXRlIGlzIHZhbGlkIGFuZCBtb21lbnQgb2JqZWN0XHJcbiAgICBpZiAobmV3VmFsdWUuaXNWYWxpZCgpICE9PSB0cnVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBoYXMgdG8gYmUgbW9tZW50IHR5cGUhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlLmlzU2FtZShvbGRWYWx1ZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJGVsZW1lbnQuZGF0YSgnRGF0ZVRpbWVQaWNrZXInKS5kYXRlKG5ld1ZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19