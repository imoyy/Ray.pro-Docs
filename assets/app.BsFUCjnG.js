import{t as p}from"./chunks/theme.DEz5ZPME.js";import{U as o,a5 as u,a6 as c,a7 as l,a8 as f,a9 as d,aa as m,ab as h,ac as g,ad as A,ae as y,d as P,u as v,y as C,x as b,af as w,ag as E,ah as R,ai as S}from"./chunks/framework.eex-MHHS.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(p),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return C(()=>{b(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),E(),R(),s.setup&&s.setup(),()=>S(s.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=_(),a=D();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return g(T)}function _(){let e=o,a;return A(t=>{let n=y(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{x as createApp};
