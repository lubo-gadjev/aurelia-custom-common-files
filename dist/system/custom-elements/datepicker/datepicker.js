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
        Datepicker = inject(Element)(Datepicker) || Datepicker;
        Datepicker = customElement('datepicker')(Datepicker) || Datepicker;
        return Datepicker;
      })();

      _export('Datepicker', Datepicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tEQVFhLFVBQVU7Ozs7Ozs7Ozs7aUNBUmYsTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7Ozs7QUFRMUIsZ0JBQVU7Ozs4QkFBVixVQUFVOzt1QkFDcEIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBWSxLQUFLOzs7OztBQUVmLGlCQUxBLFVBQVUsQ0FLVCxPQUFPLEVBQUU7Ozs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7QUFQVSxrQkFBVSxXQVNyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQU0sV0FBVyxHQUFHO0FBQ2xCLG9CQUFRLEVBQUUsS0FBSztBQUNmLHNCQUFVLEVBQUUsS0FBSztBQUNqQix5QkFBYSxFQUFFLElBQUk7QUFDbkIsa0JBQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3ZCLGtCQUFNLEVBQUUsR0FBRztXQUNaLENBQUM7O0FBRUYsY0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxjQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxjQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUNyQyxtQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztXQUM1QjtBQUNELGNBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFdkQsY0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0QsY0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixjQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDekMsa0JBQUssS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7O0FBRXhCLHNCQUFVLENBQUMsWUFBWTtBQUNyQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7O0FBRUgsY0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7O0FBdkNVLGtCQUFVLFdBeUNyQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixjQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDMUIsa0JBQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztXQUMxQzs7QUFFRCxjQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDckIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7QUFDN0QsaUJBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLG1CQUFPO1dBQ1I7O0FBR0QsY0FBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0FBQy9CLGtCQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7V0FDaEQ7O0FBRUQsY0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdCLG1CQUFPO1dBQ1I7O0FBRUQsY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7OzBCQTlEVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLFVBQVUsS0FBVixVQUFVO2VBQVYsVUFBVSIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnRW9uYXNkYW4vYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXIvYnVpbGQvY3NzL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci5jc3MhJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2RhdGVwaWNrZXInKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyIHtcclxuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcclxuICBAYmluZGFibGUgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgY29sbGFwc2U6IGZhbHNlLFxyXG4gICAgICB1c2VDdXJyZW50OiBmYWxzZSxcclxuICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuICAgICAgbG9jYWxlOiBtb21lbnQubG9jYWxlKCksXHJcbiAgICAgIGZvcm1hdDogJ0wnXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBkaXYgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybWF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVsZXRlIHRoaXMub3B0aW9ucy5mb3JtYXQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdE9wdHMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5kYXRlcGlja2VyID0gdGhpcy4kZWxlbWVudC5kYXRldGltZXBpY2tlcih0aGlzLm9wdGlvbnMpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZGF0ZXBpY2tlci5vbignZHAuY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudC5kYXRlO1xyXG4gICAgICAvL0ZpbmQgYmV0dGVyIHdheSB0byBpbnZva2Ugb2JzZXJ2YWJsZSBiZWZvcmUgZnVuY3Rpb24hISFcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHZhciBpbnB1dCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIGlmIGRhdGUgaXMgdmFsaWQgYW5kIG1vbWVudCBvYmplY3RcclxuICAgIGlmIChuZXdWYWx1ZS5pc1ZhbGlkKCkgIT09IHRydWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZSEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3VmFsdWUuaXNTYW1lKG9sZFZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUobmV3VmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=