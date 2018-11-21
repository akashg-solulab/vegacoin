

$(document).ready(function () {
    
     $(".ajax-reset-password").validate(
        {
            rules: {
                
            password: {
                required: true,
                minlength:8,
                pwcheckk: true,
                
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
            
       },
           
            messages: {
               
                password:{
                    required: "Password is required",
                    pwcheckk: "Please include a digit and a lowercase character."

                },
                confirm_password:{
                    required: "You Need to Confirm Password ",
                    equalTo: "Confirm Password does not match"


                }
               
            }



        }
    );

    $.validator.addMethod("pwcheckk", function(value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
            && /[a-z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
     });

});
