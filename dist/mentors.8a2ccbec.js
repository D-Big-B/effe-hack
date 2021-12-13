// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../assets/mentors/Sunidhi_kashyap.png":[function(require,module,exports) {
module.exports = "/Sunidhi_kashyap.b227663a.png";
},{}],"../assets/mentors/Roshini.png":[function(require,module,exports) {
module.exports = "/Roshini.61d81d11.png";
},{}],"../assets/mentors/Khushi.png":[function(require,module,exports) {
module.exports = "/Khushi.73208662.png";
},{}],"../assets/mentors/Uttkarsh.png":[function(require,module,exports) {
module.exports = "/Uttkarsh.51f69edd.png";
},{}],"../assets/mentors/Gokalp.png":[function(require,module,exports) {
module.exports = "/Gokalp.c3a21de4.png";
},{}],"../assets/mentors/Prashant.png":[function(require,module,exports) {
module.exports = "/Prashant.bf38c8dc.png";
},{}],"../assets/mentors/saurav.png":[function(require,module,exports) {
module.exports = "/saurav.97ddca41.png";
},{}],"../assets/mentors/manav.png":[function(require,module,exports) {
module.exports = "/manav.ea394d66.png";
},{}],"../assets/mentors/kartik.png":[function(require,module,exports) {
module.exports = "/kartik.fec8199a.png";
},{}],"../script/mentors.js":[function(require,module,exports) {
"use strict";

var _Sunidhi_kashyap = _interopRequireDefault(require("./../assets/mentors/Sunidhi_kashyap.png"));

var _Roshini = _interopRequireDefault(require("./../assets/mentors/Roshini.png"));

var _Khushi = _interopRequireDefault(require("./../assets/mentors/Khushi.png"));

var _Uttkarsh = _interopRequireDefault(require("./../assets/mentors/Uttkarsh.png"));

var _Gokalp = _interopRequireDefault(require("./../assets/mentors/Gokalp.png"));

var _Prashant = _interopRequireDefault(require("./../assets/mentors/Prashant.png"));

var _saurav = _interopRequireDefault(require("./../assets/mentors/saurav.png"));

var _manav = _interopRequireDefault(require("./../assets/mentors/manav.png"));

var _kartik = _interopRequireDefault(require("./../assets/mentors/kartik.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mentorsContainer = document.querySelector(".mentors__container");
var mentors = [{
  name: "Sunidhi",
  surname: "Kashyap",
  image: _Sunidhi_kashyap.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Roshini",
  surname: "Prajapati",
  image: _Roshini.default,
  designation: "SDE-Apple Inc."
}, // {
//   name: "Achint",
//   surname: "Agarwal",
//   image: "./../assets/mentors/avaatar.jpg",
//   designation: "SDE-Apple Inc.",
// },
{
  name: "Khushi",
  surname: "Gupta",
  image: _Khushi.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Utkarsh",
  surname: "K.",
  image: _Uttkarsh.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Gokalp",
  surname: " ",
  image: _Gokalp.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Prashant",
  surname: "Katiyar",
  image: _Prashant.default,
  designation: "SDE-Apple Inc."
}, // {
//   name: "Tushar",
//   surname: "Kumar",
//   image: "./../assets/mentors/avaatar.jpg",
//   designation: "SDE-Apple Inc.",
// },
{
  name: "Saurav",
  surname: "Chandawad",
  image: _saurav.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Manav",
  surname: "Agarwal",
  image: _manav.default,
  designation: "SDE-Apple Inc."
}, {
  name: "Kartik",
  surname: "Gupta",
  image: _kartik.default,
  designation: "SDE-Apple Inc."
}];

for (var _i = 0, _mentors = mentors; _i < _mentors.length; _i++) {
  var mentor = _mentors[_i];
  mentorsContainer.innerHTML += "\n    <div class=\"mentors__container__card\">\n  <img src = ".concat(mentor.image, " alt=\"\" />\n  <h1 class=\"name\">").concat(mentor.name, "</h1>\n  <h1 class=\"surname\">").concat(mentor.surname, "</h1>\n</div>\n\n    ");
}
},{"./../assets/mentors/Sunidhi_kashyap.png":"../assets/mentors/Sunidhi_kashyap.png","./../assets/mentors/Roshini.png":"../assets/mentors/Roshini.png","./../assets/mentors/Khushi.png":"../assets/mentors/Khushi.png","./../assets/mentors/Uttkarsh.png":"../assets/mentors/Uttkarsh.png","./../assets/mentors/Gokalp.png":"../assets/mentors/Gokalp.png","./../assets/mentors/Prashant.png":"../assets/mentors/Prashant.png","./../assets/mentors/saurav.png":"../assets/mentors/saurav.png","./../assets/mentors/manav.png":"../assets/mentors/manav.png","./../assets/mentors/kartik.png":"../assets/mentors/kartik.png"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65509" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../script/mentors.js"], null)
//# sourceMappingURL=/mentors.8a2ccbec.js.map