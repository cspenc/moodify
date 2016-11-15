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
     this.url = `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
     store.photos = [...store.photos, this];
   }
 }
}())
