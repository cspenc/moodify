function artistsongAdapter(artist, song) {
  return $.ajax({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=track:${song}+artist:${artist}&type=track`
    }).done(function(data) {
      var trackArray = data.tracks.items
    }
}
