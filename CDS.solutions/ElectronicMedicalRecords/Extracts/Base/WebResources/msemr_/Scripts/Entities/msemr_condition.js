(function () {
    'use strict';

    window.HealthcareAccelerator = window.HealthcareAccelerator || {};
    window.HealthcareAccelerator.Entities = window.HealthcareAccelerator.Entities || {};
    window.HealthcareAccelerator.Entities.msemr_condition = window.HealthcareAccelerator.Entities.msemr_condition || {};
    window.HealthcareAccelerator.Entities.msemr_condition.form = (function () {

        var formContext;

        function executeOnLoad(executionContext) {
            formContext = executionContext.getFormContext();

            // If form is new
            if (formContext.ui.getFormType() === 1) {
                clearFields();
            }
        }

        function clearFields() {
            var patient = formContext.getControl('msemr_subjecttypepatient');
            if (!patient || !patient.getAttribute().getValue()) {
                return;
            }
            var patientId = patient.getAttribute().getValue()[0].id;

            HealthcareAccelerator.Utilities.clearFieldsFromContactType.clearFields(
                formContext, patientId, [935000000], [['msemr_practitioner', 'msemr_asserter']]
            );
        }

        return {
            executeOnLoad: executeOnLoad
        };

    }());
}());
