```javascript
const query = {
  $or: [
    { field: { $type: "double" , $gt: 10 } },
    { field: { $type: "number" , $gt: 10 } }
  ]
};
db.collection.find(query);
```