import{d as n}from"./app.2f880364.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="\u67E5\u627E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u627E\u6587\u4EF6</h1><p>\u7ECF\u5E38\u9762\u5BF9\u7684\u4E00\u4E2A\u91CD\u590D\u4EFB\u52A1\u5C31\u662F\u67E5\u627E\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u6240\u6709\u7684\u7C7B Unix \u7CFB\u7EDF\u90FD\u6709\u4E00\u4E2A\u540D\u4E3A<code>find</code>\u7684\u5DE5\u5177\uFF0C\u5176\u662F shell \u4E0A\u7528\u4E8E\u67E5\u627E\u6587\u4EF6\u7684\u7EDD\u4F73\u5DE5\u5177\uFF0C<code>find</code>\u4F1A\u9012\u5F52\u5730\u641C\u7D22\u7B26\u5408\u6761\u4EF6\u7684\u6587\u4EF6\u3002</p><p>\u9664\u4E86\u80FD\u591F\u5217\u51FA\u6240\u5BFB\u627E\u7684\u6587\u4EF6\u4E4B\u5916\uFF0C<code>find</code>\u8FD8\u80FD\u5BF9\u67E5\u627E\u7684\u6587\u4EF6\u6267\u884C\u64CD\u4F5C\uFF0C\u8FD9\u80FD\u6781\u5927\u7B80\u5316\u4E00\u4E9B\u5355\u8C03\u7684\u4EFB\u52A1\u3002</p><p>\u5C3D\u7BA1<code>find</code>\u7528\u9014\u5E7F\u6CDB\uFF0C\u4F46\u662F\u8BED\u6CD5\u8F83\u96BE\u8BB0\u5FC6\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E<code>alias</code>\u522B\u540D\u6765\u7B80\u5316\u64CD\u4F5C\u3002</p><p>\u6B64\u5916\u8FD8\u6709\u66FF\u4EE3\u54C1<code>fd</code>\u547D\u4EE4\uFF0C\u5B83\u662F\u4E00\u4E2A\u66F4\u7B80\u5355\u3001\u5FEB\u901F\u3001\u53CB\u597D\u7684<code>find</code>\u66FF\u4EE3\u54C1\u3002\u6709\u5F88\u591A\u4E0D\u9519\u7684\u9ED8\u8BA4\u8BBE\u7F6E\u5982\u8F93\u51FA\u7740\u8272\uFF0C\u9ED8\u8BA4\u652F\u6301\u6B63\u5219\u5339\u914D\u7B49</p><p>\u6B64\u5916\uFF0C\u8FD8\u6709\u4E00\u4E2A\u66F4\u9AD8\u6548\u7684\u65B9\u6CD5\uFF0C\u4E0D\u4F1A\u6BCF\u6B21\u90FD\u641C\u7D22\u6587\u4EF6\u800C\u662F\u901A\u8FC7\u7F16\u8BD1\u7D22\u5F15\u6216\u5EFA\u7ACB\u6570\u636E\u5E93\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u66F4\u5FEB\u641C\u7D22\u7684<code>locate</code>\u547D\u4EE4</p><h2 id="\u5E38\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E38\u7528\u793A\u4F8B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u6240\u6709\u540D\u79F0\u4E3A src \u7684\u6587\u4EF6\u5939</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -name src -type d
<span class="token comment"># \u67E5\u627E\u6240\u6709\u6587\u4EF6\u5939\u8DEF\u5F84\u5305\u542B test \u7684 python \u6587\u4EF6</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> path <span class="token string">&#39;*/test/*.py&#39;</span> -type f
<span class="token comment"># \u67E5\u627E\u524D\u4E00\u5929\u4FEE\u6539\u7684\u6587\u4EF6</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -mtime <span class="token number">1</span>
<span class="token comment"># \u67E5\u627E\u5927\u5C0F\u5728 500k \u5230 1M \u7684 tar.gz \u6587\u4EF6</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -size +500k -size -1M -name <span class="token string">&#39;*.tar.gz&#39;</span>

<span class="token comment"># \u5220\u9664\u6269\u5C55\u540D\u4E3A .tmp \u7684\u6587\u4EF6</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -name <span class="token string">&#39;*.tmp&#39;</span> -exec <span class="token function">rm</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
<span class="token comment"># \u67E5\u627E\u5168\u90E8 png \u6587\u4EF6\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A jpg</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> -name <span class="token string">&#39;*.png&#39;</span> -exec convert <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>.jpg <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8);function p(c,t){return e}var i=s(a,[["render",p]]);export{i as default};