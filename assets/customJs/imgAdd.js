$(document).ready(function(){
    $("div").each(function(i){
        $(this).append("<img src='uploads/"+(++i)+".jpg' width='' height=''>");
    })
})