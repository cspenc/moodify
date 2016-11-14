function createArtist() {
  let name = $('#input-2').val()
  new Artist(name)

  $('#input-2').val('')
  $('#spotify').empty()
}
