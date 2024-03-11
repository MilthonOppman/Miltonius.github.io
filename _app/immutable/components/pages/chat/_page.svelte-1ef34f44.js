import{S as q,i as O,s as B,k as x,q as T,a as S,I as G,l as D,m as _,r as H,h as v,c as R,n as A,D as b,b as j,M as Q,B as K}from"../../../chunks/index-2bb69101.js";import{p as N}from"../../../chunks/parse-f0c618df.js";import{j as W}from"../../../chunks/singletons-f91a23ce.js";W.disable_scroll_handling;W.goto;W.invalidate;const U=W.invalidateAll;W.preload_data;W.preload_code;W.before_navigate;W.after_navigate;const V=W.apply_action;function J(e){const o=JSON.parse(e);return o.data&&(o.data=N(o.data)),o}function X(e,o=()=>{}){const i=async({action:a,result:y,reset:h})=>{y.type==="success"&&(h!==!1&&HTMLFormElement.prototype.reset.call(e),await U()),(location.origin+location.pathname===a.origin+a.pathname||y.type==="redirect"||y.type==="error")&&V(y)};async function f(a){var w,l,m;a.preventDefault();const y=new URL((w=a.submitter)!=null&&w.hasAttribute("formaction")?a.submitter.formAction:HTMLFormElement.prototype.cloneNode.call(e).action),h=new FormData(e),p=(l=a.submitter)==null?void 0:l.getAttribute("name");p&&h.append(p,((m=a.submitter)==null?void 0:m.getAttribute("value"))??"");const u=new AbortController;let r=!1;const g=await o({action:y,cancel:()=>r=!0,controller:u,data:h,form:e})??i;if(r)return;let n;try{const d=await fetch(y,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:h,signal:u.signal});n=J(await d.text()),n.type==="error"&&(n.status=d.status)}catch(d){if((d==null?void 0:d.name)==="AbortError")return;n={type:"error",error:d}}g({action:y,data:h,form:e,update:d=>i({action:y,result:n,reset:d==null?void 0:d.reset}),result:n})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",f),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",f)}}}var I={};I.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];I.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];I.elizaQuits=["bye","goodbye","done","exit","quit"];I.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];I.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];I.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};I.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];I.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var t=I;function c(e){this.noRandom=!!e,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}c.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var e=0;e<t.elizaKeywords.length;e++){this.lastchoice[e]=[];for(var o=t.elizaKeywords[e][2],i=0;i<o.length;i++)this.lastchoice[e][i]=-1}};c.prototype._dataParsed=!1;c.prototype._init=function(){var e={};if(t.elizaSynons&&typeof t.elizaSynons=="object")for(var o in t.elizaSynons)e[o]="("+o+"|"+t.elizaSynons[o].join("|")+")";(!t.elizaKeywords||typeof t.elizaKeywords.length>"u")&&(t.elizaKeywords=[["###",0,[["###",[]]]]]);for(var i=/@(\S+)/,f=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,y=/(\S)\s*\*\s*$/,h=/^\s*\*\s*$/,p=/\s+/g,u=0;u<t.elizaKeywords.length;u++){var r=t.elizaKeywords[u][2];t.elizaKeywords[u][3]=u;for(var o=0;o<r.length;o++){var s=r[o];if(s[0].charAt(0)=="$"){for(var g=1;s[0].charAt[g]==" ";)g++;s[0]=s[0].substring(g),s[2]=!0}else s[2]=!1;for(var n=i.exec(s[0]);n;){var w=e[n[1]]?e[n[1]]:n[1];s[0]=s[0].substring(0,n.index)+w+s[0].substring(n.index+n[0].length),n=i.exec(s[0])}if(h.test(s[0]))s[0]="\\s*(.*)\\s*";else{if(n=f.exec(s[0]),n){for(var l="",m=s[0];n;)l+=m.substring(0,n.index+1),n[1]!=")"&&(l+="\\b"),l+="\\s*(.*)\\s*",n[2]!="("&&n[2]!="\\"&&(l+="\\b"),l+=n[2],m=m.substring(n.index+n[0].length),n=f.exec(m);s[0]=l+m}if(n=a.exec(s[0]),n){var l="\\s*(.*)\\s*";n[1]!=")"&&n[1]!="\\"&&(l+="\\b"),s[0]=l+s[0].substring(n.index-1+n[0].length)}if(n=y.exec(s[0]),n){var l=s[0].substring(0,n.index+1);n[1]!="("&&(l+="\\b"),s[0]=l+"\\s*(.*)\\s*"}}s[0]=s[0].replace(p,"\\s+"),p.lastIndex=0}}if(t.elizaKeywords.sort(this._sortKeywords),c.prototype.pres={},c.prototype.posts={},t.elizaPres&&t.elizaPres.length){for(var d=new Array,o=0;o<t.elizaPres.length;o+=2)d.push(t.elizaPres[o]),c.prototype.pres[t.elizaPres[o]]=t.elizaPres[o+1];c.prototype.preExp=new RegExp("\\b("+d.join("|")+")\\b")}else c.prototype.preExp=/####/,c.prototype.pres["####"]="####";if(t.elizaPosts&&t.elizaPosts.length){for(var d=new Array,o=0;o<t.elizaPosts.length;o+=2)d.push(t.elizaPosts[o]),c.prototype.posts[t.elizaPosts[o]]=t.elizaPosts[o+1];c.prototype.postExp=new RegExp("\\b("+d.join("|")+")\\b")}else c.prototype.postExp=/####/,c.prototype.posts["####"]="####";(!t.elizaQuits||typeof t.elizaQuits.length>"u")&&(t.elizaQuits=[]),c.prototype._dataParsed=!0};c.prototype._sortKeywords=function(e,o){return e[1]>o[1]?-1:e[1]<o[1]||e[3]>o[3]?1:e[3]<o[3]?-1:0};c.prototype.transform=function(e){var o="";this.quit=!1,e=e.toLowerCase(),e=e.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),e=e.replace(/\s+-+\s+/g,"."),e=e.replace(/\s*[,\.\?!;]+\s*/g,"."),e=e.replace(/\s*\bbut\b\s*/g,"."),e=e.replace(/\s{2,}/g," ");for(var i=e.split("."),f=0;f<i.length;f++){var a=i[f];if(a!=""){for(var y=0;y<t.elizaQuits.length;y++)if(t.elizaQuits[y]==a)return this.quit=!0,this.getFinal();var h=this.preExp.exec(a);if(h){for(var p="",u=a;h;)p+=u.substring(0,h.index)+this.pres[h[1]],u=u.substring(h.index+h[0].length),h=this.preExp.exec(u);a=p+u}this.sentence=a;for(var r=0;r<t.elizaKeywords.length;r++)if(a.search(new RegExp("\\b"+t.elizaKeywords[r][0]+"\\b","i"))>=0&&(o=this._execRule(r)),o!="")return o}}if(o=this._memGet(),o==""){this.sentence=" ";var r=this._getRuleIndexByKey("xnone");r>=0&&(o=this._execRule(r))}return o!=""?o:"I am at a loss for words."};c.prototype._execRule=function(e){for(var o=t.elizaKeywords[e],i=o[2],f=/\(([0-9]+)\)/,a=0;a<i.length;a++){var y=this.sentence.match(i[a][0]);if(y!=null){var h=i[a][1],p=i[a][2],u=this.noRandom?0:Math.floor(Math.random()*h.length);this.noRandom&&this.lastchoice[e][a]>u||this.lastchoice[e][a]==u?(u=++this.lastchoice[e][a],u>=h.length&&(u=0,this.lastchoice[e][a]=-1)):this.lastchoice[e][a]=u;var r=h[u];if(this.debug&&alert(`match:
key: `+t.elizaKeywords[e][0]+`
rank: `+t.elizaKeywords[e][1]+`
decomp: `+i[a][0]+`
reasmb: `+r+`
memflag: `+p),r.search("^goto ","i")==0){var s=this._getRuleIndexByKey(r.substring(5));if(s>=0)return this._execRule(s)}var g=f.exec(r);if(g){for(var n="",w=r;g;){var l=y[parseInt(g[1])],m=this.postExp.exec(l);if(m){for(var d="",z=l;m;)d+=z.substring(0,m.index)+this.posts[m[1]],z=z.substring(m.index+m[0].length),m=this.postExp.exec(z);l=d+z}n+=w.substring(0,g.index)+l,w=w.substring(g.index+g[0].length),g=f.exec(w)}r=n+w}if(r=this._postTransform(r),p)this._memSave(r);else return r}}return""};c.prototype._postTransform=function(e){if(e=e.replace(/\s{2,}/g," "),e=e.replace(/\s+\./g,"."),t.elizaPostTransforms&&t.elizaPostTransforms.length)for(var o=0;o<t.elizaPostTransforms.length;o+=2)e=e.replace(t.elizaPostTransforms[o],t.elizaPostTransforms[o+1]),t.elizaPostTransforms[o].lastIndex=0;if(this.capitalizeFirstLetter){var i=/^([a-z])/,f=i.exec(e);f&&(e=f[0].toUpperCase()+e.substring(1))}return e};c.prototype._getRuleIndexByKey=function(e){for(var o=0;o<t.elizaKeywords.length;o++)if(t.elizaKeywords[o][0]==e)return o;return-1};c.prototype._memSave=function(e){this.mem.push(e),this.mem.length>this.memSize&&this.mem.shift()};c.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var e=Math.floor(Math.random()*this.mem.length),o=this.mem[e],i=e+1;i<this.mem.length;i++)this.mem[i-1]=this.mem[i];return this.mem.length--,o}else return""};c.prototype.getFinal=function(){return t.elizaFinals?t.elizaFinals[Math.floor(Math.random()*t.elizaFinals.length)]:""};c.prototype.getInitial=function(){return t.elizaInitials?t.elizaInitials[Math.floor(Math.random()*t.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(e){return this[this.length]=e});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var e=this[0],o=1;o<this.length;o++)this[o-1]=this[o];return this.length--,e});var Z=c;function ee(e){let o,i,f,a,y,h,p,u,r,s,g=e[0][0].text+"",n,w,l,m,d,z;return{c(){o=x("style"),i=T(`nav {
      margin-left: 10%;
      margin-right: 10%;
    }`),f=S(),a=x("div"),y=x("h1"),h=T("TODO: Complete assignment"),p=S(),u=x("div"),r=x("article"),s=x("span"),n=T(g),w=S(),l=x("form"),m=x("input"),this.h()},l(k){const E=G("svelte-gynwln",document.head);o=D(E,"STYLE",{});var Y=_(o);i=H(Y,`nav {
      margin-left: 10%;
      margin-right: 10%;
    }`),Y.forEach(v),E.forEach(v),f=R(k),a=D(k,"DIV",{class:!0});var P=_(a);y=D(P,"H1",{});var C=_(y);h=H(C,"TODO: Complete assignment"),C.forEach(v),p=R(P),u=D(P,"DIV",{class:!0});var M=_(u);r=D(M,"ARTICLE",{});var F=_(r);s=D(F,"SPAN",{});var $=_(s);n=H($,g),$.forEach(v),F.forEach(v),M.forEach(v),w=R(P),l=D(P,"FORM",{method:!0});var L=_(l);m=D(L,"INPUT",{type:!0,name:!0}),L.forEach(v),P.forEach(v),this.h()},h(){A(u,"class","scrollable"),A(m,"type","text"),A(m,"name","text"),A(l,"method","post"),A(a,"class","container")},m(k,E){b(document.head,o),b(o,i),j(k,f,E),j(k,a,E),b(a,y),b(y,h),b(a,p),b(a,u),b(u,r),b(r,s),b(s,n),b(a,w),b(a,l),b(l,m),d||(z=Q(X.call(null,l,e[1])),d=!0)},p:K,i:K,o:K,d(k){v(o),k&&v(f),k&&v(a),d=!1,z()}}}async function oe(e){await new Promise(o=>setTimeout(o,1e3+Math.random()*1e3))}function te(e){return[[{user:"eliza",text:new Z().getInitial()}],({form:a,data:y,action:h,cancel:p})=>{p(),y.get("text"),oe()}]}class ie extends q{constructor(o){super(),O(this,o,te,ee,B,{})}}export{ie as default};