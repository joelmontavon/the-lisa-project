var services = angular.module('services', []);
services.factory('FeedService',['$http',function($http){
    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    };
}]);
services.factory('DataService',function(){
    return {
      starsMAPD: [
      	['x',1.5,2,2.5,3,3.5,4,4.5,5],
      	['Frequency',0,3,18,87,149,105,53,26],
      	['Cumulative Percent',0.00,0.01,0.05,0.24,0.58,0.82,0.94,1.00]
      	
      ],
      starsPDP: [
      	['x',1.5,2,2.5,3,3.5,4,4.5,5],
      	['Frequency',1,1,3,6,18,13,10,3],
      	['Cumulative Percent',0.02,0.04,0.09,0.20,0.53,0.76,0.95,1.00]
      ],
      fourStarThresholds: [
      	['x',2012,2013,2014,2015],
      	['MAPD',0.25,0.33,0.38,0.42],
      	['PDP',0.20,0.35,0.34,0.47]
      ],
      mtmHealthConditions: [
      	['x',2,3],
      	['MAPD',92,447],
      	['MMP',17,54],
      	['PDP',16,54]
      ],
      mtmDrugs: [
      	['x',2,3,4,5,6,7,8],
      	['MAPD',8,4,10,32,83,84,318],
      	['MMP',3,2,6,18,9,33],
      	['PDP',1,1,2,3,11,22,30]
      ]
    }
});