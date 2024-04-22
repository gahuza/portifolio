// $(document).ready(function () {
//     $('#menu').click(function () {
//       $(this).toggleClass('fa-times');
//       $('header').toggleClass('toggle');
//     });
//     $(window).on('scroll load', function () {
//       $('#menu').removeClass('fa-times');
//       $('header').removeClass('toggle');
    
//     });
// });
// =========
var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
  var u_times = document.querySelector('u_times');
  var u_check = document.querySelector('u_check');

  if(user.value.length == 0 || user.value.length < 6){
    user.style.border = '4px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
  } else {
    user.style.border = '4px solid green';
    u_times.style.display = 'none';
    u_check.style.display = 'block';
  }
})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
  var u_times = document.querySelector('p_times');
  var u_check = document.querySelector('p_check');

  if(pass.value.length == 0 || pass.value.length < 8){
    pass.style.border = '4px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
  } else {
    pass.style.border = '4px solid green';
    u_times.style.display = 'none';
    u_check.style.display = 'block';
  }
})

function validate(){
  if (user.value == 0 || user.value.length < 6) {
    document.getElementById('error').innerHTML = 'Please fill out this form before login!';
    return false;
  } else if (pass.value == 0 || pass.value.length < 8){
    document.getElementById('error').innerHTML = 'Please fill out this form before login!';
    return false;
  } else {
  alert("Successfully logged in");     window.open("dashboard.html");
      }
    }
 




    // -------
    // const username = document.getElementById("username");
    // const email = document.getElementById("email");
    // const password = document.getElementById("password");
    // const form = document.getElementById("signupForm");
    // const confpass = document.getElementById("cpassword");
    //  form.addEventListener('submit', (e) => {
    //   let messages = []
    //   if(username.value === "" || username == null) {
    //     messages.push('Username is required');
    //   }
    //  })
