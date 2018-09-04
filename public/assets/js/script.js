// When we click on our burger it allows us to change it from and eaten to eat
$(document).on("click", ".burgerAvailable", function(){
    let burgerId = $(this).data("id");
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId
    }).then(function(data){
        location.reload();
    })
});
