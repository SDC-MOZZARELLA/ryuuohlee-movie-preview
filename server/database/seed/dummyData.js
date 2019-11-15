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
  let videos = ['https://youtu.be/Pso0Aj_cTh0', 'https://youtu.be/RXRqTrojCbI', 'https://youtu.be/8Qn_spdM5Zg', 'https://youtu.be/BfTYY_pac8o', 'https://youtu.be/fd5GlZUpfaM', 'https://www.youtube.com/watch?v=xi-1NchUqMA', 'https://www.youtube.com/watch?v=fO_dKFZD1GE', 'https://www.youtube.com/watch?v=BVZDhunTrYA', 'https://www.youtube.com/watch?v=0NsBor0jY6Y', 'https://www.youtube.com/watch?v=-LkoBdZvcgQ', 'https://www.youtube.com/watch?v=YD1crZOXcqc', 'https://www.youtube.com/watch?v=9eiaiVthVrk', 'https://www.youtube.com/watch?v=3VCYs3sTLkA', 'https://www.youtube.com/watch?v=oz-XiYNCo7o', 'https://www.youtube.com/watch?v=YjpsGw7YlU8', 'https://www.youtube.com/watch?v=Ify9S7hj480', 'https://www.youtube.com/watch?v=FF932ZU6Kn4', 'https://www.youtube.com/watch?v=V3vIYy38Fys', 'https://www.youtube.com/watch?v=xjDjIWPwcPU', 'https://www.youtube.com/watch?v=cNi_HC839Wo', 'https://www.youtube.com/watch?v=8dxh3lwdOFw', 'https://www.youtube.com/watch?v=c_Ne5g5F-WY', 'https://www.youtube.com/watch?v=Alv1znZA6Es', 'https://www.youtube.com/watch?v=YEb4JpwDAoE', 'https://www.youtube.com/watch?v=r7kWQj9FCGY'];
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const title = randomData.internet.userName();
      const criticConsensus = randomData.lorem.paragraph();
      const videoUrl = videos[Math.floor(Math.random() * 25)];
      const imgUrl = randomData.image.imageUrl();
      const videoScene = randomData.image.sports();
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
