(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a83c342a"],{"0eb6":function(t,r,e){"use strict";var n=e("23e7"),a=e("7c37"),s=e("d066"),o=e("d039"),c=e("7c73"),i=e("5c6c"),u=e("9bf2").f,f=e("37e8").f,p=e("6eeb"),d=e("1a2d"),m=e("19aa"),_=e("825a"),E=e("aa1f"),l=e("e391"),v=e("cf98"),R=e("c770"),h=e("69f3"),g=e("83ab"),O=e("c430"),b="DOMException",I="DATA_CLONE_ERR",T=s("Error"),A=s(b)||function(){try{var t=s("MessageChannel")||a("worker_threads").MessageChannel;(new t).port1.postMessage(new WeakMap)}catch(r){if(r.name==I&&25==r.code)return r.constructor}}(),D=A&&A.prototype,N=T.prototype,C=h.set,y=h.getterFor(b),w="stack"in T(b),S=function(t){return d(v,t)&&v[t].m?v[t].c:0},k=function(){m(this,M);var t=arguments.length,r=l(t<1?void 0:arguments[0]),e=l(t<2?void 0:arguments[1],"Error"),n=S(e);if(C(this,{type:b,name:e,message:r,code:n}),g||(this.name=e,this.message=r,this.code=n),w){var a=T(r);a.name=b,u(this,"stack",i(1,R(a.stack,1)))}},M=k.prototype=c(N),x=function(t){return{enumerable:!0,configurable:!0,get:t}},j=function(t){return x((function(){return y(this)[t]}))};g&&f(M,{name:j("name"),message:j("message"),code:j("code")}),u(M,"constructor",i(1,k));var L=o((function(){return!(new A instanceof T)})),U=L||o((function(){return N.toString!==E||"2: 1"!==String(new A(1,2))})),H=L||o((function(){return 25!==new A(1,"DataCloneError").code})),V=L||25!==A[I]||25!==D[I],F=O?U||H||V:L;n({global:!0,forced:F},{DOMException:F?k:A});var P=s(b),W=P.prototype;for(var B in U&&(O||A===P)&&p(W,"toString",E),H&&g&&A===P&&u(W,"code",x((function(){return S(_(this).name)}))),v)if(d(v,B)){var Y=v[B],$=Y.s,q=i(6,Y.c);d(P,$)||u(P,$,q),d(W,$)||u(W,$,q)}},2506:function(t,r,e){"use strict";e.d(r,"b",(function(){return a})),e.d(r,"f",(function(){return s})),e.d(r,"g",(function(){return o})),e.d(r,"j",(function(){return c})),e.d(r,"c",(function(){return i})),e.d(r,"d",(function(){return u})),e.d(r,"a",(function(){return f})),e.d(r,"e",(function(){return p})),e.d(r,"k",(function(){return d}));e("99af");var n=e("b775");function a(t){return Object(n["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function s(t){return Object(n["a"])({url:"/user/process/instance/getById/".concat(t)})}function o(t){return Object(n["a"])({url:"/approvals/flows/".concat(t)})}function c(t){return Object(n["a"])({url:"/approvals/setting",method:"put",data:t})}function i(t){return Object(n["a"])({url:"/user/process/instance/".concat(t)})}function u(t){return Object(n["a"])({url:"/user/process/instance/tasks/".concat(t)})}function f(t){return Object(n["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function p(t){return Object(n["a"])({url:"/user/process/definition",params:t})}function d(t){return Object(n["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}},"616f":function(t,r,e){t.exports=e.p+"static/img/img.0615818f.jpeg"},7538:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"quitApproval"},[n("div",{staticClass:"contLeft"},[n("h2",[t._v(t._s(t.information.user_name)+"申请请假")]),n("div",{staticClass:"topTit"},[n("img",{attrs:{src:e("616f"),alt:""}}),n("div",{staticClass:"info"},[n("p",{staticClass:"name"},[n("strong",[t._v(t._s(t.information.username))])]),n("p",[n("span",[t._v("部门："+t._s(t.information.departmentName))])]),n("p",[n("span",[t._v("入职时间： "+t._s(t._f("formatDate")(t.information.timeOfEntry)))])])])]),n("div",{staticClass:"content"},[t._m(0),n("p",[n("span",[t._v("请假类型：")]),t._v(" "+t._s(1==t.information.data.holidayType?"事假":"调休")+" ")]),t._m(1),n("p",[n("span",[t._v("开始时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.startTime))+" ")]),n("p",[n("span",[t._v("结束时间：")]),t._v(" "+t._s(t._f("formatDate")(t.information.data.endTime))+" ")]),n("p",[n("span",[t._v("请假时长：")]),t._v(" "+t._s(t.information.data.duration)+" ")]),n("p",[n("span",[t._v("申请事由：")]),t._v(" "+t._s(t.information.data.reason)+" ")])])]),n("div",{staticClass:"contRit"},[t._m(2),n("div",{staticClass:"Items"},t._l(t.taskInstanceOutList,(function(r,e){return n("li",{key:e},[n("div",{staticClass:"name",style:e==t.taskInstanceOutList.length-1?"border-right:none":""},[n("p",[t._v(t._s(t._f("formatDate")(r.handleTime)))])]),n("div",{staticClass:"act"},[n("strong",[t._v(t._s(r.handleUserName))]),0==e?n("span",[t._v("发起申请")]):"3"==r.handleType?n("span",[t._v("审批驳回")]):"4"==r.handleType?n("span",[t._v("已撤销")]):"1"==r.handleType?n("span",[t._v("未开始")]):"2"==r.handleType?n("span",[t._v("审批通过")]):n("span",[t._v("审批中")])])])})),0)])])},a=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("span",[t._v("申请类型：")]),t._v("请假 ")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("p",[e("span",[t._v("申请单位：")]),t._v(" 天 ")])},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"topTit"},[e("strong",[t._v("审批记录")])])}],s=e("1da1"),o=(e("0eb6"),e("b7ef"),e("8bd4"),e("d3b7"),e("ace4"),e("5cc6"),e("907a"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7"),e("96cf"),e("2506")),c={name:"UsersTableIndex",components:{},data:function(){return{approvalId:this.$route.params.id,information:{data:{}},taskInstanceOutList:[],imgs:""}},created:function(){this.getApprovalsDetail(),this.getApprovalsTaskDetail()},methods:{getApprovalsDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["c"])(t.approvalId);case 2:t.information=r.sent,t.information.data=JSON.parse(t.information.procData);case 4:case"end":return r.stop()}}),r)})))()},getApprovalsTaskDetail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(o["d"])(t.approvalId);case 2:t.taskInstanceOutList=r.sent;case 3:case"end":return r.stop()}}),r)})))()},getReviewHistory:function(t){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["a"])(t);case 2:n=e.sent,r.imgs="data:image/png;base64,"+btoa(new Uint8Array(n.request.response).reduce((function(t,r){return t+String.fromCharCode(r)}),""));case 4:case"end":return e.stop()}}),e)})))()}}},i=c,u=e("2877"),f=Object(u["a"])(i,n,a,!1,null,null,null);r["default"]=f.exports},"7c37":function(t,r,e){var n=e("605d");t.exports=function(t){try{if(n)return Function('return require("'+t+'")')()}catch(r){}}},"8bd4":function(t,r,e){var n=e("d066"),a=e("d44e"),s="DOMException";a(n(s),s)},aa1f:function(t,r,e){"use strict";var n=e("83ab"),a=e("d039"),s=e("825a"),o=e("7c73"),c=e("e391"),i=Error.prototype.toString,u=a((function(){if(n){var t=o(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==i.call(t))return!0}return"2: 1"!==i.call({message:1,name:2})||"Error"!==i.call({})}));t.exports=u?function(){var t=s(this),r=c(t.name,"Error"),e=c(t.message);return r?e?r+": "+e:r:e}:i},b7ef:function(t,r,e){"use strict";var n=e("23e7"),a=e("d066"),s=e("5c6c"),o=e("9bf2").f,c=e("1a2d"),i=e("19aa"),u=e("7156"),f=e("e391"),p=e("cf98"),d=e("c770"),m=e("c430"),_="DOMException",E=a("Error"),l=a(_),v=function(){i(this,R);var t=arguments.length,r=f(t<1?void 0:arguments[0]),e=f(t<2?void 0:arguments[1],"Error"),n=new l(r,e),a=E(r);return a.name=_,o(n,"stack",s(1,d(a.stack,1))),u(n,this,v),n},R=v.prototype=l.prototype,h="stack"in E(_),g="stack"in new l(1,2),O=h&&!g;n({global:!0,forced:m||O},{DOMException:O?v:l});var b=a(_),I=b.prototype;if(I.constructor!==b)for(var T in m||o(I,"constructor",s(1,b)),p)if(c(p,T)){var A=p[T],D=A.s;c(b,D)||o(b,D,s(6,A.c))}},cf98:function(t,r){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}}}]);