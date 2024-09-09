import{_ as e,a,b as i,c as o,d as l}from"./chunks/introduction-final-package-list.aT7fuA6M.js";import{_ as s,c as r,a2 as c,o as n}from"./chunks/framework.1oI0TYFB.js";const _=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/getting-started/installation.md","filePath":"zh/documentation/getting-started/installation.md"}'),p={name:"zh/documentation/getting-started/installation.md"};function d(u,t,h,k,m,g){return n(),r("div",null,t[0]||(t[0]=[c('<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>写完本篇时，Avalonia 的版本是 <code>11.2.0-beta1</code> ，SukiUI 的版本是 <code>6.0.0-beta8</code></p></div><p>SukiUI 可以通过以下两种方式安装:</p><ul><li><a href="https://www.nuget.org/packages/SukiUI" target="_blank" rel="noreferrer">Nuget</a> <strong>推荐</strong></li><li>从 <a href="https://github.com/kikipoulet/SukiUI/actions/workflows/build.yml" target="_blank" rel="noreferrer">Github Action</a> 获取 CI 构建后的 <code>.dll</code></li></ul><h2 id="准备工作" tabindex="-1">准备工作 <a class="header-anchor" href="#准备工作" aria-label="Permalink to &quot;准备工作&quot;">​</a></h2><p>以下是 <code>Avalonia Template</code> 项目创建后，默认的包列表:</p><p><img src="'+e+'" alt="" title="default package list"></p><p>在这些包中，<code>Avalonia.Themes.Fluent</code> 可以被删除</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>有关 <code>Avalonia Template</code>: <a href="https://docs.avaloniaui.net/zh-Hans/docs/get-started/set-up-an-editor" target="_blank" rel="noreferrer">设置编辑器</a></p></div><h2 id="安装最新的-sukiui" tabindex="-1">安装最新的 SukiUI <a class="header-anchor" href="#安装最新的-sukiui" aria-label="Permalink to &quot;安装最新的 SukiUI&quot;">​</a></h2><p>对于大多数用户来说，通过 Nuget 安装是不错的选择；但如果你想体验最新构建的功能，请从 Github Action 中下载构建</p><h3 id="通过-nuget-安装" tabindex="-1">通过 Nuget 安装 <a class="header-anchor" href="#通过-nuget-安装" aria-label="Permalink to &quot;通过 Nuget 安装&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dotnet add package SukiUI --version 6.0.0</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>访问 <a href="https://www.nuget.org/packages/SukiUI" target="_blank" rel="noreferrer">SukiUI on Nuget</a> 获取更多信息</p></div><h3 id="通过-github-action-安装" tabindex="-1">通过 Github Action 安装 <a class="header-anchor" href="#通过-github-action-安装" aria-label="Permalink to &quot;通过 Github Action 安装&quot;">​</a></h3><ol><li><p>访问 <a href="https://github.com/kikipoulet/SukiUI/actions/workflows/build.yml" target="_blank" rel="noreferrer">SukiUI CI</a></p></li><li><p>选择最后一个<code>workflow</code><img src="'+a+'" alt="" title="workflow"></p></li><li><p>下载 <img src="'+i+'" alt="" title="artifact"></p></li><li><p>在项目中添加引用 <img src="'+o+'" alt="" title="reference"></p></li><li><p>选择刚刚下载的 <code>SukiUI.dll</code> 并添加</p></li><li><p>添加 Nuget 包 <code>System.Reactive</code></p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最终，你的包列表应为：</p><p><img src="'+l+'" alt="" title="package list"></p><p>如果你是以引用<code>dll</code>的方式安装的，此处应有 <code>System.Reactive</code></p></div>',17)]))}const v=s(p,[["render",d]]);export{_ as __pageData,v as default};
