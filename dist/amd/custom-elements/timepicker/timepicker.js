define(['exports', 'aurelia-framework', 'jquery', 'Eonasdan/bootstrap-datetimepicker', 'Eonasdan/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css!', 'moment', '../../utils/timespan'], function (exports, _aureliaFramework, _jquery, _EonasdanBootstrapDatetimepicker, _EonasdanBootstrapDatetimepickerBuildCssBootstrapDatetimepickerCss, _moment, _utilsTimespan) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var _moment2 = _interopRequireDefault(_moment);

  var Timepicker = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Timepicker, [{
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
    }], null, _instanceInitializers);

    function Timepicker(element) {
      _classCallCheck(this, _Timepicker);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
    }

    Timepicker.prototype.bind = function bind() {
      var _this = this;

      var defaultOpts = {
        format: 'HH:mm'
      };

      var div = this.element.firstElementChild;
      var input = div.firstElementChild;
      this.$element = _$['default'](div);
      this.options = this.options || {};
      if (this.options.format !== undefined) {
        delete this.options.format;
      }

      var options = _$['default'].extend({}, defaultOpts, this.options);
      this.datepicker = this.$element.datetimepicker(options);
      this.datepicker.on('dp.change', function (ev) {
        var elVal = input.value;
        if (elVal === '') {
          _this.value = null;
        } else {
          var newTimespan = new _utilsTimespan.Timespan(elVal);
          var areSame = newTimespan.equals(_this.value);
          if (!areSame) {
            _this.value = newTimespan;
          }
        }
      });

      this.valueChanged(this.value);
    };

    Timepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (newValue === undefined) throw new Error('Do not use undefined!');
      if (newValue === null) {
        this.$element.val('');
        this.value = null;
        return;
      }

      if (newValue.constructor.name !== "Timespan") {
        throw new Error('This has to be moment type.');
      }

      var areSame = newValue.equals(oldValue);
      if (areSame) {
        return;
      }

      var timeAsMoment = _moment2['default'](newValue.toString(), 'HH:mm');
      this.$element.data('DateTimePicker').date(timeAsMoment);
    };

    var _Timepicker = Timepicker;
    Timepicker = _aureliaFramework.inject(Element)(Timepicker) || Timepicker;
    Timepicker = _aureliaFramework.customElement('timepicker')(Timepicker) || Timepicker;
    return Timepicker;
  })();

  exports.Timepicker = Timepicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFTYSxVQUFVOzs7MEJBQVYsVUFBVTs7cUNBVFEsUUFBUTs7ZUFVbkIsSUFBSTs7Ozs7cUNBVk8sUUFBUTs7ZUFXakIsSUFBSTs7Ozs7QUFFYixhQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7S0FDdkI7O0FBTlUsY0FBVSxXQVFyQixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLFVBQU0sV0FBVyxHQUFHO0FBQ2xCLGNBQU0sRUFBRSxPQUFPO09BQ2hCLENBQUM7O0FBRUYsVUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUN6QyxVQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7QUFDbEMsVUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDbEMsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDckMsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztPQUM1Qjs7QUFFRCxVQUFJLE9BQU8sR0FBRyxjQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RCxVQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFVBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEVBQUUsRUFBSztBQUN0QyxZQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3hCLFlBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNoQixnQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CLE1BQU07QUFDTCxjQUFJLFdBQVcsR0FBRyxtQkFoQ2xCLFFBQVEsQ0FnQ3VCLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLGNBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQztBQUMvQyxjQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osa0JBQUssS0FBSyxHQUFHLFdBQVcsQ0FBQztXQUMxQjtTQUNGO09BQ0YsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COztBQXJDVSxjQUFVLFdBdUNyQixZQUFZLEdBQUEsc0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUMvQixVQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3JFLFVBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNyQixZQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QixZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixlQUFPO09BQ1I7O0FBRUQsVUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDNUMsY0FBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO09BQ2hEOztBQUVELFVBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsVUFBSSxPQUFPLEVBQUU7QUFDWCxlQUFPO09BQ1I7O0FBRUQsVUFBSSxZQUFZLEdBQUcsb0JBQU8sUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3pEOztzQkExRFUsVUFBVTtBQUFWLGNBQVUsR0FEdEIsa0JBUk8sTUFBTSxDQVFOLE9BQU8sQ0FBQyxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUZ0QixrQkFQZSxhQUFhLENBT2QsWUFBWSxDQUFDLENBRWYsVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy90aW1lcGlja2VyL3RpbWVwaWNrZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdFb25hc2Rhbi9ib290c3RyYXAtZGF0ZXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgJ0VvbmFzZGFuL2Jvb3RzdHJhcC1kYXRldGltZXBpY2tlci9idWlsZC9jc3MvYm9vdHN0cmFwLWRhdGV0aW1lcGlja2VyLmNzcyEnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7VGltZXNwYW59IGZyb20gJy4uLy4uL3V0aWxzL3RpbWVzcGFuJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCd0aW1lcGlja2VyJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlciB7XHJcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcclxuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0cyA9IHtcclxuICAgICAgZm9ybWF0OiAnSEg6bW0nXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBkaXYgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB2YXIgaW5wdXQgPSBkaXYuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICB0aGlzLiRlbGVtZW50ID0gJChkaXYpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5mb3JtYXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5vcHRpb25zLmZvcm1hdDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgdGhpcy5vcHRpb25zKTtcclxuICAgIHRoaXMuZGF0ZXBpY2tlciA9IHRoaXMuJGVsZW1lbnQuZGF0ZXRpbWVwaWNrZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIub24oJ2RwLmNoYW5nZScsIChldikgPT4ge1xyXG4gICAgICB2YXIgZWxWYWwgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgaWYgKGVsVmFsID09PSAnJykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBuZXdUaW1lc3BhbiA9IG5ldyBUaW1lc3BhbihlbFZhbCk7XHJcbiAgICAgICAgY29uc3QgYXJlU2FtZSA9IG5ld1RpbWVzcGFuLmVxdWFscyh0aGlzLnZhbHVlKTtcclxuICAgICAgICBpZiAoIWFyZVNhbWUpIHtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdUaW1lc3BhbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSB1bmRlZmluZWQhJyk7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy4kZWxlbWVudC52YWwoJycpO1xyXG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSBcIlRpbWVzcGFuXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGhhcyB0byBiZSBtb21lbnQgdHlwZS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcmVTYW1lID0gbmV3VmFsdWUuZXF1YWxzKG9sZFZhbHVlKTtcclxuICAgIGlmIChhcmVTYW1lKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGltZUFzTW9tZW50ID0gbW9tZW50KG5ld1ZhbHVlLnRvU3RyaW5nKCksICdISDptbScpO1xyXG4gICAgdGhpcy4kZWxlbWVudC5kYXRhKCdEYXRlVGltZVBpY2tlcicpLmRhdGUodGltZUFzTW9tZW50KTtcclxuICB9XHJcbn1cclxuIl19