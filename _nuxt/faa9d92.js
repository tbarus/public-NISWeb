(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{362:function(e,t,c){var content=c(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(49).default)("c758340a",content,!0,{sourceMap:!1})},397:function(e,t,c){"use strict";c(362)},398:function(e,t,c){(t=c(48)(!1)).push([e.i,".execs h3{margin-bottom:11px;font-size:2.2em;line-height:1.05;font-weight:600;letter-spacing:.008em}.execs h4{font-size:2em;line-height:1.09375;font-weight:300;letter-spacing:.011em}",""]),e.exports=t},440:function(e,t,c){"use strict";c.r(t);var l=c(65),n={data:function(){return{execDetail:""}},computed:{},methods:{getExecDetail:function(){var e=this,t={locale:this.$i18n.locale};l.a.page.retrieve("executive_profiles",this.$route.params.slug,t).then((function(t){e.execDetail=t.data.data}))}},created:function(){this.getExecDetail()}},o=(c(397),c(31)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("b-container",{staticClass:"mt-5",attrs:{fluid:"",id:"execProfile"}},[c("b-row",{staticClass:"ml-2"},[c("b-col",{staticClass:"quick-links",attrs:{md:"3"}},[c("nuxt-link",{attrs:{prefetch:"",to:e.localePath("/governance/")}},[e._v("View All Leaders")])],1),e._v(" "),c("b-col",{attrs:{md:"8"}},[c("hr"),e._v(" "),e.execDetail?c("b-container",{staticClass:"quick-links"},[c("b-row",[c("b-col",{staticClass:"execs",attrs:{cols:"12",md:"6"}},[c("h3",{staticClass:"mt-5"},[e._v(e._s(e.execDetail.fields.full_name))]),e._v(" "),c("h4",[e._v(e._s(e.execDetail.fields.company_role))])]),e._v(" "),c("b-col",{attrs:{md:"6"}},[c("b-img",{attrs:{src:e.execDetail.fields.image}})],1)],1),e._v(" "),c("hr"),e._v(" "),c("b-row",[c("b-col",[c("div",{domProps:{innerHTML:e._s(e.execDetail.fields.bio)}})])],1)],1):e._e()],1)],1)],1),e._v(" "),c("div",{staticClass:"footerspacer"})],1)}),[],!1,null,null,null);t.default=component.exports}}]);