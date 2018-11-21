/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).on('submit', '.ajax-adminIndex', function (e) {
    e.preventDefault();
    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    var params = {
        "address": $('input[name=ethereumAddress]').val(),
        "tokens": $('input[name=tokens]').val()
    };
    //console.log(params);
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        
        success: function (json) {
        console.log("jssoooonnn",json);
            if (json ) {
                $.toast({
                    heading: 'Success',
                    text: json.message,
                    showHideTransition: 'slide',
                    icon: 'success',

                });
                $('button[type=submit]').html(btn).removeAttr('style');

                $( '.ajax-adminIndex' ).each(function(){
                    this.reset();
                });

                        // window.location.href = '/users/adminIndex';
            }
            
            



        },
        error: function (error) {
            console.log(error);
            if (error) {
                $.toast({
                    heading: 'Error',
                    text: error.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
//                $('.ajax-login .error').html(error.responseJSON.error.message);
                $('button[type=submit]').html(btn).removeAttr('style');
            }
        }

    });
});


$(document).on('submit', '.ajax-adminLogin', function (e) {
    e.preventDefault();
    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    var params = {
        "email": $('input[name=adminUsername]').val(),
        "password": $('input[name=adminPassword]').val()
    };
    //console.log(params);
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
            //console.log(json);
            if (json) {
                $.toast({
                    heading: 'Success',
                    text: json.message,
                    showHideTransition: 'slide',
                    icon: 'success',
                    hideAfter: 1000
                });
                window.setTimeout(function(){
                    window.location.href = '/admin/bounty-transfer';
                  }, 1000);
                       // window.location.href = '/admin/bounty-transfer';
            }
            

        },
        error: function (error) {
            //console.log(error);
            if (error) {
                $.toast({
                    heading: 'Error',
                    text: error.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
//                $('.ajax-login .error').html(error.responseJSON.error.message);
                $('button[type=submit]').html(btn).removeAttr('style');
            }
        }
    });
});


$(document).on('submit', '.ajax-login', function (e) {
    e.preventDefault();
    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    var params = {
        "email": $('input[name=email]').val(),
        "password": $('input[name=password]').val()
    };
    //console.log(params);
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
            //console.log(json);
            if (json) {
                $.toast({
                    heading: 'Success',
                    text: json.message,
                    showHideTransition: 'slide',
                    icon: 'success',
                    hideAfter: 1000

                });
                window.setTimeout(function(){
                    window.location.href = '/users/dashboard';
                }, 1000);
            }
        },
        error: function (error) {
            //console.log(error);
            if (error) {
                $.toast({
                    heading: 'Error',
                    text: error.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
//                $('.ajax-login .error').html(error.responseJSON.error.message);
                $('button[type=submit]').html(btn).removeAttr('style');
            }
        }
    });
});


$(document).on('submit', '.ajax-forgot-password', function (e) {
    e.preventDefault();
    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    var params = {
        "email": $('input[name=email]').val(),
    };
    //console.log("coming here 1");
    //console.log(params);
//     $.ajax({
//         type: 'POST',
//         url: $(this).attr('action'),
//         data: JSON.stringify(params),
//         dataType: 'json',
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader('Content-Type', 'application/json');
//             xhr.setRequestHeader('Accept', 'application/json');
//         },
//         success: function (json) {
//             //console.log("json",json);
//             $.toast({
//                 heading: 'Success',
//                 text: json.message,
//                 showHideTransition: 'slide',
//                 icon: 'success'
//             });
//             // if (json) {
//             //             window.location.href = '/users/forgot-password';
//             // }
//         },
//         error: function (error) {
//             //console.log("error",error);
//             if (error) {
//                 $.toast({
//                     heading: 'Error',
//                     text: error.responseJSON.message,
//                     showHideTransition: 'slide',
//                     icon: 'error'
//                 });
// //                $('.ajax-login .error').html(error.responseJSON.error.message);
//                 $('button[type=submit]').html(btn).removeAttr('style');
//             }
//         }
//     });
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
         //console.log(json);
            message = json;
            if (json.statusCode == 200) {
               // //console.log("success");
            }
        },
        complete: function (message) {
            //console.log(message);
            if (message.responseJSON && message.responseJSON.status == 200) {
                $.toast({
                    heading: 'Success',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'success'
                });
                

              
//                $('.ajax-forgot-password .error').html(message.responseJSON.message);
            } else
            if (message.error == 1 || message.statusCode == 400) {
                $.toast({
                    heading: 'Error',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
//                $('.ajax-forgot-password .error').html(message.message);
            } else {
                $.toast({
                    heading: 'Error',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
            }
            $('button[type=submit]').html(btn).removeAttr('style');
           // $('form[name="contact-form"]').reset();
            $( '.ajax-forgot-password' ).each(function(){
                this.reset();
            });
        }
    });
});
$('select[name="country"]').on('change', function(){    
    //alert($(this).val());
    var country = $(this).find(":selected").text();   
    //console.log("cc",country.split(" ")); 
    $('input[name=country]').val(country.split(" ")[0]);
    $('input[name=countryCode]').val(country.split("(")[1].split(")")[0]);

});
/*

$(document).on('click', '#logout', function (e) {
    e.preventDefault();

    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
   
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
            //console.log("jsonnnn",json);
            

            },
            complete: function (message) {
                //console.log(message);
                if (message.responseJSON && message.responseJSON.status == 200) {
                    
                    $.toast({
                        heading: 'Success',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'success'
                    });
                    window.setTimeout(function(){
                        window.location.href = '/users/login';
                      }, 5000);
                    
    //                $('.ajax-forgot-password .error').html(message.responseJSON.message);
                } else
                if (message.error == 1 || message.statusCode == 201) {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
    //                $('.ajax-forgot-password .error').html(message.message);
                } else {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
                }
                $('button[type=submit]').html(btn).removeAttr('style');
            }    });
});

*/

$(document).on('submit', '.ajax-register', function (e) {
    e.preventDefault();


    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');

    var params = {
        "firstname": $('input[name=firstname]').val(),
        "lastname": $('input[name=lastname]').val(),
        "dob": $('input[name=dob]').val(),
        "email": $('input[name=email]').val(),
        "publicWalletAddress": $('input[name=publicWalletAddress]').val(),
        "phone": $('input[name=phone]').val(),
        "countryCode": $('input[name=countryCode]').val().split("+")[1],
        // $('#countryCode').on('change',function(){
        //     //var optionValue = $(this).val();
        //     //var optionText = $('#dropdownList option[value="'+optionValue+'"]').text();
        //     var countryCode = $("#countryCode option:selected").text();
        //     //alert("Selected Option Text: "+optionText);
        // });
        "country": $('select[name="country"]').find(":selected").text().split(" ")[0],
        "company": $('input[name=company]').val(),
        "password": $('input[name=password]').val(),
        "passwordConfirm": $('input[name=passwordConfirm]').val()
    };
    console.log("params",params);
   
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
            //console.log("jsonnnn",json);
            

            },
            complete: function (message) {
                //console.log(message);
                if (message.responseJSON && message.responseJSON.status == 200) {
                    
                    $.toast({
                        heading: 'Success',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'success',
                        hideAfter: 7000
                    });
                    window.setTimeout(function(){
                        window.location.href = '/users/login';
                      }, 7000);
                    
    //                $('.ajax-forgot-password .error').html(message.responseJSON.message);
                } else
                if (message.error == 1 || message.statusCode == 201) {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
    //                $('.ajax-forgot-password .error').html(message.message);
                } else {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
                }
                $('button[type=submit]').html(btn).removeAttr('style');
            }    });
});


///////////////////////////////////


$(document).on('submit', '.ajax-editProfile', function (e) {
    e.preventDefault();
    var btn = $('button[type=submit]').html();
    $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    var params = {
        "firstname": $('input[name=ajaxfirstname]').val(),
        "lastname": $('input[name=ajaxlastname]').val(),
       // "email": $('input[name=ajaxemail').val(),
        "dob": $('input[name=ajaxdob]').val(),
        "country": $('input[name=ajaxcountry]').val(),
        "publicWalletAddress": $('input[name=ajaxpublicWalletAddress]').val(),
        "company": $('input[name=ajaxcompany]').val(),
    };
    //console.log("params",params);
   
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: JSON.stringify(params),
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
        },
        success: function (json) {
            console.log("jsonnnn",json.message);
            if (json.message == "Profile updated successfully") {

                $.toast({
                    heading: 'Success',
                    text: json.message,
                    showHideTransition: 'slide',
                    icon: 'success',
                    hideAfter: 1500
                });
               
                window.setTimeout(function(){
                    window.location.href = '/users/setting';
                  }, 1500);
                    
                }
                else {

                    $.toast({
                        heading: 'Error',
                        text: json.message,
                        showHideTransition: 'slide',
                        icon: 'error',
                        hideAfter: 5000
                    });
                    // window.location.href = '/users/setting';
                }
            },

            // complete: function (message) {
            //     console.log(message);
               /* if (message.responseJSON && message.responseJSON.status == 200) {
                    
                    $.toast({
                        heading: 'Success',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'success',
                        hideAfter: 7000
                    });
                    window.setTimeout(function(){
                        window.location.href = '/users/login';
                      }, 7000);
                    
    //                $('.ajax-forgot-password .error').html(message.responseJSON.message);
                } else
                if (message.error == 1 || message.statusCode == 201) {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
    //                $('.ajax-forgot-password .error').html(message.message);
                } else {
                    $.toast({
                        heading: 'Error',
                        text: message.responseJSON.message,
                        showHideTransition: 'slide',
                        icon: 'error'
                    });
                }
                $('button[type=submit]').html(btn).removeAttr('style');*/

                /*if (message.error == 1 || message.statusCode == 201) {
                $.toast({
                    heading: 'Error',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });*/
            //}            
    });
});


////////////////////////////////////

$(document).on('submit', '.ajax-reset-password', function (e) {
    e.preventDefault();
   
    // var btn = $('button[type=submit]').html();
    // $('button[type=submit]').html('<i class="fa fa-spinner fa-spin fa-2x"></i> ').attr('style', 'pointer-events:none');
    // var params = {

    //     "password": $('input[name=password').val(),
    //     // "passwordConfirm": $('input[name=passwordConfirm').val()
    // };
    // console.log("params",params);
   
    // var token = $('input[name=token]').val();//??
    // console.log("tokens",token);
    // var password = $('input[name=password]').val();
    // var c_password = $('input[name=confirm_password]').val();
    // if (password.trim() == '' || password.trim() != c_password.trim()) {
    //     $('.error').html('Password and confirm password must be same.');
    //     return false;
    // }
    // var btn = $('button[type=submit]').html();
    // var params= {token: token, password: password};
    // $.ajax({
    //     type: 'POST',
    //     url: $(this).attr('action'),
    //     // data: JSON.stringify(params),
        
    //     data: JSON.stringify(params),
    //     dataType: 'json',
    //     beforeSend: function (xhr) {
    //         xhr.setRequestHeader('Content-Type', 'application/json');
    //         xhr.setRequestHeader('Accept', 'application/json');
    //     },
    //     success: function (json) {
    //         console.log("jsonnnn",json);
    //         // if (json) {
        
    //         //             window.location.href = '/users/reset-password';
                    
    //         //     }
    //         },
    // });

   var token = $('input[name=token]').val();
    var password = $('input[name=password]').val();
    var c_password = $('input[name=confirm_password]').val();
    //console.log("password",password);
    //console.log("confirm pasw",c_password);
    //console.log("token",token);
    // if (password.trim() == '' || password.trim() != c_password.trim()) {
    //    // $('.error').html('');
    //     $.toast({
    //         heading: 'Error',
    //         text: "Password and confirm password must be same.",
    //         showHideTransition: 'slide',
    //         icon: 'error'
    //     });
    //     return false;
    // }
    var btn = $('button[type=submit]').html();
   
    $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: {token: token, password: password},
        dataType: 'json',
        success: function (json) {
            //console.log(json);
            message = json;
            if (json.status == 200 && json.error == 0) {
               // $('.password-reset-successfully').click();
            }
        },
        complete: function (message) {
            //console.log(message);
            if (message.responseJSON && message.responseJSON.status == 200) {
                $.toast({
                    heading: 'Success',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'success'
                        

                });
                window.setTimeout(function(){
                    window.location.href = '/users/login';
                  }, 4000);

//                $('.ajax-forgot-password .error').html(message.responseJSON.message);
            } else
            if (message.error == 1 || message.statusCode == 400) {
                $.toast({
                    heading: 'Error',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
//                $('.ajax-forgot-password .error').html(message.message);
            } else if (message.status == 200) {
                $.toast({
                    heading: 'Success',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'success'
                });
            } else {
                $.toast({
                    heading: 'Error',
                    text: message.responseJSON.message,
                    showHideTransition: 'slide',
                    icon: 'error'
                });
            }
            $('button[type=submit]').html(btn).removeAttr('style');

            $( '.ajax-reset-password' ).each(function(){
                this.reset();
            });
        }
    });
});


// $(document).on('click', '.list-inline-item', function (e) {
   
//         $('.list-inline-item').removeClass("active");
//         $(this).addClass("active");

// });


   
    
    
$(function() {
    
    console.log(location.pathname.split("/")[2]);

  $('.list-inline-item a[href^="' + location.pathname.split("/")[2] + '"]').addClass('active');


// if (window.history && history.pushState) {
//     addEventListener('load', function() {
//         history.pushState(null, null, null); // creates new history entry with same URL
//         addEventListener('popstate', function() {
//             var stayOnPage = confirm("Are you sure, you want to leave ?");
//             if (stayOnPage) {
//                 history.back() 
//             } else {
//                 history.pushState(null, null, null);
                
//             }
//         });    
//     });
// }

// window.onbeforeunload = function() {
//     return "Leaving this page will reset the wizard";
// };

// window.onload = function () {
//     if (window.history && history.pushState) {
//         console.log(document.location.pathname)
//         if (document.location.pathname === "/users/dashboard") {
//             if (history.state == null) {
//                 history.pushState({'status': 'ongoing'}, null, null);
//             }
//             window.onpopstate = function(event) {
//                 const endProgress = confirm("This will end your progress, are you sure you want to go back?");
//                 if (endProgress) {
//                     window.onpopstate = null;
//                     history.back();
//                 } else {
//                     history.pushState(null, null, null);
//                 }
//             };
//         }
//     }
// };

  
        // if(  (window.event.clientX < 40 && window.event.clientY < 0) ||  (event.currentTarget.performance.navigation.type == 2)  )
        // {
        //     alert("Browser back button is clicked...");
        // }
       


});


