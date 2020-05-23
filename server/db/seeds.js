use takeaways;
db.dropDatabase();

db.orders.insertMany(
  [
  {
    date: '16th May',
    time: '6PM',
    rating: 8,
    takeaway: 'Hippy Chippy',
    on_time: 'On Time'
  },
  {
    date: '22nd May',
    time: '4PM',
    rating: 3,
    takeaway: 'Cathay Cuisine',
    on_time: 'On Time'
  }
  ]
)
