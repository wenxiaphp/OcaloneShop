$(function() {
  $('#upForm').ajaxForm({
    target: '#output', // 把服务器返回的内容放入id为output的元素中
    url: 'upt.php', // 默认是form的action，如果申明，则会覆盖
    type: 'POST',
    dataType: 'json', //接受服务器返回的类型

    clearForm: false, // 成功提交后，清除所有表单元素的值
    resetForm: false, // 成功提交后，重置所有表单元素的值

    timeout: 3000, // 限制请求实现，当请求大于3秒后，跳出请求

    // 提交前的回调函数
    beforeSubmit: function(formData, form, options) {
    },

    // 提交成功后的回调函数
    success: function(data) {
      $('#output').html(data.msg);
    },

    // 提交失败后的回调函数
    error: function(jqxhr) {
      $('#output').html('出现错误：' + jqxhr.status);
    }
  });
});
