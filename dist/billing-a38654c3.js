(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[5],{1642:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(3),a=s(0),i=s.n(a),o=s(1632),d=s(1505),u=s(549),l=s(1454),c=s(1426),g=s(1531),h=s(1458),m=s(1448),p=s(79),A=s(41),b=s(1633),f=s(1634),C=s(1641),_=s(544),v=s(542),y=s(231),S=s(1635),E=s(1447),k=s(1456),w=s(1457),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isResettingAddress:!1},t.addressFormRef=Object(a.createRef)(),t.handleSelectAddress=function(e){return n.__awaiter(t,void 0,void 0,(function(){var t,s,r,a;return n.__generator(this,(function(n){switch(n.label){case 0:t=this.props,s=t.updateAddress,r=t.onUnhandledError,this.setState({isResettingAddress:!0}),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,s(e)];case 2:return n.sent(),[3,5];case 3:return a=n.sent(),r(a),[3,5];case 4:return this.setState({isResettingAddress:!1}),[7];case 5:return[2]}}))}))},t.handleUseNewAddress=function(){t.handleSelectAddress({})},t}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.googleMapsApiKey,s=e.billingAddress,n=e.countriesWithAutocomplete,r=e.customer,a=r.addresses,o=r.isGuest,d=e.getFields,u=e.countries,l=e.isUpdating,g=e.setFieldValue,h=e.shouldShowOrderComments,p=e.hasSaveAddressFeature,A=e.values,_=this.state.isResettingAddress,v=a&&a.length>0,y=s&&Object(b.a)(s,a,d(s.countryCode));return i.a.createElement(k.a,{autoComplete:"on"},i.a.createElement(w.a,{id:"checkoutBillingAddress",ref:this.addressFormRef},v&&i.a.createElement(w.a,{id:"billingAddresses"},i.a.createElement(m.a,{isLoading:_},i.a.createElement(f.a,{addresses:a,onSelectAddress:this.handleSelectAddress,onUseNewAddress:this.handleUseNewAddress,selectedAddress:y?s:void 0}))),!y&&i.a.createElement(m.a,{isLoading:_},i.a.createElement(C.a,{countries:u,countriesWithAutocomplete:n,countryCode:A.countryCode,formFields:d(A.countryCode),googleMapsApiKey:t,setFieldValue:g,shouldShowSaveAddress:p&&!o}))),h&&i.a.createElement(S.a,null),i.a.createElement("div",{className:"form-actions"},i.a.createElement(E.c,{disabled:l||_,id:"checkout-billing-continue",isLoading:l||_,type:"submit",variant:E.b.Primary},i.a.createElement(c.a,{id:"common.continue_action"}))))},t}(a.PureComponent),O=Object(y.a)(Object(p.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,s=e.customerMessage,r=e.billingAddress;return n.__assign({},Object(_.a)(t(r&&r.countryCode),r),{orderComment:s})},isInitialValid:function(e){var t=e.billingAddress,s=e.getFields,n=e.language;return!!t&&Object(v.a)({language:n,formFields:s(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,s=e.getFields;return Object(A.lazy)((function(e){return Object(v.a)({language:t,formFields:s(e&&e.countryCode)})}))},enableReinitialize:!0})(F)),U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return n.__awaiter(t,void 0,void 0,(function(){var t,s,r,a,i,u,l,c,g,h,m=e.orderComment,p=n.__rest(e,["orderComment"]);return n.__generator(this,(function(e){switch(e.label){case 0:t=this.props,s=t.updateAddress,r=t.updateCheckout,a=t.customerMessage,i=t.billingAddress,u=t.navigateNextStep,l=t.onUnhandledError,c=[],(g=Object(o.a)(p))&&!Object(d.a)(g,i)&&c.push(s(g)),a!==m&&c.push(r({customerMessage:m})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(c)];case 2:return e.sent(),u(),[3,4];case 3:return h=e.sent(),l(h),[3,4];case 4:return[2]}}))}))},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){return n.__awaiter(this,void 0,Promise,(function(){var e,t,s,a,i,o;return n.__generator(this,(function(n){switch(n.label){case 0:e=this.props,t=e.initialize,s=e.onReady,a=void 0===s?r.noop:s,i=e.onUnhandledError,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t()];case 2:return n.sent(),a(),[3,4];case 3:return o=n.sent(),i(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,s=e.isInitializing,r=n.__rest(e,["updateAddress","isInitializing"]);return i.a.createElement("div",{className:"checkout-form"},i.a.createElement("div",{className:"form-legend-container"},i.a.createElement(h.a,{testId:"billing-address-heading"},i.a.createElement(c.a,{id:"billing.billing_address_heading"}))),i.a.createElement(m.a,{isLoading:s,unmountContentWhenLoading:!0},i.a.createElement(O,n.__assign({},r,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(a.Component);t.default=Object(u.a)((function(e){var t=e.checkoutService,s=e.checkoutState,n=s.data,r=n.getCheckout,a=n.getConfig,i=n.getCart,o=n.getCustomer,d=n.getBillingAddress,u=n.getBillingAddressFields,c=n.getBillingCountries,h=s.statuses,m=h.isLoadingBillingCountries,p=h.isUpdatingBillingAddress,A=h.isUpdatingCheckout,b=a(),f=o(),C=r(),_=i();if(!(b&&f&&C&&_))return null;var v=b.checkoutSettings,y=v.enableOrderComments,S=v.googleMapsApiKey,E=v.features,k=["US","CA","AU","NZ"];return E["CHECKOUT-4183.checkout_google_address_autocomplete_uk"]&&k.push("GB"),{billingAddress:d(),countries:c()||l.a,countriesWithAutocomplete:k,customer:f,customerMessage:C.customerMessage,getFields:u,googleMapsApiKey:S,initialize:t.loadBillingAddressFields,isInitializing:m(),isUpdating:p()||A(),hasSaveAddressFeature:E["CHECKOUT-4642.uco_save_address_checkbox"],shouldShowOrderComments:y&&Object(g.a)(_)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout}}))(U)}}]);
//# sourceMappingURL=billing-a38654c3.js.map