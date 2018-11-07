webpackJsonp([0x84f7e2bc71a3],{1007:function(e,t){e.exports={description:"",displayName:"LanguageSwitcher",methods:[{name:"onUpdate",docblock:null,modifiers:[],params:[{name:"prevProps",type:null}],returns:null},{name:"onSelect",docblock:null,modifiers:[],params:[{name:"countryCode",type:null}],returns:null}],props:{showLabel:{type:{name:"bool"},required:!1,description:"Show or hide the label of selected language. Default `true`",defaultValue:{value:"false",computed:!1}},disabled:{type:{name:"bool"},required:!1,description:"Disable or enable the component. Default `false`",defaultValue:{value:"false",computed:!1}},showOptionLabel:{type:{name:"bool"},required:!1,description:"Show or hide labels in option list. Default `true`",defaultValue:{value:"true",computed:!1}},showFlag:{type:{name:"bool"},required:!1,description:"Show or hide flags. Default `true`",defaultValue:{value:"true",computed:!1}},showArrow:{type:{name:"bool"},required:!1,description:"Show or hide arrow expand. Default `true`",defaultValue:{value:"true",computed:!1}},selectedLanguage:{type:{name:"string"},required:!1,description:'Selected language. Default `""`',defaultValue:{value:"''",computed:!1}},placeholder:{type:{name:"string"},required:!1,description:'Placeholder to show when not selected language. Default `"Language"`',defaultValue:{value:"'Language'",computed:!1}},languages:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:'Array of languages to show, an array with countries codes. Default `"[]"`, see example section. The complete list of countries can be found https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js',defaultValue:{value:"[]",computed:!1}},customLabels:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:'Configure label of languages. Default `"{}"`',defaultValue:{value:"{}",computed:!1}},className:{type:{name:"string"},required:!1,description:'Class to apply. Default `""`',defaultValue:{value:"''",computed:!1}},onSelect:{type:{name:"func"},required:!1,description:"Called when language selection change. Params `{language}`",defaultValue:{value:"() => {}",computed:!1}}},filename:"/components/LanguageSwitcher/LanguageSwitcher.jsx"}},443:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),s=o(r),i=a(5),c=o(i),d=a(7),p=o(d),f=a(489),m=o(f),g=a(1007),h=o(g),b=function(e){function t(){return n(this,t),u(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement(c.default,{pagePushedFunction:this.handlepushedPageLayout},m.default&&s.default.createElement(p.default,{name:m.default.name,linkGithub:"https://github.com/front10/landing-page-book/tree/master/src/components/LanguageSwitcher",description:m.default.summary,stories:m.default.stories,importCode:m.default.import,propsDescription:h.default.props}))},t}(s.default.Component);t.default=b,e.exports=t.default},489:function(e,t){"use strict";t.__esModule=!0,t.default={name:"Language Switcher",summary:"Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website.",import:"",stories:[{name:"Basic",summary:"",code:"<LanguageSwitcher\n    showLabel placeholder=\"Select language...\"\n    languages={['US', 'FR', 'ES', 'DE']}\n    customLabels={{\n        US: 'English',\n        FR: 'Français',\n        ES: 'Español',\n        DE: 'Deutsch'\n    }}\n/>",tabsActive:["code"]}]},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-languageswitcher-js-3c95f7c3ad3799e6d82b.js.map