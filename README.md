# What's this?
Angular-Dynamic-Scope ,it can be easy to update property or execute function at any where for Angular's scope

## how to use?
include angular-dynamic-scope.js to your project,and like fllow ↓

## Example(get user.name value)
DynamicAngularScope.scopeProperty("user.name",false,"user_controller","new name");

## Example(change user.name value)
DynamicAngularScope.setScopeProperty("user.name",false,"user_controller","new name");

## Example for ElementId(execute function -> verifies.updateVerifyCode)
DynamicAngularScope.callScopeFunction("verifies.updateVerifyCode","user_controller");

## Example for ElementId(execute function and get result -> verifies.getServerTime)
DynamicAngularScope.callScopeFunctionGetResult("verifies.getServerTime","user_controller");

## You can like this do,^_^
```javascript
var scopeEleId = "sample_controller";
window.DynamicAngularScopeWithThisPage = {
    callScope: function (key, isFunc, isGetResult, valueOrParam) { 
      return DynamicAngularScope.callScope(key, isFunc, isGetResult, scopeEleId, valueOrParam); 
    },
    scopeProperty: function (key, valueOrParam) { return DynamicAngularScope.scopeProperty(key, scopeEleId, valueOrParam); },
    setScopeProperty: function (key, valueOrParam) { return DynamicAngularScope.setScopeProperty(key, scopeEleId, valueOrParam); },
    callScopeFunction: function (key, valueOrParam) { return DynamicAngularScope.callScopeFunction(key, scopeEleId, valueOrParam); },
    callScopeFunctionGetResult: function (key, valueOrParam) {
      return DynamicAngularScope.callScopeFunctionGetResult(key, scopeEleId, valueOrParam); 
    }    
}
then 
```
DynamicAngularScopeWithThisPage.xxxx
