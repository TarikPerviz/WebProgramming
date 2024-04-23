$(document).ready(function() {
    var contacts = []; 
    var idCounter = 1;
    $("#contact-form").validate({
        rules: {
            username: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true 
            },
            subject: {
                required: true
            },
            message: {
                required: true
            }
        },
        
        submitHandler: function(form, event) {
            event.preventDefault(); 
            let data = serializeForm(form);

            data['id']= idCounter;
            idCounter+=1;
            contacts.push(data); 
            console.log(data); 

            $(form).trigger("reset"); 
        }
    });

    function serializeForm(form) {
        let jsonResult = {};
        $.each($(form).serializeArray(), function() {
            jsonResult[this.name] = this.value;
        });
        return jsonResult;
    }
});
