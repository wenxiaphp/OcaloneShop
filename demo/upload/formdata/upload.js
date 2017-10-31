$(function() {
  $('#upload').on('click', function(event) {
    var formData = new FormData();
    console.log($('#file')[0].files[0]);
    formData.append('file',$('#file')[0].files[0]);
    $.ajax({
      // url: './upload.php',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: formData,
      processData: false, // 不处理数据
      contentType: false, // 不设置内容类型
      success: function(data) {
        console.log(data.msg);
      },
      error: function(jqxhr) {
        console.log(jqxhr.status);
      }
    });
  });
});
// http://www.cnblogs.com/labnizejuly/p/5588444.html
// https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/Using_FormData_Objects
