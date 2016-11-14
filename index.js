$(document).ready(function() {
  $('#moodify').click(function(event) {
    event.preventDefault()
    getSong()
    getPhotos()
  })
})

function getPhotos() {
  var tags = store.songs[store.songs.length - 1].title
  $.ajax({
      method: "GET",
      url: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3353ad157aa07bbda0a7a1e6bcec904f&tags=${tags}&safe_search=1&format=json&nojsoncallback=1`
    }).done(function(data) {
     var photosArray = data.photos.photo
     for (let i = 0; i < 10; i++) {
       store.photos.push(photosArray[Math.floor(Math.random() * photosArray.length)])
     }
     var newArray = store.photos.slice(store.photos.length - 10, store.photos.length - 1)
     newArray.forEach(function(photo) {
       $('#main').append(`<img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg"/>`)
     })
  })
}

function getSong() {
  createArtist()
  createSong()
  let artist = store.artists[store.artists.length - 1].name
  let song = store.songs[store.artists.length - 1].title
  $.ajax({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=track:${song}+artist:${artist}&type=track`
    }).done(function(data) {
      let id = data.tracks.items[0].id
      $('#main').append(`<iframe src="https://embed.spotify.com/?uri=spotify:track:${id}" frameborder="0" allowtransparency="true"></iframe>`)
      $('#main').append(`<iframe src="https://embed.spotify.com/?uri=spotify:track:${id}&theme=white&view=coverart" width="300" height="200" frameborder="0" allowtransparency="true"></iframe>`)
    })
}
