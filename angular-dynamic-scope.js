function updateAngularScope(key, isFun, elOrelId, valOrParam) {
        var el;
        if(typeof elOrelId ==="string"){
          el = document.getElementById(elOrelId);
        }else{
          el = elOrelId;
        }
        var ngElScope = angular.element(el).scope();
        if (isFun) {
            if (valOrParam) {
                eval("ngElScope." + key + "(" + valOrParam + ")");
            } else {
                eval("ngElScope." + key + "()");
            }
        } else {
            eval("ngElScope." + key + "=" + valOrParam + "");
        }
}
