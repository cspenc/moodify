const Picture = (function() {
  let picId = 0
  return class Picture {
    constructor(farmId, serverId, id, secret){
      this.picId = picId++;
      this.url = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
      store.pictures = [...store.pictures, this];
    }
  }
}())

// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
