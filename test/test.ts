import test from 'ava';
import request from 'supertest';
import * as app from '../src/app';

test('/ returns data', async t => {
  t.plan(2);

  const response = await request(app.bootstrap()).get('/');
  t.is(response.status, 200);
  t.is(response.body.hello, 'world');
});
