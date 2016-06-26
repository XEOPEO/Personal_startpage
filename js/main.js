$(document).ready(function() {
    $('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));
    var interval = setInterval(function() {$('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));}, 1000);
});
