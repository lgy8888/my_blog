import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as i,b as n,d as e,e as p,f as s}from"./app-OTaO6_y0.js";const l={},u=s(`<h1 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h1><h2 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h2><ul><li><p>链表是一种通过指针串联在一起的线性结构</p></li><li><p>一个节点由<strong>数据域</strong>和<strong>指针域</strong>两部分组成，最后一个节点的指针域指向null（空指针）</p></li></ul><h3 id="链表的类型" tabindex="-1"><a class="header-anchor" href="#链表的类型" aria-hidden="true">#</a> 链表的类型</h3><ul><li><p><strong>单链表</strong>：一个指针域，指针域指向下一个节点</p></li><li><p><strong>双链表</strong>：两个指针域，一个指向上一个节点，一个指向下一个节点</p><ul><li>双链表既可以向前查询也可以向后查询</li></ul></li><li><p><strong>循环链表</strong>：首尾相连的单链表，可以用来解决约瑟夫问题</p></li></ul><h3 id="链表的存储方式" tabindex="-1"><a class="header-anchor" href="#链表的存储方式" aria-hidden="true">#</a> 链表的存储方式</h3><ul><li>链表是通过指针域的指针链接在内存中的各个节点</li><li>链表中的节点在内存中不是连续分布的，是散乱分布在内存的某地址上，分配机制取决于操作系统的内存管理</li></ul><h3 id="链表的定义" tabindex="-1"><a class="header-anchor" href="#链表的定义" aria-hidden="true">#</a> 链表的定义</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
    <span class="token comment">// 结点的值</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>

    <span class="token comment">// 下一个结点</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>

    <span class="token comment">// 节点的构造函数(无参)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 节点的构造函数(有一个参数)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 节点的构造函数(有两个参数)</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链表的操作" tabindex="-1"><a class="header-anchor" href="#链表的操作" aria-hidden="true">#</a> 链表的操作</h3><ul><li><p>删除节点</p><ul><li>将待删除节点的前一个节点的指针指向待删除节点的后一个节点</li></ul></li><li><p>添加节点</p><ul><li>将待添加位置的前一个节点指针指向待添加节点，将待添加节点的指针指向待添加位置的后一个指针</li></ul></li></ul><h2 id="移除链表元素" tabindex="-1"><a class="header-anchor" href="#移除链表元素" aria-hidden="true">#</a> 移除链表元素</h2>`,12),d={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},r=s(`<h3 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h3><p><strong>两根指针</strong>，<code>pre</code>指针和<code>cur</code>指针，前指针用来删除，当前指针用来遍历</p><p>设置<strong>虚拟头节点</strong>，统一所有节点的移除方式</p><p><code>pre</code>初始化为虚拟头节点，<code>cur</code>初始化为给定头节点</p><p><code>while</code>循环遍历整个链表，条件为<strong>当前指针不等于空</strong></p><p>循环中<strong>判断当前指针的值</strong>是否符合条件，符合就删除</p><p>删除后不要忘记<strong>更新两根指针</strong></p><h3 id="易错点" tabindex="-1"><a class="header-anchor" href="#易错点" aria-hidden="true">#</a> 易错点</h3><ul><li>设置<strong>虚拟头指针</strong>统一所有节点的移除方式</li><li><strong>两根指针</strong>，一根用于删除一跟用于遍历</li><li>循环遍历链表的条件为<strong>当前指针不为空</strong></li><li>前指针的更新与否取决于是否有进行移除操作（移除操作本质是更新前指针的<code>next</code>）</li></ul><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeElements</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 设置虚拟头指针</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 初始化前指针为虚拟头指针</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token comment">// 初始化当前指针为给定头指针</span>
        <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token comment">// 用当前指针遍历整个链表</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 判断是否符合条件</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 删除相当于更新了前指针的值</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// 没有删除就得更新前指针</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 当前指针无论如何都要更新</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 返回</span>
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计链表" tabindex="-1"><a class="header-anchor" href="#设计链表" aria-hidden="true">#</a> 设计链表</h2>`,12),k={href:"https://leetcode.cn/problems/design-linked-list/",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="基本思路-1" tabindex="-1"><a class="header-anchor" href="#基本思路-1" aria-hidden="true">#</a> 基本思路</h3><ul><li>先定义节点类 <ul><li>属性为当前节点值和下一个节点指针</li></ul></li><li>再定义链表类 <ul><li>属性为头节点和链表长度</li></ul></li><li>涉及到索引的方法都需要判断索引是否大于链表长度是否为负 <ul><li>无效索引根据题目要求返回-1或直接返回</li></ul></li><li>按索引查 <ul><li>判断索引是否合法</li><li>定义头节点为当前指针</li><li>for循环遍历到给定索引处为止</li><li>返回当前指针的值</li></ul></li><li>增加 <ul><li>只需要实现按索引增加</li><li>加头部则索引为0；加尾部则索引为链表长度size</li><li>若索引为负数则改为0，若索引大于链表长度则直接返回</li><li>增加需要同时更新链表大小size</li><li>定义索引处的前驱节点pre</li><li>for循环遍历到给定索引处前一个位置</li><li>在该位置利用前驱节点pre执行新增操作</li></ul></li><li>按索引删 <ul><li>判断索引是否合法</li><li>删除需要同时更新链表大小size</li><li>定义索引处的前驱节点pre</li><li>for循环遍历到给定索引处前一个位置</li><li>在该位置利用前驱节点pre执行删除操作</li></ul></li></ul><h3 id="易错点-1" tabindex="-1"><a class="header-anchor" href="#易错点-1" aria-hidden="true">#</a> 易错点</h3><ul><li>链表类少个size</li><li>忘记判断索引的合法性</li><li>合理利用前驱节点来完成增删操作</li><li>增加操作允许索引为负数，意思为加在头部</li><li>一般用for循环，迭代条件为：指针i &lt; 给定索引index <ul><li>遍历到给定索引的前驱节点</li></ul></li></ul><h3 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">MyNode</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">MyNode</span> next<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">MyNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">MyNode</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyLinkedList</span> <span class="token punctuation">{</span>
    <span class="token class-name">MyNode</span> head<span class="token punctuation">;</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyLinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">MyNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cur<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtHead</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtTail</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">addAtIndex</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        index <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">MyNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">MyNode</span> add <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> add<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteAtIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">&gt;=</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">MyNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h2>`,7),m={href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noopener noreferrer"},b=s(`<h3 id="迭代法" tabindex="-1"><a class="header-anchor" href="#迭代法" aria-hidden="true">#</a> 迭代法</h3><h4 id="基本思路-2" tabindex="-1"><a class="header-anchor" href="#基本思路-2" aria-hidden="true">#</a> 基本思路</h4><p>一个<code>pre</code>指针，一个<code>cur</code>指针，再多一个<code>tmp</code>指针用来存放<code>cur.next</code></p><p>循环遍历链表，条件为<code>cur</code>指针不为空</p><p>循环中实现链表倒转逻辑</p><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 双指针法</span>
    <span class="token class-name">ListNode</span> tmp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        tmp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法" aria-hidden="true">#</a> 递归法</h3><h4 id="基本思路-3" tabindex="-1"><a class="header-anchor" href="#基本思路-3" aria-hidden="true">#</a> 基本思路</h4><p>同递归法，只是将循环改为递归</p><p>写个方法传<code>pre</code>指针跟<code>cur</code>指针进去</p><p>设置好边界条件 —— &gt; <code>cur</code>指针为<code>null</code></p><h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 递归法</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> pre<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> cur<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span> tmp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
    cur <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#两两交换链表中的节点" aria-hidden="true">#</a> 两两交换链表中的节点</h2>`,15),h={href:"https://leetcode.cn/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"},y=s(`<h3 id="基本思路-4" tabindex="-1"><a class="header-anchor" href="#基本思路-4" aria-hidden="true">#</a> 基本思路</h3><p>设置虚拟头指针<code>dummy</code></p><p>设置<code>ijk</code>三根指针，设置临时变量<code>tmp</code>存放<code>k.next</code></p><p>迭代时<code>i</code>指向<code>k</code>，<code>k</code>指向<code>j</code>，<code>j</code>指向<code>k.next</code></p><p>边界条件设为<code>k != null</code></p><h3 id="易错点-2" tabindex="-1"><a class="header-anchor" href="#易错点-2" aria-hidden="true">#</a> 易错点</h3><ul><li>返回的是<code>dummy.next</code></li><li>注意<code>head</code>为空和<code>head.next</code>为空的情况</li><li>注意迭代过程中出现的两种情况 <ul><li>第二根指针<code>j</code>有可能位于边界，也有可能为<code>null</code></li></ul></li></ul><h3 id="代码实现-4" tabindex="-1"><a class="header-anchor" href="#代码实现-4" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">swapPairs</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> i <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> j <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> k <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>k <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">ListNode</span> tmp <span class="token operator">=</span> k<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            i<span class="token punctuation">.</span>next <span class="token operator">=</span> k<span class="token punctuation">;</span>
            k<span class="token punctuation">.</span>next <span class="token operator">=</span> j<span class="token punctuation">;</span>
            j<span class="token punctuation">.</span>next <span class="token operator">=</span> tmp<span class="token punctuation">;</span>

            i <span class="token operator">=</span> j<span class="token punctuation">;</span>
            j <span class="token operator">=</span> j<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                k <span class="token operator">=</span> j<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#删除链表的倒数第n个节点" aria-hidden="true">#</a> 删除链表的倒数第N个节点</h2>`,10),x={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list/",target:"_blank",rel:"noopener noreferrer"},w=s(`<h3 id="基本思路-5" tabindex="-1"><a class="header-anchor" href="#基本思路-5" aria-hidden="true">#</a> 基本思路</h3><p>双指针</p><p>创建一个虚拟头指针</p><p>快指针先移动<code>n+1</code>位，与慢指针的距离拉开</p><p>然后快慢指针一起移动，知道快指针碰到链表结尾</p><p>此时慢指针在待移除元素的前一个节点</p><p>完成移除元素操作</p><p>返回虚拟节点的下一个节点</p><h3 id="代码实现-5" tabindex="-1"><a class="header-anchor" href="#代码实现-5" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     ListNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     ListNode(int val, ListNode next) <span class="token punctuation">{</span> this.val = val; this.next = next; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> f <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> s <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            f <span class="token operator">=</span> f<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>f <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            f <span class="token operator">=</span> f<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            s <span class="token operator">=</span> s<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        s<span class="token punctuation">.</span>next <span class="token operator">=</span> s<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表相交" tabindex="-1"><a class="header-anchor" href="#链表相交" aria-hidden="true">#</a> 链表相交</h2>`,11),f={href:"https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="基本思路-6" tabindex="-1"><a class="header-anchor" href="#基本思路-6" aria-hidden="true">#</a> 基本思路</h3><p>使用hashset存第一个链表</p><p>遍历第二个链表，利用hashset里面的contains方法判断第一个链表中是否存在第二个链表的节点</p><p>存在就返回回去，不存在就返回null</p><h3 id="代码实现-6" tabindex="-1"><a class="header-anchor" href="#代码实现-6" aria-hidden="true">#</a> 代码实现</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">getIntersectionNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> headA<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> headB<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> tmp <span class="token operator">=</span> headA<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>tmp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
            tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        tmp <span class="token operator">=</span> headB<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>tmp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>visited<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> tmp<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            tmp <span class="token operator">=</span> tmp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环形链表" tabindex="-1"><a class="header-anchor" href="#环形链表" aria-hidden="true">#</a> 环形链表</h2>`,7),N={href:"https://leetcode.cn/problems/linked-list-cycle-ii/",target:"_blank",rel:"noopener noreferrer"},L=s(`<h3 id="哈希法" tabindex="-1"><a class="header-anchor" href="#哈希法" aria-hidden="true">#</a> 哈希法</h3><h4 id="基本思路-7" tabindex="-1"><a class="header-anchor" href="#基本思路-7" aria-hidden="true">#</a> 基本思路</h4><p>定义一个<code>HashSet</code>集合，用来装遍历过的链表节点</p><p>循环遍历链表，判断之前是否出现过该节点</p><p>出现过则说明进入环了，返回当前节点</p><p>没出现过则说明该链表没有环，返回null</p><h4 id="代码实现-7" tabindex="-1"><a class="header-anchor" href="#代码实现-7" aria-hidden="true">#</a> 代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ListNode</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> head<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法" aria-hidden="true">#</a> 双指针法</h3><h4 id="基本思路-8" tabindex="-1"><a class="header-anchor" href="#基本思路-8" aria-hidden="true">#</a> 基本思路</h4><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20231106200549390.png" alt="image-20231106200549390" tabindex="0" loading="lazy"><figcaption>image-20231106200549390</figcaption></figure><p>定义快慢两个指针<code>fast</code>和<code>slow</code>，快指针一次移动两格，慢指针一次移动一格</p><p>如何判断链表是否有环 ——&gt; 快指针与慢指针是否相遇</p><p>如何找到环的起点：</p><p>将链表起点到环起点的距离设为 $x$，将环起点到快慢相遇点的距离设为 $y$，快慢相遇点到环起点的距离设为 $z$</p><p>如图易得等式： $slow=x+y$ 和 $fast=x+y+n(y+z) ①$</p><p>由快慢指针的速度可得 ：$2slow = fast②$</p><p>结合①②式子可得：$2(x+y)=x+y+n(y+z)$</p><p>解得：$x=n(y+z)-y$</p><p>将$n(y+z)$拆一个出来可得：$x=(n-1)(y+z)+z③$</p><p>由③可得：链表起点到环起点的距离等于$(n-1)$圈环的长度加上快慢指针相遇点到环起点的位置</p><p>设$n=1$，易得：$x=z$</p><p>所以，只要在链表起点处设置指针<code>index1</code>，在快慢指针相遇处设置指针<code>index2</code></p><p>让这两个指针移动相同的距离，相遇点就是环的起点</p><h4 id="易错点-3" tabindex="-1"><a class="header-anchor" href="#易错点-3" aria-hidden="true">#</a> 易错点</h4><ul><li>快指针至少转了一圈才能跟慢指针相遇，说明$n&gt;=1$</li><li>慢指针无法在环中转够一圈，因为慢指针转1圈的时间快指针可以转2圈</li></ul><h4 id="代码实现-8" tabindex="-1"><a class="header-anchor" href="#代码实现-8" aria-hidden="true">#</a> 代码实现</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span>
 *         val = x;
 *         next = null;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">detectCycle</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>fast <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>fast <span class="token operator">==</span> slow<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">ListNode</span> index1 <span class="token operator">=</span> head<span class="token punctuation">;</span>
                <span class="token class-name">ListNode</span> index2 <span class="token operator">=</span> fast<span class="token punctuation">;</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>index1 <span class="token operator">!=</span> index2<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    index1 <span class="token operator">=</span> index1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                    index2 <span class="token operator">=</span> index2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">return</span> index1<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function _(j,$){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[n("a",d,[e("力扣题目链接"),p(a)])]),r,n("p",null,[n("a",k,[e("力扣题目链接"),p(a)])]),v,n("p",null,[n("a",m,[e("力扣题目链接"),p(a)])]),b,n("p",null,[n("a",h,[e("力扣题目链接"),p(a)])]),y,n("p",null,[n("a",x,[e("力扣题目链接"),p(a)])]),w,n("p",null,[n("a",f,[e("力扣题目链接"),p(a)])]),g,n("p",null,[n("a",N,[e("力扣题目链接"),p(a)])]),L])}const S=t(l,[["render",_],["__file","链表.html.vue"]]);export{S as default};
