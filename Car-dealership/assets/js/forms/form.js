$(document).ready(function() {
var users=[];
var idCounter = 1;
$("#signin-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 5,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      username: {
        required: "You have to fill it in!",
        minlength: "Too short buddy.!",
      },
    },
    submitHandler: function (form, event) {
      apiFormHandler(form, event);
    },
});

function apiFormHandler(form, event){
    event.preventDefault();
    let data=serializeForm(form);

    $("#signin-form")[0].reset();
};
function apiFormHandler(form, event) {
    event.preventDefault();
    
    let data = serializeForm(form);
  
    $.post(
      "http://localhost:80/WebProgramming/Car-dealership/", 
      JSON.stringify(data)
    ).done(function (data) {
      $("#signin-form")[0].reset();
      $("#toast-description").text(data.message);
      $("#success-toast").toast("show");
    }).fail(function (xhr) {
      $("#toast-description").text(xhr.responseJSON.message);
      $("#success-toast").toast("show");
    });
  }



serializeForm = (form) => {
    let jsonResult={};
    $.each($(form).serializeArray(),function(){
        jsonResult[this.name]=this.value;
    });
    return jsonResult;
}

});