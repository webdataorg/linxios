(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueLinkPreview = {})));
}(this, (function (exports) { 'use strict';

  function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a);}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d);}function d(e){c(e,1);}c();})}

  //
  //
  //
  //
  //
  //

  var script = {
    props: {
      url: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {
        meta: null,
        loading: false,
        loaded: false,
        loadingTime: null,
        imageLoaded: false
      }
    },
    computed: {
      slotProps: function slotProps() {
        return { 
          state: Object.assign({},this.$data,{ imageLoading: this.imageLoading }), 
          actions: {
            setImageLoaded: this.setImageLoaded
          }
        }
      },
      imageLoading: function imageLoading() {
        return !this.imageLoaded;
      }
    },
    methods: {
      getURLData: function getURLData(url) {return __async(function*(){
        var res = yield fetch(("https://webdataapi.co.za/api?url=" + url));
        return res.json();
      }())},
      setImageLoaded: function setImageLoaded() {
        this.imageLoaded = true;
      },
      setLoadingInfo: function setLoadingInfo() {
        this.loading = false;
        this.loaded = true;
      }
    },
    mounted: function mounted() {return __async(function*(){
      this.loading = true;
      this.meta = yield this.getURLData(this.url);
      this.setLoadingInfo();
    }.call(this))},
    watch: {
      loading: {
        handler: function handler(n) {
          this.$emit("loading",n);
        }
      },
      loaded: {
        handler: function handler(n) {
          this.$emit("loaded",n);
        }
      },
      imageLoaded: {
        handler: function handler(n) {
          this.$emit("image-loaded",n);
        }
      }
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default",null,null,_vm.slotProps)],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "linxios-vue.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var component = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('Linxios', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // To auto-install when vue is found
  /* global window global */
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
  var Linxios = component;

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.default = plugin;
  exports.Linxios = Linxios;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
