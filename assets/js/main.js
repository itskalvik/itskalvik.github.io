$(document).ready(function () {
  $("#toggleDrawer, #overlay").click(function () {
    $("#drawer").toggleClass("drawer-open");
    $("#overlay").toggleClass("overlay-open");
  });

  // Book cover flip functionality
  $("#book-cover-front").click(function () {
    const frontCover = $("#book-cover-front");
    const backCover = $("#book-cover-back");

    const frontSrc = frontCover.attr("src");
    const backSrc = backCover.attr("src");

    frontCover.attr("src", backSrc);
    backCover.attr("src", frontSrc);
  });
});
