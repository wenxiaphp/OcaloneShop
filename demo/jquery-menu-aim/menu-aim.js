$('.menuSub').css('height', $('.menuMain').css('height'));
$('#menuUl').menuAim({
  activate: function(li) {
    var menuId = ($(li).attr('id') + '').split('_')[1];
    $('#menuTips').html(menuId);
    $('#menuSub_' + menuId).show();
  },
  deactivate: function() {
    $('.menuSub').hide();
  },
  enter: function() {
    $('#menuTips').html('enter');
    this.activate();
  },
  exit: function() {
    $('#menuTips').html('exit');

  }
});
