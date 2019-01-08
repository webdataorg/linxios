(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueLinkPreview = {})));
}(this, (function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //

  var script = {
    props: ["url"],
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
          state: this.$data, 
          actions: {
            setImageLoaded: this.setImageLoaded
          }
        }
      }
    },
    methods: {
      getURLData: function getURLData(url) {
        return fetch(("https://url-metadata.firebaseapp.com?url=" + url))
          .then(function (res) { return res.json(); });
      },
      setImageLoaded: function setImageLoaded() {
        this.imageLoaded = true;
      }
    },
    mounted: function mounted() {
      var this$1 = this;

      var start = new Date();
      this.loading = true;
      this.getURLData(this.url)
        .then(function (meta) {
          this$1.meta = meta;
          this$1.loading = false;
          var end = new Date();
          this$1.loadingTime = end - start;
          this$1.loaded = true;
        });
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

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
