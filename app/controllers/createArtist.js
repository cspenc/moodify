function createArtist() {
  let name = $('#artist').val()
  new Artist(name)

  $('#artist').val('')
  $('#main').empty()
}

// <iframe src="https://embed.spotify.com/?uri=spotify:track:1HNE2PX70ztbEl6MLxrpNL" frameborder="0" allowtransparency="true"></iframe>
