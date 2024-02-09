const express = require("express");
const router = express.Router();
const lessonModel=require("../models/lesson")

router.post("/createLesson", async (req, res) => {
    try {
        const { subject, price, location, space } = req.body;
        const lesson = {
          subject: subject,
            price: price,
            location: location,
            space: space
        };
        const newLesson = await lessonModel.create(lesson);

        // Sends a success response
        res.json({ message: 'Lesson created successfully', newLesson });
    } catch (error) {
        // Sending an error response
     return res.status(500).json({ message: error.message });
    }
});

//Returns all the lessons 
router.get("/getAllLessons",async(req,res)=>{
    try {
        const lesson=await lessonModel.find({})
        res.status(200).json({
            success: true,
            lesson,
          });
    
    } catch (error) {
      res.status(400).json({error:error.message})
    }
})

//updates the available lesson space after an order has been submitted
router.put("/updateLessonSpace", async (req, res) => {
    try {
      const { lessonID, numberOfSpace } = req.body;
  
      // Assuming lessonID is a valid ObjectId and numberOfSpaces is a number
      const updatedLesson = await lessonModel.findByIdAndUpdate(
        lessonID,
        { $set: { space: numberOfSpace } },
        { new: true }
      );
  
      if (!updatedLesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
  
      res.json({ message: "Lesson spaces updated successfully", lesson: updatedLesson });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //Search for any lesson either by subject,location,price
//   {
//     "query": "Painting"
// }

//   router.post("/searchLesson", async (req, res) => {
//     try {
//         const searchQuery = req.body.query; // Assuming the query is provided in the request body

//         const lessons  = await lessonModel.find({
//             $or: [
//                 { subject: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search on subject
//                 { location: { $regex: searchQuery, $options: "i" } } // Case-insensitive search on location
//             ]
//         });

//         res.status(200).send({ message: "Search results", results: lessons  });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
// });

router.get("/searchLesson", async (req, res) => {
  try {
    const { query } = req.query;
    // Implement the logic to search for lessons based on the query
    const lessons = await LessonModel.find({
      $or: [
        { subject: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } }
      ]
    });
    res.json({ success: true, lesson: lessons });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
module.exports = router;