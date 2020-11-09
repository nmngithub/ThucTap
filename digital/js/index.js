
$(document).ready(function(){
   
  // Hiển thị dialog Đăng nhập

  $(".login").click(function(){
      $(".modal").show();
      $(".dang-nhap").show();
  });

    // Ẩn dialog đăng nhập

    $(".exit").click(function(){
      $(".modal").hide();
      $(".dang-nhap").hide();
    });
    
    //Chuyển đăng nhập-đăng ký qua lại

    $(".dang-nhap .tab2").click(function(){
      $(".dang-ky").show();
      $(".dang-nhap").hide();
    });

    $(".dang-ky .tab2").click(function(){
      $(".dang-nhap").show();
      $(".dang-ky").hide();
    });

      // Hiển thị dialog Đăng ký

  $(".registration").click(function(){
    $(".modal").show();
    $(".dang-ky").show();
  });

  // Ẩn dialog đăng ký

  $(".exit").click(function(){
    $(".modal").hide();
    $(".dang-ky").hide();
  });

    // Slide ảnh banner

    var i=0;
    var images = [];
    var time = 2000;

    images[0]="../images/banner1.jpg";
    images[1]="../images/banner2.jpg";

    function changeImage(){
        document.slide.src = images[i];
        if(i<images.length - 1){
            i++;
        }
        else{
            i=0;
        }
        setTimeout(changeImage,time);
    }
    window.onload =changeImage;

    //Hiển thị các tab tin 

    $('.gtvct ul li').click(function(){
        $('.gtvct ul li').removeClass('active');
        $('.gtvct .gtvct-content>div').removeClass('active');

        var className = $(this).attr('class');
        $(this).addClass('active');
        $('.gtvct .gtvct-content>div.'+className).addClass('active');  

    });

    //slide news

    //nút next
       


       
            
          $('.next').click(function(event) {
            var slide_sau = $('.hien').next();
            if(slide_sau.length!=0){
               $('.hien').removeClass('hien');
               slide_sau.addClass('hien');
            }else{
               $('.hien').removeClass('hien');
               $('.slide-news.news:first-child').addClass('hien');
             
            }
     
         
        });




    //nút prev
        $('.prev').click(function(){
          var slide_truoc = $('.hien').prev();
          console.log(slide_truoc.length);

         $('.hien').removeClass('hien');
         slide_truoc.addClass('hien');
       
        });

  });