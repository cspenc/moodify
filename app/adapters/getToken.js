var token;

function getToken() {
  return $.ajax({
      url: 'https://dayjams-rails.herokuapp.com/login',
      type: 'POST',
      data: JSON.stringify({user: {email: 'moodify@cspenc.com', password: 'moodify'}}),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    }).done((data) => {
      token = data.jwt;
    })
}

// function getToken() {
//   var b64 = "YjMzYzFjZTAwYjhkNDY1MGJlODFhNTU5N2E5ZTg2MmI6ZTRlMDkzNDNhY2NhNDNlYzg3ZWViZjljNWRkOTNlZmU=";
//
//   return $.ajax({
//       url: 'https://accounts.spotify.com/api/token',
//       type: 'POST',
//       dataType: "json",
//       headers: {"Authorization":`Basic ${b64}`},
//       data: {"grant_type":"client_credentials"}
//     }).done(function(data) {
//       console.log(data);
//       var credentials = data;
//     })
// }

// function artistsongAdapter(artist, song) {
//   return $.ajax({
//       method: "GET",
//       url: `https://api.spotify.com/v1/search?q=track:${song}+artist:${artist}&type=track`
//     }).done(function(data) {
//       var trackArray = data.tracks.items
//     }
// }

// base 64 encoded
// YjMzYzFjZTAwYjhkNDY1MGJlODFhNTU5N2E5ZTg2MmI6ZTRlMDkzNDNhY2NhNDNlYzg3ZWViZjljNWRkOTNlZmU=
