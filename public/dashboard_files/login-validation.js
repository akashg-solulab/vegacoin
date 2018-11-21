
$(document).ready(function () {


    console.log($(".ajax-login"));
    $(".ajax-login").validate({
            rules: {
                email: {
                    required: true,
                    email:true
                },
               
            password: {
                required: true,
                minlength:8,
                pwcheck: true,
                
            },
            
        },
           
            messages: {
               
                email: {
                    required: "Email is required"
                },
                
                password:{
                    required: "Password is required",
                    pwcheck: "Please include a digit and a lowercase character."

                }
                
               
            }



        });
        $.validator.addMethod("pwcheck", function(value) {
            return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
                && /[a-z]/.test(value) // has a lowercase letter
                && /\d/.test(value) // has a digit
         });

  

});
