// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jvag4":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "f3dbb11da33a98a0";
module.bundle.HMR_BUNDLE_ID = "4741e58c8074a44c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"01gaw":[function(require,module,exports) {
var _filters = require("./filters");
(0, _filters.initFilters)();
console.log("running...");

},{"./filters":"baVhZ"}],"baVhZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFilters", ()=>initFilters);
var _mixitup = require("mixitup"); // npm install mixitup
var _mixitupDefault = parcelHelpers.interopDefault(_mixitup);
var _mixitupMultifilterMinJs = require("./mixitup-multifilter.min.js"); // local file
var _mixitupMultifilterMinJsDefault = parcelHelpers.interopDefault(_mixitupMultifilterMinJs);
var _mixitupPaginationMinJs = require("./mixitup-pagination.min.js"); // local file
var _mixitupPaginationMinJsDefault = parcelHelpers.interopDefault(_mixitupPaginationMinJs);
/**
 * Create an instance of QueryStringObject from a search-string (URI)
 * @param str a search string, e.g. 'orderby=default&color=red&page=2'
 * @returns an instance of QueryStringObject
 */ const createQueryObjectFromString = (str)=>{
    let query = {
        page: 1,
        orderby: "",
        category: "",
        color: ""
    };
    /**
   * Divide input string into filter property groups, populate
   * query object with data from input string.
   */ let splitString = str.split("&");
    splitString.forEach((s)=>{
        if (s.includes("page")) query.page = parseInt(s.split("=")[1]);
        if (s.includes("orderby")) query.orderby = s.split("=")[1];
        if (s.includes("category")) query.category = s.split("=")[1];
        if (s.includes("color")) query.color = s.split("=")[1];
    });
    return query;
};
/**
 * Create a search string from an object
 * @param query an instance of QueryStringObject
 * @returns a search string
 */ const createSearchString = (query)=>{
    let str = "";
    str += query.page > 0 ? "page=" + query.page : 1;
    str += query.orderby != "" ? "&orderby=" + query.orderby : "&orderby=default";
    str += query.category != "" ? "&category=" + query.category : "";
    str += query.color != "" ? "&color=" + query.color : "";
    return str;
};
/**
 * Update search string to reflect current active filters
 */ const updateSearchString = ()=>{
    let activePage = document.querySelector(".mixitup-page.mixitup-page-active");
    let currentPage = activePage ? parseInt(activePage.getAttribute("data-page")) : 1;
    let activeOrderby = document.querySelector(".control-orderby.mixitup-control-active");
    let activeCategories = document.querySelectorAll(".control-category.mixitup-control-active");
    let activeColors = document.querySelectorAll(".control-color.mixitup-control-active");
    let orderbyString = activeOrderby ? activeOrderby.getAttribute("data-sort-type") : "default";
    let categoryString = "";
    let colorString = "";
    if (activeCategories.length > 0) activeCategories.forEach((category)=>{
        categoryString += category.getAttribute("data-label-clean") + ",";
    });
    if (activeColors.length > 0) activeColors.forEach((color)=>{
        colorString += color.getAttribute("data-label-clean") + ",";
    });
    let queryObject = {
        page: currentPage,
        orderby: orderbyString,
        category: categoryString.replace(/,$/, ""),
        color: colorString.replace(/,$/, "")
    };
    let searchString = createSearchString(queryObject);
    window.history.replaceState({}, "", "?" + searchString);
};
/**
 * Activate/set filters. Called on page load
 * Creates an object from the current search string in the URL and
 * uses Mixitup Mulitifilter API to activate filters
 * @param mixer an instance of Mixitup
 */ const activateFilters = (mixer)=>{
    if (window.location.search.length > 1) {
        let initialQuery = createQueryObjectFromString(window.location.search);
        if (mixer != null) {
            // Categories
            let categoryQueryArr = initialQuery.category.split(",");
            let categorySelectorsArr = [];
            if (categoryQueryArr[0].trim() != "") categoryQueryArr.forEach((category)=>{
                categorySelectorsArr.push("[data-category~=" + category + "]");
            });
            // Colors
            let colorsQueryArr = initialQuery.color.split(",");
            let colorsSelectorsArr = [];
            if (colorsQueryArr[0].trim() != "") colorsQueryArr.forEach((color)=>{
                colorsSelectorsArr.push("[data-color~=" + color + "]");
            });
            // Set filter group selectors : mixer.setFilterGroupSelectors('filter-group-name', 'filter-selectors')
            mixer.setFilterGroupSelectors("category", categorySelectorsArr);
            mixer.setFilterGroupSelectors("color", colorsSelectorsArr);
            // Parse filter groups
            mixer.parseFilterGroups();
            // Sorting / orderby
            mixer.sort(initialQuery.orderby);
            // Paginate
            let currentPage = initialQuery.page > 0 ? initialQuery.page : 1;
            mixer.paginate(currentPage);
        }
    }
};
const mixEndFunction = ()=>{
    updateSearchString();
};
function initFilters() {
    const mixContainer = document.querySelector(".mix-container");
    (0, _mixitupDefault.default).use((0, _mixitupMultifilterMinJsDefault.default));
    (0, _mixitupDefault.default).use((0, _mixitupPaginationMinJsDefault.default));
    /**
   * Initialise mixer
   */ let mixer;
    if (mixContainer) mixer = (0, _mixitupDefault.default)(mixContainer, {
        selectors: {
            target: ".mix"
        },
        animation: {
            enable: false
        },
        multifilter: {
            enable: true
        },
        classNames: {
            elementPager: "page"
        },
        pagination: {
            limit: 10
        },
        callbacks: {
            onMixEnd: mixEndFunction
        }
    });
    /**
   * Set filters on load
   */ activateFilters(mixer);
}

},{"mixitup":"e1CPr","./mixitup-multifilter.min.js":"5ZhHE","./mixitup-pagination.min.js":"amAWQ","@parcel/transformer-js/src/esmodule-helpers.js":"76hQh"}],"e1CPr":[function(require,module,exports) {
/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */ (function(window1) {
    "use strict";
    var mixitup = null, h = null;
    (function() {
        var VENDORS = [
            "webkit",
            "moz",
            "o",
            "ms"
        ], canary = window1.document.createElement("div"), i = -1;
        // window.requestAnimationFrame
        for(i = 0; i < VENDORS.length && !window1.requestAnimationFrame; i++)window1.requestAnimationFrame = window1[VENDORS[i] + "RequestAnimationFrame"];
        // Element.nextElementSibling
        if (typeof canary.nextElementSibling === "undefined") Object.defineProperty(window1.Element.prototype, "nextElementSibling", {
            get: function() {
                var el = this.nextSibling;
                while(el){
                    if (el.nodeType === 1) return el;
                    el = el.nextSibling;
                }
                return null;
            }
        });
        // Element.matches
        (function(ElementPrototype) {
            ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function(selector) {
                return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
            };
        })(window1.Element.prototype);
        // Object.keys
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        if (!Object.keys) Object.keys = function() {
            var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = false, dontEnums = [], dontEnumsLength = -1;
            hasDontEnumBug = !({
                toString: null
            }).propertyIsEnumerable("toString");
            dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ];
            dontEnumsLength = dontEnums.length;
            return function(obj) {
                var result = [], prop = "", i = -1;
                if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) throw new TypeError("Object.keys called on non-object");
                for(prop in obj)if (hasOwnProperty.call(obj, prop)) result.push(prop);
                if (hasDontEnumBug) {
                    for(i = 0; i < dontEnumsLength; i++)if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                }
                return result;
            };
        }();
        // Array.isArray
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
        if (!Array.isArray) Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
        // Object.create
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
        if (typeof Object.create !== "function") Object.create = function(undefined) {
            var Temp = function() {};
            return function(prototype, propertiesObject) {
                if (prototype !== Object(prototype) && prototype !== null) throw TypeError("Argument must be an object, or null");
                Temp.prototype = prototype || {};
                var result = new Temp();
                Temp.prototype = null;
                if (propertiesObject !== undefined) Object.defineProperties(result, propertiesObject);
                if (prototype === null) /* jshint ignore:start */ result.__proto__ = null;
                return result;
            };
        }();
        // String.prototyoe.trim
        if (!String.prototype.trim) String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
        // Array.prototype.indexOf
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        if (!Array.prototype.indexOf) Array.prototype.indexOf = function(searchElement) {
            var n, k, t, len;
            if (this === null) throw new TypeError();
            t = Object(this);
            len = t.length >>> 0;
            if (len === 0) return -1;
            n = 0;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n !== n) n = 0;
                else if (n !== 0 && n !== Infinity && n !== -Infinity) n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            if (n >= len) return -1;
            for(k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++){
                if (k in t && t[k] === searchElement) return k;
            }
            return -1;
        };
        // Function.prototype.bind
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        if (!Function.prototype.bind) Function.prototype.bind = function(oThis) {
            var aArgs, self, FNOP, fBound;
            if (typeof this !== "function") throw new TypeError();
            aArgs = Array.prototype.slice.call(arguments, 1);
            self = this;
            FNOP = function() {};
            fBound = function() {
                return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
            };
            if (this.prototype) FNOP.prototype = this.prototype;
            fBound.prototype = new FNOP();
            return fBound;
        };
        // Element.prototype.dispatchEvent
        if (!window1.Element.prototype.dispatchEvent) window1.Element.prototype.dispatchEvent = function(event) {
            try {
                return this.fireEvent("on" + event.type, event);
            } catch (err) {}
        };
    })();
    /**
     * The `mixitup()` "factory" function creates and returns individual instances
     * of MixItUp, known as "mixers", on which API methods can be called.
     *
     * When loading MixItUp via a script tag, the factory function is accessed
     * via the global variable `mixitup`. When using a module loading
     * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
     * exported into your module when you require the MixItUp library.
     *
     * @example
     * mixitup(container [,config] [,foreignDoc])
     *
     * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
     * var containerEl = document.querySelector('.container');
     *
     * var mixer = mixitup(containerEl);
     *
     * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
     * var mixer = mixitup('.container');
     *
     * @example <caption>Example 3: Passing a configuration object</caption>
     * var mixer = mixitup(containerEl, {
     *     animation: {
     *         effects: 'fade scale(0.5)'
     *     }
     * });
     *
     * @example <caption>Example 4: Passing an iframe reference</caption>
     * var mixer = mixitup(containerEl, config, foreignDocument);
     *
     * @global
     * @namespace
     * @public
     * @kind        function
     * @since       3.0.0
     * @param       {(Element|string)}  container
     *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
     * @param       {object}            [config]
     *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
     * @param       {object}            [foreignDoc]
     *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
     * @return      {mixitup.Mixer}
     *      A "mixer" object holding the MixItUp instance.
     */ mixitup = function(container, config, foreignDoc) {
        var el = null, returnCollection = false, instance = null, facade = null, doc = null, output = null, instances = [], id = "", elements = [], i = -1;
        doc = foreignDoc || window1.document;
        if (returnCollection = arguments[3]) // A non-documented 4th paramater enabling control of multiple instances
        returnCollection = typeof returnCollection === "boolean";
        if (typeof container === "string") elements = doc.querySelectorAll(container);
        else if (container && typeof container === "object" && h.isElement(container, doc)) elements = [
            container
        ];
        else if (container && typeof container === "object" && container.length) // Although not documented, the container may also be an array-like list of
        // elements such as a NodeList or jQuery collection, is returnCollection is true
        elements = container;
        else throw new Error(mixitup.messages.errorFactoryInvalidContainer());
        if (elements.length < 1) throw new Error(mixitup.messages.errorFactoryContainerNotFound());
        for(i = 0; el = elements[i]; i++){
            if (i > 0 && !returnCollection) break;
            if (!el.id) {
                id = "MixItUp" + h.randomHex();
                el.id = id;
            } else id = el.id;
            if (mixitup.instances[id] instanceof mixitup.Mixer) {
                instance = mixitup.instances[id];
                if (!config || config && config.debug && config.debug.showWarnings !== false) console.warn(mixitup.messages.warningFactoryPreexistingInstance());
            } else {
                instance = new mixitup.Mixer();
                instance.attach(el, doc, id, config);
                mixitup.instances[id] = instance;
            }
            facade = new mixitup.Facade(instance);
            if (config && config.debug && config.debug.enable) instances.push(instance);
            else instances.push(facade);
        }
        if (returnCollection) output = new mixitup.Collection(instances);
        else // Return the first instance regardless
        output = instances[0];
        return output;
    };
    /**
     * The `.use()` static method is used to extend the functionality of mixitup with compatible
     * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
     *
     * You need only call the `.use()` function once per project, per extension, as module loaders
     * will cache a single reference to MixItUp inclusive of all changes made.
     *
     * @example
     * mixitup.use(extension)
     *
     * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
     *
     * import mixitup from 'mixitup';
     * import mixitupPagination from 'mixitup-pagination';
     *
     * mixitup.use(mixitupPagination);
     *
     * // All mixers created by the factory function in all modules will now
     * // have pagination functionality
     *
     * var mixer = mixitup('.container');
     *
     * @public
     * @name     use
     * @memberof mixitup
     * @kind     function
     * @static
     * @since    3.0.0
     * @param    {*}  extension   A reference to the extension or library to be used.
     * @return   {void}
     */ mixitup.use = function(extension) {
        mixitup.Base.prototype.callActions.call(mixitup, "beforeUse", arguments);
        // Call the extension's factory function, passing
        // the mixitup factory as a paramater
        if (typeof extension === "function" && extension.TYPE === "mixitup-extension") // Mixitup extension
        {
            if (typeof mixitup.extensions[extension.NAME] === "undefined") {
                extension(mixitup);
                mixitup.extensions[extension.NAME] = extension;
            }
        } else if (extension.fn && extension.fn.jquery) // jQuery
        mixitup.libraries.$ = extension;
        mixitup.Base.prototype.callActions.call(mixitup, "afterUse", arguments);
    };
    mixitup.instances = {};
    mixitup.extensions = {};
    mixitup.libraries = {};
    /**
     * @private
     */ h = {
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {boolean}
         */ hasClass: function(el, cls) {
            return !!el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */ addClass: function(el, cls) {
            if (!this.hasClass(el, cls)) el.className += el.className ? " " + cls : cls;
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        cls
         * @return  {void}
         */ removeClass: function(el, cls) {
            if (this.hasClass(el, cls)) {
                var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                el.className = el.className.replace(reg, " ").trim();
            }
        },
        /**
         * Merges the properties of the source object onto the
         * target object. Alters the target object.
         *
         * @private
         * @param   {object}    destination
         * @param   {object}    source
         * @param   {boolean}   [deep=false]
         * @param   {boolean}   [handleErrors=false]
         * @return  {void}
         */ extend: function(destination, source, deep, handleErrors) {
            var sourceKeys = [], key = "", i = -1;
            deep = deep || false;
            handleErrors = handleErrors || false;
            try {
                if (Array.isArray(source)) for(i = 0; i < source.length; i++)sourceKeys.push(i);
                else if (source) sourceKeys = Object.keys(source);
                for(i = 0; i < sourceKeys.length; i++){
                    key = sourceKeys[i];
                    if (!deep || typeof source[key] !== "object" || this.isElement(source[key])) // All non-object properties, or all properties if shallow extend
                    destination[key] = source[key];
                    else if (Array.isArray(source[key])) {
                        // Arrays
                        if (!destination[key]) destination[key] = [];
                        this.extend(destination[key], source[key], deep, handleErrors);
                    } else {
                        // Objects
                        if (!destination[key]) destination[key] = {};
                        this.extend(destination[key], source[key], deep, handleErrors);
                    }
                }
            } catch (err) {
                if (handleErrors) this.handleExtendError(err, destination);
                else throw err;
            }
            return destination;
        },
        /**
         * @private
         * @param   {Error}  err
         * @param   {object} destination
         * @return  {void}
         */ handleExtendError: function(err, destination) {
            var re = /property "?(\w*)"?[,:] object/i, matches = null, erroneous = "", message = "", suggestion = "", probableMatch = "", key = "", mostMatchingChars = -1, i = -1;
            if (err instanceof TypeError && (matches = re.exec(err.message))) {
                erroneous = matches[1];
                for(key in destination){
                    i = 0;
                    while(i < erroneous.length && erroneous.charAt(i) === key.charAt(i))i++;
                    if (i > mostMatchingChars) {
                        mostMatchingChars = i;
                        probableMatch = key;
                    }
                }
                if (mostMatchingChars > 1) suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                    probableMatch: probableMatch
                });
                message = mixitup.messages.errorConfigInvalidProperty({
                    erroneous: erroneous,
                    suggestion: suggestion
                });
                throw new TypeError(message);
            }
            throw err;
        },
        /**
         * @private
         * @param   {string} str
         * @return  {function}
         */ template: function(str) {
            var re = /\${([\w]*)}/g, dynamics = {}, matches = null;
            while(matches = re.exec(str))dynamics[matches[1]] = new RegExp("\\${" + matches[1] + "}", "g");
            return function(data) {
                var key = "", output = str;
                data = data || {};
                for(key in dynamics)output = output.replace(dynamics[key], typeof data[key] !== "undefined" ? data[key] : "");
                return output;
            };
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @param   {boolean}       useCapture
         * @return  {void}
         */ on: function(el, type, fn, useCapture) {
            if (!el) return;
            if (el.addEventListener) el.addEventListener(type, fn, useCapture);
            else if (el.attachEvent) {
                el["e" + type + fn] = fn;
                el[type + fn] = function() {
                    el["e" + type + fn](window1.event);
                };
                el.attachEvent("on" + type, el[type + fn]);
            }
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        type
         * @param   {function}      fn
         * @return  {void}
         */ off: function(el, type, fn) {
            if (!el) return;
            if (el.removeEventListener) el.removeEventListener(type, fn, false);
            else if (el.detachEvent) {
                el.detachEvent("on" + type, el[type + fn]);
                el[type + fn] = null;
            }
        },
        /**
         * @private
         * @param   {string}      eventType
         * @param   {object}      detail
         * @param   {Document}    [doc]
         * @return  {CustomEvent}
         */ getCustomEvent: function(eventType, detail, doc) {
            var event = null;
            doc = doc || window1.document;
            if (typeof window1.CustomEvent === "function") event = new window1.CustomEvent(eventType, {
                detail: detail,
                bubbles: true,
                cancelable: true
            });
            else if (typeof doc.createEvent === "function") {
                event = doc.createEvent("CustomEvent");
                event.initCustomEvent(eventType, true, true, detail);
            } else {
                event = doc.createEventObject(), event.type = eventType;
                event.returnValue = false;
                event.cancelBubble = false;
                event.detail = detail;
            }
            return event;
        },
        /**
         * @private
         * @param   {Event} e
         * @return  {Event}
         */ getOriginalEvent: function(e) {
            if (e.touches && e.touches.length) return e.touches[0];
            else if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
            else return e;
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        selector
         * @return  {Number}
         */ index: function(el, selector) {
            var i = 0;
            while((el = el.previousElementSibling) !== null)if (!selector || el.matches(selector)) ++i;
            return i;
        },
        /**
         * Converts a dash or snake-case string to camel case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */ camelCase: function(str) {
            return str.toLowerCase().replace(/([_-][a-z])/g, function($1) {
                return $1.toUpperCase().replace(/[_-]/, "");
            });
        },
        /**
         * Converts a dash or snake-case string to pascal case.
         *
         * @private
         * @param   {string}    str
         * @param   {boolean}   [isPascal]
         * @return  {string}
         */ pascalCase: function(str) {
            return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
        },
        /**
         * Converts a camel or pascal-case string to dash case.
         *
         * @private
         * @param   {string}    str
         * @return  {string}
         */ dashCase: function(str) {
            return str.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
        },
        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {boolean}
         */ isElement: function(el, doc) {
            doc = doc || window1.document;
            if (window1.HTMLElement && el instanceof window1.HTMLElement) return true;
            else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) return true;
            else return el !== null && el.nodeType === 1 && typeof el.nodeName === "string";
        },
        /**
         * @private
         * @param   {string}            htmlString
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {DocumentFragment}
         */ createElement: function(htmlString, doc) {
            var frag = null, temp = null;
            doc = doc || window1.document;
            frag = doc.createDocumentFragment();
            temp = doc.createElement("div");
            temp.innerHTML = htmlString.trim();
            while(temp.firstChild)frag.appendChild(temp.firstChild);
            return frag;
        },
        /**
         * @private
         * @param   {Node} node
         * @return  {void}
         */ removeWhitespace: function(node) {
            var deleting;
            while(node && node.nodeName === "#text"){
                deleting = node;
                node = node.previousSibling;
                deleting.parentElement && deleting.parentElement.removeChild(deleting);
            }
        },
        /**
         * @private
         * @param   {Array<*>}  a
         * @param   {Array<*>}  b
         * @return  {boolean}
         */ isEqualArray: function(a, b) {
            var i = a.length;
            if (i !== b.length) return false;
            while(i--){
                if (a[i] !== b[i]) return false;
            }
            return true;
        },
        /**
         * @private
         * @param   {object}  a
         * @param   {object}  b
         * @return  {boolean}
         */ deepEquals: function(a, b) {
            var key;
            if (typeof a === "object" && a && typeof b === "object" && b) {
                if (Object.keys(a).length !== Object.keys(b).length) return false;
                for(key in a){
                    if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                }
            } else if (a !== b) return false;
            return true;
        },
        /**
         * @private
         * @param   {Array<*>}  oldArray
         * @return  {Array<*>}
         */ arrayShuffle: function(oldArray) {
            var newArray = oldArray.slice(), len = newArray.length, i = len, p = -1, t = [];
            while(i--){
                p = ~~(Math.random() * len);
                t = newArray[i];
                newArray[i] = newArray[p];
                newArray[p] = t;
            }
            return newArray;
        },
        /**
         * @private
         * @param   {object}    list
         */ arrayFromList: function(list) {
            var output, i;
            try {
                return Array.prototype.slice.call(list);
            } catch (err) {
                output = [];
                for(i = 0; i < list.length; i++)output.push(list[i]);
                return output;
            }
        },
        /**
         * @private
         * @param   {function}  func
         * @param   {Number}    wait
         * @param   {boolean}   immediate
         * @return  {function}
         */ debounce: function(func, wait, immediate) {
            var timeout;
            return function() {
                var self = this, args = arguments, callNow = immediate && !timeout, later = null;
                later = function() {
                    timeout = null;
                    if (!immediate) func.apply(self, args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(self, args);
            };
        },
        /**
         * @private
         * @param   {HTMLElement}   element
         * @return  {object}
         */ position: function(element) {
            var xPosition = 0, yPosition = 0, offsetParent = element;
            while(element){
                xPosition -= element.scrollLeft;
                yPosition -= element.scrollTop;
                if (element === offsetParent) {
                    xPosition += element.offsetLeft;
                    yPosition += element.offsetTop;
                    offsetParent = element.offsetParent;
                }
                element = element.parentElement;
            }
            return {
                x: xPosition,
                y: yPosition
            };
        },
        /**
         * @private
         * @param   {object}    node1
         * @param   {object}    node2
         * @return  {Number}
         */ getHypotenuse: function(node1, node2) {
            var distanceX = node1.x - node2.x, distanceY = node1.y - node2.y;
            distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;
            return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
        },
        /**
         * Calcuates the area of intersection between two rectangles and expresses it as
         * a ratio in comparison to the area of the first rectangle.
         *
         * @private
         * @param   {Rect}  box1
         * @param   {Rect}  box2
         * @return  {number}
         */ getIntersectionRatio: function(box1, box2) {
            var controlArea = box1.width * box1.height, intersectionX = -1, intersectionY = -1, intersectionArea = -1, ratio = -1;
            intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
            intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
            intersectionArea = intersectionY * intersectionX;
            ratio = intersectionArea / controlArea;
            return ratio;
        },
        /**
         * @private
         * @param   {object}            el
         * @param   {string}            selector
         * @param   {boolean}           [includeSelf]
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {Element|null}
         */ closestParent: function(el, selector, includeSelf, doc) {
            var parent = el.parentNode;
            doc = doc || window1.document;
            if (includeSelf && el.matches(selector)) return el;
            while(parent && parent != doc.body){
                if (parent.matches && parent.matches(selector)) return parent;
                else if (parent.parentNode) parent = parent.parentNode;
                else return null;
            }
            return null;
        },
        /**
         * @private
         * @param   {HTMLElement}       el
         * @param   {string}            selector
         * @param   {HTMLHtmlElement}   [doc]
         * @return  {NodeList}
         */ children: function(el, selector, doc) {
            var children = [], tempId = "";
            doc = doc || window1.doc;
            if (el) {
                if (!el.id) {
                    tempId = "Temp" + this.randomHexKey();
                    el.id = tempId;
                }
                children = doc.querySelectorAll("#" + el.id + " > " + selector);
                if (tempId) el.removeAttribute("id");
            }
            return children;
        },
        /**
         * Creates a clone of a provided array, with any empty strings removed.
         *
         * @private
         * @param   {Array<*>} originalArray
         * @return  {Array<*>}
         */ clean: function(originalArray) {
            var cleanArray = [], i = -1;
            for(i = 0; i < originalArray.length; i++)if (originalArray[i] !== "") cleanArray.push(originalArray[i]);
            return cleanArray;
        },
        /**
         * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
         *
         * @private
         * @param  {object} libraries
         * @return {h.Deferred}
         */ defer: function(libraries) {
            var deferred = null, promiseWrapper = null, $ = null;
            promiseWrapper = new this.Deferred();
            if (mixitup.features.has.promises) // ES6 native promise or polyfill
            promiseWrapper.promise = new Promise(function(resolve, reject) {
                promiseWrapper.resolve = resolve;
                promiseWrapper.reject = reject;
            });
            else if (($ = window1.jQuery || libraries.$) && typeof $.Deferred === "function") {
                // jQuery
                deferred = $.Deferred();
                promiseWrapper.promise = deferred.promise();
                promiseWrapper.resolve = deferred.resolve;
                promiseWrapper.reject = deferred.reject;
            } else if (window1.console) // No implementation
            console.warn(mixitup.messages.warningNoPromiseImplementation());
            return promiseWrapper;
        },
        /**
         * @private
         * @param   {Array<Promise>}    tasks
         * @param   {object}            libraries
         * @return  {Promise<Array>}
         */ all: function(tasks, libraries) {
            var $ = null;
            if (mixitup.features.has.promises) return Promise.all(tasks);
            else if (($ = window1.jQuery || libraries.$) && typeof $.when === "function") return $.when.apply($, tasks).done(function() {
                // jQuery when returns spread arguments rather than an array or resolutions
                return arguments;
            });
            // No implementation
            if (window1.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
            return [];
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @param   {string}        property
         * @param   {Array<string>} vendors
         * @return  {string}
         */ getPrefix: function(el, property, vendors) {
            var i = -1, prefix = "";
            if (h.dashCase(property) in el.style) return "";
            for(i = 0; prefix = vendors[i]; i++){
                if (prefix + property in el.style) return prefix.toLowerCase();
            }
            return "unsupported";
        },
        /**
         * @private
         * @return  {string}
         */ randomHex: function() {
            return ("00000" + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
        },
        /**
         * @private
         * @param   {HTMLDocument}  [doc]
         * @return  {object}
         */ getDocumentState: function(doc) {
            doc = typeof doc.body === "object" ? doc : window1.document;
            return {
                scrollTop: window1.pageYOffset,
                scrollLeft: window1.pageXOffset,
                docHeight: doc.documentElement.scrollHeight,
                docWidth: doc.documentElement.scrollWidth,
                viewportHeight: doc.documentElement.clientHeight,
                viewportWidth: doc.documentElement.clientWidth
            };
        },
        /**
         * @private
         * @param   {object}    obj
         * @param   {function}  fn
         * @return  {function}
         */ bind: function(obj, fn) {
            return function() {
                return fn.apply(obj, arguments);
            };
        },
        /**
         * @private
         * @param   {HTMLElement}   el
         * @return  {boolean}
         */ isVisible: function(el) {
            var styles = null;
            if (el.offsetParent) return true;
            styles = window1.getComputedStyle(el);
            if (styles.position === "fixed" && styles.visibility !== "hidden" && styles.opacity !== "0") // Fixed elements report no offsetParent,
            // but may still be invisible
            return true;
            return false;
        },
        /**
         * @private
         * @param   {object}    obj
         */ seal: function(obj) {
            if (typeof Object.seal === "function") Object.seal(obj);
        },
        /**
         * @private
         * @param   {object}    obj
         */ freeze: function(obj) {
            if (typeof Object.freeze === "function") Object.freeze(obj);
        },
        /**
         * @private
         * @param   {string}    control
         * @param   {string}    specimen
         * @return  {boolean}
         */ compareVersions: function(control, specimen) {
            var controlParts = control.split("."), specimenParts = specimen.split("."), controlPart = -1, specimenPart = -1, i = -1;
            for(i = 0; i < controlParts.length; i++){
                controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ""));
                specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, "") || 0);
                if (specimenPart < controlPart) return false;
                else if (specimenPart > controlPart) return true;
            }
            return true;
        },
        /**
         * @private
         * @constructor
         */ Deferred: function() {
            this.promise = null;
            this.resolve = null;
            this.reject = null;
            this.id = h.randomHex();
        },
        /**
         * @private
         * @param   {object}  obj
         * @return  {boolean}
         */ isEmptyObject: function(obj) {
            var key = "";
            if (typeof Object.keys === "function") return Object.keys(obj).length === 0;
            for(key in obj){
                if (obj.hasOwnProperty(key)) return false;
            }
            return true;
        },
        /**
         * @param   {mixitup.Config.ClassNames}   classNames
         * @param   {string}                      elementName
         * @param   {string}                      [modifier]
         * @return  {string}
         */ getClassname: function(classNames, elementName, modifier) {
            var classname = "";
            classname += classNames.block;
            if (classname.length) classname += classNames.delineatorElement;
            classname += classNames["element" + this.pascalCase(elementName)];
            if (!modifier) return classname;
            if (classname.length) classname += classNames.delineatorModifier;
            classname += modifier;
            return classname;
        },
        /**
         * Returns the value of a property on a given object via its string key.
         *
         * @param   {object}    obj
         * @param   {string}    stringKey
         * @return  {*} value
         */ getProperty: function(obj, stringKey) {
            var parts = stringKey.split("."), returnCurrent = null, current = "", i = 0;
            if (!stringKey) return obj;
            returnCurrent = function(obj) {
                if (!obj) return null;
                else return obj[current];
            };
            while(i < parts.length){
                current = parts[i];
                obj = returnCurrent(obj);
                i++;
            }
            if (typeof obj !== "undefined") return obj;
            else return null;
        }
    };
    mixitup.h = h;
    /**
     * The Base class adds instance methods to all other extensible MixItUp classes,
     * enabling the calling of any registered hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Base = function() {};
    mixitup.Base.prototype = {
        constructor: mixitup.Base,
        /**
         * Calls any registered hooks for the provided action.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    actionName
         * @param       {Array<*>}  args
         * @return      {void}
         */ callActions: function(actionName, args) {
            var self = this, hooks = self.constructor.actions[actionName], extensionName = "";
            if (!hooks || h.isEmptyObject(hooks)) return;
            for(extensionName in hooks)hooks[extensionName].apply(self, args);
        },
        /**
         * Calls any registered hooks for the provided filter.
         *
         * @memberof    mixitup.Base
         * @private
         * @instance
         * @since       2.0.0
         * @param       {string}    filterName
         * @param       {*}         input
         * @param       {Array<*>}  args
         * @return      {*}
         */ callFilters: function(filterName, input, args) {
            var self = this, hooks = self.constructor.filters[filterName], output = input, extensionName = "";
            if (!hooks || h.isEmptyObject(hooks)) return output;
            args = args || [];
            for(extensionName in hooks){
                args = h.arrayFromList(args);
                args.unshift(output);
                output = hooks[extensionName].apply(self, args);
            }
            return output;
        }
    };
    /**
     * The BaseStatic class holds a set of static methods which are then added to all other
     * extensible MixItUp classes as a means of integrating extensions via the addition of new
     * methods and/or actions and hooks.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.BaseStatic = function() {
        this.actions = {};
        this.filters = {};
        /**
         * Performs a shallow extend on the class's prototype, adding one or more new members to
         * the class in a single operation.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {object} extension
         * @return      {void}
         */ this.extend = function(extension) {
            h.extend(this.prototype, extension);
        };
        /**
         * Registers a function to be called on the action hook of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */ this.registerAction = function(hookName, extensionName, func) {
            (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
        };
        /**
         * Registers a function to be called on the filter of the provided name.
         *
         * @memberof    mixitup.BaseStatic
         * @public
         * @static
         * @since       2.1.0
         * @param       {string}    hookName
         * @param       {string}    extensionName
         * @param       {function}  func
         * @return      {void}
         */ this.registerFilter = function(hookName, extensionName, func) {
            (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
        };
    };
    /**
     * The `mixitup.Features` class performs all feature and CSS prefix detection
     * neccessary for MixItUp to function correctly, as well as storing various
     * string and array constants. All feature decection is on evaluation of the
     * library and stored in a singleton instance for use by other internal classes.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Features = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.boxSizingPrefix = "";
        this.transformPrefix = "";
        this.transitionPrefix = "";
        this.boxSizingPrefix = "";
        this.transformProp = "";
        this.transformRule = "";
        this.transitionProp = "";
        this.perspectiveProp = "";
        this.perspectiveOriginProp = "";
        this.has = new mixitup.Has();
        this.canary = null;
        this.BOX_SIZING_PROP = "boxSizing";
        this.TRANSITION_PROP = "transition";
        this.TRANSFORM_PROP = "transform";
        this.PERSPECTIVE_PROP = "perspective";
        this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin";
        this.VENDORS = [
            "Webkit",
            "moz",
            "O",
            "ms"
        ];
        this.TWEENABLE = [
            "opacity",
            "width",
            "height",
            "marginRight",
            "marginBottom",
            "x",
            "y",
            "scale",
            "translateX",
            "translateY",
            "translateZ",
            "rotateX",
            "rotateY",
            "rotateZ"
        ];
        this.callActions("afterConstruct");
    };
    mixitup.BaseStatic.call(mixitup.Features);
    mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Features.prototype, /** @lends mixitup.Features */ {
        constructor: mixitup.Features,
        /**
         * @private
         * @return  {void}
         */ init: function() {
            var self = this;
            self.callActions("beforeInit", arguments);
            self.canary = document.createElement("div");
            self.setPrefixes();
            self.runTests();
            self.callActions("beforeInit", arguments);
        },
        /**
         * @private
         * @return  {void}
         */ runTests: function() {
            var self = this;
            self.callActions("beforeRunTests", arguments);
            self.has.promises = typeof window1.Promise === "function";
            self.has.transitions = self.transitionPrefix !== "unsupported";
            self.callActions("afterRunTests", arguments);
            h.freeze(self.has);
        },
        /**
         * @private
         * @return  {void}
         */ setPrefixes: function() {
            var self = this;
            self.callActions("beforeSetPrefixes", arguments);
            self.transitionPrefix = h.getPrefix(self.canary, "Transition", self.VENDORS);
            self.transformPrefix = h.getPrefix(self.canary, "Transform", self.VENDORS);
            self.boxSizingPrefix = h.getPrefix(self.canary, "BoxSizing", self.VENDORS);
            self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
            self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
            self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
            self.transformRule = self.transformPrefix ? "-" + self.transformPrefix + "-" + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
            self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
            self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
            self.callActions("afterSetPrefixes", arguments);
        }
    });
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Has = function() {
        this.transitions = false;
        this.promises = false;
        h.seal(this);
    };
    // Assign a singleton instance to `mixitup.features` and initialise:
    mixitup.features = new mixitup.Features();
    mixitup.features.init();
    /**
     * A group of properties defining the mixer's animation and effects settings.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        animation
     * @namespace
     * @public
     * @since       2.0.0
     */ mixitup.ConfigAnimation = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
         * If `false`, all operations will occur instantly and syncronously, although callback
         * functions and any returned promises will still be fulfilled.
         *
         * @example <caption>Example: Create a mixer with all animations disabled</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         enable: false
         *     }
         * });
         *
         * @name        enable
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.enable = true;
        /**
         * A string of one or more space-seperated properties to which transitions will be
         * applied for all filtering animations.
         *
         * Properties can be listed any order or combination, although they will be applied in a specific
         * predefined order to produce consistent results.
         *
         * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
         * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
         *
         * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
         * // As targets are filtered in and out, they will fade between
         * // opacity 1 and 0 and transform between translateZ(-100px) and
         * // translateZ(0).
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateZ(-100px)'
         *     }
         * });
         *
         * @name        effects
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'fade scale'
         */ this.effects = "fade scale";
        /**
         * A string of one or more space-seperated effects to be applied only to filter-in
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsIn: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsIn
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */ this.effectsIn = "";
        /**
         * A string of one or more space-seperated effects to be applied only to filter-out
         * animations, overriding `config.animation.effects` if set.
         *
         * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effectsOut: 'fade translateY(-100%)'
         *     }
         * });
         *
         * @name        effectsOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     ''
         */ this.effectsOut = "";
        /**
         * An integer dictating the duration of all MixItUp animations in milliseconds, not
         * including any additional delay apllied via the `'stagger'` effect.
         *
         * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         duration: 200
         *     }
         * });
         *
         * @name        duration
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     600
         */ this.duration = 600;
        /**
         * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
         * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
         *
         * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'ease-in-out'
         *     }
         * });
         *
         * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
         *     }
         * });
         *
         * @name        easing
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     'ease'
         */ this.easing = "ease";
        /**
         * A boolean dictating whether or not to apply perspective to the MixItUp container
         * during animations. By default, perspective is always applied and creates the
         * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
         * and `rotateY`.
         *
         * You may wish to disable this and define your own perspective settings via CSS.
         *
         * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         applyPerspective: false
         *     }
         * });
         *
         * @name        applyPerspective
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {bolean}
         * @default     true
         */ this.applyPerspective = true;
        /**
         * The perspective distance value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective distance of 2000px</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'rotateY(-25deg)',
         *         perspectiveDistance: '2000px'
         *     }
         * });
         *
         * @name        perspectiveDistance
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '3000px'
         */ this.perspectiveDistance = "3000px";
        /**
         * The perspective-origin value to be applied to the container during animations,
         * affecting any 3D-transform-based effects.
         *
         * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'transateZ(-200px)',
         *         perspectiveOrigin: '100% 0'
         *     }
         * });
         *
         * @name        perspectiveOrigin
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {string}
         * @default     '50% 50%'
         */ this.perspectiveOrigin = "50% 50%";
        /**
         * A boolean dictating whether or not to enable the queuing of operations.
         *
         * If `true` (default), and a control is clicked or an API call is made while another
         * operation is progress, the operation will go into the queue and will be automatically exectuted
         * when the previous operaitons is finished.
         *
         * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
         * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
         *
         * @example <caption>Example: Disable queuing</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queue: false
         *     }
         * });
         *
         * @name        queue
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.queue = true;
        /**
         * An integer dictacting the maximum number of operations allowed in the queue at
         * any time, when queuing is enabled.
         *
         * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         queueLimit: 5
         *     }
         * });
         *
         * @name        queueLimit
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {number}
         * @default     3
         */ this.queueLimit = 3;
        /**
         * A boolean dictating whether or not to transition the height and width of the
         * container as elements are filtered in and out. If disabled, the container height
         * will change abruptly.
         *
         * It may be desirable to disable this on mobile devices as the CSS `height` and
         * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
         *
         * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeContainer: myFeatureTests.isMobile ? false : true
         *     }
         * });
         *
         * @name        animateResizeContainer
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.animateResizeContainer = true;
        /**
         * A boolean dictating whether or not to transition the height and width of target
         * elements as they change throughout the course of an animation.
         *
         * This is often a must for flex-box grid layouts where the size of target elements may change
         * depending on final their position in relation to their siblings, or for `.changeLayout()`
         * operations where the size of targets change between layouts.
         *
         * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
         * properties which may adversely affect performance on slower devices, and is therefore
         * disabled by default.
         *
         * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         animateResizeTargets: true
         *     }
         * });
         *
         * @name        animateResizeTargets
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.animateResizeTargets = false;
        /**
         * A custom function used to manipulate the order in which the stagger delay is
         * incremented when using the ‘stagger’ effect.
         *
         * When using the 'stagger' effect, the delay applied to each target element is incremented
         * based on its index. You may create a custom function to manipulate the order in which the
         * delay is incremented and create engaging non-linear stagger effects.
         *
         * The function receives the index of the target element as a parameter, and must
         * return an integer which serves as the multiplier for the stagger delay.
         *
         * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return i % 3;
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade stagger(100ms)',
         *         staggerSequence: function(i) {
         *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
         *         }
         *     }
         * });
         *
         * @name        staggerSequence
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {function}
         * @default     null
         */ this.staggerSequence = null;
        /**
         * A boolean dictating whether or not to reverse the direction of `translate`
         * and `rotate` transforms for elements being filtered out.
         *
         * It can be used to create carousel-like animations where elements enter and exit
         * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
         * being filtered in would become `translateX(100%)` for targets being filtered out.
         *
         * This functionality can also be achieved by providing seperate effects
         * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
         *
         * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
         * // Elements being filtered in will be translated from '100%' to '0' while
         * // elements being filtered out will be translated from 0 to '-100%'
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         effects: 'fade translateX(100%)',
         *         reverseOut: true,
         *         nudge: false // Disable nudging to create a carousel-like effect
         *     }
         * });
         *
         * @name        reverseOut
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.reverseOut = false;
        /**
         * A boolean dictating whether or not to "nudge" the animation path of targets
         * when they are being filtered in and out simulatenously.
         *
         * This has been the default behavior of MixItUp since version 1, but it
         * may be desirable to disable this effect when filtering directly from
         * one exclusive set of targets to a different exclusive set of targets,
         * to create a carousel-like effect, or a generally more subtle animation.
         *
         * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         nudge: false
         *     }
         * });
         *
         * @name        nudge
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.nudge = true;
        /**
         * A boolean dictating whether or not to clamp the height of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * height of the container might affect its vertical positioning in the viewport
         * (e.g. a vertically-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container height-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampHeight: false
         *     }
         * });
         *
         * @name        clampHeight
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.clampHeight = true;
        /**
         * A boolean dictating whether or not to clamp the width of the container while MixItUp's
         * geometry tests are carried out before an operation.
         *
         * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
         * width of the container might affect its horitzontal positioning in the viewport
         * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
         * test results and a smooth animation.
         *
         * @example <caption>Example: Disable container width-clamping</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     animation: {
         *         clampWidth: false
         *     }
         * });
         *
         * @name        clampWidth
         * @memberof    mixitup.Config.animation
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.clampWidth = true;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigAnimation);
    mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
    /**
     * A group of properties relating to the behavior of the Mixer.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        behavior
     * @namespace
     * @public
     * @since       3.1.12
     */ mixitup.ConfigBehavior = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A boolean dictating whether to allow "live" sorting of the mixer.
         *
         * Because of the expensive nature of sorting, MixItUp makes use of several
         * internal optimizations to skip redundant sorting operations, such as when
         * the newly requested sort command is the same as the active one. The caveat
         * to this optimization is that "live" edits to the value of a target's sorting
         * attribute will be ignored when requesting a re-sort by the same attribute.
         *
         * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
         * regardless of whether or not the sorting attribute and order have changed.
         *
         * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     behavior: {
         *         liveSort: true
         *     },
         *     load: {
         *         sort: 'edited:desc'
         *     }
         * });
         *
         * var target = containerEl.children[3];
         *
         * console.log(target.getAttribute('data-edited')); // '2015-04-24'
         *
         * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
         *
         * mixer.sort('edited:desc')
         *     .then(function(state) {
         *         // The target is now at the top of the list
         *
         *         console.log(state.targets[0] === target); // true
         *     });
         *
         * @name        liveSort
         * @memberof    mixitup.Config.behavior
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.liveSort = false;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigBehavior);
    mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;
    /**
     * A group of optional callback functions to be invoked at various
     * points within the lifecycle of a mixer operation.
     *
     * Each function is analogous to an event of the same name triggered from the
     * container element, and is invoked immediately after it.
     *
     * All callback functions receive the current `state` object as their first
     * argument, as well as other more specific arguments described below.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        callbacks
     * @namespace
     * @public
     * @since       2.0.0
     */ mixitup.ConfigCallbacks = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A callback function invoked immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * A second `futureState` argument is passed to the function which represents the final
         * state of the mixer once the requested operation has completed.
         *
         * @example <caption>Example: Adding an `onMixStart` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixStart: function(state, futureState) {
         *              console.log('Starting operation...');
         *         }
         *     }
         * });
         *
         * @name        onMixStart
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */ this.onMixStart = null;
        /**
         * A callback function invoked when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixBusy: function(state) {
         *              console.log('Mixer busy');
         *         }
         *     }
         * });
         *
         * @name        onMixBusy
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */ this.onMixBusy = null;
        /**
         * A callback function invoked after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: function(state) {
         *              console.log('Operation complete');
         *         }
         *     }
         * });
         *
         * @name        onMixEnd
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */ this.onMixEnd = null;
        /**
         * A callback function invoked whenever an operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @example <caption>Example: Adding an `onMixFail` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixFail: function(state) {
         *              console.log('No items could be found matching the requested filter');
         *         }
         *     }
         * });
         *
         * @name        onMixFail
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */ this.onMixFail = null;
        /**
         * A callback function invoked whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * The clicked element is assigned to the `this` keyword within the function. The original
         * click event is passed to the function as the second argument, which can be useful if
         * using `<a>` tags as controls where the default behavior needs to be prevented.
         *
         * Returning `false` from the callback will prevent the control click from triggering
         * an operation.
         *
         * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              console.log('The control "' + this.innerText + '" was clicked');
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Prevent original click event from bubbling up:
         *              originalEvent.stopPropagation();
         *
         *              // Prevent default behavior of clicked element:
         *              originalEvent.preventDefault();
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
         * var mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixClick: function(state, originalEvent) {
         *              // Perform some conditional check:
         *
         *              if (myApp.isLoading) {
         *                  // By returning false, we can prevent the control click from triggering an operation.
         *
         *                  return false;
         *              }
         *         }
         *     }
         * });
         *
         * @name        onMixClick
         * @memberof    mixitup.Config.callbacks
         * @instance
         * @type        {function}
         * @default     null
         */ this.onMixClick = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
    mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
    /**
     * A group of properties relating to clickable control elements.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        controls
     * @namespace
     * @public
     * @since       2.0.0
     */ mixitup.ConfigControls = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A boolean dictating whether or not controls should be enabled for the mixer instance.
         *
         * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
         * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
         *
         * If `false`, no click handlers will be bound, and all functionality must therefore be performed
         * via the mixer's API methods.
         *
         * If you do not intend to use the default controls, setting this property to `false` will
         * marginally improve the startup time of your mixer instance, and will also prevent any other active
         * mixer instances in the DOM which are bound to controls from controlling the instance.
         *
         * @example <caption>Example: Disabling controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         enable: false
         *     }
         * });
         *
         * // With the default controls disabled, we can only control
         * // the mixer via its API methods, e.g.:
         *
         * mixer.filter('.cat-1');
         *
         * @name        enable
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.enable = true;
        /**
         * A boolean dictating whether or not to use event delegation when binding click events
         * to the default controls.
         *
         * If `false` (default behavior), each control button in the DOM will be found and
         * individually bound when a mixer is instantiated, with their corresponding actions
         * cached for performance.
         *
         * If `true`, a single click handler will be applied to the `window` (or container element - see
         * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
         * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
         *
         * If you require a user interface where control buttons may be added, removed, or changed during the
         * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
         * performance deficit when using live controls, as the value of each control button must be read
         * from the DOM in real time once the click event has propagated.
         *
         * @example <caption>Example: Setting live controls</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         live: true
         *     }
         * });
         *
         * // Control buttons can now be added, remove and changed without breaking
         * // the mixer's UI
         *
         * @name        live
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.live = false;
        /**
         * A string dictating the "scope" to use when binding or querying the default controls. The available
         * values are `'global'` or `'local'`.
         *
         * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
         * to bind, or delegate click events from (see `config.controls.live`).
         *
         * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
         * This may be desireable if you require multiple active mixer instances within the same document, with
         * controls that would otherwise intefere with each other if scoped globally.
         *
         * Conversely, if you wish to control multiple instances with a single UI, you would create one
         * set of controls and keep the controls scope of each mixer set to `global`.
         *
         * @example <caption>Example: Setting 'local' scoped controls</caption>
         * var mixerOne = mixitup(containerOne, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * var mixerTwo = mixitup(containerTwo, {
         *     controls: {
         *         scope: 'local'
         *     }
         * });
         *
         * // Both mixers can now exist within the same document with
         * // isolated controls placed within their container elements.
         *
         * @name        scope
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'global'
         */ this.scope = "global"; // enum: ['local' ,'global']
        /**
         * A string dictating the type of logic to apply when concatenating the filter selectors of
         * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
         *
         * If set to `'or'` (default behavior), selectors will be concatenated together as
         * a comma-seperated list. For example:
         *
         * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
         *
         * If set to `'and'`, selectors will be directly concatenated together. For example:
         *
         * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
         *
         * @example <caption>Example: Setting "and" toggle logic</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleLogic: 'and'
         *     }
         * });
         *
         * @name        toggleLogic
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'or'
         */ this.toggleLogic = "or"; // enum: ['or', 'and']
        /**
         * A string dictating the filter behavior when all toggles are inactive.
         *
         * When set to `'all'` (default behavior), *all* targets will be shown by default
         * when no toggles are active, or at the moment all active toggles are toggled off.
         *
         * When set to `'none'`, no targets will be shown by default when no toggles are
         * active, or at the moment all active toggles are toggled off.
         *
         * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'all'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'all'
         *          console.log(state.totalShow); // 12
         *     });
         *
         * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
         * var mixer = mixitup(containerEl, {
         *     controls: {
         *         toggleDefault: 'none'
         *     }
         * });
         *
         * mixer.toggleOn('.cat-2')
         *     .then(function() {
         *         // Deactivate all active toggles
         *
         *         return mixer.toggleOff('.cat-2')
         *     })
         *     .then(function(state) {
         *          console.log(state.activeFilter.selector); // 'none'
         *          console.log(state.totalShow); // 0
         *     });
         *
         * @name        toggleDefault
         * @memberof    mixitup.Config.controls
         * @instance
         * @type        {string}
         * @default     'all'
         */ this.toggleDefault = "all"; // enum: ['all', 'none']
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigControls);
    mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
    /**
     * A group of properties defining the output and structure of class names programmatically
     * added to controls and containers to reflect the state of the mixer.
     *
     * Most commonly, class names are added to controls by MixItUp to indicate that
     * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
     *
     * Using a "BEM" like structure, each classname is broken into the three parts:
     * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
     * name (e.g. `'active'`) reflecting the state of the element.
     *
     * By default, each part of the classname is concatenated together using single hyphens as
     * delineators, but this can be easily customised to match the naming convention and style of
     * your project.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        classNames
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigClassNames = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
         *
         * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio'
         *     }
         * });
         *
         * // Active control output: "portfolio-control-active"
         *
         * @example <caption>Example 2: Removing `config.classNames.block`</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: ''
         *     }
         * });
         *
         * // Active control output: "control-active"
         *
         * @name        block
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'mixitup'
         */ this.block = "mixitup";
        /**
         * The "element" portion of the class name added to container.
         *
         * @name        elementContainer
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'container'
         */ this.elementContainer = "container";
        /**
         * The "element" portion of the class name added to filter controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "mixitup-filter-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementFilter: 'filter'
         *     }
         * });
         *
         * // Active filter output: "portfolio-filter-active"
         *
         * @name        elementFilter
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */ this.elementFilter = "control";
        /**
         * The "element" portion of the class name added to sort controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "mixitup-sort-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'sort'
         *     }
         * });
         *
         * // Active sort output: "portfolio-sort-active"
         *
         * @name        elementSort
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */ this.elementSort = "control";
        /**
         * The "element" portion of the class name added to multimix controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementMultimix: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "mixitup-multimix-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementSort: 'multimix'
         *     }
         * });
         *
         * // Active multimix output: "portfolio-multimix-active"
         *
         * @name        elementMultimix
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */ this.elementMultimix = "control";
        /**
         * The "element" portion of the class name added to toggle controls.
         *
         * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
         * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
         *
         * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "mixitup-toggle-active"
         *
         * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         block: 'portfolio',
         *         elementToggle: 'toggle'
         *     }
         * });
         *
         * // Active toggle output: "portfolio-toggle-active"
         *
         * @name        elementToggle
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'control'
         */ this.elementToggle = "control";
        /**
         * The "modifier" portion of the class name added to active controls.
         * @name        modifierActive
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'active'
         */ this.modifierActive = "active";
        /**
         * The "modifier" portion of the class name added to disabled controls.
         *
         * @name        modifierDisabled
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'disabled'
         */ this.modifierDisabled = "disabled";
        /**
         * The "modifier" portion of the class name added to the container when in a "failed" state.
         *
         * @name        modifierFailed
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     'failed'
         */ this.modifierFailed = "failed";
        /**
         * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
         *
         * If the block portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing the delineator to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *     }
         * });
         *
         * // example active control output: "mixitup__control-active"
         *
         * @name        delineatorElement
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */ this.delineatorElement = "-";
        /**
         * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
         *
         * If the element portion is ommited by setting it to an empty string, no delineator will be added.
         *
         * @example <caption>Example: changing both delineators to match BEM convention</caption>
         * var mixer = mixitup(containerEl, {
         *     classNames: {
         *         delineatorElement: '__'
         *         delineatorModifier: '--'
         *     }
         * });
         *
         * // Active control output: "mixitup__control--active"
         *
         * @name        delineatorModifier
         * @memberof    mixitup.Config.classNames
         * @instance
         * @type        {string}
         * @default     '-'
         */ this.delineatorModifier = "-";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigClassNames);
    mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
    /**
     * A group of properties relating to MixItUp's dataset API.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        data
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigData = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A string specifying the name of the key containing your data model's unique
         * identifier (UID). To use the dataset API, a UID key must be specified and
         * be present and unique on all objects in the dataset you provide to MixItUp.
         *
         * For example, if your dataset is made up of MongoDB documents, the UID
         * key would be `'id'` or `'_id'`.
         *
         * @example <caption>Example: Setting the UID to `'id'`</caption>
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     }
         * });
         *
         * @name        uidKey
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {string}
         * @default     ''
         */ this.uidKey = "";
        /**
         * A boolean dictating whether or not MixItUp should "dirty check" each object in
         * your dataset for changes whenever `.dataset()` is called, and re-render any targets
         * for which a change is found.
         *
         * Depending on the complexity of your data model, dirty checking can be expensive
         * and is therefore disabled by default.
         *
         * NB: For changes to be detected, a new immutable instance of the edited model must be
         * provided to mixitup, rather than manipulating properties on the existing instance.
         * If your changes are a result of a DB write and read, you will most likely be calling
         * `.dataset()` with a clean set of objects each time, so this will not be an issue.
         *
         * @example <caption>Example: Enabling dirty checking</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0"
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1"
         *         ...
         *     }
         * ];
         *
         * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
         * // function defined
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id',
         *         dirtyCheck: true
         *     },
         *     load: {
         *         dataset: myDataset
         *     },
         *     render: {
         *         target: function() { ... }
         *     }
         * });
         *
         * // For illustration, we will clone and edit the second object in the dataset.
         * // NB: this would typically be done server-side in response to a DB update,
         * and then re-queried via an API.
         *
         * myDataset[1] = Object.assign({}, myDataset[1]);
         *
         * myDataset[1].title = 'Blog Post Title 11';
         *
         * mixer.dataset(myDataset)
         *    .then(function() {
         *        // the target with ID "1", will be re-rendered reflecting its new title
         *    });
         *
         * @name        dirtyCheck
         * @memberof    mixitup.Config.data
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.dirtyCheck = false;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigData);
    mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
    /**
     * A group of properties allowing the toggling of various debug features.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        debug
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigDebug = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A boolean dictating whether or not the mixer instance returned by the
         * `mixitup()` factory function should expose private properties and methods.
         *
         * By default, mixer instances only expose their public API, but enabling
         * debug mode will give you access to various mixer internals which may aid
         * in debugging, or the authoring of extensions.
         *
         * @example <caption>Example: Enabling debug mode</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         enable: true
         *     }
         * });
         *
         * // Private properties and methods will now be visible on the mixer instance:
         *
         * console.log(mixer);
         *
         * @name        enable
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.enable = false;
        /**
         * A boolean dictating whether or not warnings should be shown when various
         * common gotchas occur.
         *
         * Warnings are intended to provide insights during development when something
         * occurs that is not a fatal, but may indicate an issue with your integration,
         * and are therefore turned on by default. However, you may wish to disable
         * them in production.
         *
         * @example <caption>Example 1: Disabling warnings</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: false
         *     }
         * });
         *
         * @example <caption>Example 2: Disabling warnings based on environment</caption>
         *
         * var showWarnings = myAppConfig.environment === 'development' ? true : false;
         *
         * var mixer = mixitup(containerEl, {
         *     debug: {
         *         showWarnings: showWarnings
         *     }
         * });
         *
         * @name        showWarnings
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.showWarnings = true;
        /**
         * Used for server-side testing only.
         *
         * @private
         * @name        fauxAsync
         * @memberof    mixitup.Config.debug
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.fauxAsync = false;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigDebug);
    mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
    /**
     * A group of properties relating to the layout of the container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        layout
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigLayout = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A boolean dictating whether or not mixitup should query all descendants
         * of the container for targets, or only immediate children.
         *
         * By default, mixitup will query all descendants matching the
         * `selectors.target` selector when indexing targets upon instantiation.
         * This allows for targets to be nested inside a sub-container which is
         * useful when ring-fencing targets from locally scoped controls in your
         * markup (see `controls.scope`).
         *
         * However, if you are building a more complex UI requiring the nesting
         * of mixers within mixers, you will most likely want to limit targets to
         * immediate children of the container by setting this property to `false`.
         *
         * @example <caption>Example: Restricting targets to immediate children</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         allowNestedTargets: false
         *     }
         * });
         *
         * @name        allowNestedTargets
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {boolean}
         * @default     true
         */ this.allowNestedTargets = true;
        /**
         * A string specifying an optional class name to apply to the container when in
         * its default state.
         *
         * By changing this class name or adding a class name to the container via the
         * `.changeLayout()` API method, the CSS layout of the container can be changed,
         * and MixItUp will attemp to gracefully animate the container and its targets
         * between states.
         *
         * @example <caption>Example 1: Specifying a container class name</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         containerClassName: 'grid'
         *     }
         * });
         *
         * mixer.changeLayout('list')
         *     .then(function(state) {
         *          console.log(state.activeContainerClass); // "list"
         *     });
         *
         * @name        containerClassName
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {string}
         * @default     ''
         */ this.containerClassName = "";
        /**
         * A reference to a non-target sibling element after which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
         *
         * var addButton = containerEl.querySelector('button');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingBefore: addButton
         *     }
         * });
         *
         * @name        siblingBefore
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */ this.siblingBefore = null;
        /**
         * A reference to a non-target sibling element before which to insert targets
         * when there are no targets in the container.
         *
         * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
         *
         * var gap = containerEl.querySelector('.gap');
         *
         * var mixer = mixitup(containerEl, {
         *     layout: {
         *         siblingAfter: gap
         *     }
         * });
         *
         * @name        siblingAfter
         * @memberof    mixitup.Config.layout
         * @instance
         * @type        {HTMLElement}
         * @default     null
         */ this.siblingAfter = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigLayout);
    mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
    /**
     * A group of properties defining the initial state of the mixer on load (instantiation).
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        load
     * @namespace
     * @public
     * @since       2.0.0
     */ mixitup.ConfigLoad = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A string defining any filtering to be statically applied to the mixer on load.
         * As per the `.filter()` API, this can be any valid selector string, or the
         * values `'all'` or `'none'`.
         *
         * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
         *
         * // The mixer will show only those targets matching '.category-a' on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: '.category-a'
         *     }
         * });
         *
         * @example <caption>Example 2: Hiding all targets on load</caption>
         *
         * // The mixer will show hide all targets on load.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         filter: 'none'
         *     }
         * });
         *
         * @name        filter
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'all'
         */ this.filter = "all";
        /**
         * A string defining any sorting to be statically applied to the mixer on load.
         * As per the `.sort()` API, this should be a valid "sort string" made up of
         * an attribute to sort by (or `'default'`) followed by an optional sorting
         * order, or the value `'random'`;
         *
         * @example <caption>Example: Defining sorting to be applied on load</caption>
         *
         * // The mixer will sort the container by the value of the `data-published-date`
         * // attribute, in descending order.
         *
         * var mixer = mixitup(containerEl, {
         *     load: {
         *         sort: 'published-date:desc'
         *     }
         * });
         *
         * @name        sort
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {string}
         * @default     'default:asc'
         */ this.sort = "default:asc";
        /**
         * An array of objects representing the underlying data of any pre-rendered targets,
         * when using the `.dataset()` API.
         *
         * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
         *
         * @example <caption>Example: Defining the initial underyling dataset</caption>
         *
         * var myDataset = [
         *     {
         *         id: 0,
         *         title: "Blog Post Title 0",
         *         ...
         *     },
         *     {
         *         id: 1,
         *         title: "Blog Post Title 1",
         *         ...
         *     }
         * ];
         *
         * var mixer = mixitup(containerEl, {
         *     data: {
         *         uidKey: 'id'
         *     },
         *     load: {
         *         dataset: myDataset
         *     }
         * });
         *
         * @name        dataset
         * @memberof    mixitup.Config.load
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */ this.dataset = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigLoad);
    mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
    /**
     * A group of properties defining the selectors used to query elements within a mixitup container.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        selectors
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigSelectors = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A selector string used to query and index target elements within the container.
         *
         * By default, the class selector `'.mix'` is used, but this can be changed to an
         * attribute or element selector to match the style of your project.
         *
         * @example <caption>Example 1: Changing the target selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '.portfolio-item'
         *     }
         * });
         *
         * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
         *
         * // The mixer will search for any children with the attribute `data-ref="mix"`
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         target: '[data-ref="mix"]'
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     '.mix'
         */ this.target = ".mix";
        /**
         * A optional selector string used to add further specificity to the querying of control elements,
         * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
         *
         * This can be used if other elements in your document must contain the above attributes
         * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
         * an additional `control` selector of your choice allows MixItUp to restrict event handling
         * to only those elements matching the defined selector.
         *
         * @name        control
         * @memberof    mixitup.Config.selectors
         * @instance
         * @type        {string}
         * @default     ''
         *
         * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     selectors: {
         *         control: '.mixitup-control'
         *     }
         * });
         *
         * // Will not be handled:
         * // <button data-filter=".category-a"></button>
         *
         * // Will be handled:
         * // <button class="mixitup-control" data-filter=".category-a"></button>
         */ this.control = "";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigSelectors);
    mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
    /**
     * A group of optional render functions for creating and updating elements.
     *
     * All render functions receive a data object, and should return a valid HTML string.
     *
     * @constructor
     * @memberof    mixitup.Config
     * @name        render
     * @namespace
     * @public
     * @since       3.0.0
     */ mixitup.ConfigRender = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A function returning an HTML string representing a target element, or a reference to a
         * single DOM element.
         *
         * The function is invoked as part of the `.dataset()` API, whenever a new item is added
         * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
         *
         * The function receives the relevant dataset item as its first parameter.
         *
         * @example <caption>Example 1: Using string concatenation</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 '&lt;div class="mix"&gt;' +
         *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
         *                 '&lt;/div&gt;'
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 2: Using an ES2015 template literal</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *             return (
         *                 `&lt;div class="mix"&gt;
         *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
         *                  &lt;/div&gt;`
         *             );
         *         }
         *     }
         * });
         *
         * @example <caption>Example 3: Using a Handlebars template</caption>
         *
         * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: targetTemplate
         *     }
         * });
         *
         * @example <caption>Example 4: Returning a DOM element</caption>
         *
         * var mixer = mixitup(containerEl, {
         *     render: {
         *         target: function(item) {
         *              // Create a single element using your framework's built-in renderer
         *
         *              var el = ...
         *
         *              return el;
         *         }
         *     }
         * });
         *
         * @name        target
         * @memberof    mixitup.Config.render
         * @instance
         * @type        {function}
         * @default     'null'
         */ this.target = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigRender);
    mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.ConfigTemplates = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ConfigTemplates);
    mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
    /**
     * `mixitup.Config` is an interface used for customising the functionality of a
     * mixer instance. It is organised into several semantically distinct sub-objects,
     * each one pertaining to a particular aspect of MixItUp functionality.
     *
     * An object literal containing any or all of the available properies,
     * known as the "configuration object", can be passed as the second parameter to
     * the `mixitup` factory function when creating a mixer instance to customise its
     * functionality as needed.
     *
     * If no configuration object is passed, the mixer instance will take on the default
     * configuration values detailed below.
     *
     * @example <caption>Example 1: Creating and passing the configuration object</caption>
     * // Create a configuration object with desired values
     *
     * var config = {
     *     animation: {
     *         enable: false
     *     },
     *     selectors: {
     *         target: '.item'
     *     }
     * };
     *
     * // Pass the configuration object to the mixitup factory function
     *
     * var mixer = mixitup(containerEl, config);
     *
     * @example <caption>Example 2: Passing the configuration object inline</caption>
     * // Typically, the configuration object is passed inline for brevity.
     *
     * var mixer = mixitup(containerEl, {
     *     controls: {
     *         live: true,
     *         toggleLogic: 'and'
     *     }
     * });
     *
     *
     * @constructor
     * @memberof    mixitup
     * @namespace
     * @public
     * @since       2.0.0
     */ mixitup.Config = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.animation = new mixitup.ConfigAnimation();
        this.behavior = new mixitup.ConfigBehavior();
        this.callbacks = new mixitup.ConfigCallbacks();
        this.controls = new mixitup.ConfigControls();
        this.classNames = new mixitup.ConfigClassNames();
        this.data = new mixitup.ConfigData();
        this.debug = new mixitup.ConfigDebug();
        this.layout = new mixitup.ConfigLayout();
        this.load = new mixitup.ConfigLoad();
        this.selectors = new mixitup.ConfigSelectors();
        this.render = new mixitup.ConfigRender();
        this.templates = new mixitup.ConfigTemplates();
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Config);
    mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Config.prototype.constructor = mixitup.Config;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.MixerDom = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.document = null;
        this.body = null;
        this.container = null;
        this.parent = null;
        this.targets = [];
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.MixerDom);
    mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
    mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.UiClassNames = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.base = "";
        this.active = "";
        this.disabled = "";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.UiClassNames);
    mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
    mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
    /**
     * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandDataset = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.dataset = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandDataset);
    mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
    /**
     * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandMultimix = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.filter = null;
        this.sort = null;
        this.insert = null;
        this.remove = null;
        this.changeLayout = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandMultimix);
    mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
    /**
     * An object into which all arbitrary arguments sent to '.filter()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandFilter = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.selector = "";
        this.collection = null;
        this.action = "show"; // enum: ['show', 'hide']
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandFilter);
    mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
    /**
     * An object into which all arbitrary arguments sent to '.sort()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandSort = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.sortString = "";
        this.attribute = "";
        this.order = "asc";
        this.collection = null;
        this.next = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandSort);
    mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
    /**
     * An object into which all arbitrary arguments sent to '.insert()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandInsert = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.index = 0;
        this.collection = [];
        this.position = "before"; // enum: ['before', 'after']
        this.sibling = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandInsert);
    mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
    /**
     * An object into which all arbitrary arguments sent to '.remove()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandRemove = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.targets = [];
        this.collection = [];
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandRemove);
    mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
    /**
     * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
     *
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.CommandChangeLayout = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.containerClassName = "";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
    mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
    mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {string}        type
     * @param       {string}        selector
     * @param       {boolean}       [live]
     * @param       {string}        [parent]
     *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
     */ mixitup.ControlDefinition = function(type, selector, live, parent) {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.type = type;
        this.selector = selector;
        this.live = live || false;
        this.parent = parent || "";
        this.callActions("afterConstruct");
        h.freeze(this);
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.ControlDefinition);
    mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
    mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
    mixitup.controlDefinitions = [];
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition("multimix", "[data-filter][data-sort]"));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition("filter", "[data-filter]"));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition("sort", "[data-sort]"));
    mixitup.controlDefinitions.push(new mixitup.ControlDefinition("toggle", "[data-toggle]"));
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Control = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.el = null;
        this.selector = "";
        this.bound = [];
        this.pending = -1;
        this.type = "";
        this.status = "inactive"; // enum: ['inactive', 'active', 'disabled', 'live']
        this.filter = "";
        this.sort = "";
        this.canDisable = false;
        this.handler = null;
        this.classNames = new mixitup.UiClassNames();
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Control);
    mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Control.prototype, /** @lends mixitup.Control */ {
        constructor: mixitup.Control,
        /**
         * @private
         * @param {HTMLElement} el
         * @param {string}      type
         * @param {string}      selector
         */ init: function(el, type, selector) {
            var self = this;
            this.callActions("beforeInit", arguments);
            self.el = el;
            self.type = type;
            self.selector = selector;
            if (self.selector) self.status = "live";
            else {
                self.canDisable = typeof self.el.disable === "boolean";
                switch(self.type){
                    case "filter":
                        self.filter = self.el.getAttribute("data-filter");
                        break;
                    case "toggle":
                        self.filter = self.el.getAttribute("data-toggle");
                        break;
                    case "sort":
                        self.sort = self.el.getAttribute("data-sort");
                        break;
                    case "multimix":
                        self.filter = self.el.getAttribute("data-filter");
                        self.sort = self.el.getAttribute("data-sort");
                        break;
                }
            }
            self.bindClick();
            mixitup.controls.push(self);
            this.callActions("afterInit", arguments);
        },
        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {boolean}
         */ isBound: function(mixer) {
            var self = this, isBound = false;
            this.callActions("beforeIsBound", arguments);
            isBound = self.bound.indexOf(mixer) > -1;
            return self.callFilters("afterIsBound", isBound, arguments);
        },
        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */ addBinding: function(mixer) {
            var self = this;
            this.callActions("beforeAddBinding", arguments);
            if (!self.isBound()) self.bound.push(mixer);
            this.callActions("afterAddBinding", arguments);
        },
        /**
         * @private
         * @param  {mixitup.Mixer} mixer
         * @return {void}
         */ removeBinding: function(mixer) {
            var self = this, removeIndex = -1;
            this.callActions("beforeRemoveBinding", arguments);
            if ((removeIndex = self.bound.indexOf(mixer)) > -1) self.bound.splice(removeIndex, 1);
            if (self.bound.length < 1) {
                // No bindings exist, unbind event click handlers
                self.unbindClick();
                // Remove from `mixitup.controls` list
                removeIndex = mixitup.controls.indexOf(self);
                mixitup.controls.splice(removeIndex, 1);
                if (self.status === "active") self.renderStatus(self.el, "inactive");
            }
            this.callActions("afterRemoveBinding", arguments);
        },
        /**
         * @private
         * @return {void}
         */ bindClick: function() {
            var self = this;
            this.callActions("beforeBindClick", arguments);
            self.handler = function(e) {
                self.handleClick(e);
            };
            h.on(self.el, "click", self.handler);
            this.callActions("afterBindClick", arguments);
        },
        /**
         * @private
         * @return {void}
         */ unbindClick: function() {
            var self = this;
            this.callActions("beforeUnbindClick", arguments);
            h.off(self.el, "click", self.handler);
            self.handler = null;
            this.callActions("afterUnbindClick", arguments);
        },
        /**
         * @private
         * @param   {MouseEvent} e
         * @return  {void}
         */ handleClick: function(e) {
            var self = this, button = null, mixer = null, isActive = false, returnValue = void 0, command = {}, clone = null, commands = [], i = -1;
            this.callActions("beforeHandleClick", arguments);
            this.pending = 0;
            mixer = self.bound[0];
            if (!self.selector) button = self.el;
            else button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
            if (!button) {
                self.callActions("afterHandleClick", arguments);
                return;
            }
            switch(self.type){
                case "filter":
                    command.filter = self.filter || button.getAttribute("data-filter");
                    break;
                case "sort":
                    command.sort = self.sort || button.getAttribute("data-sort");
                    break;
                case "multimix":
                    command.filter = self.filter || button.getAttribute("data-filter");
                    command.sort = self.sort || button.getAttribute("data-sort");
                    break;
                case "toggle":
                    command.filter = self.filter || button.getAttribute("data-toggle");
                    if (self.status === "live") isActive = h.hasClass(button, self.classNames.active);
                    else isActive = self.status === "active";
                    break;
            }
            for(i = 0; i < self.bound.length; i++){
                // Create a clone of the command for each bound mixer instance
                clone = new mixitup.CommandMultimix();
                h.extend(clone, command);
                commands.push(clone);
            }
            commands = self.callFilters("commandsHandleClick", commands, arguments);
            self.pending = self.bound.length;
            for(i = 0; mixer = self.bound[i]; i++){
                command = commands[i];
                if (!command) continue;
                if (!mixer.lastClicked) mixer.lastClicked = button;
                mixitup.events.fire("mixClick", mixer.dom.container, {
                    state: mixer.state,
                    instance: mixer,
                    originalEvent: e,
                    control: mixer.lastClicked
                }, mixer.dom.document);
                if (typeof mixer.config.callbacks.onMixClick === "function") {
                    returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
                    if (returnValue === false) continue;
                }
                if (self.type === "toggle") isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
                else mixer.multimix(command);
            }
            this.callActions("afterHandleClick", arguments);
        },
        /**
         * @param   {object}          command
         * @param   {Array<string>}   toggleArray
         * @return  {void}
         */ update: function(command, toggleArray) {
            var self = this, actions = new mixitup.CommandMultimix();
            self.callActions("beforeUpdate", arguments);
            self.pending--;
            self.pending = Math.max(0, self.pending);
            if (self.pending > 0) return;
            if (self.status === "live") // Live control (status unknown)
            self.updateLive(command, toggleArray);
            else {
                // Static control
                actions.sort = self.sort;
                actions.filter = self.filter;
                self.callFilters("actionsUpdate", actions, arguments);
                self.parseStatusChange(self.el, command, actions, toggleArray);
            }
            self.callActions("afterUpdate", arguments);
        },
        /**
         * @param   {mixitup.CommandMultimix} command
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */ updateLive: function(command, toggleArray) {
            var self = this, controlButtons = null, actions = null, button = null, i = -1;
            self.callActions("beforeUpdateLive", arguments);
            if (!self.el) return;
            controlButtons = self.el.querySelectorAll(self.selector);
            for(i = 0; button = controlButtons[i]; i++){
                actions = new mixitup.CommandMultimix();
                switch(self.type){
                    case "filter":
                        actions.filter = button.getAttribute("data-filter");
                        break;
                    case "sort":
                        actions.sort = button.getAttribute("data-sort");
                        break;
                    case "multimix":
                        actions.filter = button.getAttribute("data-filter");
                        actions.sort = button.getAttribute("data-sort");
                        break;
                    case "toggle":
                        actions.filter = button.getAttribute("data-toggle");
                        break;
                }
                actions = self.callFilters("actionsUpdateLive", actions, arguments);
                self.parseStatusChange(button, command, actions, toggleArray);
            }
            self.callActions("afterUpdateLive", arguments);
        },
        /**
         * @param   {HTMLElement}             button
         * @param   {mixitup.CommandMultimix} command
         * @param   {mixitup.CommandMultimix} actions
         * @param   {Array<string>}           toggleArray
         * @return  {void}
         */ parseStatusChange: function(button, command, actions, toggleArray) {
            var self = this, alias = "", toggle = "", i = -1;
            self.callActions("beforeParseStatusChange", arguments);
            switch(self.type){
                case "filter":
                    if (command.filter === actions.filter) self.renderStatus(button, "active");
                    else self.renderStatus(button, "inactive");
                    break;
                case "multimix":
                    if (command.sort === actions.sort && command.filter === actions.filter) self.renderStatus(button, "active");
                    else self.renderStatus(button, "inactive");
                    break;
                case "sort":
                    if (command.sort.match(/:asc/g)) alias = command.sort.replace(/:asc/g, "");
                    if (command.sort === actions.sort || alias === actions.sort) self.renderStatus(button, "active");
                    else self.renderStatus(button, "inactive");
                    break;
                case "toggle":
                    if (toggleArray.length < 1) self.renderStatus(button, "inactive");
                    if (command.filter === actions.filter) self.renderStatus(button, "active");
                    for(i = 0; i < toggleArray.length; i++){
                        toggle = toggleArray[i];
                        if (toggle === actions.filter) {
                            // Button matches one active toggle
                            self.renderStatus(button, "active");
                            break;
                        }
                        self.renderStatus(button, "inactive");
                    }
                    break;
            }
            self.callActions("afterParseStatusChange", arguments);
        },
        /**
         * @param   {HTMLElement}   button
         * @param   {string}        status
         * @return  {void}
         */ renderStatus: function(button, status) {
            var self = this;
            self.callActions("beforeRenderStatus", arguments);
            switch(status){
                case "active":
                    h.addClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);
                    if (self.canDisable) self.el.disabled = false;
                    break;
                case "inactive":
                    h.removeClass(button, self.classNames.active);
                    h.removeClass(button, self.classNames.disabled);
                    if (self.canDisable) self.el.disabled = false;
                    break;
                case "disabled":
                    if (self.canDisable) self.el.disabled = true;
                    h.addClass(button, self.classNames.disabled);
                    h.removeClass(button, self.classNames.active);
                    break;
            }
            if (self.status !== "live") // Update the control's status propery if not live
            self.status = status;
            self.callActions("afterRenderStatus", arguments);
        }
    });
    mixitup.controls = [];
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.StyleData = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.x = 0;
        this.y = 0;
        this.top = 0;
        this.right = 0;
        this.bottom = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.marginRight = 0;
        this.marginBottom = 0;
        this.opacity = 0;
        this.scale = new mixitup.TransformData();
        this.translateX = new mixitup.TransformData();
        this.translateY = new mixitup.TransformData();
        this.translateZ = new mixitup.TransformData();
        this.rotateX = new mixitup.TransformData();
        this.rotateY = new mixitup.TransformData();
        this.rotateZ = new mixitup.TransformData();
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.StyleData);
    mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.StyleData.prototype.constructor = mixitup.StyleData;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.TransformData = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.value = 0;
        this.unit = "";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.TransformData);
    mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.TransformData.prototype.constructor = mixitup.TransformData;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.TransformDefaults = function() {
        mixitup.StyleData.apply(this);
        this.callActions("beforeConstruct");
        this.scale.value = 0.01;
        this.scale.unit = "";
        this.translateX.value = 20;
        this.translateX.unit = "px";
        this.translateY.value = 20;
        this.translateY.unit = "px";
        this.translateZ.value = 20;
        this.translateZ.unit = "px";
        this.rotateX.value = 90;
        this.rotateX.unit = "deg";
        this.rotateY.value = 90;
        this.rotateY.unit = "deg";
        this.rotateX.value = 90;
        this.rotateX.unit = "deg";
        this.rotateZ.value = 180;
        this.rotateZ.unit = "deg";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.TransformDefaults);
    mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
    mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
    /**
     * @private
     * @static
     * @since   3.0.0
     * @type    {mixitup.TransformDefaults}
     */ mixitup.transformDefaults = new mixitup.TransformDefaults();
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.EventDetail = function() {
        this.state = null;
        this.futureState = null;
        this.instance = null;
        this.originalEvent = null;
    };
    /**
     * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
     * points within the lifecycle of a mixer operation.
     *
     * Each event is analogous to the callback function of the same name defined in
     * the `callbacks` configuration object, and is triggered immediately before it.
     *
     * Events are always triggered from the container element on which MixItUp is instantiated
     * upon.
     *
     * As with any event, registered event handlers receive the event object as a parameter
     * which includes a `detail` property containting references to the current `state`,
     * the `mixer` instance, and other event-specific properties described below.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */ mixitup.Events = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * A custom event triggered immediately after any MixItUp operation is requested
         * and before animations have begun.
         *
         * The `mixStart` event also exposes a `futureState` property via the
         * `event.detail` object, which represents the final state of the mixer once
         * the requested operation has completed.
         *
         * @name        mixStart
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */ this.mixStart = null;
        /**
         * A custom event triggered when a MixItUp operation is requested while another
         * operation is in progress, and the animation queue is full, or queueing
         * is disabled.
         *
         * @name        mixBusy
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */ this.mixBusy = null;
        /**
         * A custom event triggered after any MixItUp operation has completed, and the
         * state has been updated.
         *
         * @name        mixEnd
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */ this.mixEnd = null;
        /**
         * A custom event triggered whenever a filter operation "fails", i.e. no targets
         * could be found matching the requested filter.
         *
         * @name        mixFail
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */ this.mixFail = null;
        /**
         * A custom event triggered whenever a MixItUp control is clicked, and before its
         * respective operation is requested.
         *
         * This event also exposes an `originalEvent` property via the `event.detail`
         * object, which holds a reference to the original click event.
         *
         * @name        mixClick
         * @memberof    mixitup.Events
         * @static
         * @type        {CustomEvent}
         */ this.mixClick = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Events);
    mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Events.prototype.constructor = mixitup.Events;
    /**
     * @private
     * @param   {string}      eventType
     * @param   {Element}     el
     * @param   {object}      detail
     * @param   {Document}    [doc]
     */ mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
        var self = this, event = null, eventDetail = new mixitup.EventDetail();
        self.callActions("beforeFire", arguments);
        if (typeof self[eventType] === "undefined") throw new Error('Event type "' + eventType + '" not found.');
        eventDetail.state = new mixitup.State();
        h.extend(eventDetail.state, detail.state);
        if (detail.futureState) {
            eventDetail.futureState = new mixitup.State();
            h.extend(eventDetail.futureState, detail.futureState);
        }
        eventDetail.instance = detail.instance;
        if (detail.originalEvent) eventDetail.originalEvent = detail.originalEvent;
        event = h.getCustomEvent(eventType, eventDetail, doc);
        self.callFilters("eventFire", event, arguments);
        el.dispatchEvent(event);
    };
    // Asign a singleton instance to `mixitup.events`:
    mixitup.events = new mixitup.Events();
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.QueueItem = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.args = [];
        this.instruction = null;
        this.triggerElement = null;
        this.deferred = null;
        this.isToggling = false;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.QueueItem);
    mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
    mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
    /**
     * The `mixitup.Mixer` class is used to hold discreet, user-configured
     * instances of MixItUp on a provided container element.
     *
     * Mixer instances are returned whenever the `mixitup()` factory function is called,
     * which expose a range of methods enabling API-based filtering, sorting,
     * insertion, removal and more.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */ mixitup.Mixer = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.config = new mixitup.Config();
        this.id = "";
        this.isBusy = false;
        this.isToggling = false;
        this.incPadding = true;
        this.controls = [];
        this.targets = [];
        this.origOrder = [];
        this.cache = {};
        this.toggleArray = [];
        this.targetsMoved = 0;
        this.targetsImmovable = 0;
        this.targetsBound = 0;
        this.targetsDone = 0;
        this.staggerDuration = 0;
        this.effectsIn = null;
        this.effectsOut = null;
        this.transformIn = [];
        this.transformOut = [];
        this.queue = [];
        this.state = null;
        this.lastOperation = null;
        this.lastClicked = null;
        this.userCallback = null;
        this.userDeferred = null;
        this.dom = new mixitup.MixerDom();
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Mixer);
    mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Mixer.prototype, /** @lends mixitup.Mixer */ {
        constructor: mixitup.Mixer,
        /**
         * @private
         * @instance
         * @since 3.0.0
         * @param {HTMLElement} container
         * @param {HTMLElement} document
         * @param {string}      id
         * @param {object}      [config]
         */ attach: function(container, document1, id, config) {
            var self = this, target = null, i = -1;
            self.callActions("beforeAttach", arguments);
            self.id = id;
            if (config) h.extend(self.config, config, true, true);
            self.sanitizeConfig();
            self.cacheDom(container, document1);
            if (self.config.layout.containerClassName) h.addClass(self.dom.container, self.config.layout.containerClassName);
            if (!mixitup.features.has.transitions) self.config.animation.enable = false;
            if (typeof window1.console === "undefined") self.config.debug.showWarnings = false;
            if (self.config.data.uidKey) // If the dataset API is in use, force disable controls
            self.config.controls.enable = false;
            self.indexTargets();
            self.state = self.getInitialState();
            for(i = 0; target = self.lastOperation.toHide[i]; i++)target.hide();
            if (self.config.controls.enable) {
                self.initControls();
                self.buildToggleArray(null, self.state);
                self.updateControls({
                    filter: self.state.activeFilter,
                    sort: self.state.activeSort
                });
            }
            self.parseEffects();
            self.callActions("afterAttach", arguments);
        },
        /**
         * @private
         * @instance
         * @since 3.0.0
         * @return {void}
         */ sanitizeConfig: function() {
            var self = this;
            self.callActions("beforeSanitizeConfig", arguments);
            // Sanitize enum/string config options
            self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
            self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
            self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
            self.config.animation.effects = self.config.animation.effects.trim();
            self.callActions("afterSanitizeConfig", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {mixitup.State}
         */ getInitialState: function() {
            var self = this, state = new mixitup.State(), operation = new mixitup.Operation();
            self.callActions("beforeGetInitialState", arguments);
            // Map initial values into a mock state object in order to construct an operation
            state.activeContainerClassName = self.config.layout.containerClassName;
            if (self.config.load.dataset) {
                // Dataset API
                if (!self.config.data.uidKey || typeof self.config.data.uidKey !== "string") throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                operation.show = self.targets.slice();
                state = self.callFilters("stateGetInitialState", state, arguments);
            } else {
                // DOM API
                state.activeFilter = self.parseFilterArgs([
                    self.config.load.filter
                ]).command;
                state.activeSort = self.parseSortArgs([
                    self.config.load.sort
                ]).command;
                state.totalTargets = self.targets.length;
                state = self.callFilters("stateGetInitialState", state, arguments);
                if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === "random" || state.activeSort.order === "desc") {
                    // Sorting on load
                    operation.newSort = state.activeSort;
                    self.sortOperation(operation);
                    self.printSort(false, operation);
                    self.targets = operation.newOrder;
                } else operation.startOrder = operation.newOrder = self.targets;
                operation.startFilter = operation.newFilter = state.activeFilter;
                operation.startSort = operation.newSort = state.activeSort;
                operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target;
                else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
            }
            operation = self.callFilters("operationGetInitialState", operation, [
                state
            ]);
            self.lastOperation = operation;
            if (operation.newFilter) self.filterOperation(operation);
            state = self.buildState(operation);
            return state;
        },
        /**
         * Caches references of DOM elements neccessary for the mixer's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement}       el
         * @param   {HTMLHtmlElement}   document
         * @return  {void}
         */ cacheDom: function(el, document1) {
            var self = this;
            self.callActions("beforeCacheDom", arguments);
            self.dom.document = document1;
            self.dom.body = self.dom.document.querySelector("body");
            self.dom.container = el;
            self.dom.parent = el;
            self.callActions("afterCacheDom", arguments);
        },
        /**
         * Indexes all child elements of the mixer matching the `selectors.target`
         * selector, instantiating a mixitup.Target for each one.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */ indexTargets: function() {
            var self = this, target = null, el = null, dataset = null, i = -1;
            self.callActions("beforeIndexTargets", arguments);
            self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
            self.dom.targets = h.arrayFromList(self.dom.targets);
            self.targets = [];
            if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
            if (self.dom.targets.length) {
                for(i = 0; el = self.dom.targets[i]; i++){
                    target = new mixitup.Target();
                    target.init(el, self, dataset ? dataset[i] : void 0);
                    target.isInDom = true;
                    self.targets.push(target);
                }
                self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
            }
            self.origOrder = self.targets;
            self.callActions("afterIndexTargets", arguments);
        },
        initControls: function() {
            var self = this, definition = "", controlElements = null, el = null, parent = null, delagators = null, control = null, i = -1, j = -1;
            self.callActions("beforeInitControls", arguments);
            switch(self.config.controls.scope){
                case "local":
                    parent = self.dom.container;
                    break;
                case "global":
                    parent = self.dom.document;
                    break;
                default:
                    throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
            }
            for(i = 0; definition = mixitup.controlDefinitions[i]; i++)if (self.config.controls.live || definition.live) {
                if (definition.parent) {
                    delagators = self.dom[definition.parent];
                    if (!delagators || delagators.length < 0) continue;
                    if (typeof delagators.length !== "number") delagators = [
                        delagators
                    ];
                } else delagators = [
                    parent
                ];
                for(j = 0; el = delagators[j]; j++){
                    control = self.getControl(el, definition.type, definition.selector);
                    self.controls.push(control);
                }
            } else {
                controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
                for(j = 0; el = controlElements[j]; j++){
                    control = self.getControl(el, definition.type, "");
                    if (!control) continue;
                    self.controls.push(control);
                }
            }
            self.callActions("afterInitControls", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {HTMLElement} el
         * @param   {string}      type
         * @param   {string}      selector
         * @return  {mixitup.Control|null}
         */ getControl: function(el, type, selector) {
            var self = this, control = null, i = -1;
            self.callActions("beforeGetControl", arguments);
            if (!selector) // Static controls only
            for(i = 0; control = mixitup.controls[i]; i++){
                if (control.el === el && control.isBound(self)) // Control already bound to this mixer (as another type).
                // NB: This prevents duplicate controls from being registered where a selector
                // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"
                return self.callFilters("controlGetControl", null, arguments);
                else if (control.el === el && control.type === type && control.selector === selector) {
                    // Another mixer is already using this control, add this mixer as a binding
                    control.addBinding(self);
                    return self.callFilters("controlGetControl", control, arguments);
                }
            }
            // Create new control
            control = new mixitup.Control();
            control.init(el, type, selector);
            control.classNames.base = h.getClassname(self.config.classNames, type);
            control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
            control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
            // Add a reference to this mixer as a binding
            control.addBinding(self);
            return self.callFilters("controlGetControl", control, arguments);
        },
        /**
         * Creates a compound selector by joining the `toggleArray` value as per the
         * defined toggle logic.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @return  {string}
         */ getToggleSelector: function() {
            var self = this, delineator = self.config.controls.toggleLogic === "or" ? ", " : "", toggleSelector = "";
            self.callActions("beforeGetToggleSelector", arguments);
            self.toggleArray = h.clean(self.toggleArray);
            toggleSelector = self.toggleArray.join(delineator);
            if (toggleSelector === "") toggleSelector = self.config.controls.toggleDefault;
            return self.callFilters("selectorGetToggleSelector", toggleSelector, arguments);
        },
        /**
         * Breaks compound selector strings in an array of discreet selectors,
         * as per the active `controls.toggleLogic` configuration option. Accepts
         * either a dynamic command object, or a state object.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object}        [command]
         * @param   {mixitup.State} [state]
         * @return  {void}
         */ buildToggleArray: function(command, state) {
            var self = this, activeFilterSelector = "";
            self.callActions("beforeBuildToggleArray", arguments);
            if (command && command.filter) activeFilterSelector = command.filter.selector.replace(/\s/g, "");
            else if (state) activeFilterSelector = state.activeFilter.selector.replace(/\s/g, "");
            else return;
            if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === "all") activeFilterSelector = "";
            if (self.config.controls.toggleLogic === "or") self.toggleArray = activeFilterSelector.split(",");
            else self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
            self.toggleArray = h.clean(self.toggleArray);
            self.callActions("afterBuildToggleArray", arguments);
        },
        /**
         * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
         * and breaks into its individual selectors.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string} compoundSelector
         * @return  {string[]}
         */ splitCompoundSelector: function(compoundSelector) {
            // Break at a `.` or `[`, capturing the delineator
            var partials = compoundSelector.split(/([\.\[])/g), toggleArray = [], selector = "", i = -1;
            if (partials[0] === "") partials.shift();
            for(i = 0; i < partials.length; i++){
                if (i % 2 === 0) selector = "";
                selector += partials[i];
                if (i % 2 !== 0) toggleArray.push(selector);
            }
            return toggleArray;
        },
        /**
         * Updates controls to their active/inactive state based on the command or
         * current state of the mixer.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {object} command
         * @return  {void}
         */ updateControls: function(command) {
            var self = this, control = null, output = new mixitup.CommandMultimix(), i = -1;
            self.callActions("beforeUpdateControls", arguments);
            // Sanitise to defaults
            if (command.filter) output.filter = command.filter.selector;
            else output.filter = self.state.activeFilter.selector;
            if (command.sort) output.sort = self.buildSortString(command.sort);
            else output.sort = self.buildSortString(self.state.activeSort);
            if (output.filter === self.config.selectors.target) output.filter = "all";
            if (output.filter === "") output.filter = "none";
            h.freeze(output);
            for(i = 0; control = self.controls[i]; i++)control.update(output, self.toggleArray);
            self.callActions("afterUpdateControls", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort}   command
         * @return  {string}
         */ buildSortString: function(command) {
            var self = this;
            var output = "";
            output += command.sortString;
            if (command.next) output += " " + self.buildSortString(command.next);
            return output;
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}        command
         * @param   {Operation}     operation
         * @return  {Promise.<mixitup.State>}
         */ insertTargets: function(command, operation) {
            var self = this, nextSibling = null, insertionIndex = -1, frag = null, target = null, el = null, i = -1;
            self.callActions("beforeInsertTargets", arguments);
            if (typeof command.index === "undefined") command.index = 0;
            nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
            frag = self.dom.document.createDocumentFragment();
            if (nextSibling) insertionIndex = h.index(nextSibling, self.config.selectors.target);
            else insertionIndex = self.targets.length;
            if (command.collection) {
                for(i = 0; el = command.collection[i]; i++){
                    if (self.dom.targets.indexOf(el) > -1) throw new Error(mixitup.messages.errorInsertPreexistingElement());
                    // Ensure elements are hidden when they are added to the DOM, so they can
                    // be animated in gracefully
                    el.style.display = "none";
                    frag.appendChild(el);
                    frag.appendChild(self.dom.document.createTextNode(" "));
                    if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
                    target = new mixitup.Target();
                    target.init(el, self);
                    target.isInDom = true;
                    self.targets.splice(insertionIndex, 0, target);
                    insertionIndex++;
                }
                self.dom.parent.insertBefore(frag, nextSibling);
            }
            // Since targets have been added, the original order must be updated
            operation.startOrder = self.origOrder = self.targets;
            self.callActions("afterInsertTargets", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Number}      [index]
         * @param   {Element}     [sibling]
         * @param   {string}      [position]
         * @return  {Element}
         */ getNextSibling: function(index, sibling, position) {
            var self = this, element = null;
            index = Math.max(index, 0);
            if (sibling && position === "before") // Explicit sibling
            element = sibling;
            else if (sibling && position === "after") // Explicit sibling
            element = sibling.nextElementSibling || null;
            else if (self.targets.length > 0 && typeof index !== "undefined") // Index and targets exist
            element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling;
            else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
                // No targets but other siblings
                if (self.config.layout.siblingAfter) element = self.config.layout.siblingAfter;
                else if (self.config.layout.siblingBefore) element = self.config.layout.siblingBefore.nextElementSibling;
                else self.dom.parent.children[0];
            } else element;
            return self.callFilters("elementGetNextSibling", element, arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ filterOperation: function(operation) {
            var self = this, testResult = false, index = -1, action = "", target = null, i = -1;
            self.callActions("beforeFilterOperation", arguments);
            action = operation.newFilter.action;
            for(i = 0; target = operation.newOrder[i]; i++){
                if (operation.newFilter.collection) // show via collection
                testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
                else // show via selector
                if (operation.newFilter.selector === "") testResult = false;
                else testResult = target.dom.el.matches(operation.newFilter.selector);
                self.evaluateHideShow(testResult, target, action, operation);
            }
            if (operation.toRemove.length) {
                for(i = 0; target = operation.show[i]; i++)if (operation.toRemove.indexOf(target) > -1) {
                    // If any shown targets should be removed, move them into the toHide array
                    operation.show.splice(i, 1);
                    if ((index = operation.toShow.indexOf(target)) > -1) operation.toShow.splice(index, 1);
                    operation.toHide.push(target);
                    operation.hide.push(target);
                    i--;
                }
            }
            operation.matching = operation.show.slice();
            if (operation.show.length === 0 && operation.newFilter.selector !== "" && self.targets.length !== 0) operation.hasFailed = true;
            self.callActions("afterFilterOperation", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   testResult
         * @param   {Element}   target
         * @param   {string}    action
         * @param   {Operation} operation
         * @return  {void}
         */ evaluateHideShow: function(testResult, target, action, operation) {
            var self = this, filteredTestResult = false, args = Array.prototype.slice.call(arguments, 1);
            filteredTestResult = self.callFilters("testResultEvaluateHideShow", testResult, args);
            self.callActions("beforeEvaluateHideShow", arguments);
            if (filteredTestResult === true && action === "show" || filteredTestResult === false && action === "hide") {
                operation.show.push(target);
                !target.isShown && operation.toShow.push(target);
            } else {
                operation.hide.push(target);
                target.isShown && operation.toHide.push(target);
            }
            self.callActions("afterEvaluateHideShow", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ sortOperation: function(operation) {
            var self = this, newOrder = [], target = null, el = null, i = -1;
            self.callActions("beforeSortOperation", arguments);
            operation.startOrder = self.targets;
            if (operation.newSort.collection) {
                // Sort by collection
                newOrder = [];
                for(i = 0; el = operation.newSort.collection[i]; i++){
                    if (self.dom.targets.indexOf(el) < 0) throw new Error(mixitup.messages.errorSortNonExistentElement());
                    target = new mixitup.Target();
                    target.init(el, self);
                    target.isInDom = true;
                    newOrder.push(target);
                }
                operation.newOrder = newOrder;
            } else if (operation.newSort.order === "random") // Sort random
            operation.newOrder = h.arrayShuffle(operation.startOrder);
            else if (operation.newSort.attribute === "") {
                // Sort by default
                operation.newOrder = self.origOrder.slice();
                if (operation.newSort.order === "desc") operation.newOrder.reverse();
            } else {
                // Sort by attribute
                operation.newOrder = operation.startOrder.slice();
                operation.newOrder.sort(function(a, b) {
                    return self.compare(a, b, operation.newSort);
                });
            }
            if (h.isEqualArray(operation.newOrder, operation.startOrder)) operation.willSort = false;
            self.callActions("afterSortOperation", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {mixitup.Target}        a
         * @param   {mixitup.Target}        b
         * @param   {mixitup.CommandSort}   command
         * @return  {Number}
         */ compare: function(a, b, command) {
            var self = this, order = command.order, attrA = self.getAttributeValue(a, command.attribute), attrB = self.getAttributeValue(b, command.attribute);
            if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                attrA = attrA.toLowerCase();
                attrB = attrB.toLowerCase();
            } else {
                attrA = attrA * 1;
                attrB = attrB * 1;
            }
            if (attrA < attrB) return order === "asc" ? -1 : 1;
            if (attrA > attrB) return order === "asc" ? 1 : -1;
            if (attrA === attrB && command.next) return self.compare(a, b, command.next);
            return 0;
        },
        /**
         * Reads the values of any data attributes present the provided target element
         * which match the current sort command.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Target}    target
         * @param   {string}            [attribute]
         * @return  {(String|Number)}
         */ getAttributeValue: function(target, attribute) {
            var self = this, value = "";
            value = target.dom.el.getAttribute("data-" + attribute);
            if (value === null) {
                if (self.config.debug.showWarnings) // Encourage users to assign values to all targets to avoid erroneous sorting
                // when types are mixed
                console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                    attribute: "data-" + attribute
                }));
            }
            // If an attribute is not present, return 0 as a safety value
            return self.callFilters("valueGetAttributeValue", value || 0, arguments);
        },
        /**
         * Inserts elements into the DOM in the appropriate
         * order using a document fragment for minimal
         * DOM thrashing
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   isResetting
         * @param   {Operation} operation
         * @return  {void}
         */ printSort: function(isResetting, operation) {
            var self = this, startOrder = isResetting ? operation.newOrder : operation.startOrder, newOrder = isResetting ? operation.startOrder : operation.newOrder, nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null, frag = window1.document.createDocumentFragment(), whitespace = null, target = null, el = null, i = -1;
            self.callActions("beforePrintSort", arguments);
            // Empty the container
            for(i = 0; target = startOrder[i]; i++){
                el = target.dom.el;
                if (el.style.position === "absolute") continue;
                h.removeWhitespace(el.previousSibling);
                el.parentElement.removeChild(el);
            }
            whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
            if (whitespace && whitespace.nodeName === "#text") h.removeWhitespace(whitespace);
            for(i = 0; target = newOrder[i]; i++){
                // Add targets into a document fragment
                el = target.dom.el;
                if (h.isElement(frag.lastChild)) frag.appendChild(window1.document.createTextNode(" "));
                frag.appendChild(el);
            }
            // Insert the document fragment into the container
            // before any other non-target elements
            if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) frag.insertBefore(window1.document.createTextNode(" "), frag.childNodes[0]);
            if (nextSibling) {
                frag.appendChild(window1.document.createTextNode(" "));
                self.dom.parent.insertBefore(frag, nextSibling);
            } else self.dom.parent.appendChild(frag);
            self.callActions("afterPrintSort", arguments);
        },
        /**
         * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}                sortString
         * @param   {mixitup.CommandSort}   command
         * @return  {mixitup.CommandSort}
         */ parseSortString: function(sortString, command) {
            var self = this, rules = sortString.split(" "), current = command, rule = [], i = -1;
            // command.sortString = sortString;
            for(i = 0; i < rules.length; i++){
                rule = rules[i].split(":");
                current.sortString = rules[i];
                current.attribute = h.dashCase(rule[0]);
                current.order = rule[1] || "asc";
                switch(current.attribute){
                    case "default":
                        // treat "default" as sorting by no attribute
                        current.attribute = "";
                        break;
                    case "random":
                        // treat "random" as an order not an attribute
                        current.attribute = "";
                        current.order = "random";
                        break;
                }
                if (!current.attribute || current.order === "random") break;
                if (i < rules.length - 1) {
                    // Embed reference to the next command
                    current.next = new mixitup.CommandSort();
                    h.freeze(current);
                    current = current.next;
                }
            }
            return self.callFilters("commandsParseSort", command, arguments);
        },
        /**
         * Parses all effects out of the user-defined `animation.effects` string into
         * their respective properties and units.
         *
         * @private
         * @instance
         * @since   2.0.0
         * @return  {void}
         */ parseEffects: function() {
            var self = this, transformName = "", effectsIn = self.config.animation.effectsIn || self.config.animation.effects, effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
            self.callActions("beforeParseEffects", arguments);
            self.effectsIn = new mixitup.StyleData();
            self.effectsOut = new mixitup.StyleData();
            self.transformIn = [];
            self.transformOut = [];
            self.effectsIn.opacity = self.effectsOut.opacity = 1;
            self.parseEffect("fade", effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect("fade", effectsOut, self.effectsOut, self.transformOut, true);
            for(transformName in mixitup.transformDefaults){
                if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) continue;
                self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
            }
            self.parseEffect("stagger", effectsIn, self.effectsIn, self.transformIn);
            self.parseEffect("stagger", effectsOut, self.effectsOut, self.transformOut, true);
            self.callActions("afterParseEffects", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {string}    effectName
         * @param   {string}    effectString
         * @param   {StyleData} effects
         * @param   {String[]}  transform
         * @param   {boolean}   [isOut]
         */ parseEffect: function(effectName, effectString, effects, transform, isOut) {
            var self = this, re = /\(([^)]+)\)/, propIndex = -1, str = "", match = [], val = "", units = [
                "%",
                "px",
                "em",
                "rem",
                "vh",
                "vw",
                "deg"
            ], unit = "", i = -1;
            self.callActions("beforeParseEffect", arguments);
            if (typeof effectString !== "string") throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
            if (effectString.indexOf(effectName) < 0) {
                // The effect is not present in the effects string
                if (effectName === "stagger") // Reset stagger to 0
                self.staggerDuration = 0;
                return;
            }
            // The effect is present
            propIndex = effectString.indexOf(effectName + "(");
            if (propIndex > -1) {
                // The effect has a user defined value in parentheses
                // Extract from the first parenthesis to the end of string
                str = effectString.substring(propIndex);
                // Match any number of characters between "(" and ")"
                match = re.exec(str);
                val = match[1];
            }
            switch(effectName){
                case "fade":
                    effects.opacity = val ? parseFloat(val) : 0;
                    break;
                case "stagger":
                    self.staggerDuration = val ? parseFloat(val) : 100;
                    break;
                default:
                    // All other effects are transforms following the same structure
                    if (isOut && self.config.animation.reverseOut && effectName !== "scale") effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
                    else effects[effectName].value = val ? parseFloat(val) : mixitup.transformDefaults[effectName].value;
                    if (val) {
                        for(i = 0; unit = units[i]; i++)if (val.indexOf(unit) > -1) {
                            effects[effectName].unit = unit;
                            break;
                        }
                    } else effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                    transform.push(effectName + "(" + effects[effectName].value + effects[effectName].unit + ")");
            }
            self.callActions("afterParseEffect", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {State}
         */ buildState: function(operation) {
            var self = this, state = new mixitup.State(), target = null, i = -1;
            self.callActions("beforeBuildState", arguments);
            // Map target elements into state arrays.
            // the real target objects should never be exposed
            for(i = 0; target = self.targets[i]; i++)if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.targets.push(target.dom.el);
            for(i = 0; target = operation.matching[i]; i++)state.matching.push(target.dom.el);
            for(i = 0; target = operation.show[i]; i++)state.show.push(target.dom.el);
            for(i = 0; target = operation.hide[i]; i++)if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.hide.push(target.dom.el);
            state.id = self.id;
            state.container = self.dom.container;
            state.activeFilter = operation.newFilter;
            state.activeSort = operation.newSort;
            state.activeDataset = operation.newDataset;
            state.activeContainerClassName = operation.newContainerClassName;
            state.hasFailed = operation.hasFailed;
            state.totalTargets = self.targets.length;
            state.totalShow = operation.show.length;
            state.totalHide = operation.hide.length;
            state.totalMatching = operation.matching.length;
            state.triggerElement = operation.triggerElement;
            return self.callFilters("stateBuildState", state, arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {boolean}   shouldAnimate
         * @param   {Operation} operation
         * @return  {void}
         */ goMix: function(shouldAnimate, operation) {
            var self = this, deferred = null;
            self.callActions("beforeGoMix", arguments);
            // If the animation duration is set to 0ms,
            // or no effects specified,
            // or the container is hidden
            // then abort animation
            if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) shouldAnimate = false;
            if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) // If nothing to show or hide, and not sorting or
            // changing layout
            shouldAnimate = false;
            if (!operation.startState.show.length && !operation.show.length) // If nothing currently shown, nothing to show
            shouldAnimate = false;
            mixitup.events.fire("mixStart", self.dom.container, {
                state: operation.startState,
                futureState: operation.newState,
                instance: self
            }, self.dom.document);
            if (typeof self.config.callbacks.onMixStart === "function") self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
            h.removeClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
            if (!self.userDeferred) // Queue empty, no pending operations
            deferred = self.userDeferred = h.defer(mixitup.libraries);
            else // Use existing deferred
            deferred = self.userDeferred;
            self.isBusy = true;
            if (!shouldAnimate || !mixitup.features.has.transitions) {
                // Abort
                if (self.config.debug.fauxAsync) setTimeout(function() {
                    self.cleanUp(operation);
                }, self.config.animation.duration);
                else self.cleanUp(operation);
                return self.callFilters("promiseGoMix", deferred.promise, arguments);
            }
            // If we should animate and the platform supports transitions, go for it
            if (window1.pageYOffset !== operation.docState.scrollTop) window1.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
            if (self.config.animation.applyPerspective) {
                self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
                self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
            }
            if (self.config.animation.animateResizeContainer && operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
            if (self.config.animation.animateResizeContainer && operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
            if (operation.startHeight === operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
            if (operation.startWidth === operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
            if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) self.dom.parent.style.overflow = "hidden";
            requestAnimationFrame(function() {
                self.moveTargets(operation);
            });
            return self.callFilters("promiseGoMix", deferred.promise, arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ getStartMixData: function(operation) {
            var self = this, parentStyle = window1.getComputedStyle(self.dom.parent), parentRect = self.dom.parent.getBoundingClientRect(), target = null, data = {}, i = -1, boxSizing = parentStyle[mixitup.features.boxSizingProp];
            self.incPadding = boxSizing === "border-box";
            self.callActions("beforeGetStartMixData", arguments);
            for(i = 0; target = operation.show[i]; i++){
                data = target.getPosData();
                operation.showPosData[i] = {
                    startPosData: data
                };
            }
            for(i = 0; target = operation.toHide[i]; i++){
                data = target.getPosData();
                operation.toHidePosData[i] = {
                    startPosData: data
                };
            }
            operation.startX = parentRect.left;
            operation.startY = parentRect.top;
            operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
            operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
            self.callActions("afterGetStartMixData", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ setInter: function(operation) {
            var self = this, target = null, i = -1;
            self.callActions("beforeSetInter", arguments);
            // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width
            if (self.config.animation.clampHeight) {
                self.dom.parent.style.height = operation.startHeight + "px";
                self.dom.parent.style.overflow = "hidden";
            }
            if (self.config.animation.clampWidth) {
                self.dom.parent.style.width = operation.startWidth + "px";
                self.dom.parent.style.overflow = "hidden";
            }
            for(i = 0; target = operation.toShow[i]; i++)target.show();
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }
            self.callActions("afterSetInter", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ getInterMixData: function(operation) {
            var self = this, target = null, i = -1;
            self.callActions("beforeGetInterMixData", arguments);
            for(i = 0; target = operation.show[i]; i++)operation.showPosData[i].interPosData = target.getPosData();
            for(i = 0; target = operation.toHide[i]; i++)operation.toHidePosData[i].interPosData = target.getPosData();
            self.callActions("afterGetInterMixData", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ setFinal: function(operation) {
            var self = this, target = null, i = -1;
            self.callActions("beforeSetFinal", arguments);
            operation.willSort && self.printSort(false, operation);
            for(i = 0; target = operation.toHide[i]; i++)target.hide();
            self.callActions("afterSetFinal", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ getFinalMixData: function(operation) {
            var self = this, parentStyle = null, parentRect = null, target = null, i = -1;
            self.callActions("beforeGetFinalMixData", arguments);
            for(i = 0; target = operation.show[i]; i++)operation.showPosData[i].finalPosData = target.getPosData();
            for(i = 0; target = operation.toHide[i]; i++)operation.toHidePosData[i].finalPosData = target.getPosData();
            // Remove clamping
            if (self.config.animation.clampHeight || self.config.animation.clampWidth) self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = "";
            if (!self.incPadding) parentStyle = window1.getComputedStyle(self.dom.parent);
            parentRect = self.dom.parent.getBoundingClientRect();
            operation.newX = parentRect.left;
            operation.newY = parentRect.top;
            operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
            operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
            operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
            operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;
            if (operation.willSort) self.printSort(true, operation);
            for(i = 0; target = operation.toShow[i]; i++)target.hide();
            for(i = 0; target = operation.toHide[i]; i++)target.show();
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.newContainerClassName);
                h.addClass(self.dom.container, self.config.layout.containerClassName);
            }
            self.callActions("afterGetFinalMixData", arguments);
        },
        /**
         * @private
         * @instance
         * @since    3.0.0
         * @param    {Operation}     operation
         */ getTweenData: function(operation) {
            var self = this, target = null, posData = null, effectNames = Object.getOwnPropertyNames(self.effectsIn), effectName = "", effect = null, widthChange = -1, heightChange = -1, i = -1, j = -1;
            self.callActions("beforeGetTweenData", arguments);
            for(i = 0; target = operation.show[i]; i++){
                posData = operation.showPosData[i];
                posData.posIn = new mixitup.StyleData();
                posData.posOut = new mixitup.StyleData();
                posData.tweenData = new mixitup.StyleData();
                // Process x and y
                if (target.isShown) {
                    posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                    posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                } else posData.posIn.x = posData.posIn.y = 0;
                posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
                // Process opacity
                posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
                posData.posOut.opacity = 1;
                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                // Adjust x and y if not nudging
                if (!target.isShown && !self.config.animation.nudge) {
                    posData.posIn.x = posData.posOut.x;
                    posData.posIn.y = posData.posOut.y;
                }
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                // Process width, height, and margins
                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width = posData.startPosData.width;
                    posData.posIn.height = posData.startPosData.height;
                    // "||" Prevents width/height change from including 0 width/height if hiding or showing
                    widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                    heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                    posData.posOut.width = posData.finalPosData.width;
                    posData.posOut.height = posData.finalPosData.height;
                    widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
                    posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
                    heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
                    posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
                    posData.tweenData.width = posData.posOut.width - posData.posIn.width;
                    posData.tweenData.height = posData.posOut.height - posData.posIn.height;
                    posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
                    posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
                }
                // Process transforms
                for(j = 0; effectName = effectNames[j]; j++){
                    effect = self.effectsIn[effectName];
                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                    posData.posIn[effectName].value = effect.value;
                    posData.posOut[effectName].value = 0;
                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                }
            }
            for(i = 0; target = operation.toHide[i]; i++){
                posData = operation.toHidePosData[i];
                posData.posIn = new mixitup.StyleData();
                posData.posOut = new mixitup.StyleData();
                posData.tweenData = new mixitup.StyleData();
                // Process x and y
                posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
                posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
                posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                // Process width, height, and margins
                if (self.config.animation.animateResizeTargets) {
                    posData.posIn.width = posData.startPosData.width;
                    posData.posIn.height = posData.startPosData.height;
                    widthChange = posData.startPosData.width - posData.interPosData.width;
                    posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                    heightChange = posData.startPosData.height - posData.interPosData.height;
                    posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                }
                // Process opacity
                posData.posIn.opacity = 1;
                posData.posOut.opacity = self.effectsOut.opacity;
                posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                // Process transforms
                for(j = 0; effectName = effectNames[j]; j++){
                    effect = self.effectsOut[effectName];
                    if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                    posData.posIn[effectName].value = 0;
                    posData.posOut[effectName].value = effect.value;
                    posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                    posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                }
            }
            self.callActions("afterGetTweenData", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ moveTargets: function(operation) {
            var self = this, target = null, moveData = null, posData = null, statusChange = "", willTransition = false, staggerIndex = -1, i = -1, checkProgress = self.checkProgress.bind(self);
            self.callActions("beforeMoveTargets", arguments);
            // TODO: this is an extra loop in addition to the calcs
            // done in getOperation, could some of this be done there?
            for(i = 0; target = operation.show[i]; i++){
                moveData = new mixitup.IMoveData();
                posData = operation.showPosData[i];
                statusChange = target.isShown ? "none" : "show";
                willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
                if (willTransition) // Prevent non-transitioning targets from incrementing the staggerIndex
                staggerIndex++;
                target.show();
                moveData.posIn = posData.posIn;
                moveData.posOut = posData.posOut;
                moveData.statusChange = statusChange;
                moveData.staggerIndex = staggerIndex;
                moveData.operation = operation;
                moveData.callback = willTransition ? checkProgress : null;
                target.move(moveData);
            }
            for(i = 0; target = operation.toHide[i]; i++){
                posData = operation.toHidePosData[i];
                moveData = new mixitup.IMoveData();
                statusChange = "hide";
                willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
                moveData.posIn = posData.posIn;
                moveData.posOut = posData.posOut;
                moveData.statusChange = statusChange;
                moveData.staggerIndex = i;
                moveData.operation = operation;
                moveData.callback = willTransition ? checkProgress : null;
                target.move(moveData);
            }
            if (self.config.animation.animateResizeContainer) {
                self.dom.parent.style[mixitup.features.transitionProp] = "height " + self.config.animation.duration + "ms ease, " + "width " + self.config.animation.duration + "ms ease ";
                requestAnimationFrame(function() {
                    if (operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.newHeight + "px";
                    if (operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.newWidth + "px";
                });
            }
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }
            self.callActions("afterMoveTargets", arguments);
        },
        /**
         * @private
         * @instance
         * @return  {boolean}
         */ hasEffect: function() {
            var self = this, EFFECTABLES = [
                "scale",
                "translateX",
                "translateY",
                "translateZ",
                "rotateX",
                "rotateY",
                "rotateZ"
            ], effectName = "", effect = null, result = false, value = -1, i = -1;
            if (self.effectsIn.opacity !== 1) return self.callFilters("resultHasEffect", true, arguments);
            for(i = 0; effectName = EFFECTABLES[i]; i++){
                effect = self.effectsIn[effectName];
                value = typeof effect && effect.value !== "undefined" ? effect.value : effect;
                if (value !== 0) {
                    result = true;
                    break;
                }
            }
            return self.callFilters("resultHasEffect", result, arguments);
        },
        /**
         * Determines if a target element will transition in
         * some fasion and therefore requires binding of
         * transitionEnd
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}        statusChange
         * @param   {boolean}       hasEffect
         * @param   {StyleData}     posIn
         * @param   {StyleData}     posOut
         * @return  {boolean}
         */ willTransition: function(statusChange, hasEffect, posIn, posOut) {
            var self = this, result = false;
            if (!h.isVisible(self.dom.container)) // If the container is not visible, the transitionEnd
            // event will not occur and MixItUp will hang
            result = false;
            else if (statusChange !== "none" && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) // If opacity and/or translate will change
            result = true;
            else if (self.config.animation.animateResizeTargets) // Check if width, height or margins will change
            result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop;
            else result = false;
            return self.callFilters("resultWillTransition", result, arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ checkProgress: function(operation) {
            var self = this;
            self.targetsDone++;
            if (self.targetsBound === self.targetsDone) self.cleanUp(operation);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Operation}     operation
         * @return  {void}
         */ cleanUp: function(operation) {
            var self = this, target = null, whitespaceBefore = null, whitespaceAfter = null, nextInQueue = null, i = -1;
            self.callActions("beforeCleanUp", arguments);
            self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
            for(i = 0; target = operation.show[i]; i++){
                target.cleanUp();
                target.show();
            }
            for(i = 0; target = operation.toHide[i]; i++){
                target.cleanUp();
                target.hide();
            }
            if (operation.willSort) self.printSort(false, operation);
            // Remove any styles applied to the parent container
            self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = "";
            if (operation.willChangeLayout) {
                h.removeClass(self.dom.container, operation.startContainerClassName);
                h.addClass(self.dom.container, operation.newContainerClassName);
            }
            if (operation.toRemove.length) {
                for(i = 0; target = self.targets[i]; i++)if (operation.toRemove.indexOf(target) > -1) {
                    if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === "#text" && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === "#text") h.removeWhitespace(whitespaceBefore);
                    if (!operation.willSort) // NB: Sorting will remove targets as a bi-product of `printSort()`
                    self.dom.parent.removeChild(target.dom.el);
                    self.targets.splice(i, 1);
                    target.isInDom = false;
                    i--;
                }
                // Since targets have been removed, the original order must be updated
                self.origOrder = self.targets;
            }
            if (operation.willSort) self.targets = operation.newOrder;
            self.state = operation.newState;
            self.lastOperation = operation;
            self.dom.targets = self.state.targets;
            // mixEnd
            mixitup.events.fire("mixEnd", self.dom.container, {
                state: self.state,
                instance: self
            }, self.dom.document);
            if (typeof self.config.callbacks.onMixEnd === "function") self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
            if (operation.hasFailed) {
                // mixFail
                mixitup.events.fire("mixFail", self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);
                if (typeof self.config.callbacks.onMixFail === "function") self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                h.addClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
            }
            // User-defined callback function
            if (typeof self.userCallback === "function") self.userCallback.call(self.dom.container, self.state, self);
            if (typeof self.userDeferred.resolve === "function") self.userDeferred.resolve(self.state);
            self.userCallback = null;
            self.userDeferred = null;
            self.lastClicked = null;
            self.isToggling = false;
            self.isBusy = false;
            if (self.queue.length) {
                self.callActions("beforeReadQueueCleanUp", arguments);
                nextInQueue = self.queue.shift();
                // Update non-public API properties stored in queue
                self.userDeferred = nextInQueue.deferred;
                self.isToggling = nextInQueue.isToggling;
                self.lastClicked = nextInQueue.triggerElement;
                if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) self.multimix.apply(self, nextInQueue.args);
                else self.dataset.apply(self, nextInQueue.args);
            }
            self.callActions("afterCleanUp", arguments);
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseMultimixArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandMultimix();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                if (typeof arg === "object") h.extend(instruction.command, arg);
                else if (typeof arg === "boolean") instruction.animate = arg;
                else if (typeof arg === "function") instruction.callback = arg;
            }
            // Coerce arbitrary command arguments into typed command objects
            if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) instruction.command.insert = self.parseInsertArgs([
                instruction.command.insert
            ]).command;
            if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) instruction.command.remove = self.parseRemoveArgs([
                instruction.command.remove
            ]).command;
            if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) instruction.command.filter = self.parseFilterArgs([
                instruction.command.filter
            ]).command;
            if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) instruction.command.sort = self.parseSortArgs([
                instruction.command.sort
            ]).command;
            if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) instruction.command.changeLayout = self.parseChangeLayoutArgs([
                instruction.command.changeLayout
            ]).command;
            instruction = self.callFilters("instructionParseMultimixArgs", instruction, arguments);
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseFilterArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandFilter();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (typeof arg === "string") // Selector
                instruction.command.selector = arg;
                else if (arg === null) instruction.command.collection = [];
                else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) // Single element
                instruction.command.collection = [
                    arg
                ];
                else if (typeof arg === "object" && typeof arg.length !== "undefined") // Multiple elements in array, NodeList or jQuery collection
                instruction.command.collection = h.arrayFromList(arg);
                else if (typeof arg === "object") // Filter command
                h.extend(instruction.command, arg);
                else if (typeof arg === "boolean") instruction.animate = arg;
                else if (typeof arg === "function") instruction.callback = arg;
            }
            if (instruction.command.selector && instruction.command.collection) throw new Error(mixitup.messages.errorFilterInvalidArguments());
            instruction = self.callFilters("instructionParseFilterArgs", instruction, arguments);
            h.freeze(instruction);
            return instruction;
        },
        parseSortArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, sortString = "", i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandSort();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                switch(typeof arg){
                    case "string":
                        // Sort string
                        sortString = arg;
                        break;
                    case "object":
                        // Array of element references
                        if (arg.length) instruction.command.collection = h.arrayFromList(arg);
                        break;
                    case "boolean":
                        instruction.animate = arg;
                        break;
                    case "function":
                        instruction.callback = arg;
                        break;
                }
            }
            if (sortString) instruction.command = self.parseSortString(sortString, instruction.command);
            instruction = self.callFilters("instructionParseSortArgs", instruction, arguments);
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since   2.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseInsertArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandInsert();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                if (typeof arg === "number") // Insert index
                instruction.command.index = arg;
                else if (typeof arg === "string" && [
                    "before",
                    "after"
                ].indexOf(arg) > -1) // 'before'/'after'
                instruction.command.position = arg;
                else if (typeof arg === "string") // Markup
                instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes);
                else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) // Single element
                !instruction.command.collection.length ? instruction.command.collection = [
                    arg
                ] : instruction.command.sibling = arg;
                else if (typeof arg === "object" && arg.length) // Multiple elements in array or jQuery collection
                !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0];
                else if (typeof arg === "object" && arg.childNodes && arg.childNodes.length) // Document fragment
                !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0];
                else if (typeof arg === "object") // Insert command
                h.extend(instruction.command, arg);
                else if (typeof arg === "boolean") instruction.animate = arg;
                else if (typeof arg === "function") instruction.callback = arg;
            }
            if (instruction.command.index && instruction.command.sibling) throw new Error(mixitup.messages.errorInsertInvalidArguments());
            if (!instruction.command.collection.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningInsertNoElements());
            instruction = self.callFilters("instructionParseInsertArgs", instruction, arguments);
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseRemoveArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), target = null, arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandRemove();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                switch(typeof arg){
                    case "number":
                        if (self.targets[arg]) instruction.command.targets[0] = self.targets[arg];
                        break;
                    case "string":
                        instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
                        break;
                    case "object":
                        if (arg && arg.length) instruction.command.collection = arg;
                        else if (h.isElement(arg, self.dom.document)) instruction.command.collection = [
                            arg
                        ];
                        else // Remove command
                        h.extend(instruction.command, arg);
                        break;
                    case "boolean":
                        instruction.animate = arg;
                        break;
                    case "function":
                        instruction.callback = arg;
                        break;
                }
            }
            if (instruction.command.collection.length) {
                for(i = 0; target = self.targets[i]; i++)if (instruction.command.collection.indexOf(target.dom.el) > -1) instruction.command.targets.push(target);
            }
            if (!instruction.command.targets.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningRemoveNoElements());
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseDatasetArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandDataset();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                switch(typeof arg){
                    case "object":
                        if (Array.isArray(arg) || typeof arg.length === "number") instruction.command.dataset = arg;
                        else // Change layout command
                        h.extend(instruction.command, arg);
                        break;
                    case "boolean":
                        instruction.animate = arg;
                        break;
                    case "function":
                        instruction.callback = arg;
                        break;
                }
            }
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array<*>}  args
         * @return  {mixitup.UserInstruction}
         */ parseChangeLayoutArgs: function(args) {
            var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
            instruction.animate = self.config.animation.enable;
            instruction.command = new mixitup.CommandChangeLayout();
            for(i = 0; i < args.length; i++){
                arg = args[i];
                if (arg === null) continue;
                switch(typeof arg){
                    case "string":
                        instruction.command.containerClassName = arg;
                        break;
                    case "object":
                        // Change layout command
                        h.extend(instruction.command, arg);
                        break;
                    case "boolean":
                        instruction.animate = arg;
                        break;
                    case "function":
                        instruction.callback = arg;
                        break;
                }
            }
            h.freeze(instruction);
            return instruction;
        },
        /**
         * @private
         * @instance
         * @since       3.0.0
         * @param       {mixitup.QueueItem}         queueItem
         * @return      {Promise.<mixitup.State>}
         */ queueMix: function(queueItem) {
            var self = this, deferred = null, toggleSelector = "";
            self.callActions("beforeQueueMix", arguments);
            deferred = h.defer(mixitup.libraries);
            if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                queueItem.deferred = deferred;
                self.queue.push(queueItem);
                // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.
                if (self.config.controls.enable) {
                    if (self.isToggling) {
                        self.buildToggleArray(queueItem.instruction.command);
                        toggleSelector = self.getToggleSelector();
                        self.updateControls({
                            filter: {
                                selector: toggleSelector
                            }
                        });
                    } else self.updateControls(queueItem.instruction.command);
                }
            } else {
                if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                deferred.resolve(self.state);
                mixitup.events.fire("mixBusy", self.dom.container, {
                    state: self.state,
                    instance: self
                }, self.dom.document);
                if (typeof self.config.callbacks.onMixBusy === "function") self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
            }
            return self.callFilters("promiseQueueMix", deferred.promise, arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Array.<object>}    newDataset
         * @return  {Operation}
         */ getDataOperation: function(newDataset) {
            var self = this, operation = new mixitup.Operation(), startDataset = [];
            operation = self.callFilters("operationUnmappedGetDataOperation", operation, arguments);
            if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) throw new Error(mixitup.messages.errorDatasetNotSet());
            operation.id = h.randomHex();
            operation.startState = self.state;
            operation.startDataset = startDataset;
            operation.newDataset = newDataset.slice();
            self.diffDatasets(operation);
            operation.startOrder = self.targets;
            operation.newOrder = operation.show;
            if (self.config.animation.enable) {
                self.getStartMixData(operation);
                self.setInter(operation);
                operation.docState = h.getDocumentState(self.dom.document);
                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);
                self.parseEffects();
                operation.hasEffect = self.hasEffect();
                self.getTweenData(operation);
            }
            self.targets = operation.show.slice();
            operation.newState = self.buildState(operation);
            // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
            // but are added after state is built so that state is accurate
            Array.prototype.push.apply(self.targets, operation.toRemove);
            operation = self.callFilters("operationMappedGetDataOperation", operation, arguments);
            return operation;
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation} operation
         * @return  {void}
         */ diffDatasets: function(operation) {
            var self = this, persistantStartIds = [], persistantNewIds = [], insertedTargets = [], data = null, target = null, el = null, frag = null, nextEl = null, uids = {}, id = "", i = -1;
            self.callActions("beforeDiffDatasets", arguments);
            for(i = 0; data = operation.newDataset[i]; i++){
                if (typeof (id = data[self.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                    uidKey: self.config.data.uidKey
                }));
                if (!uids[id]) uids[id] = true;
                else throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                    uid: id
                }));
                if ((target = self.cache[id]) instanceof mixitup.Target) {
                    // Already in cache
                    if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                        // change detected
                        el = target.render(data);
                        target.data = data;
                        if (el !== target.dom.el) {
                            // Update target element reference
                            if (target.isInDom) {
                                target.unbindEvents();
                                self.dom.parent.replaceChild(el, target.dom.el);
                            }
                            if (!target.isShown) el.style.display = "none";
                            target.dom.el = el;
                            if (target.isInDom) target.bindEvents();
                        }
                    }
                    el = target.dom.el;
                } else {
                    // New target
                    target = new mixitup.Target();
                    target.init(null, self, data);
                    target.hide();
                }
                if (!target.isInDom) {
                    // Adding to DOM
                    if (!frag) // Open frag
                    frag = self.dom.document.createDocumentFragment();
                    if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                    frag.appendChild(target.dom.el);
                    target.isInDom = true;
                    target.unbindEvents();
                    target.bindEvents();
                    target.hide();
                    operation.toShow.push(target);
                    insertedTargets.push(target);
                } else {
                    // Already in DOM
                    nextEl = target.dom.el.nextElementSibling;
                    persistantNewIds.push(id);
                    if (frag) {
                        // Close and insert previously opened frag
                        if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                        self.insertDatasetFrag(frag, target.dom.el, insertedTargets);
                        frag = null;
                    }
                }
                operation.show.push(target);
            }
            if (frag) {
                // Unclosed frag remaining
                nextEl = nextEl || self.config.layout.siblingAfter;
                if (nextEl) frag.appendChild(self.dom.document.createTextNode(" "));
                self.insertDatasetFrag(frag, nextEl, insertedTargets);
            }
            for(i = 0; data = operation.startDataset[i]; i++){
                id = data[self.config.data.uidKey];
                target = self.cache[id];
                if (operation.show.indexOf(target) < 0) {
                    // Previously shown but now absent
                    operation.hide.push(target);
                    operation.toHide.push(target);
                    operation.toRemove.push(target);
                } else persistantStartIds.push(id);
            }
            if (!h.isEqualArray(persistantStartIds, persistantNewIds)) operation.willSort = true;
            self.callActions("afterDiffDatasets", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.1.5
         * @param   {DocumentFragment}          frag
         * @param   {(HTMLElement|null)}        nextEl
         * @param   {Array.<mixitup.Target>}    targets
         * @return  {void}
         */ insertDatasetFrag: function(frag, nextEl, targets) {
            var self = this;
            var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;
            self.dom.parent.insertBefore(frag, nextEl);
            while(targets.length){
                self.targets.splice(insertAt, 0, targets.shift());
                insertAt++;
            }
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.CommandSort} sortCommandA
         * @param   {mixitup.CommandSort} sortCommandB
         * @return  {boolean}
         */ willSort: function(sortCommandA, sortCommandB) {
            var self = this, result = false;
            if (self.config.behavior.liveSort || sortCommandA.order === "random" || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) result = true;
            else if (sortCommandA.next && sortCommandB.next) result = self.willSort(sortCommandA.next, sortCommandB.next);
            else result = false;
            return self.callFilters("resultWillSort", result, arguments);
        },
        /**
         * A shorthand method for `.filter('all')`. Shows all targets in the container.
         *
         * @example
         *
         * .show()
         *
         * @example <caption>Example: Showing all targets</caption>
         *
         * mixer.show()
         *     .then(function(state) {
         *         console.log(state.totalShow === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */ show: function() {
            var self = this;
            return self.filter("all");
        },
        /**
         * A shorthand method for `.filter('none')`. Hides all targets in the container.
         *
         * @example
         *
         * .hide()
         *
         * @example <caption>Example: Hiding all targets</caption>
         *
         * mixer.hide()
         *     .then(function(state) {
         *         console.log(state.totalShow === 0); // true
         *         console.log(state.totalHide === state.totalTargets); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @return      {Promise.<mixitup.State>}
         */ hide: function() {
            var self = this;
            return self.filter("none");
        },
        /**
         * Returns a boolean indicating whether or not a MixItUp operation is
         * currently in progress.
         *
         * @example
         *
         * .isMixing()
         *
         * @example <caption>Example: Checking the status of a mixer</caption>
         *
         * mixer.sort('random', function() {
         *     console.log(mixer.isMixing()) // false
         * });
         *
         * console.log(mixer.isMixing()) // true
         *
         * @public
         * @instance
         * @since   2.0.0
         * @return  {boolean}
         */ isMixing: function() {
            var self = this;
            return self.isBusy;
        },
        /**
         * Filters all targets in the container by a provided selector string, or the values `'all'`
         * or `'none'`. Only targets matching the selector will be shown.
         *
         * @example
         *
         * .filter(selector [, animate] [, callback])
         *
         * @example <caption>Example 1: Filtering targets by a class selector</caption>
         *
         * mixer.filter('.category-a')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
         *     });
         *
         * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
         *
         * mixer.filter('[data-category~="a"]')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
         *     });
         *
         * @example <caption>Example 3: Filtering targets by a compound selector</caption>
         *
         * // Show only those targets with the classes 'category-a' AND 'category-b'
         *
         * mixer.filter('.category-a.category-c')
         *     .then(function(state) {
         *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
         *     });
         *
         * @example <caption>Example 4: Filtering via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * console.log(collection.length); // 34
         *
         * // Filter the collection manually using Array.prototype.filter
         *
         * var filtered = collection.filter(function(target) {
         *    return parseInt(target.getAttribute('data-price')) > 10;
         * });
         *
         * console.log(filtered.length); // 22
         *
         * // Pass the filtered collection to MixItUp
         *
         * mixer.filter(filtered)
         *    .then(function(state) {
         *        console.log(state.activeFilter.collection.length === 22); // true
         *    });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
         *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ filter: function() {
            var self = this, instruction = self.parseFilterArgs(arguments);
            return self.multimix({
                filter: instruction.command
            }, instruction.animate, instruction.callback);
        },
        /**
         * Adds an additional selector to the currently active filter selector, concatenating
         * as per the logic defined in `controls.toggleLogic`.
         *
         * @example
         *
         * .toggleOn(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling on a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a'
         *
         * mixer.toggleOn('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ toggleOn: function() {
            var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, toggleSelector = "";
            self.isToggling = true;
            if (self.toggleArray.indexOf(selector) < 0) self.toggleArray.push(selector);
            toggleSelector = self.getToggleSelector();
            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },
        /**
         * Removes a selector from the active filter selector.
         *
         * @example
         *
         * .toggleOff(selector [, animate] [, callback])
         *
         * @example <caption>Example: Toggling off a filter selector</caption>
         *
         * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
         *
         * mixer.toggleOff('.category-b')
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector); // '.category-a'
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}    selector
         *      Any valid CSS selector (i.e. `'.category-a'`)
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ toggleOff: function() {
            var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, selectorIndex = self.toggleArray.indexOf(selector), toggleSelector = "";
            self.isToggling = true;
            if (selectorIndex > -1) self.toggleArray.splice(selectorIndex, 1);
            toggleSelector = self.getToggleSelector();
            return self.multimix({
                filter: toggleSelector
            }, instruction.animate, instruction.callback);
        },
        /**
         * Sorts all targets in the container according to a provided sort string.
         *
         * @example
         *
         * .sort(sortString [, animate] [, callback])
         *
         * @example <caption>Example 1: Sorting by the default DOM order</caption>
         *
         * // Reverse the default order of the targets
         *
         * mixer.sort('default:desc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'default'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *     });
         *
         * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute
         *
         * mixer.sort('published-date:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 3: Sorting by multiple attributes</caption>
         *
         * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
         *
         * mixer.sort('published-date:desc data-title:asc')
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.activeSort.order === 'desc'); // true
         *
         *         console.log(state.activeSort.next.attribute === 'title'); // true
         *         console.log(state.activeSort.next.order === 'asc'); // true
         *     });
         *
         * @example <caption>Example 4: Sorting by random</caption>
         *
         * mixer.sort('random')
         *     .then(function(state) {
         *         console.log(state.activeSort.order === 'random') // true
         *     });
         *
         * @example <caption>Example 5: Sorting via an element collection</caption>
         *
         * var collection = Array.from(container.querySelectorAll('.mix'));
         *
         * // Swap the position of two elements in the collection:
         *
         * var temp = collection[1];
         *
         * collection[1] = collection[0];
         * collection[0] = temp;
         *
         * // Pass the sorted collection to MixItUp
         *
         * mixer.sort(collection)
         *     .then(function(state) {
         *         console.log(state.targets[0] === collection[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(string|Array.<HTMLElement>)}    sortString
         *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ sort: function() {
            var self = this, instruction = self.parseSortArgs(arguments);
            return self.multimix({
                sort: instruction.command
            }, instruction.animate, instruction.callback);
        },
        /**
         * Changes the layout of the container by adding, removing or updating a
         * layout-specific class name. If `animation.animateResizetargets` is
         * enabled, MixItUp will attempt to gracefully animate the width, height,
         * and position of targets between layout states.
         *
         * @example
         *
         * .changeLayout(containerClassName [, animate] [, callback])
         *
         * @example <caption>Example 1: Adding a new class name to the container</caption>
         *
         * mixer.changeLayout('container-list')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === 'container-list'); // true
         *      });
         *
         * @example <caption>Example 2: Removing a previously added class name from the container</caption>
         *
         * mixer.changeLayout('')
         *      .then(function(state) {
         *          console.log(state.activeContainerClass === ''); // true
         *      });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    containerClassName
         *      A layout-specific class name to add to the container.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ changeLayout: function() {
            var self = this, instruction = self.parseChangeLayoutArgs(arguments);
            return self.multimix({
                changeLayout: instruction.command
            }, instruction.animate, instruction.callback);
        },
        /**
         * Updates the contents and order of the container to reflect the provided dataset,
         * if the dataset API is in use.
         *
         * The dataset API is designed for use in API-driven JavaScript applications, and
         * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
         * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
         * achieved purely via changes to your data model, without the uglyness of having
         * to interact with or query the DOM directly.
         *
         * @example
         *
         * .dataset(dataset [, animate] [, callback])
         *
         * @example <caption>Example 1: Rendering a dataset</caption>
         *
         * var myDataset = [
         *     {id: 1, ...},
         *     {id: 2, ...},
         *     {id: 3, ...}
         * ];
         *
         * mixer.dataset(myDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 3); // true
         *     });
         *
         * @example <caption>Example 2: Sorting a dataset</caption>
         *
         * // Create a new dataset in reverse order
         *
         * var newDataset = myDataset.slice().reverse();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.activeDataset[0] === myDataset[2]); // true
         *     });
         *
         * @example <caption>Example 3: Removing an item from the dataset</caption>
         *
         * console.log(myDataset.length); // 3
         *
         * // Create a new dataset with the last item removed.
         *
         * var newDataset = myDataset.slice().pop();
         *
         * mixer.dataset(newDataset)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {Array.<object>}    dataset
         *      An array of objects, each one representing the underlying data model of a target to be rendered.
         * @param       {boolean}           [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}          [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ dataset: function() {
            var self = this, instruction = self.parseDatasetArgs(arguments), operation = null, queueItem = null, animate = false;
            self.callActions("beforeDataset", arguments);
            if (!self.isBusy) {
                if (instruction.callback) self.userCallback = instruction.callback;
                animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                operation = self.getDataOperation(instruction.command.dataset);
                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();
                queueItem.args = arguments;
                queueItem.instruction = instruction;
                return self.queueMix(queueItem);
            }
        },
        /**
         * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
         * operations as requested.
         *
         * @example
         *
         * .multimix(multimixCommand [, animate] [, callback])
         *
         * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
         *
         * mixer.multimix({
         *     filter: '.category-b',
         *     sort: 'published-date:desc'
         * })
         *     .then(function(state) {
         *         console.log(state.activeFilter.selector === '.category-b'); // true
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *     });
         *
         * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
         *
         * console.log(mixer.getState().totalShow); // 6
         *
         * // NB: When inserting via `multimix()`, an object should be provided as the value
         * // for the `insert` portion of the command, allowing for a collection of elements
         * // and an insertion index to be specified.
         *
         * mixer.multimix({
         *     sort: 'published-date:desc', // Sort the container, including any new elements
         *     insert: {
         *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
         *         index: 5
         *     },
         *     remove: existingElementReference // Remove 1 existing element
         * })
         *     .then(function(state) {
         *         console.log(state.activeSort.attribute === 'published-date'); // true
         *         console.log(state.totalShow === 7); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {object}    multimixCommand
         *      An object containing one or more things to do
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ multimix: function() {
            var self = this, operation = null, animate = false, queueItem = null, instruction = self.parseMultimixArgs(arguments);
            self.callActions("beforeMultimix", arguments);
            if (!self.isBusy) {
                operation = self.getOperation(instruction.command);
                if (self.config.controls.enable) {
                    // Update controls for API calls
                    if (instruction.command.filter && !self.isToggling) {
                        // As we are not toggling, reset the toggle array
                        // so new filter overrides existing toggles
                        self.toggleArray.length = 0;
                        self.buildToggleArray(operation.command);
                    }
                    if (self.queue.length < 1) self.updateControls(operation.command);
                }
                if (instruction.callback) self.userCallback = instruction.callback;
                // Always allow the instruction to override the instance setting
                animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                self.callFilters("operationMultimix", operation, arguments);
                return self.goMix(animate, operation);
            } else {
                queueItem = new mixitup.QueueItem();
                queueItem.args = arguments;
                queueItem.instruction = instruction;
                queueItem.triggerElement = self.lastClicked;
                queueItem.isToggling = self.isToggling;
                return self.queueMix(queueItem);
            }
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}            multimixCommand
         * @param   {boolean}           [isPreFetch]
         *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
         * @return  {Operation|null}
         */ getOperation: function(multimixCommand) {
            var self = this, sortCommand = multimixCommand.sort, filterCommand = multimixCommand.filter, changeLayoutCommand = multimixCommand.changeLayout, removeCommand = multimixCommand.remove, insertCommand = multimixCommand.insert, operation = new mixitup.Operation();
            operation = self.callFilters("operationUnmappedGetOperation", operation, arguments);
            operation.id = h.randomHex();
            operation.command = multimixCommand;
            operation.startState = self.state;
            operation.triggerElement = self.lastClicked;
            if (self.isBusy) {
                if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                return null;
            }
            if (insertCommand) self.insertTargets(insertCommand, operation);
            if (removeCommand) operation.toRemove = removeCommand.targets;
            operation.startSort = operation.newSort = operation.startState.activeSort;
            operation.startOrder = operation.newOrder = self.targets;
            if (sortCommand) {
                operation.startSort = operation.startState.activeSort;
                operation.newSort = sortCommand;
                operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
                if (operation.willSort) self.sortOperation(operation);
            }
            operation.startFilter = operation.startState.activeFilter;
            if (filterCommand) operation.newFilter = filterCommand;
            else operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
            if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target;
            else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
            self.filterOperation(operation);
            operation.startContainerClassName = operation.startState.activeContainerClassName;
            if (changeLayoutCommand) {
                operation.newContainerClassName = changeLayoutCommand.containerClassName;
                if (operation.newContainerClassName !== operation.startContainerClassName) operation.willChangeLayout = true;
            } else operation.newContainerClassName = operation.startContainerClassName;
            if (self.config.animation.enable) {
                // Populate the operation's position data
                self.getStartMixData(operation);
                self.setInter(operation);
                operation.docState = h.getDocumentState(self.dom.document);
                self.getInterMixData(operation);
                self.setFinal(operation);
                self.getFinalMixData(operation);
                self.parseEffects();
                operation.hasEffect = self.hasEffect();
                self.getTweenData(operation);
            }
            if (operation.willSort) self.targets = operation.newOrder;
            operation.newState = self.buildState(operation);
            return self.callFilters("operationMappedGetOperation", operation, arguments);
        },
        /**
         * Renders a previously created operation at a specific point in its path, as
         * determined by a multiplier between 0 and 1.
         *
         * @example
         * .tween(operation, multiplier)
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.Operation}     operation
         *      An operation object created via the `getOperation` method
         *
         * @param   {Float}                 multiplier
         *      Any number between 0 and 1 representing the percentage complete of the operation
         * @return  {void}
         */ tween: function(operation, multiplier) {
            var target = null, posData = null, toHideIndex = -1, i = -1;
            multiplier = Math.min(multiplier, 1);
            multiplier = Math.max(multiplier, 0);
            for(i = 0; target = operation.show[i]; i++){
                posData = operation.showPosData[i];
                target.applyTween(posData, multiplier);
            }
            for(i = 0; target = operation.hide[i]; i++){
                if (target.isShown) target.hide();
                if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                    posData = operation.toHidePosData[toHideIndex];
                    if (!target.isShown) target.show();
                    target.applyTween(posData, multiplier);
                }
            }
        },
        /**
         * Inserts one or more new target elements into the container at a specified
         * index.
         *
         * To be indexed as targets, new elements must match the `selectors.target`
         * selector (`'.mix'` by default).
         *
         * @example
         *
         * .insert(newElements [, index] [, animate], [, callback])
         *
         * @example <caption>Example 1: Inserting a single element via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 0
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insert(newElement)
         *     .then(function(state) {
         *         console.log(state.totalShow === 1); // true
         *     });
         *
         * @example <caption>Example 2: Inserting a single element via HTML string</caption>
         *
         * console.log(mixer.getState().totalShow); // 1
         *
         * // Create a new element via reference
         *
         * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
         *
         * // Create and insert the new element at index 1
         *
         * mixer.insert(newElementHtml, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 2); // true
         *         console.log(state.show[1].outerHTML === newElementHtml); // true
         *     });
         *
         * @example <caption>Example 3: Inserting multiple elements via reference</caption>
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * // Create an array of new elements to insert.
         *
         * var newElement1 = document.createElement('div');
         * var newElement2 = document.createElement('div');
         *
         * newElement1.classList.add('mix');
         * newElement2.classList.add('mix');
         *
         * var newElementsCollection = [newElement1, newElement2];
         *
         * // Insert the new elements starting at index 1
         *
         * mixer.insert(newElementsCollection, 1)
         *     .then(function(state) {
         *         console.log(state.totalShow === 4); // true
         *         console.log(state.show[1] === newElement1); // true
         *         console.log(state.show[2] === newElement2); // true
         *     });
         *
         * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
         *
         * console.log(mixer.getState().totalShow); // 4
         *
         * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
         *
         * // Insert the new elements starting at index 3
         *
         * mixer.insert($newElement, 3)
         *     .then(function(state) {
         *         console.log(state.totalShow === 5); // true
         *         console.log(state.show[3] === $newElement[0]); // true
         *     });
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {number}    index=0
         *      The index at which to insert the new element(s). `0` by default.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ insert: function() {
            var self = this, args = self.parseInsertArgs(arguments);
            return self.multimix({
                insert: args.command
            }, args.animate, args.callback);
        },
        /**
         * Inserts one or more new elements before a provided reference element.
         *
         * @example
         *
         * .insertBefore(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element before a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertBefore(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 2, before the reference element
         *
         *         console.log(state.show[2] === newElement); // true
         *
         *         // The reference element is now at index 3
         *
         *         console.log(state.show[3] === referenceElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements before.
         *@param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ insertBefore: function() {
            var self = this, args = self.parseInsertArgs(arguments);
            return self.insert(args.command.collection, "before", args.command.sibling, args.animate, args.callback);
        },
        /**
         * Inserts one or more new elements after a provided reference element.
         *
         * @example
         *
         * .insertAfter(newElements, referenceElement [, animate] [, callback])
         *
         * @example <caption>Example: Inserting a new element after a reference element</caption>
         *
         * // An existing reference element is chosen at index 2
         *
         * var referenceElement = mixer.getState().show[2];
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * mixer.insertAfter(newElement, referenceElement)
         *     .then(function(state) {
         *         // The new element is inserted into the container at index 3, after the reference element
         *
         *         console.log(state.show[3] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {HTMLElement}    referenceElement
         *      A reference to an existing element in the container to insert new elements after.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ insertAfter: function() {
            var self = this, args = self.parseInsertArgs(arguments);
            return self.insert(args.command.collection, "after", args.command.sibling, args.animate, args.callback);
        },
        /**
         * Inserts one or more new elements into the container before all existing targets.
         *
         * @example
         *
         * .prepend(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Prepending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.prepend(newElement)
         *     .then(function(state) {
         *         console.log(state.show[0] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ prepend: function() {
            var self = this, args = self.parseInsertArgs(arguments);
            return self.insert(0, args.command.collection, args.animate, args.callback);
        },
        /**
         * Inserts one or more new elements into the container after all existing targets.
         *
         * @example
         *
         * .append(newElements [,animate] [,callback])
         *
         * @example <caption>Example: Appending a new element</caption>
         *
         * // Create a new element
         *
         * var newElement = document.createElement('div');
         * newElement.classList.add('mix');
         *
         * // Insert the element into the container
         *
         * mixer.append(newElement)
         *     .then(function(state) {
         *         console.log(state.show[state.show.length - 1] === newElement); // true
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
         *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ append: function() {
            var self = this, args = self.parseInsertArgs(arguments);
            return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
        },
        /**
         * Removes one or more existing target elements from the container.
         *
         * @example
         *
         * .remove(elements [, animate] [, callback])
         *
         * @example <caption>Example 1: Removing an element by reference</caption>
         *
         * var elementToRemove = containerEl.firstElementChild;
         *
         * mixer.remove(elementToRemove)
         *      .then(function(state) {
         *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
         *      });
         *
         * @example <caption>Example 2: Removing a collection of elements by reference</caption>
         *
         * var elementsToRemove = containerEl.querySelectorAll('.category-a');
         *
         * console.log(elementsToRemove.length) // 3
         *
         * mixer.remove(elementsToRemove)
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 3: Removing one or more elements by selector</caption>
         *
         * mixer.remove('.category-a')
         *      .then(function() {
         *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
         *      });
         *
         * @example <caption>Example 4: Removing an element by index</caption>
         *
         * console.log(mixer.getState.totalShow); // 4
         *
         * // Remove the element at index 3
         *
         * mixer.remove(3)
         *      .then(function(state) {
         *          console.log(state.totalShow); // 3
         *          console.log(state.show[3]); // undefined
         *      });
         *
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
         *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
         * @param       {boolean}   [animate=true]
         *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
         * @param       {function}  [callback=null]
         *      An optional callback function to be invoked after the operation has completed.
         * @return      {Promise.<mixitup.State>}
         *      A promise resolving with the current state object.
         */ remove: function() {
            var self = this, args = self.parseRemoveArgs(arguments);
            return self.multimix({
                remove: args.command
            }, args.animate, args.callback);
        },
        /**
         * Retrieves the the value of any property or sub-object within the current
         * mixitup configuration, or the whole configuration object.
         *
         * @example
         *
         * .getConfig([stringKey])
         *
         * @example <caption>Example 1: retrieve the entire configuration object</caption>
         *
         * var config = mixer.getConfig(); // Config { ... }
         *
         * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
         *
         * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
         *
         * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
         *
         * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
         *
         * @public
         * @instance
         * @since       2.0.0
         * @param       {string}    [stringKey]    A "dot-notation" string key
         * @return      {*}
         */ getConfig: function(stringKey) {
            var self = this, value = null;
            if (!stringKey) value = self.config;
            else value = h.getProperty(self.config, stringKey);
            return self.callFilters("valueGetConfig", value, arguments);
        },
        /**
         * Updates the configuration of the mixer, after it has been instantiated.
         *
         * See the Configuration Object documentation for a full list of avilable
         * configuration options.
         *
         * @example
         *
         * .configure(config)
         *
         * @example <caption>Example 1: Updating animation options</caption>
         *
         * mixer.configure({
         *     animation: {
         *         effects: 'fade translateX(-100%)',
         *         duration: 300
         *     }
         * });
         *
         * @example <caption>Example 2: Removing a callback after it has been set</caption>
         *
         * var mixer;
         *
         * function handleMixEndOnce() {
         *     // Do something ..
         *
         *     // Then nullify the callback
         *
         *     mixer.configure({
         *         callbacks: {
         *             onMixEnd: null
         *         }
         *     });
         * };
         *
         * // Instantiate a mixer with a callback defined
         *
         * mixer = mixitup(containerEl, {
         *     callbacks: {
         *         onMixEnd: handleMixEndOnce
         *     }
         * });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {object}    config
         *      An object containing one of more configuration options.
         * @return      {void}
         */ configure: function(config) {
            var self = this;
            self.callActions("beforeConfigure", arguments);
            h.extend(self.config, config, true, true);
            self.callActions("afterConfigure", arguments);
        },
        /**
         * Returns an object containing information about the current state of the
         * mixer. See the State Object documentation for more information.
         *
         * NB: State objects are immutable and should therefore be regenerated
         * after any operation.
         *
         * @example
         *
         * .getState();
         *
         * @example <caption>Example: Retrieving a state object</caption>
         *
         * var state = mixer.getState();
         *
         * console.log(state.totalShow + 'targets are currently shown');
         *
         * @public
         * @instance
         * @since       2.0.0
         * @return      {mixitup.State} An object reflecting the current state of the mixer.
         */ getState: function() {
            var self = this, state = null;
            state = new mixitup.State();
            h.extend(state, self.state);
            h.freeze(state);
            return self.callFilters("stateGetState", state, arguments);
        },
        /**
         * Forces the re-indexing all targets within the container.
         *
         * This should only be used if some other piece of code in your application
         * has manipulated the contents of your container, which should be avoided.
         *
         * If you need to add or remove target elements from the container, use
         * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
         * itself up to date.
         *
         * @example
         *
         * .forceRefresh()
         *
         * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * // An element is removed from the container via some external DOM manipulation code:
         *
         * containerEl.removeChild(containerEl.firstElementChild);
         *
         * // The mixer does not know that the number of targets has changed:
         *
         * console.log(mixer.getState().totalShow); // 3
         *
         * mixer.forceRefresh();
         *
         * // After forceRefresh, the mixer is in sync again:
         *
         * console.log(mixer.getState().totalShow); // 2
         *
         * @public
         * @instance
         * @since 2.1.2
         * @return {void}
         */ forceRefresh: function() {
            var self = this;
            self.indexTargets();
        },
        /**
         * Forces the re-rendering of all targets when using the Dataset API.
         *
         * By default, targets are only re-rendered when `data.dirtyCheck` is
         * enabled, and an item's data has changed when `dataset()` is called.
         *
         * The `forceRender()` method allows for the re-rendering of all targets
         * in response to some arbitrary event, such as the changing of the target
         * render function.
         *
         * Targets are rendered against their existing data.
         *
         * @example
         *
         * .forceRender()
         *
         * @example <caption>Example: Force render targets after changing the target render function</caption>
         *
         * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
         *
         * mixer.configure({
         *     render: {
         *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
         *     }
         * });
         *
         * mixer.forceRender();
         *
         * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
         *
         * @public
         * @instance
         * @since 3.2.1
         * @return {void}
         */ forceRender: function() {
            var self = this, target = null, el = null, id = "";
            for(id in self.cache){
                target = self.cache[id];
                el = target.render(target.data);
                if (el !== target.dom.el) {
                    // Update target element reference
                    if (target.isInDom) {
                        target.unbindEvents();
                        self.dom.parent.replaceChild(el, target.dom.el);
                    }
                    if (!target.isShown) el.style.display = "none";
                    target.dom.el = el;
                    if (target.isInDom) target.bindEvents();
                }
            }
            self.state = self.buildState(self.lastOperation);
        },
        /**
         * Removes mixitup functionality from the container, unbinds all control
         * event handlers, and deletes the mixer instance from MixItUp's internal
         * cache.
         *
         * This should be performed whenever a mixer's container is removed from
         * the DOM, such as during a page change in a single page application,
         * or React's `componentWillUnmount()`.
         *
         * @example
         *
         * .destroy([cleanUp])
         *
         * @example <caption>Example: Destroying the mixer before removing its container element</caption>
         *
         * mixer.destroy();
         *
         * containerEl.parentElement.removeChild(containerEl);
         *
         * @public
         * @instance
         * @since   2.0.0
         * @param   {boolean}   [cleanUp=false]
         *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
         * @return  {void}
         */ destroy: function(cleanUp) {
            var self = this, control = null, target = null, i = 0;
            self.callActions("beforeDestroy", arguments);
            for(i = 0; control = self.controls[i]; i++)control.removeBinding(self);
            for(i = 0; target = self.targets[i]; i++){
                if (cleanUp) target.show();
                target.unbindEvents();
            }
            if (self.dom.container.id.match(/^MixItUp/)) self.dom.container.removeAttribute("id");
            delete mixitup.instances[self.id];
            self.callActions("afterDestroy", arguments);
        }
    });
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.IMoveData = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.posIn = null;
        this.posOut = null;
        this.operation = null;
        this.callback = null;
        this.statusChange = "";
        this.duration = -1;
        this.staggerIndex = -1;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.IMoveData);
    mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
    mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.TargetDom = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.el = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.TargetDom);
    mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
    mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
    /**
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Target = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.id = "";
        this.sortString = "";
        this.mixer = null;
        this.callback = null;
        this.isShown = false;
        this.isBound = false;
        this.isExcluded = false;
        this.isInDom = false;
        this.handler = null;
        this.operation = null;
        this.data = null;
        this.dom = new mixitup.TargetDom();
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Target);
    mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Target.prototype, {
        constructor: mixitup.Target,
        /**
         * Initialises a newly instantiated Target.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {(Element|null)}    el
         * @param   {object}            mixer
         * @param   {object}            [data]
         * @return  {void}
         */ init: function(el, mixer, data) {
            var self = this, id = "";
            self.callActions("beforeInit", arguments);
            self.mixer = mixer;
            if (!el) // If no element is provided, render it
            el = self.render(data);
            self.cacheDom(el);
            self.bindEvents();
            if (self.dom.el.style.display !== "none") self.isShown = true;
            if (data && mixer.config.data.uidKey) {
                if (typeof (id = data[mixer.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                    uidKey: mixer.config.data.uidKey
                }));
                self.id = id;
                self.data = data;
                mixer.cache[id] = self;
            }
            self.callActions("afterInit", arguments);
        },
        /**
         * Renders the target element using a user-defined renderer function.
         *
         * @private
         * @instance
         * @since   3.1.4
         * @param   {object} data
         * @return  {void}
         */ render: function(data) {
            var self = this, render = null, el = null, temp = null, output = "";
            self.callActions("beforeRender", arguments);
            render = self.callFilters("renderRender", self.mixer.config.render.target, arguments);
            if (typeof render !== "function") throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
            output = render(data);
            if (output && typeof output === "object" && h.isElement(output)) el = output;
            else if (typeof output === "string") {
                temp = document.createElement("div");
                temp.innerHTML = output;
                el = temp.firstElementChild;
            }
            return self.callFilters("elRender", el, arguments);
        },
        /**
         * Caches references of DOM elements neccessary for the target's functionality.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Element} el
         * @return  {void}
         */ cacheDom: function(el) {
            var self = this;
            self.callActions("beforeCacheDom", arguments);
            self.dom.el = el;
            self.callActions("afterCacheDom", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    attributeName
         * @return  {void}
         */ getSortString: function(attributeName) {
            var self = this, value = self.dom.el.getAttribute("data-" + attributeName) || "";
            self.callActions("beforeGetSortString", arguments);
            value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
            self.sortString = value;
            self.callActions("afterGetSortString", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */ show: function() {
            var self = this;
            self.callActions("beforeShow", arguments);
            if (!self.isShown) {
                self.dom.el.style.display = "";
                self.isShown = true;
            }
            self.callActions("afterShow", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */ hide: function() {
            var self = this;
            self.callActions("beforeHide", arguments);
            if (self.isShown) {
                self.dom.el.style.display = "none";
                self.isShown = false;
            }
            self.callActions("afterHide", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */ move: function(moveData) {
            var self = this;
            self.callActions("beforeMove", arguments);
            if (!self.isExcluded) self.mixer.targetsMoved++;
            self.applyStylesIn(moveData);
            requestAnimationFrame(function() {
                self.applyStylesOut(moveData);
            });
            self.callActions("afterMove", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {object}    posData
         * @param   {number}    multiplier
         * @return  {void}
         */ applyTween: function(posData, multiplier) {
            var self = this, propertyName = "", tweenData = null, posIn = posData.posIn, currentTransformValues = [], currentValues = new mixitup.StyleData(), i = -1;
            self.callActions("beforeApplyTween", arguments);
            currentValues.x = posIn.x;
            currentValues.y = posIn.y;
            if (multiplier === 0) self.hide();
            else if (!self.isShown) self.show();
            for(i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++){
                tweenData = posData.tweenData[propertyName];
                if (propertyName === "x") {
                    if (!tweenData) continue;
                    currentValues.x = posIn.x + tweenData * multiplier;
                } else if (propertyName === "y") {
                    if (!tweenData) continue;
                    currentValues.y = posIn.y + tweenData * multiplier;
                } else if (tweenData instanceof mixitup.TransformData) {
                    if (!tweenData.value) continue;
                    currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;
                    currentValues[propertyName].unit = tweenData.unit;
                    currentTransformValues.push(propertyName + "(" + currentValues[propertyName].value + tweenData.unit + ")");
                } else {
                    if (!tweenData) continue;
                    currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;
                    self.dom.el.style[propertyName] = currentValues[propertyName];
                }
            }
            if (currentValues.x || currentValues.y) currentTransformValues.unshift("translate(" + currentValues.x + "px, " + currentValues.y + "px)");
            if (currentTransformValues.length) self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(" ");
            self.callActions("afterApplyTween", arguments);
        },
        /**
         * Applies the initial styling to a target element before any transition
         * is applied.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */ applyStylesIn: function(moveData) {
            var self = this, posIn = moveData.posIn, isFading = self.mixer.effectsIn.opacity !== 1, transformValues = [];
            self.callActions("beforeApplyStylesIn", arguments);
            transformValues.push("translate(" + posIn.x + "px, " + posIn.y + "px)");
            if (self.mixer.config.animation.animateResizeTargets) {
                if (moveData.statusChange !== "show") {
                    // Don't apply posIn width or height or showing, as will be 0
                    self.dom.el.style.width = posIn.width + "px";
                    self.dom.el.style.height = posIn.height + "px";
                }
                self.dom.el.style.marginRight = posIn.marginRight + "px";
                self.dom.el.style.marginBottom = posIn.marginBottom + "px";
            }
            isFading && (self.dom.el.style.opacity = posIn.opacity);
            if (moveData.statusChange === "show") transformValues = transformValues.concat(self.mixer.transformIn);
            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
            self.callActions("afterApplyStylesIn", arguments);
        },
        /**
         * Applies a transition followed by the final styles for the element to
         * transition towards.
         *
         * @private
         * @instance
         * @param   {mixitup.IMoveData} moveData
         * @return  {void}
         */ applyStylesOut: function(moveData) {
            var self = this, transitionRules = [], transformValues = [], isResizing = self.mixer.config.animation.animateResizeTargets, isFading = typeof self.mixer.effectsIn.opacity !== "undefined";
            self.callActions("beforeApplyStylesOut", arguments);
            // Build the transition rules
            transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
            if (moveData.statusChange !== "none") transitionRules.push(self.writeTransitionRule("opacity", moveData.staggerIndex, moveData.duration));
            if (isResizing) {
                transitionRules.push(self.writeTransitionRule("width", moveData.staggerIndex, moveData.duration));
                transitionRules.push(self.writeTransitionRule("height", moveData.staggerIndex, moveData.duration));
                transitionRules.push(self.writeTransitionRule("margin", moveData.staggerIndex, moveData.duration));
            }
            // If no callback was provided, the element will
            // not transition in any way so tag it as "immovable"
            if (!moveData.callback) {
                self.mixer.targetsImmovable++;
                if (self.mixer.targetsMoved === self.mixer.targetsImmovable) // If the total targets moved is equal to the
                // number of immovable targets, the operation
                // should be considered finished
                self.mixer.cleanUp(moveData.operation);
                return;
            }
            // If the target will transition in some fasion,
            // assign a callback function
            self.operation = moveData.operation;
            self.callback = moveData.callback;
            // As long as the target is not excluded, increment
            // the total number of targets bound
            !self.isExcluded && self.mixer.targetsBound++;
            // Tag the target as bound to differentiate from transitionEnd
            // events that may come from stylesheet driven effects
            self.isBound = true;
            // Apply the transition
            self.applyTransition(transitionRules);
            // Apply width, height and margin negation
            if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                self.dom.el.style.width = moveData.posOut.width + "px";
                self.dom.el.style.height = moveData.posOut.height + "px";
                self.dom.el.style.marginRight = moveData.posOut.marginRight + "px";
                self.dom.el.style.marginBottom = moveData.posOut.marginBottom + "px";
            }
            if (!self.mixer.config.animation.nudge && moveData.statusChange === "hide") // If we're not nudging, the translation should be
            // applied before any other transforms to prevent
            // lateral movement
            transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
            // Apply fade
            switch(moveData.statusChange){
                case "hide":
                    isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
                    transformValues = transformValues.concat(self.mixer.transformOut);
                    break;
                case "show":
                    isFading && (self.dom.el.style.opacity = 1);
            }
            if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== "hide") // Opposite of above - apply translate after
            // other transform
            transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
            // Apply transforms
            self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
            self.callActions("afterApplyStylesOut", arguments);
        },
        /**
         * Combines the name of a CSS property with the appropriate duration and delay
         * values to created a valid transition rule.
         *
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string}    property
         * @param   {number}    staggerIndex
         * @param   {number}    duration
         * @return  {string}
         */ writeTransitionRule: function(property, staggerIndex, duration) {
            var self = this, delay = self.getDelay(staggerIndex), rule = "";
            rule = property + " " + (duration > 0 ? duration : self.mixer.config.animation.duration) + "ms " + delay + "ms " + (property === "opacity" ? "linear" : self.mixer.config.animation.easing);
            return self.callFilters("ruleWriteTransitionRule", rule, arguments);
        },
        /**
         * Calculates the transition delay for each target element based on its index, if
         * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
         * function can be used to manipulate the order of indices to produce custom
         * stagger effects (e.g. for use in a grid with irregular row lengths).
         *
         * @private
         * @instance
         * @since   2.0.0
         * @param   {number}    index
         * @return  {number}
         */ getDelay: function(index) {
            var self = this, delay = -1;
            if (typeof self.mixer.config.animation.staggerSequence === "function") index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
            delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
            return self.callFilters("delayGetDelay", delay, arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {string[]}  rules
         * @return  {void}
         */ applyTransition: function(rules) {
            var self = this, transitionString = rules.join(", ");
            self.callActions("beforeApplyTransition", arguments);
            self.dom.el.style[mixitup.features.transitionProp] = transitionString;
            self.callActions("afterApplyTransition", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event} e
         * @return  {void}
         */ handleTransitionEnd: function(e) {
            var self = this, propName = e.propertyName, canResize = self.mixer.config.animation.animateResizeTargets;
            self.callActions("beforeHandleTransitionEnd", arguments);
            if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf("transform") > -1 || propName.indexOf("opacity") > -1 || canResize && propName.indexOf("height") > -1 || canResize && propName.indexOf("width") > -1 || canResize && propName.indexOf("margin") > -1)) {
                self.callback.call(self, self.operation);
                self.isBound = false;
                self.callback = null;
                self.operation = null;
            }
            self.callActions("afterHandleTransitionEnd", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {Event}     e
         * @return  {void}
         */ eventBus: function(e) {
            var self = this;
            self.callActions("beforeEventBus", arguments);
            switch(e.type){
                case "webkitTransitionEnd":
                case "transitionend":
                    self.handleTransitionEnd(e);
            }
            self.callActions("afterEventBus", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */ unbindEvents: function() {
            var self = this;
            self.callActions("beforeUnbindEvents", arguments);
            h.off(self.dom.el, "webkitTransitionEnd", self.handler);
            h.off(self.dom.el, "transitionend", self.handler);
            self.callActions("afterUnbindEvents", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @return  {void}
         */ bindEvents: function() {
            var self = this, transitionEndEvent = "";
            self.callActions("beforeBindEvents", arguments);
            transitionEndEvent = mixitup.features.transitionPrefix === "webkit" ? "webkitTransitionEnd" : "transitionend";
            self.handler = function(e) {
                return self.eventBus(e);
            };
            h.on(self.dom.el, transitionEndEvent, self.handler);
            self.callActions("afterBindEvents", arguments);
        },
        /**
         * @private
         * @instance
         * @since   3.0.0
         * @param   {boolean}   [getBox]
         * @return  {PosData}
         */ getPosData: function(getBox) {
            var self = this, styles = {}, rect = null, posData = new mixitup.StyleData();
            self.callActions("beforeGetPosData", arguments);
            posData.x = self.dom.el.offsetLeft;
            posData.y = self.dom.el.offsetTop;
            if (self.mixer.config.animation.animateResizeTargets || getBox) {
                rect = self.dom.el.getBoundingClientRect();
                posData.top = rect.top;
                posData.right = rect.right;
                posData.bottom = rect.bottom;
                posData.left = rect.left;
                posData.width = rect.width;
                posData.height = rect.height;
            }
            if (self.mixer.config.animation.animateResizeTargets) {
                styles = window1.getComputedStyle(self.dom.el);
                posData.marginBottom = parseFloat(styles.marginBottom);
                posData.marginRight = parseFloat(styles.marginRight);
            }
            return self.callFilters("posDataGetPosData", posData, arguments);
        },
        /**
         * @private
         * @instance
         * @since       3.0.0
         * @return      {void}
         */ cleanUp: function() {
            var self = this;
            self.callActions("beforeCleanUp", arguments);
            self.dom.el.style[mixitup.features.transformProp] = "";
            self.dom.el.style[mixitup.features.transitionProp] = "";
            self.dom.el.style.opacity = "";
            if (self.mixer.config.animation.animateResizeTargets) {
                self.dom.el.style.width = "";
                self.dom.el.style.height = "";
                self.dom.el.style.marginRight = "";
                self.dom.el.style.marginBottom = "";
            }
            self.callActions("afterCleanUp", arguments);
        }
    });
    /**
     * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
     * allowing simultaneous control of said instances similar to the MixItUp 2 API.
     *
     * @example
     * new mixitup.Collection(instances)
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer[]}   instances
     */ mixitup.Collection = function(instances) {
        var instance = null, i = -1;
        this.callActions("beforeConstruct");
        for(i = 0; instance = instances[i]; i++)this[i] = instance;
        this.length = instances.length;
        this.callActions("afterConstruct");
        h.freeze(this);
    };
    mixitup.BaseStatic.call(mixitup.Collection);
    mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
    h.extend(mixitup.Collection.prototype, /** @lends mixitup.Collection */ {
        constructor: mixitup.Collection,
        /**
         * Calls a method on all instances in the collection by passing the method
         * name as a string followed by any applicable parameters to be curried into
         * to the method.
         *
         * @example
         * .mixitup(methodName[,arg1][,arg2..]);
         *
         * @example
         * var collection = new Collection([mixer1, mixer2]);
         *
         * return collection.mixitup('filter', '.category-a')
         *     .then(function(states) {
         *         state.forEach(function(state) {
         *             console.log(state.activeFilter.selector); // .category-a
         *         });
         *     });
         *
         * @public
         * @instance
         * @since       3.0.0
         * @param       {string}  methodName
         * @return      {Promise<Array<mixitup.State>>}
         */ mixitup: function(methodName) {
            var self = this, instance = null, args = Array.prototype.slice.call(arguments), tasks = [], i = -1;
            this.callActions("beforeMixitup");
            args.shift();
            for(i = 0; instance = self[i]; i++)tasks.push(instance[methodName].apply(instance, args));
            return self.callFilters("promiseMixitup", h.all(tasks, mixitup.libraries), arguments);
        }
    });
    /**
     * `mixitup.Operation` objects contain all data neccessary to describe the full
     * lifecycle of any MixItUp operation. They can be used to compute and store an
     * operation for use at a later time (e.g. programmatic tweening).
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Operation = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.id = "";
        this.args = [];
        this.command = null;
        this.showPosData = [];
        this.toHidePosData = [];
        this.startState = null;
        this.newState = null;
        this.docState = null;
        this.willSort = false;
        this.willChangeLayout = false;
        this.hasEffect = false;
        this.hasFailed = false;
        this.triggerElement = null;
        this.show = [];
        this.hide = [];
        this.matching = [];
        this.toShow = [];
        this.toHide = [];
        this.toMove = [];
        this.toRemove = [];
        this.startOrder = [];
        this.newOrder = [];
        this.startSort = null;
        this.newSort = null;
        this.startFilter = null;
        this.newFilter = null;
        this.startDataset = null;
        this.newDataset = null;
        this.viewportDeltaX = 0;
        this.viewportDeltaY = 0;
        this.startX = 0;
        this.startY = 0;
        this.startHeight = 0;
        this.startWidth = 0;
        this.newX = 0;
        this.newY = 0;
        this.newHeight = 0;
        this.newWidth = 0;
        this.startContainerClassName = "";
        this.startDisplay = "";
        this.newContainerClassName = "";
        this.newDisplay = "";
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Operation);
    mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Operation.prototype.constructor = mixitup.Operation;
    /**
     * `mixitup.State` objects expose various pieces of data detailing the state of
     * a MixItUp instance. They are provided at the start and end of any operation via
     * callbacks and events, with the most recent state stored between operations
     * for retrieval at any time via the API.
     *
     * @constructor
     * @namespace
     * @memberof    mixitup
     * @public
     * @since       3.0.0
     */ mixitup.State = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /**
         * The ID of the mixer instance.
         *
         * @name        id
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */ this.id = "";
        /**
         * The currently active filter command as set by a control click or API call.
         *
         * @name        activeFilter
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandFilter}
         * @default     null
         */ this.activeFilter = null;
        /**
         * The currently active sort command as set by a control click or API call.
         *
         * @name        activeSort
         * @memberof    mixitup.State
         * @instance
         * @type        {mixitup.CommandSort}
         * @default     null
         */ this.activeSort = null;
        /**
         * The current layout-specific container class name, if applied.
         *
         * @name        activeContainerClassName
         * @memberof    mixitup.State
         * @instance
         * @type        {string}
         * @default     ''
         */ this.activeContainerClassName = "";
        /**
         * A reference to the container element that the mixer is instantiated on.
         *
         * @name        container
         * @memberof    mixitup.State
         * @instance
         * @type        {Element}
         * @default     null
         */ this.container = null;
        /**
         * An array of all target elements indexed by the mixer.
         *
         * @name        targets
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */ this.targets = [];
        /**
         * An array of all target elements not matching the current filter.
         *
         * @name        hide
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */ this.hide = [];
        /**
         * An array of all target elements matching the current filter and any additional
         * limits applied such as pagination.
         *
         * @name        show
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */ this.show = [];
        /**
         * An array of all target elements matching the current filter irrespective of
         * any additional limits applied such as pagination.
         *
         * @name        matching
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<Element>}
         * @default     []
         */ this.matching = [];
        /**
         * An integer representing the total number of target elements indexed by the
         * mixer. Equivalent to `state.targets.length`.
         *
         * @name        totalTargets
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */ this.totalTargets = -1;
        /**
         * An integer representing the total number of target elements matching the
         * current filter and any additional limits applied such as pagination.
         * Equivalent to `state.show.length`.
         *
         * @name        totalShow
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */ this.totalShow = -1;
        /**
         * An integer representing the total number of target elements not matching
         * the current filter. Equivalent to `state.hide.length`.
         *
         * @name        totalHide
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */ this.totalHide = -1;
        /**
         * An integer representing the total number of target elements matching the
         * current filter irrespective of any other limits applied such as pagination.
         * Equivalent to `state.matching.length`.
         *
         * @name        totalMatching
         * @memberof    mixitup.State
         * @instance
         * @type        {number}
         * @default     -1
         */ this.totalMatching = -1;
        /**
         * A boolean indicating whether the last operation "failed", i.e. no targets
         * could be found matching the filter.
         *
         * @name        hasFailed
         * @memberof    mixitup.State
         * @instance
         * @type        {boolean}
         * @default     false
         */ this.hasFailed = false;
        /**
         * The DOM element that was clicked if the last operation was triggered by the
         * clicking of a control and not an API call.
         *
         * @name        triggerElement
         * @memberof    mixitup.State
         * @instance
         * @type        {Element|null}
         * @default     null
         */ this.triggerElement = null;
        /**
         * The currently active dataset underlying the rendered targets, if the
         * dataset API is in use.
         *
         * @name        activeDataset
         * @memberof    mixitup.State
         * @instance
         * @type        {Array.<object>}
         * @default     null
         */ this.activeDataset = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.State);
    mixitup.State.prototype = Object.create(mixitup.Base.prototype);
    mixitup.State.prototype.constructor = mixitup.State;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.UserInstruction = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        this.command = {};
        this.animate = false;
        this.callback = null;
        this.callActions("afterConstruct");
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.UserInstruction);
    mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
    mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     */ mixitup.Messages = function() {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct");
        /* Errors
        ----------------------------------------------------------------------------- */ this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function";
        this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element";
        this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`";
        this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`";
        this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
        this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
        this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`";
        this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
        this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
        this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both";
        this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container";
        this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both";
        this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`";
        this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets";
        this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`";
        this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container";
        /* Warnings
        ----------------------------------------------------------------------------- */ this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.";
        this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`";
        this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`";
        this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.";
        this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.";
        this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.";
        this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output';
        this.callActions("afterConstruct");
        this.compileTemplates();
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Messages);
    mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Messages.prototype.constructor = mixitup.Messages;
    /**
     * @return {void}
     */ mixitup.Messages.prototype.compileTemplates = function() {
        var errorKey = "";
        var errorMessage = "";
        for(errorKey in this){
            if (typeof (errorMessage = this[errorKey]) !== "string") continue;
            this[h.camelCase(errorKey)] = h.template(errorMessage);
        }
    };
    mixitup.messages = new mixitup.Messages();
    /**
     * @constructor
     * @memberof    mixitup
     * @private
     * @since       3.0.0
     * @param       {mixitup.Mixer} mixer
     */ mixitup.Facade = function Mixer(mixer) {
        mixitup.Base.call(this);
        this.callActions("beforeConstruct", arguments);
        this.configure = mixer.configure.bind(mixer);
        this.show = mixer.show.bind(mixer);
        this.hide = mixer.hide.bind(mixer);
        this.filter = mixer.filter.bind(mixer);
        this.toggleOn = mixer.toggleOn.bind(mixer);
        this.toggleOff = mixer.toggleOff.bind(mixer);
        this.sort = mixer.sort.bind(mixer);
        this.changeLayout = mixer.changeLayout.bind(mixer);
        this.multimix = mixer.multimix.bind(mixer);
        this.dataset = mixer.dataset.bind(mixer);
        this.tween = mixer.tween.bind(mixer);
        this.insert = mixer.insert.bind(mixer);
        this.insertBefore = mixer.insertBefore.bind(mixer);
        this.insertAfter = mixer.insertAfter.bind(mixer);
        this.prepend = mixer.prepend.bind(mixer);
        this.append = mixer.append.bind(mixer);
        this.remove = mixer.remove.bind(mixer);
        this.destroy = mixer.destroy.bind(mixer);
        this.forceRefresh = mixer.forceRefresh.bind(mixer);
        this.forceRender = mixer.forceRender.bind(mixer);
        this.isMixing = mixer.isMixing.bind(mixer);
        this.getOperation = mixer.getOperation.bind(mixer);
        this.getConfig = mixer.getConfig.bind(mixer);
        this.getState = mixer.getState.bind(mixer);
        this.callActions("afterConstruct", arguments);
        h.freeze(this);
        h.seal(this);
    };
    mixitup.BaseStatic.call(mixitup.Facade);
    mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
    mixitup.Facade.prototype.constructor = mixitup.Facade;
    module.exports = mixitup;
    mixitup.BaseStatic.call(mixitup.constructor);
    mixitup.NAME = "mixitup";
    mixitup.CORE_VERSION = "3.3.1";
})(window);

},{}],"5ZhHE":[function(require,module,exports) {
/**!
 * MixItUp MultiFilter v3.3.6
 * A UI-builder for powerful multidimensional filtering
 * Build 293e0dda-087e-4a76-aadf-e3e8b311b81f
 *
 * Requires mixitup.js >= v^3.1.2
 *
 * @copyright Copyright 2014-2020 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-multifilter/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-multifilter/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */ !function(u) {
    "use strict";
    var e = function(u) {
        var t, i = u.h;
        if (t = [
            [
                "A",
                /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
            ],
            [
                "AA",
                /[\uA732]/g
            ],
            [
                "AE",
                /[\u00C6\u01FC\u01E2]/g
            ],
            [
                "AO",
                /[\uA734]/g
            ],
            [
                "AU",
                /[\uA736]/g
            ],
            [
                "AV",
                /[\uA738\uA73A]/g
            ],
            [
                "AY",
                /[\uA73C]/g
            ],
            [
                "B",
                /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
            ],
            [
                "C",
                /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
            ],
            [
                "D",
                /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
            ],
            [
                "DZ",
                /[\u01F1\u01C4]/g
            ],
            [
                "Dz",
                /[\u01F2\u01C5]/g
            ],
            [
                "E",
                /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
            ],
            [
                "F",
                /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
            ],
            [
                "G",
                /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
            ],
            [
                "H",
                /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
            ],
            [
                "I",
                /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
            ],
            [
                "J",
                /[\u004A\u24BF\uFF2A\u0134\u0248]/g
            ],
            [
                "K",
                /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
            ],
            [
                "L",
                /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
            ],
            [
                "LJ",
                /[\u01C7]/g
            ],
            [
                "Lj",
                /[\u01C8]/g
            ],
            [
                "M",
                /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
            ],
            [
                "N",
                /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
            ],
            [
                "NJ",
                /[\u01CA]/g
            ],
            [
                "Nj",
                /[\u01CB]/g
            ],
            [
                "O",
                /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
            ],
            [
                "OI",
                /[\u01A2]/g
            ],
            [
                "OO",
                /[\uA74E]/g
            ],
            [
                "OU",
                /[\u0222]/g
            ],
            [
                "P",
                /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
            ],
            [
                "Q",
                /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
            ],
            [
                "R",
                /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
            ],
            [
                "S",
                /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
            ],
            [
                "T",
                /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
            ],
            [
                "TZ",
                /[\uA728]/g
            ],
            [
                "U",
                /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
            ],
            [
                "V",
                /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
            ],
            [
                "VY",
                /[\uA760]/g
            ],
            [
                "W",
                /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
            ],
            [
                "X",
                /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
            ],
            [
                "Y",
                /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
            ],
            [
                "Z",
                /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
            ],
            [
                "a",
                /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
            ],
            [
                "aa",
                /[\uA733]/g
            ],
            [
                "ae",
                /[\u00E6\u01FD\u01E3]/g
            ],
            [
                "ao",
                /[\uA735]/g
            ],
            [
                "au",
                /[\uA737]/g
            ],
            [
                "av",
                /[\uA739\uA73B]/g
            ],
            [
                "ay",
                /[\uA73D]/g
            ],
            [
                "b",
                /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
            ],
            [
                "c",
                /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
            ],
            [
                "d",
                /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
            ],
            [
                "dz",
                /[\u01F3\u01C6]/g
            ],
            [
                "e",
                /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
            ],
            [
                "f",
                /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
            ],
            [
                "g",
                /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
            ],
            [
                "h",
                /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
            ],
            [
                "hv",
                /[\u0195]/g
            ],
            [
                "i",
                /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
            ],
            [
                "j",
                /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
            ],
            [
                "k",
                /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
            ],
            [
                "l",
                /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
            ],
            [
                "lj",
                /[\u01C9]/g
            ],
            [
                "m",
                /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
            ],
            [
                "n",
                /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
            ],
            [
                "nj",
                /[\u01CC]/g
            ],
            [
                "o",
                /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
            ],
            [
                "oi",
                /[\u01A3]/g
            ],
            [
                "ou",
                /[\u0223]/g
            ],
            [
                "oo",
                /[\uA74F]/g
            ],
            [
                "p",
                /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
            ],
            [
                "q",
                /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
            ],
            [
                "r",
                /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
            ],
            [
                "s",
                /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
            ],
            [
                "t",
                /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
            ],
            [
                "tz",
                /[\uA729]/g
            ],
            [
                "u",
                /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
            ],
            [
                "v",
                /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
            ],
            [
                "vy",
                /[\uA761]/g
            ],
            [
                "w",
                /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
            ],
            [
                "x",
                /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
            ],
            [
                "y",
                /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
            ],
            [
                "z",
                /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
            ]
        ], !u.CORE_VERSION || !i.compareVersions(e.REQUIRE_CORE_VERSION, u.CORE_VERSION)) throw new Error("[MixItUp Multifilter] MixItUp Multifilter v" + e.EXTENSION_VERSION + " requires at least MixItUp v" + e.REQUIRE_CORE_VERSION);
        u.ConfigCallbacks.registerAction("afterConstruct", "multifilter", function() {
            this.onParseFilterGroups = null;
        }), u.ConfigMultifilter = function() {
            this.enable = !1, this.logicWithinGroup = "or", this.logicBetweenGroups = "and", this.minSearchLength = 3, this.parseOn = "change", this.keyupThrottleDuration = 350, i.seal(this);
        }, u.Config.registerAction("beforeConstruct", "multifilter", function() {
            this.multifilter = new u.ConfigMultifilter;
        }), u.MultifilterFormEventTracker = function() {
            this.form = null, this.totalBound = 0, this.totalHandled = 0, i.seal(this);
        }, u.FilterGroupDom = function() {
            this.el = null, this.form = null, i.seal(this);
        }, u.FilterGroup = function() {
            this.name = "", this.dom = new u.FilterGroupDom, this.activeSelectors = [], this.activeFilters = [], this.activeToggles = [], this.handler = null, this.mixer = null, this.logic = "or", this.parseOn = "change", this.keyupTimeout = -1, i.seal(this);
        }, i.extend(u.FilterGroup.prototype, {
            init: function(u, e) {
                var t = this, i = u.getAttribute("data-logic");
                t.dom.el = u, this.name = t.dom.el.getAttribute("data-filter-group") || "", t.cacheDom(), t.dom.form && t.enableButtons(), t.mixer = e, (i && "and" === i.toLowerCase() || "and" === e.config.multifilter.logicWithinGroup) && (t.logic = "and"), t.bindEvents();
            },
            cacheDom: function() {
                var u = this;
                u.dom.form = i.closestParent(u.dom.el, "form", !0);
            },
            enableButtons: function() {
                var u = this, e = u.dom.form.querySelectorAll('button[type="submit"]:disabled'), t = null, i = -1;
                for(i = 0; t = e[i]; i++)t.disabled && (t.disabled = !1);
            },
            bindEvents: function() {
                var u = this;
                u.handler = function(e) {
                    switch(e.type){
                        case "reset":
                        case "submit":
                            u.handleFormEvent(e);
                            break;
                        default:
                            u["handle" + i.pascalCase(e.type)](e);
                    }
                }, i.on(u.dom.el, "click", u.handler), i.on(u.dom.el, "change", u.handler), i.on(u.dom.el, "keyup", u.handler), u.dom.form && (i.on(u.dom.form, "reset", u.handler), i.on(u.dom.form, "submit", u.handler));
            },
            unbindEvents: function() {
                var u = this;
                i.off(u.dom.el, "click", u.handler), i.off(u.dom.el, "change", u.handler), i.off(u.dom.el, "keyup", u.handler), u.dom.form && (i.off(u.dom.form, "reset", u.handler), i.off(u.dom.form, "submit", u.handler)), u.handler = null;
            },
            handleClick: function(u) {
                var e = this, t = e.mixer, r = null, l = i.closestParent(u.target, "[data-filter], [data-toggle]", !0), o = "", n = -1, E = "";
                l && ((o = e.mixer.config.selectors.control) && !l.matches(o) || (u.stopPropagation(), t.lastClicked || (t.lastClicked = l), "function" == typeof t.config.callbacks.onMixClick && (r = t.config.callbacks.onMixClick.call(t.lastClicked, t.state, u, e), r === !1) || (l.matches("[data-filter]") ? (E = l.getAttribute("data-filter"), e.activeToggles = [], e.activeSelectors = e.activeFilters = [
                    E
                ]) : l.matches("[data-toggle]") && (E = l.getAttribute("data-toggle"), e.activeFilters = [], (n = e.activeToggles.indexOf(E)) > -1 ? e.activeToggles.splice(n, 1) : e.activeToggles.push(E), "and" === e.logic ? e.activeSelectors = [
                    e.activeToggles
                ] : e.activeSelectors = e.activeToggles), e.updateControls(), "change" === e.mixer.config.multifilter.parseOn && e.mixer.parseFilterGroups())));
            },
            handleChange: function(u) {
                var e = this, t = u.target;
                switch(u.stopPropagation(), t.type){
                    case "text":
                    case "search":
                    case "email":
                    case "select-one":
                    case "radio":
                        e.getSingleValue(t);
                        break;
                    case "checkbox":
                    case "select-multiple":
                        e.getMultipleValues(t);
                }
                "change" === e.mixer.config.multifilter.parseOn && e.mixer.parseFilterGroups();
            },
            handleKeyup: function(u) {
                var e = this, t = u.target;
                if (!([
                    "text",
                    "search",
                    "email"
                ].indexOf(t.type) < 0)) {
                    if ("change" !== e.mixer.config.multifilter.parseOn) return void e.mixer.getSingleValue(t);
                    clearTimeout(e.keyupTimeout), e.keyupTimeout = setTimeout(function() {
                        e.getSingleValue(t), e.mixer.parseFilterGroups();
                    }, e.mixer.config.multifilter.keyupThrottleDuration);
                }
            },
            handleFormEvent: function(e) {
                var t = this, i = null, r = null, l = -1;
                if ("submit" === e.type && e.preventDefault(), "reset" === e.type && (t.activeFilters = t.activeToggles = t.activeSelectors = [], t.updateControls()), t.mixer.multifilterFormEventTracker) i = t.mixer.multifilterFormEventTracker;
                else for(i = t.mixer.multifilterFormEventTracker = new u.MultifilterFormEventTracker, i.form = e.target, l = 0; r = t.mixer.filterGroups[l]; l++)r.dom.form === e.target && i.totalBound++;
                e.target === i.form && (i.totalHandled++, i.totalHandled === i.totalBound && (t.mixer.multifilterFormEventTracker = null, "submit" !== e.type && "change" !== t.mixer.config.multifilter.parseOn || t.mixer.parseFilterGroups()));
            },
            getSingleValue: function(u) {
                var e = this, i = null, r = "", l = "", o = "", n = -1;
                if (u.type.match(/text|search|email/g)) {
                    if (r = u.getAttribute("data-search-attribute"), !r) throw new Error("[MixItUp MultiFilter] A valid `data-search-attribute` must be present on text inputs");
                    if (u.value.length < e.mixer.config.multifilter.minSearchLength) return void (e.activeSelectors = e.activeFilters = e.activeToggles = [
                        ""
                    ]);
                    for(o = u.value.toLowerCase().trim(), n = 0; i = t[n]; n++)o = o.replace(i[1], i[0]);
                    o = o.replace(/\W+/g, " "), l = "[" + r + '*="' + o + '"]';
                } else l = u.value;
                "string" == typeof u.value && (e.activeSelectors = e.activeToggles = e.activeFilters = l ? [
                    l
                ] : []);
            },
            getMultipleValues: function(u) {
                var e = this, t = [], i = "", r = null, l = null, o = -1;
                switch(u.type){
                    case "checkbox":
                        i = 'input[type="checkbox"]';
                        break;
                    case "select-multiple":
                        i = "option";
                }
                for(l = e.dom.el.querySelectorAll(i), o = 0; r = l[o]; o++)(r.checked || r.selected) && r.value && t.push(r.value);
                e.activeFilters = [], e.activeToggles = t, "and" === e.logic ? e.activeSelectors = [
                    t
                ] : e.activeSelectors = t;
            },
            updateControls: function(u) {
                var e = this, t = null, i = "", r = "", l = "", o = -1;
                for(i = e.mixer.config.selectors.control.trim(), r = [
                    "[data-filter]" + i,
                    "[data-toggle]" + i
                ].join(", "), u = u || e.dom.el.querySelectorAll(r), o = 0; t = u[o]; o++)l = Boolean(t.getAttribute("data-toggle")) ? "toggle" : "filter", e.updateControl(t, l);
            },
            updateControl: function(u, e) {
                var t = this, r = u.getAttribute("data-" + e), l = t.activeToggles.concat(t.activeFilters), o = "";
                o = i.getClassname(t.mixer.config.classNames, e, t.mixer.config.classNames.modifierActive), l.indexOf(r) > -1 ? i.addClass(u, o) : i.removeClass(u, o);
            },
            updateUi: function() {
                var u = this, e = u.dom.el.querySelectorAll("[data-filter], [data-toggle]"), t = u.dom.el.querySelectorAll('input[type="radio"], input[type="checkbox"], option'), i = u.activeToggles.concat(u.activeFilters), r = !1, l = null, o = -1;
                for(e.length && u.updateControls(e, !0), o = 0; l = t[o]; o++)switch(r = i.indexOf(l.value) > -1, l.tagName.toLowerCase()){
                    case "option":
                        l.selected = r;
                        break;
                    case "input":
                        l.checked = r;
                }
            }
        }), u.MixerDom.registerAction("afterConstruct", "multifilter", function() {
            this.filterGroups = [];
        }), u.Mixer.registerAction("afterConstruct", "multifilter", function() {
            this.filterGroups = [], this.filterGroupsHash = {}, this.multifilterFormEventTracker = null;
        }), u.Mixer.registerAction("afterCacheDom", "multifilter", function() {
            var e = this, t = null;
            if (e.config.multifilter.enable) {
                switch(e.config.controls.scope){
                    case "local":
                        t = e.dom.container;
                        break;
                    case "global":
                        t = e.dom.document;
                        break;
                    default:
                        throw new Error(u.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE);
                }
                e.dom.filterGroups = t.querySelectorAll("[data-filter-group]");
            }
        }), u.Mixer.registerAction("beforeInitControls", "multifilter", function() {
            var u = this;
            u.config.multifilter.enable && (u.config.controls.live = !0);
        }), u.Mixer.registerAction("afterSanitizeConfig", "multifilter", function() {
            var u = this;
            u.config.multifilter.logicBetweenGroups = u.config.multifilter.logicBetweenGroups.toLowerCase().trim(), u.config.multifilter.logicWithinGroup = u.config.multifilter.logicWithinGroup.toLowerCase().trim();
        }), u.Mixer.registerAction("afterAttach", "multifilter", function() {
            var u = this;
            u.dom.filterGroups.length && u.indexFilterGroups();
        }), u.Mixer.registerAction("afterUpdateControls", "multifilter", function() {
            var u = this, e = null, t = -1;
            for(t = 0; e = u.filterGroups[t]; t++)e.updateControls();
        }), u.Mixer.registerAction("beforeDestroy", "multifilter", function() {
            var u = this, e = null, t = -1;
            for(t = 0; e = u.filterGroups[t]; t++)e.unbindEvents();
        }), u.Mixer.extend({
            indexFilterGroups: function() {
                var e = this, t = null, i = null, r = -1;
                for(r = 0; i = e.dom.filterGroups[r]; r++)if (t = new u.FilterGroup, t.init(i, e), e.filterGroups.push(t), t.name) {
                    if ("undefined" != typeof e.filterGroupsHash[t.name]) throw new Error('[MixItUp MultiFilter] A filter group with name "' + t.name + '" already exists');
                    e.filterGroupsHash[t.name] = t;
                }
            },
            parseParseFilterGroupsArgs: function(e) {
                var t = this, r = new u.UserInstruction, l = null, o = -1;
                for(r.animate = t.config.animation.enable, r.command = new u.CommandFilter, o = 0; o < e.length; o++)l = e[o], "boolean" == typeof l ? r.animate = l : "function" == typeof l && (r.callback = l);
                return i.freeze(r), r;
            },
            getFilterGroupPaths: function() {
                var u = this, e = null, t = null, r = null, l = [], o = [], n = [], E = -1;
                for(E = 0; E < u.filterGroups.length; E++)(r = u.filterGroups[E].activeSelectors).length && (l.push(r), n.push(0));
                return e = function() {
                    var u = null, e = [], t = -1;
                    for(t = 0; t < l.length; t++)u = l[t][n[t]], Array.isArray(u) && (u = u.join("")), e.push(u);
                    e = i.clean(e), o.push(e);
                }, t = function(u) {
                    u = u || 0;
                    for(var i = l[u]; n[u] < i.length;)u < l.length - 1 ? t(u + 1) : e(), n[u]++;
                    n[u] = 0;
                }, l.length ? (t(), o) : "";
            },
            buildSelectorFromPaths: function(u) {
                var e = this, t = null, i = [], r = "", l = "", o = -1;
                if (!u.length) return "";
                if ("or" === e.config.multifilter.logicBetweenGroups && (l = ", "), u.length > 1) {
                    for(o = 0; o < u.length; o++)t = u[o], r = t.join(l), i.indexOf(r) < 0 && i.push(r);
                    return i.join(", ");
                }
                return u[0].join(l);
            },
            parseFilterGroups: function() {
                var u = this, e = u.parseFilterArgs(arguments), t = u.getFilterGroupPaths(), i = u.buildSelectorFromPaths(t), r = null, l = {};
                return "" === i && (i = u.config.controls.toggleDefault), e.command.selector = i, l.filter = e.command, "function" == typeof (r = u.config.callbacks.onParseFilterGroups) && (l = r(l)), u.multimix(l, e.animate, e.callback);
            },
            setFilterGroupSelectors: function(u, e) {
                var t = this, i = null;
                if (e = Array.isArray(e) ? e : [
                    e
                ], "undefined" == typeof (i = t.filterGroupsHash[u])) throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "' + u + '"');
                i.activeToggles = e.slice(), "and" === i.logic ? i.activeSelectors = [
                    i.activeToggles
                ] : i.activeSelectors = i.activeToggles, i.updateUi(i.activeToggles);
            },
            getFilterGroupSelectors: function(u) {
                var e = this, t = null;
                if ("undefined" == typeof (t = e.filterGroupsHash[u])) throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "' + u + '"');
                return t.activeSelectors.slice();
            }
        }), u.Facade.registerAction("afterConstruct", "multifilter", function(u) {
            this.parseFilterGroups = u.parseFilterGroups.bind(u), this.setFilterGroupSelectors = u.setFilterGroupSelectors.bind(u), this.getFilterGroupSelectors = u.getFilterGroupSelectors.bind(u);
        });
    };
    e.TYPE = "mixitup-extension", e.NAME = "mixitup-multifilter", e.EXTENSION_VERSION = "3.3.6", e.REQUIRE_CORE_VERSION = "^3.1.2";
    module.exports = e;
}(window);

},{}],"amAWQ":[function(require,module,exports) {
/**!
 * MixItUp Pagination v3.3.0
 * Client-side pagination for filtered and sorted content
 * Build 875b7d31-63d1-4040-ac6f-b1c814027891
 *
 * Requires mixitup.js >= v^3.1.8
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-pagination/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-pagination/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */ !function(a) {
    "use strict";
    var t = function(a) {
        var i = a.h;
        if (!a.CORE_VERSION || !i.compareVersions(t.REQUIRE_CORE_VERSION, a.CORE_VERSION)) throw new Error("[MixItUp Pagination] MixItUp Pagination " + t.EXTENSION_VERSION + " requires at least MixItUp " + t.REQUIRE_CORE_VERSION);
        a.ConfigCallbacks.registerAction("afterConstruct", "pagination", function() {
            this.onPaginateStart = null, this.onPaginateEnd = null;
        }), a.ConfigClassNames.registerAction("afterConstruct", "pagination", function() {
            this.elementPager = "control", this.elementPageList = "page-list", this.elementPageStats = "page-stats", this.modifierFirst = "first", this.modifierLast = "last", this.modifierPrev = "prev", this.modifierNext = "next", this.modifierTruncationMarker = "truncation-marker";
        }), a.ConfigLoad.registerAction("afterConstruct", "pagination", function() {
            this.page = 1;
        }), a.ConfigPagination = function() {
            this.generatePageList = !0, this.generatePageStats = !0, this.maintainActivePage = !0, this.loop = !1, this.hidePageListIfSinglePage = !1, this.hidePageStatsIfSinglePage = !1, this.limit = -1, this.maxPagers = 5, i.seal(this);
        }, a.ConfigRender.registerAction("afterConstruct", "pagination", function() {
            this.pager = null, this.pageStats = null;
        }), a.ConfigSelectors.registerAction("afterConstruct", "pagination", function() {
            this.pageList = ".mixitup-page-list", this.pageStats = ".mixitup-page-stats";
        }), a.ConfigTemplates.registerAction("afterConstruct", "pagination", function() {
            this.pager = '<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>', this.pagerPrev = '<button type="button" class="${classNames}" data-page="prev">&laquo;</button>', this.pagerNext = '<button type="button" class="${classNames}" data-page="next">&raquo;</button>', this.pagerTruncationMarker = '<span class="${classNames}">&hellip;</span>', this.pageStats = "${startPageAt} to ${endPageAt} of ${totalTargets}", this.pageStatsSingle = "${startPageAt} of ${totalTargets}", this.pageStatsFail = "None found";
        }), a.Config.registerAction("beforeConstruct", "pagination", function() {
            this.pagination = new a.ConfigPagination;
        }), a.ModelPager = function() {
            this.pageNumber = -1, this.classNames = "", this.classList = [], this.isDisabled = !1, this.isPrev = !1, this.isNext = !1, this.isPageLink = !1, this.isTruncationMarker = !1, i.seal(this);
        }, a.ModelPageStats = function() {
            this.startPageAt = -1, this.endPageAt = -1, this.totalTargets = -1, i.seal(this);
        }, a.UiClassNames.registerAction("afterConstruct", "pagination", function() {
            this.first = "", this.last = "", this.prev = "", this.next = "", this.first = "", this.last = "", this.truncated = "", this.truncationMarker = "";
        }), a.controlDefinitions.push(new a.ControlDefinition("pager", "[data-page]", !0, "pageListEls")), a.Control.registerFilter("commandsHandleClick", "pagination", function(a, t) {
            var e = this, n = {}, s = "", o = -1, g = null, r = null, l = -1;
            if (!e.selector || "[data-page]" !== e.selector) return a;
            for(r = i.closestParent(t.target, e.selector, !0, e.bound[0].dom.document), l = 0; g = e.bound[l]; l++)n = a[l], !g.config.pagination || g.config.pagination.limit < 0 || g.config.pagination.limit === 1 / 0 ? a[l] = null : !r || i.hasClass(r, g.classNamesPager.active) || i.hasClass(r, g.classNamesPager.disabled) ? a[l] = null : (s = r.getAttribute("data-page"), "prev" === s ? n.paginate = "prev" : "next" === s ? n.paginate = "next" : o && (n.paginate = parseInt(s)), g.lastClicked && (g.lastClicked = r));
            return a;
        }), a.CommandMultimix.registerAction("afterConstruct", "pagination", function() {
            this.paginate = null;
        }), a.CommandPaginate = function() {
            this.page = -1, this.limit = -1, this.action = "", this.anchor = null, i.seal(this);
        }, a.Events.registerAction("afterConstruct", "pagination", function() {
            this.paginateStart = null, this.paginateEnd = null;
        }), a.events = new a.Events, a.Operation.registerAction("afterConstruct", "pagination", function() {
            this.startPagination = null, this.newPagination = null, this.startTotalPages = -1, this.newTotalPages = -1;
        }), a.State.registerAction("afterConstruct", "pagination", function() {
            this.activePagination = null, this.totalPages = -1;
        }), a.MixerDom.registerAction("afterConstruct", "pagination", function() {
            this.pageListEls = [], this.pageStatsEls = [];
        }), a.Mixer.registerAction("afterConstruct", "pagination", function() {
            this.classNamesPager = new a.UiClassNames, this.classNamesPageList = new a.UiClassNames, this.classNamesPageStats = new a.UiClassNames;
        }), a.Mixer.registerAction("afterAttach", "pagination", function() {
            var a = this, t = null, e = -1;
            if (!(a.config.pagination.limit < 0)) {
                if (a.classNamesPager.base = i.getClassname(a.config.classNames, "pager"), a.classNamesPager.active = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierActive), a.classNamesPager.disabled = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierDisabled), a.classNamesPager.first = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierFirst), a.classNamesPager.last = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierLast), a.classNamesPager.prev = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierPrev), a.classNamesPager.next = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierNext), a.classNamesPager.truncationMarker = i.getClassname(a.config.classNames, "pager", a.config.classNames.modifierTruncationMarker), a.classNamesPageList.base = i.getClassname(a.config.classNames, "page-list"), a.classNamesPageList.disabled = i.getClassname(a.config.classNames, "page-list", a.config.classNames.modifierDisabled), a.classNamesPageStats.base = i.getClassname(a.config.classNames, "page-stats"), a.classNamesPageStats.disabled = i.getClassname(a.config.classNames, "page-stats", a.config.classNames.modifierDisabled), a.config.pagination.generatePageList && a.dom.pageListEls.length > 0) for(e = 0; t = a.dom.pageListEls[e]; e++)a.renderPageListEl(t, a.lastOperation);
                if (a.config.pagination.generatePageStats && a.dom.pageStatsEls.length > 0) for(e = 0; t = a.dom.pageStatsEls[e]; e++)a.renderPageStatsEl(t, a.lastOperation);
            }
        }), a.Mixer.registerAction("afterSanitizeConfig", "pagination", function() {
            var t = this, i = t.config.callbacks.onMixStart, e = t.config.callbacks.onMixEnd, n = t.config.callbacks.onPaginateStart, s = t.config.callbacks.onPaginateEnd, o = !1;
            t.config.pagination.limit < 0 || (t.classNamesPager = new a.UiClassNames, t.classNamesPageList = new a.UiClassNames, t.classNamesPageStats = new a.UiClassNames, t.config.callbacks.onMixStart = function(e, s) {
                e.activePagination.limit === s.activePagination.limit && e.activePagination.page === s.activePagination.page || (o = !0), "function" == typeof i && i.apply(t.dom.container, arguments), o && (a.events.fire("paginateStart", t.dom.container, {
                    state: e,
                    futureState: s,
                    instance: t
                }, t.dom.document), "function" == typeof n && n.apply(t.dom.container, arguments));
            }, t.config.callbacks.onMixEnd = function(i) {
                "function" == typeof e && e.apply(t.dom.container, arguments), o && (o = !1, a.events.fire("paginateEnd", t.dom.container, {
                    state: i,
                    instance: t
                }, t.dom.document), "function" == typeof s && s.apply(t.dom.container, arguments));
            });
        }), a.Mixer.registerFilter("operationGetInitialState", "pagination", function(a, t) {
            var i = this;
            return i.config.pagination.limit < 0 ? a : (a.newPagination = t.activePagination, a);
        }), a.Mixer.registerFilter("stateGetInitialState", "pagination", function(t) {
            var i = this;
            return i.config.pagination.limit < 0 ? t : (t.activePagination = new a.CommandPaginate, t.activePagination.page = i.config.load.page, t.activePagination.limit = i.config.pagination.limit, t);
        }), a.Mixer.registerAction("afterGetFinalMixData", "pagination", function() {
            var a = this;
            a.config.pagination.limit < 0 || "number" == typeof a.config.pagination.maxPagers && (a.config.pagination.maxPagers = Math.max(5, a.config.pagination.maxPagers));
        }), a.Mixer.registerAction("afterCacheDom", "pagination", function() {
            var t = this, i = null;
            if (!(t.config.pagination.limit < 0) && t.config.pagination.generatePageList) {
                switch(t.config.controls.scope){
                    case "local":
                        i = t.dom.container;
                        break;
                    case "global":
                        i = t.dom.document;
                        break;
                    default:
                        throw new Error(a.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE);
                }
                t.dom.pageListEls = i.querySelectorAll(t.config.selectors.pageList), t.dom.pageStatsEls = i.querySelectorAll(t.config.selectors.pageStats);
            }
        }), a.Mixer.registerFilter("stateBuildState", "pagination", function(a, t) {
            var i = this;
            return i.config.pagination.limit < 0 ? a : (a.activePagination = t.newPagination, a.totalPages = t.newTotalPages, a);
        }), a.Mixer.registerFilter("instructionParseMultimixArgs", "pagination", function(t) {
            var i = this;
            return i.config.pagination.limit < 0 ? t : (!t.command.paginate || t.command.paginate instanceof a.CommandPaginate || (t.command.paginate = i.parsePaginateArgs([
                t.command.paginate
            ]).command), t);
        }), a.Mixer.registerAction("afterFilterOperation", "pagination", function(a) {
            var t = this, i = -1, e = -1, n = [], s = [], o = null, g = -1, r = -1;
            if (!(t.config.pagination.limit < 0)) {
                if (a.newTotalPages = a.newPagination.limit ? Math.max(Math.ceil(a.matching.length / a.newPagination.limit), 1) : 1, t.config.pagination.maintainActivePage && (a.newPagination.page = a.newPagination.page > a.newTotalPages ? a.newTotalPages : a.newPagination.page), t.config.pagination.limit = a.newPagination.limit, a.newPagination.anchor) {
                    for(r = 0; (o = a.matching[r]) && o.dom.el !== a.newPagination.anchor; r++);
                    i = r, e = r + a.newPagination.limit - 1;
                } else i = a.newPagination.limit * (a.newPagination.page - 1), e = a.newPagination.limit * a.newPagination.page - 1, isNaN(i) && (i = 0);
                if (!(a.newPagination.limit < 0)) {
                    for(r = 0; o = a.show[r]; r++)r >= i && r <= e ? n.push(o) : s.push(o);
                    for(a.show = n, r = 0; o = a.toHide[r]; r++)o.isShown || (a.toHide.splice(r, 1), o.isShown = !1, r--);
                    for(r = 0; o = s[r]; r++)a.hide.push(o), (g = a.toShow.indexOf(o)) > -1 && a.toShow.splice(g, 1), o.isShown && a.toHide.push(o);
                }
            }
        }), a.Mixer.registerFilter("operationUnmappedGetOperation", "pagination", function(t, e) {
            var n = this;
            return n.config.pagination.limit < 0 ? t : (t.startState = n.state, t.startPagination = n.state.activePagination, t.startTotalPages = n.state.totalPages, t.newPagination = new a.CommandPaginate, t.newPagination.limit = t.startPagination.limit, t.newPagination.page = t.startPagination.page, e.paginate ? n.parsePaginateCommand(e.paginate, t) : (e.filter || e.sort) && (i.extend(t.newPagination, t.startPagination), n.config.pagination.maintainActivePage ? t.newPagination.page = n.state.activePagination.page : t.newPagination.page = 1), t);
        }), a.Mixer.registerFilter("operationMappedGetOperation", "pagination", function(a, t, i) {
            var e = this, n = null, s = -1;
            if (e.config.pagination.limit < 0) return a;
            if (i) return a;
            if (e.config.pagination.generatePageList && e.dom.pageListEls.length > 0) for(s = 0; n = e.dom.pageListEls[s]; s++)e.renderPageListEl(n, a);
            if (e.config.pagination.generatePageStats && e.dom.pageStatsEls.length > 0) for(s = 0; n = e.dom.pageStatsEls[s]; s++)e.renderPageStatsEl(n, a);
            return a;
        }), a.Mixer.extend({
            parsePaginateCommand: function(t, i) {
                var e = this;
                if (t.page > -1) {
                    if (0 === t.page) throw new Error(a.messages.ERROR_PAGINATE_INDEX_RANGE);
                    i.newPagination.page = Math.max(1, Math.min(1 / 0, t.page));
                } else "next" === t.action ? i.newPagination.page = e.getNextPage() : "prev" === t.action ? i.newPagination.page = e.getPrevPage() : t.anchor && (i.newPagination.anchor = t.anchor);
                t.limit > -1 && (i.newPagination.limit = t.limit), i.newPagination.limit !== i.startPagination.limit && (i.newTotalPages = i.newPagination.limit ? Math.max(Math.ceil(i.startState.matching.length / i.newPagination.limit), 1) : 1), (i.newPagination.limit <= 0 || i.newPagination.limit === 1 / 0) && (i.newPagination.page = 1);
            },
            getNextPage: function() {
                var a = this, t = -1;
                return t = a.state.activePagination.page + 1, t > a.state.totalPages && (t = a.config.pagination.loop ? 1 : a.state.activePagination.page), t;
            },
            getPrevPage: function() {
                var a = this, t = -1;
                return t = a.state.activePagination.page - 1, t < 1 && (t = a.config.pagination.loop ? a.state.totalPages : a.state.activePagination.page), t;
            },
            renderPageListEl: function(t, e) {
                var n = this, s = -1, o = "", g = [], r = null, l = null, c = [], p = !1, m = !1, f = null, P = null, u = "", d = -1;
                if (e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageListIfSinglePage) return t.innerHTML = "", void i.addClass(t, n.classNamesPageList.disabled);
                for(s = e.newPagination.page - 1, l = "function" == typeof (l = n.config.render.pager) ? l : null, n.config.pagination.maxPagers < 1 / 0 && e.newTotalPages > n.config.pagination.maxPagers && (c = n.getAllowedIndices(e)), r = new a.ModelPager, r.isPrev = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.prev), 1 !== e.newPagination.page || n.config.pagination.loop || (r.classList.push(n.classNamesPager.disabled), r.isDisabled = !0), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerPrev)(r), g.push(o), d = 0; d < e.newTotalPages; d++)o = n.renderPager(d, e, c), o || d < s && p || d > s && m ? o && g.push(o) : (r = new a.ModelPager, r.isTruncationMarker = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.truncationMarker), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerTruncationMarker)(r), g.push(o), d < s && (p = !0), d > s && (m = !0));
                for(r = new a.ModelPager, r.isNext = !0, r.classList.push(n.classNamesPager.base, n.classNamesPager.next), e.newPagination.page !== e.newTotalPages || n.config.pagination.loop || r.classList.push(n.classNamesPager.disabled), r.classNames = r.classList.join(" "), o = l ? l(r) : i.template(n.config.templates.pagerNext)(r), g.push(o), u = g.join(" "), t.innerHTML = u, f = t.querySelectorAll("." + n.classNamesPager.disabled), d = 0; P = f[d]; d++)"boolean" == typeof P.disabled && (P.disabled = !0);
                p || m ? i.addClass(t, n.classNamesPageList.truncated) : i.removeClass(t, n.classNamesPageList.truncated), e.newTotalPages > 1 ? i.removeClass(t, n.classNamesPageList.disabled) : i.addClass(t, n.classNamesPageList.disabled);
            },
            getAllowedIndices: function(a) {
                var t = this, i = a.newPagination.page - 1, e = a.newTotalPages - 1, n = [], s = -1, o = -1, g = -1, r = -1, l = -1, c = -1, p = -1;
                for(n.push(0), s = t.config.pagination.maxPagers - 2, o = Math.ceil((s - 1) / 2), g = Math.floor((s - 1) / 2), r = i - o, l = i + g, c = 0, r < 1 && (c = 1 - r), l > e - 1 && (c = e - 1 - l), p = r + c; s;)n.push(p), p++, s--;
                return n.push(e), n;
            },
            renderPager: function(t, e, n) {
                var s = this, o = null, g = e.newPagination.page - 1, r = new a.ModelPager, l = "";
                return s.config.pagination.maxPagers < 1 / 0 && n.length && n.indexOf(t) < 0 ? "" : (o = "function" == typeof (o = s.config.render.pager) ? o : null, r.isPageLink = !0, r.classList.push(s.classNamesPager.base), 0 === t && r.classList.push(s.classNamesPager.first), t === e.newTotalPages - 1 && r.classList.push(s.classNamesPager.last), t === g && r.classList.push(s.classNamesPager.active), r.classNames = r.classList.join(" "), r.pageNumber = t + 1, l = o ? o(r) : i.template(s.config.templates.pager)(r));
            },
            renderPageStatsEl: function(t, e) {
                var n = this, s = new a.ModelPageStats, o = null, g = "", r = "";
                return e.newPagination.limit < 0 || e.newPagination.limit === 1 / 0 || e.newTotalPages < 2 && n.config.pagination.hidePageStatsIfSinglePage ? (t.innerHTML = "", void i.addClass(t, n.classNamesPageStats.disabled)) : (o = "function" == typeof (o = n.config.render.pageStats) ? o : null, s.totalTargets = e.matching.length, r = s.totalTargets ? 1 === e.newPagination.limit ? n.config.templates.pageStatsSingle : n.config.templates.pageStats : n.config.templates.pageStatsFail, s.totalTargets && e.newPagination.limit > 0 ? (s.startPageAt = (e.newPagination.page - 1) * e.newPagination.limit + 1, s.endPageAt = Math.min(s.startPageAt + e.newPagination.limit - 1, s.totalTargets)) : s.startPageAt = s.endPageAt = 0, g = o ? o(s) : i.template(r)(s), t.innerHTML = g, void (s.totalTargets ? i.removeClass(t, n.classNamesPageStats.disabled) : i.addClass(t, n.classNamesPageStats.disabled)));
            },
            parsePaginateArgs: function(t) {
                var e = this, n = new a.UserInstruction, s = null, o = -1;
                for(n.animate = e.config.animation.enable, n.command = new a.CommandPaginate, o = 0; o < t.length; o++)s = t[o], null !== s && ("object" == typeof s && i.isElement(s, e.dom.document) ? n.command.anchor = s : s instanceof a.CommandPaginate || "object" == typeof s ? i.extend(n.command, s) : "number" == typeof s ? n.command.page = s : "string" != typeof s || isNaN(parseInt(s)) ? "string" == typeof s ? n.command.action = s : "boolean" == typeof s ? n.animate = s : "function" == typeof s && (n.callback = s) : n.command.page = parseInt(s));
                return i.freeze(n), n;
            },
            paginate: function() {
                var a = this, t = a.parsePaginateArgs(arguments);
                return a.multimix({
                    paginate: t.command
                }, t.animate, t.callback);
            },
            nextPage: function() {
                var a = this, t = a.parsePaginateArgs(arguments);
                return a.multimix({
                    paginate: {
                        action: "next"
                    }
                }, t.animate, t.callback);
            },
            prevPage: function() {
                var a = this, t = a.parsePaginateArgs(arguments);
                return a.multimix({
                    paginate: {
                        action: "prev"
                    }
                }, t.animate, t.callback);
            }
        }), a.Facade.registerAction("afterConstruct", "pagination", function(a) {
            this.paginate = a.paginate.bind(a), this.nextPage = a.nextPage.bind(a), this.prevPage = a.prevPage.bind(a);
        });
    };
    t.TYPE = "mixitup-extension", t.NAME = "mixitup-pagination", t.EXTENSION_VERSION = "3.3.0", t.REQUIRE_CORE_VERSION = "^3.1.8";
    module.exports = t;
}(window);

},{}],"76hQh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jvag4","01gaw"], "01gaw", "parcelRequiredb49")

//# sourceMappingURL=main.js.map
