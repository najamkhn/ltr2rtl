$(function(){
    $('.felipeMain').submit(function(e){
        e.preventDefault();

        var self = $(this);
        $.ajax({
            url: 'process/',
            type: 'POST',
            data: self.serialize()
        }).done(function(data, textStatus, xhr) {
            $('.output').html(data);
        }).fail(function(xhr, textStatus, errorThrown) {
            $('.output').html("Something went wrong, #MeSorry");
        });

    });
});

