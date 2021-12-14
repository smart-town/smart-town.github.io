import{r as t,c as p,a as n,e,F as o,b as s,d as c,o as u}from"./app.678c97f7.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"githubaction\u6982\u8FF0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#githubaction\u6982\u8FF0","aria-hidden":"true"},"#"),s(" GitHubAction\u6982\u8FF0")],-1),d={href:"https://docs.github.com/cn/actions/quickstart",target:"_blank",rel:"noopener noreferrer"},k=s("\u5B98\u65B9\u94FE\u63A5\u4E4B\u5FEB\u901F\u5165\u95E8"),m={href:"https://docs.github.com/cn/actions/learn-github-actions/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"},b=s("workflow\u8BED\u6CD5\u6587\u6863"),h=c(`<h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h2><p>github \u81EA\u5E26\u7684 CI/CD \u5DE5\u5177\uFF0C\u5BF9\u5E94\u7684 gitlab \u4E2D\u4E5F\u6709<code>gitlab-ci</code>\u3002\u901A\u8FC7\u5176\u4F60\u53EF\u4EE5\u5BF9\u4ED3\u5E93\u8FDB\u884C\u81EA\u52A8\u5316\u3001\u81EA\u5B9A\u4E49\u7684\u6784\u5EFA\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u7B49\u64CD\u4F5C\u3002\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u5F53\u4F60\u63A8\u9001\u4E00\u6B21\u4EE3\u7801\u4E4B\u540E\uFF0Cgithub \u5C31\u53EF\u4EE5\u66FF\u4F60\u5B8C\u6210\u6784\u5EFA\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u7B49\u64CD\u4F5C\u3002</p><h2 id="\u57FA\u672C\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6784\u6210" aria-hidden="true">#</a> \u57FA\u672C\u6784\u6210</h2><p>\u5F53\u4F60\u7684\u4ED3\u5E93\u53D1\u751F\u67D0\u4E2A<strong>\u4E8B\u4EF6</strong>\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A<strong>\u5DE5\u4F5C\u6D41</strong>\u6765\u54CD\u5E94\u5B83\uFF08\u6216\u8005\u8BF4\u88AB\u67D0\u4E2A\u4E8B\u4EF6\u89E6\u53D1\uFF09\u3002\u5982\u4E00\u4E2A\u63A8\u9001\u8BF7\u6C42\u6216\u8005\u4E00\u4E2A<code>issue</code>\u88AB\u521B\u5EFA\u3002\u5DE5\u4F5C\u6D41\u4E2D\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A<strong>\u4F5C\u4E1A</strong>\uFF0C\u8FD9\u4E9B\u4F5C\u4E1A\u53EF\u4EE5\u6309\u7167\u987A\u5E8F\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u5E76\u884C\u6267\u884C\u3002\u6BCF\u4E2A\u4F5C\u4E1A\u90FD\u8FD0\u884C\u5728\u5B83\u81EA\u5DF1\u7684\u865A\u62DF\u673A\u4E2D\uFF0C\u6BCF\u4E2A<strong>\u4F5C\u4E1A</strong>\u4F1A\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A<strong>\u6B65\u9AA4</strong>\uFF0C\u4F60\u53EF\u4EE5\u5728\u6B65\u9AA4\u4E2D\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u6216\u8FD0\u884C\u53E6\u4E00\u4E2A\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\u7684\uFF0C\u4E14\u53EF\u4EE5\u7B80\u5316\u4F60\u7684\u5DE5\u4F5C\u6D41\u7A0B\u7684<code>action</code></p><h2 id="\u57FA\u672C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u793A\u4F8B" aria-hidden="true">#</a> \u57FA\u672C\u793A\u4F8B</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># .github/workflows/demo.yml</span>
<span class="token comment"># \u5B9A\u4E49\u5DE5\u4F5C\u6D41\u540D\u79F0\uFF0C\u5176\u4F1A\u51FA\u73B0\u5728 Github \u4ED3\u5E93\u7684\u6807\u7B7E\u9875\u4E2D</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> demo<span class="token punctuation">-</span>for<span class="token punctuation">-</span>github<span class="token punctuation">-</span>actions
<span class="token comment"># \u6307\u5B9A\u8FD9\u4E2A\u5DE5\u4F5C\u6D41\u7684\u89E6\u53D1\u6761\u4EF6\uFF0C\u8FD9\u91CC\u4F7F\u7528\u4E86\`push\`\u4E8B\u4EF6\uFF0C\u56E0\u6B64\u6BCF\u5F53\u6709\u4EBA\u63A8\u9001\u66F4\u6539\u5230\u4ED3\u5E93\u65F6\u5DE5\u4F5C\u6D41\u5C31\u4F1A\u88AB\u89E6\u53D1\u3002\u8FD9\u91CC\u6BCF\u4E00\u4E2A\u5206\u652F\u53D1\u751F\u6539\u53D8\u65F6\u90FD\u4F1A\u89E6\u53D1\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5206\u652F</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span>
<span class="token comment"># \u5C06\u6240\u6709\u8FD0\u884C\u5728\u8BE5\u5DE5\u4F5C\u6D41\u4E2D\u7684**\u4F5C\u4E1A**\u7EC4\u5408\u5728\u4E00\u8D77</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
<span class="token comment"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u79F0\u4E3A demo-jobs \u7684\u4F5C\u4E1A\uFF0C\u5B83\u7684\u5B50\u952E\u503C\u5B9A\u4E49\u5176\u5C5E\u6027</span>
    <span class="token key atrule">demo-jobs</span><span class="token punctuation">:</span>
        <span class="token comment"># \u8BBE\u7F6E\u8BE5\u4F5C\u4E1A\u8FD0\u884C\u5728\u6700\u65B0\u7248\u7684 ubuntu runner \u4E0A</span>
        <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
        <span class="token comment"># \u5C06\u6240\u6709\u8FD0\u884C\u5728 demo-for-github-actions \u4F5C\u4E1A\u4E2D\u7684\u6B65\u9AA4\u7EC4\u5408\u5728\u4E00\u8D77</span>
        <span class="token key atrule">steps</span><span class="token punctuation">:</span>
            <span class="token comment"># \`uses\`\u6307\u5B9A\u8BE5\u6B65\u9AA4\u4F7F\u7528\`actions/checkout\` action\u3002\u8BE5 action \u5C06\u4F1A\u68C0\u51FA\u4F60\u7684\u4ED3\u5E93\u5230 runner \u4E2D\uFF0C\u5141\u8BB8\u4F60\u6267\u884C\u811A\u672C</span>
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
            <span class="token comment"># \u4F7F\u7528\`actions/setup-node\` action \u6765\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684 Node.js \u73AF\u5883</span>
            <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/steup<span class="token punctuation">-</span>node@v2
              <span class="token key atrule">with</span><span class="token punctuation">:</span>
                <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>
            <span class="token comment"># run \u5173\u952E\u5B57\u544A\u8BC9\u4F5C\u4E1A\u5728 runner \u4E0A\u6267\u884C\u547D\u4EE4</span>
            <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> node <span class="token punctuation">-</span>v
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u5173\u4E8E-step-\u7684\u4E00\u4E9B\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-step-\u7684\u4E00\u4E9B\u7528\u6CD5" aria-hidden="true">#</a> \u5173\u4E8E step \u7684\u4E00\u4E9B\u7528\u6CD5</h2><h3 id="\u8BBE\u7F6E-outputs" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-outputs" aria-hidden="true">#</a> \u8BBE\u7F6E outputs</h3><blockquote><p>\u8BED\u6CD5\uFF1A<code>::set-output name={name}::{value}</code></p></blockquote><p>\u5982\uFF0C \u8BBE\u7F6E\u67D0\u4E00 step \u8F93\u51FA\u4E3A git \u6700\u65B0\u63D0\u4EA4\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> set_out1_step
  <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=commit<span class="token punctuation">:</span><span class="token punctuation">:</span>git log <span class="token punctuation">-</span>1 <span class="token punctuation">-</span><span class="token punctuation">-</span>pretty=&#39;%s&#39;&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6CE8\u610F\uFF0C\u4EE5\u4E0A\u7684\u8BBE\u7F6E<code>outputs</code>\u65B9\u5F0F\u5176\u5B9E\u662F<strong>\u5DE5\u4F5C\u6D41\u547D\u4EE4</strong>(Workflow commands)</p><h3 id="\u4F7F\u7528-if" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-if" aria-hidden="true">#</a> \u4F7F\u7528 if</h3><p>\u5728 step \u4E2D\u4F7F\u7528 if \u6765\u5224\u65AD\u6761\u4EF6\u662F\u5426\u6EE1\u8DB3\uFF0C\u4EE5\u6B64\u51B3\u5B9A\u662F\u5426\u6267\u884C\u5F53\u524D\u6B65\u9AA4\u3002</p><p>\u5982\u4F7F\u7528<code>step.if</code>\u5224\u65AD\u8BE5\u4E0A\u8FF0\u8F93\u51FA\u6709\u65E0\u9700\u8981\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u662F\u5426\u5305\u542B\u5173\u952E\u5B57<code>:rocket:</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test if
  <span class="token key atrule">if</span><span class="token punctuation">:</span> contains(steps.set_out1_step.outputs.commit == &#39;<span class="token punctuation">:</span>rocket<span class="token punctuation">:</span>&#39;)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,16);function g(f,_){const a=t("OutboundLink");return u(),p(o,null,[i,n("ul",null,[n("li",null,[n("a",d,[k,e(a)])]),n("li",null,[n("a",m,[b,e(a)])])]),h],64)}var x=l(r,[["render",g]]);export{x as default};