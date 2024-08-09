import{_ as n,D as o,c as l,j as e,a,I as t,a4 as s,o as r}from"./chunks/framework.eex-MHHS.js";const T=JSON.parse('{"title":"Gemini","description":"","frontmatter":{},"headers":[],"relativePath":"features/ai/gemini.md","filePath":"features/ai/gemini.md","lastUpdated":1723189302000}'),h={name:"features/ai/gemini.md"},p=s('<h1 id="gemini" tabindex="-1">Gemini <a class="header-anchor" href="#gemini" aria-label="Permalink to &quot;Gemini&quot;">​</a></h1><p>Raycast Unblock provides a Gemini feature. You can use it to generate text using the Gemini API.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li>Set <code>AI.default</code> to <code>gemini</code> in your configuration file.</li><li>Set <code>AI.Gemini.api_key</code> to your Gemini API key in your configuration file.</li></ol><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h3>',5),d=e("li",null,[e("code",null,"api_key"),a(": Your Gemini API key.")],-1),c=e("code",null,"temperature",-1),_=e("code",null,"max_tokens",-1),u=s(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Gemini</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api_key = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;your api key&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># temperature = 0.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># max_tokens = 100</span></span></code></pre></div>`,2);function m(k,g,f,y,E,x){const i=o("Badge");return r(),l("div",null,[p,e("ul",null,[d,e("li",null,[c,a(": The temperature of the model. "),t(i,{type:"info",text:"Optional"})]),e("li",null,[_,a(": The maximum tokens of the model. "),t(i,{type:"info",text:"Optional"})])]),u])}const b=n(h,[["render",m]]);export{T as __pageData,b as default};
