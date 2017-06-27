angular.module("uiRouterTutorial").controller("mainController", function(userProfile) {
	var ctrl = this;
	ctrl.welcome = "Welcome to main controller";
	ctrl.user = userProfile;
});