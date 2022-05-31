import request from 'supertest';
import { faker } from '@faker-js/faker';
import { expect } from 'expect';
import { sortObjectsInArrayByPropValue } from '../helpers';

it('1. get posts: response code is 200, content type is json', async () => {
  const response = await request('localhost:3000')
    .get('/posts')
    .set('Accept', 'application/json');

  expect(response.status).toEqual(200);
  expect(response.headers['content-type']).toContain('application/json');
});

it('2. get album: content length is 34', async () => {
  const response = await request('localhost:3000')
    .get('/albums/3')
    .set('Accept', 'application/json')

  expect(response.header['content-length']).toEqual('34');
});

it('3. get photos: response time is less than 10 sec', () => {
  const start = Date.now();
  request('localhost:3000')
    .get('/photos')
    .set('Accept', 'application/json');

  expect(Date.now() - start).toBeLessThan(10000);
});


it('4. get users: response code is 200, check user geo', async () => {
  const response = await request('localhost:3000')
    .get('/users')
    .set('Accept', 'application/json');

  expect(response.status).toEqual(200);
  expect(response.body[4].geo).toEqual({
    "lat": "40.2990",
    "lng": "82.8253"
  });
});

it('5. get comments: order is descending, response code is 200', async () => {
  let response = await request('localhost:3000')
    .get('/comments/?_sort=postId&_order=desc')
    .set('Accept', 'application/json');

  expect(response.status).toEqual(200);
  expect(JSON.stringify(response.body)).toEqual(JSON.stringify(sortObjectsInArrayByPropValue(response.body, 'postId', 'desc')));
});

it('6. signup: response status code is 201, response contains access token', async () => {
  const response = await request('localhost:3000')
    .post('/signup')
    .send({ email: faker.internet.email(), password: faker.internet.password() })
    .set('Accept', 'application/json');

  expect(response.status).toEqual(201);
  expect(response.body.accessToken).toBeTruthy();
  expect(response.body.accessToken).toBeTruthy();
});

it('7. create post: response code is 201, post is created', async () => {
  // arrange
  const signupResponse = await request('localhost:3000')
    .post('/signup')
    .send({ email: faker.internet.email(), password: faker.internet.password() })
    .set('Accept', 'application/json');
  const token = signupResponse.body.accessToken;
  const postsBefore = await request('localhost:3000')
    .get('/posts')
    .set('Accept', 'application/json');

  // act
  const createPost = await request('localhost:3000')
    .post('/posts')
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);

  // assert
  expect(createPost.status).toEqual(201);
  const postsAfter = await request('localhost:3000')
    .get('/posts')
    .set('Accept', 'application/json');
  expect(postsAfter.body.length).toEqual(postsBefore.body.length + 1);
});


