Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'firstName',
        fieldLabel: 'First name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'username',
        fieldLabel: 'Username',
        inputType: 'text',
        visible: true,
    },
    {
        fieldName: 'subject',
        fieldLabel: 'Subject',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'country',
        fieldLabel: 'Country',
        inputType: 'text',
        visible: true,
    }]
});