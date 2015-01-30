var controllers = angular.module('controllers', []);
controllers.controller('FeedCtrl', ['$scope','FeedService', function ($scope,Feed) {    
    $scope.loadButonText = "Load";
    $scope.loadFeed = function(url) {        
        Feed.parseFeed(url).then(function(res) {
            $scope.feeds = res.data.responseData.feed.entries;
        });
    };
    $scope.loadFeed('http://blog.medicare.gov/feed/');
}]);
controllers.controller('MapCtrl', ['$scope', function ($scope) {    
    $scope.map = { center: { latitude: 40.9945928, longitude: -77.6046984 }, zoom: 7 };
}]);
controllers.controller('ChartCtrl', ['$scope', '$filter', '$timeout', 'DataService', function ($scope, $filter, $timeout, DataService) {    
  $timeout( function () {
    var chart1 = c3.generate({
      bindto: '#chart1',
      data: {
          x: 'x',
          columns: DataService.starsMAPD,
          types: {
            Frequency: 'bar',
            'Cumulative Percent': 'line'
          },
          axes: {
              Frequency: 'y',
              'Cumulative Percent': 'y2'
          }
      },
      axis: {
          y2: {
              show: true,
              max: 1,
              tick: {
                format: function (d) { 
                  return $filter('percentage')(d);
                }
              }
          }
      },
      bar: {
          width: {
              ratio: 0.5
          }
      },
      point: {
        r: 4
      }
  });
  var chart2 = c3.generate({
      bindto: '#chart2',
      data: {
          x: 'x',
          columns: DataService.fourStarThresholds,
          type: 'line'
      },
      axis: {
          y: {
              max: 1,
              tick: {
                format: function (d) { 
                  return $filter('percentage')(d);
                }
              }
          }
      },
      point: {
        r: 4
      }
  });
  });
  $scope.$watch('selected', function () {
    chart1.load({
        columns: $scope.selected == 'MAPD' ? DataService.starsMAPD : DataService.starsPDP
    });
  });
  
}]);