var PeopleApp = angular.module("PeopleApp", []);
PeopleApp.controller("PeopleCtrl", PeopleCtrl);

PeopleCtrl.$inject = ["PeopleService"];
function PeopleCtrl(PeopleService){
  var ctrl = this;
  ctrl.personDetails = undefined;
  ctrl.searchFor = "";
  ctrl.getPeople = function(){
    PeopleService.getPeople()
      .then(function (succResp){
        ctrl.people = succResp.data.People;
        console.log(ctrl.people);
      }, function (errResp){
        ctrl.people = [];
      });
  }

  ctrl.getPersonDetails = function(name){
    console.log(name);
    ctrl.personDetails = ctrl.people.filter(function(x){
      return x.name === name;
    })[0];
    console.log(ctrl.personDetails);
  }

  ctrl.getPeople();
}