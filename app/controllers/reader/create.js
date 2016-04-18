/**
 * Created by user on 2016-04-18.
 */
angular.nodule('app')
.controller('ReaderCreateCtrl',
  function ReaderCreateCtrl() {
    var vm=this;
    vm.submit=function(form)
    {
      console.log(form);
    }
  });
