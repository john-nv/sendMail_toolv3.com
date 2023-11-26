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
    console.log('=> ' + content)

    $.ajax({
        url: `/sendMail`,
        method: "POST",
        data: {content: content },
        success: function(data) {
            if(data.code == 1){ console.log(data.message) }
        },
        error: function(error) {
            console.error("error request:", error);
        }
    });
}