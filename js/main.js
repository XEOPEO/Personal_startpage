// Author: Cedric 'Xeo' Dellisse
$(document).ready(function () {
    // Set clock element on actual time
    $('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));
    // Update clock every second to stay up to date
    var interval = setInterval(function () {
        $('#clock').html(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1"));
    }, 1000);

    // Create menu based on menu data
    $.each(data, function (k, v) {
        $.fn.createMenuItem(k, v);
    });

    $("input#search").keypress(function (e) {
        if (e.keyCode == 13) {
            var query = $("input#search").val().trim();
            if (typeof query != "undefined" && query !== "") $.fn.googleSearch(query);
        }
    });
});

$.fn.createMenuItem = function (k, v) {
    var article = document.createElement("article");
    var header = document.createElement("header");
    header.textContent = k;
    article.appendChild(header);

    var section = document.createElement("section");
    var ul = document.createElement("ul");
    $.each(v, function (k, v) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", v.url);
        a.textContent = v.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    section.appendChild(ul);
    article.appendChild(section);
    $("#menu").append(article);
};

$.fn.googleSearch = function (query) {
    var queryString = "",
        arrQuery = query.split(' ');

    for (var i = 0; i < arrQuery.length; i++) {
        queryString += arrQuery[i];
        if (i !== (arrQuery.length - 1)) queryString += "+";
    }

    window.location.assign("http://ddg.gg/search?q=" + queryString);
};