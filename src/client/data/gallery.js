let createURL = (photoSetID) => {
  return `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e168c7fc17bad6a54c643098d569c17&photoset_id=${photoSetID}&user_id=148642232%40N07&size=k&format=json&nojsoncallback=1`
}

module.exports = {
  galleries: {
    bolivia: {
      name: "bolivia",
      url: createURL('72157690236053501')
    },
    peru: {
      name: "peru",
      url: createURL('72157668110748089')
    },
    ladakh: {
      name: "ladakh",
      url: createURL('72157672265762627')
    },
    china: {
      name: "china",
      url: createURL('72157672265645277')
    },
    mysore: {
      name: "mysore",
      url: createURL('72157699125394052')
    },
    nyc: {
      name: "nyc",
      url: createURL('72157700800761241')
    },
    japan: {
      name: "japan",
      url: createURL('72157699125313352')
    },
    paris: {
      name: "paris",
      url: createURL('72157701525682862')
    },
    columbia: {
      name: "columbia",
      url: createURL('72157694009140162')
    },
    moab: {
      name: "moab",
      url: createURL('72157689047067132')
    },
    jackson: {
      name: "jackson",
      url: createURL('72157688849867972')
    },
    colorado: {
      name: "colorado",
      url: createURL('72157667919986069')
    },
    nashville: {
      name: "nashville",
      url: createURL('72157691652131015')
    },
    experiment: {
      name: "experiment",
      url: createURL('72157677942277644')
    },
    deloache: {
      name: "deloache",
      url: createURL('72157691641364595')
    },
  },
  galleryNames: ["peru", "bolivia", "ladakh", "nyc", "china", "mysore", "japan", "paris", "moab", "columbia", "jackson", "colorado", "nashville", "experiment", "deloache"]
}
