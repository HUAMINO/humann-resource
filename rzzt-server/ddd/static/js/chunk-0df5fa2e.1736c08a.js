(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0df5fa2e"],{"0b62":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("PageTool",{scopedSlots:e._u([{key:"after",fn:function(){return[n("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.onExport}},[e._v("Excel导出")]),n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){return e.$router.push("/import")}}},[e._v("Excel导入")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.showAddDialog=!0}}},[e._v("新增员工")])]},proxy:!0}])},[n("span",{attrs:{slot:"before"},slot:"before"},[e._v("共"+e._s(e.page.total)+"条数据")])]),n("el-card",[n("el-table",{attrs:{data:e.list,border:"",stripe:""}},[n("el-table-column",{attrs:{label:"序号",sortable:!0,type:"index",width:"50"}}),n("el-table-column",{attrs:{label:"姓名",prop:"username",sortable:!0}}),n("el-table-column",{attrs:{label:"头像",sortable:!0,width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.row;return[n("el-image",{attrs:{src:o.staffPhoto},on:{click:function(t){return e.onShowQrCodeDialog(o.staffPhoto)}}},[n("img",{attrs:{slot:"error",src:r("ed7b")},on:{click:function(t){e.onShowQrCodeDialog(r("ed7b"))}},slot:"error"})])]}}])}),n("el-table-column",{attrs:{label:"手机号",prop:"mobile",sortable:!0}}),n("el-table-column",{attrs:{label:"工号",prop:"workNumber",sortable:!0}}),n("el-table-column",{attrs:{label:"聘用形式",prop:"formOfEmployment",sortable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(e._f("formatHireType")(r.formOfEmployment)))]}}])}),n("el-table-column",{attrs:{label:"部门",prop:"departmentName",sortable:!0}}),n("el-table-column",{attrs:{label:"入职时间",prop:"timeOfEntry",sortable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[e._v(e._s(e._f("formatdate")(r.timeOfEntry)))]}}])}),n("el-table-column",{attrs:{label:"状态",prop:"enableState",sortable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-switch",{attrs:{disabled:"","active-value":1,"inactive-value":0},model:{value:r.enableState,callback:function(t){e.$set(r,"enableState",t)},expression:"row.enableState"}})]}}])}),n("el-table-column",{attrs:{label:"操作",prop:"",sortable:!0,fixed:"right",width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.$router.push("/employees/detail/"+r.id)}}},[e._v("查看")]),n("el-button",{attrs:{type:"text"}},[e._v("转正")]),n("el-button",{attrs:{type:"text"}},[e._v("调岗")]),n("el-button",{attrs:{type:"text"}},[e._v("离职")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.onShowAsignRoleDialog(r.id)}}},[e._v("角色")]),n("el-button",{attrs:{type:"text"},on:{click:function(t){return e.onDel(r.id)}}},[e._v("删除")])]}}])})],1),n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-pagination",{attrs:{layout:"total, prev, pager, next",total:e.page.total,"page-size":e.page.size},on:{"current-change":e.onPageChange}})],1)],1)],1),n("el-dialog",{attrs:{title:"显示二维码",visible:e.showQrCodeDialog},on:{"update:visible":function(t){e.showQrCodeDialog=t}}},[n("qrcode-vue",{attrs:{value:e.staffPhotoUrl}})],1),n("el-dialog",e._g(e._b({attrs:{visible:e.showAddDialog,title:"新增员工"},on:{open:e.onOpen,close:e.close}},"el-dialog",e.$attrs,!1),e.$listeners),[n("el-form",{ref:"formRef",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"120px"}},[n("el-form-item",{attrs:{label:"姓名",prop:"username"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入单行文本姓名",clearable:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入手机",clearable:""},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),n("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[n("el-date-picker",{style:{width:"100%"},attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择入职时间",clearable:""},model:{value:e.form.timeOfEntry,callback:function(t){e.$set(e.form,"timeOfEntry",t)},expression:"form.timeOfEntry"}})],1),n("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[n("el-select",{style:{width:"100%"},attrs:{placeholder:"请选择聘用形式",clearable:""},model:{value:e.form.formOfEmployment,callback:function(t){e.$set(e.form,"formOfEmployment",t)},expression:"form.formOfEmployment"}},e._l(e.formOfEmploymentOptions,(function(e,t){return n("el-option",{key:t,attrs:{label:e.value,value:e.id,disabled:e.disabled}})})),1)],1),n("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入工号",clearable:""},model:{value:e.form.workNumber,callback:function(t){e.$set(e.form,"workNumber",t)},expression:"form.workNumber"}})],1),n("el-form-item",{attrs:{label:"部门",prop:"departmentName"}},[n("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入部门",clearable:""},on:{focus:e.getDeptsList},model:{value:e.form.departmentName,callback:function(t){e.$set(e.form,"departmentName",t)},expression:"form.departmentName"}}),e.showTree?n("el-tree",{attrs:{data:e.depts,props:{label:"name"}},on:{"node-click":e.handleNodeClick}}):e._e()],1),n("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[n("el-date-picker",{style:{width:"100%"},attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"请选择转正时间",clearable:""},model:{value:e.form.correctionTime,callback:function(t){e.$set(e.form,"correctionTime",t)},expression:"form.correctionTime"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.handelConfirm}},[e._v("确定")])],1)],1),n("el-dialog",{attrs:{title:"分配角色",visible:e.showAsignRoleDialog,width:"50%"},on:{"update:visible":function(t){e.showAsignRoleDialog=t},close:function(t){e.showAsignRoleDialog=!1}}},[n("el-checkbox-group",{model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.roleList,(function(t,r){return n("el-checkbox",{key:r,attrs:{label:t.id}},[e._v(e._s(t.name))])})),1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-button",{on:{click:function(t){e.showAsignRoleDialog=!1}}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.asignRole}},[e._v("确定")])],1)],1)],1)},o=[],a=r("1da1"),l=(r("d3b7"),r("3ca3"),r("ddb0"),r("07ac"),r("d81d"),r("b64b"),r("b0c0"),r("96cf"),r("8f00")),s=r("d7b0"),i=r("01f5"),u=r("1eef"),c=r("ed08"),f=r("2ef0"),m=r("8975"),d=r("34b7"),p=r("c24f"),b={name:"Employees",components:{QrcodeVue:s["a"]},props:{},data:function(){return{list:[],showQrCodeDialog:!1,staffPhotoUrl:void 0,page:{page:1,size:2,total:0},form:{username:void 0,mobile:void 0,timeOfEntry:null,formOfEmployment:void 0,workNumber:void 0,departmentName:void 0,correctionTime:null},rules:{username:[{required:!0,message:"请输入单行文本姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机",trigger:"blur"}],timeOfEntry:[{required:!0,message:"请选择入职时间",trigger:"change"}],formOfEmployment:[{required:!0,message:"请选择聘用形式",trigger:"change"}],workNumber:[{required:!0,message:"请输入工号",trigger:"blur"}],departmentName:[{required:!0,message:"请输入部门",trigger:"change"}],correctionTime:[]},formOfEmploymentOptions:i["a"].hireType,showAddDialog:!1,depts:[],showTree:!1,showAsignRoleDialog:!1,roleList:[],roleIds:[],userId:void 0}},created:function(){this.getList()},mounted:function(){},methods:{onShowAsignRoleDialog:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(p["a"])(e);case 2:return n=r.sent,o=n.roleIds,t.roleIds=o,r.next=7,Object(d["f"])({page:1,pagesize:50});case 7:a=r.sent,l=a.rows,t.roleList=l,t.showAsignRoleDialog=!0,t.userId=e;case 12:case"end":return r.stop()}}),r)})))()},asignRole:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])({id:e.userId,roleIds:e.roleIds});case 2:e.showAsignRoleDialog=!1,e.$message.success("操作成功");case 4:case"end":return t.stop()}}),t)})))()},onExport:function(){var e=this;Promise.all([r.e("chunk-4cfea8c4"),r.e("chunk-149ee2f6")]).then(r.bind(null,"4bf8")).then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,o,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={"姓名":"username","手机号":"mobile","入职日期":"timeOfEntry","聘用形式":"formOfEmployment","转正日期":"correctionTime","工号":"workNumber","部门":"departmentName"},t.next=3,Object(l["e"])({page:1,size:e.page.total});case 3:o=t.sent,a=o.rows,s=Object.values(n),i=a.map((function(e){var t=Object(f["pick"])(e,s);return t.timeOfEntry=Object(m["formatdate"])(t.timeOfEntry),t.correctionTime=Object(m["formatdate"])(t.correctionTime),t.formOfEmployment=Object(m["formatHireType"])(t.formOfEmployment),Object.values(t)})),r.export_json_to_excel({header:Object.keys(n),data:i,filename:"excel-list",autoWidth:!0,bookType:"xlsx"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},onDel:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var r=Object(a["a"])(regeneratorRuntime.mark((function r(n){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return 1===t.list.length&&(t.page.page-=1),r.next=3,Object(l["c"])(e);case 3:t.$message.success("操作成功"),t.getList();case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},handleNodeClick:function(e){this.form.departmentName=e.name,this.showTree=!1},getDeptsList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showTree=!0,t.t0=c["b"],t.next=4,Object(u["e"])();case 4:t.t1=t.sent.depts,e.depts=(0,t.t0)(t.t1,"");case 6:case"end":return t.stop()}}),t)})))()},close:function(){this.$refs["formRef"].resetFields(),this.showAddDialog=!1},onShowQrCodeDialog:function(e){this.staffPhotoUrl=e,this.showQrCodeDialog=!0},getList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["e"])(e.page);case 2:r=t.sent,n=r.total,o=r.rows,e.page.total=n,e.list=o;case 7:case"end":return t.stop()}}),t)})))()},onPageChange:function(e){this.page.page=e,this.getList()},onOpen:function(){},handelConfirm:function(){var e=this;this.$refs["formRef"].validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(l["a"])(e.form);case 4:e.$message.success("操作成功"),e.getList(),e.close();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},h=b,g=r("2877"),y=Object(g["a"])(h,n,o,!1,null,"7d7231fc",null);t["default"]=y.exports},"1eef":function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"f",(function(){return u}));var n=r("b775");function o(){return Object(n["a"])({method:"GET",url:"/company/department"})}var a=o;function l(e){return Object(n["a"])({method:"POST",url:"/company/department",data:e})}function s(e){return Object(n["a"])({method:"DELETE",url:"/company/department/"+e})}function i(e){return Object(n["a"])({method:"GET",url:"/company/department/"+e})}function u(e){return Object(n["a"])({method:"PUT",url:"/company/department/"+e.id,data:e})}},"34b7":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"f",(function(){return a})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return c}));var n=r("b775");function o(e){return Object(n["a"])({method:"GET",url:"/company/"+e})}function a(e){return Object(n["a"])({method:"GET",url:"/sys/role",params:e})}function l(e){return Object(n["a"])({method:"POST",url:"/sys/role",data:e})}function s(e){return Object(n["a"])({method:"delete",url:"/sys/role/"+e})}function i(e){return Object(n["a"])({method:"get",url:"/sys/role/"+e})}function u(e){return Object(n["a"])({method:"put",url:"/sys/role/"+e.id,data:e})}function c(e){return Object(n["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},"8f00":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return a})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"h",(function(){return i})),r.d(t,"i",(function(){return u})),r.d(t,"g",(function(){return c})),r.d(t,"k",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"j",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r("b775");function o(){return Object(n["a"])({method:"GET",url:"/sys/user/simple"})}function a(e){return Object(n["a"])({method:"GET",url:"/sys/user",params:e})}function l(e){return Object(n["a"])({method:"post",url:"/sys/user",data:e})}function s(e){return Object(n["a"])({url:"/sys/user/".concat(e),method:"delete"})}function i(e){return Object(n["a"])({url:"/sys/user/batch",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function c(e){return Object(n["a"])({url:"/employees/".concat(e,"/personalInfo")})}function f(e){return Object(n["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function m(e){return Object(n["a"])({url:"/employees/".concat(e,"/jobs")})}function d(e){return Object(n["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function p(e){return Object(n["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},ed08:function(e,t,r){"use strict";r.d(t,"b",(function(){return n}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("1276"),r("159b");function n(e,t){var r=[];return e.forEach((function(o){if(o.pid===t){var a=n(e,o.id);a.length>0&&(o.children=a),r.push(o)}})),r}}}]);