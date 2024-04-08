var users=[];
$("#signin-form").validate({
    rules:{
        username:{
            required: true
            
        },
        password:{
            required: true
        }
    },
    submitHandler: function(form,event){
        event.preventDefault();
        let data=serializeForm(form);
        users.push(data);
        $("#signin-form")[0].reset();
        console.log(users);
        
    }

});

$("#contact-form").validate({
    submitHandler: function(form,event){
        event.preventDefault();
        let data=serializeForm(form);
        users.push(data);
        $("#contact-form")[0].reset();
        console.log(users);
        
    }

});



serializeForm = (form) => {
    let jsonResult={};
    $.each($(form).serializeArray(),function(){
        jsonResult[this.name]=this.value;
    });
    return jsonResult;
}