$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    document.getElementById('minus').onclick = function() {
        var counter = document.getElementById('counter').innerHTML;
        var parsed = parseInt(counter);
        var result = parsed -1;
        document.getElementById('counter').innerHTML = result;
    }
    
    document.getElementById('plus').onclick = function() {
        var counter = document.getElementById('counter').innerHTML;
        var parsed = parseInt(counter);
        var result = parsed +1;
        document.getElementById('counter').innerHTML = result;
    }
});