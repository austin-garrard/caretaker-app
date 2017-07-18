const unirest = require('unirest');

const MB = 'http://localhost:2525'
const IMPOSTERS = MB + '/imposters'
const HEADERS = {
  "Content-Type": "application/json"
};

const is = (response) => ({
  port: 8080,
  protocol: "http",
  stubs: [
    {
      predicates: [{
        equals: {
          path: "/users"
        }
      }],
      responses: [
        {
        is: response
        }]
    }]
})

unirest
.delete(IMPOSTERS)
.end();

unirest
  .post(IMPOSTERS)
  .headers(HEADERS)
  .send(is({
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: {
        id: "123",
        name: "Bob"
    }
  }))
  .end((response) => console.log(response.body));
