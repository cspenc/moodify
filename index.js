getToken();

$(document).ready(function() {

  $(".overlay, .overlay-message").hide();

  $('#moodify').click(function(event) {
    event.preventDefault()
    getSong()
    getPhotos()

    $('#carousel-example-generic').carousel({
      interval: 2000
    })

    $(".overlay, .overlay-message").show();
    $(".overlay-message").click(function() {
        $('#carousel-example-generic').attr('class', '')
        $('.carousel-inner').empty();

        $(".overlay, .overlay-message").hide();
    });
  })
})

function getPhotos() {
  if (store.songs[store.songs.length - 1].title !== "") {
    var tags = store.songs[store.songs.length - 1].title
  } else {
    var tags = store.artists[store.artists.length - 1].name
  }

  $.ajax({
      method: "GET",
      url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81501bbe9c20b4cd761970acfb46108f&tags=${tags}&safe_search=1&format=json&nojsoncallback=1`
    }).done(function(data) {
     var photosArray = data.photos.photo

     for (let i = 0; i < 15; i++) {
      var thePhoto = photosArray[Math.floor(Math.random() * photosArray.length)]
      new Photo(thePhoto.farm, thePhoto.id, thePhoto.secret, thePhoto.server, store.songs[store.songs.length - 1].id)
     }

     var newArray = store.photos.slice(store.photos.length - 15, store.photos.length - 2)
     var firstPhoto = store.photos[store.photos.length-1]
     $('#carousel-example-generic').addClass('carousel slide')
     $('.carousel-inner').append(`<div class="item active"><img src="${firstPhoto.url}"/></div>`)
     newArray.forEach(function(photo) {
       $('.carousel-inner').append(`<div class="item"><img src="${photo.url}"/></div>`)
     })
  })
}

function getSong() {
  // controller
   // 1. responds to events on the views
   // 2. takes in input
       // adapters
         // SpotifyAdapter({})
             // {}
   // 3. renders result

 // if song || artist
   // SpotifyAdapter({song: , artist: })
     // give you back songs, or artists
     // {artists: [], songs: }
 // else
   // you didn't provide enough info.
 //
  createArtist()
  createSong()

  // spotifyAdapter

  var artist = store.artists[store.artists.length - 1].name
  var song = store.songs[store.artists.length - 1].title

  if (artist !== "") {
    var song = song + " " + artist;
  }

  if (song === "") {
      $('#spotify').append(`<h5>You gave me nothing to work with!</h5>`)
  } else if (song !== "") {
    $.ajax({
        method: "POST",
        url: 'https://dayjams-rails.herokuapp.com/search',
        data: JSON.stringify({token: token, song: {search_term: song}}),
        contentType: "application/json; charset=utf-8",
        dataType: 'json'
      }).done(function(data) {
          if (data.songResults.length < 1) {
            $('#spotify').append('<h5>Cannot find track. Please check your song and/or artist.<h5>')
          }

          let id = data.songResults[0].id

          $('#spotify').append(`<iframe src="https://embed.spotify.com/?uri=spotify:track:${id}&theme=white&view=coverart" width="300" height="100" frameborder="0" allowtransparency="true"></iframe>`)
        })
    // $.ajax({
    //     method: "GET",
    //     url: `https://api.spotify.com/v1/search?q=track:${song}+artist:${artist}&type=track`
    //   }).done(function(data) {
    //       if (data.tracks.items.length < 1) {
    //         $('#spotify').append('<h5>Cannot find track. Please check your song and/or artist.<h5>')
    //       }
    //
    //       let id = data.tracks.items[0].id
    //
    //       $('#spotify').append(`<iframe src="https://embed.spotify.com/?uri=spotify:track:${id}&theme=white&view=coverart" width="300" height="100" frameborder="0" allowtransparency="true"></iframe>`)
    //     })
  }
}
