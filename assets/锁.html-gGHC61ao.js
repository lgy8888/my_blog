const l=JSON.parse('{"key":"v-25381823","path":"/backEnd/MySQL/%E9%94%81.html","title":"锁","lang":"zh-CN","frontmatter":{"description":"锁与并发事务 解决并发事务的问题 并发事务访问相同记录的情况可以分为3种\\r读-读：并发事务相继读取相同的记录; \\r写-写：并发事务相继对相同的记录做出改动; \\r读-写/写-读：一个事务进行读取操作，另一个进行改动操作。; \\r 读-读并发有什么问题？ 读取操作本身不会对记录产生改动，不会引起什么问题\\r 写-写并发有什么问题？ 写-写并发会发生脏写的问题，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/my_blog/backEnd/MySQL/%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"林光远的个人笔记"}],["meta",{"property":"og:title","content":"锁"}],["meta",{"property":"og:description","content":"锁与并发事务 解决并发事务的问题 并发事务访问相同记录的情况可以分为3种\\r读-读：并发事务相继读取相同的记录; \\r写-写：并发事务相继对相同的记录做出改动; \\r读-写/写-读：一个事务进行读取操作，另一个进行改动操作。; \\r 读-读并发有什么问题？ 读取操作本身不会对记录产生改动，不会引起什么问题\\r 写-写并发有什么问题？ 写-写并发会发生脏写的问题，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LGYNB"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LGYNB\\",\\"url\\":\\"/\\"}]}"]]},"headers":[{"level":2,"title":"锁与并发事务","slug":"锁与并发事务","link":"#锁与并发事务","children":[{"level":3,"title":"解决并发事务的问题","slug":"解决并发事务的问题","link":"#解决并发事务的问题","children":[]},{"level":3,"title":"一致性读","slug":"一致性读","link":"#一致性读","children":[]},{"level":3,"title":"锁定读","slug":"锁定读","link":"#锁定读","children":[]},{"level":3,"title":"写操作","slug":"写操作","link":"#写操作","children":[]}]},{"level":2,"title":"多粒度锁","slug":"多粒度锁","link":"#多粒度锁","children":[{"level":3,"title":"多粒度锁的概念","slug":"多粒度锁的概念","link":"#多粒度锁的概念","children":[]},{"level":3,"title":"意向锁","slug":"意向锁","link":"#意向锁","children":[]}]},{"level":2,"title":"MySQL中的行锁和表锁","slug":"mysql中的行锁和表锁","link":"#mysql中的行锁和表锁","children":[{"level":3,"title":"存储引擎中的锁","slug":"存储引擎中的锁","link":"#存储引擎中的锁","children":[]},{"level":3,"title":"InnoDB中的表级锁","slug":"innodb中的表级锁","link":"#innodb中的表级锁","children":[]},{"level":3,"title":"InnoDB的行级锁","slug":"innodb的行级锁","link":"#innodb的行级锁","children":[]},{"level":3,"title":"InnoDB锁的内存结构","slug":"innodb锁的内存结构","link":"#innodb锁的内存结构","children":[]}]},{"level":2,"title":"MySQL加锁规则","slug":"mysql加锁规则","link":"#mysql加锁规则","children":[{"level":3,"title":"唯一索引","slug":"唯一索引","link":"#唯一索引","children":[]},{"level":3,"title":"非唯一索引","slug":"非唯一索引","link":"#非唯一索引","children":[]}]},{"level":2,"title":"MySQL死锁","slug":"mysql死锁","link":"#mysql死锁","children":[{"level":3,"title":"死锁的发生","slug":"死锁的发生","link":"#死锁的发生","children":[]},{"level":3,"title":"产生死锁的原因","slug":"产生死锁的原因","link":"#产生死锁的原因","children":[]},{"level":3,"title":"INSERT语句加行锁","slug":"insert语句加行锁","link":"#insert语句加行锁","children":[]},{"level":3,"title":"分析是否死锁","slug":"分析是否死锁","link":"#分析是否死锁","children":[]},{"level":3,"title":"排查死锁","slug":"排查死锁","link":"#排查死锁","children":[]},{"level":3,"title":"避免死锁","slug":"避免死锁","link":"#避免死锁","children":[]}]},{"level":2,"title":"悲观锁和乐观锁","slug":"悲观锁和乐观锁","link":"#悲观锁和乐观锁","children":[{"level":3,"title":"两种锁的定义","slug":"两种锁的定义","link":"#两种锁的定义","children":[]},{"level":3,"title":"两种锁的实现","slug":"两种锁的实现","link":"#两种锁的实现","children":[]},{"level":3,"title":"两种锁如何选择","slug":"两种锁如何选择","link":"#两种锁如何选择","children":[]}]}],"git":{},"readingTime":{"minutes":51.25,"words":15376},"filePathRelative":"backEnd/MySQL/锁.md","autoDesc":true}');export{l as data};
