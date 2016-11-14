function createSong() {
  let title = $('#input-1').val()
  new Song(title)

  $('#input-1').val('')
  $('#spotify').empty()
}

// <iframe src="https://embed.spotify.com/?uri=spotify:track:1HNE2PX70ztbEl6MLxrpNL" frameborder="0" allowtransparency="true"></iframe>

// $(function(){
//   $('form').on('submit', function(event){
//     event.preventDefault()
//     let artist_name = $('#artist_name').val()
//     $.ajax({
//     method: "GET",
//     url: `https://api.spotify.com/v1/search?q=${artist_name}&type=artist`
//     // data: {q: artist_name, type: 'artist'}
//     })
//     .done(function( response ) {
//       let img = response.artists.items[0].images[0].url
//       $('.images').append(`<img src="${img}" alt="" />`)
//      });
//   })
// })
