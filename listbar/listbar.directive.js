PeopleApp.directive("listbarDirective", function(){
  return {
    restrict:"E",
    templateUrl:"listbar/listbar.template.html",
    scope:{
      people:"=",
      search:"=",
      getPerson:"&"
    }
  }
})