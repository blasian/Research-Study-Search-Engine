$(document).ready(function(){
    $('.combobox').combobox();
    $(".iframe").colorbox({
    	iframe:true,
    	width:"80%",
    	height:"80%",
    	onComplete: function(){
            $('#cboxTitle').text("Was this resource helpful?");
            $('#cboxTitle').append('<button class="fa fa-thumbs-o-up">');
            $('#cboxTitle').append('<button class="fa fa-thumbs-o-down">');
        }
    });
});