// Front-End jQuery Code
$(document).ready(() => {
  const searchForm = $("form#search-form");
  const searchInput = $("input#stretch");
  const searchButton = $("button#search-button");

  // load the previous search as a placeholder if exists
  if (window.location.search) {
    const query = window.location.search;
    const searchTerm = query.substr(query.indexOf("=") + 1);
    // decodeURI is used so %20 isnt displayed instead of spaces
    searchInput.attr('placeholder', decodeURI(searchTerm));
  }

  searchForm.on("submit", (event) => {
    event.preventDefault();
    const query = searchInput.val();
    // handlebars /search route will handle rendering the data, so just nav to
    // /search with the query parameter
    window.location.replace("/search?q=" + query);
  });

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
    event.preventDefault();

    const defaultCardImg = "/../assets/img/default_club_img.png";

    let newClub = {
      club_name: $("#club_name").val().trim(),
      club_description: $("#club_description").val().trim(),
      location_city: $("#location_city").val().trim(),
      location_state: $("#location_state").val().trim(),
      location_zip: $("#location_zip").val().trim(),
      online_base_url: $("#online_base_url").val().trim(),
      club_image_url: defaultCardImg,
      category: $("#category").val().trim(),
    };
    console.log(newClub);
    $.ajax("/api/clubs", {
      type: "POST",
      data: newClub,
    }).then(function (data) {
      console.log("New club created");
      location.replace(`/clubs/${data.id}`);
    });
  });

  // Event listenner for update club
  $(".update_club").on("submit", function (event) {
    club.preventDefault();
    let id = $(this).data("id");

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
    $.ajax("/api/clubs" + id, {
      type: "PUT",
      data: newClub,
    }).then(function () {
      console.log("Club updated");

      location.reload();
    });
  });

  // Event listenner for update event
  $(".update_event").on("submit", function (event) {
    event.preventDefault();
    let id = $(this).data("id");

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
    $.ajax("/api/events" + id, {
      type: "PUT",
      data: newEvent,
    }).then(function () {
      console.log("Event updated");

      location.reload();
    });
  });

  // Event listener for joining a club
  $(".gravitate").on("click", function (event) {
    let clubid = $(this).data("id");
    console.log("club id " + clubid);
    // get user id via api call
    $.get("/api/user_data").then((data) => {
      let newJoin = {
        user_id: data.id,
      };

      $.ajax("/api/clubs/join/" + clubid, {
        type: "POST",
        data: newJoin,
      }).then(function () {
        console.log("Club joined " + newJoin);
      });
    });
  });
});
