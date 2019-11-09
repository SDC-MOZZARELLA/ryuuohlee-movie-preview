const randomData = require('faker');
const fs = require('fs');

// Creating CSV file for the moviePreviews records
const writePreviews = fs.createWriteStream('moviePreviews.csv');
writePreviews.write('id,title,criticConsensus,videoUrl,imgUrl,videoScene\n', 'utf8');

// Creating CSV file for the audienceScore records
const writeAudienceScores = fs.createWriteStream('audienceScores.csv');
writeAudienceScores.write('id,previewId,percent,averageRating,totalCount\n', 'utf8');

// Creating CSV file for the audienceScore records
const writePotatoMeters = fs.createWriteStream('potatoMeter.csv');
writePotatoMeters.write('id,previewId,percent,averageRating,totalCount,fresh,spoiled\n', 'utf8');

// Dummy data for the 10mil records for moviePreviews
function writeTenMilPreviews(writer, encoding, callback) {
  // Image link generator
  let randomImg = [];

  function imgGen(amount) {
    for (let i = 0; i < amount; i++) {
      randomImg.push(randomData.image.imgUrl);
    }
    return randomImg;
  }

  imgGen(1000);

  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const title = randomData.internet.userName();
      const criticConsensus = randomData.lorem.paragraph();
      const videoUrl = randomData.image.imageUrl();
      const imgUrl = randomData.image.imageUrl();
      const videoScene = randomImg[Math.floor(Math.random() * 1000)];
      const data = `${id},${title},${criticConsensus},${videoUrl},${imgUrl},${videoScene}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMilPreviews(writePreviews, 'utf-8', () => {
  writePreviews.end();
});

// Dummy data for the 10mil records for audienceScore
function writeTenMilAudienceScores(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const previewId = id;
      const percent = Math.floor(Math.random() * 100);
      const averageRating = Math.floor(Math.random() * 10).toFixed(1);
      const totalCount = randomData.random.number();
      const data = `${id},${previewId},${percent},${averageRating},${totalCount}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMilAudienceScores(writeAudienceScores, 'utf-8', () => {
  writeAudienceScores.end();
});

// Dummy data for 10mil records for potatoMeter
function writeTenMilPotatoMeters(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const previewId = id;
      const percent = Math.floor(Math.random() * 100);
      const averageRating = Math.floor(Math.random() * 10).toFixed(1);
      const totalCount = randomData.random.number();
      const fresh = randomData.random.number();
      const spoiled = randomData.random.number();
      const data = `${id},${previewId},${percent},${averageRating},${totalCount},${fresh},${spoiled}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMilPotatoMeters(writePotatoMeters, 'utf-8', () => {
  writePotatoMeters.end();
});
