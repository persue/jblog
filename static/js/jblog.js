$(document).ready(function(){
//$(window).scroll(function(){
    //var scrollTop = $(this).scrollTop();
    //var scrollHeight = $(document).height();
    //var windowHeight = $(this).height();
    //if(scrollTop + windowHeight == scrollHeight){
        //$("#fright").css('display','block');
    //}
    //else{
        //$("#fright").css('display','none');
    //}
//});
    $(".a_post").click(function(e){
        e.preventDefault();
        $.ajax({
            url:$(this).attr('href'),
            type:'POST',
            success:function(data,textstatus,jqXHR){
                window.location.href = data;
                window.location,reload();
            },
            dataType:'text'
        });
    });
    var fleftHeight = $('#fleft').height();
    $('#fright').css('height',fleftHeight);
    $('.footer-text').css('line-height',fleftHeight.toString()+'px');
$(window).resize(function(){
    var fleftHeight = $('#fleft').height();
    $('#fright').css('height',fleftHeight);
    $('.footer-text').css('line-height',fleftHeight.toString()+'px');
});
$("#container").imagesLoaded().always(function(){
            var container = document.querySelector('#container-inner');
            var msnry = new Masonry( container, {
                  columnWidth: ".sub",
                    itemSelector: '.article'
                    });
            //$(".article").css('margin-left','4%');
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        console.log(documentHeight,windowHeight);
        //if (documentHeight==windowHeight){
            //$("#fright").css('display','block');
        //}
        var uyan = document.querySelector('#uyan_frame');
        if(!uyan){
            if($(window).height()==$('#container').height()){
                $('#fright').css('position','absolute');
                $('#fright').css('width','74%');
                $('#fright').css('bottom','0px');
            };
        };
});
});

