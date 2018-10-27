
$(document).ready(function() {

    $("#drop").click(function(){
     $("#submenu").slideToggle(500);
    });
    
    $("#secondb").click(function(){
        $("p.second").fadeIn(1000);

    });
    $("#firstb").click(function(){

        $("p.second").fadeOut(1000);
    });
    $("#toggle").click(function(){

        $("p.second").fadeToggle();
    });

    $("#fadeto").click(function(){

        $("p.second").fadeTo("slow",0.5);
    });

    $("#fadestop").click(function() {
        $("p.second").stop(true,true).fadeTo();
    });

    $("#slideup").click(function(){

        $("p.second").slideUp();
    });

    $("#slidedown").click(function(){

        $("p.second").slideDown();
    });

    $("#square").click(function() {
        $("#animation").animate({left:'800px'},5000);
    });

    $("#squarestop").click(function() {
        $("#animation").stop();
    });

    $("#chain").click(function () {
        $("p.second").css("background-color", "red").slideUp(2000).slideDown(2000);

    });

    $("#text").click(function () {
        alert("Title: "+ $("p1").text())
    });

    $("#html").click(function () {
        alert("Body: "+ $("body").html())
    });

    $("#attr").click(function () {
        alert("href: "+ $("a").attr("href"))
    });

    $("#val").click(function () {
        alert("value: "+ $("#ename").val())
    });

    $("#val1").click(function () {
        alert("value: "+ $("#esname").val())
    });

    $("#stext").click(function () {
        $("p1").text("Title Changed");
    });

    $("#shtml").click(function () {
         $("p.second").html("<p>Hello World</p>");
    });

    $("#sattr").click(function () {
         $("a").attr("href","https://google.com");
         $("a").css({ "font-size":"30px", "display":"inline", "margin-left":"27%", "color":"yellow"});
        $("a").text("Link changed to Google, Click here.");
    });

    $("#sval").click(function () {
        $("#ename").val("Faisal");
    });

    $("#sval1").click(function () {
        $("#esname").val("Ansari");
    });

    $("#rval").click(function () {
        $("#ename").val("");
    });

    $("#rval1").click(function () {
        $("#esname").val("");
    });

    $("#empty").click(function () {
        $("body").empty();
    });

});
