(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(t,e,n){},344:function(t,e,n){"use strict";n(322)},347:function(t,e,n){"use strict";n.r(e);var a=n(17),s=n(1);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:!0,updateEvent:null}),computed:{popupConfig(){return Object(s.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const t=this.popupConfig;return t&&t.message||o["/"].message},buttonText(){const t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created(){a.a.$on("sw-updated",this.onSWUpdated),this.rawPopupConfig=o},methods:{onSWUpdated(t){this.updateEvent=t},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},p=(n(344),n(9)),i=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",(function(){return[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()]}),{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"fec8b358",null);e.default=i.exports}}]);