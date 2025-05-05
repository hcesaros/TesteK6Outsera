import http from 'k6/http';
import { check } from 'k6';
import { Trend } from 'k6/metrics';

let responseTimeTrend = new Trend('response_time');

export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '4m', target: 500 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts');

  responseTimeTrend.add(res.timings.duration);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
}
