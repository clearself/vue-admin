(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-77c27a42"],{2510:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("e0e5"),l=i.n(s);function n(e){return e&&e.__esModule?e.default:e}class r{on(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this}emit(e,...t){this._callbacks=this._callbacks||{};let i=this._callbacks[e];if(i)for(let e of i)e.apply(this,t);return this.element&&this.element.dispatchEvent(this.makeEvent("dropzone:"+e,{args:t})),this}makeEvent(e,t){let i={bubbles:!0,cancelable:!0,detail:t};if("function"==typeof window.CustomEvent)return new CustomEvent(e,i);var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),s}off(e,t){if(!this._callbacks||0===arguments.length)return this._callbacks={},this;let i=this._callbacks[e];if(!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(let e=0;e<i.length;e++){if(i[e]===t){i.splice(e,1);break}}return this}}var o={url:null,method:"post",withCredentials:!1,timeout:null,parallelUploads:2,uploadMultiple:!1,chunking:!1,forceChunking:!1,chunkSize:2e6,parallelChunkUploads:!1,retryChunks:!1,retryChunksLimit:3,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,thumbnailMethod:"crop",resizeWidth:null,resizeHeight:null,resizeMimeType:null,resizeQuality:.8,resizeMethod:"contain",filesizeBase:1e3,maxFiles:null,headers:null,clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,disablePreviews:!1,hiddenInputContainer:"body",capture:null,renameFilename:null,renameFile:null,forceFallback:!1,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictUploadCanceled:"Upload canceled.",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",dictFileSizeUnits:{tb:"TB",gb:"GB",mb:"MB",kb:"KB",b:"b"},init(){},params(e,t,i){if(i)return{dzuuid:i.file.upload.uuid,dzchunkindex:i.index,dztotalfilesize:i.file.size,dzchunksize:this.options.chunkSize,dztotalchunkcount:i.file.upload.totalChunkCount,dzchunkbyteoffset:i.index*this.options.chunkSize}},accept:(e,t)=>t(),chunksUploaded:function(e,t){t()},fallback(){let e;this.element.className=`${this.element.className} dz-browser-not-supported`;for(let t of this.element.getElementsByTagName("div"))if(/(^| )dz-message($| )/.test(t.className)){e=t,t.className="dz-message";break}e||(e=a.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(e));let t=e.getElementsByTagName("span")[0];return t&&(null!=t.textContent?t.textContent=this.options.dictFallbackMessage:null!=t.innerText&&(t.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize(e,t,i,s){let l={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},n=e.width/e.height;null==t&&null==i?(t=l.srcWidth,i=l.srcHeight):null==t?t=i*n:null==i&&(i=t/n);let r=(t=Math.min(t,l.srcWidth))/(i=Math.min(i,l.srcHeight));if(l.srcWidth>t||l.srcHeight>i)if("crop"===s)n>r?(l.srcHeight=e.height,l.srcWidth=l.srcHeight*r):(l.srcWidth=e.width,l.srcHeight=l.srcWidth/r);else{if("contain"!==s)throw new Error(`Unknown resizeMethod '${s}'`);n>r?i=t/n:t=i*n}return l.srcX=(e.width-l.srcWidth)/2,l.srcY=(e.height-l.srcHeight)/2,l.trgWidth=t,l.trgHeight=i,l},transformFile(e,t){return(this.options.resizeWidth||this.options.resizeHeight)&&e.type.match(/image.*/)?this.resizeImage(e,this.options.resizeWidth,this.options.resizeHeight,this.options.resizeMethod,t):t(e)},previewTemplate:n('<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail=""></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size=""></span></div>\n    <div class="dz-filename"><span data-dz-name=""></span></div>\n  </div>\n  <div class="dz-progress">\n    <span class="dz-upload" data-dz-uploadprogress=""></span>\n  </div>\n  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>\n  <div class="dz-success-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">\n      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>\n    </svg>\n  </div>\n</div>\n'),drop(e){return this.element.classList.remove("dz-drag-hover")},dragstart(e){},dragend(e){return this.element.classList.remove("dz-drag-hover")},dragenter(e){return this.element.classList.add("dz-drag-hover")},dragover(e){return this.element.classList.add("dz-drag-hover")},dragleave(e){return this.element.classList.remove("dz-drag-hover")},paste(e){},reset(){return this.element.classList.remove("dz-started")},addedfile(e){if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer&&!this.options.disablePreviews){for(var t of(e.previewElement=a.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),e.previewElement.querySelectorAll("[data-dz-name]")))t.textContent=e.name;for(t of e.previewElement.querySelectorAll("[data-dz-size]"))t.innerHTML=this.filesize(e.size);this.options.addRemoveLinks&&(e._removeLink=a.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`),e.previewElement.appendChild(e._removeLink));let i=t=>(t.preventDefault(),t.stopPropagation(),e.status===a.UPLOADING?a.confirm(this.options.dictCancelUploadConfirmation,(()=>this.removeFile(e))):this.options.dictRemoveFileConfirmation?a.confirm(this.options.dictRemoveFileConfirmation,(()=>this.removeFile(e))):this.removeFile(e));for(let t of e.previewElement.querySelectorAll("[data-dz-remove]"))t.addEventListener("click",i)}},removedfile(e){return null!=e.previewElement&&null!=e.previewElement.parentNode&&e.previewElement.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail(e,t){if(e.previewElement){e.previewElement.classList.remove("dz-file-preview");for(let i of e.previewElement.querySelectorAll("[data-dz-thumbnail]"))i.alt=e.name,i.src=t;return setTimeout((()=>e.previewElement.classList.add("dz-image-preview")),1)}},error(e,t){if(e.previewElement){e.previewElement.classList.add("dz-error"),"string"!=typeof t&&t.error&&(t=t.error);for(let i of e.previewElement.querySelectorAll("[data-dz-errormessage]"))i.textContent=t}},errormultiple(){},processing(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.innerHTML=this.options.dictCancelUpload},processingmultiple(){},uploadprogress(e,t,i){if(e.previewElement)for(let i of e.previewElement.querySelectorAll("[data-dz-uploadprogress]"))"PROGRESS"===i.nodeName?i.value=t:i.style.width=`${t}%`},totaluploadprogress(){},sending(){},sendingmultiple(){},success(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple(){},canceled(e){return this.emit("error",e,this.options.dictUploadCanceled)},canceledmultiple(){},complete(e){if(e._removeLink&&(e._removeLink.innerHTML=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple(){},maxfilesexceeded(){},maxfilesreached(){},queuecomplete(){},addedfiles(){}};class a extends r{static initClass(){this.prototype.Emitter=r,this.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],this.prototype._thumbnailQueue=[],this.prototype._processingThumbnail=!1}getAcceptedFiles(){return this.files.filter((e=>e.accepted)).map((e=>e))}getRejectedFiles(){return this.files.filter((e=>!e.accepted)).map((e=>e))}getFilesWithStatus(e){return this.files.filter((t=>t.status===e)).map((e=>e))}getQueuedFiles(){return this.getFilesWithStatus(a.QUEUED)}getUploadingFiles(){return this.getFilesWithStatus(a.UPLOADING)}getAddedFiles(){return this.getFilesWithStatus(a.ADDED)}getActiveFiles(){return this.files.filter((e=>e.status===a.UPLOADING||e.status===a.QUEUED)).map((e=>e))}init(){if("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(a.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)),this.clickableElements.length){let e=()=>{this.hiddenFileInput&&this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=document.createElement("input"),this.hiddenFileInput.setAttribute("type","file"),(null===this.options.maxFiles||this.options.maxFiles>1)&&this.hiddenFileInput.setAttribute("multiple","multiple"),this.hiddenFileInput.className="dz-hidden-input",null!==this.options.acceptedFiles&&this.hiddenFileInput.setAttribute("accept",this.options.acceptedFiles),null!==this.options.capture&&this.hiddenFileInput.setAttribute("capture",this.options.capture),this.hiddenFileInput.setAttribute("tabindex","-1"),this.hiddenFileInput.style.visibility="hidden",this.hiddenFileInput.style.position="absolute",this.hiddenFileInput.style.top="0",this.hiddenFileInput.style.left="0",this.hiddenFileInput.style.height="0",this.hiddenFileInput.style.width="0",a.getElement(this.options.hiddenInputContainer,"hiddenInputContainer").appendChild(this.hiddenFileInput),this.hiddenFileInput.addEventListener("change",(()=>{let{files:t}=this.hiddenFileInput;if(t.length)for(let e of t)this.addFile(e);this.emit("addedfiles",t),e()}))};e()}this.URL=null!==window.URL?window.URL:window.webkitURL;for(let e of this.events)this.on(e,this.options[e]);this.on("uploadprogress",(()=>this.updateTotalUploadProgress())),this.on("removedfile",(()=>this.updateTotalUploadProgress())),this.on("canceled",(e=>this.emit("complete",e))),this.on("complete",(e=>{if(0===this.getAddedFiles().length&&0===this.getUploadingFiles().length&&0===this.getQueuedFiles().length)return setTimeout((()=>this.emit("queuecomplete")),0)}));let e=function(e){if(function(e){if(e.dataTransfer.types)for(var t=0;t<e.dataTransfer.types.length;t++)if("Files"===e.dataTransfer.types[t])return!0;return!1}(e))return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1};return this.listeners=[{element:this.element,events:{dragstart:e=>this.emit("dragstart",e),dragenter:t=>(e(t),this.emit("dragenter",t)),dragover:t=>{let i;try{i=t.dataTransfer.effectAllowed}catch(e){}return t.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",e(t),this.emit("dragover",t)},dragleave:e=>this.emit("dragleave",e),drop:t=>(e(t),this.drop(t)),dragend:e=>this.emit("dragend",e)}}],this.clickableElements.forEach((e=>this.listeners.push({element:e,events:{click:t=>((e!==this.element||t.target===this.element||a.elementInside(t.target,this.element.querySelector(".dz-message")))&&this.hiddenFileInput.click(),!0)}}))),this.enable(),this.options.init.call(this)}destroy(){return this.disable(),this.removeAllFiles(!0),(null!=this.hiddenFileInput?this.hiddenFileInput.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,a.instances.splice(a.instances.indexOf(this),1)}updateTotalUploadProgress(){let e,t=0,i=0;if(this.getActiveFiles().length){for(let e of this.getActiveFiles())t+=e.upload.bytesSent,i+=e.upload.total;e=100*t/i}else e=100;return this.emit("totaluploadprogress",e,i,t)}_getParamName(e){return"function"==typeof this.options.paramName?this.options.paramName(e):`${this.options.paramName}${this.options.uploadMultiple?`[${e}]`:""}`}_renameFile(e){return"function"!=typeof this.options.renameFile?e.name:this.options.renameFile(e)}getFallbackForm(){let e,t;if(e=this.getExistingFallback())return e;let i='<div class="dz-fallback">';this.options.dictFallbackText&&(i+=`<p>${this.options.dictFallbackText}</p>`),i+=`<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple?'multiple="multiple"':void 0} /><input type="submit" value="Upload!"></div>`;let s=a.createElement(i);return"FORM"!==this.element.tagName?(t=a.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`),t.appendChild(s)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=t?t:s}getExistingFallback(){let e=function(e){for(let t of e)if(/(^| )fallback($| )/.test(t.className))return t};for(let i of["div","form"]){var t;if(t=e(this.element.getElementsByTagName(i)))return t}}setupEventListeners(){return this.listeners.map((e=>(()=>{let t=[];for(let i in e.events){let s=e.events[i];t.push(e.element.addEventListener(i,s,!1))}return t})()))}removeEventListeners(){return this.listeners.map((e=>(()=>{let t=[];for(let i in e.events){let s=e.events[i];t.push(e.element.removeEventListener(i,s,!1))}return t})()))}disable(){return this.clickableElements.forEach((e=>e.classList.remove("dz-clickable"))),this.removeEventListeners(),this.disabled=!0,this.files.map((e=>this.cancelUpload(e)))}enable(){return delete this.disabled,this.clickableElements.forEach((e=>e.classList.add("dz-clickable"))),this.setupEventListeners()}filesize(e){let t=0,i="b";if(e>0){let s=["tb","gb","mb","kb","b"];for(let l=0;l<s.length;l++){let n=s[l];if(e>=Math.pow(this.options.filesizeBase,4-l)/10){t=e/Math.pow(this.options.filesizeBase,4-l),i=n;break}}t=Math.round(10*t)/10}return`<strong>${t}</strong> ${this.options.dictFileSizeUnits[i]}`}_updateMaxFilesReachedClass(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")}drop(e){if(!e.dataTransfer)return;this.emit("drop",e);let t=[];for(let i=0;i<e.dataTransfer.files.length;i++)t[i]=e.dataTransfer.files[i];if(t.length){let{items:i}=e.dataTransfer;i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)}this.emit("addedfiles",t)}paste(e){if(null==(t=null!=e?e.clipboardData:void 0,i=e=>e.items,null!=t?i(t):void 0))return;var t,i;this.emit("paste",e);let{items:s}=e.clipboardData;return s.length?this._addFilesFromItems(s):void 0}handleFiles(e){for(let t of e)this.addFile(t)}_addFilesFromItems(e){return(()=>{let t=[];for(let s of e){var i;null!=s.webkitGetAsEntry&&(i=s.webkitGetAsEntry())?i.isFile?t.push(this.addFile(s.getAsFile())):i.isDirectory?t.push(this._addFilesFromDirectory(i,i.name)):t.push(void 0):null!=s.getAsFile&&(null==s.kind||"file"===s.kind)?t.push(this.addFile(s.getAsFile())):t.push(void 0)}return t})()}_addFilesFromDirectory(e,t){let i=e.createReader(),s=e=>{return t=console,i="log",s=t=>t.log(e),null!=t&&"function"==typeof t[i]?s(t,i):void 0;var t,i,s};var l=()=>i.readEntries((e=>{if(e.length>0){for(let i of e)i.isFile?i.file((e=>{if(!this.options.ignoreHiddenFiles||"."!==e.name.substring(0,1))return e.fullPath=`${t}/${e.name}`,this.addFile(e)})):i.isDirectory&&this._addFilesFromDirectory(i,`${t}/${i.name}`);l()}return null}),s);return l()}accept(e,t){this.options.maxFilesize&&e.size>1048576*this.options.maxFilesize?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):a.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)}addFile(e){e.upload={uuid:a.uuidv4(),progress:0,total:e.size,bytesSent:0,filename:this._renameFile(e)},this.files.push(e),e.status=a.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,(t=>{t?(e.accepted=!1,this._errorProcessing([e],t)):(e.accepted=!0,this.options.autoQueue&&this.enqueueFile(e)),this._updateMaxFilesReachedClass()}))}enqueueFiles(e){for(let t of e)this.enqueueFile(t);return null}enqueueFile(e){if(e.status!==a.ADDED||!0!==e.accepted)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=a.QUEUED,this.options.autoProcessQueue)return setTimeout((()=>this.processQueue()),0)}_enqueueThumbnail(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1048576*this.options.maxThumbnailFilesize)return this._thumbnailQueue.push(e),setTimeout((()=>this._processThumbnailQueue()),0)}_processThumbnailQueue(){if(this._processingThumbnail||0===this._thumbnailQueue.length)return;this._processingThumbnail=!0;let e=this._thumbnailQueue.shift();return this.createThumbnail(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,!0,(t=>(this.emit("thumbnail",e,t),this._processingThumbnail=!1,this._processThumbnailQueue())))}removeFile(e){if(e.status===a.UPLOADING&&this.cancelUpload(e),this.files=d(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")}removeAllFiles(e){null==e&&(e=!1);for(let t of this.files.slice())(t.status!==a.UPLOADING||e)&&this.removeFile(t);return null}resizeImage(e,t,i,s,l){return this.createThumbnail(e,t,i,s,!0,((t,i)=>{if(null==i)return l(e);{let{resizeMimeType:t}=this.options;null==t&&(t=e.type);let s=i.toDataURL(t,this.options.resizeQuality);return"image/jpeg"!==t&&"image/jpg"!==t||(s=p.restore(e.dataURL,s)),l(a.dataURItoBlob(s))}}))}createThumbnail(e,t,i,s,l,n){let r=new FileReader;r.onload=()=>{e.dataURL=r.result,"image/svg+xml"!==e.type?this.createThumbnailFromUrl(e,t,i,s,l,n):null!=n&&n(r.result)},r.readAsDataURL(e)}displayExistingFile(e,t,i,s,l=!0){if(this.emit("addedfile",e),this.emit("complete",e),l){let l=t=>{this.emit("thumbnail",e,t),i&&i()};e.dataURL=t,this.createThumbnailFromUrl(e,this.options.thumbnailWidth,this.options.thumbnailHeight,this.options.thumbnailMethod,this.options.fixOrientation,l,s)}else this.emit("thumbnail",e,t),i&&i()}createThumbnailFromUrl(e,t,i,s,l,n,r){let o=document.createElement("img");return r&&(o.crossOrigin=r),l="from-image"!=getComputedStyle(document.body).imageOrientation&&l,o.onload=()=>{let r=e=>e(1);return"undefined"!=typeof EXIF&&null!==EXIF&&l&&(r=e=>EXIF.getData(o,(function(){return e(EXIF.getTag(this,"Orientation"))}))),r((l=>{e.width=o.width,e.height=o.height;let r=this.options.resize.call(this,e,t,i,s),a=document.createElement("canvas"),d=a.getContext("2d");switch(a.width=r.trgWidth,a.height=r.trgHeight,l>4&&(a.width=r.trgHeight,a.height=r.trgWidth),l){case 2:d.translate(a.width,0),d.scale(-1,1);break;case 3:d.translate(a.width,a.height),d.rotate(Math.PI);break;case 4:d.translate(0,a.height),d.scale(1,-1);break;case 5:d.rotate(.5*Math.PI),d.scale(1,-1);break;case 6:d.rotate(.5*Math.PI),d.translate(0,-a.width);break;case 7:d.rotate(.5*Math.PI),d.translate(a.height,-a.width),d.scale(-1,1);break;case 8:d.rotate(-.5*Math.PI),d.translate(-a.height,0)}u(d,o,null!=r.srcX?r.srcX:0,null!=r.srcY?r.srcY:0,r.srcWidth,r.srcHeight,null!=r.trgX?r.trgX:0,null!=r.trgY?r.trgY:0,r.trgWidth,r.trgHeight);let h=a.toDataURL("image/png");if(null!=n)return n(h,a)}))},null!=n&&(o.onerror=n),o.src=e.dataURL}processQueue(){let{parallelUploads:e}=this.options,t=this.getUploadingFiles().length,i=t;if(t>=e)return;let s=this.getQueuedFiles();if(s.length>0){if(this.options.uploadMultiple)return this.processFiles(s.slice(0,e-t));for(;i<e;){if(!s.length)return;this.processFile(s.shift()),i++}}}processFile(e){return this.processFiles([e])}processFiles(e){for(let t of e)t.processing=!0,t.status=a.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)}_getFilesWithXhr(e){return this.files.filter((t=>t.xhr===e)).map((e=>e))}cancelUpload(e){if(e.status===a.UPLOADING){let t=this._getFilesWithXhr(e.xhr);for(let e of t)e.status=a.CANCELED;void 0!==e.xhr&&e.xhr.abort();for(let e of t)this.emit("canceled",e);this.options.uploadMultiple&&this.emit("canceledmultiple",t)}else e.status!==a.ADDED&&e.status!==a.QUEUED||(e.status=a.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()}resolveOption(e,...t){return"function"==typeof e?e.apply(this,t):e}uploadFile(e){return this.uploadFiles([e])}uploadFiles(e){this._transformFiles(e,(t=>{if(this.options.chunking){let i=t[0];e[0].upload.chunked=this.options.chunking&&(this.options.forceChunking||i.size>this.options.chunkSize),e[0].upload.totalChunkCount=Math.ceil(i.size/this.options.chunkSize)}if(e[0].upload.chunked){let i=e[0],s=t[0],l=0;i.upload.chunks=[];let n=()=>{let t=0;for(;void 0!==i.upload.chunks[t];)t++;if(t>=i.upload.totalChunkCount)return;l++;let n=t*this.options.chunkSize,r=Math.min(n+this.options.chunkSize,s.size),o={name:this._getParamName(0),data:s.webkitSlice?s.webkitSlice(n,r):s.slice(n,r),filename:i.upload.filename,chunkIndex:t};i.upload.chunks[t]={file:i,index:t,dataBlock:o,status:a.UPLOADING,progress:0,retries:0},this._uploadData(e,[o])};if(i.upload.finishedChunkUpload=(t,s)=>{let l=!0;t.status=a.SUCCESS,t.dataBlock=null,t.xhr=null;for(let e=0;e<i.upload.totalChunkCount;e++){if(void 0===i.upload.chunks[e])return n();i.upload.chunks[e].status!==a.SUCCESS&&(l=!1)}l&&this.options.chunksUploaded(i,(()=>{this._finished(e,s,null)}))},this.options.parallelChunkUploads)for(let e=0;e<i.upload.totalChunkCount;e++)n();else n()}else{let i=[];for(let s=0;s<e.length;s++)i[s]={name:this._getParamName(s),data:t[s],filename:e[s].upload.filename};this._uploadData(e,i)}}))}_getChunk(e,t){for(let i=0;i<e.upload.totalChunkCount;i++)if(void 0!==e.upload.chunks[i]&&e.upload.chunks[i].xhr===t)return e.upload.chunks[i]}_uploadData(e,t){let i=new XMLHttpRequest;for(let t of e)t.xhr=i;e[0].upload.chunked&&(e[0].upload.chunks[t[0].chunkIndex].xhr=i);let s=this.resolveOption(this.options.method,e),n=this.resolveOption(this.options.url,e);i.open(s,n,!0),this.resolveOption(this.options.timeout,e)&&(i.timeout=this.resolveOption(this.options.timeout,e)),i.withCredentials=!!this.options.withCredentials,i.onload=t=>{this._finishedUploading(e,i,t)},i.ontimeout=()=>{this._handleUploadError(e,i,`Request timedout after ${this.options.timeout/1e3} seconds`)},i.onerror=()=>{this._handleUploadError(e,i)},(null!=i.upload?i.upload:i).onprogress=t=>this._updateFilesUploadProgress(e,i,t);let r={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"};this.options.headers&&l()(r,this.options.headers);for(let e in r){let t=r[e];t&&i.setRequestHeader(e,t)}let o=new FormData;if(this.options.params){let t=this.options.params;"function"==typeof t&&(t=t.call(this,e,i,e[0].upload.chunked?this._getChunk(e[0],i):null));for(let e in t){let i=t[e];if(Array.isArray(i))for(let t=0;t<i.length;t++)o.append(e,i[t]);else o.append(e,i)}}for(let t of e)this.emit("sending",t,i,o);this.options.uploadMultiple&&this.emit("sendingmultiple",e,i,o),this._addFormElementData(o);for(let e=0;e<t.length;e++){let i=t[e];o.append(i.name,i.data,i.filename)}this.submitRequest(i,o,e)}_transformFiles(e,t){let i=[],s=0;for(let l=0;l<e.length;l++)this.options.transformFile.call(this,e[l],(n=>{i[l]=n,++s===e.length&&t(i)}))}_addFormElementData(e){if("FORM"===this.element.tagName)for(let t of this.element.querySelectorAll("input, textarea, select, button")){let i=t.getAttribute("name"),s=t.getAttribute("type");if(s&&(s=s.toLowerCase()),null!=i)if("SELECT"===t.tagName&&t.hasAttribute("multiple"))for(let s of t.options)s.selected&&e.append(i,s.value);else(!s||"checkbox"!==s&&"radio"!==s||t.checked)&&e.append(i,t.value)}}_updateFilesUploadProgress(e,t,i){if(e[0].upload.chunked){let s=e[0],l=this._getChunk(s,t);i?(l.progress=100*i.loaded/i.total,l.total=i.total,l.bytesSent=i.loaded):(l.progress=100,l.bytesSent=l.total),s.upload.progress=0,s.upload.total=0,s.upload.bytesSent=0;for(let e=0;e<s.upload.totalChunkCount;e++)s.upload.chunks[e]&&void 0!==s.upload.chunks[e].progress&&(s.upload.progress+=s.upload.chunks[e].progress,s.upload.total+=s.upload.chunks[e].total,s.upload.bytesSent+=s.upload.chunks[e].bytesSent);s.upload.progress=s.upload.progress/s.upload.totalChunkCount,this.emit("uploadprogress",s,s.upload.progress,s.upload.bytesSent)}else for(let t of e)t.upload.total&&t.upload.bytesSent&&t.upload.bytesSent==t.upload.total||(i?(t.upload.progress=100*i.loaded/i.total,t.upload.total=i.total,t.upload.bytesSent=i.loaded):(t.upload.progress=100,t.upload.bytesSent=t.upload.total),this.emit("uploadprogress",t,t.upload.progress,t.upload.bytesSent))}_finishedUploading(e,t,i){let s;if(e[0].status!==a.CANCELED&&4===t.readyState){if("arraybuffer"!==t.responseType&&"blob"!==t.responseType&&(s=t.responseText,t.getResponseHeader("content-type")&&~t.getResponseHeader("content-type").indexOf("application/json")))try{s=JSON.parse(s)}catch(e){i=e,s="Invalid JSON response from server."}this._updateFilesUploadProgress(e,t),200<=t.status&&t.status<300?e[0].upload.chunked?e[0].upload.finishedChunkUpload(this._getChunk(e[0],t),s):this._finished(e,s,i):this._handleUploadError(e,t,s)}}_handleUploadError(e,t,i){if(e[0].status!==a.CANCELED){if(e[0].upload.chunked&&this.options.retryChunks){let i=this._getChunk(e[0],t);if(i.retries++<this.options.retryChunksLimit)return void this._uploadData(e,[i.dataBlock])}this._errorProcessing(e,i||this.options.dictResponseError.replace("{{statusCode}}",t.status),t)}}submitRequest(e,t,i){1==e.readyState&&e.send(t)}_finished(e,t,i){for(let s of e)s.status=a.SUCCESS,this.emit("success",s,t,i),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}_errorProcessing(e,t,i){for(let s of e)s.status=a.ERROR,this.emit("error",s,t,i),this.emit("complete",s);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()}static uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}constructor(e,t){let i,s;if(super(),this.element=e,this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");a.instances.push(this),this.element.dropzone=this;let n=null!=(s=a.optionsForElement(this.element))?s:{};if(this.options=l()(!0,{},o,n,null!=t?t:{}),this.options.previewTemplate=this.options.previewTemplate.replace(/\n*/g,""),this.options.forceFallback||!a.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");if(this.options.uploadMultiple&&this.options.chunking)throw new Error("You cannot set both: uploadMultiple and chunking.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),null!=this.options.renameFilename&&(this.options.renameFile=e=>this.options.renameFilename.call(this,e.name,e)),"string"==typeof this.options.method&&(this.options.method=this.options.method.toUpperCase()),(i=this.getExistingFallback())&&i.parentNode&&i.parentNode.removeChild(i),!1!==this.options.previewsContainer&&(this.options.previewsContainer?this.previewsContainer=a.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(!0===this.options.clickable?this.clickableElements=[this.element]:this.clickableElements=a.getElements(this.options.clickable,"clickable")),this.init()}}a.initClass(),a.options={},a.optionsForElement=function(e){return e.getAttribute("id")?a.options[h(e.getAttribute("id"))]:void 0},a.instances=[],a.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},a.discover=function(){let e;if(document.querySelectorAll)e=document.querySelectorAll(".dropzone");else{e=[];let t=t=>(()=>{let i=[];for(let s of t)/(^| )dropzone($| )/.test(s.className)?i.push(e.push(s)):i.push(void 0);return i})();t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))}return(()=>{let t=[];for(let i of e)!1!==a.optionsForElement(i)?t.push(new a(i)):t.push(void 0);return t})()},a.blockedBrowsers=[/opera.*(Macintosh|Windows Phone).*version\/12/i],a.isBrowserSupported=function(){let e=!0;if(window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a")){void 0!==a.blacklistedBrowsers&&(a.blockedBrowsers=a.blacklistedBrowsers);for(let t of a.blockedBrowsers)if(t.test(navigator.userAgent)){e=!1;continue}}else e=!1;else e=!1;return e},a.dataURItoBlob=function(e){let t=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],s=new ArrayBuffer(t.length),l=new Uint8Array(s);for(let e=0,i=t.length,s=0<=i;s?e<=i:e>=i;s?e++:e--)l[e]=t.charCodeAt(e);return new Blob([s],{type:i})};const d=(e,t)=>e.filter((e=>e!==t)).map((e=>e)),h=e=>e.replace(/[\-_](\w)/g,(e=>e.charAt(1).toUpperCase()));a.createElement=function(e){let t=document.createElement("div");return t.innerHTML=e,t.childNodes[0]},a.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},a.getElement=function(e,t){let i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector or a plain HTML element.`);return i},a.getElements=function(e,t){let i,s;if(e instanceof Array){s=[];try{for(i of e)s.push(this.getElement(i,t))}catch(e){s=null}}else if("string"==typeof e)for(i of(s=[],document.querySelectorAll(e)))s.push(i);else null!=e.nodeType&&(s=[e]);if(null==s||!s.length)throw new Error(`Invalid \`${t}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);return s},a.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},a.isValidFile=function(e,t){if(!t)return!0;t=t.split(",");let i=e.type,s=i.replace(/\/.*$/,"");for(let l of t)if(l=l.trim(),"."===l.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(l.toLowerCase(),e.name.length-l.length))return!0}else if(/\/\*$/.test(l)){if(s===l.replace(/\/.*$/,""))return!0}else if(i===l)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(e){return this.each((function(){return new a(this,e)}))}),a.ADDED="added",a.QUEUED="queued",a.ACCEPTED=a.QUEUED,a.UPLOADING="uploading",a.PROCESSING=a.UPLOADING,a.CANCELED="canceled",a.ERROR="error",a.SUCCESS="success";var u=function(e,t,i,s,l,n,r,o,a,d){let h=function(e){e.naturalWidth;let t=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=t;let s=i.getContext("2d");s.drawImage(e,0,0);let{data:l}=s.getImageData(1,0,1,t),n=0,r=t,o=t;for(;o>n;)0===l[4*(o-1)+3]?r=o:n=o,o=r+n>>1;let a=o/t;return 0===a?1:a}(t);return e.drawImage(t,i,s,l,n,r,o,a,d/h)};class p{static initClass(){this.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}static encode64(e){let t,i,s,l,n,r="",o="",a="",d=0;for(;t=e[d++],i=e[d++],o=e[d++],s=t>>2,l=(3&t)<<4|i>>4,n=(15&i)<<2|o>>6,a=63&o,isNaN(i)?n=a=64:isNaN(o)&&(a=64),r=r+this.KEY_STR.charAt(s)+this.KEY_STR.charAt(l)+this.KEY_STR.charAt(n)+this.KEY_STR.charAt(a),t=i=o="",s=l=n=a="",d<e.length;);return r}static restore(e,t){if(!e.match("data:image/jpeg;base64,"))return t;let i=this.decode64(e.replace("data:image/jpeg;base64,","")),s=this.slice2Segments(i),l=this.exifManipulation(t,s);return`data:image/jpeg;base64,${this.encode64(l)}`}static exifManipulation(e,t){let i=this.getExifArray(t),s=this.insertExif(e,i);return new Uint8Array(s)}static getExifArray(e){let t,i=0;for(;i<e.length;){if(t=e[i],255===t[0]&225===t[1])return t;i++}return[]}static insertExif(e,t){let i=e.replace("data:image/jpeg;base64,",""),s=this.decode64(i),l=s.indexOf(255,3),n=s.slice(0,l),r=s.slice(l),o=n;return o=o.concat(t),o=o.concat(r),o}static slice2Segments(e){let t=0,i=[];for(;;){if(255===e[t]&218===e[t+1])break;if(255===e[t]&216===e[t+1])t+=2;else{let s=t+(256*e[t+2]+e[t+3])+2,l=e.slice(t,s);i.push(l),t=s}if(t>e.length)break}return i}static decode64(e){let t,i,s,l,n,r="",o="",a=0,d=[];for(/[^A-Za-z0-9\+\/\=]/g.exec(e),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s=this.KEY_STR.indexOf(e.charAt(a++)),l=this.KEY_STR.indexOf(e.charAt(a++)),n=this.KEY_STR.indexOf(e.charAt(a++)),o=this.KEY_STR.indexOf(e.charAt(a++)),t=s<<2|l>>4,i=(15&l)<<4|n>>2,r=(3&n)<<6|o,d.push(t),64!==n&&d.push(i),64!==o&&d.push(r),t=i=r="",s=l=n=o="",a<e.length;);return d}}p.initClass()},"7bc13":function(e,t,i){},e0e5:function(e,t){function i(e){return Array.isArray(e)||"[object Object]"=={}.toString.call(e)}function s(e){return!e||"object"!=typeof e&&"function"!=typeof e}e.exports=function e(){var t=[].slice.call(arguments),l=!1;"boolean"==typeof t[0]&&(l=t.shift());var n=t[0];if(s(n))throw new Error("extendee must be an object");for(var r=t.slice(1),o=r.length,a=0;a<o;a++){var d=r[a];for(var h in d)if(Object.prototype.hasOwnProperty.call(d,h)){var u=d[h];if(l&&i(u)){var p=Array.isArray(u)?[]:{};n[h]=e(!0,Object.prototype.hasOwnProperty.call(n,h)&&!s(n[h])?n[h]:p,u)}else n[h]=u}}return n}}}]);