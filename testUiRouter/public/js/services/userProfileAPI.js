angular.module("uiRouterTutorial").factory("UserService", function($q) {
	var service = {};

	var userDetails = {
		name: "Edney Roldao",
		age: "35",
		email: "edneyroldao@gmail.com"
	};

	service.getUser = function() {
		return $q.when(userDetails);
	};

	return service;
});