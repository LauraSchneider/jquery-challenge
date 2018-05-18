$(document).ready(function() {

    let checkMonthValue = /^\d+$/;

    //MONTH VALIDATION
    $.validator.addMethod('validMonth', function(value, element) {
        let zeroPosition = value.indexOf('0') == 0;

        if (value >= 10 && value <= 12) {
            zeroPosition = value;
        } else if (value < 10) {
            zeroPosition = value.indexOf('0') == 0;
        }
        return value.length == 2 && checkMonthValue.test(value) && zeroPosition;
    }, 'Please enter a valid month.');

    //YEAR VALIDATION
    $.validator.addMethod('validYear', function(value, element) {
        if (value >= 10 && value <= 99) {
            return value.length == 2 && checkMonthValue.test(value);
        }
    }, 'Please enter a valid year.');


    $("#donation-form").validate({
        rules: {
            month: {
                required: true,
                validMonth: true
            },
            year: {
                required: true,
                validYear: true
            },
        },
        messages: {
            month: {
                required: "Please enter the expiration month."
            },
            year: {
                required: "Please enter the expiration year."
            },
        }, highlight: function(messages) {
            $('messages').addClass('error');
        },
    });
});
