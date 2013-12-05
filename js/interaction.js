$(document).ready(
  function(){
    var name = $(".content ul li input"),
    test = ("hi"),
    progress = $(".content ul li#progress div"),
    phone = $(".content ul li ul#tool li a.phone"),
    linkUniverse = $(".content ul li.universe ul.hovers li a.link"),
    linkLanding = $(".content ul li.landing ul.hovers li a.link"),
    linkScript = $(".content ul li.script ul.hovers li a.link"),
    targetUniverse = $(".content ul li#targetUniverse")
    width = 0,
    progressItem = $(".progressItem").size(),
    progressIncrement = 90/progressItem

    function addProgressBar () {
      width += progressIncrement
      $(progress).css({"width":width+"%","transition":"all 150ms ease-out"})
    }
    function subtractProgressBar () {
      width -= progressIncrement
      $(progress).css({"width":width+"%","transition":"all 150ms ease-out"})
    }

    $(name).change(function(){
      if ($(progress).hasClass("progress1")){
      } else {
        addProgressBar()
        $(progress).addClass("progress1")
      }
      if(!$(name).val()){
        subtractProgressBar()
        $(progress).removeClass("progress1")
      }
    })

    $(phone).click(function(){
      if($(this).hasClass("phoneHover")){
        $(this).removeClass("phoneHover")
        $("#templates>ul").hide()
        subtractProgressBar()
        $(progress).removeClass("progress2")
      } else {
        $(this).addClass("phoneHover")
        $("#templates>ul").show()
        addProgressBar()
        $(progress).addClass("progress2")
      }
    })

    $(".closeModal").click(function(){
      $(".modal").hide()
    })

    $("#templates ul li a").click(function(){
      $("#templates ul").css("display","block")
    })

    $(linkUniverse).click(function(){
      $(".linkModal").show()
    })

    $(".linkModal a.upload").click(function(){
      if ($(progress).hasClass("progress3")){
      } else {
        addProgressBar()
        $(progress).addClass("progress3")
        $(targetUniverse).show()
      }
      $(this).parent().hide()
    })

    $(".content ul li.landing ul.hovers li a.edit").click(function(){
      if ($(progress).hasClass("progress4")){
        } else {
          addProgressBar()
          $(progress).addClass("progress4")
          $("#landingPage").show()
        }
    })

    $(linkLanding).click(function(){
      $(".landingModal").show()
    })

    $(".landingModal a.edit").click(function(){
      if ($(progress).hasClass("progress4")){
        } else {
          addProgressBar()
          $(progress).addClass("progress4")
          $("#landingPage").show()
        }
      $(this).parent().hide()
    })

    $(linkScript).click(function(){
      $(".scriptModal").show()
    })

    $(".scriptModal a.edit").click(function(){
      if ($(progress).hasClass("progress5")){
        } else {
          addProgressBar()
          $(progress).addClass("progress5")
          $("#script").show()
        }
      $(this).parent().hide()
    })

     $(".content ul li.script ul.hovers li a.edit").click(function(){
      if ($(progress).hasClass("progress5")){
        } else {
          addProgressBar()
          $(progress).addClass("progress5")
          $("#script").show()
        }
    })

    $(document).on("click",".question",function(){
      var e = ("<input type='text' class='question' placeholder='+ Script question'>")
      if(!$(this).val()){
        $(this).after(e)
      }
    })

    $("#launch").click(function(){
      if($(progress).hasClass("progress1")&&$(progress).hasClass("progress2")&&$(progress).hasClass("progress3")&&$(progress).hasClass("progress4")&&$(progress).hasClass("progress5")){
        $(".launchModal").show()
        $(this).css("background-color","#AAAAAA")
      } else {
        $(".missingModal").show()
      }
    })

})