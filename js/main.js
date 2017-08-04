$( document ).ready(function() {
    var country = $('#RU');
    country.children().addClass("RU");
    // country.children().attr('fill','red');
    country.hover(function () {
        $(this).css('opacity', 0.5);
    },function () {
        $(this).css('opacity', 1);
    });
    country.click(function () {
        console.log(this.id);
    })
});