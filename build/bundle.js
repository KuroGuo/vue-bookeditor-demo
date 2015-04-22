/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var app = new Vue(__webpack_require__(1))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)("");
	var __vue_template__ = "<div v-component=\"{{currentView}}\"></div>";
	module.exports = {
	  el: '#app',
	  data: {
	    currentView: 'edit-view'
	  },
	  components: {
	    'edit-view': __webpack_require__(3)
	  }
	}
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Vue.js v0.11.8
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["Vue"] = factory();
		else
			root["Vue"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var extend = _.extend

		/**
		 * The exposed Vue constructor.
		 *
		 * API conventions:
		 * - public API methods/properties are prefiexed with `$`
		 * - internal methods/properties are prefixed with `_`
		 * - non-prefixed properties are assumed to be proxied user
		 *   data.
		 *
		 * @constructor
		 * @param {Object} [options]
		 * @public
		 */

		function Vue (options) {
		  this._init(options)
		}

		/**
		 * Mixin global API
		 */

		extend(Vue, __webpack_require__(1))

		/**
		 * Vue and every constructor that extends Vue has an
		 * associated options object, which can be accessed during
		 * compilation steps as `this.constructor.options`.
		 *
		 * These can be seen as the default options of every
		 * Vue instance.
		 */

		Vue.options = {
		  directives  : __webpack_require__(12),
		  filters     : __webpack_require__(13),
		  partials    : {},
		  transitions : {},
		  components  : {}
		}

		/**
		 * Build up the prototype
		 */

		var p = Vue.prototype

		/**
		 * $data has a setter which does a bunch of
		 * teardown/setup work
		 */

		Object.defineProperty(p, '$data', {
		  get: function () {
		    return this._data
		  },
		  set: function (newData) {
		    this._setData(newData)
		  }
		})

		/**
		 * Mixin internal instance methods
		 */

		extend(p, __webpack_require__(2))
		extend(p, __webpack_require__(3))
		extend(p, __webpack_require__(4))
		extend(p, __webpack_require__(5))

		/**
		 * Mixin public API methods
		 */

		extend(p, __webpack_require__(6))
		extend(p, __webpack_require__(7))
		extend(p, __webpack_require__(8))
		extend(p, __webpack_require__(9))
		extend(p, __webpack_require__(10))

		module.exports = _.Vue = Vue

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var mergeOptions = __webpack_require__(14)

		/**
		 * Expose useful internals
		 */

		exports.util = _
		exports.nextTick = _.nextTick
		exports.config = __webpack_require__(15)

		exports.compiler = {
		  compile: __webpack_require__(16),
		  transclude: __webpack_require__(17)
		}

		exports.parsers = {
		  path: __webpack_require__(18),
		  text: __webpack_require__(19),
		  template: __webpack_require__(20),
		  directive: __webpack_require__(21),
		  expression: __webpack_require__(22)
		}

		/**
		 * Each instance constructor, including Vue, has a unique
		 * cid. This enables us to create wrapped "child
		 * constructors" for prototypal inheritance and cache them.
		 */

		exports.cid = 0
		var cid = 1

		/**
		 * Class inehritance
		 *
		 * @param {Object} extendOptions
		 */

		exports.extend = function (extendOptions) {
		  extendOptions = extendOptions || {}
		  var Super = this
		  var Sub = createClass(
		    extendOptions.name ||
		    Super.options.name ||
		    'VueComponent'
		  )
		  Sub.prototype = Object.create(Super.prototype)
		  Sub.prototype.constructor = Sub
		  Sub.cid = cid++
		  Sub.options = mergeOptions(
		    Super.options,
		    extendOptions
		  )
		  Sub['super'] = Super
		  // allow further extension
		  Sub.extend = Super.extend
		  // create asset registers, so extended classes
		  // can have their private assets too.
		  createAssetRegisters(Sub)
		  return Sub
		}

		/**
		 * A function that returns a sub-class constructor with the
		 * given name. This gives us much nicer output when
		 * logging instances in the console.
		 *
		 * @param {String} name
		 * @return {Function}
		 */

		function createClass (name) {
		  return new Function(
		    'return function ' + _.classify(name) +
		    ' (options) { this._init(options) }'
		  )()
		}

		/**
		 * Plugin system
		 *
		 * @param {Object} plugin
		 */

		exports.use = function (plugin) {
		  // additional parameters
		  var args = _.toArray(arguments, 1)
		  args.unshift(this)
		  if (typeof plugin.install === 'function') {
		    plugin.install.apply(plugin, args)
		  } else {
		    plugin.apply(null, args)
		  }
		  return this
		}

		/**
		 * Define asset registration methods on a constructor.
		 *
		 * @param {Function} Constructor
		 */

		var assetTypes = [
		  'directive',
		  'filter',
		  'partial',
		  'transition'
		]

		function createAssetRegisters (Constructor) {

		  /* Asset registration methods share the same signature:
		   *
		   * @param {String} id
		   * @param {*} definition
		   */

		  assetTypes.forEach(function (type) {
		    Constructor[type] = function (id, definition) {
		      if (!definition) {
		        return this.options[type + 's'][id]
		      } else {
		        this.options[type + 's'][id] = definition
		      }
		    }
		  })

		  /**
		   * Component registration needs to automatically invoke
		   * Vue.extend on object values.
		   *
		   * @param {String} id
		   * @param {Object|Function} definition
		   */

		  Constructor.component = function (id, definition) {
		    if (!definition) {
		      return this.options.components[id]
		    } else {
		      if (_.isPlainObject(definition)) {
		        definition.name = id
		        definition = _.Vue.extend(definition)
		      }
		      this.options.components[id] = definition
		    }
		  }
		}

		createAssetRegisters(exports)

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var mergeOptions = __webpack_require__(14)

		/**
		 * The main init sequence. This is called for every
		 * instance, including ones that are created from extended
		 * constructors.
		 *
		 * @param {Object} options - this options object should be
		 *                           the result of merging class
		 *                           options and the options passed
		 *                           in to the constructor.
		 */

		exports._init = function (options) {

		  options = options || {}

		  this.$el           = null
		  this.$parent       = options._parent
		  this.$root         = options._root || this
		  this.$             = {} // child vm references
		  this.$$            = {} // element references
		  this._watcherList  = [] // all watchers as an array
		  this._watchers     = {} // internal watchers as a hash
		  this._userWatchers = {} // user watchers as a hash
		  this._directives   = [] // all directives

		  // a flag to avoid this being observed
		  this._isVue = true

		  // events bookkeeping
		  this._events         = {}    // registered callbacks
		  this._eventsCount    = {}    // for $broadcast optimization
		  this._eventCancelled = false // for event cancellation

		  // block instance properties
		  this._isBlock     = false
		  this._blockStart  =          // @type {CommentNode}
		  this._blockEnd    = null     // @type {CommentNode}

		  // lifecycle state
		  this._isCompiled  =
		  this._isDestroyed =
		  this._isReady     =
		  this._isAttached  =
		  this._isBeingDestroyed = false

		  // children
		  this._children = []
		  this._childCtors = {}

		  // transclusion unlink functions
		  this._containerUnlinkFn =
		  this._contentUnlinkFn = null

		  // transcluded components that belong to the parent.
		  // need to keep track of them so that we can call
		  // attached/detached hooks on them.
		  this._transCpnts = null

		  // props used in v-repeat diffing
		  this._new = true
		  this._reused = false

		  // merge options.
		  options = this.$options = mergeOptions(
		    this.constructor.options,
		    options,
		    this
		  )

		  // set data after merge.
		  this._data = options.data || {}

		  // initialize data observation and scope inheritance.
		  this._initScope()

		  // setup event system and option events.
		  this._initEvents()

		  // call created hook
		  this._callHook('created')

		  // if `el` option is passed, start compilation.
		  if (options.el) {
		    this.$mount(options.el)
		  }
		}

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var inDoc = _.inDoc

		/**
		 * Setup the instance's option events & watchers.
		 * If the value is a string, we pull it from the
		 * instance's methods by name.
		 */

		exports._initEvents = function () {
		  var options = this.$options
		  registerCallbacks(this, '$on', options.events)
		  registerCallbacks(this, '$watch', options.watch)
		}

		/**
		 * Register callbacks for option events and watchers.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {Object} hash
		 */

		function registerCallbacks (vm, action, hash) {
		  if (!hash) return
		  var handlers, key, i, j
		  for (key in hash) {
		    handlers = hash[key]
		    if (_.isArray(handlers)) {
		      for (i = 0, j = handlers.length; i < j; i++) {
		        register(vm, action, key, handlers[i])
		      }
		    } else {
		      register(vm, action, key, handlers)
		    }
		  }
		}

		/**
		 * Helper to register an event/watch callback.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {String} key
		 * @param {*} handler
		 */

		function register (vm, action, key, handler) {
		  var type = typeof handler
		  if (type === 'function') {
		    vm[action](key, handler)
		  } else if (type === 'string') {
		    var methods = vm.$options.methods
		    var method = methods && methods[handler]
		    if (method) {
		      vm[action](key, method)
		    } else {
		      _.warn(
		        'Unknown method: "' + handler + '" when ' +
		        'registering callback for ' + action +
		        ': "' + key + '".'
		      )
		    }
		  }
		}

		/**
		 * Setup recursive attached/detached calls
		 */

		exports._initDOMHooks = function () {
		  this.$on('hook:attached', onAttached)
		  this.$on('hook:detached', onDetached)
		}

		/**
		 * Callback to recursively call attached hook on children
		 */

		function onAttached () {
		  this._isAttached = true
		  this._children.forEach(callAttach)
		  if (this._transCpnts) {
		    this._transCpnts.forEach(callAttach)
		  }
		}

		/**
		 * Iterator to call attached hook
		 * 
		 * @param {Vue} child
		 */

		function callAttach (child) {
		  if (!child._isAttached && inDoc(child.$el)) {
		    child._callHook('attached')
		  }
		}

		/**
		 * Callback to recursively call detached hook on children
		 */

		function onDetached () {
		  this._isAttached = false
		  this._children.forEach(callDetach)
		  if (this._transCpnts) {
		    this._transCpnts.forEach(callDetach)
		  }
		}

		/**
		 * Iterator to call detached hook
		 * 
		 * @param {Vue} child
		 */

		function callDetach (child) {
		  if (child._isAttached && !inDoc(child.$el)) {
		    child._callHook('detached')
		  }
		}

		/**
		 * Trigger all handlers for a hook
		 *
		 * @param {String} hook
		 */

		exports._callHook = function (hook) {
		  var handlers = this.$options[hook]
		  if (handlers) {
		    for (var i = 0, j = handlers.length; i < j; i++) {
		      handlers[i].call(this)
		    }
		  }
		  this.$emit('hook:' + hook)
		}

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Observer = __webpack_require__(49)
		var Dep = __webpack_require__(23)

		/**
		 * Setup the scope of an instance, which contains:
		 * - observed data
		 * - computed properties
		 * - user methods
		 * - meta properties
		 */

		exports._initScope = function () {
		  this._initData()
		  this._initComputed()
		  this._initMethods()
		  this._initMeta()
		}

		/**
		 * Initialize the data. 
		 */

		exports._initData = function () {
		  // proxy data on instance
		  var data = this._data
		  var keys = Object.keys(data)
		  var i = keys.length
		  var key
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key)) {
		      this._proxy(key)
		    }
		  }
		  // observe data
		  Observer.create(data).addVm(this)
		}

		/**
		 * Swap the isntance's $data. Called in $data's setter.
		 *
		 * @param {Object} newData
		 */

		exports._setData = function (newData) {
		  newData = newData || {}
		  var oldData = this._data
		  this._data = newData
		  var keys, key, i
		  // unproxy keys not present in new data
		  keys = Object.keys(oldData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key) && !(key in newData)) {
		      this._unproxy(key)
		    }
		  }
		  // proxy keys not already proxied,
		  // and trigger change for changed values
		  keys = Object.keys(newData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
		      // new property
		      this._proxy(key)
		    }
		  }
		  oldData.__ob__.removeVm(this)
		  Observer.create(newData).addVm(this)
		  this._digest()
		}

		/**
		 * Proxy a property, so that
		 * vm.prop === vm._data.prop
		 *
		 * @param {String} key
		 */

		exports._proxy = function (key) {
		  // need to store ref to self here
		  // because these getter/setters might
		  // be called by child instances!
		  var self = this
		  Object.defineProperty(self, key, {
		    configurable: true,
		    enumerable: true,
		    get: function proxyGetter () {
		      return self._data[key]
		    },
		    set: function proxySetter (val) {
		      self._data[key] = val
		    }
		  })
		}

		/**
		 * Unproxy a property.
		 *
		 * @param {String} key
		 */

		exports._unproxy = function (key) {
		  delete this[key]
		}

		/**
		 * Force update on every watcher in scope.
		 */

		exports._digest = function () {
		  var i = this._watcherList.length
		  while (i--) {
		    this._watcherList[i].update()
		  }
		  var children = this._children
		  i = children.length
		  while (i--) {
		    var child = children[i]
		    if (!child._repeat && child.$options.inherit) {
		      child._digest()
		    }
		  }
		}

		/**
		 * Setup computed properties. They are essentially
		 * special getter/setters
		 */

		function noop () {}
		exports._initComputed = function () {
		  var computed = this.$options.computed
		  if (computed) {
		    for (var key in computed) {
		      var userDef = computed[key]
		      var def = {
		        enumerable: true,
		        configurable: true
		      }
		      if (typeof userDef === 'function') {
		        def.get = _.bind(userDef, this)
		        def.set = noop
		      } else {
		        def.get = userDef.get
		          ? _.bind(userDef.get, this)
		          : noop
		        def.set = userDef.set
		          ? _.bind(userDef.set, this)
		          : noop
		      }
		      Object.defineProperty(this, key, def)
		    }
		  }
		}

		/**
		 * Setup instance methods. Methods must be bound to the
		 * instance since they might be called by children
		 * inheriting them.
		 */

		exports._initMethods = function () {
		  var methods = this.$options.methods
		  if (methods) {
		    for (var key in methods) {
		      this[key] = _.bind(methods[key], this)
		    }
		  }
		}

		/**
		 * Initialize meta information like $index, $key & $value.
		 */

		exports._initMeta = function () {
		  var metas = this.$options._meta
		  if (metas) {
		    for (var key in metas) {
		      this._defineMeta(key, metas[key])
		    }
		  }
		}

		/**
		 * Define a meta property, e.g $index, $key, $value
		 * which only exists on the vm instance but not in $data.
		 *
		 * @param {String} key
		 * @param {*} value
		 */

		exports._defineMeta = function (key, value) {
		  var dep = new Dep()
		  Object.defineProperty(this, key, {
		    enumerable: true,
		    configurable: true,
		    get: function metaGetter () {
		      if (Observer.target) {
		        Observer.target.addDep(dep)
		      }
		      return value
		    },
		    set: function metaSetter (val) {
		      if (val !== value) {
		        value = val
		        dep.notify()
		      }
		    }
		  })
		}

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Directive = __webpack_require__(24)
		var compile = __webpack_require__(16)
		var transclude = __webpack_require__(17)

		/**
		 * Transclude, compile and link element.
		 *
		 * If a pre-compiled linker is available, that means the
		 * passed in element will be pre-transcluded and compiled
		 * as well - all we need to do is to call the linker.
		 *
		 * Otherwise we need to call transclude/compile/link here.
		 *
		 * @param {Element} el
		 * @return {Element}
		 */

		exports._compile = function (el) {
		  var options = this.$options
		  var parent = options._parent
		  if (options._linkFn) {
		    this._initElement(el)
		    options._linkFn(this, el)
		  } else {
		    var raw = el
		    if (options._asComponent) {
		      // separate container element and content
		      var content = options._content = _.extractContent(raw)
		      // create two separate linekrs for container and content
		      var parentOptions = parent.$options
		      
		      // hack: we need to skip the paramAttributes for this
		      // child instance when compiling its parent container
		      // linker. there could be a better way to do this.
		      parentOptions._skipAttrs = options.paramAttributes
		      var containerLinkFn =
		        compile(raw, parentOptions, true, true)
		      parentOptions._skipAttrs = null

		      if (content) {
		        var ol = parent._children.length
		        var contentLinkFn =
		          compile(content, parentOptions, true)
		        // call content linker now, before transclusion
		        this._contentUnlinkFn = contentLinkFn(parent, content)
		        // mark all compiled nodes as transcluded, so that
		        // directives that do partial compilation, e.g. v-if
		        // and v-partial can detect them and persist them
		        // through re-compilations.
		        for (var i = 0; i < content.childNodes.length; i++) {
		          content.childNodes[i]._isContent = true
		        }
		        this._transCpnts = parent._children.slice(ol)
		      }
		      // tranclude, this possibly replaces original
		      el = transclude(el, options)
		      this._initElement(el)
		      // now call the container linker on the resolved el
		      this._containerUnlinkFn = containerLinkFn(parent, el)
		    } else {
		      // simply transclude
		      el = transclude(el, options)
		      this._initElement(el)
		    }
		    var linkFn = compile(el, options)
		    linkFn(this, el)
		    if (options.replace) {
		      _.replace(raw, el)
		    }
		  }
		  return el
		}

		/**
		 * Initialize instance element. Called in the public
		 * $mount() method.
		 *
		 * @param {Element} el
		 */

		exports._initElement = function (el) {
		  if (el instanceof DocumentFragment) {
		    this._isBlock = true
		    this._blockStart = el.firstChild
		    this.$el = el.childNodes[1]
		    this._blockEnd = el.lastChild
		    this._blockFragment = el
		  } else {
		    this.$el = el
		  }
		  this.$el.__vue__ = this
		  this._callHook('beforeCompile')
		}

		/**
		 * Create and bind a directive to an element.
		 *
		 * @param {String} name - directive name
		 * @param {Node} node   - target node
		 * @param {Object} desc - parsed directive descriptor
		 * @param {Object} def  - directive definition object
		 */

		exports._bindDir = function (name, node, desc, def) {
		  this._directives.push(
		    new Directive(name, node, this, desc, def)
		  )
		}

		/**
		 * Teardown an instance, unobserves the data, unbind all the
		 * directives, turn off all the event listeners, etc.
		 *
		 * @param {Boolean} remove - whether to remove the DOM node.
		 * @param {Boolean} deferCleanup - if true, defer cleanup to
		 *                                 be called later
		 */

		exports._destroy = function (remove, deferCleanup) {
		  if (this._isBeingDestroyed) {
		    return
		  }
		  this._callHook('beforeDestroy')
		  this._isBeingDestroyed = true
		  var i
		  // remove self from parent. only necessary
		  // if parent is not being destroyed as well.
		  var parent = this.$parent
		  if (parent && !parent._isBeingDestroyed) {
		    i = parent._children.indexOf(this)
		    parent._children.splice(i, 1)
		  }
		  // destroy all children.
		  i = this._children.length
		  while (i--) {
		    this._children[i].$destroy()
		  }
		  // teardown parent linkers
		  if (this._containerUnlinkFn) {
		    this._containerUnlinkFn()
		  }
		  if (this._contentUnlinkFn) {
		    this._contentUnlinkFn()
		  }
		  // teardown all directives. this also tearsdown all
		  // directive-owned watchers. intentionally check for
		  // directives array length on every loop since directives
		  // that manages partial compilation can splice ones out
		  for (i = 0; i < this._directives.length; i++) {
		    this._directives[i]._teardown()
		  }
		  // teardown all user watchers.
		  var watcher
		  for (i in this._userWatchers) {
		    watcher = this._userWatchers[i]
		    if (watcher) {
		      watcher.teardown()
		    }
		  }
		  // remove reference to self on $el
		  if (this.$el) {
		    this.$el.__vue__ = null
		  }
		  // remove DOM element
		  var self = this
		  if (remove && this.$el) {
		    this.$remove(function () {
		      self._cleanup()
		    })
		  } else if (!deferCleanup) {
		    this._cleanup()
		  }
		}

		/**
		 * Clean up to ensure garbage collection.
		 * This is called after the leave transition if there
		 * is any.
		 */

		exports._cleanup = function () {
		  // remove reference from data ob
		  this._data.__ob__.removeVm(this)
		  this._data =
		  this._watchers =
		  this._userWatchers =
		  this._watcherList =
		  this.$el =
		  this.$parent =
		  this.$root =
		  this._children =
		  this._transCpnts =
		  this._directives = null
		  // call the last hook...
		  this._isDestroyed = true
		  this._callHook('destroyed')
		  // turn off all instance listeners.
		  this.$off()
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Watcher = __webpack_require__(25)
		var Path = __webpack_require__(18)
		var textParser = __webpack_require__(19)
		var dirParser = __webpack_require__(21)
		var expParser = __webpack_require__(22)
		var filterRE = /[^|]\|[^|]/

		/**
		 * Get the value from an expression on this vm.
		 *
		 * @param {String} exp
		 * @return {*}
		 */

		exports.$get = function (exp) {
		  var res = expParser.parse(exp)
		  if (res) {
		    try {
		      return res.get.call(this, this)
		    } catch (e) {}
		  }
		}

		/**
		 * Set the value from an expression on this vm.
		 * The expression must be a valid left-hand
		 * expression in an assignment.
		 *
		 * @param {String} exp
		 * @param {*} val
		 */

		exports.$set = function (exp, val) {
		  var res = expParser.parse(exp, true)
		  if (res && res.set) {
		    res.set.call(this, this, val)
		  }
		}

		/**
		 * Add a property on the VM
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		exports.$add = function (key, val) {
		  this._data.$add(key, val)
		}

		/**
		 * Delete a property on the VM
		 *
		 * @param {String} key
		 */

		exports.$delete = function (key) {
		  this._data.$delete(key)
		}

		/**
		 * Watch an expression, trigger callback when its
		 * value changes.
		 *
		 * @param {String} exp
		 * @param {Function} cb
		 * @param {Boolean} [deep]
		 * @param {Boolean} [immediate]
		 * @return {Function} - unwatchFn
		 */

		exports.$watch = function (exp, cb, deep, immediate) {
		  var vm = this
		  var key = deep ? exp + '**deep**' : exp
		  var watcher = vm._userWatchers[key]
		  var wrappedCb = function (val, oldVal) {
		    cb.call(vm, val, oldVal)
		  }
		  if (!watcher) {
		    watcher = vm._userWatchers[key] =
		      new Watcher(vm, exp, wrappedCb, {
		        deep: deep,
		        user: true
		      })
		  } else {
		    watcher.addCb(wrappedCb)
		  }
		  if (immediate) {
		    wrappedCb(watcher.value)
		  }
		  return function unwatchFn () {
		    watcher.removeCb(wrappedCb)
		    if (!watcher.active) {
		      vm._userWatchers[key] = null
		    }
		  }
		}

		/**
		 * Evaluate a text directive, including filters.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$eval = function (text) {
		  // check for filters.
		  if (filterRE.test(text)) {
		    var dir = dirParser.parse(text)[0]
		    // the filter regex check might give false positive
		    // for pipes inside strings, so it's possible that
		    // we don't get any filters here
		    return dir.filters
		      ? _.applyFilters(
		          this.$get(dir.expression),
		          _.resolveFilters(this, dir.filters).read,
		          this
		        )
		      : this.$get(dir.expression)
		  } else {
		    // no filter
		    return this.$get(text)
		  }
		}

		/**
		 * Interpolate a piece of template text.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$interpolate = function (text) {
		  var tokens = textParser.parse(text)
		  var vm = this
		  if (tokens) {
		    return tokens.length === 1
		      ? vm.$eval(tokens[0].value)
		      : tokens.map(function (token) {
		          return token.tag
		            ? vm.$eval(token.value)
		            : token.value
		        }).join('')
		  } else {
		    return text
		  }
		}

		/**
		 * Log instance data as a plain JS object
		 * so that it is easier to inspect in console.
		 * This method assumes console is available.
		 *
		 * @param {String} [path]
		 */

		exports.$log = function (path) {
		  var data = path
		    ? Path.get(this._data, path)
		    : this._data
		  if (data) {
		    data = JSON.parse(JSON.stringify(data))
		  }
		  console.log(data)
		}

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var transition = __webpack_require__(50)

		/**
		 * Append instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$appendTo = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    append, transition.append
		  )
		}

		/**
		 * Prepend instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$prependTo = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.hasChildNodes()) {
		    this.$before(target.firstChild, cb, withTransition)
		  } else {
		    this.$appendTo(target, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Insert instance before target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$before = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    before, transition.before
		  )
		}

		/**
		 * Insert instance after target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$after = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.nextSibling) {
		    this.$before(target.nextSibling, cb, withTransition)
		  } else {
		    this.$appendTo(target.parentNode, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Remove instance from DOM
		 *
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$remove = function (cb, withTransition) {
		  var inDoc = this._isAttached && _.inDoc(this.$el)
		  // if we are not in document, no need to check
		  // for transitions
		  if (!inDoc) withTransition = false
		  var op
		  var self = this
		  var realCb = function () {
		    if (inDoc) self._callHook('detached')
		    if (cb) cb()
		  }
		  if (
		    this._isBlock &&
		    !this._blockFragment.hasChildNodes()
		  ) {
		    op = withTransition === false
		      ? append
		      : transition.removeThenAppend
		    blockOp(this, this._blockFragment, op, realCb)
		  } else {
		    op = withTransition === false
		      ? remove
		      : transition.remove
		    op(this.$el, this, realCb)
		  }
		  return this
		}

		/**
		 * Shared DOM insertion function.
		 *
		 * @param {Vue} vm
		 * @param {Element} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition]
		 * @param {Function} op1 - op for non-transition insert
		 * @param {Function} op2 - op for transition insert
		 * @return vm
		 */

		function insert (vm, target, cb, withTransition, op1, op2) {
		  target = query(target)
		  var targetIsDetached = !_.inDoc(target)
		  var op = withTransition === false || targetIsDetached
		    ? op1
		    : op2
		  var shouldCallHook =
		    !targetIsDetached &&
		    !vm._isAttached &&
		    !_.inDoc(vm.$el)
		  if (vm._isBlock) {
		    blockOp(vm, target, op, cb)
		  } else {
		    op(vm.$el, target, vm, cb)
		  }
		  if (shouldCallHook) {
		    vm._callHook('attached')
		  }
		  return vm
		}

		/**
		 * Execute a transition operation on a block instance,
		 * iterating through all its block nodes.
		 *
		 * @param {Vue} vm
		 * @param {Node} target
		 * @param {Function} op
		 * @param {Function} cb
		 */

		function blockOp (vm, target, op, cb) {
		  var current = vm._blockStart
		  var end = vm._blockEnd
		  var next
		  while (next !== end) {
		    next = current.nextSibling
		    op(current, target, vm)
		    current = next
		  }
		  op(end, target, vm, cb)
		}

		/**
		 * Check for selectors
		 *
		 * @param {String|Element} el
		 */

		function query (el) {
		  return typeof el === 'string'
		    ? document.querySelector(el)
		    : el
		}

		/**
		 * Append operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function append (el, target, vm, cb) {
		  target.appendChild(el)
		  if (cb) cb()
		}

		/**
		 * InsertBefore operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function before (el, target, vm, cb) {
		  _.before(el, target)
		  if (cb) cb()
		}

		/**
		 * Remove operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function remove (el, vm, cb) {
		  _.remove(el)
		  if (cb) cb()
		}

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$on = function (event, fn) {
		  (this._events[event] || (this._events[event] = []))
		    .push(fn)
		  modifyListenerCount(this, event, 1)
		  return this
		}

		/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$once = function (event, fn) {
		  var self = this
		  function on () {
		    self.$off(event, on)
		    fn.apply(this, arguments)
		  }
		  on.fn = fn
		  this.$on(event, on)
		  return this
		}

		/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$off = function (event, fn) {
		  var cbs
		  // all
		  if (!arguments.length) {
		    if (this.$parent) {
		      for (event in this._events) {
		        cbs = this._events[event]
		        if (cbs) {
		          modifyListenerCount(this, event, -cbs.length)
		        }
		      }
		    }
		    this._events = {}
		    return this
		  }
		  // specific event
		  cbs = this._events[event]
		  if (!cbs) {
		    return this
		  }
		  if (arguments.length === 1) {
		    modifyListenerCount(this, event, -cbs.length)
		    this._events[event] = null
		    return this
		  }
		  // specific handler
		  var cb
		  var i = cbs.length
		  while (i--) {
		    cb = cbs[i]
		    if (cb === fn || cb.fn === fn) {
		      modifyListenerCount(this, event, -1)
		      cbs.splice(i, 1)
		      break
		    }
		  }
		  return this
		}

		/**
		 * Trigger an event on self.
		 *
		 * @param {String} event
		 */

		exports.$emit = function (event) {
		  this._eventCancelled = false
		  var cbs = this._events[event]
		  if (cbs) {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length - 1
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i + 1]
		    }
		    i = 0
		    cbs = cbs.length > 1
		      ? _.toArray(cbs)
		      : cbs
		    for (var l = cbs.length; i < l; i++) {
		      if (cbs[i].apply(this, args) === false) {
		        this._eventCancelled = true
		      }
		    }
		  }
		  return this
		}

		/**
		 * Recursively broadcast an event to all children instances.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$broadcast = function (event) {
		  // if no child has registered for this event,
		  // then there's no need to broadcast.
		  if (!this._eventsCount[event]) return
		  var children = this._children
		  for (var i = 0, l = children.length; i < l; i++) {
		    var child = children[i]
		    child.$emit.apply(child, arguments)
		    if (!child._eventCancelled) {
		      child.$broadcast.apply(child, arguments)
		    }
		  }
		  return this
		}

		/**
		 * Recursively propagate an event up the parent chain.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$dispatch = function () {
		  var parent = this.$parent
		  while (parent) {
		    parent.$emit.apply(parent, arguments)
		    parent = parent._eventCancelled
		      ? null
		      : parent.$parent
		  }
		  return this
		}

		/**
		 * Modify the listener counts on all parents.
		 * This bookkeeping allows $broadcast to return early when
		 * no child has listened to a certain event.
		 *
		 * @param {Vue} vm
		 * @param {String} event
		 * @param {Number} count
		 */

		var hookRE = /^hook:/
		function modifyListenerCount (vm, event, count) {
		  var parent = vm.$parent
		  // hooks do not get broadcasted so no need
		  // to do bookkeeping for them
		  if (!parent || !count || hookRE.test(event)) return
		  while (parent) {
		    parent._eventsCount[event] =
		      (parent._eventsCount[event] || 0) + count
		    parent = parent.$parent
		  }
		}

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		/**
		 * Create a child instance that prototypally inehrits
		 * data on parent. To achieve that we create an intermediate
		 * constructor with its prototype pointing to parent.
		 *
		 * @param {Object} opts
		 * @param {Function} [BaseCtor]
		 * @return {Vue}
		 * @public
		 */

		exports.$addChild = function (opts, BaseCtor) {
		  BaseCtor = BaseCtor || _.Vue
		  opts = opts || {}
		  var parent = this
		  var ChildVue
		  var inherit = opts.inherit !== undefined
		    ? opts.inherit
		    : BaseCtor.options.inherit
		  if (inherit) {
		    var ctors = parent._childCtors
		    ChildVue = ctors[BaseCtor.cid]
		    if (!ChildVue) {
		      var optionName = BaseCtor.options.name
		      var className = optionName
		        ? _.classify(optionName)
		        : 'VueComponent'
		      ChildVue = new Function(
		        'return function ' + className + ' (options) {' +
		        'this.constructor = ' + className + ';' +
		        'this._init(options) }'
		      )()
		      ChildVue.options = BaseCtor.options
		      ChildVue.prototype = this
		      ctors[BaseCtor.cid] = ChildVue
		    }
		  } else {
		    ChildVue = BaseCtor
		  }
		  opts._parent = parent
		  opts._root = parent.$root
		  var child = new ChildVue(opts)
		  this._children.push(child)
		  return child
		}

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var compile = __webpack_require__(16)

		/**
		 * Set instance target element and kick off the compilation
		 * process. The passed in `el` can be a selector string, an
		 * existing Element, or a DocumentFragment (for block
		 * instances).
		 *
		 * @param {Element|DocumentFragment|string} el
		 * @public
		 */

		exports.$mount = function (el) {
		  if (this._isCompiled) {
		    _.warn('$mount() should be called only once.')
		    return
		  }
		  if (!el) {
		    el = document.createElement('div')
		  } else if (typeof el === 'string') {
		    var selector = el
		    el = document.querySelector(el)
		    if (!el) {
		      _.warn('Cannot find element: ' + selector)
		      return
		    }
		  }
		  this._compile(el)
		  this._isCompiled = true
		  this._callHook('compiled')
		  if (_.inDoc(this.$el)) {
		    this._callHook('attached')
		    this._initDOMHooks()
		    ready.call(this)
		  } else {
		    this._initDOMHooks()
		    this.$once('hook:attached', ready)
		  }
		  return this
		}

		/**
		 * Mark an instance as ready.
		 */

		function ready () {
		  this._isAttached = true
		  this._isReady = true
		  this._callHook('ready')
		}

		/**
		 * Teardown the instance, simply delegate to the internal
		 * _destroy.
		 */

		exports.$destroy = function (remove, deferCleanup) {
		  this._destroy(remove, deferCleanup)
		}

		/**
		 * Partially compile a piece of DOM and return a
		 * decompile function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @return {Function}
		 */

		exports.$compile = function (el) {
		  return compile(el, this.$options, true)(this, el)
		}

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var lang   = __webpack_require__(26)
		var extend = lang.extend

		extend(exports, lang)
		extend(exports, __webpack_require__(27))
		extend(exports, __webpack_require__(28))
		extend(exports, __webpack_require__(29))
		extend(exports, __webpack_require__(30))

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		// manipulation directives
		exports.text       = __webpack_require__(31)
		exports.html       = __webpack_require__(32)
		exports.attr       = __webpack_require__(33)
		exports.show       = __webpack_require__(34)
		exports['class']   = __webpack_require__(35)
		exports.el         = __webpack_require__(36)
		exports.ref        = __webpack_require__(37)
		exports.cloak      = __webpack_require__(38)
		exports.style      = __webpack_require__(39)
		exports.partial    = __webpack_require__(40)
		exports.transition = __webpack_require__(41)

		// event listener directives
		exports.on         = __webpack_require__(42)
		exports.model      = __webpack_require__(51)

		// child vm directives
		exports.component  = __webpack_require__(43)
		exports.repeat     = __webpack_require__(44)
		exports['if']      = __webpack_require__(45)

		// child vm communication directives
		exports['with']    = __webpack_require__(46)
		exports.events     = __webpack_require__(47)

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		/**
		 * Stringify value.
		 *
		 * @param {Number} indent
		 */

		exports.json = {
		  read: function (value, indent) {
		    return typeof value === 'string'
		      ? value
		      : JSON.stringify(value, null, Number(indent) || 2)
		  },
		  write: function (value) {
		    try {
		      return JSON.parse(value)
		    } catch (e) {
		      return value
		    }
		  }
		}

		/**
		 * 'abc' => 'Abc'
		 */

		exports.capitalize = function (value) {
		  if (!value && value !== 0) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		}

		/**
		 * 'abc' => 'ABC'
		 */

		exports.uppercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toUpperCase()
		    : ''
		}

		/**
		 * 'AbC' => 'abc'
		 */

		exports.lowercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toLowerCase()
		    : ''
		}

		/**
		 * 12345 => $12,345.00
		 *
		 * @param {String} sign
		 */

		var digitsRE = /(\d{3})(?=\d)/g

		exports.currency = function (value, sign) {
		  value = parseFloat(value)
		  if (!isFinite(value) || (!value && value !== 0)) return ''
		  sign = sign || '$'
		  var s = Math.floor(Math.abs(value)).toString(),
		    i = s.length % 3,
		    h = i > 0
		      ? (s.slice(0, i) + (s.length > 3 ? ',' : ''))
		      : '',
		    v = Math.abs(parseInt((value * 100) % 100, 10)),
		    f = '.' + (v < 10 ? ('0' + v) : v)
		  return (value < 0 ? '-' : '') +
		    sign + h + s.slice(i).replace(digitsRE, '$1,') + f
		}

		/**
		 * 'item' => 'items'
		 *
		 * @params
		 *  an array of strings corresponding to
		 *  the single, double, triple ... forms of the word to
		 *  be pluralized. When the number to be pluralized
		 *  exceeds the length of the args, it will use the last
		 *  entry in the array.
		 *
		 *  e.g. ['single', 'double', 'triple', 'multiple']
		 */

		exports.pluralize = function (value) {
		  var args = _.toArray(arguments, 1)
		  return args.length > 1
		    ? (args[value % 10 - 1] || args[args.length - 1])
		    : (args[0] + (value === 1 ? '' : 's'))
		}

		/**
		 * A special filter that takes a handler function,
		 * wraps it so it only gets triggered on specific
		 * keypresses. v-on only.
		 *
		 * @param {String} key
		 */

		var keyCodes = {
		  enter    : 13,
		  tab      : 9,
		  'delete' : 46,
		  up       : 38,
		  left     : 37,
		  right    : 39,
		  down     : 40,
		  esc      : 27
		}

		exports.key = function (handler, key) {
		  if (!handler) return
		  var code = keyCodes[key]
		  if (!code) {
		    code = parseInt(key, 10)
		  }
		  return function (e) {
		    if (e.keyCode === code) {
		      return handler.call(this, e)
		    }
		  }
		}

		// expose keycode hash
		exports.key.keyCodes = keyCodes

		/**
		 * Install special array filters
		 */

		_.extend(exports, __webpack_require__(48))


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var extend = _.extend

		/**
		 * Option overwriting strategies are functions that handle
		 * how to merge a parent option value and a child option
		 * value into the final value.
		 *
		 * All strategy functions follow the same signature:
		 *
		 * @param {*} parentVal
		 * @param {*} childVal
		 * @param {Vue} [vm]
		 */

		var strats = Object.create(null)

		/**
		 * Helper that recursively merges two data objects together.
		 */

		function mergeData (to, from) {
		  var key, toVal, fromVal
		  for (key in from) {
		    toVal = to[key]
		    fromVal = from[key]
		    if (!to.hasOwnProperty(key)) {
		      to.$add(key, fromVal)
		    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
		      mergeData(toVal, fromVal)
		    }
		  }
		  return to
		}

		/**
		 * Data
		 */

		strats.data = function (parentVal, childVal, vm) {
		  if (!vm) {
		    // in a Vue.extend merge, both should be functions
		    if (!childVal) {
		      return parentVal
		    }
		    if (typeof childVal !== 'function') {
		      _.warn(
		        'The "data" option should be a function ' +
		        'that returns a per-instance value in component ' +
		        'definitions.'
		      )
		      return parentVal
		    }
		    if (!parentVal) {
		      return childVal
		    }
		    // when parentVal & childVal are both present,
		    // we need to return a function that returns the
		    // merged result of both functions... no need to
		    // check if parentVal is a function here because
		    // it has to be a function to pass previous merges.
		    return function mergedDataFn () {
		      return mergeData(
		        childVal.call(this),
		        parentVal.call(this)
		      )
		    }
		  } else {
		    // instance merge, return raw object
		    var instanceData = typeof childVal === 'function'
		      ? childVal.call(vm)
		      : childVal
		    var defaultData = typeof parentVal === 'function'
		      ? parentVal.call(vm)
		      : undefined
		    if (instanceData) {
		      return mergeData(instanceData, defaultData)
		    } else {
		      return defaultData
		    }
		  }
		}

		/**
		 * El
		 */

		strats.el = function (parentVal, childVal, vm) {
		  if (!vm && childVal && typeof childVal !== 'function') {
		    _.warn(
		      'The "el" option should be a function ' +
		      'that returns a per-instance value in component ' +
		      'definitions.'
		    )
		    return
		  }
		  var ret = childVal || parentVal
		  // invoke the element factory if this is instance merge
		  return vm && typeof ret === 'function'
		    ? ret.call(vm)
		    : ret
		}

		/**
		 * Hooks and param attributes are merged as arrays.
		 */

		strats.created =
		strats.ready =
		strats.attached =
		strats.detached =
		strats.beforeCompile =
		strats.compiled =
		strats.beforeDestroy =
		strats.destroyed =
		strats.paramAttributes = function (parentVal, childVal) {
		  return childVal
		    ? parentVal
		      ? parentVal.concat(childVal)
		      : _.isArray(childVal)
		        ? childVal
		        : [childVal]
		    : parentVal
		}

		/**
		 * Assets
		 *
		 * When a vm is present (instance creation), we need to do
		 * a three-way merge between constructor options, instance
		 * options and parent options.
		 */

		strats.directives =
		strats.filters =
		strats.partials =
		strats.transitions =
		strats.components = function (parentVal, childVal, vm, key) {
		  var ret = Object.create(
		    vm && vm.$parent
		      ? vm.$parent.$options[key]
		      : _.Vue.options[key]
		  )
		  if (parentVal) {
		    var keys = Object.keys(parentVal)
		    var i = keys.length
		    var field
		    while (i--) {
		      field = keys[i]
		      ret[field] = parentVal[field]
		    }
		  }
		  if (childVal) extend(ret, childVal)
		  return ret
		}

		/**
		 * Events & Watchers.
		 *
		 * Events & watchers hashes should not overwrite one
		 * another, so we merge them as arrays.
		 */

		strats.watch =
		strats.events = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = {}
		  extend(ret, parentVal)
		  for (var key in childVal) {
		    var parent = ret[key]
		    var child = childVal[key]
		    if (parent && !_.isArray(parent)) {
		      parent = [parent]
		    }
		    ret[key] = parent
		      ? parent.concat(child)
		      : [child]
		  }
		  return ret
		}

		/**
		 * Other object hashes.
		 */

		strats.methods =
		strats.computed = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = Object.create(parentVal)
		  extend(ret, childVal)
		  return ret
		}

		/**
		 * Default strategy.
		 */

		var defaultStrat = function (parentVal, childVal) {
		  return childVal === undefined
		    ? parentVal
		    : childVal
		}

		/**
		 * Make sure component options get converted to actual
		 * constructors.
		 *
		 * @param {Object} components
		 */

		function guardComponents (components) {
		  if (components) {
		    var def
		    for (var key in components) {
		      def = components[key]
		      if (_.isPlainObject(def)) {
		        def.name = key
		        components[key] = _.Vue.extend(def)
		      }
		    }
		  }
		}

		/**
		 * Merge two option objects into a new one.
		 * Core utility used in both instantiation and inheritance.
		 *
		 * @param {Object} parent
		 * @param {Object} child
		 * @param {Vue} [vm] - if vm is present, indicates this is
		 *                     an instantiation merge.
		 */

		module.exports = function mergeOptions (parent, child, vm) {
		  guardComponents(child.components)
		  var options = {}
		  var key
		  if (child.mixins) {
		    for (var i = 0, l = child.mixins.length; i < l; i++) {
		      parent = mergeOptions(parent, child.mixins[i], vm)
		    }
		  }
		  for (key in parent) {
		    merge(key)
		  }
		  for (key in child) {
		    if (!(parent.hasOwnProperty(key))) {
		      merge(key)
		    }
		  }
		  function merge (key) {
		    var strat = strats[key] || defaultStrat
		    options[key] = strat(parent[key], child[key], vm, key)
		  }
		  return options
		}

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {

		  /**
		   * The prefix to look for when parsing directives.
		   *
		   * @type {String}
		   */

		  prefix: 'v-',

		  /**
		   * Whether to print debug messages.
		   * Also enables stack trace for warnings.
		   *
		   * @type {Boolean}
		   */

		  debug: false,

		  /**
		   * Whether to suppress warnings.
		   *
		   * @type {Boolean}
		   */

		  silent: false,

		  /**
		   * Whether allow observer to alter data objects'
		   * __proto__.
		   *
		   * @type {Boolean}
		   */

		  proto: true,

		  /**
		   * Whether to parse mustache tags in templates.
		   *
		   * @type {Boolean}
		   */

		  interpolate: true,

		  /**
		   * Whether to use async rendering.
		   */

		  async: true,

		  /**
		   * Whether to warn against errors caught when evaluating
		   * expressions.
		   */

		  warnExpressionErrors: true,

		  /**
		   * Internal flag to indicate the delimiters have been
		   * changed.
		   *
		   * @type {Boolean}
		   */

		  _delimitersChanged: true

		}

		/**
		 * Interpolation delimiters.
		 * We need to mark the changed flag so that the text parser
		 * knows it needs to recompile the regex.
		 *
		 * @type {Array<String>}
		 */

		var delimiters = ['{{', '}}']
		Object.defineProperty(module.exports, 'delimiters', {
		  get: function () {
		    return delimiters
		  },
		  set: function (val) {
		    delimiters = val
		    this._delimitersChanged = true
		  }
		})

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var config = __webpack_require__(15)
		var textParser = __webpack_require__(19)
		var dirParser = __webpack_require__(21)
		var templateParser = __webpack_require__(20)

		/**
		 * Compile a template and return a reusable composite link
		 * function, which recursively contains more link functions
		 * inside. This top level compile function should only be
		 * called on instance root nodes.
		 *
		 * When the `asParent` flag is true, this means we are doing
		 * a partial compile for a component's parent scope markup
		 * (See #502). This could **only** be triggered during
		 * compilation of `v-component`, and we need to skip v-with,
		 * v-ref & v-component in this situation.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Object} options
		 * @param {Boolean} partial
		 * @param {Boolean} asParent - compiling a component
		 *                             container as its parent.
		 * @return {Function}
		 */

		module.exports = function compile (el, options, partial, asParent) {
		  var isBlock = el.nodeType === 11
		  var params = !partial && options.paramAttributes
		  // if el is a fragment, this is a block instance
		  // and paramAttributes will be stored on the first
		  // element in the template. (excluding the _blockStart
		  // comment node)
		  var paramsEl = isBlock ? el.childNodes[1] : el
		  var paramsLinkFn = params
		    ? compileParamAttributes(paramsEl, params, options)
		    : null
		  var nodeLinkFn = isBlock
		    ? null
		    : compileNode(el, options, asParent)
		  var childLinkFn =
		    !(nodeLinkFn && nodeLinkFn.terminal) &&
		    el.tagName !== 'SCRIPT' &&
		    el.hasChildNodes()
		      ? compileNodeList(el.childNodes, options)
		      : null

		  /**
		   * A linker function to be called on a already compiled
		   * piece of DOM, which instantiates all directive
		   * instances.
		   *
		   * @param {Vue} vm
		   * @param {Element|DocumentFragment} el
		   * @return {Function|undefined}
		   */

		  return function link (vm, el) {
		    var originalDirCount = vm._directives.length
		    if (paramsLinkFn) {
		      var paramsEl = isBlock ? el.childNodes[1] : el
		      paramsLinkFn(vm, paramsEl)
		    }
		    // cache childNodes before linking parent, fix #657
		    var childNodes = _.toArray(el.childNodes)
		    if (nodeLinkFn) nodeLinkFn(vm, el)
		    if (childLinkFn) childLinkFn(vm, childNodes)

		    /**
		     * If this is a partial compile, the linker function
		     * returns an unlink function that tearsdown all
		     * directives instances generated during the partial
		     * linking.
		     */

		    if (partial) {
		      var dirs = vm._directives.slice(originalDirCount)
		      return function unlink () {
		        var i = dirs.length
		        while (i--) {
		          dirs[i]._teardown()
		        }
		        i = vm._directives.indexOf(dirs[0])
		        vm._directives.splice(i, dirs.length)
		      }
		    }
		  }
		}

		/**
		 * Compile a node and return a nodeLinkFn based on the
		 * node type.
		 *
		 * @param {Node} node
		 * @param {Object} options
		 * @param {Boolean} asParent
		 * @return {Function|undefined}
		 */

		function compileNode (node, options, asParent) {
		  var type = node.nodeType
		  if (type === 1 && node.tagName !== 'SCRIPT') {
		    return compileElement(node, options, asParent)
		  } else if (type === 3 && config.interpolate) {
		    return compileTextNode(node, options)
		  }
		}

		/**
		 * Compile an element and return a nodeLinkFn.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} asParent
		 * @return {Function|null}
		 */

		function compileElement (el, options, asParent) {
		  var linkFn, tag, component
		  // check custom element component, but only on non-root
		  if (!asParent && !el.__vue__) {
		    tag = el.tagName.toLowerCase()
		    component =
		      tag.indexOf('-') > 0 &&
		      options.components[tag]
		    if (component) {
		      el.setAttribute(config.prefix + 'component', tag)
		    }
		  }
		  if (component || el.hasAttributes()) {
		    // check terminal direcitves
		    if (!asParent) {
		      linkFn = checkTerminalDirectives(el, options)
		    }
		    // if not terminal, build normal link function
		    if (!linkFn) {
		      var dirs = collectDirectives(el, options, asParent)
		      linkFn = dirs.length
		        ? makeDirectivesLinkFn(dirs)
		        : null
		    }
		  }
		  // if the element is a textarea, we need to interpolate
		  // its content on initial render.
		  if (el.tagName === 'TEXTAREA') {
		    var realLinkFn = linkFn
		    linkFn = function (vm, el) {
		      el.value = vm.$interpolate(el.value)
		      if (realLinkFn) realLinkFn(vm, el)
		    }
		    linkFn.terminal = true
		  }
		  return linkFn
		}

		/**
		 * Build a multi-directive link function.
		 *
		 * @param {Array} directives
		 * @return {Function} directivesLinkFn
		 */

		function makeDirectivesLinkFn (directives) {
		  return function directivesLinkFn (vm, el) {
		    // reverse apply because it's sorted low to high
		    var i = directives.length
		    var dir, j, k
		    while (i--) {
		      dir = directives[i]
		      if (dir._link) {
		        // custom link fn
		        dir._link(vm, el)
		      } else {
		        k = dir.descriptors.length
		        for (j = 0; j < k; j++) {
		          vm._bindDir(dir.name, el,
		                      dir.descriptors[j], dir.def)
		        }
		      }
		    }
		  }
		}

		/**
		 * Compile a textNode and return a nodeLinkFn.
		 *
		 * @param {TextNode} node
		 * @param {Object} options
		 * @return {Function|null} textNodeLinkFn
		 */

		function compileTextNode (node, options) {
		  var tokens = textParser.parse(node.nodeValue)
		  if (!tokens) {
		    return null
		  }
		  var frag = document.createDocumentFragment()
		  var el, token
		  for (var i = 0, l = tokens.length; i < l; i++) {
		    token = tokens[i]
		    el = token.tag
		      ? processTextToken(token, options)
		      : document.createTextNode(token.value)
		    frag.appendChild(el)
		  }
		  return makeTextNodeLinkFn(tokens, frag, options)
		}

		/**
		 * Process a single text token.
		 *
		 * @param {Object} token
		 * @param {Object} options
		 * @return {Node}
		 */

		function processTextToken (token, options) {
		  var el
		  if (token.oneTime) {
		    el = document.createTextNode(token.value)
		  } else {
		    if (token.html) {
		      el = document.createComment('v-html')
		      setTokenType('html')
		    } else if (token.partial) {
		      el = document.createComment('v-partial')
		      setTokenType('partial')
		    } else {
		      // IE will clean up empty textNodes during
		      // frag.cloneNode(true), so we have to give it
		      // something here...
		      el = document.createTextNode(' ')
		      setTokenType('text')
		    }
		  }
		  function setTokenType (type) {
		    token.type = type
		    token.def = options.directives[type]
		    token.descriptor = dirParser.parse(token.value)[0]
		  }
		  return el
		}

		/**
		 * Build a function that processes a textNode.
		 *
		 * @param {Array<Object>} tokens
		 * @param {DocumentFragment} frag
		 */

		function makeTextNodeLinkFn (tokens, frag) {
		  return function textNodeLinkFn (vm, el) {
		    var fragClone = frag.cloneNode(true)
		    var childNodes = _.toArray(fragClone.childNodes)
		    var token, value, node
		    for (var i = 0, l = tokens.length; i < l; i++) {
		      token = tokens[i]
		      value = token.value
		      if (token.tag) {
		        node = childNodes[i]
		        if (token.oneTime) {
		          value = vm.$eval(value)
		          if (token.html) {
		            _.replace(node, templateParser.parse(value, true))
		          } else {
		            node.nodeValue = value
		          }
		        } else {
		          vm._bindDir(token.type, node,
		                      token.descriptor, token.def)
		        }
		      }
		    }
		    _.replace(el, fragClone)
		  }
		}

		/**
		 * Compile a node list and return a childLinkFn.
		 *
		 * @param {NodeList} nodeList
		 * @param {Object} options
		 * @return {Function|undefined}
		 */

		function compileNodeList (nodeList, options) {
		  var linkFns = []
		  var nodeLinkFn, childLinkFn, node
		  for (var i = 0, l = nodeList.length; i < l; i++) {
		    node = nodeList[i]
		    nodeLinkFn = compileNode(node, options)
		    childLinkFn =
		      !(nodeLinkFn && nodeLinkFn.terminal) &&
		      node.tagName !== 'SCRIPT' &&
		      node.hasChildNodes()
		        ? compileNodeList(node.childNodes, options)
		        : null
		    linkFns.push(nodeLinkFn, childLinkFn)
		  }
		  return linkFns.length
		    ? makeChildLinkFn(linkFns)
		    : null
		}

		/**
		 * Make a child link function for a node's childNodes.
		 *
		 * @param {Array<Function>} linkFns
		 * @return {Function} childLinkFn
		 */

		function makeChildLinkFn (linkFns) {
		  return function childLinkFn (vm, nodes) {
		    var node, nodeLinkFn, childrenLinkFn
		    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
		      node = nodes[n]
		      nodeLinkFn = linkFns[i++]
		      childrenLinkFn = linkFns[i++]
		      // cache childNodes before linking parent, fix #657
		      var childNodes = _.toArray(node.childNodes)
		      if (nodeLinkFn) {
		        nodeLinkFn(vm, node)
		      }
		      if (childrenLinkFn) {
		        childrenLinkFn(vm, childNodes)
		      }
		    }
		  }
		}

		/**
		 * Compile param attributes on a root element and return
		 * a paramAttributes link function.
		 *
		 * @param {Element} el
		 * @param {Array} attrs
		 * @param {Object} options
		 * @return {Function} paramsLinkFn
		 */

		function compileParamAttributes (el, attrs, options) {
		  var params = []
		  var i = attrs.length
		  var name, value, param
		  while (i--) {
		    name = attrs[i]
		    if (/[A-Z]/.test(name)) {
		      _.warn(
		        'You seem to be using camelCase for a paramAttribute, ' +
		        'but HTML doesn\'t differentiate between upper and ' +
		        'lower case. You should use hyphen-delimited ' +
		        'attribute names. For more info see ' +
		        'http://vuejs.org/api/options.html#paramAttributes'
		      )
		    }
		    value = el.getAttribute(name)
		    if (value !== null) {
		      param = {
		        name: name,
		        value: value
		      }
		      var tokens = textParser.parse(value)
		      if (tokens) {
		        el.removeAttribute(name)
		        if (tokens.length > 1) {
		          _.warn(
		            'Invalid param attribute binding: "' +
		            name + '="' + value + '"' +
		            '\nDon\'t mix binding tags with plain text ' +
		            'in param attribute bindings.'
		          )
		          continue
		        } else {
		          param.dynamic = true
		          param.value = tokens[0].value
		        }
		      }
		      params.push(param)
		    }
		  }
		  return makeParamsLinkFn(params, options)
		}

		/**
		 * Build a function that applies param attributes to a vm.
		 *
		 * @param {Array} params
		 * @param {Object} options
		 * @return {Function} paramsLinkFn
		 */

		var dataAttrRE = /^data-/

		function makeParamsLinkFn (params, options) {
		  var def = options.directives['with']
		  return function paramsLinkFn (vm, el) {
		    var i = params.length
		    var param, path
		    while (i--) {
		      param = params[i]
		      // params could contain dashes, which will be
		      // interpreted as minus calculations by the parser
		      // so we need to wrap the path here
		      path = _.camelize(param.name.replace(dataAttrRE, ''))
		      if (param.dynamic) {
		        // dynamic param attribtues are bound as v-with.
		        // we can directly duck the descriptor here beacuse
		        // param attributes cannot use expressions or
		        // filters.
		        vm._bindDir('with', el, {
		          arg: path,
		          expression: param.value
		        }, def)
		      } else {
		        // just set once
		        vm.$set(path, param.value)
		      }
		    }
		  }
		}

		/**
		 * Check an element for terminal directives in fixed order.
		 * If it finds one, return a terminal link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function} terminalLinkFn
		 */

		var terminalDirectives = [
		  'repeat',
		  'if',
		  'component'
		]

		function skip () {}
		skip.terminal = true

		function checkTerminalDirectives (el, options) {
		  if (_.attr(el, 'pre') !== null) {
		    return skip
		  }
		  var value, dirName
		  /* jshint boss: true */
		  for (var i = 0; i < 3; i++) {
		    dirName = terminalDirectives[i]
		    if (value = _.attr(el, dirName)) {
		      return makeTeriminalLinkFn(el, dirName, value, options)
		    }
		  }
		}

		/**
		 * Build a link function for a terminal directive.
		 *
		 * @param {Element} el
		 * @param {String} dirName
		 * @param {String} value
		 * @param {Object} options
		 * @return {Function} terminalLinkFn
		 */

		function makeTeriminalLinkFn (el, dirName, value, options) {
		  var descriptor = dirParser.parse(value)[0]
		  var def = options.directives[dirName]
		  var terminalLinkFn = function (vm, el) {
		    vm._bindDir(dirName, el, descriptor, def)
		  }
		  terminalLinkFn.terminal = true
		  return terminalLinkFn
		}

		/**
		 * Collect the directives on an element.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} asParent
		 * @return {Array}
		 */

		function collectDirectives (el, options, asParent) {
		  var attrs = _.toArray(el.attributes)
		  var i = attrs.length
		  var dirs = []
		  var attr, attrName, dir, dirName, dirDef
		  while (i--) {
		    attr = attrs[i]
		    attrName = attr.name
		    if (attrName.indexOf(config.prefix) === 0) {
		      dirName = attrName.slice(config.prefix.length)
		      if (asParent &&
		          (dirName === 'with' ||
		           dirName === 'component')) {
		        continue
		      }
		      dirDef = options.directives[dirName]
		      _.assertAsset(dirDef, 'directive', dirName)
		      if (dirDef) {
		        dirs.push({
		          name: dirName,
		          descriptors: dirParser.parse(attr.value),
		          def: dirDef
		        })
		      }
		    } else if (config.interpolate) {
		      dir = collectAttrDirective(el, attrName, attr.value,
		                                 options)
		      if (dir) {
		        dirs.push(dir)
		      }
		    }
		  }
		  // sort by priority, LOW to HIGH
		  dirs.sort(directiveComparator)
		  return dirs
		}

		/**
		 * Check an attribute for potential dynamic bindings,
		 * and return a directive object.
		 *
		 * @param {Element} el
		 * @param {String} name
		 * @param {String} value
		 * @param {Object} options
		 * @return {Object}
		 */

		function collectAttrDirective (el, name, value, options) {
		  if (options._skipAttrs &&
		      options._skipAttrs.indexOf(name) > -1) {
		    return
		  }
		  var tokens = textParser.parse(value)
		  if (tokens) {
		    var def = options.directives.attr
		    var i = tokens.length
		    var allOneTime = true
		    while (i--) {
		      var token = tokens[i]
		      if (token.tag && !token.oneTime) {
		        allOneTime = false
		      }
		    }
		    return {
		      def: def,
		      _link: allOneTime
		        ? function (vm, el) {
		            el.setAttribute(name, vm.$interpolate(value))
		          }
		        : function (vm, el) {
		            var value = textParser.tokensToExp(tokens, vm)
		            var desc = dirParser.parse(name + ':' + value)[0]
		            vm._bindDir('attr', el, desc, def)
		          }
		    }
		  }
		}

		/**
		 * Directive priority sort comparator
		 *
		 * @param {Object} a
		 * @param {Object} b
		 */

		function directiveComparator (a, b) {
		  a = a.def.priority || 0
		  b = b.def.priority || 0
		  return a > b ? 1 : -1
		}

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var templateParser = __webpack_require__(20)

		/**
		 * Process an element or a DocumentFragment based on a
		 * instance option object. This allows us to transclude
		 * a template node/fragment before the instance is created,
		 * so the processed fragment can then be cloned and reused
		 * in v-repeat.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		module.exports = function transclude (el, options) {
		  // for template tags, what we want is its content as
		  // a documentFragment (for block instances)
		  if (el.tagName === 'TEMPLATE') {
		    el = templateParser.parse(el)
		  }
		  if (options && options.template) {
		    el = transcludeTemplate(el, options)
		  }
		  if (el instanceof DocumentFragment) {
		    _.prepend(document.createComment('v-start'), el)
		    el.appendChild(document.createComment('v-end'))
		  }
		  return el
		}

		/**
		 * Process the template option.
		 * If the replace option is true this will swap the $el.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		function transcludeTemplate (el, options) {
		  var template = options.template
		  var frag = templateParser.parse(template, true)
		  if (!frag) {
		    _.warn('Invalid template option: ' + template)
		  } else {
		    var rawContent = options._content || _.extractContent(el)
		    if (options.replace) {
		      if (frag.childNodes.length > 1) {
		        transcludeContent(frag, rawContent)
		        _.copyAttributes(el, frag.firstChild)
		        return frag
		      } else {
		        var replacer = frag.firstChild
		        _.copyAttributes(el, replacer)
		        transcludeContent(replacer, rawContent)
		        return replacer
		      }
		    } else {
		      el.appendChild(frag)
		      transcludeContent(el, rawContent)
		      return el
		    }
		  }
		}

		/**
		 * Resolve <content> insertion points mimicking the behavior
		 * of the Shadow DOM spec:
		 *
		 *   http://w3c.github.io/webcomponents/spec/shadow/#insertion-points
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Element} raw
		 */

		function transcludeContent (el, raw) {
		  var outlets = getOutlets(el)
		  var i = outlets.length
		  if (!i) return
		  var outlet, select, selected, j, main

		  function isDirectChild (node) {
		    return node.parentNode === raw
		  }

		  // first pass, collect corresponding content
		  // for each outlet.
		  while (i--) {
		    outlet = outlets[i]
		    if (raw) {
		      select = outlet.getAttribute('select')
		      if (select) {  // select content
		        selected = raw.querySelectorAll(select)
		        if (selected.length) {
		          // according to Shadow DOM spec, `select` can
		          // only select direct children of the host node.
		          // enforcing this also fixes #786.
		          selected = [].filter.call(selected, isDirectChild)
		        }
		        outlet.content = selected.length
		          ? selected
		          : _.toArray(outlet.childNodes)
		      } else { // default content
		        main = outlet
		      }
		    } else { // fallback content
		      outlet.content = _.toArray(outlet.childNodes)
		    }
		  }
		  // second pass, actually insert the contents
		  for (i = 0, j = outlets.length; i < j; i++) {
		    outlet = outlets[i]
		    if (outlet !== main) {
		      insertContentAt(outlet, outlet.content)
		    }
		  }
		  // finally insert the main content
		  if (main) {
		    insertContentAt(main, _.toArray(raw.childNodes))
		  }
		}

		/**
		 * Get <content> outlets from the element/list
		 *
		 * @param {Element|Array} el
		 * @return {Array}
		 */

		var concat = [].concat
		function getOutlets (el) {
		  return _.isArray(el)
		    ? concat.apply([], el.map(getOutlets))
		    : el.querySelectorAll
		      ? _.toArray(el.querySelectorAll('content'))
		      : []
		}

		/**
		 * Insert an array of nodes at outlet,
		 * then remove the outlet.
		 *
		 * @param {Element} outlet
		 * @param {Array} contents
		 */

		function insertContentAt (outlet, contents) {
		  // not using util DOM methods here because
		  // parentNode can be cached
		  var parent = outlet.parentNode
		  for (var i = 0, j = contents.length; i < j; i++) {
		    parent.insertBefore(contents[i], outlet)
		  }
		  parent.removeChild(outlet)
		}

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Cache = __webpack_require__(52)
		var pathCache = new Cache(1000)
		var identRE = /^[$_a-zA-Z]+[\w$]*$/

		/**
		 * Path-parsing algorithm scooped from Polymer/observe-js
		 */

		var pathStateMachine = {
		  'beforePath': {
		    'ws': ['beforePath'],
		    'ident': ['inIdent', 'append'],
		    '[': ['beforeElement'],
		    'eof': ['afterPath']
		  },

		  'inPath': {
		    'ws': ['inPath'],
		    '.': ['beforeIdent'],
		    '[': ['beforeElement'],
		    'eof': ['afterPath']
		  },

		  'beforeIdent': {
		    'ws': ['beforeIdent'],
		    'ident': ['inIdent', 'append']
		  },

		  'inIdent': {
		    'ident': ['inIdent', 'append'],
		    '0': ['inIdent', 'append'],
		    'number': ['inIdent', 'append'],
		    'ws': ['inPath', 'push'],
		    '.': ['beforeIdent', 'push'],
		    '[': ['beforeElement', 'push'],
		    'eof': ['afterPath', 'push']
		  },

		  'beforeElement': {
		    'ws': ['beforeElement'],
		    '0': ['afterZero', 'append'],
		    'number': ['inIndex', 'append'],
		    "'": ['inSingleQuote', 'append', ''],
		    '"': ['inDoubleQuote', 'append', '']
		  },

		  'afterZero': {
		    'ws': ['afterElement', 'push'],
		    ']': ['inPath', 'push']
		  },

		  'inIndex': {
		    '0': ['inIndex', 'append'],
		    'number': ['inIndex', 'append'],
		    'ws': ['afterElement'],
		    ']': ['inPath', 'push']
		  },

		  'inSingleQuote': {
		    "'": ['afterElement'],
		    'eof': 'error',
		    'else': ['inSingleQuote', 'append']
		  },

		  'inDoubleQuote': {
		    '"': ['afterElement'],
		    'eof': 'error',
		    'else': ['inDoubleQuote', 'append']
		  },

		  'afterElement': {
		    'ws': ['afterElement'],
		    ']': ['inPath', 'push']
		  }
		}

		function noop () {}

		/**
		 * Determine the type of a character in a keypath.
		 *
		 * @param {Char} char
		 * @return {String} type
		 */

		function getPathCharType (char) {
		  if (char === undefined) {
		    return 'eof'
		  }

		  var code = char.charCodeAt(0)

		  switch(code) {
		    case 0x5B: // [
		    case 0x5D: // ]
		    case 0x2E: // .
		    case 0x22: // "
		    case 0x27: // '
		    case 0x30: // 0
		      return char

		    case 0x5F: // _
		    case 0x24: // $
		      return 'ident'

		    case 0x20: // Space
		    case 0x09: // Tab
		    case 0x0A: // Newline
		    case 0x0D: // Return
		    case 0xA0:  // No-break space
		    case 0xFEFF:  // Byte Order Mark
		    case 0x2028:  // Line Separator
		    case 0x2029:  // Paragraph Separator
		      return 'ws'
		  }

		  // a-z, A-Z
		  if ((0x61 <= code && code <= 0x7A) ||
		      (0x41 <= code && code <= 0x5A)) {
		    return 'ident'
		  }

		  // 1-9
		  if (0x31 <= code && code <= 0x39) {
		    return 'number'
		  }

		  return 'else'
		}

		/**
		 * Parse a string path into an array of segments
		 * Todo implement cache
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		function parsePath (path) {
		  var keys = []
		  var index = -1
		  var mode = 'beforePath'
		  var c, newChar, key, type, transition, action, typeMap

		  var actions = {
		    push: function() {
		      if (key === undefined) {
		        return
		      }
		      keys.push(key)
		      key = undefined
		    },
		    append: function() {
		      if (key === undefined) {
		        key = newChar
		      } else {
		        key += newChar
		      }
		    }
		  }

		  function maybeUnescapeQuote () {
		    var nextChar = path[index + 1]
		    if ((mode === 'inSingleQuote' && nextChar === "'") ||
		        (mode === 'inDoubleQuote' && nextChar === '"')) {
		      index++
		      newChar = nextChar
		      actions.append()
		      return true
		    }
		  }

		  while (mode) {
		    index++
		    c = path[index]

		    if (c === '\\' && maybeUnescapeQuote()) {
		      continue
		    }

		    type = getPathCharType(c)
		    typeMap = pathStateMachine[mode]
		    transition = typeMap[type] || typeMap['else'] || 'error'

		    if (transition === 'error') {
		      return // parse error
		    }

		    mode = transition[0]
		    action = actions[transition[1]] || noop
		    newChar = transition[2] === undefined
		      ? c
		      : transition[2]
		    action()

		    if (mode === 'afterPath') {
		      return keys
		    }
		  }
		}

		/**
		 * Format a accessor segment based on its type.
		 *
		 * @param {String} key
		 * @return {Boolean}
		 */

		function formatAccessor(key) {
		  if (identRE.test(key)) { // identifier
		    return '.' + key
		  } else if (+key === key >>> 0) { // bracket index
		    return '[' + key + ']'
		  } else { // bracket string
		    return '["' + key.replace(/"/g, '\\"') + '"]'
		  }
		}

		/**
		 * Compiles a getter function with a fixed path.
		 *
		 * @param {Array} path
		 * @return {Function}
		 */

		exports.compileGetter = function (path) {
		  var body = 'return o' + path.map(formatAccessor).join('')
		  return new Function('o', body)
		}

		/**
		 * External parse that check for a cache hit first
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		exports.parse = function (path) {
		  var hit = pathCache.get(path)
		  if (!hit) {
		    hit = parsePath(path)
		    if (hit) {
		      hit.get = exports.compileGetter(hit)
		      pathCache.put(path, hit)
		    }
		  }
		  return hit
		}

		/**
		 * Get from an object from a path string
		 *
		 * @param {Object} obj
		 * @param {String} path
		 */

		exports.get = function (obj, path) {
		  path = exports.parse(path)
		  if (path) {
		    return path.get(obj)
		  }
		}

		/**
		 * Set on an object from a path
		 *
		 * @param {Object} obj
		 * @param {String | Array} path
		 * @param {*} val
		 */

		exports.set = function (obj, path, val) {
		  if (typeof path === 'string') {
		    path = exports.parse(path)
		  }
		  if (!path || !_.isObject(obj)) {
		    return false
		  }
		  var last, key
		  for (var i = 0, l = path.length - 1; i < l; i++) {
		    last = obj
		    key = path[i]
		    obj = obj[key]
		    if (!_.isObject(obj)) {
		      obj = {}
		      last.$add(key, obj)
		    }
		  }
		  key = path[i]
		  if (key in obj) {
		    obj[key] = val
		  } else {
		    obj.$add(key, val)
		  }
		  return true
		}

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(52)
		var config = __webpack_require__(15)
		var dirParser = __webpack_require__(21)
		var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
		var cache, tagRE, htmlRE, firstChar, lastChar

		/**
		 * Escape a string so it can be used in a RegExp
		 * constructor.
		 *
		 * @param {String} str
		 */

		function escapeRegex (str) {
		  return str.replace(regexEscapeRE, '\\$&')
		}

		/**
		 * Compile the interpolation tag regex.
		 *
		 * @return {RegExp}
		 */

		function compileRegex () {
		  config._delimitersChanged = false
		  var open = config.delimiters[0]
		  var close = config.delimiters[1]
		  firstChar = open.charAt(0)
		  lastChar = close.charAt(close.length - 1)
		  var firstCharRE = escapeRegex(firstChar)
		  var lastCharRE = escapeRegex(lastChar)
		  var openRE = escapeRegex(open)
		  var closeRE = escapeRegex(close)
		  tagRE = new RegExp(
		    firstCharRE + '?' + openRE +
		    '(.+?)' +
		    closeRE + lastCharRE + '?',
		    'g'
		  )
		  htmlRE = new RegExp(
		    '^' + firstCharRE + openRE +
		    '.*' +
		    closeRE + lastCharRE + '$'
		  )
		  // reset cache
		  cache = new Cache(1000)
		}

		/**
		 * Parse a template text string into an array of tokens.
		 *
		 * @param {String} text
		 * @return {Array<Object> | null}
		 *               - {String} type
		 *               - {String} value
		 *               - {Boolean} [html]
		 *               - {Boolean} [oneTime]
		 */

		exports.parse = function (text) {
		  if (config._delimitersChanged) {
		    compileRegex()
		  }
		  var hit = cache.get(text)
		  if (hit) {
		    return hit
		  }
		  if (!tagRE.test(text)) {
		    return null
		  }
		  var tokens = []
		  var lastIndex = tagRE.lastIndex = 0
		  var match, index, value, first, oneTime, partial
		  /* jshint boss:true */
		  while (match = tagRE.exec(text)) {
		    index = match.index
		    // push text token
		    if (index > lastIndex) {
		      tokens.push({
		        value: text.slice(lastIndex, index)
		      })
		    }
		    // tag token
		    first = match[1].charCodeAt(0)
		    oneTime = first === 0x2A // *
		    partial = first === 0x3E // >
		    value = (oneTime || partial)
		      ? match[1].slice(1)
		      : match[1]
		    tokens.push({
		      tag: true,
		      value: value.trim(),
		      html: htmlRE.test(match[0]),
		      oneTime: oneTime,
		      partial: partial
		    })
		    lastIndex = index + match[0].length
		  }
		  if (lastIndex < text.length) {
		    tokens.push({
		      value: text.slice(lastIndex)
		    })
		  }
		  cache.put(text, tokens)
		  return tokens
		}

		/**
		 * Format a list of tokens into an expression.
		 * e.g. tokens parsed from 'a {{b}} c' can be serialized
		 * into one single expression as '"a " + b + " c"'.
		 *
		 * @param {Array} tokens
		 * @param {Vue} [vm]
		 * @return {String}
		 */

		exports.tokensToExp = function (tokens, vm) {
		  return tokens.length > 1
		    ? tokens.map(function (token) {
		        return formatToken(token, vm)
		      }).join('+')
		    : formatToken(tokens[0], vm, true)
		}

		/**
		 * Format a single token.
		 *
		 * @param {Object} token
		 * @param {Vue} [vm]
		 * @param {Boolean} single
		 * @return {String}
		 */

		function formatToken (token, vm, single) {
		  return token.tag
		    ? vm && token.oneTime
		      ? '"' + vm.$eval(token.value) + '"'
		      : single
		        ? token.value
		        : inlineFilters(token.value)
		    : '"' + token.value + '"'
		}

		/**
		 * For an attribute with multiple interpolation tags,
		 * e.g. attr="some-{{thing | filter}}", in order to combine
		 * the whole thing into a single watchable expression, we
		 * have to inline those filters. This function does exactly
		 * that. This is a bit hacky but it avoids heavy changes
		 * to directive parser and watcher mechanism.
		 *
		 * @param {String} exp
		 * @return {String}
		 */

		var filterRE = /[^|]\|[^|]/
		function inlineFilters (exp) {
		  if (!filterRE.test(exp)) {
		    return '(' + exp + ')'
		  } else {
		    var dir = dirParser.parse(exp)[0]
		    if (!dir.filters) {
		      return '(' + exp + ')'
		    } else {
		      exp = dir.expression
		      for (var i = 0, l = dir.filters.length; i < l; i++) {
		        var filter = dir.filters[i]
		        var args = filter.args
		          ? ',"' + filter.args.join('","') + '"'
		          : ''
		        filter = 'this.$options.filters["' + filter.name + '"]'
		        exp = '(' + filter + '.read||' + filter + ')' +
		          '.apply(this,[' + exp + args + '])'
		      }
		      return exp
		    }
		  }
		}

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Cache = __webpack_require__(52)
		var templateCache = new Cache(1000)
		var idSelectorCache = new Cache(1000)

		var map = {
		  _default : [0, '', ''],
		  legend   : [1, '<fieldset>', '</fieldset>'],
		  tr       : [2, '<table><tbody>', '</tbody></table>'],
		  col      : [
		    2,
		    '<table><tbody></tbody><colgroup>',
		    '</colgroup></table>'
		  ]
		}

		map.td =
		map.th = [
		  3,
		  '<table><tbody><tr>',
		  '</tr></tbody></table>'
		]

		map.option =
		map.optgroup = [
		  1,
		  '<select multiple="multiple">',
		  '</select>'
		]

		map.thead =
		map.tbody =
		map.colgroup =
		map.caption =
		map.tfoot = [1, '<table>', '</table>']

		map.g =
		map.defs =
		map.symbol =
		map.use =
		map.image =
		map.text =
		map.circle =
		map.ellipse =
		map.line =
		map.path =
		map.polygon =
		map.polyline =
		map.rect = [
		  1,
		  '<svg ' +
		    'xmlns="http://www.w3.org/2000/svg" ' +
		    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
		    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
		    'version="1.1">',
		  '</svg>'
		]

		var tagRE = /<([\w:]+)/
		var entityRE = /&\w+;/

		/**
		 * Convert a string template to a DocumentFragment.
		 * Determines correct wrapping by tag types. Wrapping
		 * strategy found in jQuery & component/domify.
		 *
		 * @param {String} templateString
		 * @return {DocumentFragment}
		 */

		function stringToFragment (templateString) {
		  // try a cache hit first
		  var hit = templateCache.get(templateString)
		  if (hit) {
		    return hit
		  }

		  var frag = document.createDocumentFragment()
		  var tagMatch = templateString.match(tagRE)
		  var entityMatch = entityRE.test(templateString)

		  if (!tagMatch && !entityMatch) {
		    // text only, return a single text node.
		    frag.appendChild(
		      document.createTextNode(templateString)
		    )
		  } else {

		    var tag    = tagMatch && tagMatch[1]
		    var wrap   = map[tag] || map._default
		    var depth  = wrap[0]
		    var prefix = wrap[1]
		    var suffix = wrap[2]
		    var node   = document.createElement('div')

		    node.innerHTML = prefix + templateString.trim() + suffix
		    while (depth--) {
		      node = node.lastChild
		    }

		    var child
		    /* jshint boss:true */
		    while (child = node.firstChild) {
		      frag.appendChild(child)
		    }
		  }

		  templateCache.put(templateString, frag)
		  return frag
		}

		/**
		 * Convert a template node to a DocumentFragment.
		 *
		 * @param {Node} node
		 * @return {DocumentFragment}
		 */

		function nodeToFragment (node) {
		  var tag = node.tagName
		  // if its a template tag and the browser supports it,
		  // its content is already a document fragment.
		  if (
		    tag === 'TEMPLATE' &&
		    node.content instanceof DocumentFragment
		  ) {
		    return node.content
		  }
		  // script template
		  if (tag === 'SCRIPT') {
		    return stringToFragment(node.textContent)
		  }
		  // normal node, clone it to avoid mutating the original
		  var clone = exports.clone(node)
		  var frag = document.createDocumentFragment()
		  var child
		  /* jshint boss:true */
		  while (child = clone.firstChild) {
		    frag.appendChild(child)
		  }
		  return frag
		}

		// Test for the presence of the Safari template cloning bug
		// https://bugs.webkit.org/show_bug.cgi?id=137755
		var hasBrokenTemplate = _.inBrowser
		  ? (function () {
		      var a = document.createElement('div')
		      a.innerHTML = '<template>1</template>'
		      return !a.cloneNode(true).firstChild.innerHTML
		    })()
		  : false

		// Test for IE10/11 textarea placeholder clone bug
		var hasTextareaCloneBug = _.inBrowser
		  ? (function () {
		      var t = document.createElement('textarea')
		      t.placeholder = 't'
		      return t.cloneNode(true).value === 't'
		    })()
		  : false

		/**
		 * 1. Deal with Safari cloning nested <template> bug by
		 *    manually cloning all template instances.
		 * 2. Deal with IE10/11 textarea placeholder bug by setting
		 *    the correct value after cloning.
		 *
		 * @param {Element|DocumentFragment} node
		 * @return {Element|DocumentFragment}
		 */

		exports.clone = function (node) {
		  var res = node.cloneNode(true)
		  var i, original, cloned
		  /* istanbul ignore if */
		  if (hasBrokenTemplate) {
		    original = node.querySelectorAll('template')
		    if (original.length) {
		      cloned = res.querySelectorAll('template')
		      i = cloned.length
		      while (i--) {
		        cloned[i].parentNode.replaceChild(
		          original[i].cloneNode(true),
		          cloned[i]
		        )
		      }
		    }
		  }
		  /* istanbul ignore if */
		  if (hasTextareaCloneBug) {
		    if (node.tagName === 'TEXTAREA') {
		      res.value = node.value
		    } else {
		      original = node.querySelectorAll('textarea')
		      if (original.length) {
		        cloned = res.querySelectorAll('textarea')
		        i = cloned.length
		        while (i--) {
		          cloned[i].value = original[i].value
		        }
		      }
		    }
		  }
		  return res
		}

		/**
		 * Process the template option and normalizes it into a
		 * a DocumentFragment that can be used as a partial or a
		 * instance template.
		 *
		 * @param {*} template
		 *    Possible values include:
		 *    - DocumentFragment object
		 *    - Node object of type Template
		 *    - id selector: '#some-template-id'
		 *    - template string: '<div><span>{{msg}}</span></div>'
		 * @param {Boolean} clone
		 * @param {Boolean} noSelector
		 * @return {DocumentFragment|undefined}
		 */

		exports.parse = function (template, clone, noSelector) {
		  var node, frag

		  // if the template is already a document fragment,
		  // do nothing
		  if (template instanceof DocumentFragment) {
		    return clone
		      ? template.cloneNode(true)
		      : template
		  }

		  if (typeof template === 'string') {
		    // id selector
		    if (!noSelector && template.charAt(0) === '#') {
		      // id selector can be cached too
		      frag = idSelectorCache.get(template)
		      if (!frag) {
		        node = document.getElementById(template.slice(1))
		        if (node) {
		          frag = nodeToFragment(node)
		          // save selector to cache
		          idSelectorCache.put(template, frag)
		        }
		      }
		    } else {
		      // normal string template
		      frag = stringToFragment(template)
		    }
		  } else if (template.nodeType) {
		    // a direct node
		    frag = nodeToFragment(template)
		  }

		  return frag && clone
		    ? exports.clone(frag)
		    : frag
		}

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Cache = __webpack_require__(52)
		var cache = new Cache(1000)
		var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
		var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g

		/**
		 * Parser state
		 */

		var str
		var c, i, l
		var inSingle
		var inDouble
		var curly
		var square
		var paren
		var begin
		var argIndex
		var dirs
		var dir
		var lastFilterIndex
		var arg

		/**
		 * Push a directive object into the result Array
		 */

		function pushDir () {
		  dir.raw = str.slice(begin, i).trim()
		  if (dir.expression === undefined) {
		    dir.expression = str.slice(argIndex, i).trim()
		  } else if (lastFilterIndex !== begin) {
		    pushFilter()
		  }
		  if (i === 0 || dir.expression) {
		    dirs.push(dir)
		  }
		}

		/**
		 * Push a filter to the current directive object
		 */

		function pushFilter () {
		  var exp = str.slice(lastFilterIndex, i).trim()
		  var filter
		  if (exp) {
		    filter = {}
		    var tokens = exp.match(filterTokenRE)
		    filter.name = tokens[0]
		    filter.args = tokens.length > 1 ? tokens.slice(1) : null
		  }
		  if (filter) {
		    (dir.filters = dir.filters || []).push(filter)
		  }
		  lastFilterIndex = i + 1
		}

		/**
		 * Parse a directive string into an Array of AST-like
		 * objects representing directives.
		 *
		 * Example:
		 *
		 * "click: a = a + 1 | uppercase" will yield:
		 * {
		 *   arg: 'click',
		 *   expression: 'a = a + 1',
		 *   filters: [
		 *     { name: 'uppercase', args: null }
		 *   ]
		 * }
		 *
		 * @param {String} str
		 * @return {Array<Object>}
		 */

		exports.parse = function (s) {

		  var hit = cache.get(s)
		  if (hit) {
		    return hit
		  }

		  // reset parser state
		  str = s
		  inSingle = inDouble = false
		  curly = square = paren = begin = argIndex = 0
		  lastFilterIndex = 0
		  dirs = []
		  dir = {}
		  arg = null

		  for (i = 0, l = str.length; i < l; i++) {
		    c = str.charCodeAt(i)
		    if (inSingle) {
		      // check single quote
		      if (c === 0x27) inSingle = !inSingle
		    } else if (inDouble) {
		      // check double quote
		      if (c === 0x22) inDouble = !inDouble
		    } else if (
		      c === 0x2C && // comma
		      !paren && !curly && !square
		    ) {
		      // reached the end of a directive
		      pushDir()
		      // reset & skip the comma
		      dir = {}
		      begin = argIndex = lastFilterIndex = i + 1
		    } else if (
		      c === 0x3A && // colon
		      !dir.expression &&
		      !dir.arg
		    ) {
		      // argument
		      arg = str.slice(begin, i).trim()
		      // test for valid argument here
		      // since we may have caught stuff like first half of
		      // an object literal or a ternary expression.
		      if (argRE.test(arg)) {
		        argIndex = i + 1
		        dir.arg = _.stripQuotes(arg) || arg
		      }
		    } else if (
		      c === 0x7C && // pipe
		      str.charCodeAt(i + 1) !== 0x7C &&
		      str.charCodeAt(i - 1) !== 0x7C
		    ) {
		      if (dir.expression === undefined) {
		        // first filter, end of expression
		        lastFilterIndex = i + 1
		        dir.expression = str.slice(argIndex, i).trim()
		      } else {
		        // already has filter
		        pushFilter()
		      }
		    } else {
		      switch (c) {
		        case 0x22: inDouble = true; break // "
		        case 0x27: inSingle = true; break // '
		        case 0x28: paren++; break         // (
		        case 0x29: paren--; break         // )
		        case 0x5B: square++; break        // [
		        case 0x5D: square--; break        // ]
		        case 0x7B: curly++; break         // {
		        case 0x7D: curly--; break         // }
		      }
		    }
		  }

		  if (i === 0 || begin !== i) {
		    pushDir()
		  }

		  cache.put(s, dirs)
		  return dirs
		}

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Path = __webpack_require__(18)
		var Cache = __webpack_require__(52)
		var expressionCache = new Cache(1000)

		var keywords =
		  'Math,Date,break,case,catch,continue,debugger,default,' +
		  'delete,do,else,false,finally,for,function,if,in,' +
		  'instanceof,new,null,return,switch,this,throw,true,try,' +
		  'typeof,var,void,while,with,undefined,abstract,boolean,' +
		  'byte,char,class,const,double,enum,export,extends,' +
		  'final,float,goto,implements,import,int,interface,long,' +
		  'native,package,private,protected,public,short,static,' +
		  'super,synchronized,throws,transient,volatile,' +
		  'arguments,let,yield'

		var wsRE = /\s/g
		var newlineRE = /\n/g
		var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new /g
		var restoreRE = /"(\d+)"/g
		var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\])*$/
		var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
		var keywordsRE = new RegExp('^(' + keywords.replace(/,/g, '\\b|') + '\\b)')
		var booleanLiteralRE = /^(true|false)$/

		/**
		 * Save / Rewrite / Restore
		 *
		 * When rewriting paths found in an expression, it is
		 * possible for the same letter sequences to be found in
		 * strings and Object literal property keys. Therefore we
		 * remove and store these parts in a temporary array, and
		 * restore them after the path rewrite.
		 */

		var saved = []

		/**
		 * Save replacer
		 *
		 * The save regex can match two possible cases:
		 * 1. An opening object literal
		 * 2. A string
		 * If matched as a plain string, we need to escape its
		 * newlines, since the string needs to be preserved when
		 * generating the function body.
		 *
		 * @param {String} str
		 * @param {String} isString - str if matched as a string
		 * @return {String} - placeholder with index
		 */

		function save (str, isString) {
		  var i = saved.length
		  saved[i] = isString
		    ? str.replace(newlineRE, '\\n')
		    : str
		  return '"' + i + '"'
		}

		/**
		 * Path rewrite replacer
		 *
		 * @param {String} raw
		 * @return {String}
		 */

		function rewrite (raw) {
		  var c = raw.charAt(0)
		  var path = raw.slice(1)
		  if (keywordsRE.test(path)) {
		    return raw
		  } else {
		    path = path.indexOf('"') > -1
		      ? path.replace(restoreRE, restore)
		      : path
		    return c + 'scope.' + path
		  }
		}

		/**
		 * Restore replacer
		 *
		 * @param {String} str
		 * @param {String} i - matched save index
		 * @return {String}
		 */

		function restore (str, i) {
		  return saved[i]
		}

		/**
		 * Rewrite an expression, prefixing all path accessors with
		 * `scope.` and generate getter/setter functions.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		function compileExpFns (exp, needSet) {
		  // reset state
		  saved.length = 0
		  // save strings and object literal keys
		  var body = exp
		    .replace(saveRE, save)
		    .replace(wsRE, '')
		  // rewrite all paths
		  // pad 1 space here becaue the regex matches 1 extra char
		  body = (' ' + body)
		    .replace(pathReplaceRE, rewrite)
		    .replace(restoreRE, restore)
		  var getter = makeGetter(body)
		  if (getter) {
		    return {
		      get: getter,
		      body: body,
		      set: needSet
		        ? makeSetter(body)
		        : null
		    }
		  }
		}

		/**
		 * Compile getter setters for a simple path.
		 *
		 * @param {String} exp
		 * @return {Function}
		 */

		function compilePathFns (exp) {
		  var getter, path
		  if (exp.indexOf('[') < 0) {
		    // really simple path
		    path = exp.split('.')
		    getter = Path.compileGetter(path)
		  } else {
		    // do the real parsing
		    path = Path.parse(exp)
		    getter = path.get
		  }
		  return {
		    get: getter,
		    // always generate setter for simple paths
		    set: function (obj, val) {
		      Path.set(obj, path, val)
		    }
		  }
		}

		/**
		 * Build a getter function. Requires eval.
		 *
		 * We isolate the try/catch so it doesn't affect the
		 * optimization of the parse function when it is not called.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeGetter (body) {
		  try {
		    return new Function('scope', 'return ' + body + ';')
		  } catch (e) {
		    _.warn(
		      'Invalid expression. ' +
		      'Generated function body: ' + body
		    )
		  }
		}

		/**
		 * Build a setter function.
		 *
		 * This is only needed in rare situations like "a[b]" where
		 * a settable path requires dynamic evaluation.
		 *
		 * This setter function may throw error when called if the
		 * expression body is not a valid left-hand expression in
		 * assignment.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeSetter (body) {
		  try {
		    return new Function('scope', 'value', body + '=value;')
		  } catch (e) {
		    _.warn('Invalid setter function body: ' + body)
		  }
		}

		/**
		 * Check for setter existence on a cache hit.
		 *
		 * @param {Function} hit
		 */

		function checkSetter (hit) {
		  if (!hit.set) {
		    hit.set = makeSetter(hit.body)
		  }
		}

		/**
		 * Parse an expression into re-written getter/setters.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		exports.parse = function (exp, needSet) {
		  exp = exp.trim()
		  // try cache
		  var hit = expressionCache.get(exp)
		  if (hit) {
		    if (needSet) {
		      checkSetter(hit)
		    }
		    return hit
		  }
		  // we do a simple path check to optimize for them.
		  // the check fails valid paths with unusal whitespaces,
		  // but that's too rare and we don't care.
		  // also skip boolean literals and paths that start with
		  // global "Math"
		  var res =
		    pathTestRE.test(exp) &&
		    !booleanLiteralRE.test(exp) &&
		    exp.slice(0, 5) !== 'Math.'
		      ? compilePathFns(exp)
		      : compileExpFns(exp, needSet)
		  expressionCache.put(exp, res)
		  return res
		}

		// Export the pathRegex for external use
		exports.pathTestRE = pathTestRE

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var uid = 0
		var _ = __webpack_require__(11)

		/**
		 * A dep is an observable that can have multiple
		 * directives subscribing to it.
		 *
		 * @constructor
		 */

		function Dep () {
		  this.id = ++uid
		  this.subs = []
		}

		var p = Dep.prototype

		/**
		 * Add a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.addSub = function (sub) {
		  this.subs.push(sub)
		}

		/**
		 * Remove a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.removeSub = function (sub) {
		  if (this.subs.length) {
		    var i = this.subs.indexOf(sub)
		    if (i > -1) this.subs.splice(i, 1)
		  }
		}

		/**
		 * Notify all subscribers of a new value.
		 */

		p.notify = function () {
		  // stablize the subscriber list first
		  var subs = _.toArray(this.subs)
		  for (var i = 0, l = subs.length; i < l; i++) {
		    subs[i].update()
		  }
		}

		module.exports = Dep

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var config = __webpack_require__(15)
		var Watcher = __webpack_require__(25)
		var textParser = __webpack_require__(19)
		var expParser = __webpack_require__(22)

		/**
		 * A directive links a DOM element with a piece of data,
		 * which is the result of evaluating an expression.
		 * It registers a watcher with the expression and calls
		 * the DOM update function when a change is triggered.
		 *
		 * @param {String} name
		 * @param {Node} el
		 * @param {Vue} vm
		 * @param {Object} descriptor
		 *                 - {String} expression
		 *                 - {String} [arg]
		 *                 - {Array<Object>} [filters]
		 * @param {Object} def - directive definition object
		 * @constructor
		 */

		function Directive (name, el, vm, descriptor, def) {
		  // public
		  this.name = name
		  this.el = el
		  this.vm = vm
		  // copy descriptor props
		  this.raw = descriptor.raw
		  this.expression = descriptor.expression
		  this.arg = descriptor.arg
		  this.filters = _.resolveFilters(vm, descriptor.filters)
		  // private
		  this._locked = false
		  this._bound = false
		  // init
		  this._bind(def)
		}

		var p = Directive.prototype

		/**
		 * Initialize the directive, mixin definition properties,
		 * setup the watcher, call definition bind() and update()
		 * if present.
		 *
		 * @param {Object} def
		 */

		p._bind = function (def) {
		  if (this.name !== 'cloak' && this.el.removeAttribute) {
		    this.el.removeAttribute(config.prefix + this.name)
		  }
		  if (typeof def === 'function') {
		    this.update = def
		  } else {
		    _.extend(this, def)
		  }
		  this._watcherExp = this.expression
		  this._checkDynamicLiteral()
		  if (this.bind) {
		    this.bind()
		  }
		  if (this._watcherExp &&
		      (this.update || this.twoWay) &&
		      (!this.isLiteral || this._isDynamicLiteral) &&
		      !this._checkStatement()) {
		    // wrapped updater for context
		    var dir = this
		    var update = this._update = this.update
		      ? function (val, oldVal) {
		          if (!dir._locked) {
		            dir.update(val, oldVal)
		          }
		        }
		      : function () {} // noop if no update is provided
		    // use raw expression as identifier because filters
		    // make them different watchers
		    var watcher = this.vm._watchers[this.raw]
		    // v-repeat always creates a new watcher because it has
		    // a special filter that's bound to its directive
		    // instance.
		    if (!watcher || this.name === 'repeat') {
		      watcher = this.vm._watchers[this.raw] = new Watcher(
		        this.vm,
		        this._watcherExp,
		        update, // callback
		        {
		          filters: this.filters,
		          twoWay: this.twoWay,
		          deep: this.deep
		        }
		      )
		    } else {
		      watcher.addCb(update)
		    }
		    this._watcher = watcher
		    if (this._initValue != null) {
		      watcher.set(this._initValue)
		    } else if (this.update) {
		      this.update(watcher.value)
		    }
		  }
		  this._bound = true
		}

		/**
		 * check if this is a dynamic literal binding.
		 *
		 * e.g. v-component="{{currentView}}"
		 */

		p._checkDynamicLiteral = function () {
		  var expression = this.expression
		  if (expression && this.isLiteral) {
		    var tokens = textParser.parse(expression)
		    if (tokens) {
		      var exp = textParser.tokensToExp(tokens)
		      this.expression = this.vm.$get(exp)
		      this._watcherExp = exp
		      this._isDynamicLiteral = true
		    }
		  }
		}

		/**
		 * Check if the directive is a function caller
		 * and if the expression is a callable one. If both true,
		 * we wrap up the expression and use it as the event
		 * handler.
		 *
		 * e.g. v-on="click: a++"
		 *
		 * @return {Boolean}
		 */

		p._checkStatement = function () {
		  var expression = this.expression
		  if (
		    expression && this.acceptStatement &&
		    !expParser.pathTestRE.test(expression)
		  ) {
		    var fn = expParser.parse(expression).get
		    var vm = this.vm
		    var handler = function () {
		      fn.call(vm, vm)
		    }
		    if (this.filters) {
		      handler = _.applyFilters(
		        handler,
		        this.filters.read,
		        vm
		      )
		    }
		    this.update(handler)
		    return true
		  }
		}

		/**
		 * Check for an attribute directive param, e.g. lazy
		 *
		 * @param {String} name
		 * @return {String}
		 */

		p._checkParam = function (name) {
		  var param = this.el.getAttribute(name)
		  if (param !== null) {
		    this.el.removeAttribute(name)
		  }
		  return param
		}

		/**
		 * Teardown the watcher and call unbind.
		 */

		p._teardown = function () {
		  if (this._bound) {
		    if (this.unbind) {
		      this.unbind()
		    }
		    var watcher = this._watcher
		    if (watcher && watcher.active) {
		      watcher.removeCb(this._update)
		      if (!watcher.active) {
		        this.vm._watchers[this.raw] = null
		      }
		    }
		    this._bound = false
		    this.vm = this.el = this._watcher = null
		  }
		}

		/**
		 * Set the corresponding value with the setter.
		 * This should only be used in two-way directives
		 * e.g. v-model.
		 *
		 * @param {*} value
		 * @param {Boolean} lock - prevent wrtie triggering update.
		 * @public
		 */

		p.set = function (value, lock) {
		  if (this.twoWay) {
		    if (lock) {
		      this._locked = true
		    }
		    this._watcher.set(value)
		    if (lock) {
		      var self = this
		      _.nextTick(function () {
		        self._locked = false
		      })
		    }
		  }
		}

		module.exports = Directive

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var config = __webpack_require__(15)
		var Observer = __webpack_require__(49)
		var expParser = __webpack_require__(22)
		var batcher = __webpack_require__(53)
		var uid = 0

		/**
		 * A watcher parses an expression, collects dependencies,
		 * and fires callback when the expression value changes.
		 * This is used for both the $watch() api and directives.
		 *
		 * @param {Vue} vm
		 * @param {String} expression
		 * @param {Function} cb
		 * @param {Object} options
		 *                 - {Array} filters
		 *                 - {Boolean} twoWay
		 *                 - {Boolean} deep
		 *                 - {Boolean} user
		 * @constructor
		 */

		function Watcher (vm, expression, cb, options) {
		  this.vm = vm
		  vm._watcherList.push(this)
		  this.expression = expression
		  this.cbs = [cb]
		  this.id = ++uid // uid for batching
		  this.active = true
		  options = options || {}
		  this.deep = !!options.deep
		  this.user = !!options.user
		  this.deps = Object.create(null)
		  // setup filters if any.
		  // We delegate directive filters here to the watcher
		  // because they need to be included in the dependency
		  // collection process.
		  if (options.filters) {
		    this.readFilters = options.filters.read
		    this.writeFilters = options.filters.write
		  }
		  // parse expression for getter/setter
		  var res = expParser.parse(expression, options.twoWay)
		  this.getter = res.get
		  this.setter = res.set
		  this.value = this.get()
		}

		var p = Watcher.prototype

		/**
		 * Add a dependency to this directive.
		 *
		 * @param {Dep} dep
		 */

		p.addDep = function (dep) {
		  var id = dep.id
		  if (!this.newDeps[id]) {
		    this.newDeps[id] = dep
		    if (!this.deps[id]) {
		      this.deps[id] = dep
		      dep.addSub(this)
		    }
		  }
		}

		/**
		 * Evaluate the getter, and re-collect dependencies.
		 */

		p.get = function () {
		  this.beforeGet()
		  var vm = this.vm
		  var value
		  try {
		    value = this.getter.call(vm, vm)
		  } catch (e) {
		    if (config.warnExpressionErrors) {
		      _.warn(
		        'Error when evaluating expression "' +
		        this.expression + '":\n   ' + e
		      )
		    }
		  }
		  // "touch" every property so they are all tracked as
		  // dependencies for deep watching
		  if (this.deep) {
		    traverse(value)
		  }
		  value = _.applyFilters(value, this.readFilters, vm)
		  this.afterGet()
		  return value
		}

		/**
		 * Set the corresponding value with the setter.
		 *
		 * @param {*} value
		 */

		p.set = function (value) {
		  var vm = this.vm
		  value = _.applyFilters(
		    value, this.writeFilters, vm, this.value
		  )
		  try {
		    this.setter.call(vm, vm, value)
		  } catch (e) {
		    if (config.warnExpressionErrors) {
		      _.warn(
		        'Error when evaluating setter "' +
		        this.expression + '":\n   ' + e
		      )
		    }
		  }
		}

		/**
		 * Prepare for dependency collection.
		 */

		p.beforeGet = function () {
		  Observer.target = this
		  this.newDeps = {}
		}

		/**
		 * Clean up for dependency collection.
		 */

		p.afterGet = function () {
		  Observer.target = null
		  for (var id in this.deps) {
		    if (!this.newDeps[id]) {
		      this.deps[id].removeSub(this)
		    }
		  }
		  this.deps = this.newDeps
		}

		/**
		 * Subscriber interface.
		 * Will be called when a dependency changes.
		 */

		p.update = function () {
		  if (!config.async || config.debug) {
		    this.run()
		  } else {
		    batcher.push(this)
		  }
		}

		/**
		 * Batcher job interface.
		 * Will be called by the batcher.
		 */

		p.run = function () {
		  if (this.active) {
		    var value = this.get()
		    if (
		      value !== this.value ||
		      Array.isArray(value) ||
		      this.deep
		    ) {
		      var oldValue = this.value
		      this.value = value
		      var cbs = this.cbs
		      for (var i = 0, l = cbs.length; i < l; i++) {
		        cbs[i](value, oldValue)
		        // if a callback also removed other callbacks,
		        // we need to adjust the loop accordingly.
		        var removed = l - cbs.length
		        if (removed) {
		          i -= removed
		          l -= removed
		        }
		      }
		    }
		  }
		}

		/**
		 * Add a callback.
		 *
		 * @param {Function} cb
		 */

		p.addCb = function (cb) {
		  this.cbs.push(cb)
		}

		/**
		 * Remove a callback.
		 *
		 * @param {Function} cb
		 */

		p.removeCb = function (cb) {
		  var cbs = this.cbs
		  if (cbs.length > 1) {
		    var i = cbs.indexOf(cb)
		    if (i > -1) {
		      cbs.splice(i, 1)
		    }
		  } else if (cb === cbs[0]) {
		    this.teardown()
		  }
		}

		/**
		 * Remove self from all dependencies' subcriber list.
		 */

		p.teardown = function () {
		  if (this.active) {
		    // remove self from vm's watcher list
		    // we can skip this if the vm if being destroyed
		    // which can improve teardown performance.
		    if (!this.vm._isBeingDestroyed) {
		      var list = this.vm._watcherList
		      list.splice(list.indexOf(this))
		    }
		    for (var id in this.deps) {
		      this.deps[id].removeSub(this)
		    }
		    this.active = false
		    this.vm = this.cbs = this.value = null
		  }
		}


		/**
		 * Recrusively traverse an object to evoke all converted
		 * getters, so that every nested property inside the object
		 * is collected as a "deep" dependency.
		 *
		 * @param {Object} obj
		 */

		function traverse (obj) {
		  var key, val, i
		  for (key in obj) {
		    val = obj[key]
		    if (_.isArray(val)) {
		      i = val.length
		      while (i--) traverse(val[i])
		    } else if (_.isObject(val)) {
		      traverse(val)
		    }
		  }
		}

		module.exports = Watcher

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Check is a string starts with $ or _
		 *
		 * @param {String} str
		 * @return {Boolean}
		 */

		exports.isReserved = function (str) {
		  var c = (str + '').charCodeAt(0)
		  return c === 0x24 || c === 0x5F
		}

		/**
		 * Guard text output, make sure undefined outputs
		 * empty string
		 *
		 * @param {*} value
		 * @return {String}
		 */

		exports.toString = function (value) {
		  return value == null
		    ? ''
		    : value.toString()
		}

		/**
		 * Check and convert possible numeric numbers before
		 * setting back to data
		 *
		 * @param {*} value
		 * @return {*|Number}
		 */

		exports.toNumber = function (value) {
		  return (
		    isNaN(value) ||
		    value === null ||
		    typeof value === 'boolean'
		  ) ? value
		    : Number(value)
		}

		/**
		 * Strip quotes from a string
		 *
		 * @param {String} str
		 * @return {String | false}
		 */

		exports.stripQuotes = function (str) {
		  var a = str.charCodeAt(0)
		  var b = str.charCodeAt(str.length - 1)
		  return a === b && (a === 0x22 || a === 0x27)
		    ? str.slice(1, -1)
		    : false
		}

		/**
		 * Replace helper
		 *
		 * @param {String} _ - matched delimiter
		 * @param {String} c - matched char
		 * @return {String}
		 */
		function toUpper (_, c) {
		  return c ? c.toUpperCase () : ''
		}

		/**
		 * Camelize a hyphen-delmited string.
		 *
		 * @param {String} str
		 * @return {String}
		 */

		var camelRE = /-(\w)/g
		exports.camelize = function (str) {
		  return str.replace(camelRE, toUpper)
		}

		/**
		 * Converts hyphen/underscore/slash delimitered names into
		 * camelized classNames.
		 *
		 * e.g. my-component => MyComponent
		 *      some_else    => SomeElse
		 *      some/comp    => SomeComp
		 *
		 * @param {String} str
		 * @return {String}
		 */

		var classifyRE = /(?:^|[-_\/])(\w)/g
		exports.classify = function (str) {
		  return str.replace(classifyRE, toUpper)
		}

		/**
		 * Simple bind, faster than native
		 *
		 * @param {Function} fn
		 * @param {Object} ctx
		 * @return {Function}
		 */

		exports.bind = function (fn, ctx) {
		  return function () {
		    return fn.apply(ctx, arguments)
		  }
		}

		/**
		 * Convert an Array-like object to a real Array.
		 *
		 * @param {Array-like} list
		 * @param {Number} [start] - start index
		 * @return {Array}
		 */

		exports.toArray = function (list, start) {
		  start = start || 0
		  var i = list.length - start
		  var ret = new Array(i)
		  while (i--) {
		    ret[i] = list[i + start]
		  }
		  return ret
		}

		/**
		 * Mix properties into target object.
		 *
		 * @param {Object} to
		 * @param {Object} from
		 */

		exports.extend = function (to, from) {
		  for (var key in from) {
		    to[key] = from[key]
		  }
		  return to
		}

		/**
		 * Quick object check - this is primarily used to tell
		 * Objects from primitive values when we know the value
		 * is a JSON-compliant type.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isObject = function (obj) {
		  return obj && typeof obj === 'object'
		}

		/**
		 * Strict object type check. Only returns true
		 * for plain JavaScript objects.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		var toString = Object.prototype.toString
		exports.isPlainObject = function (obj) {
		  return toString.call(obj) === '[object Object]'
		}

		/**
		 * Array type check.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isArray = function (obj) {
		  return Array.isArray(obj)
		}

		/**
		 * Define a non-enumerable property
		 *
		 * @param {Object} obj
		 * @param {String} key
		 * @param {*} val
		 * @param {Boolean} [enumerable]
		 */

		exports.define = function (obj, key, val, enumerable) {
		  Object.defineProperty(obj, key, {
		    value        : val,
		    enumerable   : !!enumerable,
		    writable     : true,
		    configurable : true
		  })
		}

		/**
		 * Debounce a function so it only gets called after the
		 * input stops arriving after the given wait period.
		 *
		 * @param {Function} func
		 * @param {Number} wait
		 * @return {Function} - the debounced function
		 */

		exports.debounce = function(func, wait) {
		  var timeout, args, context, timestamp, result
		  var later = function() {
		    var last = Date.now() - timestamp
		    if (last < wait && last >= 0) {
		      timeout = setTimeout(later, wait - last)
		    } else {
		      timeout = null
		      result = func.apply(context, args)
		      if (!timeout) context = args = null
		    }
		  }
		  return function() {
		    context = this
		    args = arguments
		    timestamp = Date.now()
		    if (!timeout) {
		      timeout = setTimeout(later, wait)
		    }
		    return result
		  }
		}

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Can we use __proto__?
		 *
		 * @type {Boolean}
		 */

		exports.hasProto = '__proto__' in {}

		/**
		 * Indicates we have a window
		 *
		 * @type {Boolean}
		 */

		var toString = Object.prototype.toString
		var inBrowser = exports.inBrowser =
		  typeof window !== 'undefined' &&
		  toString.call(window) !== '[object Object]'

		/**
		 * Defer a task to execute it asynchronously. Ideally this
		 * should be executed as a microtask, so we leverage
		 * MutationObserver if it's available, and fallback to
		 * setTimeout(0).
		 *
		 * @param {Function} cb
		 * @param {Object} ctx
		 */

		exports.nextTick = (function () {
		  var callbacks = []
		  var pending = false
		  var timerFunc
		  function handle () {
		    pending = false
		    var copies = callbacks.slice(0)
		    callbacks = []
		    for (var i = 0; i < copies.length; i++) {
		      copies[i]()
		    }
		  }
		  /* istanbul ignore if */
		  if (typeof MutationObserver !== 'undefined') {
		    var counter = 1
		    var observer = new MutationObserver(handle)
		    var textNode = document.createTextNode(counter)
		    observer.observe(textNode, {
		      characterData: true
		    })
		    timerFunc = function () {
		      counter = (counter + 1) % 2
		      textNode.data = counter
		    }
		  } else {
		    timerFunc = setTimeout
		  }
		  return function (cb, ctx) {
		    var func = ctx
		      ? function () { cb.call(ctx) }
		      : cb
		    callbacks.push(func)
		    if (pending) return
		    pending = true
		    timerFunc(handle, 0)
		  }
		})()

		/**
		 * Detect if we are in IE9...
		 *
		 * @type {Boolean}
		 */

		exports.isIE9 =
		  inBrowser &&
		  navigator.userAgent.indexOf('MSIE 9.0') > 0

		/**
		 * Sniff transition/animation events
		 */

		if (inBrowser && !exports.isIE9) {
		  var isWebkitTrans =
		    window.ontransitionend === undefined &&
		    window.onwebkittransitionend !== undefined
		  var isWebkitAnim =
		    window.onanimationend === undefined &&
		    window.onwebkitanimationend !== undefined
		  exports.transitionProp = isWebkitTrans
		    ? 'WebkitTransition'
		    : 'transition'
		  exports.transitionEndEvent = isWebkitTrans
		    ? 'webkitTransitionEnd'
		    : 'transitionend'
		  exports.animationProp = isWebkitAnim
		    ? 'WebkitAnimation'
		    : 'animation'
		  exports.animationEndEvent = isWebkitAnim
		    ? 'webkitAnimationEnd'
		    : 'animationend'
		}

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(15)

		/**
		 * Check if a node is in the document.
		 * Note: document.documentElement.contains should work here
		 * but always returns false for comment nodes in phantomjs,
		 * making unit tests difficult. This is fixed byy doing the
		 * contains() check on the node's parentNode instead of
		 * the node itself.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */

		var doc =
		  typeof document !== 'undefined' &&
		  document.documentElement

		exports.inDoc = function (node) {
		  var parent = node && node.parentNode
		  return doc === node ||
		    doc === parent ||
		    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
		}

		/**
		 * Extract an attribute from a node.
		 *
		 * @param {Node} node
		 * @param {String} attr
		 */

		exports.attr = function (node, attr) {
		  attr = config.prefix + attr
		  var val = node.getAttribute(attr)
		  if (val !== null) {
		    node.removeAttribute(attr)
		  }
		  return val
		}

		/**
		 * Insert el before target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.before = function (el, target) {
		  target.parentNode.insertBefore(el, target)
		}

		/**
		 * Insert el after target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.after = function (el, target) {
		  if (target.nextSibling) {
		    exports.before(el, target.nextSibling)
		  } else {
		    target.parentNode.appendChild(el)
		  }
		}

		/**
		 * Remove el from DOM
		 *
		 * @param {Element} el
		 */

		exports.remove = function (el) {
		  el.parentNode.removeChild(el)
		}

		/**
		 * Prepend el to target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.prepend = function (el, target) {
		  if (target.firstChild) {
		    exports.before(el, target.firstChild)
		  } else {
		    target.appendChild(el)
		  }
		}

		/**
		 * Replace target with el
		 *
		 * @param {Element} target
		 * @param {Element} el
		 */

		exports.replace = function (target, el) {
		  var parent = target.parentNode
		  if (parent) {
		    parent.replaceChild(el, target)
		  }
		}

		/**
		 * Copy attributes from one element to another.
		 *
		 * @param {Element} from
		 * @param {Element} to
		 */

		exports.copyAttributes = function (from, to) {
		  if (from.hasAttributes()) {
		    var attrs = from.attributes
		    for (var i = 0, l = attrs.length; i < l; i++) {
		      var attr = attrs[i]
		      to.setAttribute(attr.name, attr.value)
		    }
		  }
		}

		/**
		 * Add event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.on = function (el, event, cb) {
		  el.addEventListener(event, cb)
		}

		/**
		 * Remove event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.off = function (el, event, cb) {
		  el.removeEventListener(event, cb)
		}

		/**
		 * Add class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.addClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.add(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    if (cur.indexOf(' ' + cls + ' ') < 0) {
		      el.setAttribute('class', (cur + cls).trim())
		    }
		  }
		}

		/**
		 * Remove class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.removeClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.remove(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    var tar = ' ' + cls + ' '
		    while (cur.indexOf(tar) >= 0) {
		      cur = cur.replace(tar, ' ')
		    }
		    el.setAttribute('class', cur.trim())
		  }
		}

		/**
		 * Extract raw content inside an element into a temporary
		 * container div
		 *
		 * @param {Element} el
		 * @param {Boolean} asFragment
		 * @return {Element}
		 */

		exports.extractContent = function (el, asFragment) {
		  var child
		  var rawContent
		  if (el.hasChildNodes()) {
		    rawContent = asFragment
		      ? document.createDocumentFragment()
		      : document.createElement('div')
		    /* jshint boss:true */
		    while (child = el.firstChild) {
		      rawContent.appendChild(child)
		    }
		  }
		  return rawContent
		}


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(30)

		/**
		 * Resolve read & write filters for a vm instance. The
		 * filters descriptor Array comes from the directive parser.
		 *
		 * This is extracted into its own utility so it can
		 * be used in multiple scenarios.
		 *
		 * @param {Vue} vm
		 * @param {Array<Object>} filters
		 * @param {Object} [target]
		 * @return {Object}
		 */

		exports.resolveFilters = function (vm, filters, target) {
		  if (!filters) {
		    return
		  }
		  var res = target || {}
		  // var registry = vm.$options.filters
		  filters.forEach(function (f) {
		    var def = vm.$options.filters[f.name]
		    _.assertAsset(def, 'filter', f.name)
		    if (!def) return
		    var args = f.args
		    var reader, writer
		    if (typeof def === 'function') {
		      reader = def
		    } else {
		      reader = def.read
		      writer = def.write
		    }
		    if (reader) {
		      if (!res.read) res.read = []
		      res.read.push(function (value) {
		        return args
		          ? reader.apply(vm, [value].concat(args))
		          : reader.call(vm, value)
		      })
		    }
		    if (writer) {
		      if (!res.write) res.write = []
		      res.write.push(function (value, oldVal) {
		        return args
		          ? writer.apply(vm, [value, oldVal].concat(args))
		          : writer.call(vm, value, oldVal)
		      })
		    }
		  })
		  return res
		}

		/**
		 * Apply filters to a value
		 *
		 * @param {*} value
		 * @param {Array} filters
		 * @param {Vue} vm
		 * @param {*} oldVal
		 * @return {*}
		 */

		exports.applyFilters = function (value, filters, vm, oldVal) {
		  if (!filters) {
		    return value
		  }
		  for (var i = 0, l = filters.length; i < l; i++) {
		    value = filters[i].call(vm, value, oldVal)
		  }
		  return value
		}

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(15)

		/**
		 * Enable debug utilities. The enableDebug() function and
		 * all _.log() & _.warn() calls will be dropped in the
		 * minified production build.
		 */

		enableDebug()

		function enableDebug () {

		  var hasConsole = typeof console !== 'undefined'
		  
		  /**
		   * Log a message.
		   *
		   * @param {String} msg
		   */

		  exports.log = function (msg) {
		    if (hasConsole && config.debug) {
		      console.log('[Vue info]: ' + msg)
		    }
		  }

		  /**
		   * We've got a problem here.
		   *
		   * @param {String} msg
		   */

		  var warned = false
		  exports.warn = function (msg) {
		    if (hasConsole && (!config.silent || config.debug)) {
		      if (!config.debug && !warned) {
		        warned = true
		        console.log(
		          'Set `Vue.config.debug = true` to enable debug mode.'
		        )
		      }
		      console.warn('[Vue warn]: ' + msg)
		      /* istanbul ignore if */
		      if (config.debug) {
		        /* jshint debug: true */
		        debugger
		      }
		    }
		  }

		  /**
		   * Assert asset exists
		   */

		  exports.assertAsset = function (val, type, id) {
		    if (!val) {
		      exports.warn('Failed to resolve ' + type + ': ' + id)
		    }
		  }
		}

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  bind: function () {
		    this.attr = this.el.nodeType === 3
		      ? 'nodeValue'
		      : 'textContent'
		  },

		  update: function (value) {
		    this.el[this.attr] = _.toString(value)
		  }
		  
		}

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var templateParser = __webpack_require__(20)

		module.exports = {

		  bind: function () {
		    // a comment node means this is a binding for
		    // {{{ inline unescaped html }}}
		    if (this.el.nodeType === 8) {
		      // hold nodes
		      this.nodes = []
		    }
		  },

		  update: function (value) {
		    value = _.toString(value)
		    if (this.nodes) {
		      this.swap(value)
		    } else {
		      this.el.innerHTML = value
		    }
		  },

		  swap: function (value) {
		    // remove old nodes
		    var i = this.nodes.length
		    while (i--) {
		      _.remove(this.nodes[i])
		    }
		    // convert new value to a fragment
		    // do not attempt to retrieve from id selector
		    var frag = templateParser.parse(value, true, true)
		    // save a reference to these nodes so we can remove later
		    this.nodes = _.toArray(frag.childNodes)
		    _.before(frag, this.el)
		  }

		}

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		// xlink
		var xlinkNS = 'http://www.w3.org/1999/xlink'
		var xlinkRE = /^xlink:/

		module.exports = {

		  priority: 850,

		  bind: function () {
		    var name = this.arg
		    this.update = xlinkRE.test(name)
		      ? xlinkHandler
		      : defaultHandler
		  }

		}

		function defaultHandler (value) {
		  if (value || value === 0) {
		    this.el.setAttribute(this.arg, value)
		  } else {
		    this.el.removeAttribute(this.arg)
		  }
		}

		function xlinkHandler (value) {
		  if (value != null) {
		    this.el.setAttributeNS(xlinkNS, this.arg, value)
		  } else {
		    this.el.removeAttributeNS(xlinkNS, 'href')
		  }
		}

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var transition = __webpack_require__(50)

		module.exports = function (value) {
		  var el = this.el
		  transition.apply(el, value ? 1 : -1, function () {
		    el.style.display = value ? '' : 'none'
		  }, this.vm)
		}

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var addClass = _.addClass
		var removeClass = _.removeClass

		module.exports = function (value) {
		  if (this.arg) {
		    var method = value ? addClass : removeClass
		    method(this.el, this.arg)
		  } else {
		    if (this.lastVal) {
		      removeClass(this.el, this.lastVal)
		    }
		    if (value) {
		      addClass(this.el, value)
		      this.lastVal = value
		    }
		  }
		}

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    this.vm.$$[this.expression] = this.el
		  },

		  unbind: function () {
		    delete this.vm.$$[this.expression]
		  }
		  
		}

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    var vm = this.el.__vue__
		    if (!vm) {
		      _.warn(
		        'v-ref should only be used on a component root element.'
		      )
		      return
		    }
		    // If we get here, it means this is a `v-ref` on a
		    // child, because parent scope `v-ref` is stripped in
		    // `v-component` already. So we just record our own ref
		    // here - it will overwrite parent ref in `v-component`,
		    // if any.
		    vm._refID = this.expression
		  }
		  
		}

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(15)

		module.exports = {

		  bind: function () {
		    var el = this.el
		    this.vm.$once('hook:compiled', function () {
		      el.removeAttribute(config.prefix + 'cloak')
		    })
		  }

		}

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var prefixes = ['-webkit-', '-moz-', '-ms-']
		var camelPrefixes = ['Webkit', 'Moz', 'ms']
		var importantRE = /!important;?$/
		var camelRE = /([a-z])([A-Z])/g
		var testEl = null
		var propCache = {}

		module.exports = {

		  deep: true,

		  update: function (value) {
		    if (this.arg) {
		      this.setProp(this.arg, value)
		    } else {
		      if (typeof value === 'object') {
		        // cache object styles so that only changed props
		        // are actually updated.
		        if (!this.cache) this.cache = {}
		        for (var prop in value) {
		          this.setProp(prop, value[prop])
		          /* jshint eqeqeq: false */
		          if (value[prop] != this.cache[prop]) {
		            this.cache[prop] = value[prop]
		            this.setProp(prop, value[prop])
		          }
		        }
		      } else {
		        this.el.style.cssText = value
		      }
		    }
		  },

		  setProp: function (prop, value) {
		    prop = normalize(prop)
		    if (!prop) return // unsupported prop
		    // cast possible numbers/booleans into strings
		    if (value != null) value += ''
		    if (value) {
		      var isImportant = importantRE.test(value)
		        ? 'important'
		        : ''
		      if (isImportant) {
		        value = value.replace(importantRE, '').trim()
		      }
		      this.el.style.setProperty(prop, value, isImportant)
		    } else {
		      this.el.style.removeProperty(prop)
		    }
		  }

		}

		/**
		 * Normalize a CSS property name.
		 * - cache result
		 * - auto prefix
		 * - camelCase -> dash-case
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function normalize (prop) {
		  if (propCache[prop]) {
		    return propCache[prop]
		  }
		  var res = prefix(prop)
		  propCache[prop] = propCache[res] = res
		  return res
		}

		/**
		 * Auto detect the appropriate prefix for a CSS property.
		 * https://gist.github.com/paulirish/523692
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function prefix (prop) {
		  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
		  var camel = _.camelize(prop)
		  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
		  if (!testEl) {
		    testEl = document.createElement('div')
		  }
		  if (camel in testEl.style) {
		    return prop
		  }
		  var i = prefixes.length
		  var prefixed
		  while (i--) {
		    prefixed = camelPrefixes[i] + upper
		    if (prefixed in testEl.style) {
		      return prefixes[i] + prop
		    }
		  }
		}

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var templateParser = __webpack_require__(20)
		var vIf = __webpack_require__(45)

		module.exports = {

		  isLiteral: true,

		  // same logic reuse from v-if
		  compile: vIf.compile,
		  teardown: vIf.teardown,
		  unbind: vIf.unbind,

		  bind: function () {
		    var el = this.el
		    this.start = document.createComment('v-partial-start')
		    this.end = document.createComment('v-partial-end')
		    if (el.nodeType !== 8) {
		      el.innerHTML = ''
		    }
		    if (el.tagName === 'TEMPLATE' || el.nodeType === 8) {
		      _.replace(el, this.end)
		    } else {
		      el.appendChild(this.end)
		    }
		    _.before(this.start, this.end)
		    if (!this._isDynamicLiteral) {
		      this.insert(this.expression)
		    }
		  },

		  update: function (id) {
		    this.teardown()
		    this.insert(id)
		  },

		  insert: function (id) {
		    var partial = this.vm.$options.partials[id]
		    _.assertAsset(partial, 'partial', id)
		    if (partial) {
		      this.compile(templateParser.parse(partial, true))
		    }
		  }

		}

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {

		  priority: 1000,
		  isLiteral: true,

		  bind: function () {
		    this.el.__v_trans = {
		      id: this.expression,
		      // resolve the custom transition functions now
		      fns: this.vm.$options.transitions[this.expression]
		    }
		  }

		}

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  acceptStatement: true,
		  priority: 700,

		  bind: function () {
		    // deal with iframes
		    if (
		      this.el.tagName === 'IFRAME' &&
		      this.arg !== 'load'
		    ) {
		      var self = this
		      this.iframeBind = function () {
		        _.on(self.el.contentWindow, self.arg, self.handler)
		      }
		      _.on(this.el, 'load', this.iframeBind)
		    }
		  },

		  update: function (handler) {
		    if (typeof handler !== 'function') {
		      _.warn(
		        'Directive "v-on:' + this.expression + '" ' +
		        'expects a function value.'
		      )
		      return
		    }
		    this.reset()
		    var vm = this.vm
		    this.handler = function (e) {
		      e.targetVM = vm
		      vm.$event = e
		      var res = handler(e)
		      vm.$event = null
		      return res
		    }
		    if (this.iframeBind) {
		      this.iframeBind()
		    } else {
		      _.on(this.el, this.arg, this.handler)
		    }
		  },

		  reset: function () {
		    var el = this.iframeBind
		      ? this.el.contentWindow
		      : this.el
		    if (this.handler) {
		      _.off(el, this.arg, this.handler)
		    }
		  },

		  unbind: function () {
		    this.reset()
		    _.off(this.el, 'load', this.iframeBind)
		  }
		}

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var templateParser = __webpack_require__(20)

		module.exports = {

		  isLiteral: true,

		  /**
		   * Setup. Two possible usages:
		   *
		   * - static:
		   *   v-component="comp"
		   *
		   * - dynamic:
		   *   v-component="{{currentView}}"
		   */

		  bind: function () {
		    if (!this.el.__vue__) {
		      // create a ref anchor
		      this.ref = document.createComment('v-component')
		      _.replace(this.el, this.ref)
		      // check keep-alive options.
		      // If yes, instead of destroying the active vm when
		      // hiding (v-if) or switching (dynamic literal) it,
		      // we simply remove it from the DOM and save it in a
		      // cache object, with its constructor id as the key.
		      this.keepAlive = this._checkParam('keep-alive') != null
		      // check ref
		      this.refID = _.attr(this.el, 'ref')
		      if (this.keepAlive) {
		        this.cache = {}
		      }
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.template = _.extractContent(this.el, true)
		      }
		      // if static, build right now.
		      if (!this._isDynamicLiteral) {
		        this.resolveCtor(this.expression)
		        var child = this.build()
		        child.$before(this.ref)
		        this.setCurrent(child)
		      } else {
		        // check dynamic component params
		        this.readyEvent = this._checkParam('wait-for')
		        this.transMode = this._checkParam('transition-mode')
		      }
		    } else {
		      _.warn(
		        'v-component="' + this.expression + '" cannot be ' +
		        'used on an already mounted instance.'
		      )
		    }
		  },

		  /**
		   * Resolve the component constructor to use when creating
		   * the child vm.
		   */

		  resolveCtor: function (id) {
		    this.ctorId = id
		    this.Ctor = this.vm.$options.components[id]
		    _.assertAsset(this.Ctor, 'component', id)
		  },

		  /**
		   * Instantiate/insert a new child vm.
		   * If keep alive and has cached instance, insert that
		   * instance; otherwise build a new one and cache it.
		   *
		   * @return {Vue} - the created instance
		   */

		  build: function () {
		    if (this.keepAlive) {
		      var cached = this.cache[this.ctorId]
		      if (cached) {
		        return cached
		      }
		    }
		    var vm = this.vm
		    var el = templateParser.clone(this.el)
		    if (this.Ctor) {
		      var child = vm.$addChild({
		        el: el,
		        template: this.template,
		        _asComponent: true
		      }, this.Ctor)
		      if (this.keepAlive) {
		        this.cache[this.ctorId] = child
		      }
		      return child
		    }
		  },

		  /**
		   * Teardown the current child, but defers cleanup so
		   * that we can separate the destroy and removal steps.
		   */

		  unbuild: function () {
		    var child = this.childVM
		    if (!child || this.keepAlive) {
		      return
		    }
		    // the sole purpose of `deferCleanup` is so that we can
		    // "deactivate" the vm right now and perform DOM removal
		    // later.
		    child.$destroy(false, true)
		  },

		  /**
		   * Remove current destroyed child and manually do
		   * the cleanup after removal.
		   *
		   * @param {Function} cb
		   */

		  remove: function (child, cb) {
		    var keepAlive = this.keepAlive
		    if (child) {
		      child.$remove(function () {
		        if (!keepAlive) child._cleanup()
		        if (cb) cb()
		      })
		    } else if (cb) {
		      cb()
		    }
		  },

		  /**
		   * Update callback for the dynamic literal scenario,
		   * e.g. v-component="{{view}}"
		   */

		  update: function (value) {
		    if (!value) {
		      // just destroy and remove current
		      this.unbuild()
		      this.remove(this.childVM)
		      this.unsetCurrent()
		    } else {
		      this.resolveCtor(value)
		      this.unbuild()
		      var newComponent = this.build()
		      var self = this
		      if (this.readyEvent) {
		        newComponent.$once(this.readyEvent, function () {
		          self.swapTo(newComponent)
		        })
		      } else {
		        this.swapTo(newComponent)
		      }
		    }
		  },

		  /**
		   * Actually swap the components, depending on the
		   * transition mode. Defaults to simultaneous.
		   *
		   * @param {Vue} target
		   */

		  swapTo: function (target) {
		    var self = this
		    var current = this.childVM
		    this.unsetCurrent()
		    this.setCurrent(target)
		    switch (self.transMode) {
		      case 'in-out':
		        target.$before(self.ref, function () {
		          self.remove(current)
		        })
		        break
		      case 'out-in':
		        self.remove(current, function () {
		          target.$before(self.ref)
		        })
		        break
		      default:
		        self.remove(current)
		        target.$before(self.ref)
		    }
		  },

		  /**
		   * Set childVM and parent ref
		   */
		  
		  setCurrent: function (child) {
		    this.childVM = child
		    var refID = child._refID || this.refID
		    if (refID) {
		      this.vm.$[refID] = child
		    }
		  },

		  /**
		   * Unset childVM and parent ref
		   */

		  unsetCurrent: function () {
		    var child = this.childVM
		    this.childVM = null
		    var refID = (child && child._refID) || this.refID
		    if (refID) {
		      this.vm.$[refID] = null
		    }
		  },

		  /**
		   * Unbind.
		   */

		  unbind: function () {
		    this.unbuild()
		    // destroy all keep-alive cached instances
		    if (this.cache) {
		      for (var key in this.cache) {
		        this.cache[key].$destroy()
		      }
		      this.cache = null
		    }
		  }

		}

	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var isObject = _.isObject
		var isPlainObject = _.isPlainObject
		var textParser = __webpack_require__(19)
		var expParser = __webpack_require__(22)
		var templateParser = __webpack_require__(20)
		var compile = __webpack_require__(16)
		var transclude = __webpack_require__(17)
		var mergeOptions = __webpack_require__(14)
		var uid = 0

		module.exports = {

		  /**
		   * Setup.
		   */

		  bind: function () {
		    // uid as a cache identifier
		    this.id = '__v_repeat_' + (++uid)
		    // we need to insert the objToArray converter
		    // as the first read filter, because it has to be invoked
		    // before any user filters. (can't do it in `update`)
		    if (!this.filters) {
		      this.filters = {}
		    }
		    // add the object -> array convert filter
		    var objectConverter = _.bind(objToArray, this)
		    if (!this.filters.read) {
		      this.filters.read = [objectConverter]
		    } else {
		      this.filters.read.unshift(objectConverter)
		    }
		    // setup ref node
		    this.ref = document.createComment('v-repeat')
		    _.replace(this.el, this.ref)
		    // check if this is a block repeat
		    this.template = this.el.tagName === 'TEMPLATE'
		      ? templateParser.parse(this.el, true)
		      : this.el
		    // check other directives that need to be handled
		    // at v-repeat level
		    this.checkIf()
		    this.checkRef()
		    this.checkComponent()
		    // check for trackby param
		    this.idKey =
		      this._checkParam('track-by') ||
		      this._checkParam('trackby') // 0.11.0 compat
		    this.cache = Object.create(null)
		  },

		  /**
		   * Warn against v-if usage.
		   */

		  checkIf: function () {
		    if (_.attr(this.el, 'if') !== null) {
		      _.warn(
		        'Don\'t use v-if with v-repeat. ' +
		        'Use v-show or the "filterBy" filter instead.'
		      )
		    }
		  },

		  /**
		   * Check if v-ref/ v-el is also present.
		   */

		  checkRef: function () {
		    var refID = _.attr(this.el, 'ref')
		    this.refID = refID
		      ? this.vm.$interpolate(refID)
		      : null
		    var elId = _.attr(this.el, 'el')
		    this.elId = elId
		      ? this.vm.$interpolate(elId)
		      : null
		  },

		  /**
		   * Check the component constructor to use for repeated
		   * instances. If static we resolve it now, otherwise it
		   * needs to be resolved at build time with actual data.
		   */

		  checkComponent: function () {
		    var id = _.attr(this.el, 'component')
		    var options = this.vm.$options
		    if (!id) {
		      // default constructor
		      this.Ctor = _.Vue
		      // inline repeats should inherit
		      this.inherit = true
		      // important: transclude with no options, just
		      // to ensure block start and block end
		      this.template = transclude(this.template)
		      this._linkFn = compile(this.template, options)
		    } else {
		      this.asComponent = true
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.inlineTempalte = _.extractContent(this.el, true)
		      }
		      var tokens = textParser.parse(id)
		      if (!tokens) { // static component
		        var Ctor = this.Ctor = options.components[id]
		        _.assertAsset(Ctor, 'component', id)
		        // If there's no parent scope directives and no
		        // content to be transcluded, we can optimize the
		        // rendering by pre-transcluding + compiling here
		        // and provide a link function to every instance.
		        if (!this.el.hasChildNodes() &&
		            !this.el.hasAttributes()) {
		          // merge an empty object with owner vm as parent
		          // so child vms can access parent assets.
		          var merged = mergeOptions(Ctor.options, {}, {
		            $parent: this.vm
		          })
		          merged.template = this.inlineTempalte || merged.template
		          this.template = transclude(this.template, merged)
		          this._linkFn = compile(this.template, merged, false, true)
		        }
		      } else {
		        // to be resolved later
		        var ctorExp = textParser.tokensToExp(tokens)
		        this.ctorGetter = expParser.parse(ctorExp).get
		      }
		    }
		  },

		  /**
		   * Update.
		   * This is called whenever the Array mutates.
		   *
		   * @param {Array|Number|String} data
		   */

		  update: function (data) {
		    data = data || []
		    var type = typeof data
		    if (type === 'number') {
		      data = range(data)
		    } else if (type === 'string') {
		      data = _.toArray(data)
		    }
		    this.vms = this.diff(data, this.vms)
		    // update v-ref
		    if (this.refID) {
		      this.vm.$[this.refID] = this.vms
		    }
		    if (this.elId) {
		      this.vm.$$[this.elId] = this.vms.map(function (vm) {
		        return vm.$el
		      })
		    }
		  },

		  /**
		   * Diff, based on new data and old data, determine the
		   * minimum amount of DOM manipulations needed to make the
		   * DOM reflect the new data Array.
		   *
		   * The algorithm diffs the new data Array by storing a
		   * hidden reference to an owner vm instance on previously
		   * seen data. This allows us to achieve O(n) which is
		   * better than a levenshtein distance based algorithm,
		   * which is O(m * n).
		   *
		   * @param {Array} data
		   * @param {Array} oldVms
		   * @return {Array}
		   */

		  diff: function (data, oldVms) {
		    var idKey = this.idKey
		    var converted = this.converted
		    var ref = this.ref
		    var alias = this.arg
		    var init = !oldVms
		    var vms = new Array(data.length)
		    var obj, raw, vm, i, l
		    // First pass, go through the new Array and fill up
		    // the new vms array. If a piece of data has a cached
		    // instance for it, we reuse it. Otherwise build a new
		    // instance.
		    for (i = 0, l = data.length; i < l; i++) {
		      obj = data[i]
		      raw = converted ? obj.$value : obj
		      vm = !init && this.getVm(raw)
		      if (vm) { // reusable instance
		        vm._reused = true
		        vm.$index = i // update $index
		        if (converted) {
		          vm.$key = obj.$key // update $key
		        }
		        if (idKey) { // swap track by id data
		          if (alias) {
		            vm[alias] = raw
		          } else {
		            vm._setData(raw)
		          }
		        }
		      } else { // new instance
		        vm = this.build(obj, i, true)
		        vm._new = true
		        vm._reused = false
		      }
		      vms[i] = vm
		      // insert if this is first run
		      if (init) {
		        vm.$before(ref)
		      }
		    }
		    // if this is the first run, we're done.
		    if (init) {
		      return vms
		    }
		    // Second pass, go through the old vm instances and
		    // destroy those who are not reused (and remove them
		    // from cache)
		    for (i = 0, l = oldVms.length; i < l; i++) {
		      vm = oldVms[i]
		      if (!vm._reused) {
		        this.uncacheVm(vm)
		        vm.$destroy(true)
		      }
		    }
		    // final pass, move/insert new instances into the
		    // right place. We're going in reverse here because
		    // insertBefore relies on the next sibling to be
		    // resolved.
		    var targetNext, currentNext
		    i = vms.length
		    while (i--) {
		      vm = vms[i]
		      // this is the vm that we should be in front of
		      targetNext = vms[i + 1]
		      if (!targetNext) {
		        // This is the last item. If it's reused then
		        // everything else will eventually be in the right
		        // place, so no need to touch it. Otherwise, insert
		        // it.
		        if (!vm._reused) {
		          vm.$before(ref)
		        }
		      } else {
		        // make sure to insert before the comment node if
		        // the vms are block instances
		        var nextEl = targetNext._blockStart || targetNext.$el
		        if (vm._reused) {
		          // this is the vm we are actually in front of
		          currentNext = findNextVm(vm, ref)
		          // we only need to move if we are not in the right
		          // place already.
		          if (currentNext !== targetNext) {
		            vm.$before(nextEl, null, false)
		          }
		        } else {
		          // new instance, insert to existing next
		          vm.$before(nextEl)
		        }
		      }
		      vm._new = false
		      vm._reused = false
		    }
		    return vms
		  },

		  /**
		   * Build a new instance and cache it.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {Boolean} needCache
		   */

		  build: function (data, index, needCache) {
		    var original = data
		    var meta = { $index: index }
		    if (this.converted) {
		      meta.$key = original.$key
		    }
		    var raw = this.converted ? data.$value : data
		    var alias = this.arg
		    var hasAlias = !isObject(raw) || !isPlainObject(data) || alias
		    // wrap the raw data with alias
		    data = hasAlias ? {} : raw
		    if (alias) {
		      data[alias] = raw
		    } else if (hasAlias) {
		      meta.$value = raw
		    }
		    // resolve constructor
		    var Ctor = this.Ctor || this.resolveCtor(data, meta)
		    var vm = this.vm.$addChild({
		      el: templateParser.clone(this.template),
		      _asComponent: this.asComponent,
		      _linkFn: this._linkFn,
		      _meta: meta,
		      data: data,
		      inherit: this.inherit,
		      template: this.inlineTempalte
		    }, Ctor)
		    // flag this instance as a repeat instance
		    // so that we can skip it in vm._digest
		    vm._repeat = true
		    // cache instance
		    if (needCache) {
		      this.cacheVm(raw, vm)
		    }
		    // sync back changes for $value, particularly for
		    // two-way bindings of primitive values
		    var self = this
		    vm.$watch('$value', function (val) {
		      if (self.converted) {
		        self.rawValue[vm.$key] = val
		      } else {
		        self.rawValue.$set(vm.$index, val)
		      }
		    })
		    return vm
		  },

		  /**
		   * Resolve a contructor to use for an instance.
		   * The tricky part here is that there could be dynamic
		   * components depending on instance data.
		   *
		   * @param {Object} data
		   * @param {Object} meta
		   * @return {Function}
		   */

		  resolveCtor: function (data, meta) {
		    // create a temporary context object and copy data
		    // and meta properties onto it.
		    // use _.define to avoid accidentally overwriting scope
		    // properties.
		    var context = Object.create(this.vm)
		    var key
		    for (key in data) {
		      _.define(context, key, data[key])
		    }
		    for (key in meta) {
		      _.define(context, key, meta[key])
		    }
		    var id = this.ctorGetter.call(context, context)
		    var Ctor = this.vm.$options.components[id]
		    _.assertAsset(Ctor, 'component', id)
		    return Ctor
		  },

		  /**
		   * Unbind, teardown everything
		   */

		  unbind: function () {
		    if (this.refID) {
		      this.vm.$[this.refID] = null
		    }
		    if (this.vms) {
		      var i = this.vms.length
		      var vm
		      while (i--) {
		        vm = this.vms[i]
		        this.uncacheVm(vm)
		        vm.$destroy()
		      }
		    }
		  },

		  /**
		   * Cache a vm instance based on its data.
		   *
		   * If the data is an object, we save the vm's reference on
		   * the data object as a hidden property. Otherwise we
		   * cache them in an object and for each primitive value
		   * there is an array in case there are duplicates.
		   *
		   * @param {Object} data
		   * @param {Vue} vm
		   */

		  cacheVm: function (data, vm) {
		    var idKey = this.idKey
		    var cache = this.cache
		    var id
		    if (idKey) {
		      id = data[idKey]
		      if (!cache[id]) {
		        cache[id] = vm
		      } else {
		        _.warn('Duplicate track-by key in v-repeat: ' + id)
		      }
		    } else if (isObject(data)) {
		      id = this.id
		      if (data.hasOwnProperty(id)) {
		        if (data[id] === null) {
		          data[id] = vm
		        } else {
		          _.warn(
		            'Duplicate objects are not supported in v-repeat ' +
		            'when using components or transitions.'
		          )
		        }
		      } else {
		        _.define(data, this.id, vm)
		      }
		    } else {
		      if (!cache[data]) {
		        cache[data] = [vm]
		      } else {
		        cache[data].push(vm)
		      }
		    }
		    vm._raw = data
		  },

		  /**
		   * Try to get a cached instance from a piece of data.
		   *
		   * @param {Object} data
		   * @return {Vue|undefined}
		   */

		  getVm: function (data) {
		    if (this.idKey) {
		      return this.cache[data[this.idKey]]
		    } else if (isObject(data)) {
		      return data[this.id]
		    } else {
		      var cached = this.cache[data]
		      if (cached) {
		        var i = 0
		        var vm = cached[i]
		        // since duplicated vm instances might be a reused
		        // one OR a newly created one, we need to return the
		        // first instance that is neither of these.
		        while (vm && (vm._reused || vm._new)) {
		          vm = cached[++i]
		        }
		        return vm
		      }
		    }
		  },

		  /**
		   * Delete a cached vm instance.
		   *
		   * @param {Vue} vm
		   */

		  uncacheVm: function (vm) {
		    var data = vm._raw
		    if (this.idKey) {
		      this.cache[data[this.idKey]] = null
		    } else if (isObject(data)) {
		      data[this.id] = null
		      vm._raw = null
		    } else {
		      this.cache[data].pop()
		    }
		  }

		}

		/**
		 * Helper to find the next element that is an instance
		 * root node. This is necessary because a destroyed vm's
		 * element could still be lingering in the DOM before its
		 * leaving transition finishes, but its __vue__ reference
		 * should have been removed so we can skip them.
		 *
		 * @param {Vue} vm
		 * @param {CommentNode} ref
		 * @return {Vue}
		 */

		function findNextVm (vm, ref) {
		  var el = (vm._blockEnd || vm.$el).nextSibling
		  while (!el.__vue__ && el !== ref) {
		    el = el.nextSibling
		  }
		  return el.__vue__
		}

		/**
		 * Attempt to convert non-Array objects to array.
		 * This is the default filter installed to every v-repeat
		 * directive.
		 *
		 * It will be called with **the directive** as `this`
		 * context so that we can mark the repeat array as converted
		 * from an object.
		 *
		 * @param {*} obj
		 * @return {Array}
		 * @private
		 */

		function objToArray (obj) {
		  // regardless of type, store the un-filtered raw value.
		  this.rawValue = obj
		  if (!isPlainObject(obj)) {
		    return obj
		  }
		  var keys = Object.keys(obj)
		  var i = keys.length
		  var res = new Array(i)
		  var key
		  while (i--) {
		    key = keys[i]
		    res[i] = {
		      $key: key,
		      $value: obj[key]
		    }
		  }
		  // `this` points to the repeat directive instance
		  this.converted = true
		  return res
		}

		/**
		 * Create a range array from given number.
		 *
		 * @param {Number} n
		 * @return {Array}
		 */

		function range (n) {
		  var i = -1
		  var ret = new Array(n)
		  while (++i < n) {
		    ret[i] = i
		  }
		  return ret
		}

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var compile = __webpack_require__(16)
		var templateParser = __webpack_require__(20)
		var transition = __webpack_require__(50)

		module.exports = {

		  bind: function () {
		    var el = this.el
		    if (!el.__vue__) {
		      this.start = document.createComment('v-if-start')
		      this.end = document.createComment('v-if-end')
		      _.replace(el, this.end)
		      _.before(this.start, this.end)

		      // Note: content transclusion is not available for
		      // <template> blocks
		      if (el.tagName === 'TEMPLATE') {
		        this.template = templateParser.parse(el, true)
		      } else {
		        this.template = document.createDocumentFragment()
		        this.template.appendChild(templateParser.clone(el))
		        this.checkContent()
		      }
		      // compile the nested partial
		      this.linker = compile(
		        this.template,
		        this.vm.$options,
		        true
		      )
		    } else {
		      this.invalid = true
		      _.warn(
		        'v-if="' + this.expression + '" cannot be ' +
		        'used on an already mounted instance.'
		      )
		    }
		  },

		  // check if there are any content nodes from parent.
		  // these nodes are compiled by the parent and should
		  // not be cloned during a re-compilation - otherwise the
		  // parent directives bound to them will no longer work.
		  // (see #736)
		  checkContent: function () {
		    var el = this.el
		    for (var i = 0; i < el.childNodes.length; i++) {
		      var node = el.childNodes[i]
		      // _isContent is a flag set in instance/compile
		      // after the raw content has been compiled by parent
		      if (node._isContent) {
		        ;(this.contentNodes = this.contentNodes || []).push(node)
		        ;(this.contentPositions = this.contentPositions || []).push(i)
		      }
		    }
		    // keep track of any transcluded components contained within
		    // the conditional block. we need to call attach/detach hooks
		    // for them.
		    this.transCpnts =
		      this.vm._transCpnts &&
		      this.vm._transCpnts.filter(function (c) {
		        return el.contains(c.$el)
		      })
		  },

		  update: function (value) {
		    if (this.invalid) return
		    if (value) {
		      // avoid duplicate compiles, since update() can be
		      // called with different truthy values
		      if (!this.unlink) {
		        var frag = templateParser.clone(this.template)
		        // persist content nodes from parent.
		        if (this.contentNodes) {
		          var el = frag.childNodes[0]
		          for (var i = 0, l = this.contentNodes.length; i < l; i++) {
		            var node = this.contentNodes[i]
		            var j = this.contentPositions[i]
		            el.replaceChild(node, el.childNodes[j])
		          }
		        }
		        this.compile(frag)
		      }
		    } else {
		      this.teardown()
		    }
		  },

		  // NOTE: this function is shared in v-partial
		  compile: function (frag) {
		    var vm = this.vm
		    var originalChildLength = vm._children.length
		    this.unlink = this.linker
		      ? this.linker(vm, frag)
		      : vm.$compile(frag)
		    transition.blockAppend(frag, this.end, vm)
		    this.children = vm._children.slice(originalChildLength)
		    if (this.transCpnts) {
		      this.children = this.children.concat(this.transCpnts)
		    }
		    if (this.children.length && _.inDoc(vm.$el)) {
		      this.children.forEach(function (child) {
		        child._callHook('attached')
		      })
		    }
		  },

		  // NOTE: this function is shared in v-partial
		  teardown: function () {
		    if (!this.unlink) return
		    transition.blockRemove(this.start, this.end, this.vm)
		    if (this.children && _.inDoc(this.vm.$el)) {
		      this.children.forEach(function (child) {
		        if (!child._isDestroyed) {
		          child._callHook('detached')
		        }
		      })
		    }
		    this.unlink()
		    this.unlink = null
		  },

		  // NOTE: this function is shared in v-partial
		  unbind: function () {
		    if (this.unlink) this.unlink()
		  }

		}

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Watcher = __webpack_require__(25)

		module.exports = {

		  priority: 900,

		  bind: function () {

		    var child = this.vm
		    var parent = child.$parent
		    var childKey = this.arg || '$data'
		    var parentKey = this.expression

		    if (this.el !== child.$el) {
		      _.warn(
		        'v-with can only be used on instance root elements.'
		      )
		    } else if (!parent) {
		      _.warn(
		        'v-with must be used on an instance with a parent.'
		      )
		    } else {

		      // simple lock to avoid circular updates.
		      // without this it would stabilize too, but this makes
		      // sure it doesn't cause other watchers to re-evaluate.
		      var locked = false
		      var lock = function () {
		        locked = true
		        _.nextTick(unlock)
		      }
		      var unlock = function () {
		        locked = false
		      }

		      this.parentWatcher = new Watcher(
		        parent,
		        parentKey,
		        function (val) {
		          if (!locked) {
		            lock()
		            child.$set(childKey, val)
		          }
		        }
		      )
		      
		      // set the child initial value first, before setting
		      // up the child watcher to avoid triggering it
		      // immediately.
		      child.$set(childKey, this.parentWatcher.value)

		      this.childWatcher = new Watcher(
		        child,
		        childKey,
		        function (val) {
		          if (!locked) {
		            lock()
		            parent.$set(parentKey, val)
		          }
		        }
		      )
		    }
		  },

		  unbind: function () {
		    if (this.parentWatcher) {
		      this.parentWatcher.teardown()
		      this.childWatcher.teardown()
		    }
		  }

		}

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = { 

		  bind: function () {
		    var child = this.el.__vue__
		    if (!child || this.vm !== child.$parent) {
		      _.warn(
		        '`v-events` should only be used on a child component ' +
		        'from the parent template.'
		      )
		      return
		    }
		    var method = this.vm[this.expression]
		    if (!method) {
		      _.warn(
		        '`v-events` cannot find method "' + this.expression +
		        '" on the parent instance.'
		      )
		    }
		    child.$on(this.arg, method)
		  }

		  // when child is destroyed, all events are turned off,
		  // so no need for unbind here.

		}

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Path = __webpack_require__(18)

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} searchKey
		 * @param {String} [delimiter]
		 * @param {String} dataKey
		 */

		exports.filterBy = function (arr, searchKey, delimiter, dataKey) {
		  // allow optional `in` delimiter
		  // because why not
		  if (delimiter && delimiter !== 'in') {
		    dataKey = delimiter
		  }
		  // get the search string
		  var search =
		    _.stripQuotes(searchKey) ||
		    this.$get(searchKey)
		  if (!search) {
		    return arr
		  }
		  search = ('' + search).toLowerCase()
		  // get the optional dataKey
		  dataKey =
		    dataKey &&
		    (_.stripQuotes(dataKey) || this.$get(dataKey))
		  return arr.filter(function (item) {
		    return dataKey
		      ? contains(Path.get(item, dataKey), search)
		      : contains(item, search)
		  })
		}

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} sortKey
		 * @param {String} reverseKey
		 */

		exports.orderBy = function (arr, sortKey, reverseKey) {
		  var key =
		    _.stripQuotes(sortKey) ||
		    this.$get(sortKey)
		  if (!key) {
		    return arr
		  }
		  var order = 1
		  if (reverseKey) {
		    if (reverseKey === '-1') {
		      order = -1
		    } else if (reverseKey.charCodeAt(0) === 0x21) { // !
		      reverseKey = reverseKey.slice(1)
		      order = this.$get(reverseKey) ? 1 : -1
		    } else {
		      order = this.$get(reverseKey) ? -1 : 1
		    }
		  }
		  // sort on a copy to avoid mutating original array
		  return arr.slice().sort(function (a, b) {
		    a = _.isObject(a) ? Path.get(a, key) : a
		    b = _.isObject(b) ? Path.get(b, key) : b
		    return a === b ? 0 : a > b ? order : -order
		  })
		}

		/**
		 * String contain helper
		 *
		 * @param {*} val
		 * @param {String} search
		 */

		function contains (val, search) {
		  if (_.isObject(val)) {
		    for (var key in val) {
		      if (contains(val[key], search)) {
		        return true
		      }
		    }
		  } else if (val != null) {
		    return val.toString().toLowerCase().indexOf(search) > -1
		  }
		}

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var config = __webpack_require__(15)
		var Dep = __webpack_require__(23)
		var arrayMethods = __webpack_require__(54)
		var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
		__webpack_require__(55)

		var uid = 0

		/**
		 * Type enums
		 */

		var ARRAY  = 0
		var OBJECT = 1

		/**
		 * Augment an target Object or Array by intercepting
		 * the prototype chain using __proto__
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function protoAugment (target, src) {
		  target.__proto__ = src
		}

		/**
		 * Augment an target Object or Array by defining
		 * hidden properties.
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function copyAugment (target, src, keys) {
		  var i = keys.length
		  var key
		  while (i--) {
		    key = keys[i]
		    _.define(target, key, src[key])
		  }
		}

		/**
		 * Observer class that are attached to each observed
		 * object. Once attached, the observer converts target
		 * object's property keys into getter/setters that
		 * collect dependencies and dispatches updates.
		 *
		 * @param {Array|Object} value
		 * @param {Number} type
		 * @constructor
		 */

		function Observer (value, type) {
		  this.id = ++uid
		  this.value = value
		  this.active = true
		  this.deps = []
		  _.define(value, '__ob__', this)
		  if (type === ARRAY) {
		    var augment = config.proto && _.hasProto
		      ? protoAugment
		      : copyAugment
		    augment(value, arrayMethods, arrayKeys)
		    this.observeArray(value)
		  } else if (type === OBJECT) {
		    this.walk(value)
		  }
		}

		Observer.target = null

		var p = Observer.prototype

		/**
		 * Attempt to create an observer instance for a value,
		 * returns the new observer if successfully observed,
		 * or the existing observer if the value already has one.
		 *
		 * @param {*} value
		 * @return {Observer|undefined}
		 * @static
		 */

		Observer.create = function (value) {
		  if (
		    value &&
		    value.hasOwnProperty('__ob__') &&
		    value.__ob__ instanceof Observer
		  ) {
		    return value.__ob__
		  } else if (_.isArray(value)) {
		    return new Observer(value, ARRAY)
		  } else if (
		    _.isPlainObject(value) &&
		    !value._isVue // avoid Vue instance
		  ) {
		    return new Observer(value, OBJECT)
		  }
		}

		/**
		 * Walk through each property and convert them into
		 * getter/setters. This method should only be called when
		 * value type is Object. Properties prefixed with `$` or `_`
		 * and accessor properties are ignored.
		 *
		 * @param {Object} obj
		 */

		p.walk = function (obj) {
		  var keys = Object.keys(obj)
		  var i = keys.length
		  var key, prefix
		  while (i--) {
		    key = keys[i]
		    prefix = key.charCodeAt(0)
		    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
		      this.convert(key, obj[key])
		    }
		  }
		}

		/**
		 * Try to carete an observer for a child value,
		 * and if value is array, link dep to the array.
		 *
		 * @param {*} val
		 * @return {Dep|undefined}
		 */

		p.observe = function (val) {
		  return Observer.create(val)
		}

		/**
		 * Observe a list of Array items.
		 *
		 * @param {Array} items
		 */

		p.observeArray = function (items) {
		  var i = items.length
		  while (i--) {
		    this.observe(items[i])
		  }
		}

		/**
		 * Convert a property into getter/setter so we can emit
		 * the events when the property is accessed/changed.
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		p.convert = function (key, val) {
		  var ob = this
		  var childOb = ob.observe(val)
		  var dep = new Dep()
		  if (childOb) {
		    childOb.deps.push(dep)
		  }
		  Object.defineProperty(ob.value, key, {
		    enumerable: true,
		    configurable: true,
		    get: function () {
		      // Observer.target is a watcher whose getter is
		      // currently being evaluated.
		      if (ob.active && Observer.target) {
		        Observer.target.addDep(dep)
		      }
		      return val
		    },
		    set: function (newVal) {
		      if (newVal === val) return
		      // remove dep from old value
		      var oldChildOb = val && val.__ob__
		      if (oldChildOb) {
		        var oldDeps = oldChildOb.deps
		        oldDeps.splice(oldDeps.indexOf(dep), 1)
		      }
		      val = newVal
		      // add dep to new value
		      var newChildOb = ob.observe(newVal)
		      if (newChildOb) {
		        newChildOb.deps.push(dep)
		      }
		      dep.notify()
		    }
		  })
		}

		/**
		 * Notify change on all self deps on an observer.
		 * This is called when a mutable value mutates. e.g.
		 * when an Array's mutating methods are called, or an
		 * Object's $add/$delete are called.
		 */

		p.notify = function () {
		  var deps = this.deps
		  for (var i = 0, l = deps.length; i < l; i++) {
		    deps[i].notify()
		  }
		}

		/**
		 * Add an owner vm, so that when $add/$delete mutations
		 * happen we can notify owner vms to proxy the keys and
		 * digest the watchers. This is only called when the object
		 * is observed as an instance's root $data.
		 *
		 * @param {Vue} vm
		 */

		p.addVm = function (vm) {
		  (this.vms = this.vms || []).push(vm)
		}

		/**
		 * Remove an owner vm. This is called when the object is
		 * swapped out as an instance's $data object.
		 *
		 * @param {Vue} vm
		 */

		p.removeVm = function (vm) {
		  this.vms.splice(this.vms.indexOf(vm), 1)
		}

		module.exports = Observer


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var applyCSSTransition = __webpack_require__(56)
		var applyJSTransition = __webpack_require__(57)

		/**
		 * Append with transition.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.append = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * InsertBefore with transition.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.before = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    _.before(el, target)
		  }, vm, cb)
		}

		/**
		 * Remove with transition.
		 *
		 * @oaram {Element} el
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.remove = function (el, vm, cb) {
		  apply(el, -1, function () {
		    _.remove(el)
		  }, vm, cb)
		}

		/**
		 * Remove by appending to another parent with transition.
		 * This is only used in block operations.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.removeThenAppend = function (el, target, vm, cb) {
		  apply(el, -1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * Append the childNodes of a fragment to target.
		 *
		 * @param {DocumentFragment} block
		 * @param {Node} target
		 * @param {Vue} vm
		 */

		exports.blockAppend = function (block, target, vm) {
		  var nodes = _.toArray(block.childNodes)
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    exports.before(nodes[i], target, vm)
		  }
		}

		/**
		 * Remove a block of nodes between two edge nodes.
		 *
		 * @param {Node} start
		 * @param {Node} end
		 * @param {Vue} vm
		 */

		exports.blockRemove = function (start, end, vm) {
		  var node = start.nextSibling
		  var next
		  while (node !== end) {
		    next = node.nextSibling
		    exports.remove(node, vm)
		    node = next
		  }
		}

		/**
		 * Apply transitions with an operation callback.
		 *
		 * @oaram {Element} el
		 * @param {Number} direction
		 *                  1: enter
		 *                 -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		var apply = exports.apply = function (el, direction, op, vm, cb) {
		  var transData = el.__v_trans
		  if (
		    !transData ||
		    !vm._isCompiled ||
		    // if the vm is being manipulated by a parent directive
		    // during the parent's compilation phase, skip the
		    // animation.
		    (vm.$parent && !vm.$parent._isCompiled)
		  ) {
		    op()
		    if (cb) cb()
		    return
		  }
		  // determine the transition type on the element
		  var jsTransition = transData.fns
		  if (jsTransition) {
		    // js
		    applyJSTransition(
		      el,
		      direction,
		      op,
		      transData,
		      jsTransition,
		      vm,
		      cb
		    )
		  } else if (_.transitionEndEvent) {
		    // css
		    applyCSSTransition(
		      el,
		      direction,
		      op,
		      transData,
		      cb
		    )
		  } else {
		    // not applicable
		    op()
		    if (cb) cb()
		  }
		}

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		var handlers = {
		  _default: __webpack_require__(58),
		  radio: __webpack_require__(59),
		  select: __webpack_require__(60),
		  checkbox: __webpack_require__(61)
		}

		module.exports = {

		  priority: 800,
		  twoWay: true,
		  handlers: handlers,

		  /**
		   * Possible elements:
		   *   <select>
		   *   <textarea>
		   *   <input type="*">
		   *     - text
		   *     - checkbox
		   *     - radio
		   *     - number
		   *     - TODO: more types may be supplied as a plugin
		   */

		  bind: function () {
		    // friendly warning...
		    var filters = this.filters
		    if (filters && filters.read && !filters.write) {
		      _.warn(
		        'It seems you are using a read-only filter with ' +
		        'v-model. You might want to use a two-way filter ' +
		        'to ensure correct behavior.'
		      )
		    }
		    var el = this.el
		    var tag = el.tagName
		    var handler
		    if (tag === 'INPUT') {
		      handler = handlers[el.type] || handlers._default
		    } else if (tag === 'SELECT') {
		      handler = handlers.select
		    } else if (tag === 'TEXTAREA') {
		      handler = handlers._default
		    } else {
		      _.warn("v-model doesn't support element type: " + tag)
		      return
		    }
		    handler.bind.call(this)
		    this.update = handler.update
		    this.unbind = handler.unbind
		  }

		}

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * A doubly linked list-based Least Recently Used (LRU)
		 * cache. Will keep most recently used items while
		 * discarding least recently used items when its limit is
		 * reached. This is a bare-bone version of
		 * Rasmus Andersson's js-lru:
		 *
		 *   https://github.com/rsms/js-lru
		 *
		 * @param {Number} limit
		 * @constructor
		 */

		function Cache (limit) {
		  this.size = 0
		  this.limit = limit
		  this.head = this.tail = undefined
		  this._keymap = {}
		}

		var p = Cache.prototype

		/**
		 * Put <value> into the cache associated with <key>.
		 * Returns the entry which was removed to make room for
		 * the new entry. Otherwise undefined is returned.
		 * (i.e. if there was enough room already).
		 *
		 * @param {String} key
		 * @param {*} value
		 * @return {Entry|undefined}
		 */

		p.put = function (key, value) {
		  var entry = {
		    key:key,
		    value:value
		  }
		  this._keymap[key] = entry
		  if (this.tail) {
		    this.tail.newer = entry
		    entry.older = this.tail
		  } else {
		    this.head = entry
		  }
		  this.tail = entry
		  if (this.size === this.limit) {
		    return this.shift()
		  } else {
		    this.size++
		  }
		}

		/**
		 * Purge the least recently used (oldest) entry from the
		 * cache. Returns the removed entry or undefined if the
		 * cache was empty.
		 */

		p.shift = function () {
		  var entry = this.head
		  if (entry) {
		    this.head = this.head.newer
		    this.head.older = undefined
		    entry.newer = entry.older = undefined
		    this._keymap[entry.key] = undefined
		  }
		  return entry
		}

		/**
		 * Get and register recent use of <key>. Returns the value
		 * associated with <key> or undefined if not in cache.
		 *
		 * @param {String} key
		 * @param {Boolean} returnEntry
		 * @return {Entry|*}
		 */

		p.get = function (key, returnEntry) {
		  var entry = this._keymap[key]
		  if (entry === undefined) return
		  if (entry === this.tail) {
		    return returnEntry
		      ? entry
		      : entry.value
		  }
		  // HEAD--------------TAIL
		  //   <.older   .newer>
		  //  <--- add direction --
		  //   A  B  C  <D>  E
		  if (entry.newer) {
		    if (entry === this.head) {
		      this.head = entry.newer
		    }
		    entry.newer.older = entry.older // C <-- E.
		  }
		  if (entry.older) {
		    entry.older.newer = entry.newer // C. --> E
		  }
		  entry.newer = undefined // D --x
		  entry.older = this.tail // D. --> E
		  if (this.tail) {
		    this.tail.newer = entry // E. <-- D
		  }
		  this.tail = entry
		  return returnEntry
		    ? entry
		    : entry.value
		}

		module.exports = Cache

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var MAX_UPDATE_COUNT = 10

		// we have two separate queues: one for directive updates
		// and one for user watcher registered via $watch().
		// we want to guarantee directive updates to be called
		// before user watchers so that when user watchers are
		// triggered, the DOM would have already been in updated
		// state.
		var queue = []
		var userQueue = []
		var has = {}
		var waiting = false
		var flushing = false

		/**
		 * Reset the batcher's state.
		 */

		function reset () {
		  queue = []
		  userQueue = []
		  has = {}
		  waiting = false
		  flushing = false
		}

		/**
		 * Flush both queues and run the jobs.
		 */

		function flush () {
		  flushing = true
		  run(queue)
		  run(userQueue)
		  reset()
		}

		/**
		 * Run the jobs in a single queue.
		 *
		 * @param {Array} queue
		 */

		function run (queue) {
		  // do not cache length because more jobs might be pushed
		  // as we run existing jobs
		  for (var i = 0; i < queue.length; i++) {
		    queue[i].run()
		  }
		}

		/**
		 * Push a job into the job queue.
		 * Jobs with duplicate IDs will be skipped unless it's
		 * pushed when the queue is being flushed.
		 *
		 * @param {Object} job
		 *   properties:
		 *   - {String|Number} id
		 *   - {Function}      run
		 */

		exports.push = function (job) {
		  var id = job.id
		  if (!id || !has[id] || flushing) {
		    if (!has[id]) {
		      has[id] = 1
		    } else {
		      has[id]++
		      // detect possible infinite update loops
		      if (has[id] > MAX_UPDATE_COUNT) {
		        _.warn(
		          'You may have an infinite update loop for the ' +
		          'watcher with expression: "' + job.expression + '".'
		        )
		        return
		      }
		    }
		    // A user watcher callback could trigger another
		    // directive update during the flushing; at that time
		    // the directive queue would already have been run, so
		    // we call that update immediately as it is pushed.
		    if (flushing && !job.user) {
		      job.run()
		      return
		    }
		    ;(job.user ? userQueue : queue).push(job)
		    if (!waiting) {
		      waiting = true
		      _.nextTick(flush)
		    }
		  }
		}

	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var arrayProto = Array.prototype
		var arrayMethods = Object.create(arrayProto)

		/**
		 * Intercept mutating methods and emit events
		 */

		;[
		  'push',
		  'pop',
		  'shift',
		  'unshift',
		  'splice',
		  'sort',
		  'reverse'
		]
		.forEach(function (method) {
		  // cache original method
		  var original = arrayProto[method]
		  _.define(arrayMethods, method, function mutator () {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i]
		    }
		    var result = original.apply(this, args)
		    var ob = this.__ob__
		    var inserted
		    switch (method) {
		      case 'push':
		        inserted = args
		        break
		      case 'unshift':
		        inserted = args
		        break
		      case 'splice':
		        inserted = args.slice(2)
		        break
		    }
		    if (inserted) ob.observeArray(inserted)
		    // notify change
		    ob.notify()
		    return result
		  })
		})

		/**
		 * Swap the element at the given index with a new value
		 * and emits corresponding event.
		 *
		 * @param {Number} index
		 * @param {*} val
		 * @return {*} - replaced element
		 */

		_.define(
		  arrayProto,
		  '$set',
		  function $set (index, val) {
		    if (index >= this.length) {
		      this.length = index + 1
		    }
		    return this.splice(index, 1, val)[0]
		  }
		)

		/**
		 * Convenience method to remove the element at given index.
		 *
		 * @param {Number} index
		 * @param {*} val
		 */

		_.define(
		  arrayProto,
		  '$remove',
		  function $remove (index) {
		    if (typeof index !== 'number') {
		      index = this.indexOf(index)
		    }
		    if (index > -1) {
		      return this.splice(index, 1)[0]
		    }
		  }
		)

		module.exports = arrayMethods

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var objProto = Object.prototype

		/**
		 * Add a new property to an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */

		_.define(
		  objProto,
		  '$add',
		  function $add (key, val) {
		    if (this.hasOwnProperty(key)) return
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      this[key] = val
		      return
		    }
		    ob.convert(key, val)
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._proxy(key)
		        vm._digest()
		      }
		    } else {
		      ob.notify()
		    }
		  }
		)

		/**
		 * Deletes a property from an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @public
		 */

		_.define(
		  objProto,
		  '$delete',
		  function $delete (key) {
		    if (!this.hasOwnProperty(key)) return
		    delete this[key]
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      return
		    }
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._unproxy(key)
		        vm._digest()
		      }
		    } else {
		      ob.notify()
		    }
		  }
		)

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var addClass = _.addClass
		var removeClass = _.removeClass
		var transDurationProp = _.transitionProp + 'Duration'
		var animDurationProp = _.animationProp + 'Duration'

		var queue = []
		var queued = false

		/**
		 * Push a job into the transition queue, which is to be
		 * executed on next frame.
		 *
		 * @param {Element} el    - target element
		 * @param {Number} dir    - 1: enter, -1: leave
		 * @param {Function} op   - the actual dom operation
		 * @param {String} cls    - the className to remove when the
		 *                          transition is done.
		 * @param {Function} [cb] - user supplied callback.
		 */

		function push (el, dir, op, cls, cb) {
		  queue.push({
		    el  : el,
		    dir : dir,
		    cb  : cb,
		    cls : cls,
		    op  : op
		  })
		  if (!queued) {
		    queued = true
		    _.nextTick(flush)
		  }
		}

		/**
		 * Flush the queue, and do one forced reflow before
		 * triggering transitions.
		 */

		function flush () {
		  /* jshint unused: false */
		  var f = document.documentElement.offsetHeight
		  queue.forEach(run)
		  queue = []
		  queued = false
		}

		/**
		 * Run a transition job.
		 *
		 * @param {Object} job
		 */

		function run (job) {

		  var el = job.el
		  var data = el.__v_trans
		  var cls = job.cls
		  var cb = job.cb
		  var op = job.op
		  var transitionType = getTransitionType(el, data, cls)

		  if (job.dir > 0) { // ENTER
		    if (transitionType === 1) {
		      // trigger transition by removing enter class
		      removeClass(el, cls)
		      // only need to listen for transitionend if there's
		      // a user callback
		      if (cb) setupTransitionCb(_.transitionEndEvent)
		    } else if (transitionType === 2) {
		      // animations are triggered when class is added
		      // so we just listen for animationend to remove it.
		      setupTransitionCb(_.animationEndEvent, function () {
		        removeClass(el, cls)
		      })
		    } else {
		      // no transition applicable
		      removeClass(el, cls)
		      if (cb) cb()
		    }
		  } else { // LEAVE
		    if (transitionType) {
		      // leave transitions/animations are both triggered
		      // by adding the class, just remove it on end event.
		      var event = transitionType === 1
		        ? _.transitionEndEvent
		        : _.animationEndEvent
		      setupTransitionCb(event, function () {
		        op()
		        removeClass(el, cls)
		      })
		    } else {
		      op()
		      removeClass(el, cls)
		      if (cb) cb()
		    }
		  }

		  /**
		   * Set up a transition end callback, store the callback
		   * on the element's __v_trans data object, so we can
		   * clean it up if another transition is triggered before
		   * the callback is fired.
		   *
		   * @param {String} event
		   * @param {Function} [cleanupFn]
		   */

		  function setupTransitionCb (event, cleanupFn) {
		    data.event = event
		    var onEnd = data.callback = function transitionCb (e) {
		      if (e.target === el) {
		        _.off(el, event, onEnd)
		        data.event = data.callback = null
		        if (cleanupFn) cleanupFn()
		        if (cb) cb()
		      }
		    }
		    _.on(el, event, onEnd)
		  }
		}

		/**
		 * Get an element's transition type based on the
		 * calculated styles
		 *
		 * @param {Element} el
		 * @param {Object} data
		 * @param {String} className
		 * @return {Number}
		 *         1 - transition
		 *         2 - animation
		 */

		function getTransitionType (el, data, className) {
		  var type = data.cache && data.cache[className]
		  if (type) return type
		  var inlineStyles = el.style
		  var computedStyles = window.getComputedStyle(el)
		  var transDuration =
		    inlineStyles[transDurationProp] ||
		    computedStyles[transDurationProp]
		  if (transDuration && transDuration !== '0s') {
		    type = 1
		  } else {
		    var animDuration =
		      inlineStyles[animDurationProp] ||
		      computedStyles[animDurationProp]
		    if (animDuration && animDuration !== '0s') {
		      type = 2
		    }
		  }
		  if (type) {
		    if (!data.cache) data.cache = {}
		    data.cache[className] = type
		  }
		  return type
		}

		/**
		 * Apply CSS transition to an element.
		 *
		 * @param {Element} el
		 * @param {Number} direction - 1: enter, -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Object} data - target element's transition data
		 */

		module.exports = function (el, direction, op, data, cb) {
		  var prefix = data.id || 'v'
		  var enterClass = prefix + '-enter'
		  var leaveClass = prefix + '-leave'
		  // clean up potential previous unfinished transition
		  if (data.callback) {
		    _.off(el, data.event, data.callback)
		    removeClass(el, enterClass)
		    removeClass(el, leaveClass)
		    data.event = data.callback = null
		  }
		  if (direction > 0) { // enter
		    addClass(el, enterClass)
		    op()
		    push(el, direction, null, enterClass, cb)
		  } else { // leave
		    addClass(el, leaveClass)
		    push(el, direction, op, leaveClass, cb)
		  }
		}

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Apply JavaScript enter/leave functions.
		 *
		 * @param {Element} el
		 * @param {Number} direction - 1: enter, -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Object} data - target element's transition data
		 * @param {Object} def - transition definition object
		 * @param {Vue} vm - the owner vm of the element
		 * @param {Function} [cb]
		 */

		module.exports = function (el, direction, op, data, def, vm, cb) {
		  // if the element is the root of an instance,
		  // use that instance as the transition function context
		  vm = el.__vue__ || vm
		  if (data.cancel) {
		    data.cancel()
		    data.cancel = null
		  }
		  if (direction > 0) { // enter
		    if (def.beforeEnter) {
		      def.beforeEnter.call(vm, el)
		    }
		    op()
		    if (def.enter) {
		      data.cancel = def.enter.call(vm, el, function () {
		        data.cancel = null
		        if (cb) cb()
		      })
		    } else if (cb) {
		      cb()
		    }
		  } else { // leave
		    if (def.leave) {
		      data.cancel = def.leave.call(vm, el, function () {
		        data.cancel = null
		        op()
		        if (cb) cb()
		      })
		    } else {
		      op()
		      if (cb) cb()
		    }
		  }
		}

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el

		    // check params
		    // - lazy: update model on "change" instead of "input"
		    var lazy = this._checkParam('lazy') != null
		    // - number: cast value into number when updating model.
		    var number = this._checkParam('number') != null
		    // - debounce: debounce the input listener
		    var debounce = parseInt(this._checkParam('debounce'), 10)

		    // handle composition events.
		    // http://blog.evanyou.me/2014/01/03/composition-event/
		    var cpLocked = false
		    this.cpLock = function () {
		      cpLocked = true
		    }
		    this.cpUnlock = function () {
		      cpLocked = false
		      // in IE11 the "compositionend" event fires AFTER
		      // the "input" event, so the input handler is blocked
		      // at the end... have to call it here.
		      set()
		    }
		    _.on(el,'compositionstart', this.cpLock)
		    _.on(el,'compositionend', this.cpUnlock)

		    // shared setter
		    function set () {
		      self.set(
		        number ? _.toNumber(el.value) : el.value,
		        true
		      )
		    }

		    // if the directive has filters, we need to
		    // record cursor position and restore it after updating
		    // the input with the filtered value.
		    // also force update for type="range" inputs to enable
		    // "lock in range" (see #506)
		    var hasReadFilter = this.filters && this.filters.read
		    this.listener = hasReadFilter || el.type === 'range'
		      ? function textInputListener () {
		          if (cpLocked) return
		          var charsOffset
		          // some HTML5 input types throw error here
		          try {
		            // record how many chars from the end of input
		            // the cursor was at
		            charsOffset = el.value.length - el.selectionStart
		          } catch (e) {}
		          // Fix IE10/11 infinite update cycle
		          // https://github.com/yyx990803/vue/issues/592
		          /* istanbul ignore if */
		          if (charsOffset < 0) {
		            return
		          }
		          set()
		          _.nextTick(function () {
		            // force a value update, because in
		            // certain cases the write filters output the
		            // same result for different input values, and
		            // the Observer set events won't be triggered.
		            var newVal = self._watcher.value
		            self.update(newVal)
		            if (charsOffset != null) {
		              var cursorPos =
		                _.toString(newVal).length - charsOffset
		              el.setSelectionRange(cursorPos, cursorPos)
		            }
		          })
		        }
		      : function textInputListener () {
		          if (cpLocked) return
		          set()
		        }

		    if (debounce) {
		      this.listener = _.debounce(this.listener, debounce)
		    }
		    this.event = lazy ? 'change' : 'input'
		    // Support jQuery events, since jQuery.trigger() doesn't
		    // trigger native events in some cases and some plugins
		    // rely on $.trigger()
		    // 
		    // We want to make sure if a listener is attached using
		    // jQuery, it is also removed with jQuery, that's why
		    // we do the check for each directive instance and
		    // store that check result on itself. This also allows
		    // easier test coverage control by unsetting the global
		    // jQuery variable in tests.
		    this.hasjQuery = typeof jQuery === 'function'
		    if (this.hasjQuery) {
		      jQuery(el).on(this.event, this.listener)
		    } else {
		      _.on(el, this.event, this.listener)
		    }

		    // IE9 doesn't fire input event on backspace/del/cut
		    if (!lazy && _.isIE9) {
		      this.onCut = function () {
		        _.nextTick(self.listener)
		      }
		      this.onDel = function (e) {
		        if (e.keyCode === 46 || e.keyCode === 8) {
		          self.listener()
		        }
		      }
		      _.on(el, 'cut', this.onCut)
		      _.on(el, 'keyup', this.onDel)
		    }

		    // set initial value if present
		    if (
		      el.hasAttribute('value') ||
		      (el.tagName === 'TEXTAREA' && el.value.trim())
		    ) {
		      this._initValue = number
		        ? _.toNumber(el.value)
		        : el.value
		    }
		  },

		  update: function (value) {
		    this.el.value = _.toString(value)
		  },

		  unbind: function () {
		    var el = this.el
		    if (this.hasjQuery) {
		      jQuery(el).off(this.event, this.listener)
		    } else {
		      _.off(el, this.event, this.listener)
		    }
		    _.off(el,'compositionstart', this.cpLock)
		    _.off(el,'compositionend', this.cpUnlock)
		    if (this.onCut) {
		      _.off(el,'cut', this.onCut)
		      _.off(el,'keyup', this.onDel)
		    }
		  }

		}

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    this.listener = function () {
		      self.set(el.value, true)
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = el.value
		    }
		  },

		  update: function (value) {
		    /* jshint eqeqeq: false */
		    this.el.checked = value == this.el.value
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }

		}

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)
		var Watcher = __webpack_require__(25)
		var dirParser = __webpack_require__(21)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    // check options param
		    var optionsParam = this._checkParam('options')
		    if (optionsParam) {
		      initOptions.call(this, optionsParam)
		    }
		    this.number = this._checkParam('number') != null
		    this.multiple = el.hasAttribute('multiple')
		    this.listener = function () {
		      var value = self.multiple
		        ? getMultiValue(el)
		        : el.value
		      value = self.number
		        ? _.isArray(value)
		          ? value.map(_.toNumber)
		          : _.toNumber(value)
		        : value
		      self.set(value, true)
		    }
		    _.on(el, 'change', this.listener)
		    checkInitialValue.call(this)
		  },

		  update: function (value) {
		    /* jshint eqeqeq: false */
		    var el = this.el
		    el.selectedIndex = -1
		    var multi = this.multiple && _.isArray(value)
		    var options = el.options
		    var i = options.length
		    var option
		    while (i--) {
		      option = options[i]
		      option.selected = multi
		        ? indexOf(value, option.value) > -1
		        : value == option.value
		    }
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		    if (this.optionWatcher) {
		      this.optionWatcher.teardown()
		    }
		  }

		}

		/**
		 * Initialize the option list from the param.
		 *
		 * @param {String} expression
		 */

		function initOptions (expression) {
		  var self = this
		  var descriptor = dirParser.parse(expression)[0]
		  function optionUpdateWatcher (value) {
		    if (_.isArray(value)) {
		      self.el.innerHTML = ''
		      buildOptions(self.el, value)
		      if (self._watcher) {
		        self.update(self._watcher.value)
		      }
		    } else {
		      _.warn('Invalid options value for v-model: ' + value)
		    }
		  }
		  this.optionWatcher = new Watcher(
		    this.vm,
		    descriptor.expression,
		    optionUpdateWatcher,
		    {
		      deep: true,
		      filters: _.resolveFilters(this.vm, descriptor.filters)
		    }
		  )
		  // update with initial value
		  optionUpdateWatcher(this.optionWatcher.value)
		}

		/**
		 * Build up option elements. IE9 doesn't create options
		 * when setting innerHTML on <select> elements, so we have
		 * to use DOM API here.
		 *
		 * @param {Element} parent - a <select> or an <optgroup>
		 * @param {Array} options
		 */

		function buildOptions (parent, options) {
		  var op, el
		  for (var i = 0, l = options.length; i < l; i++) {
		    op = options[i]
		    if (!op.options) {
		      el = document.createElement('option')
		      if (typeof op === 'string') {
		        el.text = el.value = op
		      } else {
		        el.text = op.text
		        el.value = op.value
		      }
		    } else {
		      el = document.createElement('optgroup')
		      el.label = op.label
		      buildOptions(el, op.options)
		    }
		    parent.appendChild(el)
		  }
		}

		/**
		 * Check the initial value for selected options.
		 */

		function checkInitialValue () {
		  var initValue
		  var options = this.el.options
		  for (var i = 0, l = options.length; i < l; i++) {
		    if (options[i].hasAttribute('selected')) {
		      if (this.multiple) {
		        (initValue || (initValue = []))
		          .push(options[i].value)
		      } else {
		        initValue = options[i].value
		      }
		    }
		  }
		  if (typeof initValue !== 'undefined') {
		    this._initValue = this.number
		      ? _.toNumber(initValue)
		      : initValue
		  }
		}

		/**
		 * Helper to extract a value array for select[multiple]
		 *
		 * @param {SelectElement} el
		 * @return {Array}
		 */

		function getMultiValue (el) {
		  return Array.prototype.filter
		    .call(el.options, filterSelected)
		    .map(getOptionValue)
		}

		function filterSelected (op) {
		  return op.selected
		}

		function getOptionValue (op) {
		  return op.value || op.text
		}

		/**
		 * Native Array.indexOf uses strict equal, but in this
		 * case we need to match string/numbers with soft equal.
		 *
		 * @param {Array} arr
		 * @param {*} val
		 */

		function indexOf (arr, val) {
		  /* jshint eqeqeq: false */
		  var i = arr.length
		  while (i--) {
		    if (arr[i] == val) return i
		  }
		  return -1
		}

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(11)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    this.listener = function () {
		      self.set(el.checked, true)
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = el.checked
		    }
		  },

		  update: function (value) {
		    this.el.checked = !!value
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }

		}

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)(".json-viewer{position:absolute;left:500px;top:0;width:500px}");
	var __vue_template__ = "<div v-component=\"toolbar\" v-with=\"page: editor.currentPage\"></div>\n<div v-component=\"stage\" v-with=\"page: editor.currentPage\"></div>\n<div v-component=\"page-navigitor\" v-with=\"book: editor.book, currentPage: editor.currentPage\"></div>\n<pre class=\"json-viewer\" v-html=\"bookStr\"></pre>";
	var beautify = __webpack_require__(9).js_beautify

	window.book = __webpack_require__(5).book

	module.exports = {
	  data: function () {
	    return {
	      editor: __webpack_require__(5)
	    }
	  },
	  computed: {
	    bookStr: function () {
	      return beautify(JSON.stringify(this.editor.book), { indent_size: 2 })
	    }
	  },
	  components: {
	    toolbar: __webpack_require__(6),
	    stage: __webpack_require__(7),
	    'page-navigitor': __webpack_require__(8)
	  }
	}
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var inserted = {};

	module.exports = function (css, options) {
	    if (inserted[css]) return;
	    inserted[css] = true;
	    
	    var elem = document.createElement('style');
	    elem.setAttribute('type', 'text/css');

	    if ('textContent' in elem) {
	      elem.textContent = css;
	    } else {
	      elem.styleSheet.cssText = css;
	    }
	    
	    var head = document.getElementsByTagName('head')[0];
	    if (options && options.prepend) {
	        head.insertBefore(elem, head.childNodes[0]);
	    } else {
	        head.appendChild(elem);
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Book = __webpack_require__(10)

	var editor = {}

	editor.book = new Book({
	  pages: [
	    {
	      num: '1',
	      boxes: []
	    }
	  ]
	})

	editor.currentPage = editor.book.pages[0]

	module.exports = editor

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_template__ = "<button v-on=\"click: addImgbox\">添加图片框</button>";
	var editor = __webpack_require__(5)

	module.exports = {
	  methods: {
	    addImgbox: function (e) {
	      e.preventDefault()

	      this.page.addImgbox()

	      console.log(this.page)
	    }
	  }
	}
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)(".stage{width:400px;height:400px;box-shadow:0 1px 6px #aaa;position:relative;margin-top:10px;margin-bottom:10px}.stage .imgbox{position:absolute;width:50px;height:50px;background-color:#aaa}");
	var __vue_template__ = "<div class=\"stage\">\n  <div v-component=\"{{type}}\" v-repeat=\"page.boxes\"></div>\n</div>";
	module.exports = {
	  components: {
	    imgbox: __webpack_require__(11)
	  }
	}
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4)(".page-navigitor-btn{margin-right:3px}.page-navigitor-btn.current{font-weight:700}");
	var __vue_template__ = "<button class=\"page-navigitor-btn\" v-repeat=\"page: book.pages\" v-class=\"current: currentPage.num === page.num\" v-on=\"click: currentPage = page\">{{page.num}}</button>\n<button v-on=\"click: addPage\">添加页</button>";
	module.exports = {
	  methods: {
	    addPage: function (e) {
	      e.preventDefault()

	      this.book.addPage()
	    }
	  }
	}
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	The following batches are equivalent:

	var beautify_js = require('js-beautify');
	var beautify_js = require('js-beautify').js;
	var beautify_js = require('js-beautify').js_beautify;

	var beautify_css = require('js-beautify').css;
	var beautify_css = require('js-beautify').css_beautify;

	var beautify_html = require('js-beautify').html;
	var beautify_html = require('js-beautify').html_beautify;

	All methods returned accept two arguments, the source string and an options object.
	**/

	function get_beautify(js_beautify, css_beautify, html_beautify) {
	    // the default is js
	    var beautify = function (src, config) {
	        return js_beautify.js_beautify(src, config);
	    };

	    // short aliases
	    beautify.js   = js_beautify.js_beautify;
	    beautify.css  = css_beautify.css_beautify;
	    beautify.html = html_beautify.html_beautify;

	    // legacy aliases
	    beautify.js_beautify   = js_beautify.js_beautify;
	    beautify.css_beautify  = css_beautify.css_beautify;
	    beautify.html_beautify = html_beautify.html_beautify;

	    return beautify;
	}

	if (true) {
	    // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(12),
	        __webpack_require__(13),
	        __webpack_require__(14)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function(js_beautify, css_beautify, html_beautify) {
	        return get_beautify(js_beautify, css_beautify, html_beautify);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	    (function(mod) {
	        var js_beautify = require('./lib/beautify');
	        var css_beautify = require('./lib/beautify-css');
	        var html_beautify = require('./lib/beautify-html');

	        mod.exports = get_beautify(js_beautify, css_beautify, html_beautify);

	    })(module);
	}



/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	function Book(bookData) {
	  this.pages = bookData.pages.map(function (pageData) {
	    return new Page(pageData)
	  })
	}

	Book.prototype.addPage = function (pageData) {
	  if (!pageData)
	    pageData = {
	      num: (parseFloat(this.pages[this.pages.length - 1].num) + 1).toString(),
	      boxes: []
	    }

	  this.pages.push(new Page(pageData))
	}

	function Page(pageData) {
	  this.num = pageData.num
	  this.boxes = pageData.boxes.map(function (boxData) {
	    return new ({
	      imgbox: Imgbox
	    }[boxData.type])(boxData)
	  })
	}

	Page.prototype.addImgbox = function (imgboxData) {
	  if (!imgboxData)
	    imgboxData = {
	      x: 10,
	      y: 10
	    }

	  this.boxes.push(new Imgbox(imgboxData))
	}

	function Imgbox(imgboxData) {
	  this.type = 'imgbox'
	  this.x = imgboxData.x
	  this.y = imgboxData.y
	}

	function Box() {
	}

	module.exports = Book

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_template__ = "<div class=\"box imgbox\" v-on=\"\n  mousedown: preventDefault,\n  k.dragstart: ondragstart,\n  k.dragSync: ondrag\n\" v-style=\"transform: 'translate(' + x + 'px,' + y + 'px)'\"></div>";
	var BoxVue = __webpack_require__(15)

	module.exports = BoxVue.extend({
	  methods: {
	    preventDefault: function (e) {
	      e.preventDefault()
	    },
	    ondragstart: function (e) {
	      this.dragstartX = this.x
	      this.dragstartY = this.y
	    },
	    ondrag: function (e) {
	      var x = this.dragstartX + e.deltaX
	      var y = this.dragstartY + e.deltaY

	      if (x < 0)
	        x = 0
	      else if (x > 300)
	        x = 300

	      if (y < 0)
	        y = 0
	      else if (y > 300)
	        y = 300

	      this.x = x
	      this.y = y
	    }
	  }
	})
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.

	 JS Beautifier
	---------------


	  Written by Einar Lielmanis, <einar@jsbeautifier.org>
	      http://jsbeautifier.org/

	  Originally converted to javascript by Vital, <vital76@gmail.com>
	  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
	  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@gmail.com>


	  Usage:
	    js_beautify(js_source_text);
	    js_beautify(js_source_text, options);

	  The options are:
	    indent_size (default 4)          - indentation size,
	    indent_char (default space)      - character to indent with,
	    preserve_newlines (default true) - whether existing line breaks should be preserved,
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

	    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

	            jslint_happy        !jslint_happy
	            ---------------------------------
	            function ()         function()

	            switch () {         switch() {
	            case 1:               case 1:
	              break;                break;
	            }                   }

	    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
	          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.

	    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

	    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

	    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
	          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
	                be preserved if it were present.

	    end_with_newline (default false)  - end output with a newline


	    e.g

	    js_beautify(js_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t'
	    });

	*/

	(function() {

	    var acorn = {};
	    (function (exports) {
	      // This section of code is taken from acorn.
	      //
	      // Acorn was written by Marijn Haverbeke and released under an MIT
	      // license. The Unicode regexps (for identifiers and whitespace) were
	      // taken from [Esprima](http://esprima.org) by Ariya Hidayat.
	      //
	      // Git repositories for Acorn are available at
	      //
	      //     http://marijnhaverbeke.nl/git/acorn
	      //     https://github.com/marijnh/acorn.git

	      // ## Character categories

	      // Big ugly regular expressions that match characters in the
	      // whitespace, identifier, and identifier-start categories. These
	      // are only applied when a character is found to actually have a
	      // code point above 128.

	      var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
	      var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
	      var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
	      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	      // Whether a single character denotes a newline.

	      var newline = exports.newline = /[\n\r\u2028\u2029]/;

	      // Matches a whole line break (where CRLF is considered a single
	      // line break). Used to count lines.

	      var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;

	      // Test whether a given character code starts an identifier.

	      var isIdentifierStart = exports.isIdentifierStart = function(code) {
	        if (code < 65) return code === 36;
	        if (code < 91) return true;
	        if (code < 97) return code === 95;
	        if (code < 123)return true;
	        return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
	      };

	      // Test whether a given character is part of an identifier.

	      var isIdentifierChar = exports.isIdentifierChar = function(code) {
	        if (code < 48) return code === 36;
	        if (code < 58) return true;
	        if (code < 65) return false;
	        if (code < 91) return true;
	        if (code < 97) return code === 95;
	        if (code < 123)return true;
	        return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
	      };
	    })(acorn);

	    function in_array(what, arr) {
	        for (var i = 0; i < arr.length; i += 1) {
	            if (arr[i] === what) {
	                return true;
	            }
	        }
	        return false;
	    }

	    function trim(s) {
	        return s.replace(/^\s+|\s+$/g, '');
	    }

	    function ltrim(s) {
	        return s.replace(/^\s+/g, '');
	    }

	    function rtrim(s) {
	        return s.replace(/\s+$/g, '');
	    }

	    function js_beautify(js_source_text, options) {
	        "use strict";
	        var beautifier = new Beautifier(js_source_text, options);
	        return beautifier.beautify();
	    }

	    var MODE = {
	            BlockStatement: 'BlockStatement', // 'BLOCK'
	            Statement: 'Statement', // 'STATEMENT'
	            ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
	            ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
	            ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
	            Conditional: 'Conditional', //'(COND-EXPRESSION)',
	            Expression: 'Expression' //'(EXPRESSION)'
	        };

	    function Beautifier(js_source_text, options) {
	        "use strict";
	        var output
	        var tokens = [], token_pos;
	        var Tokenizer;
	        var current_token;
	        var last_type, last_last_text, indent_string;
	        var flags, previous_flags, flag_store;
	        var prefix;

	        var handlers, opt;
	        var baseIndentString = '';

	        handlers = {
	            'TK_START_EXPR': handle_start_expr,
	            'TK_END_EXPR': handle_end_expr,
	            'TK_START_BLOCK': handle_start_block,
	            'TK_END_BLOCK': handle_end_block,
	            'TK_WORD': handle_word,
	            'TK_RESERVED': handle_word,
	            'TK_SEMICOLON': handle_semicolon,
	            'TK_STRING': handle_string,
	            'TK_EQUALS': handle_equals,
	            'TK_OPERATOR': handle_operator,
	            'TK_COMMA': handle_comma,
	            'TK_BLOCK_COMMENT': handle_block_comment,
	            'TK_INLINE_COMMENT': handle_inline_comment,
	            'TK_COMMENT': handle_comment,
	            'TK_DOT': handle_dot,
	            'TK_UNKNOWN': handle_unknown,
	            'TK_EOF': handle_eof
	        };

	        function create_flags(flags_base, mode) {
	            var next_indent_level = 0;
	            if (flags_base) {
	                next_indent_level = flags_base.indentation_level;
	                if (!output.just_added_newline() &&
	                    flags_base.line_indent_level > next_indent_level) {
	                    next_indent_level = flags_base.line_indent_level;
	                }
	            }

	            var next_flags = {
	                mode: mode,
	                parent: flags_base,
	                last_text: flags_base ? flags_base.last_text : '', // last token text
	                last_word: flags_base ? flags_base.last_word : '', // last 'TK_WORD' passed
	                declaration_statement: false,
	                declaration_assignment: false,
	                multiline_frame: false,
	                if_block: false,
	                else_block: false,
	                do_block: false,
	                do_while: false,
	                in_case_statement: false, // switch(..){ INSIDE HERE }
	                in_case: false, // we're on the exact line with "case 0:"
	                case_body: false, // the indented case-action block
	                indentation_level: next_indent_level,
	                line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
	                start_line_index: output.get_line_number(),
	                ternary_depth: 0
	            };
	            return next_flags;
	        }

	        // Some interpreters have unexpected results with foo = baz || bar;
	        options = options ? options : {};
	        opt = {};

	        // compatibility
	        if (options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
	            opt.brace_style = options.braces_on_own_line ? "expand" : "collapse";
	        }
	        opt.brace_style = options.brace_style ? options.brace_style : (opt.brace_style ? opt.brace_style : "collapse");

	        // graceful handling of deprecated option
	        if (opt.brace_style === "expand-strict") {
	            opt.brace_style = "expand";
	        }


	        opt.indent_size = options.indent_size ? parseInt(options.indent_size, 10) : 4;
	        opt.indent_char = options.indent_char ? options.indent_char : ' ';
	        opt.preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	        opt.break_chained_methods = (options.break_chained_methods === undefined) ? false : options.break_chained_methods;
	        opt.max_preserve_newlines = (options.max_preserve_newlines === undefined) ? 0 : parseInt(options.max_preserve_newlines, 10);
	        opt.space_in_paren = (options.space_in_paren === undefined) ? false : options.space_in_paren;
	        opt.space_in_empty_paren = (options.space_in_empty_paren === undefined) ? false : options.space_in_empty_paren;
	        opt.jslint_happy = (options.jslint_happy === undefined) ? false : options.jslint_happy;
	        opt.space_after_anon_function = (options.space_after_anon_function === undefined) ? false : options.space_after_anon_function;
	        opt.keep_array_indentation = (options.keep_array_indentation === undefined) ? false : options.keep_array_indentation;
	        opt.space_before_conditional = (options.space_before_conditional === undefined) ? true : options.space_before_conditional;
	        opt.unescape_strings = (options.unescape_strings === undefined) ? false : options.unescape_strings;
	        opt.wrap_line_length = (options.wrap_line_length === undefined) ? 0 : parseInt(options.wrap_line_length, 10);
	        opt.e4x = (options.e4x === undefined) ? false : options.e4x;
	        opt.end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        opt.comma_first = (options.comma_first === undefined) ? false : options.comma_first;


	        // force opt.space_after_anon_function to true if opt.jslint_happy
	        if(opt.jslint_happy) {
	            opt.space_after_anon_function = true;
	        }

	        if(options.indent_with_tabs){
	            opt.indent_char = '\t';
	            opt.indent_size = 1;
	        }

	        //----------------------------------
	        indent_string = '';
	        while (opt.indent_size > 0) {
	            indent_string += opt.indent_char;
	            opt.indent_size -= 1;
	        }

	        var preindent_index = 0;
	        if(js_source_text && js_source_text.length) {
	            while ( (js_source_text.charAt(preindent_index) === ' ' ||
	                    js_source_text.charAt(preindent_index) === '\t')) {
	                baseIndentString += js_source_text.charAt(preindent_index);
	                preindent_index += 1;
	            }
	            js_source_text = js_source_text.substring(preindent_index);
	        }

	        last_type = 'TK_START_BLOCK'; // last token type
	        last_last_text = ''; // pre-last token text
	        output = new Output(indent_string, baseIndentString);


	        // Stack of parsing/formatting states, including MODE.
	        // We tokenize, parse, and output in an almost purely a forward-only stream of token input
	        // and formatted output.  This makes the beautifier less accurate than full parsers
	        // but also far more tolerant of syntax errors.
	        //
	        // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
	        // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
	        // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
	        // most full parsers would die, but the beautifier gracefully falls back to
	        // MODE.BlockStatement and continues on.
	        flag_store = [];
	        set_mode(MODE.BlockStatement);

	        this.beautify = function() {

	            /*jshint onevar:true */
	            var local_token, sweet_code;
	            Tokenizer = new tokenizer(js_source_text, opt, indent_string);
	            tokens = Tokenizer.tokenize();
	            token_pos = 0;

	            while (local_token = get_token()) {
	                for(var i = 0; i < local_token.comments_before.length; i++) {
	                    // The cleanest handling of inline comments is to treat them as though they aren't there.
	                    // Just continue formatting and the behavior should be logical.
	                    // Also ignore unknown tokens.  Again, this should result in better behavior.
	                    handle_token(local_token.comments_before[i]);
	                }
	                handle_token(local_token);

	                last_last_text = flags.last_text;
	                last_type = local_token.type;
	                flags.last_text = local_token.text;

	                token_pos += 1;
	            }

	            sweet_code = output.get_code();
	            if (opt.end_with_newline) {
	                sweet_code += '\n';
	            }

	            return sweet_code;
	        };

	        function handle_token(local_token) {
	            var newlines = local_token.newlines;
	            var keep_whitespace = opt.keep_array_indentation && is_array(flags.mode);

	            if (keep_whitespace) {
	                for (i = 0; i < newlines; i += 1) {
	                    print_newline(i > 0);
	                }
	            } else {
	                if (opt.max_preserve_newlines && newlines > opt.max_preserve_newlines) {
	                    newlines = opt.max_preserve_newlines;
	                }

	                if (opt.preserve_newlines) {
	                    if (local_token.newlines > 1) {
	                        print_newline();
	                        for (var i = 1; i < newlines; i += 1) {
	                            print_newline(true);
	                        }
	                    }
	                }
	            }

	            current_token = local_token;
	            handlers[current_token.type]();
	        }

	        // we could use just string.split, but
	        // IE doesn't like returning empty strings
	        function split_newlines(s) {
	            //return s.split(/\x0d\x0a|\x0a/);

	            s = s.replace(/\x0d/g, '');
	            var out = [],
	                idx = s.indexOf("\n");
	            while (idx !== -1) {
	                out.push(s.substring(0, idx));
	                s = s.substring(idx + 1);
	                idx = s.indexOf("\n");
	            }
	            if (s.length) {
	                out.push(s);
	            }
	            return out;
	        }

	        function allow_wrap_or_preserved_newline(force_linewrap) {
	            force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

	            // Never wrap the first token on a line
	            if (output.just_added_newline()) {
	                return
	            }

	            if ((opt.preserve_newlines && current_token.wanted_newline) || force_linewrap) {
	                print_newline(false, true);
	            } else if (opt.wrap_line_length) {
	                var proposed_line_length = output.current_line.get_character_count() + current_token.text.length +
	                    (output.space_before_token ? 1 : 0);
	                if (proposed_line_length >= opt.wrap_line_length) {
	                    print_newline(false, true);
	                }
	            }
	        }

	        function print_newline(force_newline, preserve_statement_flags) {
	            if (!preserve_statement_flags) {
	                if (flags.last_text !== ';' && flags.last_text !== ',' && flags.last_text !== '=' && last_type !== 'TK_OPERATOR') {
	                    while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                        restore_mode();
	                    }
	                }
	            }

	            if (output.add_new_line(force_newline)) {
	                flags.multiline_frame = true;
	            }
	        }

	        function print_token_line_indentation() {
	            if (output.just_added_newline()) {
	                if (opt.keep_array_indentation && is_array(flags.mode) && current_token.wanted_newline) {
	                    output.current_line.push(current_token.whitespace_before);
	                    output.space_before_token = false;
	                } else if (output.set_indent(flags.indentation_level)) {
	                    flags.line_indent_level = flags.indentation_level;
	                }
	            }
	        }

	        function print_token(printable_token) {
	            if (opt.comma_first && last_type === 'TK_COMMA'
	                && output.just_added_newline()) {
	                if(output.previous_line.last() === ',') {
	                    output.previous_line.pop();
	                    print_token_line_indentation();
	                    output.add_token(',');
	                    output.space_before_token = true;
	                }
	            }

	            printable_token = printable_token || current_token.text;
	            print_token_line_indentation();
	            output.add_token(printable_token);
	        }

	        function indent() {
	            flags.indentation_level += 1;
	        }

	        function deindent() {
	            if (flags.indentation_level > 0 &&
	                ((!flags.parent) || flags.indentation_level > flags.parent.indentation_level))
	                flags.indentation_level -= 1;
	        }

	        function set_mode(mode) {
	            if (flags) {
	                flag_store.push(flags);
	                previous_flags = flags;
	            } else {
	                previous_flags = create_flags(null, mode);
	            }

	            flags = create_flags(previous_flags, mode);
	        }

	        function is_array(mode) {
	            return mode === MODE.ArrayLiteral;
	        }

	        function is_expression(mode) {
	            return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
	        }

	        function restore_mode() {
	            if (flag_store.length > 0) {
	                previous_flags = flags;
	                flags = flag_store.pop();
	                if (previous_flags.mode === MODE.Statement) {
	                    output.remove_redundant_indentation(previous_flags);
	                }
	            }
	        }

	        function start_of_object_property() {
	            return flags.parent.mode === MODE.ObjectLiteral && flags.mode === MODE.Statement && (
	                (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set'])));
	        }

	        function start_of_statement() {
	            if (
	                    (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'do') ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'return' && !current_token.wanted_newline) ||
	                    (last_type === 'TK_RESERVED' && flags.last_text === 'else' && !(current_token.type === 'TK_RESERVED' && current_token.text === 'if')) ||
	                    (last_type === 'TK_END_EXPR' && (previous_flags.mode === MODE.ForInitializer || previous_flags.mode === MODE.Conditional)) ||
	                    (last_type === 'TK_WORD' && flags.mode === MODE.BlockStatement
	                        && !flags.in_case
	                        && !(current_token.text === '--' || current_token.text === '++')
	                        && current_token.type !== 'TK_WORD' && current_token.type !== 'TK_RESERVED') ||
	                    (flags.mode === MODE.ObjectLiteral && (
	                        (flags.last_text === ':' && flags.ternary_depth === 0) || (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set']))))
	                ) {

	                set_mode(MODE.Statement);
	                indent();

	                if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const']) && current_token.type === 'TK_WORD') {
	                    flags.declaration_statement = true;
	                }

	                // Issue #276:
	                // If starting a new statement with [if, for, while, do], push to a new line.
	                // if (a) if (b) if(c) d(); else e(); else f();
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline(
	                        current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['do', 'for', 'if', 'while']));
	                }

	                return true;
	            }
	            return false;
	        }

	        function all_lines_start_with(lines, c) {
	            for (var i = 0; i < lines.length; i++) {
	                var line = trim(lines[i]);
	                if (line.charAt(0) !== c) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function each_line_matches_indent(lines, indent) {
	            var i = 0,
	                len = lines.length,
	                line;
	            for (; i < len; i++) {
	                line = lines[i];
	                // allow empty lines to pass through
	                if (line && line.indexOf(indent) !== 0) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function is_special_word(word) {
	            return in_array(word, ['case', 'return', 'do', 'if', 'throw', 'else']);
	        }

	        function get_token(offset) {
	            var index = token_pos + (offset || 0);
	            return (index < 0 || index >= tokens.length) ? null : tokens[index];
	        }

	        function handle_start_expr() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            var next_mode = MODE.Expression;
	            if (current_token.text === '[') {

	                if (last_type === 'TK_WORD' || flags.last_text === ')') {
	                    // this is array index specifier, break immediately
	                    // a[x], fn()[x]
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, Tokenizer.line_starters)) {
	                        output.space_before_token = true;
	                    }
	                    set_mode(next_mode);
	                    print_token();
	                    indent();
	                    if (opt.space_in_paren) {
	                        output.space_before_token = true;
	                    }
	                    return;
	                }

	                next_mode = MODE.ArrayLiteral;
	                if (is_array(flags.mode)) {
	                    if (flags.last_text === '[' ||
	                        (flags.last_text === ',' && (last_last_text === ']' || last_last_text === '}'))) {
	                        // ], [ goes to new line
	                        // }, [ goes to new line
	                        if (!opt.keep_array_indentation) {
	                            print_newline();
	                        }
	                    }
	                }

	            } else {
	                if (last_type === 'TK_RESERVED' && flags.last_text === 'for') {
	                    next_mode = MODE.ForInitializer;
	                } else if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['if', 'while'])) {
	                    next_mode = MODE.Conditional;
	                } else {
	                    // next_mode = MODE.Expression;
	                }
	            }

	            if (flags.last_text === ';' || last_type === 'TK_START_BLOCK') {
	                print_newline();
	            } else if (last_type === 'TK_END_EXPR' || last_type === 'TK_START_EXPR' || last_type === 'TK_END_BLOCK' || flags.last_text === '.') {
	                // TODO: Consider whether forcing this is required.  Review failing tests when removed.
	                allow_wrap_or_preserved_newline(current_token.wanted_newline);
	                // do nothing on (( and )( and ][ and ]( and .(
	            } else if (!(last_type === 'TK_RESERVED' && current_token.text === '(') && last_type !== 'TK_WORD' && last_type !== 'TK_OPERATOR') {
	                output.space_before_token = true;
	            } else if ((last_type === 'TK_RESERVED' && (flags.last_word === 'function' || flags.last_word === 'typeof')) ||
	                (flags.last_text === '*' && last_last_text === 'function')) {
	                // function() vs function ()
	                if (opt.space_after_anon_function) {
	                    output.space_before_token = true;
	                }
	            } else if (last_type === 'TK_RESERVED' && (in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === 'catch')) {
	                if (opt.space_before_conditional) {
	                    output.space_before_token = true;
	                }
	            }

	            // Support of this kind of newline preservation.
	            // a = (b &&
	            //     (c || d));
	            if (current_token.text === '(') {
	                if (last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                    if (!start_of_object_property()) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                }
	            }

	            set_mode(next_mode);
	            print_token();
	            if (opt.space_in_paren) {
	                output.space_before_token = true;
	            }

	            // In all cases, if we newline while inside an expression it should be indented.
	            indent();
	        }

	        function handle_end_expr() {
	            // statements inside expressions are not valid syntax, but...
	            // statements must all be closed when their container closes
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }

	            if (flags.multiline_frame) {
	                allow_wrap_or_preserved_newline(current_token.text === ']' && is_array(flags.mode) && !opt.keep_array_indentation);
	            }

	            if (opt.space_in_paren) {
	                if (last_type === 'TK_START_EXPR' && ! opt.space_in_empty_paren) {
	                    // () [] no inner space in empty parens like these, ever, ref #320
	                    output.trim();
	                    output.space_before_token = false;
	                } else {
	                    output.space_before_token = true;
	                }
	            }
	            if (current_token.text === ']' && opt.keep_array_indentation) {
	                print_token();
	                restore_mode();
	            } else {
	                restore_mode();
	                print_token();
	            }
	            output.remove_redundant_indentation(previous_flags);

	            // do {} while () // no statement required after
	            if (flags.do_while && previous_flags.mode === MODE.Conditional) {
	                previous_flags.mode = MODE.Expression;
	                flags.do_block = false;
	                flags.do_while = false;

	            }
	        }

	        function handle_start_block() {
	            // Check if this is should be treated as a ObjectLiteral
	            var next_token = get_token(1)
	            var second_token = get_token(2)
	            if (second_token && (
	                    (second_token.text === ':' && in_array(next_token.type, ['TK_STRING', 'TK_WORD', 'TK_RESERVED']))
	                    || (in_array(next_token.text, ['get', 'set']) && in_array(second_token.type, ['TK_WORD', 'TK_RESERVED']))
	                )) {
	                // We don't support TypeScript,but we didn't break it for a very long time.
	                // We'll try to keep not breaking it.
	                if (!in_array(last_last_text, ['class','interface'])) {
	                    set_mode(MODE.ObjectLiteral);
	                } else {
	                    set_mode(MODE.BlockStatement);
	                }
	            } else {
	                set_mode(MODE.BlockStatement);
	            }

	            var empty_braces = !next_token.comments_before.length &&  next_token.text === '}';
	            var empty_anonymous_function = empty_braces && flags.last_word === 'function' &&
	                last_type === 'TK_END_EXPR';

	            if (opt.brace_style === "expand" ||
	                (opt.brace_style === "none" && current_token.wanted_newline)) {
	                if (last_type !== 'TK_OPERATOR' &&
	                    (empty_anonymous_function ||
	                        last_type === 'TK_EQUALS' ||
	                        (last_type === 'TK_RESERVED' && is_special_word(flags.last_text) && flags.last_text !== 'else'))) {
	                    output.space_before_token = true;
	                } else {
	                    print_newline(false, true);
	                }
	            } else { // collapse
	                if (last_type !== 'TK_OPERATOR' && last_type !== 'TK_START_EXPR') {
	                    if (last_type === 'TK_START_BLOCK') {
	                        print_newline();
	                    } else {
	                        output.space_before_token = true;
	                    }
	                } else {
	                    // if TK_OPERATOR or TK_START_EXPR
	                    if (is_array(previous_flags.mode) && flags.last_text === ',') {
	                        if (last_last_text === '}') {
	                            // }, { in array context
	                            output.space_before_token = true;
	                        } else {
	                            print_newline(); // [a, b, c, {
	                        }
	                    }
	                }
	            }
	            print_token();
	            indent();
	        }

	        function handle_end_block() {
	            // statements must all be closed when their container closes
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }
	            var empty_braces = last_type === 'TK_START_BLOCK';

	            if (opt.brace_style === "expand") {
	                if (!empty_braces) {
	                    print_newline();
	                }
	            } else {
	                // skip {}
	                if (!empty_braces) {
	                    if (is_array(flags.mode) && opt.keep_array_indentation) {
	                        // we REALLY need a newline here, but newliner would skip that
	                        opt.keep_array_indentation = false;
	                        print_newline();
	                        opt.keep_array_indentation = true;

	                    } else {
	                        print_newline();
	                    }
	                }
	            }
	            restore_mode();
	            print_token();
	        }

	        function handle_word() {
	            if (current_token.type === 'TK_RESERVED' && flags.mode !== MODE.ObjectLiteral &&
	                in_array(current_token.text, ['set', 'get'])) {
	                current_token.type = 'TK_WORD';
	            }

	            if (current_token.type === 'TK_RESERVED' && flags.mode === MODE.ObjectLiteral) {
	                var next_token = get_token(1);
	                if (next_token.text == ':') {
	                    current_token.type = 'TK_WORD';
	                }
	            }

	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            } else if (current_token.wanted_newline && !is_expression(flags.mode) &&
	                (last_type !== 'TK_OPERATOR' || (flags.last_text === '--' || flags.last_text === '++')) &&
	                last_type !== 'TK_EQUALS' &&
	                (opt.preserve_newlines || !(last_type === 'TK_RESERVED' && in_array(flags.last_text, ['var', 'let', 'const', 'set', 'get'])))) {

	                print_newline();
	            }

	            if (flags.do_block && !flags.do_while) {
	                if (current_token.type === 'TK_RESERVED' && current_token.text === 'while') {
	                    // do {} ## while ()
	                    output.space_before_token = true;
	                    print_token();
	                    output.space_before_token = true;
	                    flags.do_while = true;
	                    return;
	                } else {
	                    // do {} should always have while as the next word.
	                    // if we don't see the expected while, recover
	                    print_newline();
	                    flags.do_block = false;
	                }
	            }

	            // if may be followed by else, or not
	            // Bare/inline ifs are tricky
	            // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
	            if (flags.if_block) {
	                if (!flags.else_block && (current_token.type === 'TK_RESERVED' && current_token.text === 'else')) {
	                    flags.else_block = true;
	                } else {
	                    while (flags.mode === MODE.Statement) {
	                        restore_mode();
	                    }
	                    flags.if_block = false;
	                    flags.else_block = false;
	                }
	            }

	            if (current_token.type === 'TK_RESERVED' && (current_token.text === 'case' || (current_token.text === 'default' && flags.in_case_statement))) {
	                print_newline();
	                if (flags.case_body || opt.jslint_happy) {
	                    // switch cases following one another
	                    deindent();
	                    flags.case_body = false;
	                }
	                print_token();
	                flags.in_case = true;
	                flags.in_case_statement = true;
	                return;
	            }

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'function') {
	                if (in_array(flags.last_text, ['}', ';']) || (output.just_added_newline() && ! in_array(flags.last_text, ['[', '{', ':', '=', ',']))) {
	                    // make sure there is a nice clean space of at least one blank line
	                    // before a new function definition
	                    if ( !output.just_added_blankline() && !current_token.comments_before.length) {
	                        print_newline();
	                        print_newline(true);
	                    }
	                }
	                if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
	                    if (last_type === 'TK_RESERVED' && in_array(flags.last_text, ['get', 'set', 'new', 'return', 'export'])) {
	                        output.space_before_token = true;
	                    } else if (last_type === 'TK_RESERVED' && flags.last_text === 'default' && last_last_text === 'export') {
	                        output.space_before_token = true;
	                    } else {
	                        print_newline();
	                    }
	                } else if (last_type === 'TK_OPERATOR' || flags.last_text === '=') {
	                    // foo = function
	                    output.space_before_token = true;
	                } else if (!flags.multiline_frame && (is_expression(flags.mode) || is_array(flags.mode))) {
	                    // (function
	                } else {
	                    print_newline();
	                }
	            }

	            if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline();
	                }
	            }

	            if (current_token.type === 'TK_RESERVED' &&  in_array(current_token.text, ['function', 'get', 'set'])) {
	                print_token();
	                flags.last_word = current_token.text;
	                return;
	            }

	            prefix = 'NONE';

	            if (last_type === 'TK_END_BLOCK') {
	                if (!(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally']))) {
	                    prefix = 'NEWLINE';
	                } else {
	                    if (opt.brace_style === "expand" ||
	                        opt.brace_style === "end-expand" ||
	                        (opt.brace_style === "none" && current_token.wanted_newline)) {
	                        prefix = 'NEWLINE';
	                    } else {
	                        prefix = 'SPACE';
	                        output.space_before_token = true;
	                    }
	                }
	            } else if (last_type === 'TK_SEMICOLON' && flags.mode === MODE.BlockStatement) {
	                // TODO: Should this be for STATEMENT as well?
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_SEMICOLON' && is_expression(flags.mode)) {
	                prefix = 'SPACE';
	            } else if (last_type === 'TK_STRING') {
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD' ||
	                (flags.last_text === '*' && last_last_text === 'function')) {
	                prefix = 'SPACE';
	            } else if (last_type === 'TK_START_BLOCK') {
	                prefix = 'NEWLINE';
	            } else if (last_type === 'TK_END_EXPR') {
	                output.space_before_token = true;
	                prefix = 'NEWLINE';
	            }

	            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                if (flags.last_text === 'else' || flags.last_text === 'export') {
	                    prefix = 'SPACE';
	                } else {
	                    prefix = 'NEWLINE';
	                }

	            }

	            if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['else', 'catch', 'finally'])) {
	                if (last_type !== 'TK_END_BLOCK' ||
	                    opt.brace_style === "expand" ||
	                    opt.brace_style === "end-expand" ||
	                    (opt.brace_style === "none" && current_token.wanted_newline)) {
	                    print_newline();
	                } else {
	                    output.trim(true);
	                    var line = output.current_line;
	                    // If we trimmed and there's something other than a close block before us
	                    // put a newline back in.  Handles '} // comment' scenario.
	                    if (line.last() !== '}') {
	                        print_newline();
	                    }
	                    output.space_before_token = true;
	                }
	            } else if (prefix === 'NEWLINE') {
	                if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                    // no newline between 'return nnn'
	                    output.space_before_token = true;
	                } else if (last_type !== 'TK_END_EXPR') {
	                    if ((last_type !== 'TK_START_EXPR' || !(current_token.type === 'TK_RESERVED' && in_array(current_token.text, ['var', 'let', 'const']))) && flags.last_text !== ':') {
	                        // no need to force newline on 'var': for (var x = 0...)
	                        if (current_token.type === 'TK_RESERVED' && current_token.text === 'if' && flags.last_text === 'else') {
	                            // no newline for } else if {
	                            output.space_before_token = true;
	                        } else {
	                            print_newline();
	                        }
	                    }
	                } else if (current_token.type === 'TK_RESERVED' && in_array(current_token.text, Tokenizer.line_starters) && flags.last_text !== ')') {
	                    print_newline();
	                }
	            } else if (flags.multiline_frame && is_array(flags.mode) && flags.last_text === ',' && last_last_text === '}') {
	                print_newline(); // }, in lists get a newline treatment
	            } else if (prefix === 'SPACE') {
	                output.space_before_token = true;
	            }
	            print_token();
	            flags.last_word = current_token.text;

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'do') {
	                flags.do_block = true;
	            }

	            if (current_token.type === 'TK_RESERVED' && current_token.text === 'if') {
	                flags.if_block = true;
	            }
	        }

	        function handle_semicolon() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	                // Semicolon can be the start (and end) of a statement
	                output.space_before_token = false;
	            }
	            while (flags.mode === MODE.Statement && !flags.if_block && !flags.do_block) {
	                restore_mode();
	            }
	            print_token();
	        }

	        function handle_string() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	                // One difference - strings want at least a space before
	                output.space_before_token = true;
	            } else if (last_type === 'TK_RESERVED' || last_type === 'TK_WORD') {
	                output.space_before_token = true;
	            } else if (last_type === 'TK_COMMA' || last_type === 'TK_START_EXPR' || last_type === 'TK_EQUALS' || last_type === 'TK_OPERATOR') {
	                if (!start_of_object_property()) {
	                    allow_wrap_or_preserved_newline();
	                }
	            } else {
	                print_newline();
	            }
	            print_token();
	        }

	        function handle_equals() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (flags.declaration_statement) {
	                // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
	                flags.declaration_assignment = true;
	            }
	            output.space_before_token = true;
	            print_token();
	            output.space_before_token = true;
	        }

	        function handle_comma() {
	            if (flags.declaration_statement) {
	                if (is_expression(flags.parent.mode)) {
	                    // do not break on comma, for(var a = 1, b = 2)
	                    flags.declaration_assignment = false;
	                }

	                print_token();

	                if (flags.declaration_assignment) {
	                    flags.declaration_assignment = false;
	                    print_newline(false, true);
	                } else {
	                    output.space_before_token = true;
	                    // for comma-first, we want to allow a newline before the comma
	                    // to turn into a newline after the comma, which we will fixup later
	                    if (opt.comma_first) {
	                        allow_wrap_or_preserved_newline();
	                    }
	                }
	                return;
	            }

	            print_token();
	            if (flags.mode === MODE.ObjectLiteral ||
	                (flags.mode === MODE.Statement && flags.parent.mode === MODE.ObjectLiteral)) {
	                if (flags.mode === MODE.Statement) {
	                    restore_mode();
	                }
	                print_newline();
	            } else {
	                // EXPR or DO_BLOCK
	                output.space_before_token = true;
	                // for comma-first, we want to allow a newline before the comma
	                // to turn into a newline after the comma, which we will fixup later
	                if (opt.comma_first) {
	                    allow_wrap_or_preserved_newline();
	                }
	            }

	        }

	        function handle_operator() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                // "return" had a special handling in TK_WORD. Now we need to return the favor
	                output.space_before_token = true;
	                print_token();
	                return;
	            }

	            // hack for actionscript's import .*;
	            if (current_token.text === '*' && last_type === 'TK_DOT') {
	                print_token();
	                return;
	            }

	            if (current_token.text === ':' && flags.in_case) {
	                flags.case_body = true;
	                indent();
	                print_token();
	                print_newline();
	                flags.in_case = false;
	                return;
	            }

	            if (current_token.text === '::') {
	                // no spaces around exotic namespacing syntax operator
	                print_token();
	                return;
	            }

	            // Allow line wrapping between operators
	            if (last_type === 'TK_OPERATOR') {
	                allow_wrap_or_preserved_newline();
	            }

	            var space_before = true;
	            var space_after = true;

	            if (in_array(current_token.text, ['--', '++', '!', '~']) || (in_array(current_token.text, ['-', '+']) && (in_array(last_type, ['TK_START_BLOCK', 'TK_START_EXPR', 'TK_EQUALS', 'TK_OPERATOR']) || in_array(flags.last_text, Tokenizer.line_starters) || flags.last_text === ','))) {
	                // unary operators (and binary +/- pretending to be unary) special cases

	                space_before = false;
	                space_after = false;

	                // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
	                // if there is a newline between -- or ++ and anything else we should preserve it.
	                if (current_token.wanted_newline && (current_token.text === '--' || current_token.text === '++')) {
	                    print_newline(false, true);
	                }

	                if (flags.last_text === ';' && is_expression(flags.mode)) {
	                    // for (;; ++i)
	                    //        ^^^
	                    space_before = true;
	                }

	                if (last_type === 'TK_RESERVED') {
	                    space_before = true;
	                } else if (last_type === 'TK_END_EXPR') {
	                    space_before = !(flags.last_text === ']' && (current_token.text === '--' || current_token.text === '++'));
	                } else if (last_type === 'TK_OPERATOR') {
	                    // a++ + ++b;
	                    // a - -b
	                    space_before = in_array(current_token.text, ['--', '-', '++', '+']) && in_array(flags.last_text, ['--', '-', '++', '+']);
	                    // + and - are not unary when preceeded by -- or ++ operator
	                    // a-- + b
	                    // a * +b
	                    // a - -b
	                    if (in_array(current_token.text, ['+', '-']) && in_array(flags.last_text, ['--', '++'])) {
	                        space_after = true;
	                    }
	                }

	                if ((flags.mode === MODE.BlockStatement || flags.mode === MODE.Statement) && (flags.last_text === '{' || flags.last_text === ';')) {
	                    // { foo; --i }
	                    // foo(); --bar;
	                    print_newline();
	                }
	            } else if (current_token.text === ':') {
	                if (flags.ternary_depth === 0) {
	                    // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
	                    space_before = false;
	                } else {
	                    flags.ternary_depth -= 1;
	                }
	            } else if (current_token.text === '?') {
	                flags.ternary_depth += 1;
	            } else if (current_token.text === '*' && last_type === 'TK_RESERVED' && flags.last_text === 'function') {
	                space_before = false;
	                space_after = false;
	            }
	            output.space_before_token = output.space_before_token || space_before;
	            print_token();
	            output.space_before_token = space_after;
	        }

	        function handle_block_comment() {
	            var lines = split_newlines(current_token.text);
	            var j; // iterator for this case
	            var javadoc = false;
	            var starless = false;
	            var lastIndent = current_token.whitespace_before;
	            var lastIndentLength = lastIndent.length;

	            // block comment starts with a new line
	            print_newline(false, true);
	            if (lines.length > 1) {
	                if (all_lines_start_with(lines.slice(1), '*')) {
	                    javadoc = true;
	                }
	                else if (each_line_matches_indent(lines.slice(1), lastIndent)) {
	                    starless = true;
	                }
	            }

	            // first line always indented
	            print_token(lines[0]);
	            for (j = 1; j < lines.length; j++) {
	                print_newline(false, true);
	                if (javadoc) {
	                    // javadoc: reformat and re-indent
	                    print_token(' ' + ltrim(lines[j]));
	                } else if (starless && lines[j].length > lastIndentLength) {
	                    // starless: re-indent non-empty content, avoiding trim
	                    print_token(lines[j].substring(lastIndentLength));
	                } else {
	                    // normal comments output raw
	                    output.add_token(lines[j]);
	                }
	            }

	            // for comments of more than one line, make sure there's a new line after
	            print_newline(false, true);
	        }

	        function handle_inline_comment() {
	            output.space_before_token = true;
	            print_token();
	            output.space_before_token = true;
	        }

	        function handle_comment() {
	            if (current_token.wanted_newline) {
	                print_newline(false, true);
	            } else {
	                output.trim(true);
	            }

	            output.space_before_token = true;
	            print_token();
	            print_newline(false, true);
	        }

	        function handle_dot() {
	            if (start_of_statement()) {
	                // The conditional starts the statement if appropriate.
	            }

	            if (last_type === 'TK_RESERVED' && is_special_word(flags.last_text)) {
	                output.space_before_token = true;
	            } else {
	                // allow preserved newlines before dots in general
	                // force newlines on dots after close paren when break_chained - for bar().baz()
	                allow_wrap_or_preserved_newline(flags.last_text === ')' && opt.break_chained_methods);
	            }

	            print_token();
	        }

	        function handle_unknown() {
	            print_token();

	            if (current_token.text[current_token.text.length - 1] === '\n') {
	                print_newline();
	            }
	        }

	        function handle_eof() {
	            // Unwind any open statements
	            while (flags.mode === MODE.Statement) {
	                restore_mode();
	            }
	        }
	    }


	    function OutputLine(parent) {
	        var _character_count = 0;
	        // use indent_count as a marker for lines that have preserved indentation
	        var _indent_count = -1;

	        var _items = [];
	        var _empty = true;

	        this.set_indent = function(level) {
	            _character_count = parent.baseIndentLength + level * parent.indent_length
	            _indent_count = level;
	        }

	        this.get_character_count = function() {
	            return _character_count;
	        }

	        this.is_empty = function() {
	            return _empty;
	        }

	        this.last = function() {
	            if (!this._empty) {
	              return _items[_items.length - 1];
	            } else {
	              return null;
	            }
	        }

	        this.push = function(input) {
	            _items.push(input);
	            _character_count += input.length;
	            _empty = false;
	        }

	        this.pop = function() {
	            var item = null;
	            if (!_empty) {
	                item = _items.pop();
	                _character_count -= item.length;
	                _empty = _items.length === 0;
	            }
	            return item;
	        }

	        this.remove_indent = function() {
	            if (_indent_count > 0) {
	                _indent_count -= 1;
	                _character_count -= parent.indent_length
	            }
	        }

	        this.trim = function() {
	            while (this.last() === ' ') {
	                var item = _items.pop();
	                _character_count -= 1;
	            }
	            _empty = _items.length === 0;
	        }

	        this.toString = function() {
	            var result = '';
	            if (!this._empty) {
	                if (_indent_count >= 0) {
	                    result = parent.indent_cache[_indent_count];
	                }
	                result += _items.join('')
	            }
	            return result;
	        }
	    }

	    function Output(indent_string, baseIndentString) {
	        baseIndentString = baseIndentString || '';
	        this.indent_cache = [ baseIndentString ];
	        this.baseIndentLength = baseIndentString.length;
	        this.indent_length = indent_string.length;

	        var lines =[];
	        this.baseIndentString = baseIndentString;
	        this.indent_string = indent_string;
	        this.previous_line = null;
	        this.current_line = null;
	        this.space_before_token = false;

	        this.get_line_number = function() {
	            return lines.length;
	        }

	        // Using object instead of string to allow for later expansion of info about each line
	        this.add_new_line = function(force_newline) {
	            if (this.get_line_number() === 1 && this.just_added_newline()) {
	                return false; // no newline on start of file
	            }

	            if (force_newline || !this.just_added_newline()) {
	                this.previous_line = this.current_line;
	                this.current_line = new OutputLine(this);
	                lines.push(this.current_line);
	                return true;
	            }

	            return false;
	        }

	        // initialize
	        this.add_new_line(true);

	        this.get_code = function() {
	            var sweet_code = lines.join('\n').replace(/[\r\n\t ]+$/, '');
	            return sweet_code;
	        }

	        this.set_indent = function(level) {
	            // Never indent your first output indent at the start of the file
	            if (lines.length > 1) {
	                while(level >= this.indent_cache.length) {
	                    this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
	                }

	                this.current_line.set_indent(level);
	                return true;
	            }
	            this.current_line.set_indent(0);
	            return false;
	        }

	        this.add_token = function(printable_token) {
	            this.add_space_before_token();
	            this.current_line.push(printable_token);
	        }

	        this.add_space_before_token = function() {
	            if (this.space_before_token && !this.just_added_newline()) {
	                this.current_line.push(' ');
	            }
	            this.space_before_token = false;
	        }

	        this.remove_redundant_indentation = function (frame) {
	            // This implementation is effective but has some issues:
	            //     - can cause line wrap to happen too soon due to indent removal
	            //           after wrap points are calculated
	            // These issues are minor compared to ugly indentation.

	            if (frame.multiline_frame ||
	                frame.mode === MODE.ForInitializer ||
	                frame.mode === MODE.Conditional) {
	                return;
	            }

	            // remove one indent from each line inside this section
	            var index = frame.start_line_index;
	            var line;

	            var output_length = lines.length;
	            while (index < output_length) {
	                lines[index].remove_indent();
	                index++;
	            }
	        }

	        this.trim = function(eat_newlines) {
	            eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

	            this.current_line.trim(indent_string, baseIndentString);

	            while (eat_newlines && lines.length > 1 &&
	                this.current_line.is_empty()) {
	                lines.pop();
	                this.current_line = lines[lines.length - 1]
	                this.current_line.trim();
	            }

	            this.previous_line = lines.length > 1 ? lines[lines.length - 2] : null;
	        }

	        this.just_added_newline = function() {
	            return this.current_line.is_empty();
	        }

	        this.just_added_blankline = function() {
	            if (this.just_added_newline()) {
	                if (lines.length === 1) {
	                    return true; // start of the file and newline = blank
	                }

	                var line = lines[lines.length - 2];
	                return line.is_empty();
	            }
	            return false;
	        }
	    }


	    var Token = function(type, text, newlines, whitespace_before, mode, parent) {
	        this.type = type;
	        this.text = text;
	        this.comments_before = [];
	        this.newlines = newlines || 0;
	        this.wanted_newline = newlines > 0;
	        this.whitespace_before = whitespace_before || '';
	        this.parent = null;
	    }

	    function tokenizer(input, opts, indent_string) {

	        var whitespace = "\n\r\t ".split('');
	        var digit = /[0-9]/;

	        var punct = ('+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: =>'
	                +' <%= <% %> <?= <? ?>').split(' '); // try to be a good boy and try not to break the markup language identifiers

	        // words which should always start on new line.
	        this.line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
	        var reserved_words = this.line_starters.concat(['do', 'in', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield']);

	        var n_newlines, whitespace_before_token, in_html_comment, tokens, parser_pos;
	        var input_length;

	        this.tokenize = function() {
	            // cache the source's length.
	            input_length = input.length
	            parser_pos = 0;
	            in_html_comment = false
	            tokens = [];

	            var next, last;
	            var token_values;
	            var open = null;
	            var open_stack = [];
	            var comments = [];

	            while (!(last && last.type === 'TK_EOF')) {
	                token_values = tokenize_next();
	                next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                while(next.type === 'TK_INLINE_COMMENT' || next.type === 'TK_COMMENT' ||
	                    next.type === 'TK_BLOCK_COMMENT' || next.type === 'TK_UNKNOWN') {
	                    comments.push(next);
	                    token_values = tokenize_next();
	                    next = new Token(token_values[1], token_values[0], n_newlines, whitespace_before_token);
	                }

	                if (comments.length) {
	                    next.comments_before = comments;
	                    comments = [];
	                }

	                if (next.type === 'TK_START_BLOCK' || next.type === 'TK_START_EXPR') {
	                    next.parent = last;
	                    open = next;
	                    open_stack.push(next);
	                }  else if ((next.type === 'TK_END_BLOCK' || next.type === 'TK_END_EXPR') &&
	                    (open && (
	                        (next.text === ']' && open.text === '[') ||
	                        (next.text === ')' && open.text === '(') ||
	                        (next.text === '}' && open.text === '}')))) {
	                    next.parent = open.parent;
	                    open = open_stack.pop();
	                }

	                tokens.push(next);
	                last = next;
	            }

	            return tokens;
	        }

	        function tokenize_next() {
	            var i, resulting_string;
	            var whitespace_on_this_line = [];

	            n_newlines = 0;
	            whitespace_before_token = '';

	            if (parser_pos >= input_length) {
	                return ['', 'TK_EOF'];
	            }

	            var last_token;
	            if (tokens.length) {
	                last_token = tokens[tokens.length-1];
	            } else {
	                // For the sake of tokenizing we can pretend that there was on open brace to start
	                last_token = new Token('TK_START_BLOCK', '{');
	            }


	            var c = input.charAt(parser_pos);
	            parser_pos += 1;

	            while (in_array(c, whitespace)) {

	                if (c === '\n') {
	                    n_newlines += 1;
	                    whitespace_on_this_line = [];
	                } else if (n_newlines) {
	                    if (c === indent_string) {
	                        whitespace_on_this_line.push(indent_string);
	                    } else if (c !== '\r') {
	                        whitespace_on_this_line.push(' ');
	                    }
	                }

	                if (parser_pos >= input_length) {
	                    return ['', 'TK_EOF'];
	                }

	                c = input.charAt(parser_pos);
	                parser_pos += 1;
	            }

	            if(whitespace_on_this_line.length) {
	                whitespace_before_token = whitespace_on_this_line.join('');
	            }

	            if (digit.test(c)) {
	                var allow_decimal = true;
	                var allow_e = true;
	                var local_digit = digit;

	                if (c === '0' && parser_pos < input_length && /[Xx]/.test(input.charAt(parser_pos))) {
	                    // switch to hex number, no decimal or e, just hex digits
	                    allow_decimal = false;
	                    allow_e = false;
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;
	                    local_digit = /[0123456789abcdefABCDEF]/
	                } else {
	                    // we know this first loop will run.  It keeps the logic simpler.
	                    c = '';
	                    parser_pos -= 1
	                }

	                // Add the digits
	                while (parser_pos < input_length && local_digit.test(input.charAt(parser_pos))) {
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;

	                    if (allow_decimal && parser_pos < input_length && input.charAt(parser_pos) === '.') {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        allow_decimal = false;
	                    }

	                    if (allow_e && parser_pos < input_length && /[Ee]/.test(input.charAt(parser_pos))) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;

	                        if (parser_pos < input_length && /[+-]/.test(input.charAt(parser_pos))) {
	                            c += input.charAt(parser_pos);
	                            parser_pos += 1;
	                        }

	                        allow_e = false;
	                        allow_decimal = false;
	                    }
	                }

	                return [c, 'TK_WORD'];
	            }

	            if (acorn.isIdentifierStart(input.charCodeAt(parser_pos-1))) {
	                if (parser_pos < input_length) {
	                    while (acorn.isIdentifierChar(input.charCodeAt(parser_pos))) {
	                        c += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        if (parser_pos === input_length) {
	                            break;
	                        }
	                    }
	                }

	                if (!(last_token.type === 'TK_DOT' ||
	                        (last_token.type === 'TK_RESERVED' && in_array(last_token.text, ['set', 'get'])))
	                    && in_array(c, reserved_words)) {
	                    if (c === 'in') { // hack for 'in' operator
	                        return [c, 'TK_OPERATOR'];
	                    }
	                    return [c, 'TK_RESERVED'];
	                }

	                return [c, 'TK_WORD'];
	            }

	            if (c === '(' || c === '[') {
	                return [c, 'TK_START_EXPR'];
	            }

	            if (c === ')' || c === ']') {
	                return [c, 'TK_END_EXPR'];
	            }

	            if (c === '{') {
	                return [c, 'TK_START_BLOCK'];
	            }

	            if (c === '}') {
	                return [c, 'TK_END_BLOCK'];
	            }

	            if (c === ';') {
	                return [c, 'TK_SEMICOLON'];
	            }

	            if (c === '/') {
	                var comment = '';
	                // peek for comment /* ... */
	                var inline_comment = true;
	                if (input.charAt(parser_pos) === '*') {
	                    parser_pos += 1;
	                    if (parser_pos < input_length) {
	                        while (parser_pos < input_length && !(input.charAt(parser_pos) === '*' && input.charAt(parser_pos + 1) && input.charAt(parser_pos + 1) === '/')) {
	                            c = input.charAt(parser_pos);
	                            comment += c;
	                            if (c === "\n" || c === "\r") {
	                                inline_comment = false;
	                            }
	                            parser_pos += 1;
	                            if (parser_pos >= input_length) {
	                                break;
	                            }
	                        }
	                    }
	                    parser_pos += 2;
	                    if (inline_comment && n_newlines === 0) {
	                        return ['/*' + comment + '*/', 'TK_INLINE_COMMENT'];
	                    } else {
	                        return ['/*' + comment + '*/', 'TK_BLOCK_COMMENT'];
	                    }
	                }
	                // peek for comment // ...
	                if (input.charAt(parser_pos) === '/') {
	                    comment = c;
	                    while (input.charAt(parser_pos) !== '\r' && input.charAt(parser_pos) !== '\n') {
	                        comment += input.charAt(parser_pos);
	                        parser_pos += 1;
	                        if (parser_pos >= input_length) {
	                            break;
	                        }
	                    }
	                    return [comment, 'TK_COMMENT'];
	                }

	            }

	            if (c === '`' || c === "'" || c === '"' || // string
	                (
	                    (c === '/') || // regexp
	                    (opts.e4x && c === "<" && input.slice(parser_pos - 1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*\/?\s*>/)) // xml
	                ) && ( // regex and xml can only appear in specific locations during parsing
	                    (last_token.type === 'TK_RESERVED' && in_array(last_token.text , ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
	                    (last_token.type === 'TK_END_EXPR' && last_token.text === ')' &&
	                        last_token.parent && last_token.parent.type === 'TK_RESERVED' && in_array(last_token.parent.text, ['if', 'while', 'for'])) ||
	                    (in_array(last_token.type, ['TK_COMMENT', 'TK_START_EXPR', 'TK_START_BLOCK',
	                        'TK_END_BLOCK', 'TK_OPERATOR', 'TK_EQUALS', 'TK_EOF', 'TK_SEMICOLON', 'TK_COMMA'
	                    ]))
	                )) {

	                var sep = c,
	                    esc = false,
	                    has_char_escapes = false;

	                resulting_string = c;

	                if (sep === '/') {
	                    //
	                    // handle regexp
	                    //
	                    var in_char_class = false;
	                    while (parser_pos < input_length &&
	                            ((esc || in_char_class || input.charAt(parser_pos) !== sep) &&
	                            !acorn.newline.test(input.charAt(parser_pos)))) {
	                        resulting_string += input.charAt(parser_pos);
	                        if (!esc) {
	                            esc = input.charAt(parser_pos) === '\\';
	                            if (input.charAt(parser_pos) === '[') {
	                                in_char_class = true;
	                            } else if (input.charAt(parser_pos) === ']') {
	                                in_char_class = false;
	                            }
	                        } else {
	                            esc = false;
	                        }
	                        parser_pos += 1;
	                    }
	                } else if (opts.e4x && sep === '<') {
	                    //
	                    // handle e4x xml literals
	                    //
	                    var xmlRegExp = /<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])\s*([-a-zA-Z:0-9_.]+=('[^']*'|"[^"]*"|{[^{}]*})\s*)*(\/?)\s*>/g;
	                    var xmlStr = input.slice(parser_pos - 1);
	                    var match = xmlRegExp.exec(xmlStr);
	                    if (match && match.index === 0) {
	                        var rootTag = match[2];
	                        var depth = 0;
	                        while (match) {
	                            var isEndTag = !! match[1];
	                            var tagName = match[2];
	                            var isSingletonTag = ( !! match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
	                            if (tagName === rootTag && !isSingletonTag) {
	                                if (isEndTag) {
	                                    --depth;
	                                } else {
	                                    ++depth;
	                                }
	                            }
	                            if (depth <= 0) {
	                                break;
	                            }
	                            match = xmlRegExp.exec(xmlStr);
	                        }
	                        var xmlLength = match ? match.index + match[0].length : xmlStr.length;
	                        parser_pos += xmlLength - 1;
	                        return [xmlStr.slice(0, xmlLength), "TK_STRING"];
	                    }
	                } else {
	                    //
	                    // handle string
	                    //
	                    // Template strings can travers lines without escape characters.
	                    // Other strings cannot
	                    while (parser_pos < input_length &&
	                            (esc || (input.charAt(parser_pos) !== sep &&
	                            (sep === '`' || !acorn.newline.test(input.charAt(parser_pos)))))) {
	                        resulting_string += input.charAt(parser_pos);
	                        if (esc) {
	                            if (input.charAt(parser_pos) === 'x' || input.charAt(parser_pos) === 'u') {
	                                has_char_escapes = true;
	                            }
	                            esc = false;
	                        } else {
	                            esc = input.charAt(parser_pos) === '\\';
	                        }
	                        parser_pos += 1;
	                    }

	                }

	                if (has_char_escapes && opts.unescape_strings) {
	                    resulting_string = unescape_string(resulting_string);
	                }

	                if (parser_pos < input_length && input.charAt(parser_pos) === sep) {
	                    resulting_string += sep;
	                    parser_pos += 1;

	                    if (sep === '/') {
	                        // regexps may have modifiers /regexp/MOD , so fetch those, too
	                        // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
	                        while (parser_pos < input_length && acorn.isIdentifierStart(input.charCodeAt(parser_pos))) {
	                            resulting_string += input.charAt(parser_pos);
	                            parser_pos += 1;
	                        }
	                    }
	                }
	                return [resulting_string, 'TK_STRING'];
	            }

	            if (c === '#') {

	                if (tokens.length === 0 && input.charAt(parser_pos) === '!') {
	                    // shebang
	                    resulting_string = c;
	                    while (parser_pos < input_length && c !== '\n') {
	                        c = input.charAt(parser_pos);
	                        resulting_string += c;
	                        parser_pos += 1;
	                    }
	                    return [trim(resulting_string) + '\n', 'TK_UNKNOWN'];
	                }



	                // Spidermonkey-specific sharp variables for circular references
	                // https://developer.mozilla.org/En/Sharp_variables_in_JavaScript
	                // http://mxr.mozilla.org/mozilla-central/source/js/src/jsscan.cpp around line 1935
	                var sharp = '#';
	                if (parser_pos < input_length && digit.test(input.charAt(parser_pos))) {
	                    do {
	                        c = input.charAt(parser_pos);
	                        sharp += c;
	                        parser_pos += 1;
	                    } while (parser_pos < input_length && c !== '#' && c !== '=');
	                    if (c === '#') {
	                        //
	                    } else if (input.charAt(parser_pos) === '[' && input.charAt(parser_pos + 1) === ']') {
	                        sharp += '[]';
	                        parser_pos += 2;
	                    } else if (input.charAt(parser_pos) === '{' && input.charAt(parser_pos + 1) === '}') {
	                        sharp += '{}';
	                        parser_pos += 2;
	                    }
	                    return [sharp, 'TK_WORD'];
	                }
	            }

	            if (c === '<' && input.substring(parser_pos - 1, parser_pos + 3) === '<!--') {
	                parser_pos += 3;
	                c = '<!--';
	                while (input.charAt(parser_pos) !== '\n' && parser_pos < input_length) {
	                    c += input.charAt(parser_pos);
	                    parser_pos++;
	                }
	                in_html_comment = true;
	                return [c, 'TK_COMMENT'];
	            }

	            if (c === '-' && in_html_comment && input.substring(parser_pos - 1, parser_pos + 2) === '-->') {
	                in_html_comment = false;
	                parser_pos += 2;
	                return ['-->', 'TK_COMMENT'];
	            }

	            if (c === '.') {
	                return [c, 'TK_DOT'];
	            }

	            if (in_array(c, punct)) {
	                while (parser_pos < input_length && in_array(c + input.charAt(parser_pos), punct)) {
	                    c += input.charAt(parser_pos);
	                    parser_pos += 1;
	                    if (parser_pos >= input_length) {
	                        break;
	                    }
	                }

	                if (c === ',') {
	                    return [c, 'TK_COMMA'];
	                } else if (c === '=') {
	                    return [c, 'TK_EQUALS'];
	                } else {
	                    return [c, 'TK_OPERATOR'];
	                }
	            }

	            return [c, 'TK_UNKNOWN'];
	        }


	        function unescape_string(s) {
	            var esc = false,
	                out = '',
	                pos = 0,
	                s_hex = '',
	                escaped = 0,
	                c;

	            while (esc || pos < s.length) {

	                c = s.charAt(pos);
	                pos++;

	                if (esc) {
	                    esc = false;
	                    if (c === 'x') {
	                        // simple hex-escape \x24
	                        s_hex = s.substr(pos, 2);
	                        pos += 2;
	                    } else if (c === 'u') {
	                        // unicode-escape, \u2134
	                        s_hex = s.substr(pos, 4);
	                        pos += 4;
	                    } else {
	                        // some common escape, e.g \n
	                        out += '\\' + c;
	                        continue;
	                    }
	                    if (!s_hex.match(/^[0123456789abcdefABCDEF]+$/)) {
	                        // some weird escaping, bail out,
	                        // leaving whole string intact
	                        return s;
	                    }

	                    escaped = parseInt(s_hex, 16);

	                    if (escaped >= 0x00 && escaped < 0x20) {
	                        // leave 0x00...0x1f escaped
	                        if (c === 'x') {
	                            out += '\\x' + s_hex;
	                        } else {
	                            out += '\\u' + s_hex;
	                        }
	                        continue;
	                    } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
	                        // single-quote, apostrophe, backslash - escape these
	                        out += '\\' + String.fromCharCode(escaped);
	                    } else if (c === 'x' && escaped > 0x7e && escaped <= 0xff) {
	                        // we bail out on \x7f..\xff,
	                        // leaving whole string escaped,
	                        // as it's probably completely binary
	                        return s;
	                    } else {
	                        out += String.fromCharCode(escaped);
	                    }
	                } else if (c === '\\') {
	                    esc = true;
	                } else {
	                    out += c;
	                }
	            }
	            return out;
	        }

	    }


	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return { js_beautify: js_beautify };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var js_beautify = require("beautify").js_beautify`.
	        exports.js_beautify = js_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.js_beautify = js_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.js_beautify = js_beautify;
	    }

	}());


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.


	 CSS Beautifier
	---------------

	    Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)

	    Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	        http://jsbeautifier.org/

	    Usage:
	        css_beautify(source_text);
	        css_beautify(source_text, options);

	    The options are (default in brackets):
	        indent_size (4)                   — indentation size,
	        indent_char (space)               — character to indent with,
	        selector_separator_newline (true) - separate selectors with newline or
	                                            not (e.g. "a,\nbr" or "a, br")
	        end_with_newline (false)          - end with a newline
	        newline_between_rules (true)      - add a new line after every css rule

	    e.g

	    css_beautify(css_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t',
	      'selector_separator': ' ',
	      'end_with_newline': false,
	      'newline_between_rules': true
	    });
	*/

	// http://www.w3.org/TR/CSS21/syndata.html#tokenization
	// http://www.w3.org/TR/css3-syntax/

	(function() {
	    function css_beautify(source_text, options) {
	        options = options || {};
	        var indentSize = options.indent_size || 4;
	        var indentCharacter = options.indent_char || ' ';
	        var selectorSeparatorNewline = (options.selector_separator_newline === undefined) ? true : options.selector_separator_newline;
	        var end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;
	        var newline_between_rules = (options.newline_between_rules === undefined) ? true : options.newline_between_rules;

	        // compatibility
	        if (typeof indentSize === "string") {
	            indentSize = parseInt(indentSize, 10);
	        }


	        // tokenizer
	        var whiteRe = /^\s+$/;
	        var wordRe = /[\w$\-_]/;

	        var pos = -1,
	            ch;
	        var parenLevel = 0;

	        function next() {
	            ch = source_text.charAt(++pos);
	            return ch || '';
	        }

	        function peek(skipWhitespace) {
	            var prev_pos = pos;
	            if (skipWhitespace) {
	                eatWhitespace();
	            }
	            result = source_text.charAt(pos + 1) || '';
	            pos = prev_pos - 1;
	            next();
	            return result;
	        }

	        function eatString(endChars) {
	            var start = pos;
	            while (next()) {
	                if (ch === "\\") {
	                    next();
	                } else if (endChars.indexOf(ch) !== -1) {
	                    break;
	                } else if (ch === "\n") {
	                    break;
	                }
	            }
	            return source_text.substring(start, pos + 1);
	        }

	        function peekString(endChar) {
	            var prev_pos = pos;
	            var str = eatString(endChar);
	            pos = prev_pos - 1;
	            next();
	            return str;
	        }

	        function eatWhitespace() {
	            var result = '';
	            while (whiteRe.test(peek())) {
	                next();
	                result += ch;
	            }
	            return result;
	        }

	        function skipWhitespace() {
	            var result = '';
	            if (ch && whiteRe.test(ch)) {
	                result = ch;
	            }
	            while (whiteRe.test(next())) {
	                result += ch;
	            }
	            return result;
	        }

	        function eatComment(singleLine) {
	            var start = pos;
	            singleLine = peek() === "/";
	            next();
	            while (next()) {
	                if (!singleLine && ch === "*" && peek() === "/") {
	                    next();
	                    break;
	                } else if (singleLine && ch === "\n") {
	                    return source_text.substring(start, pos);
	                }
	            }

	            return source_text.substring(start, pos) + ch;
	        }


	        function lookBack(str) {
	            return source_text.substring(pos - str.length, pos).toLowerCase() ===
	                str;
	        }

	        // Nested pseudo-class if we are insideRule
	        // and the next special character found opens
	        // a new block
	        function foundNestedPseudoClass() {
	            for (var i = pos + 1; i < source_text.length; i++) {
	                var ch = source_text.charAt(i);
	                if (ch === "{") {
	                    return true;
	                } else if (ch === ";" || ch === "}" || ch === ")") {
	                    return false;
	                }
	            }
	            return false;
	        }

	        // printer
	        var basebaseIndentString = source_text.match(/^[\t ]*/)[0];
	        var singleIndent = new Array(indentSize + 1).join(indentCharacter);
	        var indentLevel = 0;
	        var nestedLevel = 0;

	        function indent() {
	            indentLevel++;
	            basebaseIndentString += singleIndent;
	        }

	        function outdent() {
	            indentLevel--;
	            basebaseIndentString = basebaseIndentString.slice(0, -indentSize);
	        }

	        var print = {};
	        print["{"] = function(ch) {
	            print.singleSpace();
	            output.push(ch);
	            print.newLine();
	        };
	        print["}"] = function(ch) {
	            print.newLine();
	            output.push(ch);
	            print.newLine();
	        };

	        print._lastCharWhitespace = function() {
	            return whiteRe.test(output[output.length - 1]);
	        };

	        print.newLine = function(keepWhitespace) {
	            if (!keepWhitespace) {
	                print.trim();
	            }

	            if (output.length) {
	                output.push('\n');
	            }
	            if (basebaseIndentString) {
	                output.push(basebaseIndentString);
	            }
	        };
	        print.singleSpace = function() {
	            if (output.length && !print._lastCharWhitespace()) {
	                output.push(' ');
	            }
	        };

	        print.trim = function() {
	            while (print._lastCharWhitespace()) {
	                output.pop();
	            }
	        };


	        var output = [];
	        if (basebaseIndentString) {
	            output.push(basebaseIndentString);
	        }
	        /*_____________________--------------------_____________________*/

	        var insideRule = false;
	        var enteringConditionalGroup = false;
	        var top_ch = '';
	        var last_top_ch = '';

	        while (true) {
	            var whitespace = skipWhitespace();
	            var isAfterSpace = whitespace !== '';
	            var isAfterNewline = whitespace.indexOf('\n') !== -1;
	            last_top_ch = top_ch;
	            top_ch = ch;

	            if (!ch) {
	                break;
	            } else if (ch === '/' && peek() === '*') { /* css comment */
	                var header = lookBack("");
	                print.newLine();
	                output.push(eatComment());
	                print.newLine();
	                if (header) {
	                    print.newLine(true);
	                }
	            } else if (ch === '/' && peek() === '/') { // single line comment
	                if (!isAfterNewline && last_top_ch !== '{') {
	                    print.trim();
	                }
	                print.singleSpace();
	                output.push(eatComment());
	                print.newLine();
	            } else if (ch === '@') {
	                // pass along the space we found as a separate item
	                if (isAfterSpace) {
	                    print.singleSpace();
	                }
	                output.push(ch);

	                // strip trailing space, if present, for hash property checks
	                var variableOrRule = peekString(": ,;{}()[]/='\"").replace(/\s$/, '');

	                // might be a nesting at-rule
	                if (variableOrRule in css_beautify.NESTED_AT_RULE) {
	                    nestedLevel += 1;
	                    if (variableOrRule in css_beautify.CONDITIONAL_GROUP_RULE) {
	                        enteringConditionalGroup = true;
	                    }
	                } else if (': '.indexOf(variableOrRule[variableOrRule.length - 1]) >= 0) {
	                    //we have a variable, add it and insert one space before continuing
	                    next();
	                    variableOrRule = eatString(": ").replace(/\s$/, '');
	                    output.push(variableOrRule);
	                    print.singleSpace();
	                }
	            } else if (ch === '{') {
	                if (peek(true) === '}') {
	                    eatWhitespace();
	                    next();
	                    print.singleSpace();
	                    output.push("{}");
	                    print.newLine();
	                    if (newline_between_rules && indentLevel === 0) {
	                        print.newLine(true);
	                    }
	                } else {
	                    indent();
	                    print["{"](ch);
	                    // when entering conditional groups, only rulesets are allowed
	                    if (enteringConditionalGroup) {
	                        enteringConditionalGroup = false;
	                        insideRule = (indentLevel > nestedLevel);
	                    } else {
	                        // otherwise, declarations are also allowed
	                        insideRule = (indentLevel >= nestedLevel);
	                    }
	                }
	            } else if (ch === '}') {
	                outdent();
	                print["}"](ch);
	                insideRule = false;
	                if (nestedLevel) {
	                    nestedLevel--;
	                }
	                if (newline_between_rules && indentLevel === 0) {
	                    print.newLine(true);
	                }
	            } else if (ch === ":") {
	                eatWhitespace();
	                if ((insideRule || enteringConditionalGroup) &&
	                    !(lookBack("&") || foundNestedPseudoClass())) {
	                    // 'property: value' delimiter
	                    // which could be in a conditional group query
	                    output.push(':');
	                    print.singleSpace();
	                } else {
	                    // sass/less parent reference don't use a space
	                    // sass nested pseudo-class don't use a space
	                    if (peek() === ":") {
	                        // pseudo-element
	                        next();
	                        output.push("::");
	                    } else {
	                        // pseudo-class
	                        output.push(':');
	                    }
	                }
	            } else if (ch === '"' || ch === '\'') {
	                if (isAfterSpace) {
	                    print.singleSpace();
	                }
	                output.push(eatString(ch));
	            } else if (ch === ';') {
	                output.push(ch);
	                print.newLine();
	            } else if (ch === '(') { // may be a url
	                if (lookBack("url")) {
	                    output.push(ch);
	                    eatWhitespace();
	                    if (next()) {
	                        if (ch !== ')' && ch !== '"' && ch !== '\'') {
	                            output.push(eatString(')'));
	                        } else {
	                            pos--;
	                        }
	                    }
	                } else {
	                    parenLevel++;
	                    if (isAfterSpace) {
	                        print.singleSpace();
	                    }
	                    output.push(ch);
	                    eatWhitespace();
	                }
	            } else if (ch === ')') {
	                output.push(ch);
	                parenLevel--;
	            } else if (ch === ',') {
	                output.push(ch);
	                eatWhitespace();
	                if (!insideRule && selectorSeparatorNewline && parenLevel < 1) {
	                    print.newLine();
	                } else {
	                    print.singleSpace();
	                }
	            } else if (ch === ']') {
	                output.push(ch);
	            } else if (ch === '[') {
	                if (isAfterSpace) {
	                    print.singleSpace();
	                }
	                output.push(ch);
	            } else if (ch === '=') { // no whitespace before or after
	                eatWhitespace()
	                ch = '=';
	                output.push(ch);
	            } else {
	                if (isAfterSpace) {
	                    print.singleSpace();
	                }

	                output.push(ch);
	            }
	        }


	        var sweetCode = output.join('').replace(/[\r\n\t ]+$/, '');

	        // establish end_with_newline
	        if (end_with_newline) {
	            sweetCode += "\n";
	        }

	        return sweetCode;
	    }

	    // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
	    css_beautify.NESTED_AT_RULE = {
	        "@page": true,
	        "@font-face": true,
	        "@keyframes": true,
	        // also in CONDITIONAL_GROUP_RULE below
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };
	    css_beautify.CONDITIONAL_GROUP_RULE = {
	        "@media": true,
	        "@supports": true,
	        "@document": true
	    };

	    /*global define */
	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return {
	                css_beautify: css_beautify
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        exports.css_beautify = css_beautify;
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.css_beautify = css_beautify;
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.css_beautify = css_beautify;
	    }

	}());


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2013 Einar Lielmanis and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.


	 Style HTML
	---------------

	  Written by Nochum Sossonko, (nsossonko@hotmail.com)

	  Based on code initially developed by: Einar Lielmanis, <einar@jsbeautifier.org>
	    http://jsbeautifier.org/

	  Usage:
	    style_html(html_source);

	    style_html(html_source, options);

	  The options are:
	    indent_inner_html (default false)  — indent <head> and <body> sections,
	    indent_size (default 4)          — indentation size,
	    indent_char (default space)      — character to indent with,
	    wrap_line_length (default 250)            -  maximum amount of characters per line (0 = disable)
	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	    unformatted (defaults to inline tags) - list of tags, that shouldn't be reformatted
	    indent_scripts (default normal)  - "keep"|"separate"|"normal"
	    preserve_newlines (default true) - whether existing line breaks before elements should be preserved
	                                        Only works before elements, not inside tags or for text.
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk
	    indent_handlebars (default false) - format and indent {{#foo}} and {{/foo}}
	    end_with_newline (false)          - end with a newline


	    e.g.

	    style_html(html_source, {
	      'indent_inner_html': false,
	      'indent_size': 2,
	      'indent_char': ' ',
	      'wrap_line_length': 78,
	      'brace_style': 'expand',
	      'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u'],
	      'preserve_newlines': true,
	      'max_preserve_newlines': 5,
	      'indent_handlebars': false
	    });
	*/

	(function() {

	    function trim(s) {
	        return s.replace(/^\s+|\s+$/g, '');
	    }

	    function ltrim(s) {
	        return s.replace(/^\s+/g, '');
	    }

	    function rtrim(s) {
	        return s.replace(/\s+$/g,'');
	    }

	    function style_html(html_source, options, js_beautify, css_beautify) {
	        //Wrapper function to invoke all the necessary constructors and deal with the output.

	        var multi_parser,
	            indent_inner_html,
	            indent_size,
	            indent_character,
	            wrap_line_length,
	            brace_style,
	            unformatted,
	            preserve_newlines,
	            max_preserve_newlines,
	            indent_handlebars,
	            wrap_attributes,
	            wrap_attributes_indent_size,
	            end_with_newline;

	        options = options || {};

	        // backwards compatibility to 1.3.4
	        if ((options.wrap_line_length === undefined || parseInt(options.wrap_line_length, 10) === 0) &&
	                (options.max_char !== undefined && parseInt(options.max_char, 10) !== 0)) {
	            options.wrap_line_length = options.max_char;
	        }

	        indent_inner_html = (options.indent_inner_html === undefined) ? false : options.indent_inner_html;
	        indent_size = (options.indent_size === undefined) ? 4 : parseInt(options.indent_size, 10);
	        indent_character = (options.indent_char === undefined) ? ' ' : options.indent_char;
	        brace_style = (options.brace_style === undefined) ? 'collapse' : options.brace_style;
	        wrap_line_length =  parseInt(options.wrap_line_length, 10) === 0 ? 32786 : parseInt(options.wrap_line_length || 250, 10);
	        unformatted = options.unformatted || ['a', 'span', 'img', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd', 'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'pre', 'address', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	        preserve_newlines = (options.preserve_newlines === undefined) ? true : options.preserve_newlines;
	        max_preserve_newlines = preserve_newlines ?
	            (isNaN(parseInt(options.max_preserve_newlines, 10)) ? 32786 : parseInt(options.max_preserve_newlines, 10))
	            : 0;
	        indent_handlebars = (options.indent_handlebars === undefined) ? false : options.indent_handlebars;
	        wrap_attributes = (options.wrap_attributes === undefined) ? 'auto' : options.wrap_attributes;
	        wrap_attributes_indent_size = (options.wrap_attributes_indent_size === undefined) ? indent_size : parseInt(options.wrap_attributes_indent_size, 10) || indent_size;
	        end_with_newline = (options.end_with_newline === undefined) ? false : options.end_with_newline;

	        function Parser() {

	            this.pos = 0; //Parser position
	            this.token = '';
	            this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
	            this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
	                parent: 'parent1',
	                parentcount: 1,
	                parent1: ''
	            };
	            this.tag_type = '';
	            this.token_text = this.last_token = this.last_text = this.token_type = '';
	            this.newlines = 0;
	            this.indent_content = indent_inner_html;

	            this.Utils = { //Uilities made available to the various functions
	                whitespace: "\n\r\t ".split(''),
	                single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?='.split(','), //all the single tags for HTML
	                extra_liners: 'head,body,/html'.split(','), //for tags that need a line of whitespace before them
	                in_array: function(what, arr) {
	                    for (var i = 0; i < arr.length; i++) {
	                        if (what === arr[i]) {
	                            return true;
	                        }
	                    }
	                    return false;
	                }
	            };

	            // Return true iff the given text is composed entirely of
	            // whitespace.
	            this.is_whitespace = function(text) {
	                for (var n = 0; n < text.length; text++) {
	                    if (!this.Utils.in_array(text.charAt(n), this.Utils.whitespace)) {
	                        return false;
	                    }
	                }
	                return true;
	            };

	            this.traverse_whitespace = function() {
	                var input_char = '';

	                input_char = this.input.charAt(this.pos);
	                if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                    this.newlines = 0;
	                    while (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (preserve_newlines && input_char === '\n' && this.newlines <= max_preserve_newlines) {
	                            this.newlines += 1;
	                        }

	                        this.pos++;
	                        input_char = this.input.charAt(this.pos);
	                    }
	                    return true;
	                }
	                return false;
	            };

	            // Append a space to the given content (string array) or, if we are
	            // at the wrap_line_length, append a newline/indentation.
	            this.space_or_wrap = function(content) {
	                if (this.line_char_count >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
	                    this.print_newline(false, content);
	                    this.print_indentation(content);
	                } else {
	                    this.line_char_count++;
	                    content.push(' ');
	                }
	            };

	            this.get_content = function() { //function to capture regular content between tags
	                var input_char = '',
	                    content = [],
	                    space = false; //if a space is needed

	                while (this.input.charAt(this.pos) !== '<') {
	                    if (this.pos >= this.input.length) {
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }

	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                        continue;
	                    }

	                    if (indent_handlebars) {
	                        // Handlebars parsing is complicated.
	                        // {{#foo}} and {{/foo}} are formatted tags.
	                        // {{something}} should get treated as content, except:
	                        // {{else}} specifically behaves like {{#if}} and {{/if}}
	                        var peek3 = this.input.substr(this.pos, 3);
	                        if (peek3 === '{{#' || peek3 === '{{/') {
	                            // These are tags and not content.
	                            break;
	                        } else if (this.input.substr(this.pos, 2) === '{{') {
	                            if (this.get_tag(true) === '{{else}}') {
	                                break;
	                            }
	                        }
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                    this.line_char_count++;
	                    content.push(input_char); //letter at-a-time (or string) inserted to an array
	                }
	                return content.length ? content.join('') : '';
	            };

	            this.get_contents_to = function(name) { //get the full content of a script or style to pass to js_beautify
	                if (this.pos === this.input.length) {
	                    return ['', 'TK_EOF'];
	                }
	                var input_char = '';
	                var content = '';
	                var reg_match = new RegExp('</' + name + '\\s*>', 'igm');
	                reg_match.lastIndex = this.pos;
	                var reg_array = reg_match.exec(this.input);
	                var end_script = reg_array ? reg_array.index : this.input.length; //absolute end of script
	                if (this.pos < end_script) { //get everything in between the script tags
	                    content = this.input.substring(this.pos, end_script);
	                    this.pos = end_script;
	                }
	                return content;
	            };

	            this.record_tag = function(tag) { //function to record a tag and its parent in this.tags Object
	                if (this.tags[tag + 'count']) { //check for the existence of this tag type
	                    this.tags[tag + 'count']++;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                } else { //otherwise initialize this tag type
	                    this.tags[tag + 'count'] = 1;
	                    this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
	                }
	                this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
	                this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
	            };

	            this.retrieve_tag = function(tag) { //function to retrieve the opening tag to the corresponding closer
	                if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
	                    var temp_parent = this.tags.parent; //check to see if it's a closable tag.
	                    while (temp_parent) { //till we reach '' (the initial value);
	                        if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
	                            break;
	                        }
	                        temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
	                    }
	                    if (temp_parent) { //if we caught something
	                        this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
	                        this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
	                    }
	                    delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
	                    delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
	                    if (this.tags[tag + 'count'] === 1) {
	                        delete this.tags[tag + 'count'];
	                    } else {
	                        this.tags[tag + 'count']--;
	                    }
	                }
	            };

	            this.indent_to_tag = function(tag) {
	                // Match the indentation level to the last use of this tag, but don't remove it.
	                if (!this.tags[tag + 'count']) {
	                    return;
	                }
	                var temp_parent = this.tags.parent;
	                while (temp_parent) {
	                    if (tag + this.tags[tag + 'count'] === temp_parent) {
	                        break;
	                    }
	                    temp_parent = this.tags[temp_parent + 'parent'];
	                }
	                if (temp_parent) {
	                    this.indent_level = this.tags[tag + this.tags[tag + 'count']];
	                }
	            };

	            this.get_tag = function(peek) { //function to get a full tag and parse its type
	                var input_char = '',
	                    content = [],
	                    comment = '',
	                    space = false,
	                    first_attr = true,
	                    tag_start, tag_end,
	                    tag_start_char,
	                    orig_pos = this.pos,
	                    orig_line_char_count = this.line_char_count;

	                peek = peek !== undefined ? peek : false;

	                do {
	                    if (this.pos >= this.input.length) {
	                        if (peek) {
	                            this.pos = orig_pos;
	                            this.line_char_count = orig_line_char_count;
	                        }
	                        return content.length ? content.join('') : ['', 'TK_EOF'];
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;

	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
	                        space = true;
	                        continue;
	                    }

	                    if (input_char === "'" || input_char === '"') {
	                        input_char += this.get_unformatted(input_char);
	                        space = true;

	                    }

	                    if (input_char === '=') { //no space before =
	                        space = false;
	                    }

	                    if (content.length && content[content.length - 1] !== '=' && input_char !== '>' && space) {
	                        //no space after = or before >
	                        this.space_or_wrap(content);
	                        space = false;
	                        if (!first_attr && wrap_attributes === 'force' &&  input_char !== '/') {
	                            this.print_newline(true, content);
	                            this.print_indentation(content);
	                            for (var count = 0; count < wrap_attributes_indent_size; count++) {
	                                content.push(indent_character);
	                            }
	                        }
	                        for (var i = 0; i < content.length; i++) {
	                          if (content[i] === ' ') {
	                            first_attr = false;
	                            break;
	                          }
	                        }
	                    }

	                    if (indent_handlebars && tag_start_char === '<') {
	                        // When inside an angle-bracket tag, put spaces around
	                        // handlebars not inside of strings.
	                        if ((input_char + this.input.charAt(this.pos)) === '{{') {
	                            input_char += this.get_unformatted('}}');
	                            if (content.length && content[content.length - 1] !== ' ' && content[content.length - 1] !== '<') {
	                                input_char = ' ' + input_char;
	                            }
	                            space = true;
	                        }
	                    }

	                    if (input_char === '<' && !tag_start_char) {
	                        tag_start = this.pos - 1;
	                        tag_start_char = '<';
	                    }

	                    if (indent_handlebars && !tag_start_char) {
	                        if (content.length >= 2 && content[content.length - 1] === '{' && content[content.length - 2] === '{') {
	                            if (input_char === '#' || input_char === '/') {
	                                tag_start = this.pos - 3;
	                            } else {
	                                tag_start = this.pos - 2;
	                            }
	                            tag_start_char = '{';
	                        }
	                    }

	                    this.line_char_count++;
	                    content.push(input_char); //inserts character at-a-time (or string)

	                    if (content[1] && content[1] === '!') { //if we're in a comment, do something special
	                        // We treat all comments as literals, even more than preformatted tags
	                        // we just look for the appropriate close tag
	                        content = [this.get_comment(tag_start)];
	                        break;
	                    }

	                    if (indent_handlebars && tag_start_char === '{' && content.length > 2 && content[content.length - 2] === '}' && content[content.length - 1] === '}') {
	                        break;
	                    }
	                } while (input_char !== '>');

	                var tag_complete = content.join('');
	                var tag_index;
	                var tag_offset;

	                if (tag_complete.indexOf(' ') !== -1) { //if there's whitespace, thats where the tag name ends
	                    tag_index = tag_complete.indexOf(' ');
	                } else if (tag_complete[0] === '{') {
	                    tag_index = tag_complete.indexOf('}');
	                } else { //otherwise go with the tag ending
	                    tag_index = tag_complete.indexOf('>');
	                }
	                if (tag_complete[0] === '<' || !indent_handlebars) {
	                    tag_offset = 1;
	                } else {
	                    tag_offset = tag_complete[2] === '#' ? 3 : 2;
	                }
	                var tag_check = tag_complete.substring(tag_offset, tag_index).toLowerCase();
	                if (tag_complete.charAt(tag_complete.length - 2) === '/' ||
	                    this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                    }
	                } else if (indent_handlebars && tag_complete[0] === '{' && tag_check === 'else') {
	                    if (!peek) {
	                        this.indent_to_tag('if');
	                        this.tag_type = 'HANDLEBARS_ELSE';
	                        this.indent_content = true;
	                        this.traverse_whitespace();
	                    }
	                } else if (this.is_unformatted(tag_check, unformatted)) { // do not reformat the "unformatted" tags
	                    comment = this.get_unformatted('</' + tag_check + '>', tag_complete); //...delegate to get_unformatted function
	                    content.push(comment);
	                    tag_end = this.pos - 1;
	                    this.tag_type = 'SINGLE';
	                } else if (tag_check === 'script' &&
	                    (tag_complete.search('type') === -1 ||
	                    (tag_complete.search('type') > -1 &&
	                    tag_complete.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/) > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'SCRIPT';
	                    }
	                } else if (tag_check === 'style' &&
	                    (tag_complete.search('type') === -1 ||
	                    (tag_complete.search('type') > -1 && tag_complete.search('text/css') > -1))) {
	                    if (!peek) {
	                        this.record_tag(tag_check);
	                        this.tag_type = 'STYLE';
	                    }
	                } else if (tag_check.charAt(0) === '!') { //peek for <! comment
	                    // for comments content is already correct.
	                    if (!peek) {
	                        this.tag_type = 'SINGLE';
	                        this.traverse_whitespace();
	                    }
	                } else if (!peek) {
	                    if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
	                        this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
	                        this.tag_type = 'END';
	                    } else { //otherwise it's a start-tag
	                        this.record_tag(tag_check); //push it on the tag stack
	                        if (tag_check.toLowerCase() !== 'html') {
	                            this.indent_content = true;
	                        }
	                        this.tag_type = 'START';
	                    }

	                    // Allow preserving of newlines after a start or end tag
	                    if (this.traverse_whitespace()) {
	                        this.space_or_wrap(content);
	                    }

	                    if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
	                        this.print_newline(false, this.output);
	                        if (this.output.length && this.output[this.output.length - 2] !== '\n') {
	                            this.print_newline(true, this.output);
	                        }
	                    }
	                }

	                if (peek) {
	                    this.pos = orig_pos;
	                    this.line_char_count = orig_line_char_count;
	                }

	                return content.join(''); //returns fully formatted tag
	            };

	            this.get_comment = function(start_pos) { //function to return comment content in its entirety
	                // this is will have very poor perf, but will work for now.
	                var comment = '',
	                    delimiter = '>',
	                    matched = false;

	                this.pos = start_pos;
	                input_char = this.input.charAt(this.pos);
	                this.pos++;

	                while (this.pos <= this.input.length) {
	                    comment += input_char;

	                    // only need to check for the delimiter if the last chars match
	                    if (comment[comment.length - 1] === delimiter[delimiter.length - 1] &&
	                        comment.indexOf(delimiter) !== -1) {
	                        break;
	                    }

	                    // only need to search for custom delimiter for the first few characters
	                    if (!matched && comment.length < 10) {
	                        if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
	                            delimiter = '<![endif]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
	                            delimiter = ']]>';
	                            matched = true;
	                        } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
	                            delimiter = ']>';
	                            matched = true;
	                        } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
	                            delimiter = '-->';
	                            matched = true;
	                        }
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;
	                }

	                return comment;
	            };

	            this.get_unformatted = function(delimiter, orig_tag) { //function to return unformatted content in its entirety

	                if (orig_tag && orig_tag.toLowerCase().indexOf(delimiter) !== -1) {
	                    return '';
	                }
	                var input_char = '';
	                var content = '';
	                var min_index = 0;
	                var space = true;
	                do {

	                    if (this.pos >= this.input.length) {
	                        return content;
	                    }

	                    input_char = this.input.charAt(this.pos);
	                    this.pos++;

	                    if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
	                        if (!space) {
	                            this.line_char_count--;
	                            continue;
	                        }
	                        if (input_char === '\n' || input_char === '\r') {
	                            content += '\n';
	                            /*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
	                for (var i=0; i<this.indent_level; i++) {
	                  content += this.indent_string;
	                }
	                space = false; //...and make sure other indentation is erased
	                */
	                            this.line_char_count = 0;
	                            continue;
	                        }
	                    }
	                    content += input_char;
	                    this.line_char_count++;
	                    space = true;

	                    if (indent_handlebars && input_char === '{' && content.length && content[content.length - 2] === '{') {
	                        // Handlebars expressions in strings should also be unformatted.
	                        content += this.get_unformatted('}}');
	                        // These expressions are opaque.  Ignore delimiters found in them.
	                        min_index = content.length;
	                    }
	                } while (content.toLowerCase().indexOf(delimiter, min_index) === -1);
	                return content;
	            };

	            this.get_token = function() { //initial handler for token-retrieval
	                var token;

	                if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
	                    var type = this.last_token.substr(7);
	                    token = this.get_contents_to(type);
	                    if (typeof token !== 'string') {
	                        return token;
	                    }
	                    return [token, 'TK_' + type];
	                }
	                if (this.current_mode === 'CONTENT') {
	                    token = this.get_content();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        return [token, 'TK_CONTENT'];
	                    }
	                }

	                if (this.current_mode === 'TAG') {
	                    token = this.get_tag();
	                    if (typeof token !== 'string') {
	                        return token;
	                    } else {
	                        var tag_name_type = 'TK_TAG_' + this.tag_type;
	                        return [token, tag_name_type];
	                    }
	                }
	            };

	            this.get_full_indent = function(level) {
	                level = this.indent_level + level || 0;
	                if (level < 1) {
	                    return '';
	                }

	                return Array(level + 1).join(this.indent_string);
	            };

	            this.is_unformatted = function(tag_check, unformatted) {
	                //is this an HTML5 block-level link?
	                if (!this.Utils.in_array(tag_check, unformatted)) {
	                    return false;
	                }

	                if (tag_check.toLowerCase() !== 'a' || !this.Utils.in_array('a', unformatted)) {
	                    return true;
	                }

	                //at this point we have an  tag; is its first child something we want to remain
	                //unformatted?
	                var next_tag = this.get_tag(true /* peek. */ );

	                // test next_tag to see if it is just html tag (no external content)
	                var tag = (next_tag || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);

	                // if next_tag comes back but is not an isolated tag, then
	                // let's treat the 'a' tag as having content
	                // and respect the unformatted option
	                if (!tag || this.Utils.in_array(tag, unformatted)) {
	                    return true;
	                } else {
	                    return false;
	                }
	            };

	            this.printer = function(js_source, indent_character, indent_size, wrap_line_length, brace_style) { //handles input/output and some other printing functions

	                this.input = js_source || ''; //gets the input for the Parser
	                this.output = [];
	                this.indent_character = indent_character;
	                this.indent_string = '';
	                this.indent_size = indent_size;
	                this.brace_style = brace_style;
	                this.indent_level = 0;
	                this.wrap_line_length = wrap_line_length;
	                this.line_char_count = 0; //count to see if wrap_line_length was exceeded

	                for (var i = 0; i < this.indent_size; i++) {
	                    this.indent_string += this.indent_character;
	                }

	                this.print_newline = function(force, arr) {
	                    this.line_char_count = 0;
	                    if (!arr || !arr.length) {
	                        return;
	                    }
	                    if (force || (arr[arr.length - 1] !== '\n')) { //we might want the extra line
	                        if ((arr[arr.length - 1] !== '\n')) {
	                            arr[arr.length - 1] = rtrim(arr[arr.length - 1]);
	                        }
	                        arr.push('\n');
	                    }
	                };

	                this.print_indentation = function(arr) {
	                    for (var i = 0; i < this.indent_level; i++) {
	                        arr.push(this.indent_string);
	                        this.line_char_count += this.indent_string.length;
	                    }
	                };

	                this.print_token = function(text) {
	                    // Avoid printing initial whitespace.
	                    if (this.is_whitespace(text) && !this.output.length) {
	                        return;
	                    }
	                    if (text || text !== '') {
	                        if (this.output.length && this.output[this.output.length - 1] === '\n') {
	                            this.print_indentation(this.output);
	                            text = ltrim(text);
	                        }
	                    }
	                    this.print_token_raw(text);
	                };

	                this.print_token_raw = function(text) {
	                    // If we are going to print newlines, truncate trailing
	                    // whitespace, as the newlines will represent the space.
	                    if (this.newlines > 0) {
	                        text = rtrim(text);
	                    }

	                    if (text && text !== '') {
	                        if (text.length > 1 && text[text.length - 1] === '\n') {
	                            // unformatted tags can grab newlines as their last character
	                            this.output.push(text.slice(0, -1));
	                            this.print_newline(false, this.output);
	                        } else {
	                            this.output.push(text);
	                        }
	                    }

	                    for (var n = 0; n < this.newlines; n++) {
	                        this.print_newline(n > 0, this.output);
	                    }
	                    this.newlines = 0;
	                };

	                this.indent = function() {
	                    this.indent_level++;
	                };

	                this.unindent = function() {
	                    if (this.indent_level > 0) {
	                        this.indent_level--;
	                    }
	                };
	            };
	            return this;
	        }

	        /*_____________________--------------------_____________________*/

	        multi_parser = new Parser(); //wrapping functions Parser
	        multi_parser.printer(html_source, indent_character, indent_size, wrap_line_length, brace_style); //initialize starting values

	        while (true) {
	            var t = multi_parser.get_token();
	            multi_parser.token_text = t[0];
	            multi_parser.token_type = t[1];

	            if (multi_parser.token_type === 'TK_EOF') {
	                break;
	            }

	            switch (multi_parser.token_type) {
	                case 'TK_TAG_START':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_STYLE':
	                case 'TK_TAG_SCRIPT':
	                    multi_parser.print_newline(false, multi_parser.output);
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_END':
	                    //Print new line only if the tag has no content and has child
	                    if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
	                        var tag_name = multi_parser.token_text.match(/\w+/)[0];
	                        var tag_extracted_from_last_output = null;
	                        if (multi_parser.output.length) {
	                            tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length - 1].match(/(?:<|{{#)\s*(\w+)/);
	                        }
	                        if (tag_extracted_from_last_output === null ||
	                            (tag_extracted_from_last_output[1] !== tag_name && !multi_parser.Utils.in_array(tag_extracted_from_last_output[1], unformatted))) {
	                            multi_parser.print_newline(false, multi_parser.output);
	                        }
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_SINGLE':
	                    // Don't add a newline before elements that should remain unformatted.
	                    var tag_check = multi_parser.token_text.match(/^\s*<([a-z-]+)/i);
	                    if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)) {
	                        multi_parser.print_newline(false, multi_parser.output);
	                    }
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_TAG_HANDLEBARS_ELSE':
	                    multi_parser.print_token(multi_parser.token_text);
	                    if (multi_parser.indent_content) {
	                        multi_parser.indent();
	                        multi_parser.indent_content = false;
	                    }
	                    multi_parser.current_mode = 'CONTENT';
	                    break;
	                case 'TK_CONTENT':
	                    multi_parser.print_token(multi_parser.token_text);
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                case 'TK_STYLE':
	                case 'TK_SCRIPT':
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_newline(false, multi_parser.output);
	                        var text = multi_parser.token_text,
	                            _beautifier,
	                            script_indent_level = 1;
	                        if (multi_parser.token_type === 'TK_SCRIPT') {
	                            _beautifier = typeof js_beautify === 'function' && js_beautify;
	                        } else if (multi_parser.token_type === 'TK_STYLE') {
	                            _beautifier = typeof css_beautify === 'function' && css_beautify;
	                        }

	                        if (options.indent_scripts === "keep") {
	                            script_indent_level = 0;
	                        } else if (options.indent_scripts === "separate") {
	                            script_indent_level = -multi_parser.indent_level;
	                        }

	                        var indentation = multi_parser.get_full_indent(script_indent_level);
	                        if (_beautifier) {
	                            // call the Beautifier if avaliable
	                            text = _beautifier(text.replace(/^\s*/, indentation), options);
	                        } else {
	                            // simply indent the string otherwise
	                            var white = text.match(/^\s*/)[0];
	                            var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
	                            var reindent = multi_parser.get_full_indent(script_indent_level - _level);
	                            text = text.replace(/^\s*/, indentation)
	                                .replace(/\r\n|\r|\n/g, '\n' + reindent)
	                                .replace(/\s+$/, '');
	                        }
	                        if (text) {
	                            multi_parser.print_token_raw(text);
	                            multi_parser.print_newline(true, multi_parser.output);
	                        }
	                    }
	                    multi_parser.current_mode = 'TAG';
	                    break;
	                default:
	                    // We should not be getting here but we don't want to drop input on the floor
	                    // Just output the text and move on
	                    if (multi_parser.token_text !== '') {
	                        multi_parser.print_token(multi_parser.token_text);
	                    }
	                    break;
	            }
	            multi_parser.last_token = multi_parser.token_type;
	            multi_parser.last_text = multi_parser.token_text;
	        }
	        var sweet_code = multi_parser.output.join('').replace(/[\r\n\t ]+$/, '');
	        if (end_with_newline) {
	            sweet_code += '\n';
	        }
	        return sweet_code;
	    }

	    if (true) {
	        // Add support for AMD ( https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property- )
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, __webpack_require__(12), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function(requireamd) {
	            var js_beautify =  __webpack_require__(12);
	            var css_beautify =  __webpack_require__(13);

	            return {
	              html_beautify: function(html_source, options) {
	                return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	              }
	            };
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        // Add support for CommonJS. Just put this file somewhere on your require.paths
	        // and you will be able to `var html_beautify = require("beautify").html_beautify`.
	        var js_beautify = require('./beautify.js');
	        var css_beautify = require('./beautify-css.js');

	        exports.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, js_beautify.js_beautify, css_beautify.css_beautify);
	        };
	    } else if (typeof window !== "undefined") {
	        // If we're running a web page and don't have either of the above, add our one global
	        window.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, window.js_beautify, window.css_beautify);
	        };
	    } else if (typeof global !== "undefined") {
	        // If we don't even have window, try global.
	        global.html_beautify = function(html_source, options) {
	            return style_html(html_source, options, global.js_beautify, global.css_beautify);
	        };
	    }

	}());


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(2)
	var kDrag = __webpack_require__(16)

	module.exports = Vue.extend({
	  replace: true,
	  ready: function () {
	    kDrag.bind(this.$el)
	  }
	})

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){"use strict";var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame,a=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.msCancelAnimationFrame,r={};r.bind=function(r,o){function i(){r.removeEventListener("mousedown",u),r.removeEventListener("touchstart",u)}function c(e){for(var t in e)void 0!==e[t]&&(d[t]=e[t])}function u(r){function o(e){if(!(1>g||"touchmove"===e.type&&e.targetTouches[0].target!==b)){m=s(e);var t;y=e,1===g&&(Math.abs(m.x-v.x)>=d.adsorb||Math.abs(m.y-v.y)>=d.adsorb)&&(i(),g=2,t=u("k.dragstart",y),x.dispatchEvent(t)),2===g&&(t=u("k.dragSync",y),x.dispatchEvent(t))}}function i(e){var t,a,r;2===g&&(a=(m.x-h.x)/(e-f||17),r=(m.y-h.y)/(e-f||17),p=Math.abs(a)>=Math.abs(p||0)||Math.abs(a-(p||0))>Math.abs(p||0)?a:.7*p+.3*a,E=Math.abs(r)>=Math.abs(E||0)||Math.abs(r-(E||0))>Math.abs(E||0)?r:.7*E+.3*r,(m.x!==h.x||m.y!==h.y)&&(t=u("k.drag",y),x.dispatchEvent(t)),h=m,f=e),l=n(i)}function c(n){if(a(l),!n||"touchend"!==n.type||n.changedTouches[0].target===b){var r;2===g&&(m=s(n),r=u("k.dragend",n),x.dispatchEvent(r)),g=0,t.removeEventListener("mousemove",o,!0),x.removeEventListener("touchmove",o,!0),t.removeEventListener("mouseup",c,!0),x.removeEventListener("touchend",c,!0),x.removeEventListener("touchcancel",c,!0),e.removeEventListener("blur",c,!0)}}function u(e,n){var a=t.createEvent("Event");return a.initEvent(e,!1,!1),a.clientX=m.x,a.clientY=m.y,a.deltaX=m.x-v.x,a.deltaY=m.y-v.y,a.stepX=m.x-h.x,a.stepY=m.y-h.y,a.vx=p||0,a.vy=E||0,n.type.indexOf("mouse")>-1?a.pointerType="mouse":n.type.indexOf("touch")>-1?(a.pointerType="touch",a.touchId=n.changedTouches[0].identifier):a.pointerType=n.type,a.prevent=function(){g=0,c()},Object.defineProperty(a,"state",{get:function(){return g}}),a.ctrlKey=n.ctrlKey,a.dragTarget=b,a.originalEvent=n,a}var v,m,h,f,y,p,E,b,l,g=0,x=r.currentTarget;r.which&&1!==r.which||(h=m=v=s(r),b=r.target,g=1,t.addEventListener("mousemove",o,!0),x.addEventListener("touchmove",o,!0),t.addEventListener("mouseup",c,!0),x.addEventListener("touchend",c,!0),x.addEventListener("touchcancel",c,!0),e.addEventListener("blur",c,!0))}function s(e){var t,n,a;return e.type.indexOf("touch")>-1?(t="touchmove"===e.type?e.targetTouches[0]:e.changedTouches[0],n=t.clientX,a=t.clientY):(n=e.clientX,a=e.clientY),{x:n,y:a}}var d={adsorb:0};return c(o),r.addEventListener("mousedown",u),r.addEventListener("touchstart",u),{unbind:i,configure:c}},true?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):e.kDrag=r}(window,document);

/***/ }
/******/ ]);