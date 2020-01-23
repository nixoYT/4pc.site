$(document).ready(function(){
  $("#drb").click(function(){
    $("#drbMenu").toggle()
  });
    $('#imagee').attr('draggable', false);

});

$(document).ready(function(){

    $('#increase').attr('draggable', false);
    $('#decrease').attr('draggable', false);
    $('#mouse').attr('draggable', false);
    $('#mouse1').attr('draggable', false);
    $('#keyboard').attr('draggable', false);
    $('#keyboard1').attr('draggable', false);
    $('#case').attr('draggable', false);
    $('#case1').attr('draggable', false);
    $('#monitor').attr('draggable', false);
    $('#monitor1').attr('draggable', false);

});

     
$(document).ready(function(){
    var switchh = 1;
    $("#mouse").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).attr("src", "../images/mouse1.png");
    break;
  case 1:
    $(this).attr("src", "../images/mouse.png");
    break;
  default:
   
}
        
    });    
});

$(document).ready(function(){
    var switchh = 1;
    $("#keyboard").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).attr("src", "../images/keyboard1.png");
    break;
  case 1:
    $(this).attr("src", "../images/keyboard.png");
    break;
  default:
   
}
        
    });    
});

$(document).ready(function(){
    var switchh = 1;
    $("#monitor").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).attr("src", "../images/monitor1.png");
    break;
  case 1:
    $(this).attr("src", "../images/monitor.png");
    break;
  default:
   
}
        
    });    
});

$(document).ready(function(){
    var switchh = 1;
    $("#case").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).attr("src", "../images/case1.png");
    break;
  case 1:
    $(this).attr("src", "../images/case.png");
    break;
  default:
   
}
        
    });    
});






$(document).ready(function(){
    var switchh = 0;
    $("#gamiing").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).css('color','white');
    break;
  case 1:
    $(this).css('color','skyblue');
    break;
  default:
   
}
        
    });    
});





$(document).ready(function(){
    var switchh = 0;
    $("#workstaion").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).css('color','white');
    break;
  case 1:
    $(this).css('color','skyblue');
    break;
  default:
   
}
        
    });    
});






$(document).ready(function(){
    var switchh = 0;
    $("#office").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).css('color','white');
    break;
  case 1:
    $(this).css('color','skyblue');
    break;
  default:
   
}
        
    });    
});






$(document).ready(function(){
    var switchh = 0;
    $("#videoEditing").click(function(){
        switchh = switchh + 1;
        if (switchh > 1) {
  switchh = 0;
}
        
        switch(switchh) {
  case 0:
    $(this).css('color','white');
    break;
  case 1:
    $(this).css('color','skyblue');
    break;
  default:
   
}
        
    });    
});






$(document).ready(function(){
    $("#page2btn").click(function(){
$("#page1").hide()
        $("#page2").show()
    });    
});


$(document).ready(function(){
    $("#page1btnr").click(function(){
$("#page1").show()
        $("#page2").hide()
    });    
});


$(document).ready(function(){
    $("#page3btn").click(function(){
$("#page4").hide()
        $("#page3").show()
    });    
});

$(document).ready(function(){
    $("#page2btnr").click(function(){
$("#page2").show()
        $("#page3").hide()
    });    
});

$(document).ready(function(){
    $("#page4btn").click(function(){
$("#page2").hide()
        $("#page3").show()
    });    
});

$(document).ready(function(){
    $("#page3btnr").click(function(){
$("#page3").show()
        $("#page4").hide()
    });    
});









    var caseSize = 0;




$(document).ready(function(){

    $("#ATX").click(function(){
            caseSize = 1;
        
        switch(caseSize) {
  case 0:
    $(this).css('color','white');
    break;
  case 1:
    $("#mini-ITX").css('color','white');
    $("#micro-ATX").css('color','white');
    $("#ATX").css('color','skyblue');
    break;
  default:
   
}
        
    });    
});

$(document).ready(function(){

    $("#micro-ATX").click(function(){
            caseSize = 2;
        
        switch(caseSize) {
  case 0:
    $(this).css('color','white');
    break;
  case 2:
    $("#mini-ITX").css('color','white');
    $("#micro-ATX").css('color','skyblue');
    $("#ATX").css('color','white');
    break;
  default:
   
   
}
        
    });    
});

$(document).ready(function(){

    $("#mini-ITX").click(function(){
            caseSize = 3;
        
        switch(caseSize) {
  case 0:
    $(this).css('color','white');
    break;
  case 3:
    $("#mini-ITX").css('color','skyblue');
    $("#micro-ATX").css('color','white');
    $("#ATX").css('color','white');
    break;
  default:
   
}
        
    });    
});














$(document).ready(function(){
    $(".signIn").click(function(){
        $(".signUpEssay").hide();
        $(".signInEssay").show();
    });
});


$(document).ready(function(){
    $(".signUp").click(function(){
        $(".signUpEssay").show();
        $(".signInEssay").hide();
    });
});





















var costt = 0;
    
    $(document).ready(function(){
      
  $("#increase").click(function(){
      costt = costt + 50;
    $("#cost").text('$' + costt);
  });
});

         
    $(document).ready(function(){
        
  $("#decrease").click(function(){
      
if (costt >= 50) {
 costt = costt - 50;
}
      
    $("#cost").text('$' + costt);
  });
});
