window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme17"]=window.wsb["Theme17"]||window.radpack("@widget/LAYOUT/bs-layout17-Theme-publish-Theme").then(function(t){return new t.default();});
window.onMembershipLogout=function(){window.location.assign("/m/logout")},window.initMembership=function(e,i){var n={membershipSignOut:e+"-membership-sign-out",container:e+(i?"-navId-mobile":"-utility-menu"),signedOut:i?".membership-links-logged-out":".membership-icon-logged-out",signedIn:i?".membership-links-logged-in":" .membership-icon-logged-in",signedInHeaderBlock:".membership-header-logged-in"},o=document.getElementById(n.container),t=document.getElementById(n.membershipSignOut);if(!o||!t)return setTimeout(()=>window.initMembership(e,i),500);t.onclick=window.onMembershipLogout;for(var s=o.querySelector(n.signedOut),l=o.querySelector(n.signedIn),r=i&&o.querySelector(n.signedInHeaderBlock),d=void 0,m=document.cookie.split(";"),a=0;a<m.length;a++){for(var g=m[a];" "===g.charAt(0);)g=g.substring(1,g.length);if(0===g.indexOf("info_c2=")){var c=g.substring("info_c2=".length,g.length);d=c&&JSON.parse(decodeURIComponent(c))}}var p=d&&d.contactEmail;if(d){s.style.display="none",l.style.display="block";var u=o.querySelector("#"+e+"-membership-header");if(i){var h=d&&d.nameFirst,y=d&&d.nameLast;r.style.display="block",h&&y&&(u.textContent=[h,y].join(" "))}var b=o.querySelector("#"+e+"-membership-email");b&&(b.textContent=p,b.style["text-overflow"]="ellipsis",b.style.overflow="hidden",b.style["white-space"]="nowrap",u.style["font-weight"]="bold")}else i&&(r.style.display="none"),l.style.display="none",s.style.display="block"};
window.wsb["DynamicFontScaler"]=function(e){let t,{containerId:o,targetId:n,fontSizes:r,maxLines:a,prioritizeDefault:s}=e;if("undefined"==typeof document)return;const i=document.getElementById(o),c=document.getElementById(n);function l(e){return function(e){const t=parseInt(d(e,"padding-left")||0,10),o=parseInt(d(e,"padding-right")||0,10);return e.scrollWidth+t+o}(e)<=i.clientWidth&&function(e){const t=e.offsetHeight,o=parseInt(d(e,"line-height"),10)||1;return Math.floor(t/o)}(e)<=a}function p(){if(!i||!c||t===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void function(){c.removeAttribute("data-last-size");const e=document.querySelector(`#${n}-style`);e&&e.parentNode.removeChild(e)}();t=window.innerWidth;const e=Array.prototype.slice.call(i.querySelectorAll(`[data-scaler-id="scaler-${o}"]`)).sort(((e,t)=>r.indexOf(e.getAttribute("data-size"))-r.indexOf(t.getAttribute("data-size"))));if(i.clientWidth&&e.length){const t=i.style.width||"";i.style.width="100%",e.forEach((e=>{e.style.display="inline-block",e.style.maxWidth=`${i.clientWidth}px`}));const o=function(e){return e.find(l)||e[e.length-1]}(e);!function(e){e.forEach((e=>{e.style.display="none",e.style.maxWidth=""}))}(e),i.style.width=t;const r=d(o,"font-size"),a=c.getAttribute("data-last-size");if(r&&r!==a){if(s){const e=d(c,"font-size");if(parseInt(r,10)>=parseInt(e,10))return}c.setAttribute("data-last-size",r);let e=document.querySelector(`#${n}-style`);e||(e=document.createElement("style"),e.id=`${n}-style`,document.head.appendChild(e)),e.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function d(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}p(),window.addEventListener("resize",p)};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-118616\",\"targetId\":\"logo-text-118617\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"cabin\",\"default\",\"\"],\"colors\":[\"#634839\"],\"locale\":\"en-GB\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"f4f8b63d-d36d-4971-94b0-926842836128\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"routePath\":\"/\"},\"2e03aaa7-10ff-4f40-9845-a0ee4078f865\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":\"24313c03-59fb-4263-942a-207400413d88\",\"routePath\":\"/\"},\"82e132df-db93-4b69-a6de-388d6d1d495f\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":\"24313c03-59fb-4263-942a-207400413d88\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"fd40944a-250c-4ee6-a7a3-2637e947b03b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"fd40944a-250c-4ee6-a7a3-2637e947b03b\",\"href\":\"/m/login\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"LOGIN\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"93171df0-deeb-41f2-823e-e7b88a0394a8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"93171df0-deeb-41f2-823e-e7b88a0394a8\",\"href\":\"/m/create\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"60e47323-77da-4ab1-bb82-547aa8cf25b4\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"name\":\"Contact Me\",\"href\":\"/contact-me\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"46bc840d-377f-4b47-b1f4-6700a005b7c0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"46bc840d-377f-4b47-b1f4-6700a005b7c0\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1c92c275-7894-4cde-aaab-57f022f4d171\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1c92c275-7894-4cde-aaab-57f022f4d171\",\"href\":\"/m/no-access\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"NO_ACCESS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"985221b5-10f1-4614-a0bc-5521b0fc05d1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"985221b5-10f1-4614-a0bc-5521b0fc05d1\",\"name\":\"Profile\",\"href\":\"/profile\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f219d92a-5108-4b95-9f00-b3f87a6a5d98\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f219d92a-5108-4b95-9f00-b3f87a6a5d98\",\"name\":\"Projects\",\"href\":\"/projects\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"96dd0617-f6f7-4a73-97e5-a701debbfccd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"96dd0617-f6f7-4a73-97e5-a701debbfccd\",\"href\":\"/m/account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[\"SHOW_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2fdac619-a180-4ff8-94a3-e874bcaddad5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2fdac619-a180-4ff8-94a3-e874bcaddad5\",\"href\":\"/m/reset\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"RESET_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f2d86abf-be27-44a0-ae8d-7f9d632b048e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f2d86abf-be27-44a0-ae8d-7f9d632b048e\",\"href\":\"/m/create-account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"490bc474-ee76-4151-9921-d4960cabaaca\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"490bc474-ee76-4151-9921-d4960cabaaca\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#634839\",\"meta\":{\"primary\":\"rgb(99, 72, 57)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"cabin\",\"description\":\"Clean and modern fonts that extremely versatile.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":5,\"primary\":{\"id\":\"cabin\",\"name\":\"Cabin\",\"url\":\"//fonts.googleapis.com/css?family=Cabin:700&display=swap\",\"family\":\"'Cabin', arial, sans-serif\",\"size\":16,\"weight\":700,\"weights\":[700],\"styles\":{\"letterSpacing\":\"1px\"}},\"alternate\":{\"id\":\"lato\",\"name\":\"Lato\",\"url\":\"//fonts.googleapis.com/css?family=Lato:100,300,400,400i,700,700i,900&display=swap\",\"family\":\"Lato, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Cabin, Hiragino Kaku Gothic Pro, '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro', Hiragino Kaku Gothic ProN, '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\uB3CB\uC6C0', Dotum, '\uB3CB\uC6C0\uCCB4', DotumChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Cabin, JasmineUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\u534E\u6587\u5B8B\u4F53', STSong, serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\u5137\u5B8B Pro', LiSong Pro, serif\"}}}]}}},\"theme\":\"Theme17\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-118611-navId-mobile\",\"uniqueId\":\"n-118611\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-118624\",\"targetId\":\"logo-text-118625\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-WrappedAbsLink-Component',props:JSON.parse("{\"tag\":\"a\",\"href\":\"/projects\",\"target\":\"\",\"rel\":\"\",\"data-page\":\"f219d92a-5108-4b95-9f00-b3f87a6a5d98\",\"data-edit-interactive\":true,\"children\":\"Projects\",\"style\":{\"marginHorizontal\":\"-6px\",\"marginVertical\":\"-6px\",\"paddingHorizontal\":\"6px\",\"paddingVertical\":\"6px\"},\"domainName\":\"olumideportfoliowebsites.godaddysites.com\",\"pageRoute\":\"/privacy-policy\",\"isActive\":false,\"role\":\"link\",\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-WrappedAbsLink-Component"},false);
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-118627\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-118622\",\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-118626\",\"logoImageId\":\"logo-118621\",\"containerId\":\"navBarId-118622\"}"));
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"n-118611118638-membershipId-loggedout\",\"renderCustomIcon\":{\"name\":\"account\",\"size\":28,\"minTarget\":true},\"overrideIconStyle\":{},\"dataAid\":\"MEMBERSHIP_ICON_DESKTOP_RENDERED\",\"hasHover\":true,\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/LAYOUT/bs-FlyoutMenu-Component',props:JSON.parse("{\"toggleId\":\"n-118611118638-membershipId\",\"renderCustomIcon\":{\"name\":\"account\",\"size\":28,\"minTarget\":true},\"overrideIconStyle\":{},\"dataAid\":\"MEMBERSHIP_ICON_DESKTOP_RENDERED\",\"hasHover\":true,\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"fbdec8e3-e483-4850-9e5e-d0c2f6f0ccd6\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"UtilitiesMenu\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-FlyoutMenu-Component"},false);
!function(){window.initMembership('n-118611118638',false);}();
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u,stickyNavParent:h}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&h&&!h.style.height&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav118613\",\"anchorId\":\"header_stickynav-anchor118614\",\"logoHeight\":80,\"hasAnimation\":true}"));
!function(){window.initMembership('n-118611',true);}();
window.wsb['context-bs-6']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"cabin\",\"default\",\"\"],\"colors\":[\"#634839\"],\"fontScale\":\"medium\",\"locale\":\"en-GB\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"f4f8b63d-d36d-4971-94b0-926842836128\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"routePath\":\"/\"},\"2e03aaa7-10ff-4f40-9845-a0ee4078f865\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":\"24313c03-59fb-4263-942a-207400413d88\",\"routePath\":\"/\"},\"82e132df-db93-4b69-a6de-388d6d1d495f\":{\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"widgetId\":\"24313c03-59fb-4263-942a-207400413d88\",\"routePath\":\"/\"}},\"isInternalPage\":true,\"navigationMap\":{\"fd40944a-250c-4ee6-a7a3-2637e947b03b\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"fd40944a-250c-4ee6-a7a3-2637e947b03b\",\"href\":\"/m/login\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"LOGIN\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"93171df0-deeb-41f2-823e-e7b88a0394a8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"93171df0-deeb-41f2-823e-e7b88a0394a8\",\"href\":\"/m/create\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"60e47323-77da-4ab1-bb82-547aa8cf25b4\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"60e47323-77da-4ab1-bb82-547aa8cf25b4\",\"name\":\"Contact Me\",\"href\":\"/contact-me\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2dbc3c68-54c1-4511-8f4b-14af5ec7c5f0\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"46bc840d-377f-4b47-b1f4-6700a005b7c0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"46bc840d-377f-4b47-b1f4-6700a005b7c0\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1c92c275-7894-4cde-aaab-57f022f4d171\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1c92c275-7894-4cde-aaab-57f022f4d171\",\"href\":\"/m/no-access\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"NO_ACCESS\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"985221b5-10f1-4614-a0bc-5521b0fc05d1\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"985221b5-10f1-4614-a0bc-5521b0fc05d1\",\"name\":\"Profile\",\"href\":\"/profile\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f219d92a-5108-4b95-9f00-b3f87a6a5d98\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f219d92a-5108-4b95-9f00-b3f87a6a5d98\",\"name\":\"Projects\",\"href\":\"/projects\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true},\"96dd0617-f6f7-4a73-97e5-a701debbfccd\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"96dd0617-f6f7-4a73-97e5-a701debbfccd\",\"href\":\"/m/account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":true,\"tags\":[\"SHOW_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"2fdac619-a180-4ff8-94a3-e874bcaddad5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"2fdac619-a180-4ff8-94a3-e874bcaddad5\",\"href\":\"/m/reset\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"RESET_PASSWORD\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"f2d86abf-be27-44a0-ae8d-7f9d632b048e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f2d86abf-be27-44a0-ae8d-7f9d632b048e\",\"href\":\"/m/create-account\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[\"CREATE_ACCOUNT\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"490bc474-ee76-4151-9921-d4960cabaaca\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"490bc474-ee76-4151-9921-d4960cabaaca\",\"name\":\"Privacy Policy\",\"href\":\"/privacy-policy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":true}},\"dials\":{\"colors\":[{\"id\":\"#634839\",\"meta\":{\"primary\":\"rgb(99, 72, 57)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"cabin\",\"description\":\"Clean and modern fonts that extremely versatile.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":5,\"primary\":{\"id\":\"cabin\",\"name\":\"Cabin\",\"url\":\"//fonts.googleapis.com/css?family=Cabin:700&display=swap\",\"family\":\"'Cabin', arial, sans-serif\",\"size\":16,\"weight\":700,\"weights\":[700],\"styles\":{\"letterSpacing\":\"1px\"}},\"alternate\":{\"id\":\"lato\",\"name\":\"Lato\",\"url\":\"//fonts.googleapis.com/css?family=Lato:100,300,400,400i,700,700i,900&display=swap\",\"family\":\"Lato, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[100,300,400,700,900],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"primary\":{\"family\":\"Cabin, Hiragino Kaku Gothic Pro, '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro', Hiragino Kaku Gothic ProN, '\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\uB3CB\uC6C0', Dotum, '\uB3CB\uC6C0\uCCB4', DotumChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"primary\":{\"family\":\"Cabin, JasmineUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\u534E\u6587\u5B8B\u4F53', STSong, serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"primary\":{\"family\":\"Cabin, '\u5137\u5B8B Pro', LiSong Pro, serif\"}}}]}}},\"theme\":\"Theme17\"}");
Core.utils.renderBootstrap({elId:'bs-6',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{websiteId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"upgradeable\":false,\"preset\":\"messaging1\",\"order\":0,\"id\":\"2aa0260a-15bf-4b92-acb1-a141443fa109\",\"isMobile\":null,\"websiteId\":\"b845d49f-319e-44e5-b10e-7b4b62faafc6\",\"accountId\":\"7819b91b-c81a-11ed-82c5-3417ebe725c2\",\"isReseller\":false,\"domainName\":\"olumideportfoliowebsites.godaddysites.com\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"businessName\":\"Olumide Portfolio websites\",\"reamazeBrandId\":null,\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"cookieBannerEnabled\":true,\"notificationPreference\":\"EMAIL\",\"formEmail\":\"oluminepeter222@gmail.com\",\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInEnabled\":false,\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"reamazePosition\":\"bottom-right\",\"reamazeThemeColor\":\"#634839\",\"reamazePromptEnabled\":true,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"reamazeDismissCarousel\":false,\"widgetId\":\"2aa0260a-15bf-4b92-acb1-a141443fa109\",\"section\":\"alt\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"2aa0260a-15bf-4b92-acb1-a141443fa109\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"alt\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-6',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"5223e1ea-5dad-42e6-a50c-436e3edb0b85\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-118610').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"SHOP_FEATURED_CATEGORY","wam_site_homepageFirstWidgetPreset":"featuredCategory1","wam_site_businessCategory":"personal_portfolio","wam_site_theme":"layout17","wam_site_locale":"en-GB","wam_site_fontPack":"cabin","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"business","wam_site_isHomepage":false,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);