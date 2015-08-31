System.register(['aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, moment, Datepicker;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_EonasdanBootstrapDatetimepicker) {}, function (_EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss) {}, function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      Datepicker = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Datepicker, [{
          key: 'value',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'disabled',
          decorators: [bindable],
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
            locale: moment.locale(),
            sideBySide: true
          };

          var div = this.element.firstElementChild;
          this.$element = $(div);

          this.options = this.options || {};
          if (this.options.format !== undefined) {
            delete this.options.format;
          }
          this.options = $.extend({}, defaultOpts, this.options);

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
        Datepicker = inject(Element)(Datepicker) || Datepicker;
        Datepicker = customElement('datetimepicker')(Datepicker) || Datepicker;
        return Datepicker;
      })();

      _export('Datepicker', Datepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0RBUWEsVUFBVTs7Ozs7Ozs7OztpQ0FSZixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTs7Ozs7OztBQVExQixnQkFBVTs7OzhCQUFWLFVBQVU7O3VCQUNwQixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVcsSUFBSTs7Ozs7dUJBQ3ZCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O0FBRWYsaUJBTEEsVUFBVSxDQUtULE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztBQVBVLGtCQUFVLFdBU3JCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsY0FBTSxXQUFXLEdBQUc7QUFDbEIsb0JBQVEsRUFBRSxLQUFLO0FBQ2Ysc0JBQVUsRUFBRSxLQUFLO0FBQ2pCLHlCQUFhLEVBQUUsSUFBSTtBQUNuQixrQkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDdkIsc0JBQVUsRUFBRSxJQUFJO1dBQ2pCLENBQUM7O0FBRUYsY0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxjQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUNyQyxtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztXQUM1QjtBQUNELGNBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkQsY0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdELGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUssRUFBSztBQUN6QyxrQkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztXQUN6QixDQUFDLENBQUM7O0FBRUgsY0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7O0FBbENVLGtCQUFVLFdBb0NyQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixjQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDMUIsa0JBQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztXQUMxQzs7QUFFRCxjQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDckIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsaUJBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLG1CQUFPO1dBQ1I7O0FBR0QsY0FBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0FBQy9CLGtCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7V0FDaEQ7O0FBRUQsY0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLG1CQUFPO1dBQ1I7O0FBRUQsY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7OzBCQXpEVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBRW5CLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnZGF0ZXRpbWVwaWNrZXInKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcclxuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcclxuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgY29sbGFwc2U6IGZhbHNlLFxyXG4gICAgICB1c2VDdXJyZW50OiBmYWxzZSxcclxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXHJcbiAgICAgIHNpZGVCeVNpZGU6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGRpdiA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGRpdik7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcclxuICAgIH1cclxuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLmRhdGVwaWNrZXIgPSB0aGlzLiRlbGVtZW50LmRhdGV0aW1lcGlja2VyKHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5kYXRlcGlja2VyLm9uKCdkcC5jaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LmRhdGU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGRhdGUgaXMgdmFsaWQgYW5kIG1vbWVudCBvYmplY3RcclxuICAgIGlmIChuZXdWYWx1ZS5pc1ZhbGlkKCkgIT09IHRydWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=