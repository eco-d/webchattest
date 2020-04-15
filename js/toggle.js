function toggle () {
    var check = $('#textchat').class();
    if (check == 'toggle-on') {
        $('#textchat').attr('class', 'toggle-off');
    }
    else {
        $('#textchat').attr('class', 'toggle-on');
    }
}

$('#toggler').on('click', toggle);