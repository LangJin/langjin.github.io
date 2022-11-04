import{_ as s,c as n,o as a,a as l}from"./app.0b5dffb1.js";const i=JSON.parse('{"title":"\u5B89\u88C5allure\u5DE5\u5177","description":"","frontmatter":{},"headers":[],"relativePath":"python/allure.md","lastUpdated":1666713491000}'),p={name:"python/allure.md"},o=l(`<h1 id="\u5B89\u88C5allure\u5DE5\u5177" tabindex="-1">\u5B89\u88C5allure\u5DE5\u5177 <a class="header-anchor" href="#\u5B89\u88C5allure\u5DE5\u5177" aria-hidden="true">#</a></h1><p>1\u3001\u5728powershell\u8F93\u5165\uFF0C\u5B89\u88C5scoop</p><blockquote><p>Set-ExecutionPolicy RemoteSigned -scope CurrentUser iex (new-object net.webclient).downloadstring(&#39;<a href="https://get.scoop.sh" target="_blank" rel="noreferrer">https://get.scoop.sh</a>&#39;)</p></blockquote><p>2\u3001\u5B89\u88C5allure</p><blockquote><p>scoop install allure</p></blockquote><p>3\u3001\u914D\u7F6Ejava\u73AF\u5883\u53D8\u91CF<br> 4\u3001\u5B89\u88C5\u7B2C\u4E09\u65B9\u5305</p><blockquote><p>pip install allure-pytest</p></blockquote><p>5\u3001\u7F16\u5199\u4EE3\u7801<br> 6\u3001\u672C\u5730\u6267\u884C\u5E76\u67E5\u770B\u62A5\u544A<br> \u8FD0\u884C\u811A\u672C\u5E76\u751F\u6210\u6D4B\u8BD5\u62A5\u544A\u9700\u8981\u7684\u6587\u4EF6</p><blockquote><p>py.test --alluredir=%allure_result_folder% ./tests</p></blockquote><p>\u751F\u6210\u62A5\u544A</p><blockquote><p>allure serve %allure_result_folder%<br> allure generate ./result/ -o ./report/ --clean</p></blockquote><p>\u6253\u5F00\u62A5\u544A</p><blockquote><p>allure open -h 127.0.0.1 -p 8083 ./report/</p></blockquote><h1 id="\u96C6\u6210jenkins" tabindex="-1">\u96C6\u6210jenkins <a class="header-anchor" href="#\u96C6\u6210jenkins" aria-hidden="true">#</a></h1><p>1\u3001\u4E0B\u8F7D\u5B89\u88C5jenkins<br> 2\u3001\u5B89\u88C5allure\u63D2\u4EF6<br> 3\u3001\u65B0\u5EFAjob 1\u3001\u6253\u5F00\u4EE3\u7801\u6240\u5728\u8DEF\u5F84 2\u3001path result<br> 4\u3001\u6784\u5EFA</p><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> allure</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">feature</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testsuite1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">story</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testcass1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_minor</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">environment</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">country</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">countrys</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E\u8FD9\u4E2A\u6B65\u9AA4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">???</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E8C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">???</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E09</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">???</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">False</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">title</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6D4B\u8BD5\u62A5\u544A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">severity</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">critical</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u4F18\u5148\u7EA7\uFF0C\u5305\u542Bblocker, critical, normal, minor, trivial \u51E0\u4E2A\u4E0D\u540C\u7684\u7B49\u7EA7</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">feature</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testsuite2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">story</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testcass2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testcass3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">story</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testcass4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TestBar</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_bar</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test_bar2</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">self</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E8C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">with</span><span style="color:#A6ACCD;"> allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">step</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6B65\u9AA4\u4E09</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">allure</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">attach</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF4\u660E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">assert</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,16),e=[o];function r(t,c,F,D,y,A){return a(),n("div",null,e)}const C=s(p,[["render",r]]);export{i as __pageData,C as default};