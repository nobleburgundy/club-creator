// Front-End jQuery Code

// Event listenner for create event
$(".create_event").on("submit", function (event) {
  event.preventDefault();

  let newEvent = {
    event_name: $("#event_name").val().trim(),
  };
  $.ajax("/api/event", {
    type: "POST",
    data: newEvent,
  }).then(function () {
    console.log("New event created");

    location.reload();
  });
});

// Event listenner for create club
$(".create_club").on("submit", function (event) {
  event.preventDefault();

  let newEvent = {
    event_name: $("#club_name").val().trim(),
  };
  $.ajax("/api/clubs", {
    type: "POST",
    data: newEvent,
  }).then(function () {
    console.log("New club created");

    location.reload();
  });
});
