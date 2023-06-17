$(document).ready(function () {
  $("#submit").click(function () {
    const inputValue = $("#textinput").val();
    if (inputValue !== "") {
      $("#msg").text("please wait...");
      $.ajax({
        url: "/api/image",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ prompt: inputValue }),
        success: function (response) {
          // alert(JSON.stringify(response));
          $("#msg").hide();
          $("#images").empty();
          if (!response.data || !response.data.length > 0) {
            return alert(response.message);
          }
          $.each(response.data, function (index, image) {
            $("#images").append(`
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="${image.url}"
                  alt="not found"
                />
              </div>
            `);
          });
        },
        error: function (xhr, status, error) {
          alert("Error: " + error);
        },
      });
    } else {
      $("#msg").text("Please enter the text").addClass("text-red-700");
    }
  });
});
