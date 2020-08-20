(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(157)),c={id:"errors",title:"Error Handling"},i={id:"errors",isDocsHomePage:!1,title:"Error Handling",description:"You can handle validation and API errors like so:",source:"@site/docs/errors.md",permalink:"/checkout-sdk-java/errors",sidebar:"someSidebar",previous:{title:"Environment",permalink:"/checkout-sdk-java/environment"},next:{title:"Payments",permalink:"/checkout-sdk-java/payments"}},s=[{value:"SDK errors",id:"sdk-errors",children:[]},{value:"How errors are determined",id:"how-errors-are-determined",children:[]}],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can handle validation and API errors like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'CheckoutApi api = CheckoutApiImpl.create("sk_XXXX", true, "pk_XXXX");\n\ntry {\n    // some async request made with the SDK\n    PaymentResponse response = api.paymentsClient().requestAsync(...).get();\n    ...\n} catch (CheckoutValidationException e) {\n    return validationError(e.getError());\n} catch (CheckoutApiException e) {\n    LOG.severe("Request failed with status code " + e.getHttpStatusCode());\n    throw e;\n}\n')),Object(o.b)("h2",{id:"sdk-errors"},"SDK errors"),Object(o.b)("p",null,"The errors follow the Checkout.com ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://api-reference.checkout.com/"}),"API Reference"),".\nThe errors will be formatted like this:"),Object(o.b)("h4",{id:"validation-error"},"Validation error"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ssh"}),"A validation error of type {error type} occurred with error codes {error codes}.\n")),Object(o.b)("h4",{id:"api-error"},"API error"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ssh"}),"The API response status code {HTTP status code} does not indicate success...\n")),Object(o.b)("h2",{id:"how-errors-are-determined"},"How errors are determined"),Object(o.b)("p",null,"The errors above are triggered by status codes that do not fall in the 20* status codes. This means that statuses such as 202 or 204 will not throw an exception."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It's important to understand that Declines, or 3D Secure responses do not throw an exception, since the status code associated with them are in the 20* range. In the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/checkout-sdk-java/payments"}),"Payments")," section you will see some examples of best practices when it comes to handling responses."))))}l.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);