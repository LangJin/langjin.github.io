import{_ as s,c as n,o as a,a as e}from"./app.0b5dffb1.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":2,"title":"\u7BA1\u7406","slug":"\u7BA1\u7406","link":"#\u7BA1\u7406","children":[]},{"level":2,"title":"\u7279\u70B9","slug":"\u7279\u70B9","link":"#\u7279\u70B9","children":[]},{"level":2,"title":"\u8FDE\u63A5","slug":"\u8FDE\u63A5","link":"#\u8FDE\u63A5","children":[]},{"level":2,"title":"redis\u7684\u6570\u636E\u7C7B\u578B","slug":"redis\u7684\u6570\u636E\u7C7B\u578B","link":"#redis\u7684\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"\u5B57\u7B26\u4E32/string","slug":"\u5B57\u7B26\u4E32-string","link":"#\u5B57\u7B26\u4E32-string","children":[]},{"level":3,"title":"\u54C8\u5E0C/hash","slug":"\u54C8\u5E0C-hash","link":"#\u54C8\u5E0C-hash","children":[]},{"level":3,"title":"\u5217\u8868/list","slug":"\u5217\u8868-list","link":"#\u5217\u8868-list","children":[]},{"level":3,"title":"\u96C6\u5408/set","slug":"\u96C6\u5408-set","link":"#\u96C6\u5408-set","children":[]},{"level":3,"title":"\u6709\u5E8F\u96C6\u5408/zset","slug":"\u6709\u5E8F\u96C6\u5408-zset","link":"#\u6709\u5E8F\u96C6\u5408-zset","children":[]}]},{"level":2,"title":"redis\u7684\u8BBE\u7F6E","slug":"redis\u7684\u8BBE\u7F6E","link":"#redis\u7684\u8BBE\u7F6E","children":[{"level":3,"title":"\u5BC6\u7801\u7684\u8BBE\u7F6E","slug":"\u5BC6\u7801\u7684\u8BBE\u7F6E","link":"#\u5BC6\u7801\u7684\u8BBE\u7F6E","children":[]},{"level":3,"title":"\u914D\u7F6E\u6587\u4EF6","slug":"\u914D\u7F6E\u6587\u4EF6","link":"#\u914D\u7F6E\u6587\u4EF6","children":[]}]}],"relativePath":"tools/redis.md","lastUpdated":1666713491000}'),l={name:"tools/redis.md"},p=e(`<p>redis\u662F\u4E00\u4E2A\u975E\u5173\u7CFB\u6570\u636E\u5E93\u3002 \u6240\u8C13\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E5F\u662F\u6570\u636E\u5E93\uFF0C\u8FD8\u662F\u7528\u6765\u5B58\u50A8\u6570\u636E\u7684\u3002\u53EA\u662Fredis\u91CC\u9762\u6CA1\u6709\u8868\u7684\u6982\u5FF5\uFF0C\u90A3\u4E48\u4E5F\u5C31\u6CA1\u6709\u8868\u5173\u7CFB\u7684\u8BF4\u6CD5\u3002\u6240\u4EE5\u53EB\u505A\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><ul><li>Linux</li></ul><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum install redis</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>Windows \u5728Windows\u4E0A\u5B89\u88C5\u975E\u5E38\u7684\u7B80\u5355\u3002 \u53EA\u9700\u8981\u628A\u538B\u7F29\u5305\u89E3\u538B\u51FA\u6765\uFF0C\u653E\u5230\u5408\u9002\u7684\u4F4D\u7F6E\u3002\u76F4\u63A5\u628Aredis\u7684\u76EE\u5F55\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u7684\u4F7F\u7528\u4E86\u3002</li></ul><h2 id="\u7BA1\u7406" tabindex="-1">\u7BA1\u7406 <a class="header-anchor" href="#\u7BA1\u7406" aria-hidden="true">#</a></h2><ul><li>\u542F\u52A8 systemctl start redis</li><li>\u505C\u6B62 systemctl stop redis</li><li>\u91CD\u542F systemctl restart redis</li><li>\u67E5\u770B\u72B6\u6001 systemctl status redis</li></ul><h2 id="\u7279\u70B9" tabindex="-1">\u7279\u70B9 <a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a></h2><ul><li>redis\u4E2D\u7684\u6570\u636E\u5168\u90E8\u90FD\u662F\u5B58\u653E\u5728\u4E86\u5185\u5B58\u4E2D\uFF0C\u5F53\u6211\u4EEC\u91CD\u65B0\u542F\u52A8\u3001\u5173\u95EDredis\u7684\u65F6\u5019\uFF0Credis\u7684\u5185\u5B58\u4E2D\u7684\u6570\u636E\u5168\u90E8\u90FD\u4F1A\u88AB\u91CA\u653E\u3002</li><li>redis\u4E3A\u4E86\u907F\u514D\u56E0\u4E3A\u91CD\u542F\u6216\u8005\u5173\u95ED\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u5728\u6211\u4EEC\u65AD\u5F00redis\u7684\u8FDE\u63A5\u6216\u8005\u6B63\u5E38\u7684\u5173\u95ED\u91CD\u542Fredis\u7684\u65F6\u5019\uFF0Credis\u4F1A\u81EA\u52A8\u7684\u628A\u5185\u5B58\u4E2D\u7684\u6570\u636E\u4FDD\u5B58\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\u3002\u7136\u540E\u518D\u4E0B\u4E00\u6B21\u542F\u52A8redis\u7684\u65F6\u5019\uFF0Credis\u5C31\u4F1A\u628A\u6587\u4EF6\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u7ED9\u52A0\u8F7D\u5230\u5185\u5B58\u4E2D\u3002</li><li>\u5185\u5B58\u8BFB\u5199\u901F\u5EA6\u6BD4\u786C\u76D8\u7684\u8BFB\u5199\u901F\u5EA6\u5FEB500-3000\u500D\u7684\u6837\u5B50\u3002\u6240\u4EE5redis\u7684\u8BFB\u5199\u901F\u5EA6\u4E5F\u662F\u8D85\u7EA7\u5FEB\u7684\u3002</li><li>redis\u53EA\u80FD\u5B58\u4E00\u4E9B\u7B80\u5355\u7684\u6570\u636E\uFF0C\u6240\u4EE5redis\u8FD9\u79CD\u6B38\u5173\u7CFB\u578B\u6570\u636E\u5E93\u90FD\u4E0D\u662F\u4F5C\u4E3A\u6211\u4EEC\u5B58\u50A8\u6570\u636E\u7684\u4E3B\u529B\u5DE5\u5177\uFF0C\u4E00\u822C\u6211\u4EEC\u90FD\u53EA\u662F\u7528redis\u6765\u4F5C\u4E3A\u4E00\u4E2A\u8F85\u52A9\u7684\u6570\u636E\u5E93\u3002</li><li>\u5728\u5B9E\u9645\u7684\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u628A\u4E00\u4E9Bmysql\u4E2D\u7ECF\u5E38\u4F1A\u67E5\u8BE2\u7684\u6570\u636E\u590D\u5236\u51FA\u6765\uFF0C\u5B58\u5230redis\u4E2D\uFF0C\u4EE5\u6B64\u6765\u63D0\u9AD8\u8F6F\u4EF6\u8FD0\u884C\u7684\u901F\u5EA6\u3002</li></ul><h2 id="\u8FDE\u63A5" tabindex="-1">\u8FDE\u63A5 <a class="header-anchor" href="#\u8FDE\u63A5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-cli -h redis\u6240\u5728\u7684IP -p \u7AEF\u53E3\u53F7 -n db\u7684\u7F16\u53F7 --raw</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>-h\uFF0Credis\u6240\u5728\u7684\u8BBE\u5907\u7684IP\uFF0C\u5982\u679C\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u503C\u662F127.0.0.1</li><li>-p,redis\u7684\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u503C6379</li><li>-n,redis\u9ED8\u8BA4\u81EA\u5E26\u4E8616\u4E2A\u6570\u636E\u5E93\uFF0C\u8FD9\u4E2A16\u4E2A\u6570\u636E\u5E93\u7684\u4F5C\u7528\u548C\u6027\u8D28\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F60\u8981\u4F7F\u7528\u54EA\u4E2A\uFF0C\u5C31\u8F93\u5165\u54EA\u4E2A\u7684\u7F16\u53F7\uFF0C\u5982\u679C\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u662F0\u3002</li><li>--raw,\u8FD9\u4E2A\u4E1C\u897F\u7684\u4F5C\u7528\u4F7F\u7528\u5904\u7406\u4E2D\u6587\u4E71\u7801\u7684\u3002</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">redis-cli --raw</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1Aredis\u662F\u6CA1\u6709\u8D26\u53F7\u7684\u8BF4\u6CD5\uFF0C\u4F46\u662F\u662F\u5B58\u5728\u5BC6\u7801\u7684\uFF0C\u5BC6\u7801\u7684\u8F93\u5165\u8981\u5728\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u7136\u540E\u518D\u8F93\u5165\u5BC6\u7801\u7684\u3002</p></blockquote><h2 id="redis\u7684\u6570\u636E\u7C7B\u578B" tabindex="-1">redis\u7684\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#redis\u7684\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>redis\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u4E0D\u662F\u503C\u7684\u5B58\u50A8\u7684\u6570\u636E\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u800C\u662F\u503C\u5B58\u50A8\u7684\u6570\u636E\u662F\u4EE5\u4EC0\u4E48\u683C\u5F0F\u6765\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u7684\u3002</p><h3 id="\u5B57\u7B26\u4E32-string" tabindex="-1">\u5B57\u7B26\u4E32/string <a class="header-anchor" href="#\u5B57\u7B26\u4E32-string" aria-hidden="true">#</a></h3><ul><li>\u5B57\u7B26\u4E32\u7684\u6570\u636E\u5B58\u50A8\u683C\u5F0F</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">key(\u952E)  |   value(\u503C)</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">zhangsan |  \u5F20\u4E09\u4ECA\u5E7421\uFF0C\u6027\u522B\u662F\u7537\uFF0C\u7231\u597D\u6253\u7BEE\u7403</span></span>
<span class="line"><span style="color:#A6ACCD;">lisi     | \u674E\u56DB\u662F\u4E00\u4E2A\u4E0D\u597D\u4E0D\u574F\u7684\u4EBA\uFF0C\u68A6\u60F3\u662F\u53EF\u4EE5\u8EBA\u5E73</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728\u5B57\u7B26\u4E32\u7C7B\u578B\u4E2D\uFF0Ckey\u548Cvalue\u662F\u6C38\u8FDC\u6210\u5BF9\u51FA\u73B0\u7684\u3002\u5E76\u4E14key\u662F\u53EF\u4EE5\u91CD\u590D\u7684\uFF0C\u662F\u552F\u4E00\u7684\u3002 \u8FD9\u79CDkey\u548Cvalue\u6210\u5BF9\u51FA\u73B0\u7684\u683C\u5F0F\uFF0C\u5728\u5176\u4ED6\u7684\u5730\u65B9\u6211\u4EEC\u4E5F\u628A\u4ED6\u53EB\u505A <strong>\u952E\u503C\u5BF9</strong> \u683C\u5F0F</p><ul><li>\u65B0\u589E</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">set key value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">set zhangsan \u5F20\u4E09\u4ECA\u5E7421\uFF0C\u6027\u522B\u662F\u7537\uFF0C\u7231\u597D\u6253\u7BEE\u7403</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u4FEE\u6539</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">set key value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u65B0\u589E\u548C\u4FEE\u6539\u7684\u8BED\u53E5\u662F\u4E00\u6837\u7684\uFF0C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u662F\u65B0\u589E\u8FD8\u662F\u4FEE\u6539\u53D6\u51B3\u4E8Ekey\u662F\u5426\u5B58\u5728\uFF0C\u5F53key\u5B58\u5728\u7684\u65F6\u5019\u5C31\u662F\u4FEE\u6539\uFF0C\u4E0D\u5B58\u5728\u7684\u65F6\u5019\u5C31\u662F\u65B0\u589E\u3002\u6240\u4EE5key\u662F\u6539\u4E0D\u4E86\u7684\u3002</p><ul><li>\u5220\u9664</li></ul><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u4E2A\u5220\u9664\u7684\u547D\u4EE4\uFF0C\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u5220\u9664\u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u5176\u4ED6\u683C\u5F0F\u7684\u4E5F\u53EF\u4EE5\u5220\u9664\u3002</p></blockquote><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">del key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u67E5\u770B</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">get key    # \u67E5\u770B\u6307\u5B9A\u7684key\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">keys *  # \u83B7\u53D6\u6240\u6709\u7684key\uFF0C\u5305\u62EC\u4E86\u5176\u4ED6\u7684\u6570\u636E\u7C7B\u578B\u7684key</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">get zhangsan</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u54C8\u5E0C-hash" tabindex="-1">\u54C8\u5E0C/hash <a class="header-anchor" href="#\u54C8\u5E0C-hash" aria-hidden="true">#</a></h3><ul><li>\u54C8\u5E0C\u7C7B\u578B\u7684\u6570\u636E\u683C\u5F0F</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">key(\u952E)  |   value(\u503C)</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">key      |  filed     |     value</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">zhangsan |  age       |     24</span></span>
<span class="line"><span style="color:#A6ACCD;">         |  name      |     \u5F20\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">key      |  filed     |     value</span></span>
<span class="line"><span style="color:#A6ACCD;">----------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">key      |  filed     |     value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u65B0\u589E</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hset key field value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hset zhangsan age 23</span></span>
<span class="line"><span style="color:#A6ACCD;">hset zhangsan name \u5F20\u4E09</span></span>
<span class="line"><span style="color:#A6ACCD;">hset zhangsan aihao rap</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4FEE\u6539</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hset key field value</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u5220\u9664</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hdel key filed  # \u5220\u9664\u67D0\u4E2A\u5177\u4F53\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">del key         # \u6574\u4E2Akey\u5168\u90E8\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u67E5\u770B</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hget key field  # \u67E5\u770B\u5177\u4F53\u7684\u4E00\u4E2A\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">hgetall key     # \u67E5\u770B\u8FD9\u4E2Akey\u91CC\u9762\u6240\u6709\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5217\u8868-list" tabindex="-1">\u5217\u8868/list <a class="header-anchor" href="#\u5217\u8868-list" aria-hidden="true">#</a></h3><h3 id="\u96C6\u5408-set" tabindex="-1">\u96C6\u5408/set <a class="header-anchor" href="#\u96C6\u5408-set" aria-hidden="true">#</a></h3><h3 id="\u6709\u5E8F\u96C6\u5408-zset" tabindex="-1">\u6709\u5E8F\u96C6\u5408/zset <a class="header-anchor" href="#\u6709\u5E8F\u96C6\u5408-zset" aria-hidden="true">#</a></h3><h2 id="redis\u7684\u8BBE\u7F6E" tabindex="-1">redis\u7684\u8BBE\u7F6E <a class="header-anchor" href="#redis\u7684\u8BBE\u7F6E" aria-hidden="true">#</a></h2><h3 id="\u5BC6\u7801\u7684\u8BBE\u7F6E" tabindex="-1">\u5BC6\u7801\u7684\u8BBE\u7F6E <a class="header-anchor" href="#\u5BC6\u7801\u7684\u8BBE\u7F6E" aria-hidden="true">#</a></h3><p>redis\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u9ED8\u8BA4\u662F\u6CA1\u6709\u5BC6\u7801\u7684\u3002 \u5982\u679C\u8981\u8BBE\u7F6E\u5BC6\u7801\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">config set requirepass \u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u6211\u4EEC\u8BBE\u7F6E\u4E86\u5BC6\u7801\u540E\uFF0C\u6211\u4EEC\u64CD\u4F5C\u4F1A\u51FA\u73B0NOAUTH Authentication required. \u8FD9\u4E2A\u63D0\u793A\u3002 \u8FD9\u4E2A\u63D0\u793A\u7684\u610F\u601D\u5C31\u662F\u6CA1\u6709\u8F93\u5165\u5BC6\u7801\u7684\u610F\u601D\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">auth \u5BC6\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5728\u8F93\u5165\u4E86\u5BC6\u7801\u540E\uFF0C\u5C31\u53EF\u4EE5\u5BF9redis\u8FDB\u884C\u6B63\u5E38\u7684\u64CD\u4F5C\u4E86\u3002 \u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\u67E5\u770B\u6211\u4EEC\u5F53\u524D\u7684\u5BC6\u7801\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">config get requirepass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u8BBE\u7F6E\u7684\u5BC6\u7801\uFF0C\u4E0D\u662F\u6C38\u4E45\u6027\u7684\u5BC6\u7801\uFF0C\u53EA\u8981\u5BF9redis\u8FDB\u884C\u91CD\u542F\u540E\uFF0C\u8FD9\u79CD\u5BC6\u7801\u5C31\u4F1A\u6D88\u5931\uFF0C</p></blockquote><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><blockquote><p>\u5173\u4E8Eredis\u7684\u6240\u6709\u7684\u8BBE\u7F6E\uFF0C\u90FD\u662F\u901A\u8FC7\u4FEE\u6539redis\u7684\u914D\u7F6E\u6587\u4EF6\u6765\u5B9E\u73B0\u7684\u3002</p></blockquote><p>redis\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u662F <strong>/etc/redis.conf</strong></p><ul><li>bind,\u9650\u5236redis\u53EA\u5141\u8BB8\u54EA\u4E2AIP\u7684\u8BBE\u5907\u53BB\u8FDE\u63A5\u3002\u548Cmysql\u7684\u8D26\u53F7\u8BBE\u7F6E\u4E2D\u7684\u4E3B\u673A\u7684\u4F5C\u7528\u662F\u4E00\u6837\u7684\uFF0C\u9ED8\u8BA4\u662F127.0.0.1\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u4E0D\u505A\u4EFB\u4F55\u7684\u9650\u5236\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u62100.0.0.0\u3002</li><li>requirepass,\u5BC6\u7801\u7684\u8BBE\u7F6E\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u7684\u5BC6\u7801\uFF0C\u5C31\u662F\u6C38\u4E45\u6027\u7684\u5BC6\u7801\u4E86\u3002</li><li>dbfilename\uFF0Credis\u7684\u6570\u636E\u6587\u4EF6\u7684\u540D\u5B57\u3002</li><li>dir\uFF0Creids\u7684\u6570\u636E\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E\u3002</li><li>port\uFF0C\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA46379.</li></ul>`,60),i=[p];function r(c,d,o,t,u,b){return a(),n("div",null,i)}const C=s(l,[["render",r]]);export{A as __pageData,C as default};