$(document).ready(function() {

    $(document).on("click", "button.delete", deleteBurger);
    $(document).on("click", "button.eaten", toggleEaten);

    function deleteBurger(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
          method: "DELETE",
          url: "/" + id
        }).then();
      }

      function updateBurger(burger) {
        $.ajax({
          method: "PUT",
          url: "/",
          data: burger
        }).then();
      }

      function toggleEaten(event) {
        event.stopPropagation();
        var burger = $(this).parent().data("burger");
        burger.eaten = !burger.eaten;
        updateBurger(burger);
      }
    
})