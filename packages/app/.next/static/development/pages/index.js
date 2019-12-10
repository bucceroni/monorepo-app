(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!***********************************************************************************!*\
  !*** /Users/leo/Documents/monorepo-app/node_modules/prop-types/checkPropTypes.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*********************************************************************************************!*\
  !*** /Users/leo/Documents/monorepo-app/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/react/cjs/react.development.js":
/*!*************************************************************************************!*\
  !*** /Users/leo/Documents/monorepo-app/node_modules/react/cjs/react.development.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.12.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?


var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }

    if (condition) {
      return;
    }

    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610

      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarningWithoutStack$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;

function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }

    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum(); // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(void 0, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */



/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null; // Currently, key can be spread in as a prop. This causes a potential
  // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
  // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
  // but as an intermediary step, we will use jsxDEV for everything except
  // <div {...props} key="Hi" />, because we aren't currently able to tell if
  // key is explicitly declared to be undefined or not.

  if (maybeKey !== undefined) {
    key = '' + maybeKey;
  }

  if (hasValidKey(config)) {
    key = '' + config.key;
  }

  if (hasValidRef(config)) {
    ref = config.ref;
  } // Remaining properties are added to a new props object


  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (key || ref) {
    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

    if (key) {
      defineKeyPropWarningGetter(props, displayName);
    }

    if (ref) {
      defineRefPropWarningGetter(props, displayName);
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error("React.Children.only expected to receive a single React element child.");
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !( // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0; // TODO: add a more generic warning for invalid values.

    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}
function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}
function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}
function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}
function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}
var emptyObject$1 = {};
function useResponder(responder, listenerProps) {
  var dispatcher = resolveDispatcher();

  {
    if (responder == null || responder.$$typeof !== REACT_RESPONDER_TYPE) {
      warning$1(false, 'useResponder: invalid first argument. Expected an event responder, but instead got %s', responder);
      return;
    }
  }

  return dispatcher.useResponder(responder, listenerProps || emptyObject$1);
}
function useTransition(config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useTransition(config);
}
function useDeferredValue(value, config) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useDeferredValue(value, config);
}

function withSuspenseConfig(scope, config) {
  var previousConfig = ReactCurrentBatchConfig.suspense;
  ReactCurrentBatchConfig.suspense = config === undefined ? null : config;

  try {
    scope();
  } finally {
    ReactCurrentBatchConfig.suspense = previousConfig;
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */
var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  var type = element.type;

  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }

  var name = getComponentName(type);
  var propTypes;

  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }

  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }

  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);
  var keys = Object.keys(fragment.props);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(source);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    var children = props.children;

    if (children !== undefined) {
      if (isStaticChildren) {
        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            validateChildKeys(children[i], type);
          }

          if (Object.freeze) {
            Object.freeze(children);
          }
        } else {
          warning$1(false, 'React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
        }
      } else {
        validateChildKeys(children, type);
      }
    }
  }

  if (hasOwnProperty$1.call(props, 'key')) {
    warning$1(false, 'React.jsx: Spreading a key to JSX is a deprecated pattern. ' + 'Explicitly pass a key after spreading props in your JSX call. ' + 'E.g. <ComponentName {...props} key={key} />');
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  return jsxWithValidation(type, props, key, true);
}
function jsxWithValidationDynamic(type, props, key) {
  return jsxWithValidation(type, props, key, false);
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type; // Legacy hook: remove it

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarningWithoutStack$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

var hasBadMapPolyfill;

{
  hasBadMapPolyfill = false;

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
    // TODO: Consider warning about bad polyfills
    hasBadMapPolyfill = true;
  }
}

function createFundamentalComponent(impl) {
  // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.
  if ( true && !hasBadMapPolyfill) {
    Object.freeze(impl);
  }

  var fundamantalComponent = {
    $$typeof: REACT_FUNDAMENTAL_TYPE,
    impl: impl
  };

  {
    Object.freeze(fundamantalComponent);
  }

  return fundamantalComponent;
}

function createEventResponder(displayName, responderConfig) {
  var getInitialState = responderConfig.getInitialState,
      onEvent = responderConfig.onEvent,
      onMount = responderConfig.onMount,
      onUnmount = responderConfig.onUnmount,
      onRootEvent = responderConfig.onRootEvent,
      rootEventTypes = responderConfig.rootEventTypes,
      targetEventTypes = responderConfig.targetEventTypes,
      targetPortalPropagation = responderConfig.targetPortalPropagation;
  var eventResponder = {
    $$typeof: REACT_RESPONDER_TYPE,
    displayName: displayName,
    getInitialState: getInitialState || null,
    onEvent: onEvent || null,
    onMount: onMount || null,
    onRootEvent: onRootEvent || null,
    onUnmount: onUnmount || null,
    rootEventTypes: rootEventTypes || null,
    targetEventTypes: targetEventTypes || null,
    targetPortalPropagation: targetPortalPropagation || false
  }; // We use responder as a Map key later on. When we have a bad
  // polyfill, then we can't use it as a key as the polyfill tries
  // to add a property to the object.

  if ( true && !hasBadMapPolyfill) {
    Object.freeze(eventResponder);
  }

  return eventResponder;
}

function createScope() {
  var scopeComponent = {
    $$typeof: REACT_SCOPE_TYPE
  };

  {
    Object.freeze(scopeComponent);
  }

  return scopeComponent;
}

// Helps identify side effects in render-phase lifecycle hooks and setState
// reducers by double invoking them in Strict Mode.

 // To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.

 // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:

 // Gather advanced timing metrics for Profiler subtrees.

 // Trace which interactions trigger each commit.

 // SSR experiments


 // Only used in www builds.

 // Only used in www builds.

 // Disable javascript: URL strings in href for XSS protection.

 // React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties

 // These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var exposeConcurrentModeAPIs = false;
 // Experimental React Flare event system and event components support.

var enableFlareAPI = false; // Experimental Host Component support.

var enableFundamentalAPI = false; // Experimental Scope support.

var enableScopeAPI = false; // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107

var enableJSXTransformAPI = false; // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version

 // For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.

 // Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.

 // Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md





 // Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },
  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,
  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  Fragment: REACT_FRAGMENT_TYPE,
  Profiler: REACT_PROFILER_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,
  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,
  version: ReactVersion,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

if (exposeConcurrentModeAPIs) {
  React.useTransition = useTransition;
  React.useDeferredValue = useDeferredValue;
  React.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  React.unstable_withSuspenseConfig = withSuspenseConfig;
}

if (enableFlareAPI) {
  React.unstable_useResponder = useResponder;
  React.unstable_createResponder = createEventResponder;
}

if (enableFundamentalAPI) {
  React.unstable_createFundamental = createFundamentalComponent;
}

if (enableScopeAPI) {
  React.unstable_createScope = createScope;
} // Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.


if (enableJSXTransformAPI) {
  {
    React.jsxDEV = jsxWithValidation;
    React.jsx = jsxWithValidationDynamic;
    React.jsxs = jsxWithValidationStatic;
  }
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.


var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "../../node_modules/react/index.js":
/*!*********************************************************************!*\
  !*** /Users/leo/Documents/monorepo-app/node_modules/react/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "../../node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "../components/lib/Button.js":
/*!***********************************!*\
  !*** ../components/lib/Button.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t){e.exports=__webpack_require__(/*! react */ "../../node_modules/react/index.js")},function(e,t,r){e.exports=function e(t){"use strict";var r=/^\0+/g,n=/[\0\r\f]/g,a=/: */g,o=/zoo|gra/,i=/([,: ])(transform)/g,s=/,+\s*(?![^(]*[)])/g,c=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,u=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,d=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,p=/\W+/g,h=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,y=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,v=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,C=/([^\(])(:+) */g,k=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,S=/([\s\S]*?);/g,A=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,T="-webkit-",P="-moz-",E="-ms-",R=59,M=125,N=123,$=40,_=41,L=91,D=93,F=10,z=13,H=9,B=64,W=32,q=38,U=45,G=95,Y=42,V=44,X=58,Z=39,K=34,J=47,Q=62,ee=43,te=126,re=0,ne=12,ae=11,oe=107,ie=109,se=115,ce=112,le=111,ue=105,fe=99,de=100,pe=112,he=1,me=1,ye=0,ge=1,ve=1,be=1,we=0,Ce=0,ke=0,xe=[],Se=[],Ae=0,Oe=null,je=-2,Ie=-1,Te=0,Pe=1,Ee=2,Re=3,Me=0,Ne=1,$e="",_e="",Le="";function De(e,t,r){var n=t.trim().split(u),a=n,o=n.length,i=e.length;switch(i){case 0:case 1:for(var s=0,c=0===i?"":e[0]+" ";s<o;++s)a[s]=Fe(c,a[s],r,i).trim();break;default:s=0;var l=0;for(a=[];s<o;++s)for(var f=0;f<i;++f)a[l++]=Fe(e[f]+" ",n[s],r,i).trim()}return a}function Fe(e,t,r,n){var a=t,o=a.charCodeAt(0);switch(o<33&&(o=(a=a.trim()).charCodeAt(0)),o){case q:switch(ge+n){case 0:case 1:if(0===e.trim().length)break;default:return a.replace(f,"$1"+e.trim())}break;case X:switch(a.charCodeAt(1)){case 103:if(be>0&&ge>0)return a.replace(d,"$1").replace(f,"$1"+Le);break;default:return e.trim()+a.replace(f,"$1"+e.trim())}default:if(r*ge>0&&a.indexOf("\f")>0)return a.replace(f,(e.charCodeAt(0)===X?"":"$1")+e.trim())}return e+a}function ze(e,t,r,n){var l,u=0,f=e+";",d=2*t+3*r+4*n;if(944===d)return function(e){var t=e.length,r=e.indexOf(":",9)+1,n=e.substring(0,r).trim(),a=e.substring(r,t-1).trim();switch(e.charCodeAt(9)*Ne){case 0:break;case U:if(110!==e.charCodeAt(10))break;default:var o=a.split((a="",s)),i=0;for(r=0,t=o.length;i<t;r=0,++i){for(var l=o[i],u=l.split(c);l=u[r];){var f=l.charCodeAt(0);if(1===Ne&&(f>B&&f<90||f>96&&f<123||f===G||f===U&&l.charCodeAt(1)!==U))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=$e}}u[r++]=l}a+=(0===i?"":",")+u.join(" ")}}return a=n+a+";",1===ve||2===ve&&He(a,1)?T+a+a:a}(f);if(0===ve||2===ve&&!He(f,1))return f;switch(d){case 1015:return 97===f.charCodeAt(10)?T+f+f:f;case 951:return 116===f.charCodeAt(3)?T+f+f:f;case 963:return 110===f.charCodeAt(5)?T+f+f:f;case 1009:if(100!==f.charCodeAt(4))break;case 969:case 942:return T+f+f;case 978:return T+f+P+f+f;case 1019:case 983:return T+f+P+f+E+f+f;case 883:return f.charCodeAt(8)===U?T+f+f:f.indexOf("image-set(",11)>0?f.replace(I,"$1"+T+"$2")+f:f;case 932:if(f.charCodeAt(4)===U)switch(f.charCodeAt(5)){case 103:return T+"box-"+f.replace("-grow","")+T+f+E+f.replace("grow","positive")+f;case 115:return T+f+E+f.replace("shrink","negative")+f;case 98:return T+f+E+f.replace("basis","preferred-size")+f}return T+f+E+f+f;case 964:return T+f+E+"flex-"+f+f;case 1023:if(99!==f.charCodeAt(8))break;return l=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),T+"box-pack"+l+T+f+E+"flex-pack"+l+f;case 1005:return o.test(f)?f.replace(a,":"+T)+f.replace(a,":"+P)+f:f;case 1e3:switch(u=(l=f.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(u)){case 226:l=f.replace(k,"tb");break;case 232:l=f.replace(k,"tb-rl");break;case 220:l=f.replace(k,"lr");break;default:return f}return T+f+E+l+f;case 1017:if(-1===f.indexOf("sticky",9))return f;case 975:switch(u=(f=e).length-10,d=(l=(33===f.charCodeAt(u)?f.substring(0,u):f).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:f=f.replace(l,T+l)+";"+f;break;case 207:case 102:f=f.replace(l,T+(d>102?"inline-":"")+"box")+";"+f.replace(l,T+l)+";"+f.replace(l,E+l+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===U)switch(f.charCodeAt(6)){case 105:return l=f.replace("-items",""),T+f+T+"box-"+l+E+"flex-"+l+f;case 115:return T+f+E+"flex-item-"+f.replace(A,"")+f;default:return T+f+E+"flex-line-pack"+f.replace("align-content","").replace(A,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==U||122===f.charCodeAt(4))break;case 931:case 953:if(!0===j.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?ze(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):f.replace(l,T+l)+f.replace(l,P+l.replace("fill-",""))+f;break;case 962:if(f=T+f+(102===f.charCodeAt(5)?E+f:"")+f,r+n===211&&105===f.charCodeAt(13)&&f.indexOf("transform",10)>0)return f.substring(0,f.indexOf(";",27)+1).replace(i,"$1"+T+"$2")+f}return f}function He(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10),a=e.substring(r+1,e.length-1);return Oe(2!==t?n:n.replace(O,"$1"),a,t)}function Be(e,t){var r=ze(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(S," or ($1)").substring(4):"("+t+")"}function We(e,t,r,n,a,o,i,s,c,l){for(var u,f=0,d=t;f<Ae;++f)switch(u=Se[f].call(Ge,e,d,r,n,a,o,i,s,c,l)){case void 0:case!1:case!0:case null:break;default:d=u}if(d!==t)return d}function qe(e,t,r,n){for(var a=t+1;a<r;++a)switch(n.charCodeAt(a)){case J:if(e===Y&&n.charCodeAt(a-1)===Y&&t+2!==a)return a+1;break;case F:if(e===J)return a+1}return a}function Ue(e){for(var t in e){var r=e[t];switch(t){case"keyframe":Ne=0|r;break;case"global":be=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":Ce=0|r;break;case"preserve":ke=0|r;break;case"prefix":Oe=null,r?"function"!=typeof r?ve=1:(ve=2,Oe=r):ve=0}}return Ue}function Ge(t,a){if(void 0!==this&&this.constructor===Ge)return e(t);var o=t,i=o.charCodeAt(0);i<33&&(i=(o=o.trim()).charCodeAt(0)),Ne>0&&($e=o.replace(p,i===L?"":"-")),i=1,1===ge?Le=o:_e=o;var s,c=[Le];Ae>0&&void 0!==(s=We(Ie,a,c,c,me,he,0,0,0,0))&&"string"==typeof s&&(a=s);var u=function e(t,a,o,i,s){for(var c,u,f=0,d=0,p=0,g=0,v=0,b=0,w=0,k=0,S=0,A=0,O=0,j=0,I=0,G=0,we=0,Se=0,Oe=0,je=0,Ie=0,Fe=o.length,Ue=Fe-1,Ge="",Ye="",Ve="",Xe="",Ze="",Ke="";we<Fe;){if(w=o.charCodeAt(we),we===Ue&&d+g+p+f!==0&&(0!==d&&(w=d===J?F:J),g=p=f=0,Fe++,Ue++),d+g+p+f===0){if(we===Ue&&(Se>0&&(Ye=Ye.replace(n,"")),Ye.trim().length>0)){switch(w){case W:case H:case R:case z:case F:break;default:Ye+=o.charAt(we)}w=R}if(1===Oe)switch(w){case N:case M:case R:case K:case Z:case $:case _:case V:Oe=0;case H:case z:case F:case W:break;default:for(Oe=0,Ie=we,v=w,we--,w=R;Ie<Fe;)switch(o.charCodeAt(Ie++)){case F:case z:case R:++we,w=v,Ie=Fe;break;case X:Se>0&&(++we,w=v);case N:Ie=Fe}}switch(w){case N:for(v=(Ye=Ye.trim()).charCodeAt(0),O=1,Ie=++we;we<Fe;){switch(w=o.charCodeAt(we)){case N:O++;break;case M:O--;break;case J:switch(b=o.charCodeAt(we+1)){case Y:case J:we=qe(b,we,Ue,o)}break;case L:w++;case $:w++;case K:case Z:for(;we++<Ue&&o.charCodeAt(we)!==w;);}if(0===O)break;we++}switch(Ve=o.substring(Ie,we),v===re&&(v=(Ye=Ye.replace(r,"").trim()).charCodeAt(0)),v){case B:switch(Se>0&&(Ye=Ye.replace(n,"")),b=Ye.charCodeAt(1)){case de:case ie:case se:case U:c=a;break;default:c=xe}if(Ie=(Ve=e(a,c,Ve,b,s+1)).length,ke>0&&0===Ie&&(Ie=Ye.length),Ae>0&&(c=De(xe,Ye,je),u=We(Re,Ve,c,a,me,he,Ie,b,s,i),Ye=c.join(""),void 0!==u&&0===(Ie=(Ve=u.trim()).length)&&(b=0,Ve="")),Ie>0)switch(b){case se:Ye=Ye.replace(x,Be);case de:case ie:case U:Ve=Ye+"{"+Ve+"}";break;case oe:Ve=(Ye=Ye.replace(h,"$1 $2"+(Ne>0?$e:"")))+"{"+Ve+"}",Ve=1===ve||2===ve&&He("@"+Ve,3)?"@"+T+Ve+"@"+Ve:"@"+Ve;break;default:Ve=Ye+Ve,i===pe&&(Xe+=Ve,Ve="")}else Ve="";break;default:Ve=e(a,De(a,Ye,je),Ve,i,s+1)}Ze+=Ve,j=0,Oe=0,G=0,Se=0,je=0,I=0,Ye="",Ve="",w=o.charCodeAt(++we);break;case M:case R:if((Ie=(Ye=(Se>0?Ye.replace(n,""):Ye).trim()).length)>1)switch(0===G&&((v=Ye.charCodeAt(0))===U||v>96&&v<123)&&(Ie=(Ye=Ye.replace(" ",":")).length),Ae>0&&void 0!==(u=We(Pe,Ye,a,t,me,he,Xe.length,i,s,i))&&0===(Ie=(Ye=u.trim()).length)&&(Ye="\0\0"),v=Ye.charCodeAt(0),b=Ye.charCodeAt(1),v){case re:break;case B:if(b===ue||b===fe){Ke+=Ye+o.charAt(we);break}default:if(Ye.charCodeAt(Ie-1)===X)break;Xe+=ze(Ye,v,b,Ye.charCodeAt(2))}j=0,Oe=0,G=0,Se=0,je=0,Ye="",w=o.charCodeAt(++we)}}switch(w){case z:case F:if(d+g+p+f+Ce===0)switch(A){case _:case Z:case K:case B:case te:case Q:case Y:case ee:case J:case U:case X:case V:case R:case N:case M:break;default:G>0&&(Oe=1)}d===J?d=0:ge+j===0&&i!==oe&&Ye.length>0&&(Se=1,Ye+="\0"),Ae*Me>0&&We(Te,Ye,a,t,me,he,Xe.length,i,s,i),he=1,me++;break;case R:case M:if(d+g+p+f===0){he++;break}default:switch(he++,Ge=o.charAt(we),w){case H:case W:if(g+f+d===0)switch(k){case V:case X:case H:case W:Ge="";break;default:w!==W&&(Ge=" ")}break;case re:Ge="\\0";break;case ne:Ge="\\f";break;case ae:Ge="\\v";break;case q:g+d+f===0&&ge>0&&(je=1,Se=1,Ge="\f"+Ge);break;case 108:if(g+d+f+ye===0&&G>0)switch(we-G){case 2:k===ce&&o.charCodeAt(we-3)===X&&(ye=k);case 8:S===le&&(ye=S)}break;case X:g+d+f===0&&(G=we);break;case V:d+p+g+f===0&&(Se=1,Ge+="\r");break;case K:case Z:0===d&&(g=g===w?0:0===g?w:g);break;case L:g+d+p===0&&f++;break;case D:g+d+p===0&&f--;break;case _:g+d+f===0&&p--;break;case $:if(g+d+f===0){if(0===j)switch(2*k+3*S){case 533:break;default:O=0,j=1}p++}break;case B:d+p+g+f+G+I===0&&(I=1);break;case Y:case J:if(g+f+p>0)break;switch(d){case 0:switch(2*w+3*o.charCodeAt(we+1)){case 235:d=J;break;case 220:Ie=we,d=Y}break;case Y:w===J&&k===Y&&Ie+2!==we&&(33===o.charCodeAt(Ie+2)&&(Xe+=o.substring(Ie,we+1)),Ge="",d=0)}}if(0===d){if(ge+g+f+I===0&&i!==oe&&w!==R)switch(w){case V:case te:case Q:case ee:case _:case $:if(0===j){switch(k){case H:case W:case F:case z:Ge+="\0";break;default:Ge="\0"+Ge+(w===V?"":"\0")}Se=1}else switch(w){case $:G+7===we&&108===k&&(G=0),j=++O;break;case _:0==(j=--O)&&(Se=1,Ge+="\0")}break;case H:case W:switch(k){case re:case N:case M:case R:case V:case ne:case H:case W:case F:case z:break;default:0===j&&(Se=1,Ge+="\0")}}Ye+=Ge,w!==W&&w!==H&&(A=w)}}S=k,k=w,we++}if(Ie=Xe.length,ke>0&&0===Ie&&0===Ze.length&&0===a[0].length==0&&(i!==ie||1===a.length&&(ge>0?_e:Le)===a[0])&&(Ie=a.join(",").length+2),Ie>0){if(c=0===ge&&i!==oe?function(e){for(var t,r,a=0,o=e.length,i=Array(o);a<o;++a){for(var s=e[a].split(l),c="",u=0,f=0,d=0,p=0,h=s.length;u<h;++u)if(!(0===(f=(r=s[u]).length)&&h>1)){if(d=c.charCodeAt(c.length-1),p=r.charCodeAt(0),t="",0!==u)switch(d){case Y:case te:case Q:case ee:case W:case $:break;default:t=" "}switch(p){case q:r=t+_e;case te:case Q:case ee:case W:case _:case $:break;case L:r=t+r+_e;break;case X:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(be>0){r=t+r.substring(8,f-1);break}default:(u<1||s[u-1].length<1)&&(r=t+_e+r)}break;case V:t="";default:r=f>1&&r.indexOf(":")>0?t+r.replace(C,"$1"+_e+"$2"):t+r+_e}c+=r}i[a]=c.replace(n,"").trim()}return i}(a):a,Ae>0&&void 0!==(u=We(Ee,Xe,c,t,me,he,Ie,i,s,i))&&0===(Xe=u).length)return Ke+Xe+Ze;if(Xe=c.join(",")+"{"+Xe+"}",ve*ye!=0){switch(2!==ve||He(Xe,2)||(ye=0),ye){case le:Xe=Xe.replace(y,":"+P+"$1")+Xe;break;case ce:Xe=Xe.replace(m,"::"+T+"input-$1")+Xe.replace(m,"::"+P+"$1")+Xe.replace(m,":"+E+"input-$1")+Xe}ye=0}}return Ke+Xe+Ze}(xe,c,a,0,0);return Ae>0&&void 0!==(s=We(je,u,c,c,me,he,u.length,0,0,0))&&"string"!=typeof(u=s)&&(i=0),$e="",Le="",_e="",ye=0,me=1,he=1,we*i==0?u:u.replace(n,"").replace(g,"").replace(v,"$1").replace(b,"$1").replace(w," ")}return Ge.use=function e(t){switch(t){case void 0:case null:Ae=Se.length=0;break;default:if("function"==typeof t)Se[Ae++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else Me=0|!!t}return e},Ge.set=Ue,void 0!==t&&Ue(t),Ge}(null)},function(e,t,r){"use strict";e.exports=r(13)},function(e,t,r){"use strict";function n(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}t.a=function(e,t){var r;void 0===t&&(t=n);var a,o=[],i=!1;return function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return i&&r===this&&t(n,o)||(a=e.apply(this,n),i=!0,r=this,o=n),a}}},function(e,t,r){"use strict";(function(e){var n=r(1),a=r.n(n),o=r(5),i=r.n(o),s=r(0),c=r.n(s),l=r(6),u=r(2),f=r(3),d=(r(14),r(7)),p=r(8),h=function(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},w=function(e,t){var r={};for(var n in e)0<=t.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},C=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},k=function(e){return"object"===(void 0===e?"undefined":m(e))&&e.constructor===Object},x=Object.freeze([]),S=Object.freeze({});function A(e){return"function"==typeof e}function O(e){return e.displayName||e.name||"Component"}function j(e){return e&&"string"==typeof e.styledComponentId}var I,T=void 0!==e&&(e.env.REACT_APP_SC_ATTR||e.env.SC_ATTR)||"data-styled",P="data-styled-version",E="undefined"!=typeof window&&"HTMLElement"in window,R="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||void 0!==e&&(e.env.REACT_APP_SC_DISABLE_SPEEDY||e.env.SC_DISABLE_SPEEDY)||!1,M=(b(N,I=Error),N);function N(e){y(this,N);for(var t=arguments.length,r=Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=C(this,I.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+e+" for more information."+(0<r.length?" Additional arguments: "+r.join(", "):"")));return C(a)}function $(e){var t=""+(e||""),r=[];return t.replace(D,(function(e,t,n){return r.push({componentId:t,matchIndex:n}),e})),r.map((function(e,n){var a=e.componentId,o=e.matchIndex,i=r[n+1];return{componentId:a,cssFromDOM:i?t.slice(o,i.matchIndex):t.slice(o)}}))}function _(e){if(-2===e){var t=B;return B=[],t}}function L(e,t,r){return 0<t&&-1!==r.slice(0,t).indexOf(U)&&r.slice(t-U.length,t)!==U?"."+q:e}var D=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,F=/^\s*\/\/.*$/gm,z=new a.a({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),H=new a.a({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),B=[],W=i()((function(e){B.push(e)})),q=void 0,U=void 0,G=void 0;function Y(e,t,r,n){var a=3<arguments.length&&void 0!==n?n:"&",o=e.join("").replace(F,""),i=t&&r?r+" "+t+" { "+o+" }":o;return q=a,U=t,G=new RegExp("\\"+U+"\\b","g"),H(r||!t?"":t,i)}function V(){return r.nc}function X(e,t,r){r&&((e[t]||(e[t]=Object.create(null)))[r]=!0)}function Z(e,t){e[t]=Object.create(null)}function K(e){return function(t,r){return void 0!==e[t]&&e[t][r]}}function J(e){var t="";for(var r in e)t+=Object.keys(e[r]).join(" ")+" ";return t.trim()}function Q(e){if(e.sheet)return e.sheet;for(var t=e.ownerDocument.styleSheets.length,r=0;r<t;r+=1){var n=e.ownerDocument.styleSheets[r];if(n.ownerNode===e)return n}throw new M(10)}function ee(e,t,r){if(!t)return!1;var n=e.cssRules.length;try{e.insertRule(t,r<=n?r:n)}catch(e){return!1}return!0}function te(e){return"\n/* sc-component-id: "+e+" */\n"}function re(e,t){for(var r=0,n=0;n<=t;n+=1)r+=e[n];return r}function ne(e,t){return function(r){var n=V();return"<style "+[n&&'nonce="'+n+'"',T+'="'+J(t)+'"',P+'="4.4.1"',r].filter(Boolean).join(" ")+">"+e()+"</style>"}}function ae(e,t){return function(){var r,n=((r={})[T]=J(t),r[P]="4.4.1",r),a=V();return a&&(n.nonce=a),c.a.createElement("style",v({},n,{dangerouslySetInnerHTML:{__html:e()}}))}}function oe(e){return function(){return Object.keys(e)}}function ie(e,t){return e.createTextNode(te(t))}function se(e,t,r,n,a){if(!E||r)return function e(t,r){function n(e){var t=i[e];return void 0!==t?t:i[e]=[""]}function a(){var e="";for(var t in i){var r=i[t][0];r&&(e+=te(t)+r)}return e}var o=void 0===t?Object.create(null):t,i=void 0===r?Object.create(null):r;return{clone:function(){var t=function(e){var t=Object.create(null);for(var r in e)t[r]=v({},e[r]);return t}(o),r=Object.create(null);for(var n in i)r[n]=[i[n][0]];return e(t,r)},css:a,getIds:oe(i),hasNameForId:K(o),insertMarker:n,insertRules:function(e,t,r){n(e)[0]+=t.join(" "),X(o,e,r)},removeRules:function(e){var t=i[e];void 0!==t&&(t[0]="",Z(o,e))},sealed:!1,styleTag:null,toElement:ae(a,o),toHTML:ne(a,o)}}();var o=function(e,t,r){var n=document;e?n=e.ownerDocument:t&&(n=t.ownerDocument);var a=n.createElement("style");a.setAttribute(T,""),a.setAttribute(P,"4.4.1");var o=V();if(o&&a.setAttribute("nonce",o),a.appendChild(n.createTextNode("")),e&&!t)e.appendChild(a);else{if(!t||!e||!t.parentNode)throw new M(6);t.parentNode.insertBefore(a,r?t:t.nextSibling)}return a}(e,t,n);return R?function(e,t){function r(t){var r=o[t];return void 0!==r?r:(o[t]=ie(e.ownerDocument,t),e.appendChild(o[t]),a[t]=Object.create(null),o[t])}function n(){var e="";for(var t in o)e+=o[t].data;return e}var a=Object.create(null),o=Object.create(null),i=void 0!==t,s=!1;return{clone:function(){throw new M(5)},css:n,getIds:oe(o),hasNameForId:K(a),insertMarker:r,insertRules:function(e,n,o){for(var c=r(e),l=[],u=n.length,f=0;f<u;f+=1){var d=n[f],p=i;if(p&&-1!==d.indexOf("@import"))l.push(d);else{p=!1;var h=f===u-1?"":" ";c.appendData(d+h)}}X(a,e,o),i&&0<l.length&&(s=!0,t().insertRules(e+"-import",l))},removeRules:function(r){var n=o[r];if(void 0!==n){var c=ie(e.ownerDocument,r);e.replaceChild(c,n),o[r]=c,Z(a,r),i&&s&&t().removeRules(r+"-import")}},sealed:!1,styleTag:e,toElement:ae(n,a),toHTML:ne(n,a)}}(o,a):function(e,t){function r(e){var t=o[e];return void 0!==t?t:(o[e]=i.length,i.push(0),Z(a,e),o[e])}function n(){var t=Q(e).cssRules,r="";for(var n in o){r+=te(n);for(var a=o[n],s=re(i,a),c=s-i[a];c<s;c+=1){var l=t[c];void 0!==l&&(r+=l.cssText)}}return r}var a=Object.create(null),o=Object.create(null),i=[],s=void 0!==t,c=!1;return{clone:function(){throw new M(5)},css:n,getIds:oe(o),hasNameForId:K(a),insertMarker:r,insertRules:function(n,o,l){for(var u=r(n),f=Q(e),d=re(i,u),p=0,h=[],m=o.length,y=0;y<m;y+=1){var g=o[y],v=s;v&&-1!==g.indexOf("@import")?h.push(g):ee(f,g,d+p)&&(v=!1,p+=1)}s&&0<h.length&&(c=!0,t().insertRules(n+"-import",h)),i[u]+=p,X(a,n,l)},removeRules:function(r){var n=o[r];if(void 0!==n&&!1!==e.isConnected){var l=i[n];!function(e,t,r){for(var n=t-r,a=t;n<a;--a)e.deleteRule(a)}(Q(e),re(i,n)-1,l),i[n]=0,Z(a,r),s&&c&&t().removeRules(r+"-import")}},sealed:!1,styleTag:e,toElement:ae(n,a),toHTML:ne(n,a)}}(o,a)}H.use([function(e,t,r){2===e&&r.length&&0<r[0].lastIndexOf(U)&&(r[0]=r[0].replace(G,L))},W,_]),z.use([W,_]);var ce,le=/\s+/;ce=E?R?40:1e3:-1;var ue=0,fe=void 0,de=(pe.prototype.rehydrate=function(){if(!E||this.forceServer)return this;var e=[],t=[],r=!1,n=document.querySelectorAll("style["+T+"]["+P+'="4.4.1"]'),a=n.length;if(!a)return this;for(var o=0;o<a;o+=1){var i=n[o];r=r||!!i.getAttribute("data-styled-streamed");for(var s,c=(i.getAttribute(T)||"").trim().split(le),l=c.length,u=0;u<l;u+=1)s=c[u],this.rehydratedNames[s]=!0;t.push.apply(t,$(i.textContent)),e.push(i)}var f=t.length;if(!f)return this;var d=this.makeTag(null);!function(e,t,r){for(var n=0,a=r.length;n<a;n+=1){var o=r[n],i=o.componentId,s=o.cssFromDOM,c=z("",s);e.insertRules(i,c)}for(var l=0,u=t.length;l<u;l+=1){var f=t[l];f.parentNode&&f.parentNode.removeChild(f)}}(d,e,t),this.capacity=Math.max(1,ce-f),this.tags.push(d);for(var p=0;p<f;p+=1)this.tagMap[t[p].componentId]=d;return this},pe.reset=function(e){fe=new pe(void 0,0<arguments.length&&void 0!==e&&e).rehydrate()},pe.prototype.clone=function(){var e=new pe(this.target,this.forceServer);return this.clones.push(e),e.tags=this.tags.map((function(t){for(var r=t.getIds(),n=t.clone(),a=0;a<r.length;a+=1)e.tagMap[r[a]]=n;return n})),e.rehydratedNames=v({},this.rehydratedNames),e.deferred=v({},this.deferred),e},pe.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach((function(e){e.sealed=!0}))},pe.prototype.makeTag=function(e){var t=e?e.styleTag:null;return se(this.target,t,this.forceServer,!1,this.getImportRuleTag)},pe.prototype.getTagForId=function(e){var t=this.tagMap[e];if(void 0!==t&&!t.sealed)return t;var r=this.tags[this.tags.length-1];return--this.capacity,0===this.capacity&&(this.capacity=ce,r=this.makeTag(r),this.tags.push(r)),this.tagMap[e]=r},pe.prototype.hasId=function(e){return void 0!==this.tagMap[e]},pe.prototype.hasNameForId=function(e,t){if(void 0===this.ignoreRehydratedNames[e]&&this.rehydratedNames[t])return!0;var r=this.tagMap[e];return void 0!==r&&r.hasNameForId(e,t)},pe.prototype.deferredInject=function(e,t){if(void 0===this.tagMap[e]){for(var r=this.clones,n=0;n<r.length;n+=1)r[n].deferredInject(e,t);this.getTagForId(e).insertMarker(e),this.deferred[e]=t}},pe.prototype.inject=function(e,t,r){for(var n=this.clones,a=0;a<n.length;a+=1)n[a].inject(e,t,r);var o=this.getTagForId(e);if(void 0!==this.deferred[e]){var i=this.deferred[e].concat(t);o.insertRules(e,i,r),this.deferred[e]=void 0}else o.insertRules(e,t,r)},pe.prototype.remove=function(e){var t=this.tagMap[e];if(void 0!==t){for(var r=this.clones,n=0;n<r.length;n+=1)r[n].remove(e);t.removeRules(e),this.ignoreRehydratedNames[e]=!0,this.deferred[e]=void 0}},pe.prototype.toHTML=function(){return this.tags.map((function(e){return e.toHTML()})).join("")},pe.prototype.toReactElements=function(){var e=this.id;return this.tags.map((function(t,r){var n="sc-"+e+"-"+r;return Object(s.cloneElement)(t.toElement(),{key:n})}))},function(e,t,r){t&&g(e.prototype,t),r&&g(e,r)}(pe,null,[{key:"master",get:function(){return fe=fe||(new pe).rehydrate()}},{key:"instance",get:function(){return pe.master}}]),pe);function pe(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:E?document.head:null,r=1<arguments.length&&void 0!==arguments[1]&&arguments[1];y(this,pe),this.getImportRuleTag=function(){var t=e.importRuleTag;if(void 0!==t)return t;var r=e.tags[0];return e.importRuleTag=se(e.target,r?r.styleTag:null,e.forceServer,!0)},ue+=1,this.id=ue,this.forceServer=r,this.target=r?null:t,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}var he=(me.prototype.getName=function(){return this.name},me);function me(e,t){var r=this;y(this,me),this.inject=function(e){e.hasNameForId(r.id,r.name)||e.inject(r.id,r.rules,r.name)},this.toString=function(){throw new M(12,String(r.name))},this.name=e,this.rules=t,this.id="sc-keyframes-"+e}var ye=/([A-Z])/g,ge=/^ms-/;function ve(e){return e.replace(ye,"-$1").toLowerCase().replace(ge,"-ms-")}var be=function(e){return null==e||!1===e||""===e},we=function e(t,r){var n=[];return Object.keys(t).forEach((function(r){if(!be(t[r])){if(k(t[r]))return n.push.apply(n,e(t[r],r)),n;if(A(t[r]))return n.push(ve(r)+":",t[r],";"),n;n.push(ve(r)+": "+(null==(o=t[a=r])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||a in l.a?String(o).trim():o+"px")+";")}var a,o;return n})),r?[r+" {"].concat(n,["}"]):n};function Ce(e,t,r){if(Array.isArray(e)){for(var n,a=[],o=0,i=e.length;o<i;o+=1)null!==(n=Ce(e[o],t,r))&&(Array.isArray(n)?a.push.apply(a,n):a.push(n));return a}return be(e)?null:j(e)?"."+e.styledComponentId:A(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:Ce(e(t),t,r):e instanceof he?r?(e.inject(r),e.getName()):e:k(e)?we(e):e.toString();var s}function ke(e){for(var t=arguments.length,r=Array(1<t?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return A(e)||k(e)?Ce(h(x,[e].concat(r))):Ce(h(e,r))}var xe=52,Se=function(e){return String.fromCharCode(e+(25<e?39:97))};function Ae(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(Array.isArray(n)&&!Ae(n,t))return!1;if(A(n)&&!j(n))return!1}return!t.some((function(e){return A(e)||function(e){for(var t in e)if(A(e[t]))return!0;return!1}(e)}))}function Oe(e){return function(e){var t="",r=void 0;for(r=e;xe<r;r=Math.floor(r/xe))t=Se(r%xe)+t;return Se(r%xe)+t}(function(e){for(var t,r=0|e.length,n=0|r,a=0;4<=r;)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++a;switch(r){case 3:n^=(255&e.charCodeAt(a+2))<<16;case 2:n^=(255&e.charCodeAt(a+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(a)))+((1540483477*(n>>>16)&65535)<<16)}return((n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16))^n>>>15)>>>0}(e))}var je=(Ie.prototype.generateAndInjectStyles=function(e,t){var r=this.isStatic,n=this.componentId,a=this.lastClassName;if(E&&r&&"string"==typeof a&&t.hasNameForId(n,a))return a;var o=Ce(this.rules,e,t),i=Oe(this.componentId+o.join(""));return t.hasNameForId(n,i)||t.inject(this.componentId,Y(o,"."+i,void 0,n),i),this.lastClassName=i},Ie.generateName=function(e){return Oe(e)},Ie);function Ie(e,t,r){y(this,Ie),this.rules=e,this.isStatic=Ae(e,t),this.componentId=r,de.master.hasId(r)||de.master.deferredInject(r,[])}var Te,Pe=/[[\].#*$><+~=|^:(),"'`-]+/g,Ee=/(^-|-$)/g;function Re(e){return e.replace(Pe,"-").replace(Ee,"")}function Me(e){return"string"==typeof e&&!0}var Ne={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},$e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_e=((Te={})[u.ForwardRef]={$$typeof:!0,render:!0},Te),Le=Object.defineProperty,De=Object.getOwnPropertyNames,Fe=Object.getOwnPropertySymbols,ze=void 0===Fe?function(){return[]}:Fe,He=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,We=Object.prototype,qe=Array.prototype;var Ue,Ge=Object(s.createContext)(),Ye=Ge.Consumer;function Ve(e){y(this,Ve);var t=C(this,Ue.call(this,e));return t.getContext=Object(f.a)(t.getContext.bind(t)),t.renderInner=t.renderInner.bind(t),t}function Xe(){y(this,Xe),this.masterSheet=de.master,this.instance=this.masterSheet.clone(),this.sealed=!1}b(Ve,Ue=s.Component),Ve.prototype.render=function(){return this.props.children?c.a.createElement(Ge.Consumer,null,this.renderInner):null},Ve.prototype.renderInner=function(e){var t=this.getContext(this.props.theme,e);return c.a.createElement(Ge.Provider,{value:t},this.props.children)},Ve.prototype.getTheme=function(e,t){if(A(e))return e(t);if(null===e||Array.isArray(e)||"object"!==(void 0===e?"undefined":m(e)))throw new M(8);return v({},t,e)},Ve.prototype.getContext=function(e,t){return this.getTheme(e,t)},Xe.prototype.seal=function(){if(!this.sealed){var e=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(e,1),this.sealed=!0}},Xe.prototype.collectStyles=function(e){if(this.sealed)throw new M(2);return c.a.createElement(Qe,{sheet:this.instance},e)},Xe.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},Xe.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},Xe.prototype.interleaveWithNodeStream=function(){throw new M(3)};var Ze,Ke=Object(s.createContext)(),Je=Ke.Consumer,Qe=(b(et,Ze=s.Component),et.prototype.getContext=function(e,t){if(e)return e;if(t)return new de(t);throw new M(4)},et.prototype.render=function(){var e=this.props,t=e.children,r=e.sheet,n=e.target;return c.a.createElement(Ke.Provider,{value:this.getContext(r,n)},t)},et);function et(e){y(this,et);var t=C(this,Ze.call(this,e));return t.getContext=Object(f.a)(t.getContext),t}var tt,rt={},nt=(b(at,tt=s.Component),at.prototype.render=function(){return c.a.createElement(Je,null,this.renderOuter)},at.prototype.renderOuter=function(e){var t=0<arguments.length&&void 0!==e?e:de.master;return this.styleSheet=t,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():c.a.createElement(Ye,null,this.renderInner)},at.prototype.renderInner=function(e){var t,r=this.props.forwardedComponent,n=r.componentStyle,a=r.defaultProps,o=(r.displayName,r.foldedComponentIds),i=r.styledComponentId,c=r.target;t=n.isStatic?this.generateAndInjectStyles(S,this.props):this.generateAndInjectStyles(function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:S,n=!!r&&e.theme===r.theme;return e.theme&&!n?e.theme:t||r.theme}(this.props,e,a)||S,this.props);var l=this.props.as||this.attrs.as||c,u=Me(l),f={},p=v({},this.props,this.attrs),h=void 0;for(h in p)"forwardedComponent"!==h&&"as"!==h&&("forwardedRef"===h?f.ref=p[h]:"forwardedAs"===h?f.as=p[h]:u&&!Object(d.a)(h)||(f[h]=p[h]));return this.props.style&&this.attrs.style&&(f.style=v({},this.attrs.style,this.props.style)),f.className=Array.prototype.concat(o,i,t!==i?t:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),Object(s.createElement)(l,f)},at.prototype.buildExecutionContext=function(e,t,r){var n=this,a=v({},t,{theme:e});return r.length&&(this.attrs={},r.forEach((function(e){var t,r=e,o=!1,i=void 0,s=void 0;for(s in A(r)&&(r=r(a),o=!0),r)i=r[s],o||!A(i)||(t=i)&&t.prototype&&t.prototype.isReactComponent||j(i)||(i=i(a)),n.attrs[s]=i,a[s]=i}))),a},at.prototype.generateAndInjectStyles=function(e,t){var r=t.forwardedComponent,n=r.attrs,a=r.componentStyle;return r.warnTooManyClasses,a.isStatic&&!n.length?a.generateAndInjectStyles(S,this.styleSheet):a.generateAndInjectStyles(this.buildExecutionContext(e,t,n),this.styleSheet)},at);function at(){y(this,at);var e=C(this,tt.call(this));return e.attrs={},e.renderOuter=e.renderOuter.bind(e),e.renderInner=e.renderInner.bind(e),e}function ot(e,t,r){function n(e,t){return c.a.createElement(h,v({},e,{forwardedComponent:k,forwardedRef:t}))}var a,o=j(e),i=!Me(e),s=t.displayName,l=void 0===s?Me(a=e)?"styled."+a:"Styled("+O(a)+")":s,u=t.componentId,f=void 0===u?function(e,t,r){var n="string"!=typeof t?"sc":Re(t),a=(rt[n]||0)+1;rt[n]=a;var o=n+"-"+e.generateName(n+a);return r?r+"-"+o:o}(je,t.displayName,t.parentComponentId):u,d=t.ParentComponent,h=void 0===d?nt:d,m=t.attrs,y=void 0===m?x:m,g=t.displayName&&t.componentId?Re(t.displayName)+"-"+t.componentId:t.componentId||f,b=o&&e.attrs?Array.prototype.concat(e.attrs,y).filter(Boolean):y,C=new je(o?e.componentStyle.rules.concat(r):r,b,g),k=void 0;return n.displayName=l,(k=c.a.forwardRef(n)).displayName=l,k.attrs=b,k.componentStyle=C,k.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):x,k.styledComponentId=g,k.target=o?e.target:e,k.withComponent=function(e){var n=t.componentId,a=w(t,["componentId"]),o=n&&n+"-"+(Me(e)?e:Re(O(e)));return ot(e,v({},a,{attrs:b,componentId:o,ParentComponent:h}),r)},Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Object(p.a)(e.defaultProps,t):t}}),k.toString=function(){return"."+k.styledComponentId},i&&function e(t,r,n){if("string"==typeof r)return t;var a=Be(r);a&&a!==We&&e(t,a,n);for(var o=qe.concat(De(r),ze(r)),i=_e[t.$$typeof]||Ne,s=_e[r.$$typeof]||Ne,c=o.length,l=void 0,u=void 0;c--;)if(u=o[c],!($e[u]||n&&n[u]||s&&s[u]||i&&i[u])&&(l=He(r,u)))try{Le(t,u,l)}catch(t){}return t}(k,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),k}function it(e){return function e(t,r,n){var a=2<arguments.length&&void 0!==n?n:S;if(!Object(u.isValidElementType)(r))throw new M(1,String(r));function o(){return t(r,a,ke.apply(void 0,arguments))}return o.withConfig=function(n){return e(t,r,v({},a,n))},o.attrs=function(n){return e(t,r,v({},a,{attrs:Array.prototype.concat(a.attrs,n).filter(Boolean)}))},o}(ot,e)}function st(e,t){y(this,st),this.rules=e,this.componentId=t,this.isStatic=Ae(e,x),de.master.hasId(t)||de.master.deferredInject(t,[])}["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){it[e]=it(e)})),st.prototype.createStyles=function(e,t){var r=Y(Ce(this.rules,e,t),"");t.inject(this.componentId,r)},st.prototype.removeStyles=function(e){var t=this.componentId;e.hasId(t)&&e.remove(t)},st.prototype.renderStyles=function(e,t){this.removeStyles(t),this.createStyles(e,t)},E&&(window.scCGSHMRCache={}),t.a=it}).call(this,r(12))},function(e,t,r){e.exports=function(e){var t="/*|*/";function r(t){if(t)try{e(t+"}")}catch(t){}}return function(n,a,o,i,s,c,l,u,f,d){switch(n){case 1:if(0===f&&64===a.charCodeAt(0))return e(a+";"),"";break;case 2:if(0===u)return a+t;break;case 3:switch(u){case 102:case 112:return e(o[0]+a),"";default:return a+(0===d?t:"")}case-2:a.split("/*|*/}").forEach(r)}}}},function(e,t,r){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(e,t,r){"use strict";var n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=function(e){var t={};return function(e){return void 0===t[e]&&(t[e]=function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}(e)),t[e]}}();t.a=a},function(e,t,r){"use strict";function n(e){return Object.prototype.toString.call(e).slice(8,-1)}function a(e){return"Object"===n(e)&&e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype}function o(e){return"Array"===n(e)}function i(e){return"Symbol"===n(e)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function s(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,a++)n[a]=o[i];return n}function c(e,t,r,n){var a=n.propertyIsEnumerable(t)?"enumerable":"nonenumerable";"enumerable"==a&&(e[t]=r),"nonenumerable"==a&&Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}t.a=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=null,l=e;return a(e)&&e.extensions&&1===Object.keys(e).length&&(l={},n=e.extensions),t.reduce((function(e,t){return function e(t,r,n){if(!a(r))return n&&o(n)&&n.forEach((function(e){r=e(t,r)})),r;var l={};return a(t)&&(l=s(Object.getOwnPropertyNames(t),Object.getOwnPropertySymbols(t)).reduce((function(e,n){var a=t[n];return(!i(n)&&!Object.getOwnPropertyNames(r).includes(n)||i(n)&&!Object.getOwnPropertySymbols(r).includes(n))&&c(e,n,a,t),e}),{})),s(Object.getOwnPropertyNames(r),Object.getOwnPropertySymbols(r)).reduce((function(i,s){var l=r[s],u=a(t)?t[s]:void 0;return n&&o(n)&&n.forEach((function(e){l=e(u,l)})),void 0!==u&&a(l)&&(l=e(u,l,n)),c(i,s,l,r),i}),l)}(e,t,n)}),l)}},,,function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);function o(){var e=function(e,t){return t=t||e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: flex;\n  width: 290px;\n  height: 36px;\n  left: calc(50% - 290px / 2);\n  top: calc(50% - 36px / 2 - 207.5px);\n  background: ",";\n  border: ",";\n  font-family: ",";\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: ",";\n  align-items: center;\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n  box-sizing: ",";\n  border-radius: 4px;\n"]);return o=function(){return e},e}var i=r(4).a.button(o(),(function(e){return e.primary?"#ff6c00":e.secondary?"#ffffff":null}),(function(e){return e.primary?"4px":e.secondary?"2px solid #FF6C00":null}),(function(e){return e.primary?"Roboto":e.secondary?"Helvetica Neue":null}),(function(e){return e.primary?"16px":e.secondary?"17px":null}),(function(e){return e.primary?"ffffff":e.secondary?"#ff6c00":null}),(function(e){return e.secondary?"border-box":null}));t.default=function(e){return console.log("props",e),a.a.createElement(i,{primary:e.primary,secondary:e.secondary},e.children)}},function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,r){"use strict";
/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,a=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function C(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case d:case i:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case u:case p:case g:case y:case l:return e;default:return t}}case o:return t}}}function k(e){return C(e)===d}t.typeOf=C,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=a,t.ForwardRef=p,t.Fragment=i,t.Lazy=g,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===c||e===s||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w)},t.isAsyncMode=function(e){return k(e)||C(e)===f},t.isConcurrentMode=k,t.isContextConsumer=function(e){return C(e)===u},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return C(e)===p},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===g},t.isMemo=function(e){return C(e)===y},t.isPortal=function(e){return C(e)===o},t.isProfiler=function(e){return C(e)===c},t.isStrictMode=function(e){return C(e)===s},t.isSuspense=function(e){return C(e)===h}},function(e,t,r){e.exports=r(15)()},function(e,t,r){"use strict";var n=r(16);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,o,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}var r={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return r.PropTypes=r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5f137288facb1107b491 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fleo%2FDocuments%2Fmonorepo-app%2Fpackages%2Fapp%2Fpages%2Findex.js!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fleo%2FDocuments%2Fmonorepo-app%2Fpackages%2Fapp%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5f137288facb1107b491 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5f137288facb1107b491 */ "dll-reference dll_5f137288facb1107b491"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_lib_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/lib/Button */ "../components/lib/Button.js");
/* harmony import */ var components_lib_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(components_lib_Button__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/leo/Documents/monorepo-app/packages/app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Another from "components/lib/Another";
// import Hello from "components/lib/Hello";



var Home = function Home() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(components_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "primary"), __jsx(components_lib_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    secondary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "secondary"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fleo%2FDocuments%2Fmonorepo-app%2Fpackages%2Fapp%2Fpages%2Findex.js ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fleo%2FDocuments%2Fmonorepo-app%2Fpackages%2Fapp%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fleo%2FDocuments%2Fmonorepo-app%2Fpackages%2Fapp%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_5f137288facb1107b491":
/*!*******************************************!*\
  !*** external "dll_5f137288facb1107b491" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5f137288facb1107b491;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map