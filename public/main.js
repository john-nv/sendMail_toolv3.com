let username = 'user'

$(document).ready(function() {
  const nameOld = localStorage.getItem('name')
  if(nameOld.length > 0) $('#getNameUser').val(nameOld)
});

$('#dialog_alert').modal('show');

$(document).ready(function() {
  $.ajax({
      type: "POST",
      url: "/admin/getConfig",
      success: function (res) {
          if (res.code != 1) return;
          console.log(res.data)
          const data = res.data

          $('#title_dialog').html(data.titleUsername);
          $('#btnGetNameUser').html(data.btnStartDialog);
          $("#getNameUser").attr("placeholder", data.placeholderUsername);
          $("#i-content").attr("placeholder", data.placeholderHome);
          $('#title-home').html(data.titleHome) 
          changeTitleBot(data.msgBotWelcome)
          $('#dialog_alert').modal('show');
      },
      error: function (error) {
          console.log('Không load được config từ admin');
          console.error("Error:", error);
      }
  });
});

// change
function changeTitleBot(msg){
  setTimeout(()=> {
    $('.hQsUiY:first').text(msg);
  },1000 )

}

$('#btnGetNameUser').on('click', () => {
  const name = $('#getNameUser').val()
  if(name.length < 3) return alert('Vui lòng nhập tên của bạn')
  username = name
  localStorage.setItem('name', username)
  $('#dialog_alert').modal('hide');
})

$('#sendMail').on('click', function () {
    handleSendMail();
  });

  $('#i-content').on('keydown', function (e) {
    if (e.key === 'Enter') {
      handleSendMail();
    }
  });

function handleSendMail() {
    let content = $('#i-content').val()
    $.ajax({
        url: `/sendMail`,
        method: "POST",
        data: {content: content, name: username },
        success: function(data) {
            if(data.code == 1){ console.log(data.message) }
        },
        error: function(error) {
            console.error("error request:", error);
        }
    });
}