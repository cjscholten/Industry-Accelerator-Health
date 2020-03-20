(function () {
    'use strict';

    window.HealthcareAccelerator = window.HealthcareAccelerator || {};
    window.HealthcareAccelerator.Entities = window.HealthcareAccelerator.Entities || {};
    window.HealthcareAccelerator.Entities.msemr_appointmentemr = window.HealthcareAccelerator.Entities.msemr_appointmentemr || {};
    window.HealthcareAccelerator.Entities.msemr_appointmentemr.form = (function () {

        var formContext;

        function executeOnLoad(executionContext) {
            formContext = executionContext.getFormContext();

            // If form is new
            if (formContext.ui.getFormType() === 1) {
                checkContactFields();
            }
        }

        function checkContactFields() {
            var actorPatient = formContext.getControl('msemr_actorpatient');
            var actorPractitioner = formContext.getControl('msemr_actorpractitioner');
            var actorRelatedPerson = formContext.getControl('msemr_actorrelatedperson');

            if (!actorPatient || !actorPatient.getAttribute().getValue()) {
                return;
            }
            var actorPatientId = actorPatient.getAttribute().getValue()[0].id;

            if (actorPractitioner) {
                var actorPractitionerAttr = actorPractitioner.getAttribute().getValue();
                if (actorPractitionerAttr && actorPractitionerAttr[0].id === actorPatientId) {
                    actorPractitioner.getAttribute().setValue(null);
                }
            }

            if (actorRelatedPerson) {
                var actorRelatedPersonAttr = actorRelatedPerson.getAttribute().getValue();
                if (actorRelatedPersonAttr && actorRelatedPersonAttr[0].id === actorPatientId) {
                    actorRelatedPerson.getAttribute().setValue(null);
                }
            }
        }

        return {
            executeOnLoad: executeOnLoad
        };

    }());
}());
