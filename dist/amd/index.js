define(['exports', './config', './utils/table-validation-view-strategy', './utils/timespan', './utils/base-model'], function (exports, _config, _utilsTableValidationViewStrategy, _utilsTimespan, _utilsBaseModel) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  exports.TableValidationViewStrategy = _utilsTableValidationViewStrategy.TableValidationViewStrategy;
  exports.Timespan = _utilsTimespan.Timespan;
  exports.BaseModel = _utilsBaseModel.BaseModel;

  function configure(aurelia, configCallback) {
    var config = new _config.Config();

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O1VBRVEsMkJBQTJCLHFDQUEzQiwyQkFBMkI7VUFDM0IsUUFBUSxrQkFBUixRQUFRO1VBQ1IsU0FBUyxtQkFBVCxTQUFTOztBQUVWLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUU7QUFDakQsUUFBTSxNQUFNLEdBQUcsWUFQVCxNQUFNLEVBT2UsQ0FBQzs7QUFFNUIsV0FBTyxDQUFDLGVBQWUsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQ25FLFdBQU8sQ0FBQyxlQUFlLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNuRSxXQUFPLENBQUMsZUFBZSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDM0UsV0FBTyxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzdELFdBQU8sQ0FBQyxlQUFlLENBQUMsNkNBQTZDLENBQUMsQ0FBQztBQUN2RSxXQUFPLENBQUMsZUFBZSxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDdEQsV0FBTyxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztBQUUxRCxRQUFHLGNBQWMsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEFBQUMsS0FBSyxVQUFVLEVBQ3hFO0FBQ0Usb0JBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN4Qjs7QUFFRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUN4QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQge1RhYmxlVmFsaWRhdGlvblZpZXdTdHJhdGVneX0gZnJvbSAnLi91dGlscy90YWJsZS12YWxpZGF0aW9uLXZpZXctc3RyYXRlZ3knXHJcbmV4cG9ydCB7VGltZXNwYW59IGZyb20gJy4vdXRpbHMvdGltZXNwYW4nXHJcbmV4cG9ydCB7QmFzZU1vZGVsfSBmcm9tICcuL3V0aWxzL2Jhc2UtbW9kZWwnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEsIGNvbmZpZ0NhbGxiYWNrKSB7XHJcbiAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZygpO1xyXG5cclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvdGltZXBpY2tlci90aW1lcGlja2VyJyk7XHJcbiAgYXVyZWxpYS5nbG9iYWxSZXNvdXJjZXMoJy4vY3VzdG9tLWVsZW1lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlcicpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlcicpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1lbGVtZW50cy9zZWxlY3QyL3NlbGVjdDInKTtcclxuICBhdXJlbGlhLmdsb2JhbFJlc291cmNlcygnLi9jdXN0b20tZWxlbWVudHMvc2VsZWN0Mi1hamF4L3NlbGVjdDItYWpheCcpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL2N1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZScpO1xyXG4gIGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKCcuL3ZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQnKTtcclxuXHJcbiAgaWYoY29uZmlnQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YoY29uZmlnQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKVxyXG4gIHtcclxuICAgIGNvbmZpZ0NhbGxiYWNrKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLmxvY2FsZSgpO1xyXG59XHJcbiJdfQ==