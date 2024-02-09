// let lessons = [
//     {
//       "id": 1001,
//       "subject": "Swimming",
//       "location": "London",
//       "price": 200,
//       "space": 5,
//     },
//      {
//        "id": 1002,
//        "subject": "Golf",
//        "location": "Dubai",
//        "price": 1000,
//        "space": 5,
//      },
//      {
//        "id": 1003,
//        "subject": "Gaming",
//        "location": "Madrid",
//        "price": 300,
//        "space": 5,
//      },
//      {
//        "id": 1004,
//        "subject": "Archery",
//        "location": "Barcelona",
//        "price": 400,
//        "space": 5,
//      },
//      {
//      "id": 1005,
//      "subject": "Maths",
//      "location": "Helsinki",
//      "price": 250,
//      "space": 5,
//    },
//      {
//        "id": 1006,
//        "subject": "Reading",
//        "location": "Valletta",
//        "price": 100,
//        "space": 5,
//      },
//      {
//        "id": 1007,
//        "subject": "Painitng",
//        "location": "Nairobi",
//        "price": 800,
//        "space": 5,
//      },
//      {
//        "id": 1008,
//        "subject": "Economics",
//        "location": "India",
//        "price": 700,
//        "space": 5,
//      }
//   ]
fetch('http://localhost:3005/api/getAllLessons')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      // Create Vue instance after data is fetched successfully
      var webstore = new Vue({
        el: '#app',
        data() {
          return {
            step: 1,
            lessons: data.lesson, // Assigning products data fetched from the API
          }
        },
        // Other Vue configuration...
      });
    } else {
      throw new Error('API request was not successful');
    }
  })
  .catch(error => {
    console.error('Error fetching lessons data:', error);
  });
