const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  profilePicture: String,
  firstName: String,
  lastName: String,
  email: String,
  mobileNumber: String,
  alternativeMobileNumber: String,
  dateOfBirth: Date,
  presence: String,
  source: String,
  reference: String,
  highestQualification: String,
  interestedCourse: String,
  givenTestName: String,
  testScore: Number,
  interestedCountry: String,
  intake: String,
  applyLevel: String,
  interestLevel: String,
  firstVisit: Date,
  nextVisit: Date,
  studentFeedback: String,
  assignBranch: String,
  assignUser: String,
  remark: String,
  userID: String,
});

const profilemodal = mongoose.model("Profile", profileSchema);
module.exports = profilemodal;
