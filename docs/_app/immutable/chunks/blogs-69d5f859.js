import{S as f,i as k,s as v,k as c,q as _,a as h,l as d,m as g,r as x,h as l,c as q,n as j,b as r,G as w,B as o}from"./index-9fc6de75.js";function y(p){let a,i,s,e,u=`<code class="language-undefined">&#123;#if start_screen&#125;
	&lt;div class=&quot;news-container&quot;&gt;
		&#123;#each articles as article, i&#125;
		&lt;div
			on:click=&#123;() =&gt; &#123;
			start_screen = false;
			&#125;&#125;
			on:keypress=&#123;() =&gt; &#123;
			start_screen = false;
			&#125;&#125;
			
			class =&quot;news&quot;
		&gt;
			&lt;img src=&#123;articles[i].picture&#125; alt=&quot;&quot; /&gt;
			&lt;p&gt;&#123;articles[i].titel&#125;&lt;/p&gt;
		&lt;/div&gt;
		&#123;/each&#125;
	&lt;/div&gt;
&#123;/if&#125;</code>`;return{c(){a=c("p"),i=_(`Har fixat en on click funktion i koden, vet inte exakt hur jag kommer att använda den men just
så försvinner allt då man klickar på något. vill göra så att man går vidare
till olika ställen beroende på vad man klickar på. Det är något för nästa gång.`),s=h(),e=c("pre"),this.h()},l(t){a=d(t,"P",{});var n=g(a);i=x(n,`Har fixat en on click funktion i koden, vet inte exakt hur jag kommer att använda den men just
så försvinner allt då man klickar på något. vill göra så att man går vidare
till olika ställen beroende på vad man klickar på. Det är något för nästa gång.`),n.forEach(l),s=q(t),e=d(t,"PRE",{class:!0});var m=g(e);m.forEach(l),this.h()},h(){j(e,"class","language-undefined")},m(t,n){r(t,a,n),w(a,i),r(t,s,n),r(t,e,n),e.innerHTML=u},p:o,i:o,o,d(t){t&&l(a),t&&l(s),t&&l(e)}}}const E={title:"Inlägg 2",date:"2024-05-06",keywords:["localStorage","points"]};class H extends f{constructor(a){super(),k(this,a,null,y,v,{})}}export{H as default,E as metadata};
