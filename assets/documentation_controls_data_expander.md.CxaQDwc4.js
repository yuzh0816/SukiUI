import{_ as s}from"./chunks/expander.BruAnsjt.js";import{_ as i,c as a,o as n,a4 as t}from"./chunks/framework.3VZE_5ck.js";const x=JSON.parse('{"title":"Expander","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/controls/data/expander.md","filePath":"documentation/controls/data/expander.md"}'),e={name:"documentation/controls/data/expander.md"},h=t('<h1 id="expander" tabindex="-1">Expander <a class="header-anchor" href="#expander" aria-label="Permalink to &quot;Expander&quot;">​</a></h1><p><code>Expander</code> is a content area which can be collapsed and expanded. It has styles for all <code>ExpandDirections</code>, using custom animation behaviour and controls internally to correctly animate showing/hiding any size content.</p><h2 id="show" tabindex="-1">Show <a class="header-anchor" href="#show" aria-label="Permalink to &quot;Show&quot;">​</a></h2><img src="'+s+`"><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExpandDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Down&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Down Expander&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Some Down Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExpandDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Up&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Up Expander&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Some Up Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExpandDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Right&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Right Expander&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Some Right Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ExpandDirection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Left&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Header</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Left Expander&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Some Left Content&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Expander</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/ControlsLibrary/ExpanderView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/ControlsLibrary/ExpanderView.axaml</a></p>`,8),l=[h];function p(k,E,r,d,o,g){return n(),a("div",null,l)}const u=i(e,[["render",p]]);export{x as __pageData,u as default};
