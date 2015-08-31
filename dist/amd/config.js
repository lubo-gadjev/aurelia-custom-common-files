define(['exports', './locale'], function (exports, _locale) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ConfigDefaults = function ConfigDefaults() {
    _classCallCheck(this, ConfigDefaults);
  };

  exports.ConfigDefaults = ConfigDefaults;

  ConfigDefaults._defaults = {
    locale: 'en-US',
    localeResources: 'aurelia-custom-common-files/resources/'
  };

  ConfigDefaults.defaults = function () {
    var defaults = {};
    Object.assign(defaults, ConfigDefaults._defaults);
    return defaults;
  };

  var Config = (function () {
    function Config(innerConfig) {
      _classCallCheck(this, Config);

      this.innerConfig = innerConfig;
      this.values = this.innerConfig ? {} : ConfigDefaults.defaults();
      this.changedHandlers = new Map();
    }

    Config.prototype.getValue = function getValue(identifier) {
      if (this.values.hasOwnProperty(identifier) !== null && this.values[identifier] !== undefined) {
        return this.values[identifier];
      }
      if (this.innerConfig !== null) {
        return this.innerConfig.getValue(identifier);
      }
      throw Error('Config not found: ' + identifier);
    };

    Config.prototype.setValue = function setValue(identifier, value) {
      this.values[identifier] = value;
      return this;
    };

    Config.prototype.onLocaleChanged = function onLocaleChanged(callback) {
      var _this = this;

      if (this.innerConfig !== undefined) {
        return this.innerConfig.onLocaleChanged(callback);
      } else {
        var _ret = (function () {
          var id = ++ValidationConfig.uniqueListenerId;
          _this.changedHandlers.set(id, callback);
          return {
            v: function () {
              _this.changedHandlers['delete'](id);
            }
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }
    };

    Config.prototype.getDependencies = function getDependencies() {
      return this.getValue('dependencies');
    };

    Config.prototype.setHttpService = function setHttpService(httpOpts) {
      Config.httpOpts = httpOpts;
    };

    Config.prototype.routerAuthStep = function routerAuthStep(opts) {
      Config.routerAuthStepOpts = opts;
    };

    Config.prototype.useLocale = function useLocale(localeIdentifier) {
      this.setValue('locale', localeIdentifier);
      var callbacks = Array.from(this.changedHandlers.values());
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
      }
      return this;
    };

    Config.prototype.locale = function locale() {
      return _locale.Locale.Repository.load(this.getValue('locale'), this.getValue('localeResources'));
    };

    return Config;
  })();

  exports.Config = Config;

  Config.uniqueListenerId = 0;
});
//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLGlCQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztPQUNoQjtBQUNELGFBQU8sSUFBSSxDQUFDO0tBQ2I7O0FBckRVLFVBQU0sV0F1RGpCLE1BQU0sR0FBQSxrQkFBRztBQUNQLGFBQU8sUUF4RUgsTUFBTSxDQXdFSSxVQUFVLENBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0tBQ3BFOztXQTFEVSxNQUFNOzs7OztBQTZEbkIsUUFBTSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNi8xNy8xNS5cclxuICovXHJcbmltcG9ydCB7TG9jYWxlfSBmcm9tICcuL2xvY2FsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnRGVmYXVsdHMge1xyXG59XHJcblxyXG5Db25maWdEZWZhdWx0cy5fZGVmYXVsdHMgPSB7XHJcbiAgbG9jYWxlOiAnZW4tVVMnLFxyXG4gIGxvY2FsZVJlc291cmNlczogJ2F1cmVsaWEtY3VzdG9tLWNvbW1vbi1maWxlcy9yZXNvdXJjZXMvJ1xyXG59O1xyXG5cclxuQ29uZmlnRGVmYXVsdHMuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGRlZmF1bHRzID0ge307XHJcbiAgT2JqZWN0LmFzc2lnbihkZWZhdWx0cywgQ29uZmlnRGVmYXVsdHMuX2RlZmF1bHRzKTtcclxuICByZXR1cm4gZGVmYXVsdHM7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcclxuICBjb25zdHJ1Y3Rvcihpbm5lckNvbmZpZykge1xyXG4gICAgdGhpcy5pbm5lckNvbmZpZyA9IGlubmVyQ29uZmlnO1xyXG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLmlubmVyQ29uZmlnID8ge30gOiBDb25maWdEZWZhdWx0cy5kZWZhdWx0cygpO1xyXG4gICAgdGhpcy5jaGFuZ2VkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZShpZGVudGlmaWVyKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoaWRlbnRpZmllcikgIT09IG51bGwgJiYgdGhpcy52YWx1ZXNbaWRlbnRpZmllcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaWRlbnRpZmllcl07XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbm5lckNvbmZpZyAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbm5lckNvbmZpZy5nZXRWYWx1ZShpZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIHRocm93IEVycm9yKCdDb25maWcgbm90IGZvdW5kOiAnICsgaWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZShpZGVudGlmaWVyLCB2YWx1ZSkge1xyXG4gICAgdGhpcy52YWx1ZXNbaWRlbnRpZmllcl0gPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzOyAvL2ZsdWVudCBBUElcclxuICB9XHJcblxyXG4gIG9uTG9jYWxlQ2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgaWYgKHRoaXMuaW5uZXJDb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5pbm5lckNvbmZpZy5vbkxvY2FsZUNoYW5nZWQoY2FsbGJhY2spO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGlkID0gKytWYWxpZGF0aW9uQ29uZmlnLnVuaXF1ZUxpc3RlbmVySWQ7XHJcbiAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXJzLnNldChpZCwgY2FsbGJhY2spO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXJzLmRlbGV0ZShpZCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZXBlbmRlbmNpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnZGVwZW5kZW5jaWVzJyk7XHJcbiAgfVxyXG5cclxuICBzZXRIdHRwU2VydmljZShodHRwT3B0cykge1xyXG4gICAgQ29uZmlnLmh0dHBPcHRzID0gaHR0cE9wdHM7XHJcbiAgfVxyXG5cclxuICByb3V0ZXJBdXRoU3RlcChvcHRzKSB7XHJcbiAgICBDb25maWcucm91dGVyQXV0aFN0ZXBPcHRzID0gb3B0cztcclxuICB9XHJcblxyXG4gIHVzZUxvY2FsZShsb2NhbGVJZGVudGlmaWVyKSB7XHJcbiAgICB0aGlzLnNldFZhbHVlKCdsb2NhbGUnLCBsb2NhbGVJZGVudGlmaWVyKTtcclxuICAgIHZhciBjYWxsYmFja3MgPSBBcnJheS5mcm9tKHRoaXMuY2hhbmdlZEhhbmRsZXJzLnZhbHVlcygpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBsb2NhbGUoKSB7XHJcbiAgICByZXR1cm4gTG9jYWxlLlJlcG9zaXRvcnlcclxuICAgICAgLmxvYWQodGhpcy5nZXRWYWx1ZSgnbG9jYWxlJyksIHRoaXMuZ2V0VmFsdWUoJ2xvY2FsZVJlc291cmNlcycpKTtcclxuICB9XHJcbn1cclxuXHJcbkNvbmZpZy51bmlxdWVMaXN0ZW5lcklkID0gMDtcclxuIl19