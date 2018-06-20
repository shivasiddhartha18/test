PeopleApp.service("PeopleService", PeopleService);
PeopleService.$inject = ["$http"];

function PeopleService($http){
  this.getPeople = function(){
    return $http.get("people.json");
  }
}