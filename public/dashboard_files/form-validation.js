


$(document).ready(function () {
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; //January is 0!
    // var yyyy = today.getFullYear();
    //  if(dd<10){
    //         dd='0'+dd
    //     } 
    //     if(mm<10){
    //         mm='0'+mm
    //     } 
    
    // today = yyyy+'-'+mm+'-'+dd;
    // document.getElementById("datefield").setAttribute("max", today);
console.log($(".ajax-register"))
    $(".ajax-register").validate(
        {
            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
             dob: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            country: {
                required: true
            },
            password: {
                required: true,
                minlength:8,
                pwcheck: true,
                
            },
            passwordConfirm: {
                required: true,
                equalTo: "#password"
            },
            publicWalletAddress: {
                required: true,
                minlength:42,
                maxlength:42
                
            },
            company: {
                required: true
            }
       },
           
            messages: {
                firstname: {
                    required: "First name is required"
                },
                lastname: {
                    required: "Last name is required"
                },
                dob: {
                    required: "Dob is required"
                },
                email: {
                    required: "Email is required"
                },
                country: {
                    required: "Country name is required"
                },
                phone: {
                    required: "Phone Number is required"
                },
                publicWalletAddress:{
                    required: "42 digit Wallet Address is required (please include 0x)"
                   
                },
                company:{
                    required: "Company Name is required"

                },
                password:{
                    required: "Password is required",
                    pwcheck: "Please include a digit and a lowercase character."

                },
                passwordConfirm:{
                    required: "You Need to Confirm Password ",
                    equalTo: "Confirm Password does not match"


                }
               
            }



        }
    );

    $.validator.addMethod("pwcheck", function(value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
            && /[a-z]/.test(value) // has a lowercase letter
            && /\d/.test(value) // has a digit
     });


     $("#ajax-fp").validate(
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
                    pwcheckk: "Please include a digit, lowercase character and a special character which includes (- @ . _ *)  "

                },
                passwordConfirm:{
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
