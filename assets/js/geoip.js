$(function () {
  $.ajax({
    url: 'http://ip.chinaz.com/getip.aspx',
    dataType: 'jsonp',
    success:function(data){
      var address = data.address;
      var ip = data.ip;
      var isp = / (.+)| (.+)/.exec(address)[1];
      $.ajax({
        url: 'http://apis.map.qq.com/ws/location/v1/ip',
        dataType: 'jsonp',
        data: {'key':'D3TBZ-736KS-HZFOS-6AVU5-2H5OO-45FOV','output':'jsonp'},
        success:function(data){
          var province = data.result.ad_info.province;
          var city = data.result.ad_info.city;
          $('#geoip').html(province + ' '+ city + ' '+ isp + '(' + ip +')');
        },
        error:function(jqXHR){
          alert('发生错误：' + jqXHR.status);
        }
      });
    },
    error:function(jqXHR){
      alert('发生错误了：' + jqXHR.status);
    }
  });
});
