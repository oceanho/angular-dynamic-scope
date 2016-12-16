function updateAngularScope(key, isFun, elOrelId, valueOrParam) {
        var el;
        if(typeof elOrelId ==="string"){
          el = document.getElementById("tenant.views.appinfo.createOrEditModal_controller");
        }else{
          el = elOrelId;
        }
        var ngElScope = angular.element(el).scope();
        if (isFun) {
            eval("ngElScope." + key + "(" + valueOrParam + ")");
        } else {
            eval("ngElScope." + key + "=" + valueOrParam + "");
        }
}
