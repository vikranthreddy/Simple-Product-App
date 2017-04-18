/**
 * Created by vikranth on 18-04-2017.
 */
myApp.controller('ProductCtrlr',function ($scope,$route,$routeParams,$http) {
/* View  all products*/
   $scope.getProducts= function () {
       $http.get('/api/products/').then(function (res) {
           $scope.products = res.data;
       });
   };
	/* View single product*/
      $scope.showProduct= function () {
          var id = $routeParams.id;

          $http.get('/api/products/' + id).then(function (res) {
              $scope.product = res.data;
          });
      };

      /*Add product*/
	  $scope.addProduct = function(){

		$http.post('/api/products/', $scope.product).then(function(response){

			window.location.href = '/';
		});
	  };
	  /*Edit product*/
	  $scope.updateProduct= function(){
		var id = $routeParams.id;
		$http.put('/api/products/'+ id , $scope.product).then(function(response){

			window.location.href = '/';
		});
	  };
	  /*Delete Product*/
	$scope.deleteProduct= function(id){
		var id = id;
		$http.delete('/api/products/'+ id).then(function(response){
			$route.reload();
		});
	};


      

});