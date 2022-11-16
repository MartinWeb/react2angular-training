angular.
    module('react2angularTraining.components').
    component('home', {
        // Note: The URL is relative to our `index.html` file
        templateUrl: 'components/home/home-template.html',
        controller: function HomeController() {
            console.log('test');
        }
    });