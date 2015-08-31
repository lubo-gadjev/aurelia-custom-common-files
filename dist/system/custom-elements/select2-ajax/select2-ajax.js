System.register(['aurelia-framework', 'jquery', 'select2/select2/css/select2.css!', '../select2_custom.css!', 'select2/select2'], function (_export) {
  'use strict';

  var inject, customElement, bindable, Http, $, Select2Ajax;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      Http = _aureliaFramework.Http;
    }, function (_jquery) {
      $ = _jquery['default'];
    }, function (_select2Select2CssSelect2Css) {}, function (_select2_customCss) {}, function (_select2Select2) {}],
    execute: function () {
      Select2Ajax = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(Select2Ajax, [{
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
        }, {
          key: 'clear',
          decorators: [bindable],
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
          $.fn.select2.amd.require(['select2/data/array', 'select2/utils', 'select2/selection/single'], function (ArrayAdapter, Utils, SingleSelection) {
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
                  var $option = $(this);

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
        Select2Ajax = inject(Element, Http)(Select2Ajax) || Select2Ajax;
        Select2Ajax = customElement('select-two-ajax')(Select2Ajax) || Select2Ajax;
        return Select2Ajax;
      })();

      _export('Select2Ajax', Select2Ajax);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1lbGVtZW50cy9zZWxlY3QyLWFqYXgvc2VsZWN0Mi1hamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFTYSxXQUFXOzs7Ozs7Ozs7O2lDQVRoQixNQUFNO3dDQUFFLGFBQWE7bUNBQUUsUUFBUTsrQkFBRSxJQUFJOzs7OztBQVNoQyxpQkFBVzs7OzhCQUFYLFdBQVc7O3VCQUNyQixRQUFROzttQkFBVyxJQUFJOzs7Ozt1QkFDdkIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFZLEtBQUs7Ozs7O3VCQUN6QixRQUFROzttQkFBVyxFQUFFOzs7Ozt1QkFDckIsUUFBUTs7bUJBQVMsRUFBRTs7Ozs7QUFFVCxpQkFQQSxXQUFXLENBT1YsT0FBTyxFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7OztBQUN6QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7QUFWVSxtQkFBVyxXQVl0QixJQUFJLEdBQUEsZ0JBQUc7OztBQUNMLGNBQUksV0FBVyxHQUFHLElBQUksQ0FBQztBQUN2QixXQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLDBCQUEwQixDQUFDLEVBQUUsVUFBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBSztBQUN0SSxxQkFBUyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN0QyxrQkFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QyxrQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3ZFLGtCQUFJLElBQUksQ0FBQyxXQUFXLENB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LFlBQVksR0FBQSxzQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBRS9CLGNBQUksUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN4QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzlDO1NBQ0Y7OzJCQXZKVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDVCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBRnZCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUVwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIEh0dHB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnc2VsZWN0Mi9zZWxlY3QyL2Nzcy9zZWxlY3QyLmNzcyEnO1xyXG5pbXBvcnQgJy4uL3NlbGVjdDJfY3VzdG9tLmNzcyEnO1xyXG5pbXBvcnQgJ3NlbGVjdDIvc2VsZWN0Mic7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2VsZWN0LXR3by1hamF4JylcclxuQGluamVjdChFbGVtZW50LCBIdHRwKVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0MkFqYXgge1xyXG4gIEBiaW5kYWJsZSBjYXB0aW9uID0gbnVsbDtcclxuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xyXG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBiaW5kYWJsZSBvcHRpb25zID0ge307XHJcbiAgQGJpbmRhYmxlIGNsZWFyID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGh0dHApIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIGxldCBzZWxlY3QydGhpcyA9IHRoaXM7XHJcbiAgICAkLmZuLnNlbGVjdDIuYW1kLnJlcXVpcmUoWydzZWxlY3QyL2RhdGEvYXJyYXknLCAnc2VsZWN0Mi91dGlscycsICdzZWxlY3QyL3NlbGVjdGlvbi9zaW5nbGUnXSwgKEFycmF5QWRhcHRlciwgVXRpbHMsIFNpbmdsZVNlbGVjdGlvbikgPT4ge1xyXG4gICAgICBmdW5jdGlvbiBBamF4QWRhcHRlcigkZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuYWpheE9wdGlvbnMgPSBvcHRpb25zLmdldCgnYWpheCcpIHx8IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID09PSB1bmRlZmluZWQpIHRoaXMuYWpheE9wdGlvbnMuZGVsYXkgPSAyNTA7XHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID09PSB1bmRlZmluZWQpIHRoaXMuYWpheE9wdGlvbnMubWluaW11bUlucHV0TGVuZ3RoID0gMjtcclxuXHJcbiAgICAgICAgQWpheEFkYXB0ZXIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBVdGlscy5FeHRlbmQoQWpheEFkYXB0ZXIsIEFycmF5QWRhcHRlcik7XHJcblxyXG4gICAgICBBamF4QWRhcHRlci5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuYWpheE9wdGlvbnMuaW5pdElkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5hamF4T3B0aW9ucy5pbml0SWQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMuYWpheE9wdGlvbnMuaW5pdE5hbWVcclxuICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgdGhpcy5hamF4T3B0aW9ucy5pbml0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBjYWxsYmFjayhkYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCc6c2VsZWN0ZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyICRvcHRpb24gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHNlbGYuaXRlbSgkb3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEucHVzaChvcHRpb24pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgQWpheEFkYXB0ZXIucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlcXVlc3QoKSB7XHJcbiAgICAgICAgICBpZiAocGFyYW1zLnRlcm0gIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMudGVybS5sZW5ndGggPiBzZWxmLmFqYXhPcHRpb25zLm1pbmltdW1JbnB1dExlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHVybCA9IHNlbGYuYWpheE9wdGlvbnMudXJsIHx8IHNlbGYuYWpheE9wdGlvbnMuZ2V0VXJsKCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbmZpZ3VyYXRpb24gZXhjZXB0aW9uISBzZWxlY3QyLWFqYXgsIG11c3QgaGF2ZSBkZWZpbmVkIG9wdGlvbnMuYWpheC51cmwgb3Igb3B0aW9ucy5hamF4LmdldFVybCgpIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcSA9IHNlbGVjdDJ0aGlzLmh0dHAuZ2V0KGAke3VybH0/cT0ke3BhcmFtcy50ZXJtfWApO1xyXG4gICAgICAgICAgICByZXEudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChkID0+IHtcclxuICAgICAgICAgICAgICAgIGQudGV4dCA9IGQubmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBjYWxsYmFjayh7cmVzdWx0czogZGF0YX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFqYXhPcHRpb25zLmRlbGF5ID4gMCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5VGltZW91dCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX3F1ZXJ5VGltZW91dCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQocmVxdWVzdCwgdGhpcy5hamF4T3B0aW9ucy5kZWxheSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlcXVlc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gQ3VzdG9tU2luZ2xlU2VsZWN0aW9uKCRlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBVdGlscy5FeHRlbmQoQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLCBTaW5nbGVTZWxlY3Rpb24pO1xyXG5cclxuICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgJGNvbnRhaW5lcikge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLl9fc3VwZXJfXy5iaW5kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHNlbGVjdGlvbi5vbignZm9jdXMnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAvLyBVc2VyIGZvY3VzZXMgb24gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgaWYgKCFzZWxlY3QydGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICBzZWxlY3QydGhpcy4kc2VsZWN0LnNlbGVjdDIoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRzZWxlY3Rpb24ub24oJ2JsdXInLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAvLyBVc2VyIGV4aXRzIHRoZSBjb250YWluZXJcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICBsZXQgc2VsZWN0ID0gdGhpcy5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2VsZWN0aW9uQWRhcHRlcjogQ3VzdG9tU2luZ2xlU2VsZWN0aW9uLFxyXG4gICAgICAgIGRhdGFBZGFwdGVyOiBBamF4QWRhcHRlcixcclxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5jYXB0aW9uLFxyXG4gICAgICAgIGFsbG93Q2xlYXI6IHRydWUsXHJcbiAgICAgICAgYWpheDogdGhpcy5vcHRpb25zXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCAkc2VsZWN0ID0gJChzZWxlY3QpO1xyXG4gICAgICAkc2VsZWN0LmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgICB0aGlzLnNlbGVjdDIgPSAkc2VsZWN0LnNlbGVjdDIob3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuJHNlbGVjdCA9ICRzZWxlY3Q7XHJcbiAgICAgIHRoaXMuX3NlbGVjdDJjb250cm9sID0gJHNlbGVjdC5kYXRhKCdzZWxlY3QyJyk7XHJcbiAgICAgIHRoaXMub2xkU2VsZWN0MlZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdDIub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gcGFyc2VJbnQoc2VsZWN0MnRoaXMuc2VsZWN0Mi52YWwoKSwgMTApO1xyXG4gICAgICAgIGlmIChpc05hTihzZWxlY3QydGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIHNlbGVjdDJ0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSAhPT0gc2VsZWN0MnRoaXMudmFsdWUpIHtcclxuICAgICAgICAgIHNlbGVjdDJ0aGlzLm9sZFNlbGVjdDJWYWx1ZSA9IHNlbGVjdDJ0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdDJ0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMuX3NlbGVjdDJjb250cm9sLnJlc3VsdHMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgIC8vIGV4cGxpY2l0bHkgIT0gYW5kIG5vdCAhPT1cclxuICAgIGlmIChuZXdWYWx1ZSAhPSBvbGRWYWx1ZSkge1xyXG4gICAgICB0aGlzLiRzZWxlY3QudmFsKG5ld1ZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ==