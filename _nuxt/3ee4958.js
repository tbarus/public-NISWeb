(window.webpackJsonp=window.webpackJsonp||[]).push([[30,21],{346:function(t,e,n){var content=n(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3097c920",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n.r(e);var r={props:["color","title"]},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{style:{color:t.color}},[t._v(t._s(t.title))]),t._v(" "),n("a",{attrs:{href:"https://www.google.com"}},[n("b-icon",{staticClass:"m-3",attrs:{icon:"facebook","font-scale":"3",color:t.color}})],1),t._v(" "),n("a",{attrs:{href:"https://www.google.com"}},[n("b-icon",{staticClass:"m-3",attrs:{icon:"linkedin","font-scale":"3",color:t.color}})],1),t._v(" "),n("a",{attrs:{href:"https://www.google.com"}},[n("b-icon",{staticClass:"m-3",attrs:{icon:"twitter","font-scale":"3",color:t.color}})],1)])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){"use strict";n(346)},349:function(t,e,n){(e=n(49)(!1)).push([t.i,".investorFooter{min-height:80vh;background-repeat:no-repeat!important;background-size:cover!important;background-position:50%;color:#fff}",""]),t.exports=e},350:function(t,e,n){"use strict";n.r(e);var r={},o=(n(348),n(35)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"investorFooter",style:{background:"linear-gradient(rgba(13, 22, 35, 0.93), rgba(13, 22, 35, 0.9))"},attrs:{fluid:""}},[n("b-row",[n("b-col",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh"},attrs:{lg:"5","offset-lg":"1"}},[n("h1",{staticClass:"mt-3 subtitle-thin"},[t._v("Stay connected with Investor news")]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("Follow us and stay up to date on what's happening at Novo Integrated Sciences")]),t._v(" "),n("SocialLinks",{attrs:{color:"white"}}),t._v(" "),n("p",{staticStyle:{"margin-top":"15vh"}},[t._v("\r\n            CAUTION CONCERNING FORWARD LOOKING STATEMENTS"),n("br"),t._v("\r\n            Novo Integrated Sciences's Investor Relations website at www.novointegrated.com/investors and our corporate blog at novointegrated.com/newsroom as well as Novo Integrated Sciences's social media \r\n            accounts, contain a significant amount of information about the company, including financial and other information for investors. \r\n            Novo Integrated Sciences encourages investors to visit these websites from time to time, as information is updated and new information is posted.\r\n            ")])],1),t._v(" "),n("b-col",{staticStyle:{"margin-top":"10vh","margin-bottom":"10vh"},attrs:{lg:"4","offset-lg":"1"}},[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px","border-left":"gray 1px solid"},attrs:{"no-body":"","bg-variant":"transparent"}},[n("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[n("b-col",{attrs:{lg:"3"}},[n("b-avatar",{attrs:{src:"https://cdn.buttercms.com/SZMDm8I5QzaIyXQtqU1B",size:"6rem"}})],1),t._v(" "),n("b-col",{attrs:{md:"6"}},[n("b-card-body",[n("b-card-text",{staticStyle:{color:"white !important"}},[n("h6",{staticClass:"mb-2 text-uppercase",staticStyle:{"font-weight":"bold"}},[t._v("Chris David")]),t._v(" "),n("p",[t._v("President, Novo Integrated Sciences Inc")]),t._v(" "),n("a",{staticStyle:{color:"white","text-decoration":"underline"},attrs:{href:""}},[t._v("Follow Chris on LinkedIn")])])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialLinks:n(347).default})},359:function(t,e,n){"use strict";var r=n(223),o=n(224);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},370:function(t,e,n){var content=n(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("a9b079f6",content,!0,{sourceMap:!1})},371:function(t,e,n){var content=n(404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("3b175aa8",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n(370)},402:function(t,e,n){(e=n(49)(!1)).push([t.i,".pageHero2{min-height:70vh;background:linear-gradient(rgba(30,47,69,.95),rgba(30,47,69,.99)),url(https://cdn.buttercms.com/YC6R61RNRKa43CZwMijf);background-repeat:no-repeat!important;background-size:cover!important;background-position:50%}.pageHero2 .subtitle{color:#fff}",""]),t.exports=e},403:function(t,e,n){"use strict";n(371)},404:function(t,e,n){(e=n(49)(!1)).push([t.i,".section3[data-v-6ffcbaa0]{min-height:375px}",""]),t.exports=e},448:function(t,e,n){"use strict";n.r(e);n(4),n(8),n(18),n(16),n(26),n(359),n(54),n(59);var r=n(21),o=n(74),c={data:function(){return{earnings:null,ordered:[],other_documents:[{name:"Presentations",slug:"presentations"},{name:"Frequently Asked Questions & General Information",slug:"frequently-asked-questions"}]}},methods:{getEarnings:function(){var t=this,e={locale:this.$i18n.locale};o.a.page.retrieve("*","earnings-statements",e).then((function(e){t.earnings=e.data.data.fields,t.orderedEarnings()}))},orderedEarnings:function(){if(this.earnings){var i,t=this.earnings.earnings_statements,e=Object(r.a)(new Set(t.earnings.map((function(t){return t.business_year})))),data=[];for(i=0;i<e.length;i++){var n={};n.year=e[i];for(var o=[],c=1;c<5;c++){var l=t.earnings.filter((function(t){return t.business_year==e[i]&&t.business_quarter==c}));o.push({qtr:c,documents:l})}n.quarters=o,data.push(n)}this.ordered=data}}},created:function(){this.getEarnings()},filters:{capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}}},l=(n(403),n(35)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section3"},t._l(t.ordered,(function(e,r){return n("div",{key:r},[n("hr",{}),t._v(" "),n("h4",[t._v(t._s(e.year)+" ")]),t._v(" "),n("b-row",{staticClass:"mt-4"},t._l(e.quarters,(function(q,e){return n("b-col",{key:e},[n("b-card",{staticClass:"border-0",attrs:{"bg-variant":"transparent"}},[n("b-card-title",{staticClass:"text-primary"},[t._v("Q"+t._s(q.qtr))]),t._v(" "),n("ul",{staticClass:"pl-0 mt-2 ",staticStyle:{"list-style":"none"}},t._l(q.documents,(function(e,r){return n("li",{key:r},[e.pdf_file?n("a",{staticClass:"text-secondary",attrs:{href:e.html_link}},[t._v(t._s(e.doc_type.toUpperCase())+" (pdf)")]):t._e(),n("br"),t._v(" "),e.html_link?n("a",{staticClass:"text-secondary",attrs:{href:e.html_link}},[t._v(t._s(e.doc_type.toUpperCase())+" (html)")]):t._e()])})),0)],1)],1)})),1)],1)})),0)}),[],!1,null,"6ffcbaa0",null);e.default=component.exports},459:function(t,e,n){"use strict";n.r(e);var r={},o=(n(401),n(35)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"div"},[n("b-container",{staticClass:"pageHero2  px-0 py-0",attrs:{fluid:""}},[n("b-row",{staticClass:"vertical-align pr-0  pt-5"},[n("b-col",{staticStyle:{"margin-top":"5vh"},attrs:{lg:"8","offset-lg":"1"}},[n("h6",{staticClass:"subtitle"},[t._v("Investor Relations\n            ")])]),t._v(" "),n("b-col",{staticStyle:{"margin-top":"8vh"},attrs:{lg:"8","offset-lg":"1"}},[n("h1",{staticClass:"title"},[t._v("Reports & SEC Filings\n            ")])])],1)],1),t._v(" "),n("b-container",[n("b-row",{staticClass:"mt-5"},[n("b-col",[n("h1",{staticClass:"subtitle-thin text-primary mb-5"},[t._v("Reports")])]),t._v(" "),n("div",{staticClass:"w-100"}),t._v(" "),n("b-col",[n("EarningsList")],1)],1)],1),t._v(" "),n("b-container",{staticClass:"py-5",staticStyle:{"min-height":"40vh"}},[n("b-row",[n("b-col",{attrs:{lg:"10"}},[n("h1",{staticClass:"subtitle-thin text-primary mb-5"},[t._v("SEC Filings")])]),t._v(" "),n("b-col",{attrs:{lg:"10"}},[t._v("\n            View all Company SEC Filings (EDGAR), "),n("a",{staticClass:"text-secondary",attrs:{rel:"external",target:"_blank",href:"https://www.sec.gov/cgi-bin/browse-edgar?CIK=1138978&owner=exclude"}},[t._v("click here")])])],1)],1),t._v(" "),n("InvestorFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EarningsList:n(448).default,InvestorFooter:n(350).default})}}]);