$(document).ready(function () {

    $(".ajax-adminIndex").validate(
        {
            rules: {
                ethereumAddress: {
                    required: true
                },
                tokens: {
                    required: true
                }
              
       },
           
            messages: {
                ethereumAddress: {
                    required: "First name is required"
                },
                tokens: {
                    required: "Last name is required"
                }
               
                
               
            }
        }
    );
});
