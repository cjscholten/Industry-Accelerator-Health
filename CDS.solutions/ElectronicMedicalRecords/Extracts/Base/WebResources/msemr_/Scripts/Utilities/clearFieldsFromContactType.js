(function () {
    'use strict';

    window.HealthcareAccelerator = window.HealthcareAccelerator || {};
    window.HealthcareAccelerator.Utilities = window.HealthcareAccelerator.Utilities || {};
    window.HealthcareAccelerator.Utilities.clearFieldsFromContactType = (function () {
        // Specifiy the Contact Guid
        // Specificy the Contact types (array)
        // If Contact guid is of that type, clear all fields on form listed in fieldsToClear (array of arrays)
        function clearFields(formContext, contactId, contactTypes, fieldsToClear) {
            Xrm.WebApi.retrieveRecord('contact', contactId, '?$select=msemr_contacttype').then((result) => {
                contactTypes.forEach((ct, i) => {
                    if (ct !== result.msemr_contacttype) {
                        return;
                    }

                    fieldsToClear[i].forEach((f) => {
                        var ctrl = formContext.getControl(f);
                        if (!ctrl) {
                            return;
                        }
                        ctrl.getAttribute().setValue(null);
                    });
                });
            }, (error) => {
                    console.error(error.message);
            });
        }

        return {
            clearFields: clearFields
        };

    }());
}());
