import{_ as i,D as r,c as n,j as e,a as t,I as o,a4 as s,o as l}from"./chunks/framework.eex-MHHS.js";const E=JSON.parse('{"title":"Groq Web","description":"","frontmatter":{},"headers":[],"relativePath":"features/ai/groq-web.md","filePath":"features/ai/groq-web.md","lastUpdated":1723189302000}'),h={name:"features/ai/groq-web.md"},c={id:"groq-web",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#groq-web","aria-label":'Permalink to "Groq Web <Badge type="tip" text="^0.4.0-beta.0" /> <Badge type="danger" text="Deprecated" />"'},"​",-1),d=s('<p>Raycast Unblock offers Groq Web AI support. You can use Groq&#39;s models for free via their Web API.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Unfortunately, the cost of bypassing Cloudflare protection on the NodeJS platform is unacceptable in this project. <strong>Therefore, we are unable to provide support for Groq Web AI.</strong></p></div><hr><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>We found <em>Cloudflare protection</em>, which caused our program to fail to interact with <code>api.groq.com</code> normally. You can go to <a href="https://github.com/wibus-wee/raycast-unblock/issues/72" target="_blank" rel="noreferrer">wibus-wee/raycast-unblock#72</a> for more details.</p><p><s>We will try to solve this problem as soon as possible. <em>You can&#39;t use this feature until we fix it.</em></s></p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><s>This is an inverted API. Please use with caution.</s></p><p>The following content is no longer maintained and is for reference only.</p></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li><p>Open <a href="https://groq.com/" target="_blank" rel="noreferrer">https://groq.com/</a> and log in. Open the Network tab in the console. Refresh the page.</p></li><li><p>Locate the <code>https://web.stytch.com/sdk/v1/sessions/authenticate</code> request in the Network tab. Look for the <code>Authorization</code> header in the request.</p></li><li><p>Copy the value of the <code>Authorization</code> header, which will be in the format <code>Basic xxx</code>.</p></li><li><p>In your configuration file, set <code>refreshToken</code> in <code>[AI.Groq]</code> to the copied value (a placeholder value is already provided in the example configuration).</p></li></ol><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>The configuration for this feature includes the following parameters:</p>',9),u=e("li",null,[e("code",null,"refresh_token"),t(": This parameter refers to the value of the "),e("code",null,"Authorization"),t(" header. It is used to authenticate and authorize the user's access to the system.")],-1),f=e("li",null,[e("code",null,"temperature"),t(": This parameter determines the variability and creativity of the output generated by the system. A higher temperature value will result in more random and diverse responses, while a lower value will produce more focused and deterministic output.")],-1),m=e("li",null,[e("code",null,"max_tokens"),t(": This parameter specifies the maximum number of tokens that the output should contain. Tokens can be thought of as individual units of text, such as words or characters. Setting a higher value for "),e("code",null,"max_tokens"),t(" will result in longer output, while a lower value will generate shorter responses.")],-1),g=e("code",null,"default",-1),k=s(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Groq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">refresh_token = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;your refresh token&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># temperature = 0.5</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># max_tokens = 100</span></span></code></pre></div>`,2);function _(b,y,w,v,x,q){const a=r("Badge");return l(),n("div",null,[e("h1",c,[t("Groq Web "),o(a,{type:"tip",text:"^0.4.0-beta.0"}),t(),o(a,{type:"danger",text:"Deprecated"}),t(),p]),d,e("ul",null,[u,f,m,e("li",null,[g,t(": The default model to use. "),o(a,{type:"info",text:"Optional"}),t(),o(a,{type:"warning",text:"^v0.5.0-beta.2"})])]),k])}const T=i(h,[["render",_]]);export{E as __pageData,T as default};
