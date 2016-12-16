# angular-dynamic-scope
It's update property or execute function at any where for Angular's scope

# how use?
include angular-dynamic-scope.js to your project

Here is function
updateAngularScope("your function name or property name of angular's scope",true if execute function other false,"scope Element or Element's Id","param or target value for changed")

# Example(change user.name value)
updateAngularScope("user.name",false,"userinfo","new name");

# Example(execute verifies.updateVerifyCode)
updateAngularScope("verifies.updateVerifyCode",true,"userinfo");
