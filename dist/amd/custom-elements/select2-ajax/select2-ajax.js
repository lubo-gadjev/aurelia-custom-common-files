define(['exports', 'aurelia-framework', 'jquery', 'select2/select2/css/select2.css!', '../select2_custom.css!', 'select2/select2'], function (exports, _aureliaFramework, _jquery, _select2Select2CssSelect2Css, _select2_customCss, _select2Select2) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _$ = _interopRequireDefault(_jquery);

  var Select2Ajax = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Select2Ajax, [{
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
    }, {
      key: 'clear',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function Select2Ajax(element, http) {
      _classCallCheck(this, _Select2Ajax);

      _defineDecoratedPropertyDescriptor(this, 'caption', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'clear', _instanceInitializers);

      this.element = element;
      this.http = http;
    }

    Select2Ajax.prototype.bind = function bind() {
      var _this = this;

      var select2this = this;
      _$['default'].fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], function (ArrayAdapter, Utils, SingleSelection) {
        function AjaxAdapter($element, options) {
          this.ajaxOptions = options.get('ajax') || {};
          if (this.ajaxOptions.delay === undefined) this.ajaxOptions.delay = 250;
          if (this.ajaxOptions.minimumInputLength === undefined) this.ajaxOptions.minimumInputLength = 2;

          AjaxAdapter.__super__.constructor.call(this, $element, options);
        }

        Utils.Extend(AjaxAdapter, ArrayAdapter);

        AjaxAdapter.prototype.current = function (callback) {
          var data = [];
          if (this.ajaxOptions.initId !== undefined) {
            data = [{
              id: this.ajaxOptions.initId,
              text: this.ajaxOptions.initName
            }];
            this.ajaxOptions.initId = undefined;
            callback(data);
          } else {
            var self = this;

            this.$element.find(':selected').each(function () {
              var $option = _$['default'](this);

              var option = self.item($option);

              data.push(option);
            });

            callback(data);
          }
        };

        AjaxAdapter.prototype.query = function (params, callback) {
          var self = this;

          function request() {
            if (params.term !== undefined && params.term.length > self.ajaxOptions.minimumInputLength) {

              var url = self.ajaxOptions.url || self.ajaxOptions.getUrl();
              if (url === undefined) {
                throw new Error("Configuration exception! select2-ajax, must have defined options.ajax.url or options.ajax.getUrl()!");
              }

              var req = select2this.http.get(url + '?q=' + params.term);
              req.then(function (data) {
                data = data.map(function (d) {
                  d.text = d.name;
                  return d;
                });

                callback({ results: data });
              });
            }
          }

          if (this.ajaxOptions.delay > 0) {
            if (this._queryTimeout) {
              window.clearTimeout(this._queryTimeout);
            }

            this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
          } else {
            request();
          }
        };

        function CustomSingleSelection($element, options) {
          CustomSingleSelection.__super__.constructor.apply(this, arguments);
        }

        Utils.Extend(CustomSingleSelection, SingleSelection);

        CustomSingleSelection.prototype.bind = function (container, $container) {
          var self = this;

          CustomSingleSelection.__super__.bind.apply(this, arguments);

          this.$selection.on('focus', function (evt) {
            if (!select2this.value) {
              select2this.$select.select2("open");
            }
          });

          this.$selection.on('blur', function (evt) {});
        };

        var select = _this.element.firstElementChild;

        var options = {
          selectionAdapter: CustomSingleSelection,
          dataAdapter: AjaxAdapter,
          placeholder: _this.caption,
          allowClear: true,
          ajax: _this.options
        };

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
            setTimeout(function () {
              select2this.element.dispatchEvent(new Event('change'));
            });
          }
        });
      });
    };

    Select2Ajax.prototype.clearChanged = function clearChanged() {
      this._select2control.results.clear();
    };

    Select2Ajax.prototype.valueChanged = function valueChanged(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$select.val(newValue).trigger('change');
      }
    };

    var _Select2Ajax = Select2Ajax;
    Select2Ajax = _aureliaFramework.inject(Element, _aureliaFramework.Http)(Select2Ajax) || Select2Ajax;
    Select2Ajax = _aureliaFramework.customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
    return Select2Ajax;
  })();

  exports.Select2Ajax = Select2Ajax;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQVNhLFdBQVc7OzswQkFBWCxXQUFXOztxQ0FUTyxRQUFROztlQVVqQixJQUFJOzs7OztxQ0FWSyxRQUFROztlQVduQixJQUFJOzs7OztxQ0FYTyxRQUFROztlQVloQixLQUFLOzs7OztxQ0FaRyxRQUFROztlQWFqQixFQUFFOzs7OztxQ0FiTyxRQUFROztlQWNuQixFQUFFOzs7OztBQUVULGFBUEEsV0FBVyxDQU9WLE9BQU8sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFDekIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDbEI7O0FBVlUsZUFBVyxXQVl0QixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLFVBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixvQkFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsMEJBQTBCLENBQUMsRUFBRSxVQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFLO0FBQ3RJLGlCQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLGNBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0MsY0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGNBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7O0FBRS9GLHFCQUFXLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNqRTs7QUFFRCxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzs7QUFFeEMsbUJBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVUsUUFBUSxFQUFFO0FBQ2xELGNBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLGNBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3pDLGdCQUFJLEdBQUcsQ0FBQztBQUNOLGdCQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO0FBQzNCLGtCQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO2FBQ2hDLENBQUMsQ0FBQztBQUNILGdCQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDcEMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtXQUNmLE1BQU07QUFDTCxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7QUFDL0Msa0JBQUksT0FBTyxHQUFHLGNBQUUsSUFBSSxDQUFDLENBQUM7O0FBRXRCLGtCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVoQyxrQkFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQixDQUFDLENBQUM7O0FBRUgsb0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNoQjtTQUNGLENBQUM7O0FBRUYsbUJBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsTUFBTSxFQUFFLFFBQVEsRUFBRTtBQUN4RCxjQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLG1CQUFTLE9BQU8sR0FBRztBQUNqQixnQkFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFOztBQUV6RixrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1RCxrQkFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO0FBQ3JCLHNCQUFNLElBQUksS0FBSyxDQUFDLHFHQUFxRyxDQUFDLENBQUM7ZUFDeEg7O0FBRUQsa0JBQUksR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLEdBQUcsV0FBTSxNQUFNLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDMUQsaUJBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDakIsb0JBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ25CLG1CQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDaEIseUJBQU8sQ0FBQyxDQUFDO2lCQUNWLENBQUMsQ0FBQzs7QUFFSCx3QkFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7ZUFDM0IsQ0FBQyxDQUFDO2FBQ0o7V0FDRjs7QUFFRCxjQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtBQUM5QixnQkFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3RCLG9CQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN6Qzs7QUFFRCxnQkFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3pFLE1BQU07QUFDTCxtQkFBTyxFQUFFLENBQUM7V0FDWDtTQUNGLENBQUM7O0FBR0YsaUJBQVMscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUNoRCwrQkFBcUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDcEU7O0FBRUQsYUFBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLENBQUMsQ0FBQzs7QUFFckQsNkJBQXFCLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDdEUsY0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQiwrQkFBcUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRTVELGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRTtBQUV6QyxnQkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7QUFDdEIseUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO1dBQ0YsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEdBQUcsRUFBRSxFQUV6QyxDQUFDLENBQUM7U0FDSixDQUFDOztBQUdGLFlBQUksTUFBTSxHQUFHLE1BQUssT0FBTyxDQUFDLGlCQUFpQixDQUFDOztBQUU1QyxZQUFJLE9BQU8sR0FBRztBQUNaLDBCQUFnQixFQUFFLHFCQUFxQjtBQUN2QyxxQkFBVyxFQUFFLFdBQVc7QUFDeEIscUJBQVcsRUFBRSxNQUFLLE9BQU87QUFDekIsb0JBQVUsRUFBRSxJQUFJO0FBQ2hCLGNBQUksRUFBRSxNQUFLLE9BQU87U0FDbkIsQ0FBQzs7QUFFRixZQUFNLE9BQU8sR0FBRyxjQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLGVBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLGNBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsY0FBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUssZUFBZSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0MsY0FBSyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQ2pDLFlBQUksSUFBSSxRQUFPLENBQUM7O0FBRWhCLGNBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDbkMscUJBQVcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUQsY0FBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzVCLHVCQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztXQUMvQjs7QUFFRCxjQUFJLFdBQVcsQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtBQUNyRCx1QkFBVyxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO0FBQ2hELHNCQUFVLENBQUMsWUFBWTtBQUNyQix5QkFBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN4RCxDQUFDLENBQUM7V0FDSjtTQUNGLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztLQUNKOztBQTVJVSxlQUFXLFdBOEl0QixZQUFZLEdBQUEsd0JBQUc7QUFDYixVQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN0Qzs7QUFoSlUsZUFBVyxXQWtKdEIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7QUFFL0IsVUFBSSxRQUFRLElBQUksUUFBUSxFQUFFO0FBQ3hCLFlBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUM5QztLQUNGOzt1QkF2SlUsV0FBVztBQUFYLGVBQVcsR0FEdkIsa0JBUk8sTUFBTSxDQVFOLE9BQU8sb0JBUjBCLElBQUksQ0FRdkIsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FGdkIsa0JBUGUsYUFBYSxDQU9kLGlCQUFpQixDQUFDLENBRXBCLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJjdXN0b20tZWxlbWVudHMvc2VsZWN0Mi1hamF4L3NlbGVjdDItYWpheC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgSHR0cH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuaW1wb3J0ICdzZWxlY3QyL3NlbGVjdDIvY3NzL3NlbGVjdDIuY3NzISc7XHJcbmltcG9ydCAnLi4vc2VsZWN0Ml9jdXN0b20uY3NzISc7XHJcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyJztcclxuXHJcbkBjdXN0b21FbGVtZW50KCdzZWxlY3QtdHdvLWFqYXgnKVxyXG5AaW5qZWN0KEVsZW1lbnQsIEh0dHApXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3QyQWpheCB7XHJcbiAgQGJpbmRhYmxlIGNhcHRpb24gPSBudWxsO1xyXG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSB7fTtcclxuICBAYmluZGFibGUgY2xlYXIgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaHR0cCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgbGV0IHNlbGVjdDJ0aGlzID0gdGhpcztcclxuICAgICQuZm4uc2VsZWN0Mi5hbWQucmVxdWlyZShbJ3NlbGVjdDIvZGF0YS9hcnJheScsICdzZWxlY3QyL3V0aWxzJywgJ3NlbGVjdDIvc2VsZWN0aW9uL3NpbmdsZSddLCAoQXJyYXlBZGFwdGVyLCBVdGlscywgU2luZ2xlU2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgIGZ1bmN0aW9uIEFqYXhBZGFwdGVyKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hamF4T3B0aW9ucyA9IG9wdGlvbnMuZ2V0KCdhamF4JykgfHwge307XHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5kZWxheSA9IDI1MDtcclxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPT09IHVuZGVmaW5lZCkgdGhpcy5hamF4T3B0aW9ucy5taW5pbXVtSW5wdXRMZW5ndGggPSAyO1xyXG5cclxuICAgICAgICBBamF4QWRhcHRlci5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFV0aWxzLkV4dGVuZChBamF4QWRhcHRlciwgQXJyYXlBZGFwdGVyKTtcclxuXHJcbiAgICAgIEFqYXhBZGFwdGVyLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5hamF4T3B0aW9ucy5pbml0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5hamF4T3B0aW9ucy5pbml0TmFtZVxyXG4gICAgICAgICAgfV07XHJcbiAgICAgICAgICB0aGlzLmFqYXhPcHRpb25zLmluaXRJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIGNhbGxiYWNrKGRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LmZpbmQoJzpzZWxlY3RlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJG9wdGlvbiA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gc2VsZi5pdGVtKCRvcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgZGF0YS5wdXNoKG9wdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVxdWVzdCgpIHtcclxuICAgICAgICAgIGlmIChwYXJhbXMudGVybSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy50ZXJtLmxlbmd0aCA+IHNlbGYuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdXJsID0gc2VsZi5hamF4T3B0aW9ucy51cmwgfHwgc2VsZi5hamF4T3B0aW9ucy5nZXRVcmwoKTtcclxuICAgICAgICAgICAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29uZmlndXJhdGlvbiBleGNlcHRpb24hIHNlbGVjdDItYWpheCwgbXVzdCBoYXZlIGRlZmluZWQgb3B0aW9ucy5hamF4LnVybCBvciBvcHRpb25zLmFqYXguZ2V0VXJsKCkhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gc2VsZWN0MnRoaXMuaHR0cC5nZXQoYCR7dXJsfT9xPSR7cGFyYW1zLnRlcm19YCk7XHJcbiAgICAgICAgICAgIHJlcS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZC50ZXh0ID0gZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIGNhbGxiYWNrKHtyZXN1bHRzOiBkYXRhfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPiAwKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fcXVlcnlUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fcXVlcnlUaW1lb3V0KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLl9xdWVyeVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChyZXF1ZXN0LCB0aGlzLmFqYXhPcHRpb25zLmRlbGF5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBDdXN0b21TaW5nbGVTZWxlY3Rpb24oJGVsZW1lbnQsIG9wdGlvbnMpIHtcclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFV0aWxzLkV4dGVuZChDdXN0b21TaW5nbGVTZWxlY3Rpb24sIFNpbmdsZVNlbGVjdGlvbik7XHJcblxyXG4gICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24ucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCAkY29udGFpbmVyKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBDdXN0b21TaW5nbGVTZWxlY3Rpb24uX19zdXBlcl9fLmJpbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy4kc2VsZWN0aW9uLm9uKCdmb2N1cycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZm9jdXNlcyBvbiB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICBpZiAoIXNlbGVjdDJ0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLiRzZWxlY3Quc2VsZWN0MihcIm9wZW5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignYmx1cicsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIC8vIFVzZXIgZXhpdHMgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGxldCBzZWxlY3QgPSB0aGlzLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBzZWxlY3Rpb25BZGFwdGVyOiBDdXN0b21TaW5nbGVTZWxlY3Rpb24sXHJcbiAgICAgICAgZGF0YUFkYXB0ZXI6IEFqYXhBZGFwdGVyLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLmNhcHRpb24sXHJcbiAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICBhamF4OiB0aGlzLm9wdGlvbnNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKHNlbGVjdCk7XHJcbiAgICAgICRzZWxlY3QuY3NzKCd3aWR0aCcsICcxMDAlJyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0MiA9ICRzZWxlY3Quc2VsZWN0MihvcHRpb25zKTtcclxuICAgICAgdGhpcy4kc2VsZWN0ID0gJHNlbGVjdDtcclxuICAgICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wgPSAkc2VsZWN0LmRhdGEoJ3NlbGVjdDInKTtcclxuICAgICAgdGhpcy5vbGRTZWxlY3QyVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSBwYXJzZUludChzZWxlY3QydGhpcy5zZWxlY3QyLnZhbCgpLCAxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHNlbGVjdDJ0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlICE9PSBzZWxlY3QydGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgc2VsZWN0MnRoaXMub2xkU2VsZWN0MlZhbHVlID0gc2VsZWN0MnRoaXMudmFsdWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZWN0MnRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5fc2VsZWN0MmNvbnRyb2wucmVzdWx0cy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgLy8gZXhwbGljaXRseSAhPSBhbmQgbm90ICE9PVxyXG4gICAgaWYgKG5ld1ZhbHVlICE9IG9sZFZhbHVlKSB7XHJcbiAgICAgIHRoaXMuJHNlbGVjdC52YWwobmV3VmFsdWUpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19