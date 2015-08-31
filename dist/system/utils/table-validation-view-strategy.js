System.register(['aurelia-validation/validation/validate-custom-attribute-view-strategy'], function (_export) {
  'use strict';

  var ValidateCustomAttributeViewStrategyBase, TableValidationViewStrategy;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_aureliaValidationValidationValidateCustomAttributeViewStrategy) {
      ValidateCustomAttributeViewStrategyBase = _aureliaValidationValidationValidateCustomAttributeViewStrategy.ValidateCustomAttributeViewStrategyBase;
    }],
    execute: function () {
      TableValidationViewStrategy = (function (_ValidateCustomAttributeViewStrategyBase) {
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
      })(ValidateCustomAttributeViewStrategyBase);

      _export('TableValidationViewStrategy', TableValidationViewStrategy);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0NBT2EsMkJBQTJCOzs7Ozs7OztnSEFGaEMsdUNBQXVDOzs7QUFFbEMsaUNBQTJCO2tCQUEzQiwyQkFBMkI7O0FBQzNCLGlCQURBLDJCQUEyQixHQUN4QjtnQ0FESCwyQkFBMkI7O0FBRXBDLDZEQUFPLENBQUM7QUFDUixjQUFJLENBQUMsY0FBYyxHQUFHLDRCQUE0QixDQUFDO1NBQ3BEOztBQUpVLG1DQUEyQixXQU10QyxlQUFlLEdBQUEseUJBQUMsY0FBYyxFQUFFLFlBQVksRUFBRTtBQUM1QyxjQUFJLFlBQVksS0FBSyxDQUFDLEVBQUU7QUFDdEIsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7QUFDRCxjQUFJLGNBQWMsQ0FBQyxTQUFTLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7QUFDL0UsbUJBQU8sY0FBYyxDQUFDO1dBQ3ZCO0FBQ0QsaUJBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztTQUMxRTs7QUFkVSxtQ0FBMkIsV0FnQnRDLHNCQUFzQixHQUFBLGdDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLGNBQUksU0FBUyxFQUFFO0FBQ2IsZ0JBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO0FBQ3hCLHVCQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ2xCLE1BQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUMzRCx1QkFBUyxHQUFHLElBQUksQ0FBQzthQUNsQjtXQUNGOztBQUVELGNBQUksQ0FBQyxTQUFTLEVBQUU7QUFDZCxxQkFBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMscUJBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RDLHFCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRTdDLGdCQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDdkIscUJBQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakUsTUFDSTtBQUNILHFCQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztXQUNGO0FBQ0QsY0FBSSxrQkFBa0IsRUFBRTtBQUN0QixxQkFBUyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7QUFDbkQsZ0JBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtBQUN2Qyx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2xDLE1BQU07QUFDTCx1QkFBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ25DO1dBQ0YsTUFBTTtBQUNMLHFCQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDakMscUJBQVMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1dBQzVCO1NBQ0Y7O0FBbERVLG1DQUEyQixXQW9EdEMsZUFBZSxHQUFBLHlCQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUNsRCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxjQUFJLFNBQVMsRUFBRTtBQUNiLGdCQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtBQUNwRCxrQkFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDOUIseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QyxNQUNJO0FBQ0gseUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLHlCQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztlQUN4QzthQUNGLE1BQ0k7QUFDSCx1QkFBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDMUMsdUJBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzNDOztBQUVELGdCQUFJLENBQUMsc0JBQXNCLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7V0FDakU7U0FDRjs7QUF4RVUsbUNBQTJCLFdBMEV0QyxjQUFjLEdBQUEsd0JBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQzFDLGNBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDOztBQTVFVSxtQ0FBMkIsV0E4RXRDLGFBQWEsR0FBQSx1QkFBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUU7QUFDekMsY0FBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDs7ZUFoRlUsMkJBQTJCO1NBQVMsdUNBQXVDIiwiZmlsZSI6InV0aWxzL3RhYmxlLXZhbGlkYXRpb24tdmlldy1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IG1vc2hlbnNreSBvbiA1LzI0LzE1LlxyXG4gKi9cclxuLy9pbXBvcnQge1ZhbGlkYXRlQ3VzdG9tQXR0cmlidXRlVmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXZhbGlkYXRpb24nO1xyXG4vLyBUT0RPOiBtb3ZlIHRvIHVwcGVyIGltcG9ydCwgYmVjYXVzZSBpdCBzaG91bGQgYmUgZml4ZWQgaW4gbmVhciBjb21taXRcclxuaW1wb3J0IHtWYWxpZGF0ZUN1c3RvbUF0dHJpYnV0ZVZpZXdTdHJhdGVneUJhc2V9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGlvbi92YWxpZGF0aW9uL3ZhbGlkYXRlLWN1c3RvbS1hdHRyaWJ1dGUtdmlldy1zdHJhdGVneSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVWYWxpZGF0aW9uVmlld1N0cmF0ZWd5IGV4dGVuZHMgVmFsaWRhdGVDdXN0b21BdHRyaWJ1dGVWaWV3U3RyYXRlZ3lCYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmhlbHBCbG9ja0NsYXNzID0gJ2F1cmVsaWEtdmFsaWRhdGlvbi1tZXNzYWdlJztcclxuICB9XHJcblxyXG4gIHNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgY3VycmVudERlcHRoKSB7XHJcbiAgICBpZiAoY3VycmVudERlcHRoID09PSA1KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdCAmJiBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvcm0tZ3JvdXAnKSkge1xyXG4gICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zZWFyY2hGb3JtR3JvdXAoY3VycmVudEVsZW1lbnQucGFyZW50Tm9kZSwgMSArIGN1cnJlbnREZXB0aCk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRNZXNzYWdlVG9FbGVtZW50KGVsZW1lbnQsIHZhbGlkYXRpb25Qcm9wZXJ0eSkge1xyXG4gICAgdmFyIGhlbHBCbG9jayA9IGVsZW1lbnQubmV4dFNpYmxpbmc7XHJcbiAgICBpZiAoaGVscEJsb2NrKSB7XHJcbiAgICAgIGlmICghaGVscEJsb2NrLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGhlbHBCbG9jayA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAoIWhlbHBCbG9jay5jbGFzc0xpc3QuY29udGFpbnModGhpcy5oZWxwQmxvY2tDbGFzcykpIHtcclxuICAgICAgICBoZWxwQmxvY2sgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoZWxwQmxvY2spIHtcclxuICAgICAgaGVscEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XHJcbiAgICAgIGhlbHBCbG9jay5jbGFzc0xpc3QuYWRkKHRoaXMuaGVscEJsb2NrQ2xhc3MpO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGhlbHBCbG9jaywgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGhlbHBCbG9jayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkpIHtcclxuICAgICAgaGVscEJsb2NrLnRleHRDb250ZW50ID0gdmFsaWRhdGlvblByb3BlcnR5Lm1lc3NhZ2U7XHJcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkuaXNWYWxpZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlbHBCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVscEJsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGhlbHBCbG9jay50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kVUlWaXN1YWxzKHZhbGlkYXRpb25Qcm9wZXJ0eSwgY3VycmVudEVsZW1lbnQpIHtcclxuICAgIHZhciBmb3JtR3JvdXAgPSB0aGlzLnNlYXJjaEZvcm1Hcm91cChjdXJyZW50RWxlbWVudCwgMCk7XHJcbiAgICBpZiAoZm9ybUdyb3VwKSB7XHJcbiAgICAgIGlmICh2YWxpZGF0aW9uUHJvcGVydHkgJiYgdmFsaWRhdGlvblByb3BlcnR5LmlzRGlydHkpIHtcclxuICAgICAgICBpZiAodmFsaWRhdGlvblByb3BlcnR5LmlzVmFsaWQpIHtcclxuICAgICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtd2FybmluZycpO1xyXG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2hhcy1zdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zdWNjZXNzJyk7XHJcbiAgICAgICAgICBmb3JtR3JvdXAuY2xhc3NMaXN0LmFkZCgnaGFzLXdhcm5pbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy13YXJuaW5nJyk7XHJcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zdWNjZXNzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYXBwZW5kTWVzc2FnZVRvRWxlbWVudChjdXJyZW50RWxlbWVudCwgdmFsaWRhdGlvblByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXBhcmVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHMobnVsbCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVFbGVtZW50KHZhbGlkYXRpb25Qcm9wZXJ0eSwgZWxlbWVudCkge1xyXG4gICAgdGhpcy5hcHBlbmRVSVZpc3VhbHModmFsaWRhdGlvblByb3BlcnR5LCBlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIl19