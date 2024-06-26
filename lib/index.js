var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _reactNative=require("react-native");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var SnackBar={LENGTH_LONG:_reactNative.NativeModules.RNSnackbar.LENGTH_LONG,LENGTH_SHORT:_reactNative.NativeModules.RNSnackbar.LENGTH_SHORT,LENGTH_INDEFINITE:_reactNative.NativeModules.RNSnackbar.LENGTH_INDEFINITE,show:function show(options){warnDeprecation(options,'title','text');warnDeprecation(options,'color','textColor');var text=options.text||options.title;var numberOfLines=options.numberOfLines;delete options.title;var textColorRaw=options.textColor||options.color;delete options.color;var textColor=textColorRaw&&(0,_reactNative.processColor)(textColorRaw);var backgroundColor=options.backgroundColor&&(0,_reactNative.processColor)(options.backgroundColor);var action=options.action||{};warnDeprecation(action,'title','text');warnDeprecation(action,'color','textColor');var actionText=action.text||action.title;delete action.title;var actionTextColorRaw=action.textColor||action.color;delete action.color;var actionTextColor=actionTextColorRaw&&(0,_reactNative.processColor)(actionTextColorRaw);var onPressCallback=action.onPress||function(){};var nativeOptions=_objectSpread({},options,{text:text,textColor:textColor,numberOfLines:numberOfLines,backgroundColor:backgroundColor,action:options.action?_objectSpread({},action,{text:actionText,textColor:actionTextColor}):undefined});_reactNative.NativeModules.RNSnackbar.show(nativeOptions,onPressCallback);},dismiss:function dismiss(){_reactNative.NativeModules.RNSnackbar.dismiss();}};function warnDeprecation(options,deprecatedKey,newKey){if(options&&options[deprecatedKey]){console.warn("The Snackbar '"+deprecatedKey+"' option has been deprecated. Please switch to '"+newKey+"' instead.");}}var _default=SnackBar;exports.default=_default;