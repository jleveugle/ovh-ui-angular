import Field from "./field.component.js";
import FieldConfigurationProvider from "./field.provider.js";
import FieldDirective from "./field.directive.js";

angular.module("oui.field", [])
    .component("ouiField", Field)
    .provider("ouiFieldConfiguration", FieldConfigurationProvider)
    .directive("customValidation", FieldDirective);
