import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as e}from"./app-OTaO6_y0.js";const t={},l=e(`<h1 id="servlet" tabindex="-1"><a class="header-anchor" href="#servlet" aria-hidden="true">#</a> Servlet</h1><h2 id="servlet简介" tabindex="-1"><a class="header-anchor" href="#servlet简介" aria-hidden="true">#</a> Servlet简介</h2><ul><li><p>servlet是Java提供的一门动态web资源开发技术</p><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230305170601616.png" alt="image-20230305205016374" tabindex="0" loading="lazy"><figcaption>image-20230305205016374</figcaption></figure></li><li><p>Servlet是Java EE规范之一，其实就是一个接口，将来我们需要定义Servlet类实现Servlet接口，并由web服务器运行Servlet</p></li></ul><h2 id="servlet快速入门" tabindex="-1"><a class="header-anchor" href="#servlet快速入门" aria-hidden="true">#</a> Servlet快速入门</h2><ul><li><p>创建Web项目，导入Servlet依赖坐标</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.servlet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javax.servlet-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建：定义一个类，实现Servlet接口，并重写接口中的所有方法，并在Service方法中输入一句话</p></li><li><p>配置：在类上使用<code>@WebServlet</code>注解，配置该Servlet的访问路径</p></li><li><p>访问：启动Tomcat，浏览器输入URL访问该Servlet</p></li></ul><h2 id="servlet执行流程" tabindex="-1"><a class="header-anchor" href="#servlet执行流程" aria-hidden="true">#</a> Servlet执行流程</h2><ul><li>url：<code>http://localhost:8080/Tomcat-demo/demo1</code></li><li><code>http://loclhost:8080</code>运行Tomcat服务器</li><li><code>/Tomcat-demo</code>运行web项目</li><li><code>/demo1</code>运行Servlet对象</li><li>Servlet由web服务器创建，Servlet方法由web服务器调用</li></ul><h2 id="servlet生命周期" tabindex="-1"><a class="header-anchor" href="#servlet生命周期" aria-hidden="true">#</a> Servlet生命周期</h2><ul><li><p>对象的生命周期指一个对象从被创建到被销毁的整个过程</p></li><li><p>Servlet运行在servlet容器（web服务器）中，其生命周期由容器来管理，分为四个阶段</p><ul><li><p>1、<strong>加载和实例化</strong>：默认情况下，当Servlet第一次被访问时，由容器创建servlet对象</p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns<span class="token operator">=</span><span class="token string">&quot;/demo1&quot;</span><span class="token punctuation">,</span> loadOnStarup<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>负整数：第一次被访问时创建Servlet对象</p></li><li><p>0或正整数：服务器启动时创建Servlet对象，数字越小优先级越高</p></li></ul></li><li><p>2、<strong>初始化</strong>：在Servlet实例化后，容器将调用Servlet的<code>init()</code>方法初始化这个对象，完成一些如加载配置文件、创建连接等初始化工作。该方法<strong>只调用一次</strong></p></li><li><p>3、<strong>请求处理</strong>：<strong>每次</strong>请求Servlet时，Servlet容器都会调用Servlet的<code>service()</code>方法对请求进行处理</p></li><li><p>4、<strong>服务终止</strong>：当需要释放内存或者容器关闭时，容器就会调用Servlet实例的<code>destroy()</code>方法完成资源的释放。当<code>destroy()</code>方法调用之后，容器会释放这个Servlet实例，该实例随后会被Java的垃圾收集器回收</p></li></ul></li></ul><h2 id="servlet方法介绍" tabindex="-1"><a class="header-anchor" href="#servlet方法介绍" aria-hidden="true">#</a> Servlet方法介绍</h2><ul><li><p>初始化方法，在Servlet被创建时执行，只执行一次</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">ServletConfig</span> config<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>提供服务方法，每次Servlet被访问都会调用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">service</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>销毁方法，当Servlet被销毁时，调用该方法，在内存释放或者服务器关闭时销毁Servlet</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取ServletConfig对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ServletConfig</span> <span class="token function">getServletConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>获取Servlet信息</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">getServletInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="servlet体系结构" tabindex="-1"><a class="header-anchor" href="#servlet体系结构" aria-hidden="true">#</a> Servlet体系结构</h2><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230305214841394.png" alt="image-20230305214841394" tabindex="0" loading="lazy"><figcaption>image-20230305214841394</figcaption></figure><ul><li>HttpServlet使用 <ul><li>继承HttpServlet</li><li>重写doGet和doPost方法</li></ul></li><li>HttpServlet原理 <ul><li>获取请求方式，并根据不同的请求方式，调用不同的doXxx方法</li></ul></li></ul><h2 id="servlet-urlpattern配置" tabindex="-1"><a class="header-anchor" href="#servlet-urlpattern配置" aria-hidden="true">#</a> Servlet urlPattern配置</h2><ul><li><p>Servlet要想被访问，必须配置其访问路径（urlPattern）</p><ul><li><p>一个Servlet可以配置多个urlPartern</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@WebServlet</span><span class="token punctuation">(</span>urlPatterns <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;/deno1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/demo2&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>urlParttern配置规则</strong></p><p><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230305221651636.png" alt="image-20230305221611133" loading="lazy"><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230305205016374.png" alt="image-20230305221651636" loading="lazy"><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230307085125260.png" alt="image-20230305221741674" loading="lazy"> <img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230305221741674.png" alt="image-20230305221822837" loading="lazy"></p><ul><li>当项目中Servlet配置了&quot;/&quot;，会覆盖掉Tomcat中的DefaultServlet，当其他的urlPattern都匹配不上时都会走这个Servlet</li><li>当我们的项目中配置了&quot;/*&quot;，意味着匹配任意访问路径</li><li><strong>&quot;/&quot;和&quot;/*&quot;一般不配置</strong></li></ul></li></ul></li></ul><h2 id="xml配置方法编写servlet" tabindex="-1"><a class="header-anchor" href="#xml配置方法编写servlet" aria-hidden="true">#</a> XML配置方法编写Servlet</h2><ul><li><p>Servlet从3.0版本之后开始支持使用注解配置，3.0版本之前只支持配置文件的配置方式</p></li><li><p>步骤：</p><ul><li><p>编写Servlet类</p></li><li><p>在web.xml中配置该Servlet</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>	<span class="token comment">&lt;!-- Servlet 全类名 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>demo3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-class</span><span class="token punctuation">&gt;</span></span>com.LGYNB.web.ServletDemo3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- Servlet 访问路径 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>servlet-name</span><span class="token punctuation">&gt;</span></span>demo3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/demo3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>servlet-mapping</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,18),p=[l];function i(o,c){return n(),s("div",null,p)}const d=a(t,[["render",i],["__file","Servlet.html.vue"]]);export{d as default};