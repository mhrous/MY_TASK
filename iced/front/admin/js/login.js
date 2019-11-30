$(document).ready(function() {
  const data = {};
  const passwordInput = $("#input-password");

  $("input").on("blur", function() {
    const name = $(this).attr("name");
    const value = $(this).val();
    data[name] = value;
  });
  $(".fa-eye").on("click", function() {
    const type = passwordInput.attr("type");
    if (type === "text") passwordInput.attr("type", "password");
    else if (type === "password") passwordInput.attr("type", "text");
  });
  $("#login-btn").on("click",()=> login(data));
});
