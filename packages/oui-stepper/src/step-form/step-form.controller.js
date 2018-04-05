import { addBooleanParameter, addDefaultParameter } from "@oui-angular/common/component-utils";

export default class StepFormController {
    constructor ($attrs, $element, $scope, $timeout) {
        "ngInject";

        this.$attrs = $attrs;
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit () {
        addBooleanParameter(this, "disabled");
        addBooleanParameter(this, "skippable");
        addDefaultParameter(this, "name", `ouiStepForm${this.$scope.$id}`);
        addDefaultParameter(this, "skippableText", "Skip this step");

        // Check if Stepper parent
        if (this.stepperCtrl) {
            this.stepper = {};
            this.stepperCtrl.addStep(this);

            this.linear = this.stepperCtrl.linear;
        }
    }

    $postLink () {
        // Sometimes the digest cycle is done before dom manipulation,
        // So we use $timeout to force the $apply
        this.$timeout(() =>
            this.$element
                .removeAttr("id")
                .removeAttr("name")
        );
    }

    onFormSubmit (form) {
        if (form.$valid) {
            this.onSubmit({ form });

            // Focus next step
            this.stepperCtrl.addForm(form, this.stepper.index);
        }
    }

    setFocus (form) {
        this.stepperCtrl.focusStep(this.stepper.index);
        form.$setPristine();
    }
}
