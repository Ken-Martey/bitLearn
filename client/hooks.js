AutoForm.hooks({
  insertEmailsForm:{
    onSuccess: function(operation, result, template){
      $("#otherCourses").hide();
      // swal('Thank you for placing course request');
      swal({
        title: "Thanks for signing up",
        text: "We would like you to take a survey to further understand the industry and your specific needs!",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#0ccfa8",
        confirmButtonText: "Take survey!",
        cancelButtonText: "No Thanks!",
        closeOnConfirm: false,
        closeOnCancel: false
      }, function(isConfirm){
        if (isConfirm) {
          swal("Take survey!", "Thanks for accepting to take the survey. please wait while we take you to the survey page!", "success");
          window.location = 'https://bitlearn.typeform.com/to/vXp4DF';
        } else {
          swal("Thank you", "your request has been received", "success");
        }
      });
    },
    onError: function(formType, error) {
      console.log(error);
    },
  }
});
