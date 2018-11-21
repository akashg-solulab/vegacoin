



$(document).ready(function () {

    $(".ajax-editProfile").validate(
        {
            rules: {
                ajaxfirstname: {
                    required: true
                },
                ajaxlastname: {
                    required: true
                },
                ajaxdob: {
                required: true
            },
            // ajaxemail: {
            //     required: true,
            //     email: true
            // },
            
            ajaxcountry: {
                required: true
            },
           
            ajaxpublicWalletAddress: {
                required: true,
                minlength:42,
                maxlength:42
                
            },
            ajaxcompany: {
                required: true
            }
       },
           
            messages: {
                ajaxfirstname: {
                    required: "First name is required"
                },
                ajaxlastname: {
                    required: "Last name is required"
                },
                ajaxdob: {
                    required: "Dob is required"
                },
                // ajaxemail: {
                //     required: "Email is required"
                // },
                ajaxcountry: {
                    required: "Country name is required"
                },
                ajaxphone: {
                    required: "Last name is required"
                },
                ajaxpublicWalletAddress:{
                    required: "42 digit Wallet Address is required (please include 0x)"
                    //equalTo: "Password and Confirm Password do not match"

                }
                
               
            }
        }
    );
});
