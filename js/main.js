$( document ).ready(function() {

    // $("body").addClass("ie");
    var country = $('.mapItem');
    country.hover(function () {
        $(this).css('opacity', 0.5);
    },function () {
        $(this).css('opacity', 1);
    });
    country.click(function () {
        console.log(this.id);
    });

    var country_select = $('#select_country > li');
    country_select.on('click', function(){
        country_select.removeClass('current');
        $(this).addClass('current');
    });

    var days_select =  $('#select_days > li');
    days_select.on('click', function(){
        days_select.removeClass('current');
        $(this).addClass('current');
    });

    var type_select = $('#select_type > li');
    type_select.on('click', function(){
        type_select.removeClass('current');
        $(this).addClass('current');
    });

    var description_select = $('#select_description > li');
    description_select.on('click', function(){
        description_select.removeClass('current');
        $(this).addClass('current');
    });
});