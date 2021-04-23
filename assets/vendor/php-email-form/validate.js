/**
* PHP Email Form Validation - v2.3
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
/*(function($) {
  "use strict";

  $('form.php-email-form').submit(function(e) {
    e.preventDefault();
    
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs
     
      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');

    if( ! action ) {
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html('Thanks for your feedback');
      return false;
    }
    
    this_form.find('.sent-message').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.loading').slideDown();

    if ( $(this).data('recaptcha-site-key') ) {
      var recaptcha_site_key = $(this).data('recaptcha-site-key');
      grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {action: 'php_email_form_submit'}).then(function(token) {
          php_email_form_submit(this_form,action,this_form.serialize() + '&recaptcha-response=' + token);
        });
      });
    } else {
      php_email_form_submit(this_form,action,this_form.serialize());
    }
    
    return true;
  });

  function php_email_form_submit(this_form, action, data) {
    $.ajax({
      type: "POST",
      url: action,
      data: data,
      timeout: 40000
    }).done( function(msg){
      if (msg.trim() == 'OK') {
        this_form.find('.loading').slideUp();
        this_form.find('.sent-message').slideDown();
        this_form.find("input:not(input[type=submit]), textarea").val('');
      } else {
        this_form.find('.loading').slideUp();
        if(!msg) {
          msg = 'Form submission failed and no error message returned from: ' + action + '<br>';
        }
        this_form.find('.error-message').slideDown().html(msg);
      }
    }).fail( function(data){
      console.log(data);
      var error_msg = "Form received <br>";
      if(data.statusText || data.status) {
        
        error_msg += '<br>'
      }
      if(data.responseText) {
        error_msg += data.responseText;
      }
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html(error_msg);
    });
  }

})(jQuery);*/


    $(document).ready(function () {
      var nflag=1,eflag=1,sflag=1,mflag=1
      $("#name").blur(function () {
        var text = $(this).val()
        if (text.length < 4) {
          $("#err1").show()
          $("#err2").hide()
           nflag=1
           $("#submit").prop('disabled', true)
        
      }
        else {
          if (/^[A-Za-z ]+$/.test(text) == false) {
            $("#err2").show()
            $("#err1").hide()
            nflag=1
            $("#submit").prop('disabled', true)
           
          }
          else {
            $("#err2").hide()
            $("#err1").hide()
            nflag=0
            if(sflag==0 && mflag==0 && eflag==0){
            $("#submit").prop('disabled', false)
          }
        } 
        }
        
      })



      $("#email").blur(function () {
        var text = $(this).val()
        if (/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(text) == false) {
          $("#err3").show()
          eflag=1
        }
        else {
          $("#err3").hide() 
          eflag=0
          if(nflag==0 && mflag==0 && sflag==0){
            $("#submit").prop('disabled', false)
            }
          
        }
      })
      $("#subject").blur(function () {
        var text = $(this).val()
        if (text.length < 8) {
          $("#err4").show()
          sflag=1
          $("#submit").prop('disabled', true)
        }
        else {
          $("#err4").hide()
          sflag=0
          if(nflag==0 && mflag==0 && eflag==0){
          $("#submit").prop('disabled', false)
          }
        }
      })
      $("#message").blur(function () {
        var text = $(this).val()
        if (text.length < 2) {
          $("#err5").show()
          mflag=1
          $("#submit").prop('disabled', true)
        }
        else {
          $("#err5").hide()
          mflag=0
          if(nflag==0 && sflag==0 && eflag==0){
          $("#submit").prop('disabled', false)
          
        }
      }
      })
     
    })
