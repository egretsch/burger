// console.log("hello")
$(document).on("click", ".burgerAvailable", function(){
    let burgerId = $(this).data("id");
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId
    }).then(function(data){
        location.reload();
    })
});