$(document).ready(
  function(){
    var name = $(".content ul li input"),
    test = ("hi"),
<<<<<<< HEAD
    progress = $(".content ul li#progress div"),
=======
    progress = $(".content #progress div"),
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d
    phone = $(".content ul li ul#tool li a.phone"),
    linkUniverse = $(".content ul li.universe ul.hovers li a.link"),
    linkLanding = $(".content ul li.landing ul.hovers li a.link"),
    linkScript = $(".content ul li.script ul.hovers li a.link"),
    targetUniverse = $(".content ul li#targetUniverse")
    width = 0,
    progressItem = $(".progressItem").size(),
<<<<<<< HEAD
    progressIncrement = 90/progressItem
=======
    progressIncrement = 90/progressItem,
    newCampaignName = $(".newCampaign").val()

    $(document).on("click",".newCampaign",function(){
      if($(".content").is(":visible")){
      } else {
        $("#emptyContainer").hide()
        $(this).attr("placeholder","Campaign Name")
        $(".content").show()
        var e = ("<input type='text' class='new newCampaign2' placeholder='+ new campaign'>")
        if(!$(this).val()){
          $(this).after(e)
        }
      }
    })

    $(document).on("click",".newCampaignIcon",function(){
        $("#emptyContainer").hide()
        $(".newCampaign").attr("placeholder","Campaign Name")
        $(".content").show()
        var e = ("<input type='text' class='new newCampaign2' placeholder='+ new campaign'>")
        if(!$(".newCampaign").val()){
          $(".newCampaign").after(e)
        }
    })

    $(document).on("click",".newCampaign2",function(){
      console.log(test)
      $(".newCampaignModal").show()
    })

    $(document).on("blur",".newCampaign",function(){
      newCampaignName = $(this).val()
    })

    $(".newCampaign").change(function(){
      $(".content ul li .progressItem").val($(".newCampaign").val())
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

    $(".content ul li .progressItem").change(function(){
      $(".newCampaign").val($(".content ul li .progressItem").val())
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
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d

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
<<<<<<< HEAD
=======
          $("#landingPage").prev($(".tip")).show()
          $($("#landingCounter").text(1))
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d
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
<<<<<<< HEAD
=======
          $("#landingPage").prev($(".tip")).show()
          $($("#landingCounter").text(1))
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d
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
<<<<<<< HEAD
=======
          $("#script").prev($(".tip")).show()
          $($("#scriptCounter").text(1))
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d
        }
      $(this).parent().hide()
    })

     $(".content ul li.script ul.hovers li a.edit").click(function(){
      if ($(progress).hasClass("progress5")){
        } else {
          addProgressBar()
          $(progress).addClass("progress5")
          $("#script").show()
<<<<<<< HEAD
=======
          $("#script").prev($(".tip")).show()
          $($("#scriptCounter").text(1))
>>>>>>> 38956da23584576e0bb24713823fd0da64213a5d
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