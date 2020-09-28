(this.webpackJsonpdsvisualize=this.webpackJsonpdsvisualize||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(17),r=n.n(l),s=n(9),o=n(2),u=(n(24),function(){var e=Object(o.f)();return i.a.createElement("div",{className:"main-page"},i.a.createElement("h1",{className:"main-page-header"},"Data Structures Visualizer"),i.a.createElement("div",{className:"select-data-structures"},i.a.createElement("div",{className:"data-structures-item sll",onClick:function(){e.push("/sll")}},"Singly Linked List"),i.a.createElement("div",{className:"data-structures-item dll",onClick:function(){e.push("/dll")}},"Doubly Linked List"),i.a.createElement("div",{className:"data-structures-item stack",onClick:function(){e.push("/stack")}},"Stack"),i.a.createElement("div",{className:"data-structures-item queue",onClick:function(){e.push("/queue")}},"Queue"),i.a.createElement("div",{className:"data-structures-item bst",onClick:function(){e.push("/bst")}},"Binary Search Tree")))}),c=n(1),h=function(){var e=Object(o.f)();return i.a.createElement("div",{className:"return-to-home",onClick:function(){e.push("/")}},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",className:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},i.a.createElement("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})),i.a.createElement("span",null,"HOME"))},f=function(e){var t=e.nodes,n=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=n.current,a=e.getContext("2d"),i=e.offsetWidth,r=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=i,e.height=r,l(a,t,i,r)}),[t]);var l=function(e,t,n,a){var i,l,u,c,h,f,d,m=20;n>=1408?(i=.17*n,l=.2*a,u=.01*n,c=.05*a,h=.1*n,f=.15*a,m=22,d=24):n>=992?(i=.1682*n,l=.1748*a,u=.01*n,c=.05*a,h=.1024*n,f=.1878*a,d=22):n>=736?(i=.1502*n,l=.1748*a,u=.01*n,c=.05*a,h=.1264*n,f=.1878*a,d=18):n>=393?(i=.1799*n,l=.19*a,u=.01*n,c=.05*a,h=.0868*n,f=.165*a,d=16):(i=.1883*n,l=.1934*a,u=.01*n,c=.05*a,h=.0756*n,f=.1599*a,d=14);var v=t.length,p=.8*i;t.forEach((function(t,b){if(e.strokeStyle="#003FFF",e.fillStyle="#000",e.textAlign="start",e.shadowBlur=2,e.font="normal ".concat(d,"px sans-serif"),b<4){var g=u+(i+h)*b,E=c,y=u+.1*i+(i+h)*b,x=c+.25*l;if(e.strokeRect(g,E,i,l),o(e,t,y,x,m,p),e.fillStyle="red",0===b){var k=e.measureText("head").width,T=u+(i-k)/2,N=.8*c;e.fillText("head",T,N)}if(0!==b){var O=c+.5*l;r(e,u+i+(h+i)*(b-1),O,u+(i+h)*b,O)}if(b===v-1){e.fillStyle="red";var j=e.measureText("tail").width,S=u+(i-j)/2+(i+h)*b,w=1.65*c+l;e.fillText("tail",S,w)}}else if(b>=4&&b<8){var C=n-(u+i)-(h+i)*(b-4),I=c+l+f,z=n-(u+.9*i)-(h+i)*(b-4),M=c+1.25*l+f;if(e.strokeRect(C,I,i,l),o(e,t,z,M,m,p),4!==b){var P=c+1.5*l+f;s(e,n-u-(i+h)*(b-4),P,n-(u+i)-(h+i)*(b-5),P)}else{var R=n-u-.5*i;r(e,R,c+l,R,c+l+f)}if(b===v-1){e.fillStyle="red";var A=e.measureText("tail").width,F=n-u-A-(i-A)/2-(i+h)*(b-4),q=1.8*c+2*l+f;e.fillText("tail",F,q)}}else if(b>=8){var L=u+(i+h)*(b-8),D=c+2*l+2*f,W=u+.1*i+(i+h)*(b-8),H=a-(c+.75*l);if(e.strokeRect(L,D,i,l),o(e,t,W,H,m,p),8!==b){var V=a-(c+.5*l);r(e,u+i+(h+i)*(b-9),V,u+(i+h)*(b-8),V)}else{var U=u+.5*i;r(e,U,a-(c+l+f),U,a-(c+l))}if(b===v-1){e.fillStyle="red";var B=e.measureText("tail").width,Q=u+(i-B)/2+(i+h)*(b-8),J=1.65*c+3*l+2*f;e.fillText("tail",Q,J)}}}))},r=function(e,t,n,a,i){e.beginPath();var l=a-t,r=i-n,s=Math.atan2(r,l);e.strokeStyle="#000",e.moveTo(t,n),e.lineTo(a,i),e.lineTo(a-9*Math.cos(s-Math.PI/6),i-9*Math.sin(s-Math.PI/6)),e.moveTo(a,i),e.lineTo(a-9*Math.cos(s+Math.PI/6),i-9*Math.sin(s+Math.PI/6)),e.stroke()},s=function(e,t,n,a,i){e.beginPath();var l=t-a,r=n-i,s=Math.atan2(r,l);e.strokeStyle="#000",e.moveTo(a,i),e.lineTo(t,n),e.lineTo(t-9*Math.cos(s-Math.PI/6),n-9*Math.sin(s-Math.PI/6)),e.moveTo(t,n),e.lineTo(t-9*Math.cos(s+Math.PI/6),n-9*Math.sin(s+Math.PI/6)),e.stroke()};function o(e,t,n,a,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(l<=0)e.fillText(t,n,a);else{for(var s=1;s<=t.length;s++){var u=t.substr(0,s);if(e.measureText(u).width>l)return r<5?e.fillText(t.substr(0,s-1),n,a):e.fillText("",n,a),void o(e,t.substr(s-1),n,a+i,i,l,r+1)}r<5?e.fillText(t,n,a):e.fillText("",n,a)}}return i.a.createElement("canvas",{ref:n})},d=n(8),m=n(4),v=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(m.a)(this,e),this.next=n,this.data=t},p=new(function(){function e(){Object(m.a)(this,e),this.head=null,this.tail=null,this.length=0}return Object(d.a)(e,[{key:"append",value:function(e){var t=new v(e);0===this.length?this.head=this.tail=t:(this.tail.next=t,this.tail=t),this.length++}},{key:"pop",value:function(){if(0===this.length)return console.log("The list is empty. Cannot pop()");if(1===this.length)this.head=this.tail=null;else{for(var e=this.head;e.next!==this.tail;)e=e.next;e.next=null,this.tail=e}this.length--}},{key:"unshift",value:function(e){var t=new v(e);0===this.length?this.head=this.tail=t:(t.next=this.head,this.head=t),this.length++}},{key:"shift",value:function(){if(0===this.length)return console.log("The list is empty. Cannot shift()");1===this.length?this.head=this.tail=null:this.head=this.head.next,this.length--}},{key:"insertAt",value:function(e,t){if(e<0||e>this.length)return console.log("Insert index out of bounds."),-1;if(0===e)return this.unshift(t);if(e===this.length)return this.append(t);for(var n=new v(t),a=this.head,i=0;i<e-1;i++)a=a.next;n.next=a.next,a.next=n,this.length++}},{key:"removeAt",value:function(e){if(e<0||e>=this.length)return console.log("Remove index out of bounds."),-1;if(0===e)return this.shift();if(e===this.length-1)return this.pop();for(var t=this.head,n=0;n<e-1;n++)t=t.next;t.next=t.next.next,this.length--}},{key:"clear",value:function(){if(0===this.length)return console.log("The list is empty. Cannot clear()");this.head=this.tail=0,this.length=0}},{key:"print",value:function(){if(0===this.length)return console.log("The list is empty.");for(var e=this.head;e;)console.log(e.data),e=e.next}},{key:"getLength",value:function(){return this.length}},{key:"getAllNodesForRender",value:function(){for(var e=[],t=this.head;t;)e.push(t.data),t=t.next;return e}}]),e}()),b=(n(30),function(){var e=Object(o.g)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],r=n[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),d=u[0],m=u[1],v=Object(a.useState)(!1),b=Object(c.a)(v,2),g=b[0],E=b[1],y=Object(a.useState)(""),x=Object(c.a)(y,2),k=x[0],T=x[1],N=Object(a.useState)(""),O=Object(c.a)(N,2),j=O[0],S=O[1];Object(a.useEffect)((function(){p.clear(),w()}),[e]),Object(a.useEffect)((function(){E(d>=12)}),[d]);var w=function(){r(p.getAllNodesForRender()),m(p.getLength()),T(""),S("")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("div",{className:"singly-linked-list"},i.a.createElement("h1",{className:"sll-header"},"Singly Linked List"),i.a.createElement("div",{className:"sll-actions"},i.a.createElement("div",{className:"sll-length"},"Length: ",i.a.createElement("span",{style:function(){if(g)return{color:"red"}}()},d)," / 12"),i.a.createElement("div",{className:"sll-input"},i.a.createElement("label",{className:"sll-input-label"},"Index:",i.a.createElement("input",{className:"sll-input-field",type:"text",value:j,onChange:function(e){S(e.target.value)}})),i.a.createElement("label",{className:"sll-input-label"},"Data:",i.a.createElement("input",{className:"sll-input-field",type:"text",value:k,onChange:function(e){T(e.target.value)}}))),i.a.createElement("div",{className:"sll-buttons"},i.a.createElement("button",{className:"btn btn-sll-append",type:"button",onClick:function(){if(""===k.trim())return alert("Please input valid data.");p.append(k),w()},disabled:g},"APPEND"),i.a.createElement("button",{className:"btn btn-sll-pop",type:"button",onClick:function(){if(0===d)return alert("The list is empty.");p.pop(),w()}},"POP"),i.a.createElement("button",{className:"btn btn-sll-unshift",type:"button",onClick:function(){if(""===k.trim())return alert("Please input valid data");p.unshift(k),w()},disabled:g},"UNSHIFT"),i.a.createElement("button",{className:"btn btn-sll-shift",type:"button",onClick:function(){if(0===d)return alert("The list is empty.");p.shift(),w()}},"SHIFT"),i.a.createElement("button",{className:"btn btn-sll-insertAt",type:"button",onClick:function(){return""===j.trim()||isNaN(parseInt(j))?alert("Please input valid index"):""===k.trim()?alert("Please input valid data"):-1===p.insertAt(parseInt(j),k)?alert("Index out of bounds."):void w()},disabled:g},"INSERT AT"),i.a.createElement("button",{className:"btn btn-sll-removeAt",type:"button",onClick:function(){return""===j.trim()||isNaN(parseInt(j))?alert("Please input valid index"):-1===p.removeAt(parseInt(j))?alert("Index out of bounds."):void w()}},"REMOVE AT"),i.a.createElement("button",{className:"btn btn-sll-clear",type:"button",onClick:function(){if(0===d)return alert("The list is empty.");window.confirm("Would you clear the list?")&&(p.clear(),w())}},"CLEAR"))),i.a.createElement("div",{className:"node-items"},i.a.createElement(f,{nodes:l}))))}),g=function(e){var t=e.nodes,n=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=n.current,a=e.getContext("2d"),i=e.offsetWidth,r=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=i,e.height=r,l(a,t,i,r)}),[t]);var l=function(e,t,n,a){var i,l,u,c,h,f,d,m=20;n>=1408?(i=.17*n,l=.2*a,u=.01*n,c=.05*a,h=.1*n,f=.15*a,m=22,d=24):n>=992?(i=.1682*n,l=.1748*a,u=.01*n,c=.05*a,h=.1024*n,f=.1878*a,d=22):n>=736?(i=.1502*n,l=.1748*a,u=.01*n,c=.05*a,h=.1264*n,f=.1878*a,d=18):n>=393?(i=.1799*n,l=.19*a,u=.01*n,c=.05*a,h=.0868*n,f=.165*a,d=16):(i=.1883*n,l=.1934*a,u=.01*n,c=.05*a,h=.0756*n,f=.1599*a,d=14);var v=t.length,p=.8*i;t.forEach((function(t,b){if(e.strokeStyle="#003FFF",e.fillStyle="#000",e.textAlign="start",e.shadowBlur=2,e.font="normal ".concat(d,"px sans-serif"),b<4){var g=u+(i+h)*b,E=c,y=u+.1*i+(i+h)*b,x=c+.25*l;if(e.strokeRect(g,E,i,l),o(e,t,y,x,m,p),e.fillStyle="red",0===b){var k=e.measureText("head").width,T=u+(i-k)/2,N=.8*c;e.fillText("head",T,N)}if(0!==b){var O=u+i+(h+i)*(b-1),j=c+.333*l,S=u+(i+h)*b,w=c+.667*l;r(e,O,j,S,j),s(e,O,w,S,w)}if(b===v-1){e.fillStyle="red";var C=e.measureText("tail").width,I=u+(i-C)/2+(i+h)*b,z=1.65*c+l;e.fillText("tail",I,z)}}else if(b>=4&&b<8){var M=n-(u+i)-(h+i)*(b-4),P=c+l+f,R=n-(u+.9*i)-(h+i)*(b-4),A=c+1.25*l+f;if(e.strokeRect(M,P,i,l),o(e,t,R,A,m,p),4!==b){var F=n-u-(i+h)*(b-4),q=c+1.333*l+f,L=n-(u+i)-(h+i)*(b-5),D=c+1.667*l+f;r(e,F,q,L,q),s(e,F,D,L,D)}else{var W=n-u-.667*i,H=n-u-.333*i,V=c+l,U=c+l+f;r(e,W,V,W,U),s(e,H,V,H,U)}if(b===v-1){e.fillStyle="red";var B=e.measureText("tail").width,Q=n-u-B-(i-B)/2-(i+h)*(b-4),J=1.8*c+2*l+f;e.fillText("tail",Q,J)}}else if(b>=8){var G=u+(i+h)*(b-8),K=c+2*l+2*f,X=u+.1*i+(i+h)*(b-8),Y=a-(c+.75*l);if(e.strokeRect(G,K,i,l),o(e,t,X,Y,m,p),8!==b){var Z=u+i+(h+i)*(b-9),$=a-(c+.667*l),_=u+(i+h)*(b-8),ee=a-(c+.333*l);r(e,Z,$,_,$),s(e,Z,ee,_,ee)}else{var te=u+.333*i,ne=u+.667*i,ae=a-(c+l+f),ie=a-(c+l);r(e,te,ae,te,ie),s(e,ne,ae,ne,ie)}if(b===v-1){e.fillStyle="red";var le=e.measureText("tail").width,re=u+(i-le)/2+(i+h)*(b-8),se=1.65*c+3*l+2*f;e.fillText("tail",re,se)}}}))},r=function(e,t,n,a,i){e.beginPath();var l=a-t,r=i-n,s=Math.atan2(r,l);e.strokeStyle="#000",e.moveTo(t,n),e.lineTo(a,i),e.lineTo(a-9*Math.cos(s-Math.PI/6),i-9*Math.sin(s-Math.PI/6)),e.moveTo(a,i),e.lineTo(a-9*Math.cos(s+Math.PI/6),i-9*Math.sin(s+Math.PI/6)),e.stroke()},s=function(e,t,n,a,i){e.beginPath();var l=t-a,r=n-i,s=Math.atan2(r,l);e.strokeStyle="#000",e.moveTo(a,i),e.lineTo(t,n),e.lineTo(t-9*Math.cos(s-Math.PI/6),n-9*Math.sin(s-Math.PI/6)),e.moveTo(t,n),e.lineTo(t-9*Math.cos(s+Math.PI/6),n-9*Math.sin(s+Math.PI/6)),e.stroke()};function o(e,t,n,a,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(l<=0)e.fillText(t,n,a);else{for(var s=1;s<=t.length;s++){var u=t.substr(0,s);if(e.measureText(u).width>l)return r<5?e.fillText(t.substr(0,s-1),n,a):e.fillText("",n,a),void o(e,t.substr(s-1),n,a+i,i,l,r+1)}r<5?e.fillText(t,n,a):e.fillText("",n,a)}}return i.a.createElement("canvas",{ref:n})},E=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(m.a)(this,e),this.prev=n,this.next=a,this.data=t},y=new(function(){function e(){Object(m.a)(this,e),this.head=null,this.tail=null,this.length=0}return Object(d.a)(e,[{key:"append",value:function(e){var t=new E(e);0===this.length?this.head=this.tail=t:(t.prev=this.tail,this.tail.next=t,this.tail=t),this.length++}},{key:"pop",value:function(){0!==this.length?(1===this.length?this.head=this.tail=null:(this.tail.prev.next=null,this.tail=this.tail.prev),this.length--):console.log("The list is empty. Cannot pop().")}},{key:"unshift",value:function(e){var t=new E(e);0===this.length?this.head=this.tail=t:(t.next=this.head,this.head.prev=t,this.head=t),this.length++}},{key:"shift",value:function(){0!==this.length?(1===this.length?this.head=this.tail=null:(this.head.next.prev=null,this.head=this.head.next),this.length--):console.log("The list is empty. Cannot shift().")}},{key:"insertAt",value:function(e,t){if(e<0||e>this.length)return console.log("Insert index out of bounds."),-1;if(0===e)return this.unshift(t);if(e===this.length)return this.append(t);for(var n=new E(t),a=this.head,i=0;i<e-1;i++)a=a.next;n.prev=a,n.next=a.next,a.next.prev=n,a.next=n,this.length++}},{key:"removeAt",value:function(e){if(e<0||e>=this.length)return console.log("Remove index out of bounds."),-1;if(0!==this.length){if(0===e)return this.shift();if(e===this.length-1)return this.pop();for(var t=this.head,n=0;n<e-1;n++)t=t.next;t.next=t.next.next,t.next.next.prev=t,this.length--}else console.log("The list is empty. Cannot removeAt().")}},{key:"search",value:function(e){for(var t=this.head,n=0;t;){if(t.data===e)return n;t=t.next,n++}return null}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"print",value:function(){for(var e=this.head;e;)console.log(e.data),e=e.next}},{key:"getLength",value:function(){return this.length}},{key:"getAllNodesForRender",value:function(){for(var e=[],t=this.head;t;)e.push(t.data),t=t.next;return e}}]),e}()),x=(n(31),function(){var e=Object(o.g)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],r=n[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),f=u[0],d=u[1],m=Object(a.useState)(!1),v=Object(c.a)(m,2),p=v[0],b=v[1],E=Object(a.useState)(""),x=Object(c.a)(E,2),k=x[0],T=x[1],N=Object(a.useState)(""),O=Object(c.a)(N,2),j=O[0],S=O[1];Object(a.useEffect)((function(){y.clear(),w()}),[e]),Object(a.useEffect)((function(){b(f>=12)}),[f]);var w=function(){r(y.getAllNodesForRender()),d(y.getLength()),T(""),S("")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("div",{className:"doubly-linked-list"},i.a.createElement("h1",{className:"dll-header"},"Doubly Linked List"),i.a.createElement("div",{className:"dll-actions"},i.a.createElement("div",{className:"dll-length"},"Length: ",i.a.createElement("span",{style:function(){if(p)return{color:"red"}}()},f)," / 12"),i.a.createElement("div",{className:"dll-input"},i.a.createElement("label",{className:"dll-input-label"},"Index:",i.a.createElement("input",{className:"dll-input-field",type:"text",value:j,onChange:function(e){S(e.target.value)}})),i.a.createElement("label",{className:"dll-input-label"},"Data:",i.a.createElement("input",{className:"dll-input-field",type:"text",value:k,onChange:function(e){T(e.target.value)}}))),i.a.createElement("div",{className:"dll-buttons"},i.a.createElement("button",{className:"btn btn-dll-append",type:"button",onClick:function(){if(""===k.trim())return alert("Please input valid data.");y.append(k),w()},disabled:p},"APPEND"),i.a.createElement("button",{className:"btn btn-dll-pop",type:"button",onClick:function(){if(0===f)return alert("The list is empty.");y.pop(),w()}},"POP"),i.a.createElement("button",{className:"btn btn-dll-unshift",type:"button",onClick:function(){if(""===k.trim())return alert("Please input valid data");y.unshift(k),w()},disabled:p},"UNSHIFT"),i.a.createElement("button",{className:"btn btn-dll-shift",type:"button",onClick:function(){if(0===f)return alert("The list is empty.");y.shift(),w()}},"SHIFT"),i.a.createElement("button",{className:"btn btn-dll-insertAt",type:"button",onClick:function(){return""===j.trim()||isNaN(parseInt(j))?alert("Please input valid index"):""===k.trim()?alert("Please input valid data"):-1===y.insertAt(parseInt(j),k)?alert("Index out of bounds."):void w()},disabled:p},"INSERT AT"),i.a.createElement("button",{className:"btn btn-dll-removeAt",type:"button",onClick:function(){return""===j.trim()||isNaN(parseInt(j))?alert("Please input valid index"):-1===y.removeAt(parseInt(j))?alert("Index out of bounds."):void w()}},"REMOVE AT"),i.a.createElement("button",{className:"btn btn-dll-clear",type:"button",onClick:function(){if(0===f)return alert("The list is empty.");window.confirm("Would you like to clear the list?")&&(y.clear(),w())}},"CLEAR"))),i.a.createElement("div",{className:"node-items"},i.a.createElement(g,{nodes:l}))))}),k=function(e){var t=e.stackItems,n=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=n.current,t=e.getContext("2d"),a=e.offsetWidth,i=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=a,e.height=i,l(t,a,i)}),[t]);var l=function(e,n,a){var i,l,o,u;n>=1408?(i=.35*n,l=.025*a,o=.3*n,u=.95*a):n>=992?(i=.25*n,l=.025*a,o=.5*n,u=.95*a):n>=736?(i=.2*n,l=.025*a,o=.6*n,u=.95*a):n>=393?(i=.17*n,l=.025*a,o=.66*n,u=.95*a):(i=.13*n,l=.025*a,o=.74*n,u=.95*a),t.forEach((function(t,n){e.textAlign="start",e.font="normal ".concat(14,"px sans-serif"),0===n&&r(e,i,l,o,u);var c=.01*u,h=.88*o,f=.09*u;s(e,h,f,i+.06*o,a-l-(c+f)*(n+1)),function e(t,n,a,i,l){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(t.fillStyle="#000",r<=0)return void t.fillText(n,a,i);for(var o=1;o<=n.length;o++){var u=n.substr(0,o);if(t.measureText(u).width>r)return s<3?t.fillText(n.substr(0,o-1),a,i):t.fillText("",a,i),void e(t,n.substr(o-1),a,i+l,l,r,s+1)}s<3?t.fillText(n,a,i):t.fillText("",a,i)}(e,t,i+.1*o,a-l-(c+.7*f)-(c+f)*n,18,.9*h)}))},r=function(e,t,n,a,i){e.lineWidth=7,e.moveTo(t,n),e.lineTo(t,n+i),e.moveTo(t-3.5,n+i),e.lineTo(t+a+3.5,n+i),e.moveTo(t+a,n+i),e.lineTo(t+a,n),e.stroke()},s=function(e,t,n,a,i){e.fillStyle="#F18677",e.fillRect(a,i,t,n)};return i.a.createElement("canvas",{ref:n})},T=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(m.a)(this,e),this.data=t,this.prev=n,this.next=a},N=new(function(){function e(){Object(m.a)(this,e),this.top=null,this.size=0}return Object(d.a)(e,[{key:"push",value:function(e){var t=new T(e);0===this.size||(t.prev=this.top,this.top.next=t),this.top=t,this.size++}},{key:"pop",value:function(){if(0===this.size)return console.log("The stack is empty. Cannot pop().");1===this.size?this.top=null:(this.top=this.top.prev,this.top.next=null),this.size--}},{key:"getSize",value:function(){return this.size}},{key:"peek",value:function(){return this.top.data}},{key:"print",value:function(){for(var e=this.top;null!==e;)console.log(e.data),e=e.prev}},{key:"clear",value:function(){if(0===this.size)return console.log("The stack is empty. Cannot clear().");this.top=null,this.size=0}},{key:"getAllNodesForRender",value:function(){for(var e=[],t=this.top;t;)e.push(t.data),t=t.prev;return e.reverse()}}]),e}()),O=(n(32),function(){var e=Object(o.g)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],r=n[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),f=u[0],d=u[1],m=Object(a.useState)(!1),v=Object(c.a)(m,2),p=v[0],b=v[1],g=Object(a.useState)(""),E=Object(c.a)(g,2),y=E[0],x=E[1];Object(a.useEffect)((function(){N.clear(),T()}),[e]),Object(a.useEffect)((function(){b(f>=10)}),[f]);var T=function(){r(N.getAllNodesForRender()),d(N.getSize()),x("")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("div",{className:"stack-container"},i.a.createElement("h1",{className:"stack-header"},"Stack"),i.a.createElement("div",{className:"stack-actions"},i.a.createElement("div",{className:"stack-size"},"Size: ",i.a.createElement("span",{style:function(){if(p)return{color:"red"}}()},f)," / 10"),i.a.createElement("div",{className:"stack-input"},i.a.createElement("label",{className:"stack-input-label"},"Data:",i.a.createElement("input",{className:"stack-input-field",type:"text",value:y,onChange:function(e){x(e.target.value)}}))),i.a.createElement("div",{className:"stack-buttons"},i.a.createElement("button",{className:"btn btn-stack-push",type:"button",onClick:function(){if(""===y.trim())return alert("Please input valid data.");N.push(y),T()},disabled:p},"PUSH"),i.a.createElement("button",{className:"btn btn-stack-pop",type:"button",onClick:function(){if(0===f)return alert("The stack is empty.");N.pop(),T()}},"POP"),i.a.createElement("button",{className:"btn btn-stack-clear",type:"button",onClick:function(){if(0===f)return alert("The stack is empty.");window.confirm("Would you like to clear the stack?")&&(N.clear(),T())}},"CLEAR"))),i.a.createElement("div",{className:"stack-items"},i.a.createElement(k,{stackItems:l}))))}),j=function(e){var t=e.queueItems,n=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=n.current,t=e.getContext("2d"),a=e.offsetWidth,i=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=a,e.height=i,l(t,a,i)}),[t]);var l=function(e,n,a){var i,l,c,h;n>=1408?(i=.1*n,l=.1*a,c=.8*n,h=.5*a):n>=992?(i=.08*n,l=.1*a,c=.84*n,h=.5*a):n>=736?(i=.06*n,l=.1*a,c=.88*n,h=.5*a):n>=393?(i=.03*n,l=.1*a,c=.94*n,h=.5*a):(i=.02*n,l=.1*a,c=.96*n,h=.5*a);var f=t.length-1;t.forEach((function(t,n){e.textAlign="start",e.font="normal ".concat(16,"px sans-serif");var a=.01*c,d=.091*c,m=.86*h,v=i+(a+d)*n,p=l+.07*h;0===n&&(r(e,i,l,c,h),o(e,i,l-10,d)),s(e,d,m,v,p),function e(t,n,a,i,l){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(t.fillStyle="#000",r<=0)return void t.fillText(n,a,i);for(var o=1;o<=n.length;o++){var u=n.substr(0,o);if(t.measureText(u).width>r)return s<15?t.fillText(n.substr(0,o-1),a,i):t.fillText("",a,i),void e(t,n.substr(o-1),a,i+l,l,r,s+1)}s<15?t.fillText(n,a,i):t.fillText("",a,i)}(e,t,i+.07*d+(a+d)*n,l+.15*h,18,.9*d),n===f&&u(e,i,l,d,a,h,n)}))},r=function(e,t,n,a,i){e.lineWidth=7,e.moveTo(t,n),e.lineTo(t+a,n),e.moveTo(t,n+i),e.lineTo(t+a,n+i),e.stroke()},s=function(e,t,n,a,i){e.fillStyle="#F18677",e.fillRect(a,i,t,n)};var o=function(e,t,n,a){e.fillStyle="red";var i=t+(a-e.measureText("front").width)/2,l=n;e.fillText("Front",i,l)},u=function(e,t,n,a,i,l,r){e.fillStyle="red";var s=t+(a-e.measureText("Rear").width)/2+(i+a)*r,o=n+l+20;e.fillText("Rear",s,o)};return i.a.createElement("canvas",{ref:n})},S=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(m.a)(this,e),this.data=t,this.prev=null,this.next=null},w=new(function(){function e(){Object(m.a)(this,e),this.front=null,this.rear=null,this.size=0}return Object(d.a)(e,[{key:"enqueue",value:function(e){var t=new S(e);0===this.size?(this.front=this.rear=t,t.next=t.prev=t):(t.next=this.front,t.prev=this.rear,this.rear.next=t,this.front.prev=t,this.rear=t),this.size++}},{key:"dequeue",value:function(){if(0===this.size)return console.log("The queue is empty. Cannot dequeue().");1===this.size?this.front=this.rear=null:(this.front.next.prev=this.rear,this.rear.next=this.front.next,this.front=this.front.next),this.size--}},{key:"getSize",value:function(){return this.size}},{key:"print",value:function(){if(0===this.size)return console.log("The queue is empty.");var e=this.front;do{console.log(e.data),e=e.next}while(e!==this.front)}},{key:"clear",value:function(){if(0===this.size)return console.log("The queue is empty. Cannot clear().");this.front=this.rear=null,this.size=0}},{key:"getAllNodesForRender",value:function(){var e=[],t=this.front;if(t)do{e.push(t.data),t=t.next}while(t!==this.front);return e}}]),e}()),C=(n(33),function(){var e=Object(o.g)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],r=n[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),f=u[0],d=u[1],m=Object(a.useState)(!1),v=Object(c.a)(m,2),p=v[0],b=v[1],g=Object(a.useState)(""),E=Object(c.a)(g,2),y=E[0],x=E[1];Object(a.useEffect)((function(){w.clear(),k()}),[e]),Object(a.useEffect)((function(){b(f>=10)}),[f]);var k=function(){r(w.getAllNodesForRender()),d(w.getSize()),x("")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("div",{className:"queue-container"},i.a.createElement("h1",{className:"queue-header"},"Queue"),i.a.createElement("div",{className:"queue-actions"},i.a.createElement("div",{className:"queue-size"},"Size: ",i.a.createElement("span",{style:function(){if(p)return{color:"red"}}()},f)," / 10"),i.a.createElement("div",{className:"queue-input"},i.a.createElement("label",{className:"queue-input-label"},"Data:",i.a.createElement("input",{className:"queue-input-field",type:"text",value:y,onChange:function(e){x(e.target.value)}}))),i.a.createElement("div",{className:"queue-buttons"},i.a.createElement("button",{className:"btn btn-queue-push",type:"button",onClick:function(){if(""===y.trim())return alert("Please input valid data.");w.enqueue(y),k()},disabled:p},"ENQUEUE"),i.a.createElement("button",{className:"btn btn-queue-pop",type:"button",onClick:function(){if(0===f)return alert("The queue is empty.");w.dequeue(),k()}},"DEQUEUE"),i.a.createElement("button",{className:"btn btn-queue-clear",type:"button",onClick:function(){if(0===f)return alert("The queue is empty.");window.confirm("Would you like to clear the queue?")&&(w.clear(),k())}},"CLEAR"))),i.a.createElement("div",{className:"queue-items"},i.a.createElement(j,{queueItems:l}))))}),I=function(e){var t=e.bstItems,n=Object(a.useRef)();Object(a.useEffect)((function(){var e=n.current,a=e.getContext("2d"),i=e.offsetWidth,o=e.offsetHeight;e.style.width="100%",e.style.height="100%",e.width=i,e.height=o,t.forEach((function(e,t){var n,o=Math.pow(2,e.depth);i>=1408?n=30:i>=992?n=27:i>=736&&(n=23);var u=n+(i-2*n*o)/Math.pow(2,e.depth+1),c=2*n+10,h=n+120,f=0;0!==t&&(f=(i-2*u)/(Math.pow(2,e.depth)-1));var d=u+f*e.pos,m=c+h*e.depth;if(l(a,d,m,n),r(a,e.data,d,m+3),0!==e.depth){var v,p,b=m-5.8*e.depth,g=m-h+5.8*e.depth;e.pos%2===0?(v=d+n-3*e.depth,p=d-n+f/2+5.2*e.depth):(v=d-n+3*e.depth,p=d+n-f/2-5.2*e.depth),s(a,v,b,p,g)}}))}),[t]);var l=function(e,t,n,a){e.fillStyle="#0F4D43",e.beginPath(),e.arc(t,n,a,0,2*Math.PI),e.closePath(),e.fill()},r=function(e,t,n,a){e.fillStyle="#fff",e.textAlign="center",e.font="normal 16px sans-serif",e.fillText(t,n,a)},s=function(e,t,n,a,i){e.lineWidth=2,e.beginPath(),e.moveTo(t,n),e.lineTo(a,i),e.stroke()};return i.a.createElement("canvas",{ref:n})},z=function e(t){Object(m.a)(this,e),this.data=t,this.left=null,this.right=null,this.parent=null},M=new(function(){function e(){Object(m.a)(this,e),this.size=0,this.root=null}return Object(d.a)(e,[{key:"insert",value:function(e){var t=new z(e);if(!this.root)return this.root=t,this.size++,!0;for(var n=this.root;n;)if(n.data>e){if(!n.left)return n.left=t,t.parent=n,this.size++,!0;n=n.left}else if(n.data<e){if(!n.right)return n.right=t,t.parent=n,this.size++,!0;n=n.right}else n=null;return!1}},{key:"remove",value:function(e){if(0===this.size)return console.log("The tree is empty. Cannot remove()."),!1;for(var t=this.root;t&&t.data!==e;)t=t.data>e?t.left:t.right;if(!t)return console.log("The remove data does not exist. Cannot remove()."),!1;if(this.isLeaf(t))return t===this.root?(this.root=null,this.size--,!0):(t.parent.left===t?t.parent.left=null:t.parent.right=null,this.size--,!0);if(t.left&&!t.right)return t===this.root?this.root=t.left:t.parent.left===t?t.parent.left=t.left:t.parent.right=t.left,this.size--,!0;if(!t.left&&t.right)return t===this.root?this.root=t.right:t.parent.left===t?t.parent.left=t.right:t.parent.right=t.right,this.size--,!0;for(var n=t.right;n.left;)n=n.left;return t.data=n.data,n.right?n.parent.left===n?n.parent.left=n.right:n.parent.right=n.right:n.parent.left===n?n.parent.left=null:n.parent.right=null,this.size--,!0}},{key:"search",value:function(e){if(0===this.size)return console.log("The tree is empty. Cannot search().");for(var t=this.root;t;){if(t.data===e)return!0;t=t.data>e?t.left:t.right}return!1}},{key:"isInternal",value:function(e){return!(!e.left&&!e.right)}},{key:"isLeaf",value:function(e){return!e.left&&!e.right}},{key:"getRoot",value:function(){return this.root}},{key:"getSize",value:function(){return this.size}},{key:"preOrder",value:function(e){e&&(console.log(e.data),this.preOrder(e.left),this.preOrder(e.right))}},{key:"inOrder",value:function(e){e&&(this.inOrder(e.left),console.log(e.data),this.inOrder(e.right))}},{key:"postOrder",value:function(e){e&&(this.postOrder(e.left),this.postOrder(e.right),console.log(e.data))}},{key:"clear",value:function(){if(0===this.size)return console.log("The tree is empty. Cannot clear().");this.size=0,this.root=null}},{key:"getMaxDepth",value:function(e){if(!e)return 0;var t=this.getMaxDepth(e.left),n=this.getMaxDepth(e.right);return e===this.root?t>n?t:n:t>n?t+1:n+1}},{key:"getAllNodesForRender",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;e&&(t.push({data:e.data,depth:n,pos:a}),this.getAllNodesForRender(e.left,t,n+1,2*a),this.getAllNodesForRender(e.right,t,n+1,2*a+1))}}]),e}()),P=(n(34),function(){var e=Object(o.g)(),t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],r=n[1],s=Object(a.useState)(0),u=Object(c.a)(s,2),f=u[0],d=u[1],m=Object(a.useState)(0),v=Object(c.a)(m,2),p=v[0],b=v[1],g=Object(a.useState)(!1),E=Object(c.a)(g,2),y=E[0],x=E[1],k=Object(a.useState)(!1),T=Object(c.a)(k,2),N=T[0],O=T[1],j=Object(a.useState)(""),S=Object(c.a)(j,2),w=S[0],C=S[1];Object(a.useEffect)((function(){M.clear(),z()}),[e]),Object(a.useEffect)((function(){x(f>=31)}),[f]),Object(a.useEffect)((function(){O(p>=4)}),[p]);var z=function(){var e=[];M.getAllNodesForRender(M.getRoot(),e),r(e.sort(R).sort(A)),d(M.getSize()),b(M.getMaxDepth(M.getRoot())),C("")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("div",{className:"bst-container"},i.a.createElement("h1",{className:"bst-header"},"Binary Search Tree"),i.a.createElement("div",{className:"bst-actions"},i.a.createElement("div",{className:"bst-size"},"Size: ",i.a.createElement("span",{style:function(){if(y)return{color:"red"}}()},f)," / 31"),i.a.createElement("div",{className:"bst-size"},"Depth: ",i.a.createElement("span",{style:function(){if(N)return{color:"red"}}()},p)," / 4"),i.a.createElement("div",{className:"bst-input"},i.a.createElement("label",{className:"bst-input-label"},"Data:",i.a.createElement("input",{className:"bst-input-field",type:"text",value:w,onChange:function(e){C(e.target.value)}}))),i.a.createElement("div",{className:"bst-buttons"},i.a.createElement("button",{className:"btn btn-bst-insert",type:"button",onClick:function(){if(""===w.trim())return alert("Please input valid data.");if(N&&!y){M.insert(parseInt(w));var e=M.getMaxDepth(M.getRoot());return M.remove(parseInt(w)),e>4?alert("Out of the maximum depth. Please try another data."):(M.insert(parseInt(w)),void z())}M.insert(parseInt(w)),z()},disabled:y},"INSERT"),i.a.createElement("button",{className:"btn btn-bst-remove",type:"button",onClick:function(){return 0===f?alert("The tree is empty."):""===w.trim()?alert("Please input valid data."):(M.remove(parseInt(w)),void z())}},"REMOVE"),i.a.createElement("button",{className:"btn btn-bst-clear",type:"button",onClick:function(){if(0===f)return alert("The tree is empty.");window.confirm("Would you like to clear the tree?")&&(M.clear(),z())}},"CLEAR"))),i.a.createElement("div",{className:"bst-items"},i.a.createElement(I,{bstItems:l}))))});function R(e,t){return e.data-t.data}function A(e,t){return e.depth-t.depth}n(35);var F=function(){return i.a.createElement(s.a,{basename:"/dsvisualizer"},i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",component:u,exact:!0}),i.a.createElement(o.a,{path:"/sll",component:b,exact:!0}),i.a.createElement(o.a,{path:"/dll",component:x,exact:!0}),i.a.createElement(o.a,{path:"/stack",component:O,exact:!0}),i.a.createElement(o.a,{path:"/queue",component:C,exact:!0}),i.a.createElement(o.a,{path:"/bst",component:P,exact:!0})))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.adb4749c.chunk.js.map