import{S as ie,i as he,s as _e,k as v,q,a as I,l as p,m as g,r as D,h as i,c as z,n as L,b as P,D as r,N as te,O as Q,B as le,J as se,Q as ue,u as ce}from"../../../chunks/index-2bb69101.js";function ne(c,l,a){const o=c.slice();return o[7]=l[a],o[9]=a,o}function ae(c,l,a){const o=c.slice();return o[7]=l[a],o[9]=a,o}function oe(c){let l,a=c[7]+"",o,_,s,k,u,O;function T(){return c[5](c[9])}return{c(){l=v("li"),o=q(a),_=I(),s=v("button"),k=q("Add thing "),this.h()},l(t){l=p(t,"LI",{});var h=g(l);o=D(h,a),h.forEach(i),_=z(t),s=p(t,"BUTTON",{class:!0});var E=g(s);k=D(E,"Add thing "),E.forEach(i),this.h()},h(){L(s,"class","svelte-1z09grq")},m(t,h){P(t,l,h),r(l,o),P(t,_,h),P(t,s,h),r(s,k),u||(O=Q(s,"click",T),u=!0)},p(t,h){c=t,h&2&&a!==(a=c[7]+"")&&ce(o,a)},d(t){t&&i(l),t&&i(_),t&&i(s),u=!1,O()}}}function re(c){let l,a=c[7]+"",o,_,s,k,u,O;function T(){return c[6](c[9])}return{c(){l=v("li"),o=q(a),_=I(),s=v("button"),k=q("Erase "),this.h()},l(t){l=p(t,"LI",{});var h=g(l);o=D(h,a),h.forEach(i),_=z(t),s=p(t,"BUTTON",{class:!0});var E=g(s);k=D(E,"Erase "),E.forEach(i),this.h()},h(){L(s,"class","svelte-1z09grq")},m(t,h){P(t,l,h),r(l,o),P(t,_,h),P(t,s,h),r(s,k),u||(O=Q(s,"click",T),u=!0)},p(t,h){c=t,h&4&&a!==(a=c[7]+"")&&ce(o,a)},d(t){t&&i(l),t&&i(_),t&&i(s),u=!1,O()}}}function fe(c){let l,a,o,_,s,k,u,O,T,t,h,E,N,C,j,w,U,F,A,y,G,K,B,R,X,S=c[1],f=[];for(let n=0;n<S.length;n+=1)f[n]=oe(ae(c,S,n));let V=c[2],d=[];for(let n=0;n<V.length;n+=1)d[n]=re(ne(c,V,n));return{c(){l=v("div"),a=v("h1"),o=q("TODO LIST"),_=I(),s=v("h2"),k=q("Todos: "),u=v("input"),O=I(),T=v("button"),t=q("Add thing"),h=I(),E=v("div"),N=v("div"),C=v("h1"),j=q("NEW"),w=I(),U=v("ol");for(let n=0;n<f.length;n+=1)f[n].c();F=I(),A=v("div"),y=v("h1"),G=q("COMPLETED"),K=I(),B=v("ul");for(let n=0;n<d.length;n+=1)d[n].c();this.h()},l(n){l=p(n,"DIV",{class:!0});var m=g(l);a=p(m,"H1",{});var e=g(a);o=D(e,"TODO LIST"),e.forEach(i),_=z(m),s=p(m,"H2",{});var b=g(s);k=D(b,"Todos: "),u=p(b,"INPUT",{class:!0}),O=z(b),T=p(b,"BUTTON",{class:!0});var Y=g(T);t=D(Y,"Add thing"),Y.forEach(i),b.forEach(i),h=z(m),E=p(m,"DIV",{class:!0});var M=g(E);N=p(M,"DIV",{});var W=g(N);C=p(W,"H1",{});var Z=g(C);j=D(Z,"NEW"),Z.forEach(i),w=z(W),U=p(W,"OL",{class:!0});var $=g(U);for(let H=0;H<f.length;H+=1)f[H].l($);$.forEach(i),W.forEach(i),F=z(M),A=p(M,"DIV",{});var J=g(A);y=p(J,"H1",{});var x=g(y);G=D(x,"COMPLETED"),x.forEach(i),K=z(J),B=p(J,"UL",{class:!0});var ee=g(B);for(let H=0;H<d.length;H+=1)d[H].l(ee);ee.forEach(i),J.forEach(i),M.forEach(i),m.forEach(i),this.h()},h(){L(u,"class","svelte-1z09grq"),L(T,"class","svelte-1z09grq"),L(U,"class","svelte-1z09grq"),L(B,"class","svelte-1z09grq"),L(E,"class","layout svelte-1z09grq"),L(l,"class","container svelte-1z09grq")},m(n,m){P(n,l,m),r(l,a),r(a,o),r(l,_),r(l,s),r(s,k),r(s,u),te(u,c[0]),r(s,O),r(s,T),r(T,t),r(l,h),r(l,E),r(E,N),r(N,C),r(C,j),r(N,w),r(N,U);for(let e=0;e<f.length;e+=1)f[e].m(U,null);r(E,F),r(E,A),r(A,y),r(y,G),r(A,K),r(A,B);for(let e=0;e<d.length;e+=1)d[e].m(B,null);R||(X=[Q(u,"input",c[3]),Q(T,"click",c[4])],R=!0)},p(n,[m]){if(m&1&&u.value!==n[0]&&te(u,n[0]),m&6){S=n[1];let e;for(e=0;e<S.length;e+=1){const b=ae(n,S,e);f[e]?f[e].p(b,m):(f[e]=oe(b),f[e].c(),f[e].m(U,null))}for(;e<f.length;e+=1)f[e].d(1);f.length=S.length}if(m&4){V=n[2];let e;for(e=0;e<V.length;e+=1){const b=ne(n,V,e);d[e]?d[e].p(b,m):(d[e]=re(b),d[e].c(),d[e].m(B,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=V.length}},i:le,o:le,d(n){n&&i(l),se(f,n),se(d,n),R=!1,ue(X)}}}function de(c,l,a){let o="",_=[],s=[];function k(){o=this.value,a(0,o)}return[o,_,s,k,()=>{_.push(o),a(1,_)},t=>{s.push(_.splice(t,1)),a(2,s)},t=>{s.splice(t,1),a(2,s)}]}class pe extends ie{constructor(l){super(),he(this,l,de,fe,_e,{})}}export{pe as default};
