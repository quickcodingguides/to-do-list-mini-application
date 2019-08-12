// Inputs
$(document).ready(function() {
    var Input = '.input_container input';

    $(Input).focus(function() {
        $(this).attr('placeholder','');
    });

    $(Input).focusout(function() {
        if($(this).attr('placeholder') == '') {
            $(this).attr('placeholder','Add a task');
        } else {

        }
    });

    $(Input).on('keydown', function(e) {
        $(this).parent().find('i').fadeIn('fast');
    });

    $(Input).focusout(function() {
        if($(this).val() == '') {
            $(this).parent().find('i').fadeOut('fast');
        } else {
            $(this).parent().find('i').fadeIn('fast');
        }
    });

    $('.clear_input').click(function() {
        $(Input).val('');
        $(this).fadeOut('fast');
    });
});


$(function() {
    var Input = '.task_input';
    var ToDoWrapper = '.todo_wrapper';

    $(Input).on('keyup',function(e) {
        // Maybe change this to keydown or keypress if you want to input it quickly.

        if(e.keyCode == 13 && $(Input).val() != "") {

            // var TaskInputed = $('<p></p>').text($(Input).val());

            var TaskInputed = '<p>' + $(Input).val() + '</p>';
            var Task = '<div class="task_container"><div class="task_check_container"><i class="fas fa-square"></i></div><div class="task_name_container">' + TaskInputed + '</div><div class="task_trash_container"><i class="fas fa-trash"></i></div></div></div>';

            var TaskNotCompletedWrapper = '.tasks_not_completed_container .tasks_container';

            $(TaskNotCompletedWrapper).append(Task);
            $(Input).val('');
            $('.clear_input').fadeOut('fast');

        } else if (e.keyCode == 13 && $(Input).val() == "") {
            // $('.todo_alert_message').fadeIn('fast');
            // setTimeout(function() {
            //     $('.todo_alert_message').fadeIn('fast');
            // }, 200);
            $('.todo_alert_message').fadeIn("fast", function() { $(this).delay(1000).fadeOut("fast"); });
        }
    });

    $('.submit_button').on('click',function(e) {
        // Maybe change this to keydown or keypress if you want to input it quickly.

        if($(Input).val() != "") {

            // var TaskInputed = $('<p></p>').text($(Input).val());

            var TaskInputed = '<p>' + $(Input).val() + '</p>';
            var Task = '<div class="task_container"><div class="task_check_container"><i class="fas fa-square"></i></div><div class="task_name_container">' + TaskInputed + '</div><div class="task_trash_container"><i class="fas fa-trash"></i></div></div></div>';

            var TaskNotCompletedWrapper = '.tasks_not_completed_container .tasks_container';

            $(TaskNotCompletedWrapper).append(Task);
            $(Input).val('');
            $('.clear_input').fadeOut('fast');

        } else if ($(Input).val() == "") {
            // $('.todo_alert_message').fadeIn('fast');
            // setTimeout(function() {
            //     $('.todo_alert_message').fadeIn('fast');
            // }, 200);
            $('.todo_alert_message').fadeIn("fast", function() { $(this).delay(1000).fadeOut("fast"); });
        }
    });

    var Trash = '.task_trash_container i';
    var TaskWrapper = '.tasks_completion_container';

    $(TaskWrapper).on('click', Trash, function(e) {
        var Task = $(this).parent().parent()

        $(Task).fadeOut('fast');
        setTimeout(function() {
            $(Task).remove();
        }, 200);
    });

    // var Check = '.task_check_container i';
    var TaskCompletedIcon = '.tasks_completed_container .tasks_container .task_container .task_check_container i';
    var TaskNotCompletedIcon = '.tasks_not_completed_container .tasks_container .task_container .task_check_container i';

    $(ToDoWrapper).on('click', TaskCompletedIcon, function(e) {
        var Task = $(this).parent().parent();

        $(Task).appendTo('.tasks_not_completed_container .tasks_container');
        $('.tasks_not_completed_container .tasks_container .task_container .task_check_container i').each(function() {
            $(this).attr('class','fas fa-square')
        });
    });

    $(ToDoWrapper).on('click', TaskNotCompletedIcon, function(e) {
        var Task = $(this).parent().parent();

        $(Task).appendTo('.tasks_completed_container .tasks_container');
        $('.tasks_completed_container .tasks_container .task_container .task_check_container i').each(function() {
            $(this).attr('class','fas fa-check-square')
        });
    });

    $(ToDoWrapper).on('mouseenter', TaskCompletedIcon, function(e) {

        $(this).attr('class', 'fas fa-square');
    
    }).on('mouseleave', TaskCompletedIcon, function(e) {

        $(this).attr('class', 'fas fa-check-square');
    });

    $(ToDoWrapper).on('mouseenter', TaskNotCompletedIcon, function(e) {

        $(this).attr('class', 'fas fa-check-square');
    
    }).on('mouseleave', TaskNotCompletedIcon, function(e) {

        $(this).attr('class', 'fas fa-square');
    });
});


// $(document).ready(function() {
    // var Input = '.task_input';
//     $('.task_input').bind('keyup blur',function(){ 
//         var Input = $(this);
//         Input.val(Input.val().replace(/[^a-zA-Z]/g,'') ); }
//     );

//     $('.task_input').bind('keydown blur',function(){ 
//         var Input = $(this);
//         Input.val(Input.val().replace(/[^a-zA-Z]/g,'') ); }
//     );
// });

$(document).ready(function() {
    var Input = '.task_input';
    $(Input).on("keydown", function(event){
        // Controls
        var arr = [8,9,16,17,20,32,35,36,37,38,39,40,45,46,188,190,191];

        // Letters
        for(var i = 65; i <= 90; i++){
            arr.push(i);
        }

        // Numbers on top of letters
        for(var i = 48; i <= 57; i++) {
            arr.push(i)
        }

        // Keypad
        for(var i = 96; i <= 105; i++) {
            arr.push(i)
        }

        // PrevDefault
        if(jQuery.inArray(event.which, arr) === -1){
            event.preventDefault();
        }
    });

    // On Paste
    $(Input).on("input", function(){
        // var regexp = /^[a-zA-Z0-9\-\s]+$/;
        var regexp = /[^a-zA-Z0-9\\?,. ]/g;
        if($(this).val().match(regexp)){
          $(this).val( $(this).val().replace(regexp,'') );
        }
    });
});


// TODO:
// $(document).ready(function() {
//     if ($('#element').is(':empty')){
//         //do something
//     }
// });

// Protection in php https://stackoverflow.com/questions/13622908/limit-user-input-by-php