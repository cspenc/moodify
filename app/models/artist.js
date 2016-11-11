const Artist = (function() {
  let id = 0
  return class Artist {
    constructor(name){
      this.id = id++;
      this.name = name
      store.artists = [...store.artists, this];
    }
  }
}())
