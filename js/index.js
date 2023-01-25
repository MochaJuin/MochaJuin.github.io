$(document).ready(function() {

    $(".start-btn").on("click", function() {
        $("html").css("overflow", "auto");
        $(this).parent().fadeOut();
    })
    var choiceWrapNum = 4;
    var choiceMapL0 = 8; // 루키
    var choiceMapL1 = 24; // L1
    var choiceMapL2 = 23; // L2
    var choiceMapL3 = 9; // L3

        
    for(i=0; i<=choiceWrapNum-1; i++) {
        var choiceWrapHtml = '';
            choiceWrapHtml += '<div class="class-name class-' + i +'" value=""><h1 class="l-title">'+ mapName[i][0] +'</h1><div class="result-val" value=""></div></div>';
            
            $(".ban").append(choiceWrapHtml);
    }

    for(i=0; i<=choiceMapL0-1; i++) {
        var choiceMapL0Html = '';
            choiceMapL0Html += '<div class="map-choice m-'+ i +'" value="x">';
            choiceMapL0Html += '<div class="choice-wrap">';
            choiceMapL0Html += '<div class="map-name">'+ mapName[0][i+1][0] +'</div>';
            choiceMapL0Html += '<div class="choice-box-wrap">';
            choiceMapL0Html += '<div class="choice-1 choice-box" value="1">'+ mapName[0][i+1][1] +'</div>';
            choiceMapL0Html += '<div class="choice-2 choice-box" value="2">'+ mapName[0][i+1][2] +'</div>';
            choiceMapL0Html += '<div class="choice-3 choice-box" value="3">'+ mapName[0][i+1][3] +'</div>';
            choiceMapL0Html += '<div class="choice-4 choice-box" value="4">'+ mapName[0][i+1][4] +'</div>';
            choiceMapL0Html += '<div class="choice-5 choice-box" value="5">'+ mapName[0][i+1][5] +'</div>';
            choiceMapL0Html += '<div class="choice-6 choice-box" value="6">'+ mapName[0][i+1][6] +'</div>';
            choiceMapL0Html += '<div class="choice-7 choice-box" value="7">'+ mapName[0][i+1][7] +'</div>';
            choiceMapL0Html += '</div>';
            choiceMapL0Html += '</div>';
            $(".class-0").append(choiceMapL0Html);
    }

    for(i=0; i<=choiceMapL1-1; i++) {
        var choiceMapL1Html = '';
            choiceMapL1Html += '<div class="map-choice m-'+ i +'" value="x">';
            choiceMapL1Html += '<div class="choice-wrap">';
            choiceMapL1Html += '<div class="map-name">'+ mapName[1][i+1][0] +'</div>';
            choiceMapL1Html += '<div class="choice-box-wrap">';
            choiceMapL1Html += '<div class="choice-1 choice-box" value="1">'+ mapName[1][i+1][1] +'</div>';
            choiceMapL1Html += '<div class="choice-2 choice-box" value="2">'+ mapName[1][i+1][2] +'</div>';
            choiceMapL1Html += '<div class="choice-3 choice-box" value="3">'+ mapName[1][i+1][3] +'</div>';
            choiceMapL1Html += '<div class="choice-4 choice-box" value="4">'+ mapName[1][i+1][4] +'</div>';
            choiceMapL1Html += '<div class="choice-5 choice-box" value="5">'+ mapName[1][i+1][5] +'</div>';
            choiceMapL1Html += '<div class="choice-6 choice-box" value="6">'+ mapName[1][i+1][6] +'</div>';
            choiceMapL1Html += '<div class="choice-7 choice-box" value="7">'+ mapName[1][i+1][7] +'</div>';
            choiceMapL1Html += '</div>';
            choiceMapL1Html += '</div>';
            $(".class-1").append(choiceMapL1Html);
    }

    for(i=0; i<=choiceMapL2-1; i++) {
        var choiceMapL2Html = '';
            choiceMapL2Html += '<div class="map-choice m-'+ i +'" value="x">';
            choiceMapL2Html += '<div class="choice-wrap">';
            choiceMapL2Html += '<div class="map-name">'+ mapName[2][i+1][0] +'</div>';
            choiceMapL2Html += '<div class="choice-box-wrap">';
            choiceMapL2Html += '<div class="choice-1 choice-box" value="1">'+ mapName[2][i+1][1] +'</div>';
            choiceMapL2Html += '<div class="choice-2 choice-box" value="2">'+ mapName[2][i+1][2] +'</div>';
            choiceMapL2Html += '<div class="choice-3 choice-box" value="3">'+ mapName[2][i+1][3] +'</div>';
            choiceMapL2Html += '<div class="choice-4 choice-box" value="4">'+ mapName[2][i+1][4] +'</div>';
            choiceMapL2Html += '<div class="choice-5 choice-box" value="5">'+ mapName[2][i+1][5] +'</div>';
            choiceMapL2Html += '<div class="choice-6 choice-box" value="6">'+ mapName[2][i+1][6] +'</div>';
            choiceMapL2Html += '<div class="choice-7 choice-box" value="7">'+ mapName[2][i+1][7] +'</div>';
            choiceMapL2Html += '</div>';
            choiceMapL2Html += '</div>';
            $(".class-2").append(choiceMapL2Html);
    }

    for(i=0; i<=choiceMapL3-1; i++) {
        var choiceMapL3Html = '';
            choiceMapL3Html += '<div class="map-choice m-'+ i +'" value="x">';
            choiceMapL3Html += '<div class="choice-wrap">';
            choiceMapL3Html += '<div class="map-name">'+ mapName[3][i+1][0] +'</div>';
            choiceMapL3Html += '<div class="choice-box-wrap">';
            choiceMapL3Html += '<div class="choice-1 choice-box" value="1">'+ mapName[3][i+1][1] +'</div>';
            choiceMapL3Html += '<div class="choice-2 choice-box" value="2">'+ mapName[3][i+1][2] +'</div>';
            choiceMapL3Html += '<div class="choice-3 choice-box" value="3">'+ mapName[3][i+1][3] +'</div>';
            choiceMapL3Html += '<div class="choice-4 choice-box" value="4">'+ mapName[3][i+1][4] +'</div>';
            choiceMapL3Html += '<div class="choice-5 choice-box" value="5">'+ mapName[3][i+1][5] +'</div>';
            choiceMapL3Html += '<div class="choice-6 choice-box" value="6">'+ mapName[3][i+1][6] +'</div>';
            choiceMapL3Html += '<div class="choice-7 choice-box" value="7">'+ mapName[3][i+1][7] +'</div>';
            choiceMapL3Html += '</div>';
            choiceMapL3Html += '</div>';
            $(".class-3").append(choiceMapL3Html);
    }

    var nextHtml = '';
        nextHtml += '<div class="next btn">다음으로</div>';
        $(".class-name").append(nextHtml);

    $(".choice-box").on("click", function() {
        $(this).parent().find(".choice-box").css({"background-color" : "#BCABE2", "color": "#111"});
        $(this).css({"background-color" : "#F2B4B5", "color": "#111"});
        var choiceValue = $(this).attr("value");
        var valueTotal = $(this).parents(".class-name").find(".map-choice").attr("value");
        var valueTotalNum = add(valueTotal); 
        $(this).parents(".class-name").attr("value", valueTotalNum);
        $(this).parent().parent().parent().attr("value", choiceValue);

        if ($(this).parents(".class-0")) {
            $(this).parents(".class-0").attr("value", choiceValue)

        }
        var resultVal = Number(value1) + Number(value2) + Number(value3) + Number(value4);
        
        var resultComp = resultVal / choiceMapL0;
        $(this).parent().parent().parent().parent().attr("value", Math.round(resultComp));
    });



    var pageNum = 0;
    var pageMax = 4;

    /* 클릭 */
    $(".click-me").click(function() {
        pageNum = 0;
        $(".ban").find(".class-name").hide();
        $(".ban").find(".class-0").fadeIn();
        $(".result-wrap").fadeOut();
        $(".next").show();
        $("body").css("background-color", "#FAB83B")
    });


    /* 이전,다음 버튼 */ 
    $(".prev").on("click", function() {
        if(pageNum == 0) {
            alert("그만");
            return false;
        } else {
            pageNum--;
            $(".ban").css("left", "-" + pageNum*100 + "%");
        }
    })
    $(".next").on("click", function() {
        window.scrollTo(0,0);
        var classValue1 = $(this).parent().attr("value");
        var classValue2 = $(this).parent().attr("value");
        var classValue3 = $(this).parent().attr("value");
        var classValue4 = $(this).parent().attr("value");
        var classRookie = Number(classValue1);
        var classL3 = Number(classValue2);
        var classL2 = Number(classValue3);
        var classL1 = Number(classValue4);
        var classTotal = Number(classValue1) + Number(classValue2) + Number(classValue3) + Number(classValue4);
        var classComp = classTotal / 4;
        // 이벤트는 주석 풀기
        //if($(this).parent().attr("value") == "NaN" || $(this).parent().attr("value") == "") {
        //    alert("모든 항목을 체크해 주세요");
        //    return false;
        //} else {
            if(pageNum == pageMax - 1) {
                $(".rookie").text(classRookie);
                $(".l3").text(classL3);
                $(".l2").text(classL2);
                $(".l1").text(classL1);
                $(".total").text(classComp);
                $(".result-wrap").fadeIn();
                $(this).hide();
                return false;
            }
            if(pageNum == pageMax - 2) {
                $(".class-3").find(".next").text("결과보기");
            }
            pageNum++;
            if(pageNum == 0) {
                $("body").css("background-color", "#77D505")
            } else if(pageNum == 1) {
                $("body").css("background-color", "#77D505")
            } else if(pageNum == 2) {
                $("body").css("background-color", "#06A9F6")
            } else if(pageNum == 3) {
                $("body").css("background-color", "#F42B01")
            }
            $(this).fadeIn();
            $(".class-name").hide();
            $(".ban").find(".class-" + pageNum).fadeIn(500);
        //}



    });

    $(".version-btn").on("click", function() {
        $(".version-modal-wrap").fadeIn(300);
    })
    
    $(".modal-close").on("click", function() {
        $(this).parent().parent().fadeOut(300);
    })
})