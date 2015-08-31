define(['exports', 'aurelia-validation/validation/validate-custom-attribute-view-strategy'], function (exports, _aureliaValidationValidationValidateCustomAttributeViewStrategy) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var TableValidationViewStrategy = (function (_ValidateCustomAttributeViewStrategyBase) {
    _inherits(TableValidationViewStrategy, _ValidateCustomAttributeViewStrategyBase);

    function TableValidationViewStrategy() {
      _classCallCheck(this, TableValidationViewStrategy);

      _ValidateCustomAttributeViewStrategyBase.call(this);
      this.helpBlockClass = 'aurelia-validation-message';
    }

    TableValidationViewStrategy.prototype.searchFormGroup = function searchFormGroup(currentElement, currentDepth) {
      if (currentDepth === 5) {
        return null;
      }
      if (currentElement.classList && currentElement.classList.contains('form-group')) {
        return currentElement;
      }
      return this.searchFormGroup(currentElement.parentNode, 1 + currentDepth);
    };

    TableValidationViewStrategy.prototype.appendMessageToElement = function appendMessageToElement(element, validationProperty) {
      var helpBlock = element.nextSibling;
      if (helpBlock) {
        if (!helpBlock.classList) {
          helpBlock = null;
        } else if (!helpBlock.classList.contains(this.helpBlockClass)) {
          helpBlock = null;
        }
      }

      if (!helpBlock) {
        helpBlock = document.createElement("p");
        helpBlock.classList.add('help-block');
        helpBlock.classList.add(this.helpBlockClass);

        if (element.nextSibling) {
          element.parentNode.insertBefore(helpBlock, element.nextSibling);
        } else {
          element.parentNode.appendChild(helpBlock);
        }
      }
      if (validationProperty) {
        helpBlock.textContent = validationProperty.message;
        if (validationProperty.isValid === true) {
          helpBlock.style.display = 'none';
        } else {
          helpBlock.style.display = 'block';
        }
      } else {
        helpBlock.style.display = 'none';
        helpBlock.textContent = '';
      }
    };

    TableValidationViewStrategy.prototype.appendUIVisuals = function appendUIVisuals(validationProperty, currentElement) {
      var formGroup = this.searchFormGroup(currentElement, 0);
      if (formGroup) {
        if (validationProperty && validationProperty.isDirty) {
          if (validationProperty.isValid) {
            formGroup.classList.remove('has-warning');
            formGroup.classList.add('has-success');
          } else {
            formGroup.classList.remove('has-success');
            formGroup.classList.add('has-warning');
          }
        } else {
          formGroup.classList.remove('has-warning');
          formGroup.classList.remove('has-success');
        }

        this.appendMessageToElement(currentElement, validationProperty);
      }
    };

    TableValidationViewStrategy.prototype.prepareElement = function prepareElement(validationProperty, element) {
      this.appendUIVisuals(null, element);
    };

    TableValidationViewStrategy.prototype.updateElement = function updateElement(validationProperty, element) {
      this.appendUIVisuals(validationProperty, element);
    };

    return TableValidationViewStrategy;
  })(_aureliaValidationValidationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase);

  exports.TableValidationViewStrategy = TableValidationViewStrategy;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7TUFPYSwyQkFBMkI7Y0FBM0IsMkJBQTJCOztBQUMzQixhQURBLDJCQUEyQixHQUN4Qjs0QkFESCwyQkFBMkI7O0FBRXBDLHlEQUFPLENBQUM7QUFDUixVQUFJLENBQUMsY0FBYyxHQUFHLDRCQUE0QixDQUFDO0tBQ3BEOztBQUpVLCtCQUEyQixXQU10QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxVQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsZUFBTyxJQUFJLENBQUM7T0FDYjtBQUNELFVBQUksY0FBYyxDQUFDLFNBQVMsSUFBSSxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUMvRSxlQUFPLGNBQWMsQ0FBQztPQUN2QjtBQUNELGFBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztLQUMxRTs7QUFkVSwrQkFBMkIsV0FnQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLFVBQUksU0FBUyxFQUFFO0FBQ2IsWUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7QUFDeEIsbUJBQVMsR0FBRyxJQUFJLENBQUM7U0FDbEIsTUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0FBQzNELG1CQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO09BQ0Y7O0FBRUQsVUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLGlCQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxpQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsaUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFN0MsWUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO0FBQ3ZCLGlCQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFLE1BQ0k7QUFDSCxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7T0FDRjtBQUNELFVBQUksa0JBQWtCLEVBQUU7QUFDdEIsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0FBQ25ELFlBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2QyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ2xDLE1BQU07QUFDTCxtQkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ25DO09BQ0YsTUFBTTtBQUNMLGlCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMsaUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO09BQzVCO0tBQ0Y7O0FBbERVLCtCQUEyQixXQW9EdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxVQUFJLFNBQVMsRUFBRTtBQUNiLFlBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQ3BELGNBQUksa0JBQWtCLENBQUMsT0FBTyxFQUFFO0FBQzlCLHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEMsTUFDSTtBQUNILHFCQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDeEM7U0FDRixNQUNJO0FBQ0gsbUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLG1CQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQzs7QUFFRCxZQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7T0FDakU7S0FDRjs7QUF4RVUsK0JBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQzFDLFVBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDOztBQTVFVSwrQkFBMkIsV0E4RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDekMsVUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNuRDs7V0FoRlUsMkJBQTJCO3FFQUZoQyx1Q0FBdUMiLCJmaWxlIjoidXRpbHMvdGFibGUtdmFsaWRhdGlvbi12aWV3LXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbW9zaGVuc2t5IG9uIDUvMjQvMTUuXHJcbiAqL1xyXG4vL2ltcG9ydCB7VmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3l9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbic7XHJcbi8vIFRPRE86IG1vdmUgdG8gdXBwZXIgaW1wb3J0LCBiZWNhdXNlIGl0IHNob3VsZCBiZSBmaXhlZCBpbiBuZWFyIGNvbW1pdFxyXG5pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5QmFzZX0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uL3ZhbGlkYXRpb24vdmFsaWRhdGUtY3VzdG9tLWF0dHJpYnV0ZS12aWV3LXN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVZhbGlkYXRpb25WaWV3U3RyYXRlZ3kgZXh0ZW5kcyBWYWxpZGF0ZUN1c3RvbUF0dHJpYnV0ZVZpZXdTdHJhdGVneUJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaGVscEJsb2NrQ2xhc3MgPSAnYXVyZWxpYS12YWxpZGF0aW9uLW1lc3NhZ2UnO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RGVwdGgpIHtcclxuICAgIGlmIChjdXJyZW50RGVwdGggPT09IDUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9ybS1ncm91cCcpKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudC5wYXJlbnROb2RlLCAxICsgY3VycmVudERlcHRoKTtcclxuICB9XHJcblxyXG4gIGFwcGVuZE1lc3NhZ2VUb0VsZW1lbnQoZWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KSB7XHJcbiAgICB2YXIgaGVscEJsb2NrID0gZWxlbWVudC5uZXh0U2libGluZztcclxuICAgIGlmIChoZWxwQmxvY2spIHtcclxuICAgICAgaWYgKCFoZWxwQmxvY2suY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgaGVscEJsb2NrID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmhlbHBCbG9ja0NsYXNzKSkge1xyXG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhlbHBCbG9jaykge1xyXG4gICAgICBoZWxwQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hlbHAtYmxvY2snKTtcclxuICAgICAgaGVscEJsb2NrLmNsYXNzTGlzdC5hZGQodGhpcy5oZWxwQmxvY2tDbGFzcyk7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaGVscEJsb2NrLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoaGVscEJsb2NrKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSkge1xyXG4gICAgICBoZWxwQmxvY2sudGV4dENvbnRlbnQgPSB2YWxpZGF0aW9uUHJvcGVydHkubWVzc2FnZTtcclxuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eS5pc1ZhbGlkID09PSB0cnVlKSB7XHJcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWxwQmxvY2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgaGVscEJsb2NrLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBjdXJyZW50RWxlbWVudCkge1xyXG4gICAgdmFyIGZvcm1Hcm91cCA9IHRoaXMuc2VhcmNoRm9ybUdyb3VwKGN1cnJlbnRFbGVtZW50LCAwKTtcclxuICAgIGlmIChmb3JtR3JvdXApIHtcclxuICAgICAgaWYgKHZhbGlkYXRpb25Qcm9wZXJ0eSAmJiB2YWxpZGF0aW9uUHJvcGVydHkuaXNEaXJ0eSkge1xyXG4gICAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCkge1xyXG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XHJcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdoYXMtd2FybmluZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXdhcm5pbmcnKTtcclxuICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXN1Y2Nlc3MnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHBlbmRNZXNzYWdlVG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LCB2YWxpZGF0aW9uUHJvcGVydHkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlcGFyZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyhudWxsLCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUVsZW1lbnQodmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KSB7XHJcbiAgICB0aGlzLmFwcGVuZFVJVmlzdWFscyh2YWxpZGF0aW9uUHJvcGVydHksIGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=