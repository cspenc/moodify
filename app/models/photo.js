const Photo = (function() {
 return class Photo {
   constructor(farm, id, secret, server){
     this.farm = farm;
     this.id = id;
     this.secret = secret;
     this.server = server;
     this.url = `https://farm${this.farm}.staticflickr.com/${this.server}/${this.id}_${this.secret}.jpg`;
     store.photos = [...store.photos, this];
   }
 }
}())
