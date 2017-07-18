app.controller("mainListCon", function($scope, $rootScope){
		
		$scope.mainLeftUlA = ["产品管理", "分类管理", "产品资料管理"];
		$scope.mainLeftUlB = ["图片管理", "图片编辑"];
		$scope.mainLeftUlC = ["a", "b", "c", "d", "e", "f"];
		$scope.listA = false;
		$scope.listB = false;
		$scope.listC = false;
		$scope.proMan = false;
		$scope.proImg = false;
		$scope.proData = false;
		$scope.toPage = "";
		$scope.btn = "";
		
		//获取节点中的内容，然后通过查找内容，得到 index 索引
		$scope.ulChildrenText = "";
		
		$scope.getBtnType = function(e){
//			console.log($scope.btn);
//			console.log(e.target.innerText);
			$scope.arr = "";
			switch ($scope.btn){
				case "A":
					$scope.arr = $scope.mainLeftUlA;
					break;
				case "B":
					$scope.arr = $scope.mainLeftUlB;
					break;
				case "C":
					$scope.arr = $scope.mainLeftUlC;
					break;
				case "D":
					$scope.arr = $scope.mainLeftUlD;
					break;
				case "E":
					$scope.arr = $scope.mainLeftUlE;
					break;
				default:
					$scope.arr = "";
					break;
			}
			console.log($scope.arr);
//			$scope.num = $scope.searchTextIndex(e.target.innerText, $scope.arr);
			return $scope.arr; 	
		}
		$scope.getUrl = function(e){
			$scope.ulChildrenText = e.target.innerHTML;
			$scope.toPage = $scope.searchTextIndex($scope.ulChildrenText, $scope.arr);
			
			//父项标签加上子项序号，用这个方式，来判断路由
			console.log($scope.btn+$scope.toPage);
			$rootScope.pageTo($scope.btn+$scope.toPage);
		}
		
		/*
		 * @params value 表示传入的需要查找的值
		 * @params arr 用来查找索引值得数组
		 */
		$scope.searchTextIndex = function(value,arr){
			var len = arr.length;
			for(var i=0; i<len; i++){
				if(value == arr[i]){
					return i;
				}
			}
		}
		
		$scope.mainUlClickA = function(e){
			$scope.btn = "A";
			$scope.getBtnType(e);
			if($scope.listA == false){
				$scope.listA = true;
				$scope.proMan = true;
			}else{
				$scope.listA = false;
				$scope.proMan = false;
			}
		}
		
		$scope.mainUlClickB = function(e){
			$scope.btn = "B";
			$scope.getBtnType(e);
			if($scope.listB == false){
				$scope.listB = true;
				$scope.proImg = true;
			}else{
				$scope.listB = false;
				$scope.proImg = false;
			}
		}

		$scope.mainUlClickC = function(e){
			$scope.btn = "C";
			$scope.getBtnType(e);
			if($scope.listC == false){
				$scope.listC = true;
				$scope.proData = true;
			}else{
				$scope.listC = false;
				$scope.proImC = false;
			}
		}
});

app.controller("triangleCon", function($scope,$rootScope){
		$rootScope.mainLeft = false;
		$scope.mainRight = false;
		$scope.triangle = function(){
			if($rootScope.mainLeft == false){
				$rootScope.mainLeft = true;
				$scope.mainRight = true;
			}else{
				$rootScope.mainLeft = false;
				$scope.mainRight = false;
			}
			console.log($rootScope.mainLeft)
		}
	});
	
	app.controller("mainRightListCon", function($scope){
		$scope.topList = ["我的桌面"];
	});
	
	app.controller("indexMainCon", function($scope){
		
	});
	
	app.controller("proManCon", function($scope){
		
});

app.controller("tableEditDelCon", function($scope, $rootScope){
	$rootScope.bgBox = false;
	$rootScope.delBox = false;
	
	$scope.editFn = function(){
		if($rootScope.bgBox == false){
			$rootScope.bgBox = true;
		}else{
			$rootScope.bgBox = false;
		}
	}
	$scope.delFn = function(){
		if($rootScope.delBox == false){
			$rootScope.delBox = true;
		}else{
			$rootScope.delBox = false;
		}
	}
});

app.controller("proEdit", function($scope, $rootScope){
	$scope.closeBox = function(){
		$rootScope.bgBox = false;
	}
});

app.controller("proDel", function($scope, $rootScope){
	$scope.closeBox = function(){
		$rootScope.delBox = false;
	}
});
