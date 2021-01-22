// Front-End jQuery Code

// Event listenner for create event
$(".create_event").on("submit", function (event) {
  event.preventDefault();

  let newEvent = {
    event_name: $("#event_name").val().trim(),
    date_time: $("#data_time").val().trim(),
    location_city: $("#location_city").val().trim(),
    location_state: $("#location_state").val().trim(),
    location_zip: $("#location_zip").val().trim(),
    location_url: $("#location_url").val().trim(),
    category: $("#category").val().trim(),
    event_description: $("#event_description").val().trim(),
  };
  $.ajax("/api/events", {
    type: "POST",
    data: newEvent,
  }).then(function () {
    console.log("New event created");

    location.reload();
  });
});

// Event listenner for create club
$(".create_club").on("submit", function (event) {
  club.preventDefault();

  let newClub = {
    club_name: $("#club_name").val().trim(),
    club_description: $("#club_description").val().trim(),
    location_city: $("#location_city").val().trim(),
    location_state: $("#location_state").val().trim(),
    location_zip: $("#location_zip").val().trim(),
    online_base_url: $("#online_base_url").val().trim(),
    club_image_url: $("#club_image_url").val().trim(),
    category: $("#category").val().trim(),
    creator_id: $("#creator_id").val().trim(),
  };
  $.ajax("/api/clubs", {
    type: "POST",
    data: newClub,
  }).then(function () {
    console.log("New club created");

    location.reload();
  });
});

// Event listenner for update club
$(".create_club").on("submit", function (event) {
  club.preventDefault();

  let newClub = {
    club_name: $("#club_name").val().trim(),
    club_description: $("#club_description").val().trim(),
    location_city: $("#location_city").val().trim(),
    location_state: $("#location_state").val().trim(),
    location_zip: $("#location_zip").val().trim(),
    online_base_url: $("#online_base_url").val().trim(),
    club_image_url: $("#club_image_url").val().trim(),
    category: $("#category").val().trim(),
    creator_id: $("#creator_id").val().trim(),
  };
  $.ajax("/api/clubs", {
    type: "PUT",
    data: newClub,
  }).then(function () {
    console.log("Club updated");

    location.reload();
  });
});

// Event listenner for update event
$(".create_event").on("submit", function (event) {
  event.preventDefault();

  let newEvent = {
    event_name: $("#event_name").val().trim(),
    date_time: $("#data_time").val().trim(),
    location_city: $("#location_city").val().trim(),
    location_state: $("#location_state").val().trim(),
    location_zip: $("#location_zip").val().trim(),
    location_url: $("#location_url").val().trim(),
    category: $("#category").val().trim(),
    event_description: $("#event_description").val().trim(),
  };
  $.ajax("/api/events", {
    type: "PUT",
    data: newEvent,
  }).then(function () {
    console.log("Event updated");

    location.reload();
  });
});
