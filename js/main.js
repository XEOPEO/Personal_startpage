// Author: Cedric 'Xeo' Dellisse
$(document).ready(function() {
    // Set clock element on actual time
    $('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));
    // Update clock every second to stay up to date
    var interval = setInterval(function() {$('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));}, 1000);
});
