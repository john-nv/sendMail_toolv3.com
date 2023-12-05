function getConfig() {
  $.ajax({
    type: "POST",
    url: "/admin/getConfig",
    success: function(res) {
      if(res.code != 1) return alert(error.responseJSON.message);
      const data = res.data
      
      $('#btnStartDialog').val(data.btnStartDialog)
      $('#msgBotReply').val(data.msgBotReply)
      $('#msgBotWelcome').val(data.msgBotWelcome)
      $('#placeholderHome').val(data.placeholderHome)
      $('#placeholderUsername').val(data.placeholderUsername)
      $('#titleHome').val(data.titleHome)
      $('#titleUsername').val(data.titleUsername)
      // $('#msgUserSend').val(data.msgUserSend)
      
    },
    error: function(error) {
      alert(error.responseJSON.message)
      console.error("Error:", error);
    }
  });
}

$('#btn-save').on('click', () => {
  const _ = localStorage.getItem('_')
  const btnStartDialog = $('#btnStartDialog').val()
  const msgBotReply = $('#msgBotReply').val()
  const msgBotWelcome = $('#msgBotWelcome').val()
  const placeholderHome = $('#placeholderHome').val()
  const placeholderUsername = $('#placeholderUsername').val()
  const titleHome = $('#titleHome').val()
  const titleUsername = $('#titleUsername').val()
  // const msgUserSend = $('#msgUserSend').val()
  
  try {
    $.ajax({
      type: "POST",
      url: "/admin/config",
      data: {token: _ ,titleUsername, titleHome, placeholderUsername, placeholderHome,msgBotReply, btnStartDialog, msgBotWelcome},
      success: function(res) {
        if(res.code != 1) return alert(error.responseJSON.message);
        alert('change config success !!!')
      },
      error: function(error) {
        alert(error.responseJSON.message)
        console.error("Error:", error);
      }
    });
  } catch (error) {
    console.log(error)
    alert('ERROR =>> ',error.message)
  }
})

const _ = localStorage.getItem('_')
if (!_ || _.length < 1) {
  $('#dialog_login').modal('show')
} else{
    $.ajax({
    type: "POST",
    url: "/admin/verify",
    data: {token: _ },
    success: function(res) {
      if(res.code == 1) return getConfig();
      localStorage.setItem('_', '')
      $('#dialog_login').modal('show')
    },
    error: function(error) {
      localStorage.setItem('_', '')
      alert('Vui lòng tải lại trang')
      console.error("Error:", error);
    }
  });
}


$('#btn-login').on('click', () => {
  const user = $('#l-username').val()
  const pass = $('#l-password').val()
  validateLogin(user, pass)

  $.ajax({
    type: "POST",
    url: "/admin/login",
    data: {user, pass},
    success: function(res) {
      if(res.code != 1) return alert(res.message);

      localStorage.setItem('_', res.jwt)
      $('#dialog_login').modal('hide');
      getConfig()
    },
    error: function(error) {
      alert('Lỗi chương trình')
      console.error("Error:", error);
    }
  });
})

$('#logOut').on('click', () => {
  localStorage.setItem('_', '')
  $('#dialog_login').modal('show')
})

function validateLogin(user, pass){
  if(user.length < 1 || pass.length < 1) alert('Mật khẩu hoặc mật khẩu không được trống')
}