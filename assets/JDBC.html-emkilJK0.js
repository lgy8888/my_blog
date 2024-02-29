import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as e}from"./app-OTaO6_y0.js";const l={},i=e(`<h1 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h1><h2 id="jdbc-api详解" tabindex="-1"><a class="header-anchor" href="#jdbc-api详解" aria-hidden="true">#</a> JDBC API详解</h2><h2 id="drivermanager" tabindex="-1"><a class="header-anchor" href="#drivermanager" aria-hidden="true">#</a> DriverManager</h2><p><strong>1、注册驱动</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 新版Mysql要加.cj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MySQL5之后的驱动Jar包，可以省略注册驱动的步骤</li><li>自动加载Jar包中<code>META-INF/servivces/java.sql.Driver</code>文件中的驱动类</li></ul><p><strong>2、获取数据库连接</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Connection</span>	<span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> username<span class="token punctuation">,</span> <span class="token class-name">String</span> password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>url：连接路径 <ul><li>语法：jdbc:mysql://ip地址(域名):端口号/数据库名称?参数键值对1&amp;参数键值对2</li><li>示例：<code>jdbc:mysql://localhost:3306/db1</code></li><li>细节： <ul><li>若连接的是本机MySQL服务器，并且MySQL服务默认端口是3306，则url可简写为：jdbc:mysql:///数据库名称?参数键值对</li><li>配置<code>useSSL = false</code> 参数，禁用安全连接方式，解决警告提示</li></ul></li></ul></li><li>username：用户名 （root）</li><li>password：密码 （123456）</li></ul><h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2><p><strong>1、获取执行SQL对象</strong></p><ul><li><p>普通执行SQL对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Statement</span>	<span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>预编译SQL的执行SQL对象：防止SQL注入</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PreparedStatement</span>	<span class="token function">prepareSttement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行存储过程的对象 (次要)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">CallableStatement</span>	<span class="token function">prepareCall</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><p><strong>2、管理事务</strong></p><ul><li>MySQL事务管理 <ul><li>开启事务：<code>BEGIN;</code>/<code>START TRANSACTION;</code></li><li>提交事务：<code>COMMIT;</code></li><li>回滚事务：<code>ROLLBACK;</code></li></ul></li><li>JDBC事务管理：Connection接口中定义了3个对于的方法 <ul><li>开启事务：<code>setAutoCommit(boolean autoCommit)</code><ul><li><code>true</code>为自动提交事务</li><li><code>false</code>为手动提交事务，即为开启事务</li></ul></li><li>提交事务：<code>commit()</code></li><li>回滚事务：<code>rollback()</code></li></ul></li></ul><h2 id="statement" tabindex="-1"><a class="header-anchor" href="#statement" aria-hidden="true">#</a> Statement</h2><p><strong>执行SQL语句</strong>（DDL：表和库增删改查，DML：数据增删改，DQL：数据查询）</p><ul><li><p>执行DML、DDL语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">executeUpdate</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：（1）DML语句影响的行数（2）DDL语句执行后，执行成功也可能返回0</p></li><li><p>执行DQL语句</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ResultSet</span> <span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值：ResultSet结果集对象</p></li></ul><h2 id="resultset" tabindex="-1"><a class="header-anchor" href="#resultset" aria-hidden="true">#</a> ResultSet</h2><p><strong>1、封装了DQL查询语句的结果</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ResultSet</span>	statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、获取查询结果</strong></p><ul><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">boolean</span>		<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将光标从当前位置向前移动一行，判断该行是否为有效行</li><li>返回值： <ul><li>true：有效行，当前行有数据</li><li>false：无效行，当前行没有数据</li></ul></li></ul></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>xxx		<span class="token function">getXxx</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>xxx：数据类型：如：<code>int getInt(params)</code>，<code>String getString(params)</code></li><li>params： <ul><li>int（列的编号，从1开始）</li><li>String（列的名称）</li></ul></li></ul></li></ul><p><strong>3、使用步骤</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    rs<span class="token punctuation">.</span>getXxx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="preparedstatement" tabindex="-1"><a class="header-anchor" href="#preparedstatement" aria-hidden="true">#</a> PreparedStatement</h2><p>1 、<strong>预编译SQL语句并执行，预防SQL注入问题</strong></p><ul><li>SQL注入：指通过操作输入来修改事先定义好的SQL语句，用以达到执行代码对服务器进行攻击的方法</li></ul><p>2、<strong>使用步骤</strong></p><ul><li><p>获取<code>PreparedStatement</code>对象</p><ul><li>SQL语句中的参数值使用<code>?</code>占位符替代</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from user where username = ? and pssword = ?&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>通过<code>Connection</code>对象获取,并传入对应的sql语句</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">PreparedStatement</span> pstmt <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareSttement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置参数值</p><ul><li><p>给<code>?</code>赋值</p></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pstmt<span class="token punctuation">.</span><span class="token function">setXxx</span><span class="token punctuation">(</span>paramIndex<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>paramIndex</code>：<code>?</code>的位置编号，从1开始</p></li><li><p><code>value</code>：<code>?</code>的值</p></li></ul></li><li><p>执行SQL</p><ul><li><p>不需要再传递sql</p></li><li><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>pstmt<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pstmt<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><h2 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池" aria-hidden="true">#</a> 数据库连接池</h2><h2 id="数据库连接池简介" tabindex="-1"><a class="header-anchor" href="#数据库连接池简介" aria-hidden="true">#</a> 数据库连接池简介</h2><ul><li><strong>数据库连接池</strong>是个容器，负责分配、管理数据库连接（Connection）</li><li>它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个</li><li>释放空闲时间超过最大空闲时间的数据库连接来避免因为没有释放数据库连接而引起的数据库连接遗漏</li><li>好处 <ul><li>资源重用</li><li>提升系统响应速度</li><li>避免数据库连接遗漏</li></ul></li></ul><h2 id="druid实现" tabindex="-1"><a class="header-anchor" href="#druid实现" aria-hidden="true">#</a> Druid实现</h2><ul><li><p>标准接口：<code>DataSource</code></p><ul><li><p>官方(SUN)提供的数据库连接池标准接口，由第三方组织实现此接口</p></li><li><p>功能：获取链接</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Connection	getConnection()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>常见的数据库连接池：DBCP、C3P0、Druid</p></li><li><p>Druid（德鲁伊）</p><ul><li>Druid连接池是阿里巴巴开源的数据库连接池项目</li><li>功能强大，性能优秀，是Java语言最好的数据库连接池之一</li></ul></li><li><p>使用步骤</p><ul><li>导入jar包 <code>druid-1.1.12.jar</code></li><li>定义配置文件</li><li>加载配置文件</li><li>获取数据库连接池对象</li><li>获取连接</li></ul></li></ul>`,34),t=[i];function c(p,o){return n(),s("div",null,t)}const r=a(l,[["render",c],["__file","JDBC.html.vue"]]);export{r as default};
