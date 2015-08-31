define(['exports'], function (exports) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Timespan = (function () {
    function Timespan(timespan) {
      _classCallCheck(this, Timespan);

      var hours = 0;
      var minutes = 0;
      if (typeof timespan === 'string') {
        var fragments = timespan.split(':');
        if (fragments.length >= 2) {
          hours = parseInt(fragments[0], 10);
          minutes = parseInt(fragments[1], 10);

          if (hours < 0 || hours > 23) {
            hours = 0;
          }

          if (minutes < 0 || minutes > 59) {
            minutes = 0;
          }
        }
      }

      this.hours = hours;
      this.minutes = minutes;
    }

    Timespan.prototype.toString = function toString() {
      var result = '';
      if (this.hours < 10) {
        result += '0';
      }

      result += this.hours + ':';

      if (this.minutes < 10) {
        result += '0';
      }

      result += this.minutes;

      return result;
    };

    Timespan.prototype.equals = function equals(other) {
      if (other === undefined || other === null) {
        return false;
      }

      return this.hours === other.hours && this.minutes === other.minutes;
    };

    return Timespan;
  })();

  exports.Timespan = Timespan;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RpbWVzcGFuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7TUFBYSxRQUFRO0FBQ1IsYUFEQSxRQUFRLENBQ1AsUUFBUSxFQUFFOzRCQURYLFFBQVE7O0FBRWpCLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLFVBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixVQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUNoQyxZQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLFlBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDekIsZUFBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsaUJBQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVyQyxjQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtBQUMzQixpQkFBSyxHQUFHLENBQUMsQ0FBQztXQUNYOztBQUVELGNBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQy9CLG1CQUFPLEdBQUcsQ0FBQyxDQUFDO1dBQ2I7U0FDRjtPQUNGOztBQUVELFVBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztBQXRCVSxZQUFRLFdBd0JuQixRQUFRLEdBQUEsb0JBQUc7QUFDVCxVQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDaEIsVUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtBQUNuQixjQUFNLElBQUksR0FBRyxDQUFDO09BQ2Y7O0FBRUQsWUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOztBQUUzQixVQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFO0FBQ3JCLGNBQU0sSUFBSSxHQUFHLENBQUM7T0FDZjs7QUFFRCxZQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFdkIsYUFBTyxNQUFNLENBQUM7S0FDZjs7QUF2Q1UsWUFBUSxXQXlDbkIsTUFBTSxHQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLFVBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3pDLGVBQU8sS0FBSyxDQUFDO09BQ2Q7O0FBRUQsYUFBUSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFFO0tBQ3ZFOztXQS9DVSxRQUFRIiwiZmlsZSI6InV0aWxzL3RpbWVzcGFuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbWVzcGFuIHtcclxuICBjb25zdHJ1Y3Rvcih0aW1lc3Bhbikge1xyXG4gICAgdmFyIGhvdXJzID0gMDtcclxuICAgIHZhciBtaW51dGVzID0gMDtcclxuICAgIGlmICh0eXBlb2YgdGltZXNwYW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhciBmcmFnbWVudHMgPSB0aW1lc3Bhbi5zcGxpdCgnOicpO1xyXG4gICAgICBpZiAoZnJhZ21lbnRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgaG91cnMgPSBwYXJzZUludChmcmFnbWVudHNbMF0sIDEwKTtcclxuICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQoZnJhZ21lbnRzWzFdLCAxMCk7XHJcblxyXG4gICAgICAgIGlmIChob3VycyA8IDAgfHwgaG91cnMgPiAyMykge1xyXG4gICAgICAgICAgaG91cnMgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1pbnV0ZXMgPCAwIHx8IG1pbnV0ZXMgPiA1OSkge1xyXG4gICAgICAgICAgbWludXRlcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xyXG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgaWYgKHRoaXMuaG91cnMgPCAxMCkge1xyXG4gICAgICByZXN1bHQgKz0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCArPSB0aGlzLmhvdXJzICsgJzonO1xyXG5cclxuICAgIGlmICh0aGlzLm1pbnV0ZXMgPCAxMCkge1xyXG4gICAgICByZXN1bHQgKz0gJzAnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCArPSB0aGlzLm1pbnV0ZXM7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGVxdWFscyhvdGhlcikge1xyXG4gICAgaWYgKG90aGVyID09PSB1bmRlZmluZWQgfHwgb3RoZXIgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAodGhpcy5ob3VycyA9PT0gb3RoZXIuaG91cnMgJiYgdGhpcy5taW51dGVzID09PSBvdGhlci5taW51dGVzKTtcclxuICB9XHJcbn1cclxuIl19