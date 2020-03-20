(function () {
    'use strict';

    window.HealthcareAccelerator = window.HealthcareAccelerator || {};
    window.HealthcareAccelerator.Entities = window.HealthcareAccelerator.Entities || {};
    window.HealthcareAccelerator.Entities.msemr_referralrequest = window.HealthcareAccelerator.Entities.msemr_referralrequest || {};
    window.HealthcareAccelerator.Entities.msemr_referralrequest.form = (function () {

        var formContext;

        function executeOnLoad(executionContext) {
            formContext = executionContext.getFormContext();

            // If form is new
            if (formContext.ui.getFormType() === 1) {
                clearFields();
            }
        }

        function clearFields() {
            var practitioner = formContext.getControl('msemr_requesteragentpractitioner');
            if (!practitioner || !practitioner.getAttribute().getValue()) {
                return;
            }
            var practitionerId = practitioner.getAttribute().getValue()[0].id;

            HealthcareAccelerator.Utilities.clearFieldsFromContactType.clearFields(
                formContext, practitionerId, [935000001], [['msemr_subjectpatient', 'msemr_requesteragentrelatedperson', 'msemr_requesteragentpatient', 'msemr_requesteragentpractitioner']]
            );
        }

        return {
            executeOnLoad: executeOnLoad
        };

    }());
}());
