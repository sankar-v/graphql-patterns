https://github.com/fireproofsocks/graphql-example/blob/master/index.js
https://rollout.io/blog/graphql-as-an-api-gateway-to-micro-services/

yarn run start
http://localhost:4000/graphql

http://localhost:4000/users/2


{
  users(_id: 3){
    name
  }
}
```
The result should be:
```
{
  "data": {
    "users": [
      {
        "name": "Tammy"
      }
    ]
  }
}
REST to JSON transformation...
{
    "data": {
        "type": "user",
        "id": "2",
        "attributes": {
            "name": "João"
        }
    }
}



http://quotes.rest/qod.json?category=inspire.
graphql
{
  quote{
    quote,
    author
  }
}