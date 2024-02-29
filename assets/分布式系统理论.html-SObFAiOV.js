import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as a}from"./app-OTaO6_y0.js";const i={},l=a(`<h1 id="分布式系统理论" tabindex="-1"><a class="header-anchor" href="#分布式系统理论" aria-hidden="true">#</a> 分布式系统理论</h1><h2 id="cap" tabindex="-1"><a class="header-anchor" href="#cap" aria-hidden="true">#</a> CAP</h2><p>分布式系统在以下3个特性中最多满足两个，无法同时满足CAP</p><ul><li><p>一致性(Consistency)</p><ul><li>在分布式系统完成某写操作后任何读操作，都应该获取到该写操作写入的那个最新的值。相当于要求分布式系统中的各节点时时刻刻保持数据的一致性。</li></ul></li><li><p>可用性(Availability)</p><ul><li>系统一直可以正常地做读写操作，简单而言就是客户端一直可以正常访问并得到系统的正常响应，从用户角度来看是不会出现系统操作失败或者访问超时等问题。</li></ul></li><li><p>分区容错性(Partition Tolerance)</p><ul><li>指分布式系统中的某个节点或网络分区出现了故障时，整个系统仍然能对外提供满足一致性和可用性的服务，也就是说部分故障不影响整体使用。</li></ul></li><li><p>CA：优先保证一致性和可用性，放弃分区容错。放弃系统的拓展性，系统就不是分布式的了，违背设计初衷</p></li><li><p>CP：优先保证一致性和分区容错性，放弃可用性。在数据一致性要求较高的场景如Zookeeper，Hbase等比较常见，一旦发生网络故障或消息丢失，就会牺牲用户体验，等恢复之后用户才能逐渐访问</p></li><li><p>AP：优先保证可用性和分区容错性，放弃一致性。在SpringCloud体系中使用Eureka注册中心就是这种架构，放弃一致性是指放弃强一致性，保证最终一致性</p></li></ul><h2 id="base" tabindex="-1"><a class="header-anchor" href="#base" aria-hidden="true">#</a> BASE</h2><p>BASE 全称是 Basically Available(基本可用)、Soft State(软状态)和 Eventually Consistent(最终一致性)三个短语的缩写，Base 理论是对 <strong>CAP 中一致性和可用性权衡</strong>的结果。其核心思想是：既然无法做到强一致性，但每个应用都可以根据自身的业务特点，采用适当的方式来使系统达到最终一致性。</p><p><strong>Basically Available(基本可用)</strong></p><p>基本可用就是假设系统某个模块出现了不可预知的故障，但其他模块依旧可用，例如商城双十一活动时，评论模块出现故障，但不会影响交易、商品等核心模块的流程使用。</p><p><strong>Soft State(软状态)</strong></p><p>软状态指的是允许系统中的数据存在中间状态，并认为该状态不影响系统的整体可用性，即允许系统在多个不同节点的数据副本存在数据延时。</p><p><strong>Eventually Consistent(最终一致性)</strong></p><p>上面讲到的软状态不可能一直是软状态，必须有时间期限。在期限过后，应当保证所有副本保持数据一致性，从而达到数据的最终一致性，因此所有客户端对系统的数据访问最终都能够获取到最新的值，而这个时间期限取决于网络延时，系统负载，数据复制方案等因素。</p><ul><li><p><strong>1. 因果一致性(Causal consistency)</strong></p><p>如果节点 A 在更新完某个数据后通知了节点 B，那么节点 B 之后对该数据的访问和修改都是基于 A 更新后的值，但对和节点 A 无因果关系的节点 C 的数据访问则没这限制。</p></li><li><p><strong>2. 读己之所写(Read your writes)</strong></p><p>节点 A 更新一个数据后，它自身总是能访问到自身更新过的最新值，而不会看到旧值。</p></li><li><p><strong>3. 会话一致性(Session consistency)</strong></p><p>会话一致性将对系统数据的访问过程限定在一个会话当中：系统能保证在同一个有效的会话中实现 “读己之所写” 的一致性，也就是说，执行更新操作之后，客户端能够在同一个会话中始终读取到该数据项的最新值。</p></li><li><p><strong>4. 单调读一致性( Read consistency)</strong></p><p>单调读一致性指如果一个节点从系统中读取出一个数据项的某个值后，那么系统对于该节点后续的任何数据访问都不应该返回更旧的值。</p></li><li><p><strong>5. 单调写一致性(Write consistency)</strong></p><p>指一个系统要能够保证来自同一个节点的写操作被顺序的执行。</p></li></ul><p>BASE 理论面向的是大型高可用可扩展的分布式系统，和传统事务的 ACID 是相反的，它完全不同于 ACID 的强一致性模型，而是通过牺牲强一致性来获得可用性，并允许数据在一段时间是不一致的。</p><blockquote><p><strong>docker启动Redis</strong></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 查看redis进程id</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 启动Redis进程</span>
<span class="token function">docker</span> start 698dcd04c459
<span class="token comment"># 在docker容器中启动redis-cli客户端</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 698dcd04c459 redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,17),t=[l];function o(p,r){return n(),e("div",null,t)}const u=s(i,[["render",o],["__file","分布式系统理论.html.vue"]]);export{u as default};
