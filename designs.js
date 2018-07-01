//Selecting the document;
$(document).ready(function(){
    $('#sizePicker').submit(function makeGrid(grid){
        $('table tr').remove();
        var rows = $('#inputHeight').val();
        var col = $('#inputWidth').val();
        //Adding elements to the html document.
        for(var r = 1; r <= rows; r++){
            $('table').append('<tr> </tr>');
            for(var c = 1; c <= col; c++){
                $('tr:last').append('<td> </td>');
                $('td').attr("class", 'cells');
            }
        }
        //Prevent any default responses by the grid
        grid.preventDefault();

        //Selectors and (shorthand)listeners
        $('.cells').click(function(event){
            var cellColour = $('#colorPicker').val();
            $(event.target).css('background-color', cellColour);
        });
    });
});

//Code by MattJR(Matthew Jeremiah Rungwe) </Code>
