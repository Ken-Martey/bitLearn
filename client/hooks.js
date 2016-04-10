AutoForm.hooks({
  insertEmailsForm:{
    onSuccess: function(operation, result, template){
      $("#otherCourses").hide();
      swal('Thank you for placing course request');
    },
    onError: function(formType, error) {
      console.log(error);
    },
  }
});
