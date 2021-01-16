INSERT INTO clubs (club_name, club_description, location_city, location_state, location_zip, online_base_url, club_image_url, category)
VALUES ('He Man Woman Haters', 'NO GIRLS ALLOWED.', 'Greenpoint', 'California', '12345', 'www.orbit.com/He-Man-Woman-Haters-Club', 'https://en.wikipedia.org/wiki/The_Little_Rascals_(film)#/media/File:Little_rascals_ver2.jpg', 'Fun'),
('Lets Read Books', 'A book club for books.', 'Salt Lake City', 'Utah', '54321', 'www.orbit.com/Lets-Read-Books', 'https://storage.googleapis.com/afs-prod/media/e6ece609eb5e45aaa5e30a8160d47884/800.jpeg', 'Knowledge'),
('Do You Even Music?', 'A collection of musicians who gets together to collaborate on different projects.', 'Minneapolis', 'Minnesota', '55411', 'www.orbit.com/Do-You-Play-Music-%3F', 'https://mk0musicianwaveddwsx.kinstacdn.com/wp-content/uploads/2018/07/music-collaboration-website.jpg', 'Music');


INSERT INTO users (first_name, last_name, user_name)
VALUES ('Bob', 'Dobalina', 'b-dubs'),
       ('Nancy', 'Walker', 'narwhal'),
       ('Mario', 'Andluigi', 'SMB'),
       ('Zelda', 'Alinktothepast', 'Ganon'),
       ('Jeffrey', 'Lebowski', 'The Dude');

INSERT INTO events (event_name, location_city, location_state, location_zip, location_url, category, event_description)
VALUES ('Meeting of the Royal Council', 'Greenpoint', 'California', '12345', 'www.orbit.com/He-Man-Woman-Haters-Club/zoom', 'Fun', 'Lets discuss the important things in life.'),
       ('Lets Start A New Book: Game Of Thrones', 'Salt Lake City', 'Utah', '54321', 'www.orbit.com/Lets-Read-Books/zoom', 'Knowledge', 'Wer gon be readin dis here new book!'),
       ('Weekly Jam Sesh: Meetup and Drinkup!', 'Minneapolis', 'Minnesota', '55411', 'www.orbit.com/Do-You-Play-Music-%3F', 'Music', 'Our weekly gathering, where we meet, drink, and be merry.');