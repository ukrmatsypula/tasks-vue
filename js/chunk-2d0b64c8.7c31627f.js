(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64c8"],{"1d21":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[t.task?e("div",{staticClass:"col s6 offset-s3"},[e("h1",[t._v(t._s(t.task.title))]),e("form",{on:{submit:function(s){return s.preventDefault(),t.submitHandler.apply(null,arguments)}}},[e("div",{ref:"chips",staticClass:"chips"}),e("div",{staticClass:"input-field"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",staticStyle:{"min-height":"150px"},attrs:{id:"description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}}),e("label",{attrs:{for:"description"}},[t._v("Description")]),e("span",{staticClass:"character-counter",staticStyle:{float:"right","font-size":"12px"}},[t._v(t._s(t.description.length)+"/2048")])]),e("input",{ref:"datepicker",attrs:{type:"text"}}),"completed"!==t.task.status?e("div",[e("button",{staticClass:"btn",staticStyle:{"margin-right":"1rem"},attrs:{type:"submit"}},[t._v(" Update ")]),e("button",{staticClass:"btn blue",attrs:{type:"button"},on:{click:t.completeTask}},[t._v(" Complete task ")])]):t._e()])]):e("p",[t._v("Task not found")])])},a=[],n=e("5530"),c=(e("a4d3"),e("e01a"),e("2f62")),r=e("4d5c"),o=e.n(r),d={name:"task",data:function(){return{description:"",chips:null,date:null}},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])(["TASK_BY_ID"])),{},{task:function(){return this.TASK_BY_ID(parseInt(this.$route.params.id))}}),methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["UPDATE_TASK","COMPLETE_TASK"])),{},{submitHandler:function(){this.UPDATE_TASK({id:this.task.id,description:this.description,date:this.date.date}),this.$router.push({name:"list"})},completeTask:function(){this.COMPLETE_TASK(this.task.id),this.$router.push({name:"list"})}}),mounted:function(){this.description=this.task.description,this.chips=o.a.Chips.init(this.$refs.chips,{placeholder:"Task tags",data:this.task.tags}),this.date=o.a.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date(this.task.date),setDefaultDate:!0}),setTimeout((function(){o.a.updateTextFields()}),0)},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}},p=d,l=e("2877"),u=Object(l["a"])(p,i,a,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b64c8.7c31627f.js.map