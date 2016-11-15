const Photo = (function() {
  let photoId = 0
 return class Photo {
   constructor(farm, id, secret, server, song_id){
     this.photoId = photoId++;
     this.farm = farm;
     this.id = id;
     this.secret = secret;
     this.server = server;
     this.song_id = song_id
     store.songs[store.songs.length - 1].photos.push(this)
     this.url = `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
     store.photos = [...store.photos, this];
   }
 }
}())
