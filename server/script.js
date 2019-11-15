import http from 'k6/http';
import { sleep, check } from 'k6';
// import { Rate } from 'k6/metrics';

export let options = {
  stages: [
    { duration: '60s', target: 1 },
    { duration: '60s', target: 10 },
    { duration: '60s', target: 50 },
    { duration: '60s', target: 100 }
  ],
  rps: 1000
}

export default function () {
  let id = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3003/api/movies?id=${id}`);
  check(res, {
    "status 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
}

// export let options = {
//   thresholds: {
//     'failed requests': ['rate<0.01'],
//   },
//   stages: [
//     { duration: '60s', target: 1 },
//     { duration: '60s', target: 10 },
//     { duration: '60s', target: 100 },
//     { duration: '60s', target: 1000 }
//   ],
//   vusMax: 1000
// };

// export default function() {
//   let id = Math.floor(Math.random() * 10000000);
//   const randomEndpoint = () => {
//     return `http://localhost:3003/api/movies?id=${id}`;
//   };

//   let res = http.get(randomEndpoint());
// }