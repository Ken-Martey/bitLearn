 Emails = new Mongo.Collection('emails');
 Emails.attachSchema(new SimpleSchema({
 	emails: {
 		type: String,
 		regEx: SimpleSchema.RegEx.Email
 	}
 }));
