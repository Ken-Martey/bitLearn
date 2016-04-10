 Emails = new Mongo.Collection('emails');
 Emails.attachSchema(new SimpleSchema({
 	emails: {
 		type: String,
 		regEx: SimpleSchema.RegEx.Email
 	},
  interestedCourses: {
    type: String,
    allowedValues: [' Learning How to Learn','Machine Learning', 'R Programming',
    'Introduction to Finance',
    'Think Again: How to Reason and Argue',
    'The First Step in Entrepreneurship',
    'Understanding IELTS',
    'Programming Mobile Applications for Android Handheld Systems','Other']
  },
  otherCourses: {
    type: String,
    autoform: {
      // type: "hidden",
      label: false
    },
  }
}));
