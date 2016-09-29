
$(document).ready(function(){
    $("ul.p-opt-list li").click(function(){
        $("ul.p-opt-list li.active").removeClass("active");
        $(this).addClass("active");
        var i = $(this).index();
        $("section.active").removeClass("active");
        $("section:eq("+ i +")").addClass("active");
    });//click to change sections
    $("a.hide-btn").click(function(){
        if($("#float-prouid-opt").hasClass("hide-opt")){
             $("#float-prouid-opt").removeClass("hide-opt");
            $("#float-prouid-opt").css("right","20px");
        }
        else{
        $("#float-prouid-opt").addClass("hide-opt");
        $("#float-prouid-opt").css("right","-120px");
        }
    });
});