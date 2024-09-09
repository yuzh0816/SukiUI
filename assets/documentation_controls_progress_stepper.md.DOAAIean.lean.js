import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.1oI0TYFB.js";const g=JSON.parse('{"title":"Stepper","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/controls/progress/stepper.md","filePath":"documentation/controls/progress/stepper.md"}'),l={name:"documentation/controls/progress/stepper.md"};function h(n,s,p,r,k,o){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="stepper" tabindex="-1">Stepper <a class="header-anchor" href="#stepper" aria-label="Permalink to &quot;Stepper&quot;">​</a></h1><p>A bar that guides users through the steps of a task</p><br><img src="https://sleekshot.app/api/download/9UWKAIevk5i2"><h3 id="xaml" tabindex="-1">XAML <a class="header-anchor" href="#xaml" aria-label="Permalink to &quot;XAML&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:Stepper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{Binding StepIndex}&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{Binding Steps}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="viewmodel" tabindex="-1">ViewModel <a class="header-anchor" href="#viewmodel" aria-label="Permalink to &quot;ViewModel&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ObservableProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _stepIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IEnumerable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Steps { get; } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                           [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;First Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Second Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Third Step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><br><h2 id="alternative-style" tabindex="-1">Alternative Style <a class="header-anchor" href="#alternative-style" aria-label="Permalink to &quot;Alternative Style&quot;">​</a></h2><img src="https://sleekshot.app/api/download/siVzTBuU6zhn"><h3 id="xaml-1" tabindex="-1">XAML <a class="header-anchor" href="#xaml-1" aria-label="Permalink to &quot;XAML&quot;">​</a></h3><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">suki:Stepper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AlternativeStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><br><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/ControlsLibrary/ProgressView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/ControlsLibrary/ProgressView.axaml</a></p><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI/Controls/Stepper.axaml.cs" target="_blank" rel="noreferrer">API: Controls/Stepper.axaml.cs</a></p>`,17)]))}const E=i(l,[["render",h]]);export{g as __pageData,E as default};
