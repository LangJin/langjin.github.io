import{_ as s,c as n,o as a,a as l}from"./app.0b5dffb1.js";const A=JSON.parse('{"title":"\u7EC3\u4E601","description":"","frontmatter":{},"headers":[{"level":2,"title":"python\u7684\u5224\u65AD","slug":"python\u7684\u5224\u65AD","link":"#python\u7684\u5224\u65AD","children":[]},{"level":2,"title":"python\u7684\u5FAA\u73AF","slug":"python\u7684\u5FAA\u73AF","link":"#python\u7684\u5FAA\u73AF","children":[]}],"relativePath":"python/python-04-judge-loop.md","lastUpdated":1664360484000}'),p={name:"python/python-04-judge-loop.md"},o=l(`<h2 id="python\u7684\u5224\u65AD" tabindex="-1">python\u7684\u5224\u65AD <a class="header-anchor" href="#python\u7684\u5224\u65AD" aria-hidden="true">#</a></h2><p>python\u4F1A\u8FD0\u884C\u7B26\u5408\u5224\u65AD\u6761\u4EF6\u7684\u4EE3\u7801\u3002 \u4E0D\u7B26\u5408\u5224\u65AD\u6761\u4EF6\u7684\u4EE3\u7801\u5C31\u4E0D\u4F1A\u8FD0\u884C</p><ul><li>if</li></ul><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8F93\u51FA\u7684\u5185\u5BB9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>if...else...</li></ul><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8F93\u51FA\u7684\u5185\u5BB9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8F93\u51FA\u7684\u5185\u5BB9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>if...elif...elif...else...</li></ul><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8F93\u51FA\u7684\u5185\u5BB9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">elif</span><span style="color:#A6ACCD;"> age </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ssss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8F93\u51FA\u7684\u5185\u5BB9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="python\u7684\u5FAA\u73AF" tabindex="-1">python\u7684\u5FAA\u73AF <a class="header-anchor" href="#python\u7684\u5FAA\u73AF" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u60F3\u8981\u91CD\u590D\u7684\u8FD0\u884C\u4E00\u5757\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u5FAA\u73AF\u6765\u5B9E\u73B0\u3002</p><ul><li>while\u5FAA\u73AF while\u5FAA\u73AF\u662F\u901A\u8FC7while\u540E\u9762\u7684\u6761\u4EF6\u8FDB\u884C\u7684\uFF0C\u53EA\u8981\u6EE1\u8DB3\u6761\u4EF6\u5C31\u4F1A\u4E00\u81F4\u5FAA\u73AF\u4E0B\u53BB\u3002</li></ul><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> Ture</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5FAA\u73AF\u6253\u5370</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><p>for\u5FAA\u73AF for\u5FAA\u73AF\u662F\u901A\u8FC7\u904D\u5386\u7684\u624B\u6BB5\u6765\u5B9E\u73B0\u7684\u3002</p></li><li><p>break \u5728\u5FAA\u73AF\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u9047\u5230\u4E86break\u5C31\u7ED3\u675F\u8FD9\u4E2A\u5FAA\u73AF</p></li><li><p>continue \u5728\u5FAA\u73AF\u7684\u8FC7\u7A0B\u4E2D\u5982\u679C\u9047\u5230\u4E86continue\u5C31\u8DF3\u8FC7\u8FD9\u4E00\u6B21\u5FAA\u73AF</p></li></ul><h1 id="\u7EC3\u4E601" tabindex="-1">\u7EC3\u4E601 <a class="header-anchor" href="#\u7EC3\u4E601" aria-hidden="true">#</a></h1><blockquote><p>\u6709\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u5B58\u653E\u7684\u90FD\u662F\u5B66\u751F\u7684\u6210\u7EE9\uFF0C \u73B0\u5728\u8981\u6C42\u628A60\u5206\u4EE5\u4E0A\u7684\u6210\u7EE9\u548C60\u4E00\u4E0B\u7684\u6210\u7EE9\u5206\u522B\u5B58\u653E\u5230\u4E24\u4E2A\u6570\u7EC4\u4E2D</p></blockquote><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">23</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">34</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">43</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">78</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">87</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">98</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">55</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">45</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">78</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">98</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">84</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">83</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">89</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">highlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">lowlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        highlist</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        lowlist</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">highlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">lowlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>\u7BA1\u7406\u5458\u8F93\u5165\u5B66\u751F\u6210\u7EE9\uFF0C\u73B0\u5728\u8981\u6C42\u628A60\u5206\u4EE5\u4E0A\u7684\u6210\u7EE9\u548C60\u4E00\u4E0B\u7684\u6210\u7EE9\u5206\u522B\u5B58\u653E\u5230\u4E24\u4E2A\u6570\u7EC4\u4E2D</p></blockquote><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">highlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">lowlist </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True:</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF7\u8F93\u5165\u5B66\u751F\u6210\u7EE9\uFF1A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">999</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">break</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        highlist</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        lowlist</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">highlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">lowlist</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>\u4F7F\u7528python\u6253\u537099\u4E58\u6CD5\u8868</p></blockquote><div class="language-py line-numbers-mode"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;">X</span><span style="color:#F78C6C;">{}</span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">{}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">format</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">),</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,20),e=[o];function r(c,t,F,D,y,i){return a(),n("div",null,e)}const u=s(p,[["render",r]]);export{A as __pageData,u as default};