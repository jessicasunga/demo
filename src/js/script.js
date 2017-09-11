$(document).ready(function(){

    $('#selectAll').click(function() {
        if($(this).is(':checked')) {
            $('tbody input').attr('checked', true);
        } else {
            $('tbody input').attr('checked', false);
        }
    });

});