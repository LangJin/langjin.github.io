import{_ as s,c as n,o as a,a as e}from"./app.0b5dffb1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"python/selenium.md","lastUpdated":1666713491000}'),l={name:"python/selenium.md"},p=e(`<div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">optCode = GetWriteCode()</span></span>
<span class="line"><span style="color:#A6ACCD;">username1 = &quot;test2008&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">data = userlogin(username1, optCode)</span></span>
<span class="line"><span style="color:#A6ACCD;">print(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">token = data[&quot;token&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">user = data[&quot;user&quot;][&quot;userName&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">balance = data[&quot;user&quot;][&quot;balance&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">userDisabled = data[&quot;user&quot;][&quot;status&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">isTest = data[&quot;user&quot;][&quot;isTest&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">userValid = data[&quot;user&quot;][&quot;status&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">userType = data[&quot;user&quot;][&quot;userType&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">oid = data[&quot;user&quot;][&quot;oid&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"># userId = data[&quot;user&quot;][&quot;username&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">time1 = 1</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u8C03\u53D6\u767B\u9646\u63A5\u53E3\uFF0C\u83B7\u53D6session\u9700\u8981\u7684\u503C\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u628A\u503C\u5199\u8FDBjs\u8BED\u53E5\uFF0C\u7528selenium\u7684 execute_script\u65B9\u6CD5\u6267\u884Cjs\uFF0C\u6A21\u62DF\u767B\u9646\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">driver = webdriver.Chrome()</span></span>
<span class="line"><span style="color:#A6ACCD;">driver.get(&quot;http://lot.hpwbt666.com/home&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">scriptArray = &quot;localStorage.setItem(&#39;token&#39;, &#39;%s&#39;);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;user&#39;, &#39;%s&#39;);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;balance&#39;, %s);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;userDisabled&#39;, %s);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;isTest&#39;, %s);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;userValid&#39;, %s);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;oid&#39;, %s);\\</span></span>
<span class="line"><span style="color:#A6ACCD;">    localStorage.setItem(&#39;time&#39;, %s);&quot; % (token, user, balance, userDisabled,</span></span>
<span class="line"><span style="color:#A6ACCD;">                                          isTest, userValid, oid, time1)</span></span>
<span class="line"><span style="color:#A6ACCD;">driver.execute_script(scriptArray)  # \u4FEE\u6539session</span></span>
<span class="line"><span style="color:#A6ACCD;">js = &#39;return Array.apply(0, new Array(localStorage.length)).map(function (o, i) { return localStorage.getItem(localStorage.key(i)); })&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">a = driver.execute_script(js)  # \u83B7\u53D6session</span></span>
<span class="line"><span style="color:#A6ACCD;">print(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">driver.refresh()</span></span>
<span class="line"><span style="color:#A6ACCD;">time.sleep(10)</span></span>
<span class="line"><span style="color:#A6ACCD;">driver.quit()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,1),r=[p];function t(o,c,i,u,b,A){return a(),n("div",null,r)}const d=s(l,[["render",t]]);export{m as __pageData,d as default};
