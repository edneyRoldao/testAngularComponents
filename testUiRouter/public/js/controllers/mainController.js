function MainController(profile, state) {
	var ctrl = this;

	ctrl.welcome = "Welcome to main controller";
	ctrl.user = profile;

	ctrl.logout = function() {
		state.go("home.logout");
	};

};

MainController.$inject = ["userProfile", "$state"];
angular.module("uiRouterTutorial").controller("mainController", MainController);