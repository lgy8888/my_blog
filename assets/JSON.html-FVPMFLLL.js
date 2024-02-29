import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as t}from"./app-OTaO6_y0.js";const e={},p=t(`<h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1><h2 id="json简介" tabindex="-1"><a class="header-anchor" href="#json简介" aria-hidden="true">#</a> JSON简介</h2><ul><li>概念：<strong>J</strong>ava<strong>S</strong>cript<strong>O</strong>bject<strong>N</strong>otation，JavaScript对象表示法</li><li>语法简单，层次结构鲜明，现在多用于作为数据载体，在网络中进行数据传输</li></ul><h2 id="json基础语法" tabindex="-1"><a class="header-anchor" href="#json基础语法" aria-hidden="true">#</a> JSON基础语法</h2><ul><li><p>定义</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> 变量名 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;key1&quot;</span><span class="token operator">:</span>value1<span class="token punctuation">,</span> 
    <span class="token string-property property">&quot;key2&quot;</span><span class="token operator">:</span>value2<span class="token punctuation">,</span>
     ……
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>value的数据类型为：</p><ul><li>数字（整数或浮点数）</li><li>字符串（在双引号中）</li><li>逻辑值（true或false）</li><li>数组（在方括号中）</li><li>对象（在花括号中）</li><li>空值（null）</li></ul></li><li><p>获取数据：<code>变量名.key</code></p></li></ul><h2 id="json数据和java对象转换" tabindex="-1"><a class="header-anchor" href="#json数据和java对象转换" aria-hidden="true">#</a> JSON数据和Java对象转换</h2><h3 id="fastjson" tabindex="-1"><a class="header-anchor" href="#fastjson" aria-hidden="true">#</a> Fastjson</h3><ul><li><p>Fastjson是阿里巴巴的一个java语言编写的高性能功能完善的JSON库，是目前Java语言中最快的JSON库，可以实现Java对象和JSON字符串的相互转换</p></li><li><p>使用步骤</p><ul><li><p>导入坐标</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.76<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Java对象转JSON</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> jsonStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>JSON字符串转Java对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parseObject</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><h3 id="jackson" tabindex="-1"><a class="header-anchor" href="#jackson" aria-hidden="true">#</a> jackson</h3><ul><li><p>jackson是SpringMVC框架中内置的一个JSON解析器</p></li><li><p>使用步骤</p><ul><li>导入坐标</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建jackson的核心对象：<code>ObjectMapper</code></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ObjectMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>调用<code>ObjectMapper</code>的相关方法进行转换 <ul><li><code>writeValue(param1, obj)</code>方法：将<code>obj</code>对象转换为JSON字符串并填充到<code>param1</code>中 <ul><li><code>File</code>：保存到指定文件中</li><li><code>Writer</code>：填充到字符输出流中</li><li><code>OutputStream</code>：填充到字节输出流中</li></ul></li><li><code>writeValueAsString(obj)</code>：将<code>obj</code>对象转换为JSON字符串</li><li><code>readValue(json字符串, POJO类型)</code>：将JSON字符串转换为POJO类型的对象</li></ul></li></ul></li><li><p>相关注解</p></li></ul><table><thead><tr><th>名称</th><th>类型</th><th>位置</th><th>作用</th></tr></thead><tbody><tr><td><code>@JsonIgnore</code></td><td>变量/方法注解</td><td>POJO类的成员变量或其getter方法上</td><td>进行JSON转换的时候忽略该成员变量</td></tr><tr><td><code>@JsonFormat</code></td><td>变量/方法注解</td><td>POJO类的成员变量或其getter方法上</td><td>转换的时候使用<code>pattern</code>属性对该成员变量进行解析</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Date</span> birthday
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><h3 id="查询所有" tabindex="-1"><a class="header-anchor" href="#查询所有" aria-hidden="true">#</a> 查询所有</h3><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230314112456454.png" alt="image-20230315165201846" tabindex="0" loading="lazy"><figcaption>image-20230315165201846</figcaption></figure><ul><li>页面加载完成事件</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>axios发送get请求到selectAllServlet</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>        <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8080/brand-demo/selectAllServlet&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>定义brands变量接收从selectAllServlet传过来的数据</li><li>定义tableData变量装列表数据，tableData中装表头</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token keyword">let</span> brands <span class="token operator">=</span> resp<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
            <span class="token keyword">let</span> tableData <span class="token operator">=</span> <span class="token string">&quot;&lt;tr&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;序号&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;品牌名称&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;企业名称&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;排序&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;品牌介绍&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;状态&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;        &lt;th&gt;操作&lt;/th&gt;\\n&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;    &lt;/tr&gt;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>for循环遍历brands，取出每个brand以拼字符串的形式并装入tableData中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> brands<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> brand <span class="token operator">=</span> brands<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                tableData <span class="token operator">+=</span> <span class="token string">&quot;&lt;tr align=\\&quot;center\\&quot;&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> brand<span class="token punctuation">.</span>brandName <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> brand<span class="token punctuation">.</span>companyName <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> brand<span class="token punctuation">.</span>ordered <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> brand<span class="token punctuation">.</span>description <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&quot;</span> <span class="token operator">+</span> brand<span class="token punctuation">.</span>status <span class="token operator">+</span> <span class="token string">&quot;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;        &lt;td&gt;&lt;a href=\\&quot;#\\&quot;&gt;修改&lt;/a&gt; &lt;a href=\\&quot;#\\&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;\\n&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;    &lt;/tr&gt;&quot;</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在循环外设置表格数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;brandTable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> tableData
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加品牌" tabindex="-1"><a class="header-anchor" href="#添加品牌" aria-hidden="true">#</a> 添加品牌</h3><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230315171108522.png" alt="image-20230315171108522" tabindex="0" loading="lazy"><figcaption>image-20230315171108522</figcaption></figure>`,27),o=[p];function l(c,i){return n(),s("div",null,o)}const d=a(e,[["render",l],["__file","JSON.html.vue"]]);export{d as default};
