define(['exports', 'aurelia-framework', 'jquery', 'select2/select2/css/select2.css!', '../select2_custom.css!', 'select2/select2'], function (exports, _aureliaFramework, _jquery, _select2Select2CssSelect2Css, _select2_customCss, _select2Select2) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var Select2 = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Select2, [{
      key: 'items',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'caption',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'value',
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
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
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
      _$['default'].fn.select2.amd.require(['select2/utils', 'select2/selection/single', 'select2/selection/allowClear', 'select2/selection/placeholder'], function (Utils, SingleSelection, AllowClear, Placeholder) {
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

        var $select = _$['default'](select);
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
    Select2 = _aureliaFramework.inject(Element)(Select2) || Select2;
    Select2 = _aureliaFramework.customElement('select-two')(Select2) || Select2;
    return Select2;
  })();

  exports.Select2 = Select2;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BU2EsT0FBTzs7OzBCQUFQLE9BQU87O3FDQVRXLFFBQVE7O2VBVW5CLElBQUk7Ozs7O3FDQVZPLFFBQVE7O2VBV2pCLElBQUk7Ozs7O3FDQVhLLFFBQVE7O2VBWW5CLElBQUk7Ozs7O3FDQVpPLFFBQVE7O2VBYWhCLEtBQUs7Ozs7O3FDQWJHLFFBQVE7O2VBY2pCLEVBQUU7Ozs7O0FBRVgsYUFQQSxPQUFPLENBT04sT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztBQVRVLFdBQU8sV0FXbEIsSUFBSSxHQUFBLGdCQUFHOzs7QUFDTCxVQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDdkIsb0JBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDLEVBQ3JJLFVBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFLO0FBQ25ELGlCQUFTLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDaEQsK0JBQXFCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3BFOztBQUVELGFBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXJELDZCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFO0FBQ3RFLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsK0JBQXFCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FB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Rjs7QUFyRlUsV0FBTyxXQXVGbEIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFFL0IsVUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO0FBQ3hCLFlBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUM5QztLQUNGOzttQkE1RlUsT0FBTztBQUFQLFdBQU8sR0FEbkIsa0JBUk8sTUFBTSxDQVFOLE9BQU8sQ0FBQyxDQUNILE9BQU8sS0FBUCxPQUFPO0FBQVAsV0FBTyxHQUZuQixrQkFQZSxhQUFhLENBT2QsWUFBWSxDQUFDLENBRWYsT0FBTyxLQUFQLE9BQU87V0FBUCxPQUFPIiwiZmlsZSI6ImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyL2Nzcy9zZWxlY3QyLmNzcyEnO1xyXG5pbXBvcnQgJy4uL3NlbGVjdDJfY3VzdG9tLmNzcyEnO1xyXG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mic7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3bycpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNlbGVjdDIge1xyXG4gIEBiaW5kYWJsZSBpdGVtcyA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xyXG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBsZXQgc2VsZWN0MnRoaXMgPSB0aGlzO1xyXG4gICAgJC5mbi5zZWxlY3QyLmFtZC5yZXF1aXJlKFsnc2VsZWN0Mi91dGlscycsICdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnLCAnc2VsZWN0Mi9zZWxlY3Rpb24vYWxsb3dDbGVhcicsICdzZWxlY3QyL3NlbGVjdGlvbi9wbGFjZWhvbGRlciddLFxyXG4gICAgICAoVXRpbHMsIFNpbmdsZVNlbGVjdGlvbiwgQWxsb3dDbGVhciwgUGxhY2Vob2xkZXIpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XHJcblxyXG4gICAgICAgIEN1c3RvbVNpbmdsZVNlbGVjdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChjb250YWluZXIsICRjb250YWluZXIpIHtcclxuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2ZvY3VzJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0MnRoaXMuJHNlbGVjdC5zZWxlY3QyKCdvcGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgICAgLy8gVXNlciBleGl0cyB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgbGV0IEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShDdXN0b21TaW5nbGVTZWxlY3Rpb24sIEFsbG93Q2xlYXIpO1xyXG4gICAgICAgIEN1c3RvbVNlbGVjdGlvbkFkYXB0ZXIgPSBVdGlscy5EZWNvcmF0ZShDdXN0b21TZWxlY3Rpb25BZGFwdGVyLCBQbGFjZWhvbGRlcik7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TZWxlY3Rpb25BZGFwdGVyLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuY2FwdGlvbixcclxuICAgICAgICAgIGFsbG93Q2xlYXI6IHRydWVcclxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xyXG4gICAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3QyID0gJHNlbGVjdC5zZWxlY3QyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcclxuICAgICAgICB0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICBzZWxlY3QydGhpcy52YWx1ZSA9IHBhcnNlSW50KHNlbGVjdDJ0aGlzLnNlbGVjdDIudmFsKCksIDEwKTtcclxuICAgICAgICAgIGlmIChpc05hTihzZWxlY3QydGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZWN0MnRoaXMudmFsdWUpIHtcclxuICAgICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3QydGhpcy5pbml0RWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdDJ0aGlzLmluaXRFbGVtZW50ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmluaXRFbGVtZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGl0ZW1zQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gbmV3VmFsdWUubWFwKHggPT4geC5pZCkuaW5kZXhPZih0aGlzLnZhbHVlKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcbiAgICAvLyBleHBsaWNpdGx5ICE9IGFuZCBub3QgIT09XHJcbiAgICBpZiAobmV3VmFsdWUgIT0gb2xkVmFsdWUpIHtcclxuICAgICAgdGhpcy4kc2VsZWN0LnZhbChuZXdWYWx1ZSkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==