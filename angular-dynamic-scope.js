/**
*
*
*
*
*/    
; (function ($angular, $window) {
        'use strict';
        function getOrUpdateAngularScope(key, isFun, isGetResult, elOrElIdOrNgScope, valueOrParam) {
            var ngElScope = elOrElIdOrNgScope;
            if ($angular.isString(elOrElIdOrNgScope)) {
                ngElScope = $angular.element(document.getElementById(elOrElIdOrNgScope)).scope();
            } else if ($angular.isElement(elOrElIdOrNgScope)) {
                ngElScope = $angular.element(elOrElIdOrNgScope).scope();
            } else {
                throw new Error("invalid elOrElIdOrNgScope,elOrElIdOrNgScope should be Element/NgScope/ElementId");
            }
            var evalExpression = "";
            if (valueOrParam instanceof Date) {
                valueOrParam = valueOrParam.toString();
            }
            if (typeof valueOrParam !== "string") {
                debugger;
                evalExpression = isFun ? "(" + valueOrParam + ")" : (isGetResult ? ("") : ("=eval(" + JSON.stringify(valueOrParam) + ");ngElScope.$apply()"));
            } else {
                evalExpression = isFun ? "(\"" + valueOrParam + "\")" : (isGetResult ? ("") : ("=\"" + valueOrParam + "\";ngElScope.$apply()"));
            }
            evalExpression = "ngElScope." + key + evalExpression + ";";
            if (isGetResult) {
                return eval(evalExpression);
            }
            eval(evalExpression)
        }

        var $context = getOrUpdateAngularScope.prototype;

        /** Get the property value from ngScope */
        $context.getScopePropertyValue = function (key, elOrElIdOrNgScope, valueOrParam) {
            return getOrUpdateAngularScope(key, false, true, elOrElIdOrNgScope, valueOrParam);
        }

        /** Set the property value for ngScope */
        $context.setScopePropertyValue = function (key, elOrElIdOrNgScope, valueOrParam) {
            return getOrUpdateAngularScope(key, false, false, elOrElIdOrNgScope, valueOrParam);
        }

        /** Only execute function from ngScope */
        $context.executeScopeFunction = function (key, elOrElIdOrNgScope, valueOrParam) {
            return getOrUpdateAngularScope(key, true, false, elOrElIdOrNgScope, valueOrParam);
        }
        /** Execute function and Get that return's result from ngScope */
        $context.executeScopeFunctionAndGetResult = function (key, elOrElIdOrNgScope, valueOrParam) {
            return getOrUpdateAngularScope(key, true, true, elOrElIdOrNgScope, valueOrParam);
        }
        window.DynamicAngularScope = {
            callScope: getOrUpdateAngularScope,
            scopeProperty: $context.getScopePropertyValue,
            setScopeProperty: $context.setScopePropertyValue,
            callScopeFunction: $context.executeScopeFunction,
            callScopeFunctionGetResult: $context.executeScopeFunctionAndGetResult
        };
    })(angular, window)
