$(document).ready(function() {
    $('#clock').html(new Date().getHours() + ":" + new Date().getMinutes());
    var interval = setInterval(function() {$('#clock').html(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());}, 1000);
});
