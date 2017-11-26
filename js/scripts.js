$(document).ready(function() {
    $("#recipeImage").attr("src", $("#recipe1").children().children("img").attr("src"));    

    $("#recipe1").hover(function(){             
        $("#recipeImage").attr("src", $("#recipe1").children().children("img").attr("src"));
    });  

     $("#recipe2").hover(function(){        
        $("#recipeImage").attr("src", $("#recipe2").children().children("img").attr("src"));
    }); 

      $("#recipe3").hover(function(){
        $("#recipeImage").attr("src", $("#recipe3").children().children("img").attr("src"));
    }); 

    $("#recipe4").hover(function(){
        $("#recipeImage").attr("src", $("#recipe4").children().children("img").attr("src"));
    });

    $("#loginButton").click(function(){
        if($("#userName").val() === "user" && $("#password").val() === "1234")  {                   
            window.location.href = "./recipes.html";
        } else {
            window.alert("Could not find user with matching credentials");
        }
    });
    
});