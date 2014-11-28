$(function(){
    var form = $('form'),
        output = $('#output'),
        input = $('#input');

    form.submit(function(e){
        var self = $(this),
            ajaxPromise = $.ajax({
                url: 'process/',
                type: 'POST',
                data: self.serialize()
            });

       ajaxPromise.done(function(data, textStatus, xhr) {
            output.val(data);
            form
                .find('p')
                .removeClass('error h-show')
                .addClass('h-hide');

            input.removeClas('error');
        });

       ajaxPromise.fail(function(xhr, textStatus, errorThrown) {
            input
                .addClass('error');

            form
                .find('p')
                .addClass('error h-show')
                .html(xhr.responseText.split('<br>')[0]);
        });

        e.preventDefault();
    });
});

