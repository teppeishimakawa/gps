var num = 0;


var map;
var ido,keido;

var marker_user;
var marker_p1,marker_p2,marker_p3;





//geolocation

navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});

function initMap()
{
   navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});
 //watchId=navigator.geolocation.watchPosition(success, error, {enableHighAccuracy:true, timeout:10000, maximumAge:0});
}


function success(position)
{
    var geo_text = "緯度:" + position.coords.latitude + "\n";
    geo_text += "経度:" + position.coords.longitude + "\n";
    geo_text += "位置精度:" + position.coords.accuracy + "\n";
    /*geo_text += "高度:" + position.coords.altitude + "\n";
    geo_text += "高度精度:" + position.coords.altitudeAccuracy  + "\n";
    geo_text += "移動方向:" + position.coords.heading + "\n";
    geo_text += "速度:" + position.coords.speed + "\n";*/
    var date = new Date(position.timestamp);

    geo_text += "取得時刻:" + date.toLocaleString() + "\n";
    geo_text += "取得回数:" + (++num) + "\n";

    document.getElementById('position_view').innerHTML = geo_text;


//送信
function postForm() {

    var form = document.createElement('form');
    var request1 = document.createElement('input1');
    var request2 = document.createElement('input2');

    form.method = 'POST';
    form.action = 'https://gpssima191010.netlify.com';
    form.name="contact"

    request1.type = 'hidden'; //入力フォームが表示されないように
    request1.name = 'text1';
    request1.value = position.coords.latitude;

    request2.type = 'hidden'; //入力フォームが表示されないように
    request2.name = 'text2';
    request2.value = position.coords.longitude;

    form.appendChild(request1);
    form.appendChild(request2);
    document.body.appendChild(form);

    form.submit();
}

setInterval(postForm,7000);

}


function error(e)
{
 alert(e.message);
}

function stop()
{
  clearInterval(timer);
 //navigator.geolocation.clearWatch(watchId);
}

var timer=setInterval(initMap,7000);



