$(function(){

     
    $(".man").height($(window).height());

    $(window).scroll(function (){

        if(pageYOffset >= 1106)
        {
            $(".html span").animate({

                width:'85%',

            },1500);

            $(".js span").animate({

                width:'70%',

            },2000);
            $(".Bootstrap span").animate({

                width:'90%',

            },2500);
            $(".php span").animate({

                width:'60%',

            },3000);
        }
       
   });
       
     $(".but button").click(function(){

         $(this).addClass("active").siblings().removeClass("active");
         
     });
     
    var $grid =  $(".grid").isotope({

        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
     });

     $(".filter button").on("click",function(){
           
        var value = $(this).attr("data-name");

       $grid.isotope({
           filter: value
       });

     });


   $(window).scroll(function(){

       if(pageYOffset >= 660)
       {
           $(".scroll").fadeIn();
       }
       else
       {
        $(".scroll").fadeOut();

       }

   });

   $(".scroll").on("click",function(){
    
    $("html,body").animate({
              
          scrollTop:0
         },1500);
       
   });

   $("ul li").on("click",function(){

    var attrr = $(this).attr("data-scroll");
         
     $("html , body").animate({
 
         scrollTop: $(attrr).offset().top           
  
     },2000);
    
      
   });

   $("body").niceScroll({
      
    cursorcolor:'var(--main-color)',
    cursorwidth:"10px"

   });

   $("h1").fitText(1.3);
   

   $(".bar i").click(function (){

      if($(".bar ul").hasClass == "none")
      {
        $(".bar ul").toggle("none"); 
      }
      else
      {
        $(".bar ul").toggle("none"); 
      }
   });


    $(".loadingname").fadeOut(4500);


});

var typed2 = new Typed('.hello', {
    strings: ["Full stack developer" ,"I love Design"],
    typeSpeed:150, // سرعه الكتابه بالملي ثانيه
    loop:true,//تكرار الجمله اللي مالنهايه
    backSpeed:20,// سرعه العوه بعد كتابه الجمله بالملي ثانيه

});


let colorli = document.querySelectorAll(".option li");

colorli.forEach(li => {

    li.addEventListener("click" , (e) => {

        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
    });
});



