function fn(t,a){return t+a}var a=123,b=522;$(function(){$.ajax({url:"http://ip.chinaz.com/getip.aspx",dataType:"jsonp",success:function(t){var a=t.address,n=t.ip,o=/ (.+)| (.+)/.exec(a)[1];$.ajax({url:"http://apis.map.qq.com/ws/location/v1/ip",dataType:"jsonp",data:{key:"D3TBZ-736KS-HZFOS-6AVU5-2H5OO-45FOV",output:"jsonp"},success:function(t){var a=t.result.ad_info.province,s=t.result.ad_info.city;$("#geoip").html(a+" "+s+" "+o+"("+n+")")},error:function(t){alert("发生错误："+t.status)}})},error:function(t){alert("发生错误了："+t.status)}})});