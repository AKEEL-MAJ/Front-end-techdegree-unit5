

$('#image-search').on('keyup', function(){
    const value = $('#image-search').val().toLowerCase();

    $('a').each(function(index, element){
       const caption = $(this).attr('data-title').toLowerCase();

        if (caption.indexOf(value) > -1){
            $(this).show();
        } else {
            $(this).hide();
        }

      })


});
