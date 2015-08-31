define(['exports', 'moment'], function (exports, _moment) {
  'use strict';

  exports.__esModule = true;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _moment2 = _interopRequireDefault(_moment);

  var DateFormatValueConverter = (function () {
    function DateFormatValueConverter() {
      _classCallCheck(this, DateFormatValueConverter);
    }

    DateFormatValueConverter.prototype.toView = function toView(value, format) {
      if (format) {
        return _moment2['default'](value).format(format);
      }
      return _moment2['default'](value).format('LL');
    };

    return DateFormatValueConverter;
  })();

  exports.DateFormatValueConverter = DateFormatValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFFYSx3QkFBd0I7YUFBeEIsd0JBQXdCOzRCQUF4Qix3QkFBd0I7OztBQUF4Qiw0QkFBd0IsV0FDbkMsTUFBTSxHQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsVUFBSSxNQUFNLEVBQUU7QUFDVixlQUFPLG9CQUFPLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNyQztBQUNELGFBQU8sb0JBQU8sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztXQU5VLHdCQUF3QiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHZhbHVlLCBmb3JtYXQpIHtcclxuICAgIGlmIChmb3JtYXQpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoJ0xMJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==