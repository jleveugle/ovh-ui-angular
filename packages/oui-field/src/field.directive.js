export default () => ({
    restrict: "A",
    require: "ngModel",
    link: (scope, elem, attrs, ctrl) => {
        scope.$watch(attrs.customValidation, (isValid) => {
            if (elem[0] && elem[0].setCustomValidity) { // HTML5 validation
                elem[0].setCustomValidity(isValid);
            }
            if (ctrl) { // AngularJS validation
                ctrl.$setValidity("customValidation", isValid);
            }
        });
    }
});
