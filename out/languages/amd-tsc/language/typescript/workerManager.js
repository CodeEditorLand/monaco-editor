var __awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};define(["require","exports","../../fillers/monaco-editor-core"],(function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WorkerManager=void 0;var n=function(){function t(t,e){var r=this;this._modeId=t,this._defaults=e,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return r._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return r._updateExtraLibs()}))}return t.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(r){switch(r.label){case 0:return this._worker?(t=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return e=r.sent(),this._updateExtraLibsToken!==t||e.updateExtraLibs(this._defaults.getExtraLibs()),[2]}}))}))},t.prototype._getClient=function(){return this._client||(this._client=__awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return this._worker=r.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?[4,this._worker.withSyncedResources(r.editor.getModels().filter((function(e){return e.getLanguageId()===t._modeId})).map((function(t){return t.uri})))]:[3,2];case 1:case 3:return[2,e.sent()];case 2:return[4,this._worker.getProxy()]}}))}))),this._client},t.prototype.getLanguageServiceWorker=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:return[4,this._getClient()];case 1:return e=r.sent(),this._worker?[4,this._worker.withSyncedResources(t)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,e]}}))}))},t}();e.WorkerManager=n}));