function uiRouterConfig(stateProvider, urlRouterProvider) {
	stateProvider.state("home", {
		url: "/home",
		views: {
			"": { templateUrl: "views/home-header.html" },
			"homeContent@home": { templateUrl: "views/home.html" }
		}
	});

	stateProvider.state("home.login", {
		url: "/login",
		views: {
			"homeContent@home": { templateUrl: "views/login.html" }
		}
	});

	stateProvider.state("dash", {
		url: "/dash",
		views: {
			"": { templateUrl: "views/dashboard-header.html" },
			"dashboardContent@dash": {
				templateUrl: "views/dashboard.html",
				controller: "dashController as ctrl"
			}
		}
	});

	stateProvider.state("dash.main", {
		url: "/main",

		views: {
			"dashboardContent@dash": {
				templateUrl: "views/main.html",
				controller: "mainController as ctrl",
			}
		},

		resolve: {
			userProfile: function(UserService) {
				return UserService.getUser();
			}
		}
	});

	urlRouterProvider.otherwise('/home');
}

uiRouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
angular.module("uiRouterTutorial").config(uiRouterConfig);

