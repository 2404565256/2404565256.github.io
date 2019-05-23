$(function() {
  //声明一个变量,用来记录当前显示的图片的索引.
  $(".slider").mouseleave(function() {
    clearInterval(timer);
    var index = 0;
    //右边焦点点击事件
    timer = setInterval(function() {
      index++;
      //轮播图片是8张,那最后一张的索引是7, 那在最后一张点击右边焦点index加加就变为8,但事实上应该回到第0张.
      if (index == 6) {
        index = 0;
      }
      $(".slider>ul>li")
        .stop(true, false)
        .eq(index)
        .fadeIn(500)
        .siblings("li")
        .fadeOut(500);
      //左边焦点点击事件.
    }, 1500);
  });
  $(".slider>ul>li").mouseenter(function() {
    clearInterval(timer);
  });
  var timer;
  var index = 0;

  $(".arrow-right").click(function() {
    index++;
    //轮播图片是8张,那最后一张的索引是7, 那在最后一张点击右边焦点index加加就变为8,但事实上应该回到第0张.
    if (index == 6) {
      index = 0;
    }
    $(".slider>ul>li")
      .eq(index)
      .fadeIn(500)
      .siblings("li")
      .fadeOut(500);
  });
  //左边焦点点击事件.
  $(".arrow-left").click(function() {
    index--;
    //索引为0是第一张, 那在第一张点击左边焦点, 就应该回到最后一张.
    if (index < 0) {
      index = 5;
    }
    $(".slider>ul>li")
      .eq(index)
      .fadeIn(500)
      .siblings("li")
      .fadeOut(500);
  });


  $(" .main-nav ul>li").mouseenter(function() {
    $(this)
      .addClass("active")
      .siblings("li")
      .removeClass("active");

    var idx = $(this).index();
    if (idx == 1) {
      idx = 0;
    }
    if (idx - 1 < 0) {
      idx = 1;
    }

    $(".products>div")
      .eq(idx - 1)
      .removeClass("dis")
      .siblings("div")
      .addClass("dis");
      $("#bg").removeClass("dis").addClass("login-bg")
  });

  $(".products").mouseleave(function () {
           $(".products>div").addClass("dis");
           $("#bg").removeClass("login-bg").addClass("dis")
           
  })
  
$(".Car_nav>ul>li").click(function () {
     var $idx = $(this).index(); 
     $(".Car_nav>ul>li").eq($idx).addClass("activeList").siblings("li").removeClass("activeList")
     $(".lincolnCar .car").eq($idx).removeClass("dis").siblings(".car").addClass("dis")
     
})
 $(".sticky_left>li").mouseenter(function() {
          //1.1 没有参数有一个默认的动画时长.
          //   $("#div1").slideDown();
          $(".sticky_right").stop(true,false).animate({
            left:50
          })
          var listIdx=$(this).index()
          $(".sticky_right li").eq(listIdx).addClass("stickyBgc").siblings("li").removeClass("stickyBgc")
        });

        $(".sticky").mouseleave(function() {
          //1.1 没有参数有一个默认的动画时长.
          //   $("#div1").slideDown();
          $(".sticky_right").animate({
            left:-124
          })
        });

});
