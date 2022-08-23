(function ($) {
  // preloder
  $(document).ready(function () {
    // Users can skip the loading process if they want.

    // Will wait for everything on the page to load.
    $(window).bind("load", function () {
      $(".preloder-overlay, body").addClass("loaded");
      setTimeout(function () {
        $(".preloder-overlay").css({
          display: "none",
        });
      }, 2000);
    });

    // Will remove overlay after 1min for users cannnot load properly.
    setTimeout(function () {
      $(".overlay, body").addClass("loaded");
    }, 60000);
  });

  // mobile menu
  $(function () {
    $(document).ready(function () {
      $(".hamburger").click(function () {
        $(".sidebar__navigation").toggleClass("active");
      });
      $(".hamburger").click(function () {
        $(".sections,.hamburger").toggleClass("remove");
      });
      $("#v-pills-tab .nav-link").click(function () {
        $(".sidebar__navigation").removeClass("active");
      });
      $("#v-pills-tab .nav-link").click(function () {
        $(".hamburger").removeClass("remove");
      });
      $(".sub-link").click(function () {
        $(".hamburger").removeClass("remove");
      });
      $(".sub-link").click(function () {
        $(".sidebar__navigation").removeClass("active");
      });
    });
  });

  // scroll up start here
  $(function () {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $(".scrollToTop").css({
          bottom: "5%",
          opacity: "1",
          transition: "all 0.5s ease",
        });
      } else {
        $(".scrollToTop").css({
          bottom: "-30%",
          opacity: "0",
          transition: "all .5s ease",
        });
      }
    });

    //Click event to scroll to top
    $(".scrollToTop").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });

  // progress bar
  $(function () {
    $("#example").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example2").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example3").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example4").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example5").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example6").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example7").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
    $("#example8").pieChart({
      size: 100,
      trackColor: "#eeeeee",
      barColor: "#ff6c2e",
      lineCap: "round",
      lineWidth: 8,
      animate: {
        duration: 2000,
        enabled: true,
      },
      onStep: function (from, to, currentValue) {
        return;
      },
    });
  });

  // lightcase
  $(function () {
    $("a[data-rel^=lightcase]").lightcase();
  });

  //contact form js
  $(function () {
    var form = $("#contact-form");
    var formMessages = $(".form-message");
    $(form).submit(function (e) {
      e.preventDefault();
      var formData = $(form).serialize();
      $.ajax({
        type: "POST",
        url: $(form).attr("action"),
        data: formData,
      })
        .done(function (response) {
          $(formMessages).removeClass("error");
          $(formMessages).addClass("success");
          $(formMessages).text(response);
          $("#contact-form input, #contact-form textarea").val("");
        })
        .fail(function (data) {
          $(formMessages).removeClass("success");
          $(formMessages).addClass("error");
          if (data.responseText !== "") {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              "Oops! An error occured and your message could not be sent."
            );
          }
        });
    });
  });

  // ajax contact form
  $(document).ready(function () {
    $(function () {
      var form = $("#contact-form");
      var formMessages = $(".form-message");
      $(form).submit(function (e) {
        e.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
          type: "POST",
          url: $(form).attr("action"),
          data: formData,
        })
          .done(function (response) {
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
            $(formMessages).text(response);
            $("#contact-form input, #contact-form textarea").val("");
          })
          .fail(function (data) {
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");
            if (data.responseText !== "") {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text(
                "Oops! An error occured and your message could not be sent."
              );
            }
          });
      });
    });
  });
})(jQuery);
