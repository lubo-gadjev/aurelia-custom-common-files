define(["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var BaseModel = (function () {
    function BaseModel() {
      _classCallCheck(this, BaseModel);

      this.isInEditMode = false;
      this.validation = undefined;
      this._previousValues = {};
    }

    BaseModel.prototype.setEditMode = function setEditMode(edit) {
      this.isInEditMode = edit;

      if (edit) {
        this._previousValues = this.getOwnProperties();
      } else {
        this._previousValues = {};
      }
    };

    BaseModel.prototype.revertChanges = function revertChanges() {
      if (this.isInEditMode) {
        Object.assign(this, this._previousValues);
        this.setEditMode(false);
      }
    };

    BaseModel.prototype.getOwnProperties = function getOwnProperties() {
      var result = {};
      for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
          result[prop] = this[prop];
        }
      }

      delete result.isInEditMode;
      delete result.validation;
      delete result._previousValues;

      return result;
    };

    return BaseModel;
  })();

  exports.BaseModel = BaseModel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2Jhc2UtbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztNQUdhLFNBQVM7QUFDVCxhQURBLFNBQVMsR0FDTjs0QkFESCxTQUFTOztBQUVsQixVQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQixVQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUM1QixVQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztLQUMzQjs7QUFMVSxhQUFTLFdBT3BCLFdBQVcsR0FBQSxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7O0FBRXpCLFVBQUksSUFBSSxFQUFFO0FBQ1IsWUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztPQUNoRCxNQUFNO0FBQ0wsWUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7T0FDM0I7S0FDRjs7QUFmVSxhQUFTLFdBaUJwQixhQUFhLEdBQUEseUJBQUc7QUFDZCxVQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDckIsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLFlBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDekI7S0FDRjs7QUF0QlUsYUFBUyxXQXdCcEIsZ0JBQWdCLEdBQUEsNEJBQUc7QUFDakIsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFdBQUssSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ3JCLFlBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM3QixnQkFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtPQUNGOztBQUVELGFBQU8sTUFBTSxDQUFDLFlBQVksQ0FBQztBQUMzQixhQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDekIsYUFBTyxNQUFNLENBQUMsZUFBZSxDQUFDOztBQUU5QixhQUFPLE1BQU0sQ0FBQztLQUNmOztXQXJDVSxTQUFTIiwiZmlsZSI6InV0aWxzL2Jhc2UtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBtb3NoZW5za3kgb24gNS8yNS8xNS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pc0luRWRpdE1vZGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmFsaWRhdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0ge307XHJcbiAgfVxyXG5cclxuICBzZXRFZGl0TW9kZShlZGl0KSB7XHJcbiAgICB0aGlzLmlzSW5FZGl0TW9kZSA9IGVkaXQ7XHJcblxyXG4gICAgaWYgKGVkaXQpIHtcclxuICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZXMgPSB0aGlzLmdldE93blByb3BlcnRpZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWVzID0ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXZlcnRDaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuaXNJbkVkaXRNb2RlKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fcHJldmlvdXNWYWx1ZXMpXHJcbiAgICAgIHRoaXMuc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0T3duUHJvcGVydGllcygpIHtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGZvciAobGV0IHByb3AgaW4gdGhpcykge1xyXG4gICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICAgIHJlc3VsdFtwcm9wXSA9IHRoaXNbcHJvcF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUgcmVzdWx0LmlzSW5FZGl0TW9kZTtcclxuICAgIGRlbGV0ZSByZXN1bHQudmFsaWRhdGlvbjtcclxuICAgIGRlbGV0ZSByZXN1bHQuX3ByZXZpb3VzVmFsdWVzO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=