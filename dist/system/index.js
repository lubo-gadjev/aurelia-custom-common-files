System.register(['./config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (_export) {
  'use strict';

  var Config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    var config = new Config();

    aurelia.globalResources('./custom-elements/timepicker/timepicker');
    aurelia.globalResources('./custom-elements/datepicker/datepicker');
    aurelia.globalResources('./custom-elements/datetimepicker/datetimepicker');
    aurelia.globalResources('./custom-elements/select2/select2');
    aurelia.globalResources('./custom-elements/select2-ajax/select2-ajax');
    aurelia.globalResources('./custom-attributes/enable');
    aurelia.globalResources('./value-converters/date-format');

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(config);
    }

    return config.locale();
  }

  return {
    setters: [function (_config) {
      Config = _config.Config;
    }, function (_utilsTableValidationViewStrategy) {
      _export('TableValidationViewStrategy', _utilsTableValidationViewStrategy.TableValidationViewStrategy);
    }, function (_utilsTimespan) {
      _export('Timespan', _utilsTimespan.Timespan);
    }, function (_utilsBaseModel) {
      _export('BaseModel', _utilsBaseModel.BaseModel);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFO0FBQ2pELFFBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7O0FBRTVCLFdBQU8sQ0FBQyxlQUFlLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNuRSxXQUFPLENBQUMsZUFBZSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDbkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBQzNFLFdBQU8sQ0FBQyxlQUFlLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUM3RCxXQUFPLENBQUMsZUFBZSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDdkUsV0FBTyxDQUFDLGVBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ3RELFdBQU8sQ0FBQyxlQUFlLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7QUFFMUQsUUFBRyxjQUFjLEtBQUssU0FBUyxJQUFJLE9BQU8sY0FBYyxBQUFDLEtBQUssVUFBVSxFQUN4RTtBQUNFLG9CQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDeEI7O0FBRUQsV0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDeEI7Ozs7dUJBdkJPLE1BQU07OytFQUVOLDJCQUEyQjs7eUNBQzNCLFFBQVE7OzJDQUNSLFNBQVMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmZpZ30gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IHtUYWJsZVZhbGlkYXRpb25WaWV3U3RyYXRlZ3l9IGZyb20gJy4vdXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5J1xyXG5leHBvcnQge1RpbWVzcGFufSBmcm9tICcuL3V0aWxzL3RpbWVzcGFuJ1xyXG5leHBvcnQge0Jhc2VNb2RlbH0gZnJvbSAnLi91dGlscy9iYXNlLW1vZGVsJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhLCBjb25maWdDYWxsYmFjaykge1xyXG4gIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWcoKTtcclxuXHJcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3RpbWVwaWNrZXIvdGltZXBpY2tlcicpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRlcGlja2VyL2RhdGVwaWNrZXInKTtcclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXInKTtcclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvc2VsZWN0Mi9zZWxlY3QyJyk7XHJcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL3NlbGVjdDItYWpheC9zZWxlY3QyLWFqYXgnKTtcclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tYXR0cmlidXRlcy9lbmFibGUnKTtcclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0Jyk7XHJcblxyXG4gIGlmKGNvbmZpZ0NhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mKGNvbmZpZ0NhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJylcclxuICB7XHJcbiAgICBjb25maWdDYWxsYmFjayhjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5sb2NhbGUoKTtcclxufVxyXG4iXX0=