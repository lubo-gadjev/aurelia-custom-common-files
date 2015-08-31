System.register(['aurelia-framework', 'jquery', 'select2/select2/css/select2.css!', '../select2_custom.css!', 'select2/select2'], function (_export) {
  'use strict';

  var inject, customElement, bindable, $, Select2;

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
    }, function (_select2Select2CssSelect2Css) {}, function (_select2_customCss) {}, function (_select2Select2) {}],
    execute: function () {
      Select2 = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Select2, [{
          key: 'items',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'caption',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'value',
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
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return {};
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Select2(element) {
          _classCallCheck(this, _Select2);

          _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
        }

        Select2.prototype.bind = function bind() {
          var _this = this;

          var select2this = this;
          $.fn.select2.amd.require(['select2/utils', 'select2/selection/single', 'select2/selection/allowClear', 'select2/selection/placeholder'], function (Utils, SingleSelection, AllowClear, Placeholder) {
            function CustomSingleSelection($element, options) {
              CustomSingleSelection.__super__.constructor.apply(this, arguments);
            }

            Utils.Extend(CustomSingleSelection, SingleSelection);

            CustomSingleSelection.prototype.bind = function (container, $container) {
              var self = this;

              CustomSingleSelection.__super__.bind.apply(this, arguments);

              this.$selection.on('focus', function (evt) {
                if (!select2this.value) {
                  select2this.$select.select2('open');
                }
              });

              this.$selection.on('blur', function (evt) {});
            };

            var select = _this.element.firstElementChild;

            var CustomSelectionAdapter = Utils.Decorate(CustomSingleSelection, AllowClear);
            CustomSelectionAdapter = Utils.Decorate(CustomSelectionAdapter, Placeholder);

            var options = Object.assign({
              selectionAdapter: CustomSelectionAdapter,
              placeholder: _this.caption,
              allowClear: true
            }, _this.options);

            var $select = $(select);
            $select.css('width', '100%');
            _this.select2 = $select.select2(options);
            _this.$select = $select;
            _this._select2control = $select.data('select2');
            _this.oldSelect2Value = undefined;
            var self = _this;

            _this.select2.on('change', function (event) {
              select2this.value = parseInt(select2this.select2.val(), 10);
              if (isNaN(select2this.value)) {
                select2this.value = undefined;
              }

              if (select2this.oldSelect2Value !== select2this.value) {
                select2this.oldSelect2Value = select2this.value;
                if (select2this.initElement === undefined || select2this.initElement === false) {
                  setTimeout(function () {
                    select2this.element.dispatchEvent(new Event('change'));
                  });
                } else {
                  select2this.initElement = false;
                }
              }
            });

            select2this.valueChanged(_this.value);
          });
        };

        Select2.prototype.itemsChanged = function itemsChanged(newValue, oldValue) {
          var index = newValue.map(function (x) {
            return x.id;
          }).indexOf(this.value);
          if (index === -1) {
            this.value = null;
          }
        };

        Select2.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue != oldValue) {
            this.$select.val(newValue).trigger('change');
          }
        };

        var _Select2 = Select2;
        Select2 = inject(Element)(Select2) || Select2;
        Select2 = customElement('select-two')(Select2) || Select2;
        return Select2;
      })();

      _export('Select2', Select2);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQVNhLE9BQU87Ozs7Ozs7Ozs7aUNBVFosTUFBTTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7Ozs7O0FBUzFCLGFBQU87Ozs4QkFBUCxPQUFPOzt1QkFDakIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBUyxJQUFJOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVksS0FBSzs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFXLEVBQUU7Ozs7O0FBRVgsaUJBUEEsT0FBTyxDQU9OLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7QUFUVSxlQUFPLFdBV2xCLElBQUksR0FBQSxnQkFBRzs7O0FBQ0wsY0FBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFdBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLENBQUMsRUFDckksVUFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUs7QUFDbkQscUJBQVMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUNoRCxtQ0FBcUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDcEU7O0FBRUQsaUJBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXJELGlDQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3RFLGtCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLG1D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QztBQUMxRCxjQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7V0FDbkI7U0FDRjs7QUFyRlUsZUFBTyxXQXVGbEIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFFL0IsY0FBSSxRQUFRLElBQUksUUFBUSxFQUFFO0FBQ3hCLGdCQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDOUM7U0FDRjs7dUJBNUZVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FGbkIsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUVmLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi9zZWxlY3QyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mi9jc3Mvc2VsZWN0Mi5jc3MhJztcclxuaW1wb3J0ICcuLi9zZWxlY3QyX2N1c3RvbS5jc3MhJztcclxuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDInO1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ3NlbGVjdC10d28nKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3QyIHtcclxuICBAYmluZGFibGUgaXRlbXMgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcclxuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcclxuICAgICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZShbJ3NlbGVjdDIvdXRpbHMnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vc2luZ2xlJywgJ3NlbGVjdDIvc2VsZWN0aW9uL2FsbG93Q2xlYXInLCAnc2VsZWN0Mi9zZWxlY3Rpb24vcGxhY2Vob2xkZXInXSxcclxuICAgICAgKFV0aWxzLCBTaW5nbGVTZWxlY3Rpb24sIEFsbG93Q2xlYXIsIFBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gQ3VzdG9tU2luZ2xlU2VsZWN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgLy8gVXNlciBmb2N1c2VzIG9uIHRoZSBjb250YWluZXJcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0Mignb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIGxldCBDdXN0b21TZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBBbGxvd0NsZWFyKTtcclxuICAgICAgICBDdXN0b21TZWxlY3Rpb25BZGFwdGVyID0gVXRpbHMuRGVjb3JhdGUoQ3VzdG9tU2VsZWN0aW9uQWRhcHRlciwgUGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgc2VsZWN0aW9uQWRhcHRlcjogQ3VzdG9tU2VsZWN0aW9uQWRhcHRlcixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXHJcbiAgICAgICAgICBhbGxvd0NsZWFyOiB0cnVlXHJcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoc2VsZWN0KTtcclxuICAgICAgICAkc2VsZWN0LmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLiRzZWxlY3QgPSAkc2VsZWN0O1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdDJjb250cm9sID0gJHNlbGVjdC5kYXRhKCdzZWxlY3QyJyk7XHJcbiAgICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdDIub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgICBpZiAoaXNOYU4oc2VsZWN0MnRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChzZWxlY3QydGhpcy5vbGRTZWxlY3QyVmFsdWUgIT09IHNlbGVjdDJ0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0MnRoaXMuaW5pdEVsZW1lbnQgPT09IHVuZGVmaW5lZCB8fCBzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpdGVtc0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IG5ld1ZhbHVlLm1hcCh4ID0+IHguaWQpLmluZGV4T2YodGhpcy52YWx1ZSk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxyXG4gICAgaWYgKG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=