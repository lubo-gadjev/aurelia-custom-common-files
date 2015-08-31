define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Locale = (function () {
    function Locale(defaults, data) {
      _classCallCheck(this, Locale);

      this.defaults = defaults;
      this.currentLocale = data;
    }

    Locale.prototype.getValueFor = function getValueFor(identifier, category) {
      if (this.currentLocale && this.currentLocale[category]) {
        var currentLocaleSetting = this.currentLocale[category][identifier];
        if (currentLocaleSetting !== undefined && currentLocaleSetting !== null) return currentLocaleSetting;
      }
      if (this.defaults[category]) {
        var defaultSetting = this.defaults[category][identifier];
        if (defaultSetting !== undefined && defaultSetting !== null) return defaultSetting;
      }
      throw 'validation: I18N: Could not find: ' + identifier + ' in category: ' + category;
    };

    Locale.prototype.setting = function setting(settingIdentifier) {
      return this.getValueFor(settingIdentifier, 'settings');
    };

    Locale.prototype.translate = function translate(translationIdentifier, newValue, threshold) {
      var translation = this.getValueFor(translationIdentifier, 'messages');
      if (typeof translation === 'function') {
        return translation(newValue, threshold);
      }
      if (typeof translation === 'string') {
        return translation;
      }
      throw 'Validation message for ' + translationIdentifier + 'was in an unsupported format';
    };

    return Locale;
  })();

  exports.Locale = Locale;

  var LocaleRepository = (function () {
    function LocaleRepository() {
      _classCallCheck(this, LocaleRepository);

      this['default'] = null;
      this.instances = new Map();
      this.defaults = {
        settings: {},
        messages: {}
      };
    }

    LocaleRepository.prototype.load = function load(localeIdentifier, basePath) {
      var _this = this;

      if (!basePath) basePath = 'aurelia-custom-app-common-files/resources/';

      return new Promise(function (resolve, reject) {
        if (_this.instances.has(localeIdentifier)) {
          var locale = _this.instances.get(localeIdentifier);
          resolve(locale);
        } else {
          System['import'](basePath + localeIdentifier).then(function (resource) {
            var locale = _this.addLocale(localeIdentifier, resource.data);
            resolve(locale);
          });
        }
      });
    };

    LocaleRepository.prototype.addLocale = function addLocale(localeIdentifier, data) {
      var instance = new Locale(this.defaults, data);
      this.instances.set(localeIdentifier, instance);
      if (this['default'] === null) this['default'] = instance;
      return instance;
    };

    return LocaleRepository;
  })();

  Locale.Repository = new LocaleRepository();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O01BR2EsTUFBTTtBQUNOLGFBREEsTUFBTSxDQUNMLFFBQVEsRUFBRSxJQUFJLEVBQzFCOzRCQUZXLE1BQU07O0FBR2YsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsVUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDM0I7O0FBTFUsVUFBTSxXQU9qQixXQUFXLEdBQUEscUJBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUNoQyxVQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN0RCxZQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEUsWUFBSSxvQkFBb0IsS0FBSyxTQUFTLElBQUksb0JBQW9CLEtBQUssSUFBSSxFQUNyRSxPQUFPLG9CQUFvQixDQUFDO09BQy9CO0FBQ0QsVUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzNCLFlBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekQsWUFBSSxjQUFjLEtBQUssU0FBUyxJQUFJLGNBQWMsS0FBSyxJQUFJLEVBQ3pELE9BQU8sY0FBYyxDQUFDO09BQ3pCO0FBQ0QsWUFBTSxvQ0FBb0MsR0FBRyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO0tBQ3ZGOztBQW5CVSxVQUFNLFdBcUJqQixPQUFPLEdBQUEsaUJBQUMsaUJBQWlCLEVBQUU7QUFDekIsYUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3hEOztBQXZCVSxVQUFNLFdBeUJqQixTQUFTLEdBQUEsbUJBQUMscUJBQXFCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtBQUNwRCxVQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3RFLFVBQUksT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ3JDLGVBQU8sV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztPQUN6QztBQUNELFVBQUksT0FBTyxXQUFXLEtBQUssUUFBUSxFQUFFO0FBQ25DLGVBQU8sV0FBVyxDQUFDO09BQ3BCO0FBQ0QsWUFBTSx5QkFBeUIsR0FBRyxxQkFBcUIsR0FBRyw4QkFBOEIsQ0FBQztLQUMxRjs7V0FsQ1UsTUFBTTs7Ozs7TUFxQ2IsZ0JBQWdCO0FBQ1QsYUFEUCxnQkFBZ0IsR0FDUDs0QkFEVCxnQkFBZ0I7O0FBRWxCLFVBQUksV0FBUSxHQUFHLElBQUksQ0FBQztBQUNwQixVQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDM0IsVUFBSSxDQUFDLFFBQVEsR0FBRztBQUNkLGdCQUFRLEVBQUUsRUFBRTtBQUNaLGdCQUFRLEVBQUUsRUFBRTtPQUNiLENBQUM7S0FDSDs7QUFSRyxvQkFBZ0IsV0FVcEIsSUFBSSxHQUFBLGNBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFOzs7QUFDL0IsVUFBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsNENBQTRDLENBQUM7O0FBRXRFLGFBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLFlBQUcsTUFBSyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7QUFDdkMsY0FBSSxNQUFNLEdBQUcsTUFBSyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEQsaUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQixNQUFNO0FBQ0wsZ0JBQU0sVUFBTyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUM1RCxnQkFBSSxNQUFNLEdBQUcsTUFBSyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdELG1CQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDakIsQ0FBQyxDQUFDO1NBQ0o7T0FDRixDQUFDLENBQUM7S0FDSjs7QUF4Qkcsb0JBQWdCLFdBMEJwQixTQUFTLEdBQUEsbUJBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUNoQztBQUNFLFVBQUksUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0MsVUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0MsVUFBRyxJQUFJLFdBQVEsS0FBSyxJQUFJLEVBQ3RCLElBQUksV0FBUSxHQUFHLFFBQVEsQ0FBQztBQUMxQixhQUFPLFFBQVEsQ0FBQztLQUNqQjs7V0FqQ0csZ0JBQWdCOzs7QUFvQ3RCLFFBQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIiwiZmlsZSI6ImxvY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA2LzE3LzE1LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvY2FsZXtcclxuICBjb25zdHJ1Y3RvcihkZWZhdWx0cywgZGF0YSlcclxuICB7XHJcbiAgICB0aGlzLmRlZmF1bHRzID0gZGVmYXVsdHM7XHJcbiAgICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVGb3IoaWRlbnRpZmllciwgY2F0ZWdvcnkpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRMb2NhbGUgJiYgdGhpcy5jdXJyZW50TG9jYWxlW2NhdGVnb3J5XSkge1xyXG4gICAgICB2YXIgY3VycmVudExvY2FsZVNldHRpbmcgPSB0aGlzLmN1cnJlbnRMb2NhbGVbY2F0ZWdvcnldW2lkZW50aWZpZXJdO1xyXG4gICAgICBpZiAoY3VycmVudExvY2FsZVNldHRpbmcgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50TG9jYWxlU2V0dGluZyAhPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gY3VycmVudExvY2FsZVNldHRpbmc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0c1tjYXRlZ29yeV0pIHtcclxuICAgICAgdmFyIGRlZmF1bHRTZXR0aW5nID0gdGhpcy5kZWZhdWx0c1tjYXRlZ29yeV1baWRlbnRpZmllcl07XHJcbiAgICAgIGlmIChkZWZhdWx0U2V0dGluZyAhPT0gdW5kZWZpbmVkICYmIGRlZmF1bHRTZXR0aW5nICE9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZztcclxuICAgIH1cclxuICAgIHRocm93ICd2YWxpZGF0aW9uOiBJMThOOiBDb3VsZCBub3QgZmluZDogJyArIGlkZW50aWZpZXIgKyAnIGluIGNhdGVnb3J5OiAnICsgY2F0ZWdvcnk7XHJcbiAgfVxyXG5cclxuICBzZXR0aW5nKHNldHRpbmdJZGVudGlmaWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZUZvcihzZXR0aW5nSWRlbnRpZmllciwgJ3NldHRpbmdzJyk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGUodHJhbnNsYXRpb25JZGVudGlmaWVyLCBuZXdWYWx1ZSwgdGhyZXNob2xkKSB7XHJcbiAgICB2YXIgdHJhbnNsYXRpb24gPSB0aGlzLmdldFZhbHVlRm9yKHRyYW5zbGF0aW9uSWRlbnRpZmllciwgJ21lc3NhZ2VzJyk7XHJcbiAgICBpZiAodHlwZW9mIHRyYW5zbGF0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbihuZXdWYWx1ZSwgdGhyZXNob2xkKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdHJhbnNsYXRpb24gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcclxuICAgIH1cclxuICAgIHRocm93ICdWYWxpZGF0aW9uIG1lc3NhZ2UgZm9yICcgKyB0cmFuc2xhdGlvbklkZW50aWZpZXIgKyAnd2FzIGluIGFuIHVuc3VwcG9ydGVkIGZvcm1hdCc7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBMb2NhbGVSZXBvc2l0b3J5ICB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuZGVmYXVsdCA9IG51bGw7XHJcbiAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XHJcbiAgICAgIHNldHRpbmdzOiB7fSxcclxuICAgICAgbWVzc2FnZXM6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbG9hZChsb2NhbGVJZGVudGlmaWVyLCBiYXNlUGF0aCkge1xyXG4gICAgaWYoIWJhc2VQYXRoKSBiYXNlUGF0aCA9ICdhdXJlbGlhLWN1c3RvbS1hcHAtY29tbW9uLWZpbGVzL3Jlc291cmNlcy8nO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuaW5zdGFuY2VzLmhhcyhsb2NhbGVJZGVudGlmaWVyKSkge1xyXG4gICAgICAgIGxldCBsb2NhbGUgPSB0aGlzLmluc3RhbmNlcy5nZXQobG9jYWxlSWRlbnRpZmllcik7XHJcbiAgICAgICAgcmVzb2x2ZShsb2NhbGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFN5c3RlbS5pbXBvcnQoYmFzZVBhdGggKyBsb2NhbGVJZGVudGlmaWVyKS50aGVuKChyZXNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGxvY2FsZSA9IHRoaXMuYWRkTG9jYWxlKGxvY2FsZUlkZW50aWZpZXIsIHJlc291cmNlLmRhdGEpO1xyXG4gICAgICAgICAgcmVzb2x2ZShsb2NhbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZExvY2FsZShsb2NhbGVJZGVudGlmaWVyLCBkYXRhKVxyXG4gIHtcclxuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBMb2NhbGUodGhpcy5kZWZhdWx0cywgZGF0YSk7XHJcbiAgICB0aGlzLmluc3RhbmNlcy5zZXQobG9jYWxlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xyXG4gICAgaWYodGhpcy5kZWZhdWx0ID09PSBudWxsKVxyXG4gICAgICB0aGlzLmRlZmF1bHQgPSBpbnN0YW5jZTtcclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuICB9XHJcbn1cclxuXHJcbkxvY2FsZS5SZXBvc2l0b3J5ID0gbmV3IExvY2FsZVJlcG9zaXRvcnkoKTtcclxuIl19