PeopleApp.directive("searchbarDirective", function(){
  return{
    restrict:"E",
    templateUrl:"searchbar/searchbar.template.html",
    scope:{
      search:"="
    }
  }
})