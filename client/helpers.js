Template.index.events({
  'change #interestedCourses': function () {
    var newValue = $("#interestedCourses option:selected").text();

    // alert(newValue)
    if (newValue == "Other"){
      $("#otherCourses").show();

    }
    else{
      $("#otherCourses").hide();
    }
  }
});

Template.index.rendered = function () {
  $("#otherCourses").hide();

};
