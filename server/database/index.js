require("dotenv").config();
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
autoIncrement.initialize(mongoose);

let previewSchema = mongoose.Schema({
  title: String,
  criticConsensus: String,
  potatoMeter: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number,
    fresh: Number,
    spoiled: Number
  },
  audienceScore: {
    percentage: Number,
    averageRating: Number,
    totalCount: Number
  },
  videoUrl: String,
  imgUrl: String,
  videoScene: String
});

previewSchema.plugin(autoIncrement.plugin, "Preview");

let Preview = mongoose.model("Preview", previewSchema);

let savePreview = data => {
  let moviePreview = new Preview({
    title: data.title,
    criticConsensus: data.criticConsensus,
    potatoMeter: {
      fresh: data.potatoMeter.fresh,
      spoiled: data.potatoMeter.spoiled,
      percentage: data.potatoMeter.percentage,
      averageRating: data.potatoMeter.averageRating,
      totalCount: data.potatoMeter.totalCount
    },
    audienceScore: {
      totalCount: data.audienceScore.totalCount,
      percentage: data.audienceScore.percentage,
      averageRating: data.audienceScore.averageRating
    },
    videoUrl: data.videoUrl,
    imgUrl: data.imgUrl,
    videoScene: data.videoScene
  });

  moviePreview.save((err, moviePreview) => {
    if (err) {
      return console.log('save err');
    }
    console.log('saved to collection');
  });
};

let modifyPreview = data => {
  let previewId = Number(data._id);
  Preview.findOneAndUpdate(
    { _id: previewId },
    { $set: { title: data.title } },
    { upsert: true },
    (err, doc) => {
      if (err) {
        return console.log('modify error', err);
      }
      console.log('updated');
    }
  );
};

// let save = movies => {
//   movies.forEach(movie => {
//     let moviePreview = new Preview({
//       title: movie.title,
//       criticConsensus: movie.criticConsensus,
//       potatoMeter: {
//         fresh: movie.potatoMeter.fresh,
//         spoiled: movie.potatoMeter.spoiled,
//         percentage: movie.potatoMeter.percentage,
//         averageRating: movie.potatoMeter.averageRating,
//         totalCount: movie.potatoMeter.totalCount
//       },
//       audienceScore: {
//         totalCount: movie.audienceScore.totalCount,
//         percentage: movie.audienceScore.percentage,
//         averageRating: movie.audienceScore.averageRating
//       },
//       videoUrl: movie.videoUrl,
//       imgUrl: movie.imgUrl,
//       videoScene: movie.videoScene
//     });

//     moviePreview.save((err, moviePreview) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Success");
//       }
//     });
//   });
// };

module.exports = {
  Preview,
  savePreview,
  modifyPreview,
  deletePreview
}
