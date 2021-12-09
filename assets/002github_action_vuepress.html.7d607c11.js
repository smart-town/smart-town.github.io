import{d as n}from"./app.8c597c22.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=n(`<h1 id="githubactions\u548Cvuepress" tabindex="-1"><a class="header-anchor" href="#githubactions\u548Cvuepress" aria-hidden="true">#</a> GithubActions\u548Cvuepress</h1><p>\u672C\u7AD9\u70B9\u4F7F\u7528<code>Vuepress</code>\uFF0C\u6211\u5E0C\u671B\u4F7F\u7528\u6BCF\u6B21\u63A8\u9001\u65F6\u81EA\u52A8\u6784\u5EFA\u76EE\u5F55\u5E76\u8FDB\u884C\u90E8\u7F72\u3002</p><h2 id="\u671F\u671B\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u671F\u671B\u7684\u6548\u679C" aria-hidden="true">#</a> \u671F\u671B\u7684\u6548\u679C</h2><p>\u672C\u5730\u5B8C\u6210\u6587\u6863\u5E76\u63D0\u4EA4\uFF0C\u63A8\u9001\u540E github \u81EA\u52A8\u89E6\u53D1\u6784\u5EFA\u53CA\u90E8\u7F72</p><p>\u53EF\u4EE5\u6839\u636E\u63D0\u4EA4\u4FE1\u606F\u4E2D\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u547D\u4EE4\uFF0C\u5982<code>:rocket:</code>\u6765\u786E\u5B9A\u662F\u5426\u9700\u8981\u7EE7\u7EED\u6267\u884C\u6784\u5EFA\u53CA\u90E8\u7F72</p><h2 id="\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u6B65\u9AA4</h2><p>\u57FA\u672C\u601D\u8DEF\uFF1A\u83B7\u53D6\u4EE3\u7801\u3001\u8BBE\u7F6E node \u73AF\u5883\u3001\u5B89\u88C5\u4F9D\u8D56\u3001\u6267\u884C\u6784\u5EFA<code>npm run build</code>\u3001\u63A8\u9001<code>dist</code>\u5230<code>gh-page</code>\u5206\u652F</p><h3 id="\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA" aria-hidden="true">#</a> \u6784\u5EFA</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token comment"># \u68C0\u51FA\u6700\u65B0\u4EE3\u7801</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2.4.0
    <span class="token comment"># \u8BBE\u7F6E node \u73AF\u5883</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js environment
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2.5.0
      <span class="token key atrule">with</span><span class="token punctuation">:</span>
        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;14&#39;</span>
    <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install
    <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u4F7F\u7528\u5B98\u65B9<code>actions/checkout</code>\u4F5C\u4E1A\uFF0C\u83B7\u53D6\u6700\u65B0\u4EE3\u7801</p><h3 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h3><h3 id="\u63A8\u9001\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001\u5206\u652F" aria-hidden="true">#</a> \u63A8\u9001\u5206\u652F</h3>`,12);function p(t,c){return e}var u=a(s,[["render",p]]);export{u as default};
