define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Enable = (function () {
    function Enable(element) {
      _classCallCheck(this, _Enable);

      this.element = element;
    }

    Enable.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.element.disabled = '';
      } else {
        this.element.disabled = 'disabled';
      }
    };

    var _Enable = Enable;
    Enable = _aureliaFramework.inject(Element)(Enable) || Enable;
    Enable = _aureliaFramework.customAttribute('enable')(Enable) || Enable;
    return Enable;
  })();

  exports.Enable = Enable;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1hdHRyaWJ1dGVzL2VuYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O01BT2EsTUFBTTtBQUNOLGFBREEsTUFBTSxDQUNMLE9BQU8sRUFBRTs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztBQUhVLFVBQU0sV0FLakIsWUFBWSxHQUFBLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixVQUFJLFFBQVEsRUFBRTtBQUNaLFlBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtPQUMzQixNQUFNO0FBQ0wsWUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFBO09BQ25DO0tBQ0Y7O2tCQVhVLE1BQU07QUFBTixVQUFNLEdBRGxCLGtCQUhPLE1BQU0sQ0FHTixPQUFPLENBQUMsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLFVBQU0sR0FGbEIsa0JBRmUsZUFBZSxDQUVkLFFBQVEsQ0FBQyxDQUViLE1BQU0sS0FBTixNQUFNO1dBQU4sTUFBTSIsImZpbGUiOiJjdXN0b20tYXR0cmlidXRlcy9lbmFibGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNC8xNS5cclxuICovXHJcbmltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ2VuYWJsZScpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEVuYWJsZSB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICcnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAnZGlzYWJsZWQnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==