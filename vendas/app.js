var app = angular.module('gamificationApp', []);

app.controller('LoginController', function($scope) {
  $scope.user = {};
  $scope.login = function() {
    if ($scope.user.email && $scope.user.password) {
      window.location.href = 'status.html';
    } else {
      alert('Please enter email and password.');
    }
  };
});

app.controller('StatsController', function($scope) {
  $scope.player = {
    name: 'John Doe',
    points: 7850,
    level: 5,
    progress: 60
  };
});

app.controller('ChallengesController', function($scope) {
  $scope.challenges = [
    { name: 'Close a Deal', points: '2,000', icon: 'icons/deal.png' },
    { name: 'Visit a Client', points: '1,500', icon: 'icons/visit.png' },
    { name: 'Qualify a Lead', points: '1,000', icon: 'icons/lead.png' },
    { name: 'Give a Demo', points: '750', icon: 'icons/demo.png' }
  ];
});

app.controller('LeaderboardController', function($scope) {
  $scope.leaderboard = [
    { name: 'Sarah', points: '9,200', avatar: 'avatars/sarah.png' },
    { name: 'Jason', points: '8,750', avatar: 'avatars/jason.png' },
    { name: 'John', points: '7,850', avatar: 'avatars/john.png' },
    { name: 'Emma', points: '6,900', avatar: 'avatars/emma.png' }
  ];
});