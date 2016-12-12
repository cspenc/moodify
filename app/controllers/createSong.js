function createSong() {
  let title = $('#input-1').val()
  new Song(title)

  $('#input-1').val('')
  $('#spotify').empty()
}
