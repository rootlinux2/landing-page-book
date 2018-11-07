webpackJsonp([75329095616634],{1001:function(e,t){e.exports={description:"",displayName:"Hero",methods:[{name:"onButtonClick",docblock:null,modifiers:["static"],params:[{name:"button",type:null}],returns:null},{name:"getCustomCssFilterForImg",docblock:null,modifiers:["static"],params:[{name:"props",type:null},{name:"state",type:null}],returns:null},{name:"getParticlesParams",docblock:null,modifiers:["static"],params:[{name:"particles",type:null},{name:"particlesSugar",type:null},{name:"particlesParams",type:null}],returns:null}],props:{isFixed:{type:{name:"bool"},required:!1,description:"Define if background image is fixed. Default `true`",defaultValue:{value:"true",computed:!1}},isCentered:{type:{name:"bool"},required:!1,description:"Define if content is centered. Default `true`",defaultValue:{value:"true",computed:!1}},particles:{type:{name:"bool"},required:!1,description:"Define if component show particles animations. Default `true`",defaultValue:{value:"true",computed:!1}},opacity:{type:{name:"number"},required:!1,description:"Opacity level. Default `0`",defaultValue:{value:"0",computed:!1}},parallaxOffset:{type:{name:"number"},required:!1,description:"Offset of background image. Default `0`",defaultValue:{value:"0",computed:!1}},image:{type:{name:"string"},required:!1,description:'Url of background image. Default `""`',defaultValue:{value:"''",computed:!1}},overlayColor:{type:{name:"string"},required:!1,description:"Overlay color of the component . Default `#fff`",defaultValue:{value:"'#fff'",computed:!1}},header:{type:{name:"string"},required:!1,description:'Header of the hero . Default `""`',defaultValue:{value:"''",computed:!1}},subHeader:{type:{name:"string"},required:!1,description:'Sub header of the hero . Default `""`',defaultValue:{value:"''",computed:!1}},subHeaderPosition:{type:{name:"string"},required:!1,description:'Position of hero sub header. Default `"bottom"`, can be `"top"`',defaultValue:{value:"'bottom'",computed:!1}},minHeight:{type:{name:"string"},required:!1,description:'Min height of hero. Default `"100vh"`',defaultValue:{value:"'100vh'",computed:!1}},backgroundColor:{type:{name:"string"},required:!1,description:'Background color of the hero. Default `"transparent"`',defaultValue:{value:"'transparent'",computed:!1}},headerMarginBottom:{type:{name:"string"},required:!1,description:'Margin bottom of hero header. Default `"5"`',defaultValue:{value:"'5'",computed:!1}},headerTextColor:{type:{name:"string"},required:!1,description:'Color of hero header. Default `"light"`',defaultValue:{value:"'light'",computed:!1}},subHeaderMarginBottom:{type:{name:"string"},required:!1,description:'Margin bottom of hero subheader. Default `"5"`',defaultValue:{value:"'5'",computed:!1}},subHeaderTextColor:{type:{name:"string"},required:!1,description:'Color of hero subheader. Default `"light"`',defaultValue:{value:"'light'",computed:!1}},callToAction:{type:{name:"string"},required:!1,description:'Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}`',defaultValue:{value:"null",computed:!1}},particlesParams:{type:{name:"objectOf",value:{name:"any"}},required:!1,description:"Config params for particles animation.",defaultValue:{value:"null",computed:!1}},children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"Elements to show inside of Hero.",defaultValue:{value:"null",computed:!1}},style:{type:{name:"string"},required:!1,description:"Customs styles to tramsform your Hero",defaultValue:{value:"null",computed:!1}},imgFilter:{type:{name:"string"},required:!1,description:"The filter property defines visual effects (like blur and saturation) to an element (often <img>).",defaultValue:{value:"null",computed:!1}},particlesSugar:{type:{name:"string"},required:!1,description:"Preconfigured params for particles, you can find this on particlesSugarMapping.js file.",defaultValue:{value:"null",computed:!1}},callToActionOnClick:{type:{name:"func"},required:!1,description:"",defaultValue:{value:"() => {}",computed:!1}},callToActionColor:{type:{name:"string"},required:!1,description:"",defaultValue:{value:"''",computed:!1}},callToActionOutline:{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"true",computed:!1}},secondaryCallToActionOnClick:{type:{name:"func"},required:!1,description:"",defaultValue:{value:"() => {}",computed:!1}},secondaryCallToActionColor:{type:{name:"string"},required:!1,description:"",defaultValue:{value:"''",computed:!1}},secondaryCallToActionOutline:{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"true",computed:!1}}},filename:"/components/Hero/Hero.jsx"}},436:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),u=n(l),s=a(5),d=n(s),c=a(7),p=n(c),m=a(482),f=n(m),g=a(1001),h=n(g),y=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement(d.default,{pagePushedFunction:this.handlepushedPageLayout},f.default&&u.default.createElement(p.default,{name:f.default.name,linkGithub:"https://github.com/front10/landing-page-book/tree/master/src/components/Hero",description:f.default.summary,stories:f.default.stories,importCode:f.default.import,propsDescription:h.default.props}))},t}(u.default.Component);t.default=y,e.exports=t.default},482:function(e,t){"use strict";t.__esModule=!0,t.default={name:"Hero",summary:"The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content.",import:"",stories:[{name:"Basic",summary:"",code:'<Hero\n    opacity={1}\n    overlayColor="#373D45"\n    header="Landing Page Book"\n    subHeader="React components to build!"\n    particlesSugar="crazyStars"\n    minHeight="75vh"\n    headerTextColor="warning"\n    subHeaderTextColor="warning"\n    callToActionColor="warning"\n    secondaryCallToActionColor="warning"\n    secondaryCallToActionMarginLeft="2"\n    callToAction="Call to action"\n    secondaryCallToAction="Secondary call to action"\n/>',tabsActive:["code"]},{name:"Via children",summary:"",code:'<Hero opacity={1} overlayColor="#373D45" particlesSugar="crazyStars" minHeight="75vh">\n    <Container>\n        <Image src="/images/logo/front10.png" rounded width="160" alt="Front10 logo" className="main-logo"/>\n        <Header textAlign="center" className="text-warning">Landing Page Book</Header>\n        <Header  textAlign="center" type="h5" className="text-warning">React components to build!</Header>\n        <div className="mt-5">\n            <Button color="warning" className="mr-1">Explore</Button>\n            <GithubButton btnType="star" btnText="Stars" username="front10" repository="landing-page-book"/>\n        </div>\n    </Container>\n</Hero>',tabsActive:[]},{name:"With image",summary:"",code:'<Hero\n    image="/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>\n        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',tabsActive:[]},{name:"With image (blurred)",summary:"",code:'<Hero\n    image="/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    imgFilter="blur(2px)"\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>\n        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',tabsActive:[]},{name:"With image (gray)",summary:"",code:'<Hero\n    image="/images/hero/alone-architecture-buildings-220444.jpg"\n    particles={false}\n    imgFilter="grayscale(90%)"\n    minHeight="50vh"\n>\n    <Container>\n        <Header type="h6" className="text-white text-left">LANDING PAGE BOOK</Header>\n        <Header className="text-white text-left mt-4 mb-4">React UI Kit to easily build landing pages.</Header>\n        <div className="text-left">\n            <Link href="https://front10.com" target="_blank" border textColor="light" padding="2">\n                READ MORE\n            </Link>\n        </div>\n    </Container>\n</Hero>',tabsActive:[]}]},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-components-hero-js-37e1c9c02e172f641ef9.js.map