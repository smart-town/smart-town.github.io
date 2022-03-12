import{d as e}from"./app.7daa44c7.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const d={},c=e('<h1 id="cron-\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#cron-\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> cron \u5B9A\u65F6\u4EFB\u52A1</h1><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>crontab \u662F Linux \u4E0B\u5E38\u7528\u7684\u5B9A\u65F6\u6267\u884C\u5DE5\u5177.\u901A\u8FC7\u8BE5\u547D\u4EE4,\u6211\u4EEC\u53EF\u4EE5\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u6267\u884C\u60F3\u8981\u6267\u884C\u7684\u547D\u4EE4.</p><p><em>\u5C0F\u8BB0</em>,\u6211\u4E4B\u6240\u4EE5\u7528\u5230\u662F\u56E0\u4E3A\u9700\u8981<strong>\u5B9A\u65F6</strong>\u81EA\u52A8\u66F4\u65B0<code>clash</code>\u7684\u914D\u7F6E\u6587\u4EF6.</p><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><ul><li><code>crontab -l</code>: \u67E5\u770B\u5B9A\u65F6\u6267\u884C\u4EFB\u52A1\u5217\u8868</li><li><code>crontab -e</code>: \u7F16\u8F91\u5B9A\u65F6\u4EFB\u52A1</li><li><code>crontab -r</code>: \u5220\u9664\u5B9A\u65F6\u4EFB\u52A1</li><li><code>service crond start</code>: \u542F\u52A8\u670D\u52A1</li></ul><h2 id="\u57FA\u672C\u683C\u5F0F\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u683C\u5F0F\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u683C\u5F0F\u8BED\u6CD5</h2><p><code>minute hour day month day_of_week command</code></p><p>\u793A\u4F8B:<code>0 1 * * * /root/bakeup.sh</code> \u8868\u793A:\u6BCF\u5929\u51CC\u6668 1:00 \u6267\u884C\u5907\u4EFD\u7A0B\u5E8F.</p><ul><li>miniute: 0~59</li><li>hour: 0~23</li><li>day: 1~31</li><li>month: 1~12</li><li>week: 0~7(0\u62167\u8868\u793A\u5468\u65E5)</li></ul><h3 id="\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u64CD\u4F5C\u7B26</h3><p>\u7528\u6765\u5B9E\u73B0\u590D\u6742\u65F6\u95F4\u8BBE\u5B9A:</p><ul><li><code>*</code> \u8868\u793A\u53D6\u503C\u8303\u56F4\u5185\u6240\u6709\u6570\u5B57</li><li><code>/</code> \u6BCF\u8FC7\u591A\u5C11\u6570\u5B57,\u4EE3\u8868\u6BCF\u9694\u591A\u957F\u65F6\u95F4(\u6B65\u8FDB)</li><li><code>-</code> \u4ECE X \u5230 Y,\u4EE3\u8868\u4E00\u6BB5\u65F6\u95F4\u8303\u56F4</li><li><code>,</code> \u5206\u5272\u5F00\u591A\u4E2A\u503C</li></ul><h3 id="\u5178\u578B\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5178\u578B\u793A\u4F8B" aria-hidden="true">#</a> \u5178\u578B\u793A\u4F8B</h3><ul><li><code>* * * * *</code> \u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21</li><li><code>3,15 * * * *</code> \u6BCF\u5C0F\u65F6\u7684\u7B2C 3 \u548C\u7B2C 15 \u5206\u949F\u6267\u884C\u4E00\u6B21</li><li><code>3,15 8-11 * * *</code> \u6BCF\u5929 8 \u70B9\u5230 11 \u70B9\u7684\u7B2C 3 \u548C\u7B2C 15 \u5206\u949F\u6267\u884C\u4E00\u6B21</li><li><code>3,15 8-11 */2 * *</code> \u6BCF\u9694\u4E24\u5929\u7684 8 \u70B9\u5230 11 \u70B9\u7684\u7B2C 3 \u548C 15 \u5206\u949F\u6267\u884C\u4E00\u6B21</li><li><code>3,15 8-11 * * 1</code> \u6BCF\u5468\u4E00\u6267\u884C</li></ul><h2 id="\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\u8BBE\u7F6E</h2><h3 id="\u4FEE\u6539-crontab-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-crontab-\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539 crontab \u6587\u4EF6</h3><p>\u76F4\u63A5\u4FEE\u6539<code>/etc/crontab</code>\u6587\u4EF6\uFF0C\u5728\u524D\u9762\u5F15\u5165\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF</p><h3 id="\u5728\u547D\u4EE4\u4E2D\u8BBE\u7F6E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5728\u547D\u4EE4\u4E2D\u8BBE\u7F6E\u53D8\u91CF" aria-hidden="true">#</a> \u5728\u547D\u4EE4\u4E2D\u8BBE\u7F6E\u53D8\u91CF</h3><p>\u8BBE\u7F6E\u547D\u4EE4\u65F6\uFF0C\u52A0\u5165\u8BBE\u7F6E\u53D8\u91CF\u7684\u547D\u4EE4\uFF0C\u5982\uFF1A<code>* 2 * * * source $HOME/.bash_profile &amp;&amp; /path/to/order &amp; &gt; /dev/null 2&gt;&amp;1</code></p>',20);function r(i,o){return c}var n=a(d,[["render",r]]);export{n as default};
