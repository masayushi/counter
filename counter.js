// 當頁面  準備完成時
$(document).ready(function () {

    // 當視窗捲動時
    $(window).scroll(function () { 
    
        // var 變數 = 資料
    var offset = $("#test").offset();    // 取得元素位移資料
    var top = offset.top;               //上方
    var left = offset.left;             //左方

    // console.log("元素的上方：" + top);

    var windowTop = $(window).scrollTop();

    // console.log("視窗的上方：" + windowTop);
    
    // 判斷式
    // 如果 發生...就會要有...的結果
    // if ( 條件 ) { 程式 } 
   if (windowTop > top) {
    //    console.log("開始執行動畫...")
            $("#test").animate({
                num : 999   //數字
            }, {
                duration: 2000,  //時間
                step: (now) => {                        //步驟
                    $("#test").text(Math.floor(now));   //文字(步驟) - Math.floor() 去小數點
                }
            })
        } 
    });
});