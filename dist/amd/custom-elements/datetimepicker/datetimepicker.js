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
        sideBySide: true
      };

      var div = this.element.firstElementChild;
      this.$element = _$['default'](div);

      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }
      this.options = _$['default'].extend({}, defaultOpts, this.options);

      this.datepicker = this.$element.datetimepicker(this.options);

      this.datepicker.on('dp.change', function (event) {
        _this.value = event.date;
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
    Datepicker = _aureliaFramework.customElement('datetimepicker')(Datepicker) || Datepicker;
    return Datepicker;
  })();

  exports.Datepicker = Datepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQVFhLFVBQVU7OzswQkFBVixVQUFVOztxQ0FSUSxRQUFROztlQVNuQixJQUFJOzs7OztxQ0FUTyxRQUFROztlQVVqQixJQUFJOzs7OztxQ0FWSyxRQUFROztlQVdoQixLQUFLOzs7OztBQUVmLGFBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztBQVBVLGNBQVUsV0FTckIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxVQUFNLFdBQVcsR0FBRztBQUNsQixnQkFBUSxFQUFFLEtBQUs7QUFDZixrQkFBVSxFQUFFLEtBQUs7QUFDakIscUJBQWEsRUFBRSxJQUFJO0FBQ25CLGNBQU0sRUFBRSxvQkFBTyxNQUFNLEVBQUU7QUFDdkIsa0JBQVUsRUFBRSxJQUFJO09BQ2pCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLENBQUMsUUFBUSxHQUFHLGNBQUUsR0FBRyxDQUFDLENBQUM7O0FBRXZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1QjtBQUNELFVBQUksQ0FBQyxPQUFPLEdBQUcsY0FBRSxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXZELFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU3RCxVQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDekMsY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztPQUN6QixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7O0FBbENVLGNBQVUsV0FvQ3JCLFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9CLFVBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQixjQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7T0FDMUM7O0FBRUQsVUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsYUFBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDakIsZUFBTztPQUNSOztBQUdELFVBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtBQUMvQixjQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7T0FDaEQ7O0FBRUQsVUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLGVBQU87T0FDUjs7QUFFRCxVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyRDs7c0JBekRVLFVBQVU7QUFBVixjQUFVLEdBRHRCLGtCQVBPLE1BQU0sQ0FPTixPQUFPLENBQUMsQ0FDSCxVQUFVLEtBQVYsVUFBVTtBQUFWLGNBQVUsR0FGdEIsa0JBTmUsYUFBYSxDQU1kLGdCQUFnQixDQUFDLENBRW5CLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXRpbWVwaWNrZXInKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcclxuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcclxuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgY29sbGFwc2U6IGZhbHNlLFxyXG4gICAgICB1c2VDdXJyZW50OiBmYWxzZSxcclxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXHJcbiAgICAgIHNpZGVCeVNpZGU6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGRhdGUgaXMgdmFsaWQgYW5kIG1vbWVudCBvYmplY3RcclxuICAgIGlmIChuZXdWYWx1ZS5pc1ZhbGlkKCkgIT09IHRydWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=