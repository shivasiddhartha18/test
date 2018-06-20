PeopleApp.directive("peopledetailsDirective", function(){
  return{
    restrict:"E",
    templateUrl:"peopledetails/peopledetails.template.html",
    scope:{
      details:"="
    }
  }
})