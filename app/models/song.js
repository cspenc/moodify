const Song = (function() {
  let id = 0
  return class Song {
    constructor(title){
      this.id = id++;
      this.title = title
      this.photos = []
      store.songs = [...store.songs, this];
    }
  }
}())
