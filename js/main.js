 $(document).ready(function(){
     $('.card-header').click(function(){

        $('.card .card-body').slideUp();
        $('.card .card-header span').removeClass('fa-minus').addClass('fa-plus');
        $(this).next('.card-body').slideDown();
        $(this).children('span').removeClass("fa-plus").addClass('fa-minus')




     });





 });