(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6844d226"],{"0aac":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n("b775");function i(e){return Object(r["a"])({url:"/sys/permission",params:e})}function a(e){return Object(r["a"])({url:"/sys/permission",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/sys/permission/".concat(e.id),method:"put",data:e})}function s(e){return Object(r["a"])({url:"/sys/permission/".concat(e),method:"delete"})}function c(e){return Object(r["a"])({url:"/sys/permission/".concat(e)})}},"0ccb":function(e,t,n){var r=n("e330"),i=n("50c4"),a=n("577e"),o=n("1148"),s=n("1d80"),c=r(o),l=r("".slice),u=Math.ceil,f=function(e){return function(t,n,r){var o,f,d=a(s(t)),p=i(n),m=d.length,b=void 0===r?" ":a(r);return p<=m||""==b?d:(o=p-m,f=c(b,u(o/b.length)),f.length>o&&(f=l(f,0,o)),e?d+f:f+d)}};e.exports={start:f(!1),end:f(!0)}},1276:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),a=n("e330"),o=n("d784"),s=n("44e7"),c=n("825a"),l=n("1d80"),u=n("4840"),f=n("8aa5"),d=n("50c4"),p=n("577e"),m=n("dc4a"),b=n("4dae"),g=n("14c3"),h=n("9263"),v=n("9f7f"),y=n("d039"),w=v.UNSUPPORTED_Y,x=4294967295,k=Math.min,O=[].push,j=a(/./.exec),R=a(O),$=a("".slice),D=!y((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var a=p(l(this)),o=void 0===n?x:n>>>0;if(0===o)return[];if(void 0===e)return[a];if(!s(e))return i(t,a,e,o);var c,u,f,d=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=new RegExp(e.source,m+"g");while(c=i(h,v,a)){if(u=v.lastIndex,u>g&&(R(d,$(a,g,c.index)),c.length>1&&c.index<a.length&&r(O,d,b(c,1)),f=c[0].length,g=u,d.length>=o))break;v.lastIndex===c.index&&v.lastIndex++}return g===a.length?!f&&j(v,"")||R(d,""):R(d,$(a,g)),d.length>o?b(d,0,o):d}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:i(t,this,e,n)}:t,[function(t,n){var r=l(this),o=void 0==t?void 0:m(t,e);return o?i(o,t,r,n):i(a,p(r),t,n)},function(e,r){var i=c(this),o=p(e),s=n(a,i,o,r,a!==t);if(s.done)return s.value;var l=u(i,RegExp),m=i.unicode,b=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),h=new l(w?"^(?:"+i.source+")":i,b),v=void 0===r?x:r>>>0;if(0===v)return[];if(0===o.length)return null===g(h,o)?[o]:[];var y=0,O=0,j=[];while(O<o.length){h.lastIndex=w?0:O;var D,P=g(h,w?$(o,O):o);if(null===P||(D=k(d(h.lastIndex+(w?O:0)),o.length))===y)O=f(o,O,m);else{if(R(j,$(o,y,O)),j.length===v)return j;for(var S=1;S<=P.length-1;S++)if(R(j,P[S]),j.length===v)return j;O=y=D}}return R(j,$(o,y)),j}]}),!D,w)},"34b7":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n("b775");function i(e){return Object(r["a"])({method:"GET",url:"/company/"+e})}function a(e){return Object(r["a"])({method:"GET",url:"/sys/role",params:e})}function o(e){return Object(r["a"])({method:"POST",url:"/sys/role",data:e})}function s(e){return Object(r["a"])({method:"delete",url:"/sys/role/"+e})}function c(e){return Object(r["a"])({method:"get",url:"/sys/role/"+e})}function l(e){return Object(r["a"])({method:"put",url:"/sys/role/"+e.id,data:e})}function u(e){return Object(r["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},"4d90":function(e,t,n){"use strict";var r=n("23e7"),i=n("0ccb").start,a=n("9a0c");r({target:"String",proto:!0,forced:a},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}},7424:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-tabs",[n("el-tab-pane",{attrs:{label:"角色管理"}},[n("el-row",[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showDialog=!0}}},[e._v("新增角色")])],1),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.list,border:"",stripe:""}},[n("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),n("el-table-column",{attrs:{label:"角色",align:"center",prop:"name"}}),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"description"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){return e.onShowAsignPermDialog(r.id)}}},[e._v("分配权限")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.onEdit(r.id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.onDel(r.id)}}},[e._v("删除")])]}}])})],1),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.page.pagesize,total:e.page.total},on:{"current-change":e.onPageChange}})],1)],1),n("el-tab-pane",{attrs:{label:"公司信息"}},[n("el-alert",{attrs:{title:"对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改",type:"info","show-icon":"",closable:!1}}),n("el-form",{staticStyle:{width:"500px","margin-top":"20px"},attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"公司名称"}},[n("el-input",{attrs:{disabled:""},model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}})],1),n("el-form-item",{attrs:{label:"公司地址"}},[n("el-input",{attrs:{disabled:""},model:{value:e.info.companyAddress,callback:function(t){e.$set(e.info,"companyAddress",t)},expression:"info.companyAddress"}})],1),n("el-form-item",{attrs:{label:"公司邮箱"}},[n("el-input",{attrs:{disabled:""},model:{value:e.info.mailbox,callback:function(t){e.$set(e.info,"mailbox",t)},expression:"info.mailbox"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{disabled:""},model:{value:e.info.remarks,callback:function(t){e.$set(e.info,"remarks",t)},expression:"info.remarks"}})],1)],1)],1)],1)],1),n("el-dialog",e._g(e._b({attrs:{visible:e.showDialog,title:e.form.id?"编辑角色":"新增角色"},on:{open:e.onOpen,close:e.close}},"el-dialog",e.$attrs,!1),e.$listeners),[n("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"120px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入角色名称",clearable:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入角色描述",clearable:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handelConfirm}},[e._v("确定")])],1)],1),n("el-dialog",{attrs:{title:"分配权限",visible:e.showAsignPermDialog,width:"50%"},on:{"update:visible":function(t){e.showAsignPermDialog=t},close:function(t){e.showAsignPermDialog=!1}}},[n("el-tree",{ref:"permRef",attrs:{data:e.permList,props:{label:"name"},"default-expand-all":"","show-checkbox":"","node-key":"id","check-strictly":""}}),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-button",{on:{click:function(t){e.showAsignPermDialog=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.asignPerm}},[e._v("确定")])],1)],1)],1)},i=[],a=n("1da1"),o=(n("96cf"),n("34b7")),s=n("0aac"),c=n("ed08"),l={name:"Setting",components:{},props:{},data:function(){return{showDialog:!1,list:[],info:{},page:{page:1,pagesize:2,total:0},form:{name:void 0,description:void 0},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],description:[]},showAsignPermDialog:!1,permList:[],permIds:[],roleId:void 0}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["d"])(e.$store.state.user.userInfo.companyId);case 2:return e.info=t.sent,e.getList(),t.t0=c["b"],t.next=7,Object(s["d"])();case 7:t.t1=t.sent,e.permList=(0,t.t0)(t.t1,"0");case 9:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{onShowAsignPermDialog:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showAsignPermDialog=!0,n.next=3,Object(o["e"])(e);case 3:t.permIds=n.sent.permIds,t.$refs.permRef.setCheckedKeys(t.permIds),t.roleId=e;case 6:case"end":return n.stop()}}),n)})))()},asignPerm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$refs.permRef.getCheckedKeys(),t.next=3,Object(o["b"])({id:e.roleId,permIds:n});case 3:e.showAsignPermDialog=!1,e.$message.success("操作成功");case 5:case"end":return t.stop()}}),t)})))()},getList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["f"])(e.page);case 2:n=t.sent,r=n.total,i=n.rows,e.page.total=r,e.list=i;case 7:case"end":return t.stop()}}),t)})))()},onEdit:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["e"])(e);case 2:t.form=n.sent,t.showDialog=!0;case 4:case"end":return n.stop()}}),n)})))()},onDel:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=Object(a["a"])(regeneratorRuntime.mark((function n(r){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(o["c"])(e);case 2:t.$message.success("操作成功"),t.getList();case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},onPageChange:function(e){this.page.page=e,this.getList()},onOpen:function(){},close:function(){this.$refs["formRef"].resetFields(),this.form={name:void 0,description:void 0},this.showDialog=!1},handelConfirm:function(){var e=this;this.$refs["formRef"].validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:if(!e.form.id){t.next=7;break}return t.next=5,Object(o["g"])(e.form);case 5:t.next=9;break;case 7:return t.next=9,Object(o["a"])(e.form);case 9:e.$message.success("操作成功"),e.getList(),e.close();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},u=l,f=n("2877"),d=Object(f["a"])(u,r,i,!1,null,"5c7fe2ba",null);t["default"]=d.exports},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},ed08:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n("53ca"),n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(i){if(i.pid===t){var a=r(e,i.id);a.length>0&&(i.children=a),n.push(i)}})),n}}}]);