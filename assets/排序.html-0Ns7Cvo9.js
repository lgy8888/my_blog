import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,f as n}from"./app-OTaO6_y0.js";const g={},e=n('<h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p><strong>定义</strong></p><ul><li>假设含有n 个记录的序列为 ${r_ 1 ,r_ 2 , …,r_ n } $，其相应的关键字分别为 ${k_ 1 ,k_ 2 , …,k_ n }$ ，需确定 $1 ，2 ，…，n $的一种排列$p_1 ,p_2 , …,p_ n $，使其相应的关键字满足 $k p_1 ≤k p_2 ≤…≤k p_n $（非递减或非递增）关系，即使得序列成为一个按关键字有序的序列 ${r p_1 ,r p_2 , …,r p_n }$，这样的操作就称为排序 。</li></ul><p><strong>分类</strong></p><ul><li><p>按待排序记录所在位置</p><ul><li>内部排序：待排序记录存放在内存</li><li>外部排序：排序过程中需对外存进行访问的排序</li></ul></li><li><p>按排序依据原则</p><ul><li>插入排序：直接插入排序、折半插入排序、希尔排序</li><li>交换排序：冒泡排序、快速排序</li><li>选择排序：简单选择排序、堆排序</li><li>归并排序：2-路归并排序</li><li>基数排序</li></ul></li><li><p>按排序所需工作量</p><ul><li>简单的排序方法：$T(n)=O(n²)$</li><li>先进的排序方法：$T(n)=O(nlogn)$</li><li>基数排序：$T(n)=O(d.n)$</li></ul></li></ul><p><strong>排序基本操作</strong></p><ul><li><p>比较两个关键字大小</p></li><li><p>将记录从一个位置移动到另一个位置</p></li></ul><p><strong>排序的稳定性</strong>（针对非关键字排序）</p><ul><li>假设$k_ i =k_ j (1 ≤i ≤n,1 ≤j ≤n,i≠j)$，且在排序前的序列中$r _i $领先于$r _j$ （即$i&lt;j$）。</li><li>如果排序后$r _i $仍领先于$r _j$，则称所用的排序方法是稳定的；</li><li>反之，若可能使得排序后的序列中$r _i $ 领先$r _j$ ，则称所用的排序方法是不稳定的。</li></ul><h2 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h2><h3 id="直接插入排序" tabindex="-1"><a class="header-anchor" href="#直接插入排序" aria-hidden="true">#</a> 直接插入排序</h3><ul><li><p>排序过程：整个排序过程为n-1趟插入，即先将序列中第1个记录看成是一个有序子序列，然后从第2个记录开始，逐个进行插入，直至整个序列有序</p></li><li><p>步骤：</p><ul><li>复制插入元素</li><li>记录后移，查找插入位置</li><li>插入到合适的位置</li></ul></li></ul><h3 id="希尔排序-缩小增量法" tabindex="-1"><a class="header-anchor" href="#希尔排序-缩小增量法" aria-hidden="true">#</a> 希尔排序(缩小增量法)</h3><ul><li>排序过程：先取一个正整数$d_1&lt;n$，把所有相隔$d_1$的记录放一组，组内进行直接插入排序；然后取$d_2&lt;d_1$，重复上述分组和排序操作；直至$d_i=1$，即所有记录放进一个组中排序为止</li></ul><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> <strong>步骤</strong></h4><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627142100132.png" alt="image-20230627134235849" tabindex="0" loading="lazy"><figcaption>image-20230627134235849</figcaption></figure><ul><li>取较大间隔分组进行排序（举例：5间隔）</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627142128996.png" alt="image-20230627134251468" tabindex="0" loading="lazy"><figcaption>image-20230627134251468</figcaption></figure><ul><li>取小于间隔1的较小间隔分组进行排序（举例：3间隔）</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627141950331.png" alt="image-20230627134258181" tabindex="0" loading="lazy"><figcaption>image-20230627134258181</figcaption></figure><ul><li>取1间隔进行排序（直接插入排序）</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627150919140.png" alt="image-20230627134305725" tabindex="0" loading="lazy"><figcaption>image-20230627134305725</figcaption></figure><ul><li>定义增量序列$D_k:D_m&gt;D_{m-1}&gt;···&gt;D_1=1$ <ul><li>上述例子中，$D_3=5,D_2=3,D_1=1$</li></ul></li><li>对每个$D_k$进行$D_k-$间隔插入排序</li></ul><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><ul><li><p>一次移动位置较大，跳跃式的接近排序后的最终位置</p></li><li><p>最后一次只需要少量移动</p></li><li><p>增量序列必须是递减的，最后一个必须是1</p></li><li><p>增量序列应该是<strong>互质的</strong></p></li><li><p><strong>希尔排序是一种不稳定的排序算法</strong></p></li></ul><h2 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h2><h3 id="简单选择排序" tabindex="-1"><a class="header-anchor" href="#简单选择排序" aria-hidden="true">#</a> 简单选择排序</h3><ul><li><p>排序过程</p><ul><li>首先通过n-1次关键字比较，从n个记录中找出关键字最小的记录，将它与第一个记录交换</li><li>再通过n-2次比较，从剩余的n-1个记录中找出关键字次小的记录，将它与第二个记录交换</li><li>重复上述操作，共进行n-1趟排序后，排序结束</li></ul></li><li><p>算法评价</p><ul><li>移动次数 <ul><li>最好：0</li><li>最坏：$3(n-1)$</li></ul></li><li>比较次数 <ul><li>$∑_{i=1}<sup>{n-1}(n-i)=1/2(n</sup>2-n)$</li></ul></li><li>$T(n)=O(n^2)$</li></ul></li></ul><h3 id="树形选择排序" tabindex="-1"><a class="header-anchor" href="#树形选择排序" aria-hidden="true">#</a> 树形选择排序</h3><ul><li>又称锦标赛排序，是一种按照锦标赛的思想进行选择排序的方法。</li><li>步骤 <ul><li>待排序的关键字两两组合成为二叉树的叶子节点</li><li>兄弟结点之间进行比较，小的成为其父母节点</li><li>比较到根节点被赋值为止，获得最小值</li><li>取出最小值后，对剩下的关键字继续进行比较</li></ul></li><li>缺点：需要大量辅助存储空间</li></ul><h3 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h3><h4 id="堆的定义" tabindex="-1"><a class="header-anchor" href="#堆的定义" aria-hidden="true">#</a> 堆的定义</h4><ul><li><p>定义：n个元素的序列$(k_1,k_2,…k_n)$，当且仅当满足下列关系时，称之为堆</p><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627150951629.png" alt="image-20230627140441168" tabindex="0" loading="lazy"><figcaption>image-20230627140441168</figcaption></figure></li><li><p>可将堆序列看成完全二叉树，则堆顶元素（完全二叉树的根）必为序列中n个元素的最小值或最大值</p></li><li><p>（96，83，27，38，11，9）-&gt; <strong>大根堆</strong>（满足第二个条件）</p></li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627142032477.png" alt="image-20230627140628135" tabindex="0" loading="lazy"><figcaption>image-20230627140628135</figcaption></figure><ul><li>（13，38，27，50，76，65，49，97）-&gt; <strong>小根堆</strong>（满足第一个条件）</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627150859934.png" alt="image-20230627140639711" tabindex="0" loading="lazy"><figcaption>image-20230627140639711</figcaption></figure><h4 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h4><ul><li>将序列构造成一棵完全二叉树</li><li>把这棵普通的完全二叉树改造成堆，获取其最大（最小值）</li><li>输出该最值</li><li>删除根节点，继续改造剩余树成堆，再次获取最值</li><li>输出次最值</li><li>重复直至序列为空，便得到排序</li></ul><h4 id="堆的调整" tabindex="-1"><a class="header-anchor" href="#堆的调整" aria-hidden="true">#</a> 堆的调整</h4><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627151006283.png" alt="image-20230627141950331" tabindex="0" loading="lazy"><figcaption>image-20230627141950331</figcaption></figure><ul><li>输出堆顶元素后，以堆中最后一个元素替代之</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627151028539.png" alt="image-20230627142032477" tabindex="0" loading="lazy"><figcaption>image-20230627142032477</figcaption></figure><ul><li>将根节点值与左右子树的根节点值进行比较，并与其中小者进行交换</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626221358393.png" alt="image-20230627142100132" tabindex="0" loading="lazy"><figcaption>image-20230627142100132</figcaption></figure><ul><li>重复上述操作，直至叶子节点，得到新的堆</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626223418244.png" alt="image-20230627142128996" tabindex="0" loading="lazy"><figcaption>image-20230627142128996</figcaption></figure><ul><li>该过程称为筛选</li></ul><h4 id="堆的建立" tabindex="-1"><a class="header-anchor" href="#堆的建立" aria-hidden="true">#</a> 堆的建立</h4><ul><li>给定无序序列，按顺序建立一棵完全二叉树</li><li>从最后一个非叶子节点$(n/2-1)$开始，以此向前调整</li><li>调整的范围是以调整点为根节点的整棵二叉树</li></ul><h4 id="算法评价" tabindex="-1"><a class="header-anchor" href="#算法评价" aria-hidden="true">#</a> 算法评价</h4><ul><li>时间复杂度：$T(n) = O(nlogn)$</li></ul><h2 id="交换排序" tabindex="-1"><a class="header-anchor" href="#交换排序" aria-hidden="true">#</a> 交换排序</h2><ul><li>两两比较，若发生逆序则交换，知道所有记录都排好序为止</li></ul><h3 id="冒泡排序" tabindex="-1"><a class="header-anchor" href="#冒泡排序" aria-hidden="true">#</a> 冒泡排序</h3><ul><li><p>每趟记录不断记录两两交换，按照前小后大的规则交换（简单交换）</p></li><li><p>步骤</p><ul><li>从按照01，12，23…两两进行比较并交换</li><li>一趟比较将一个大值排到后面</li><li>比较直到一整趟都没有发生交换为止</li></ul></li><li><p>时间复杂度</p><ul><li>最好情况（正序） <ul><li>比较次数：n-1</li><li>移动次数：0</li></ul></li><li>最坏情况（逆序） <ul><li>比较次数：$∑_{i=1}<sup>{n-1}{n-i}=1/2(n</sup>2-n)$</li><li>移动次数：$3∑_{i=1}<sup>n{n-i}=3/2(n</sup>2-n)$</li></ul></li><li>$T(n)=O(n^2)$</li></ul></li></ul><h3 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h3><ul><li><p>冒泡排序的一种改良算法</p></li><li><p><strong>基本思想</strong>：通过一趟排序，将待排序记录分割成为两个独立的部分，其中一个部分记录的关键字比另一部分记录的关键字小，则可分别对这两部分记录进进行排序，以达到整个序列有序</p></li><li><p><strong>步骤</strong></p><ul><li>任取一个元素（如：第一个）为中心轴</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626221423449.png" alt="image-20230627150859934" tabindex="0" loading="lazy"><figcaption>image-20230627150859934</figcaption></figure><ul><li>所有比它小的元素一律前放，比它大的元素一律后放</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626221457777.png" alt="image-20230627150919140" tabindex="0" loading="lazy"><figcaption>image-20230627150919140</figcaption></figure><ul><li>对各子表重新选择中心元素并以此规调整</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626221536973.png" alt="image-20230627150951629" tabindex="0" loading="lazy"><figcaption>image-20230627150951629</figcaption></figure><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626222901225.png" alt="image-20230627151006283" tabindex="0" loading="lazy"><figcaption>image-20230627151006283</figcaption></figure><ul><li>直到每一个子表的元素只剩一个</li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230626222427640.png" alt="image-20230627151028539" tabindex="0" loading="lazy"><figcaption>image-20230627151028539</figcaption></figure></li><li><p>时间复杂度</p><ul><li>最好情况（每次总是去取到中间值作为枢轴） <ul><li>$T(n)=O(nlog_2n)$</li></ul></li><li>最坏情况（每次总是取到最值为枢轴） <ul><li>$T(n)=O(n^2)$</li></ul></li></ul></li></ul><h2 id="归并排序" tabindex="-1"><a class="header-anchor" href="#归并排序" aria-hidden="true">#</a> 归并排序</h2><ul><li>归并——将两个或两个以上的有序表组合成一个新的有序表</li></ul><h3 id="_2-路归并排序" tabindex="-1"><a class="header-anchor" href="#_2-路归并排序" aria-hidden="true">#</a> 2-路归并排序</h3><ul><li>排序过程 <ul><li>设初始序列含有n个记录，则可看成n个有序的子序列，每个子序列长度为1</li><li>两两合并，得到ën/2û个长度为2或1的有序子序列</li><li>再两两合并，……如此重复，直至得到一个长度为n的有序序列为止</li></ul></li></ul><figure><img src="http://lgy-markdown-img.oss-cn-guangzhou.aliyuncs.com/image/image-20230627153241438.png" alt="image-20230627153241438" tabindex="0" loading="lazy"><figcaption>image-20230627153241438</figcaption></figure><ul><li><p>时间复杂度：$T(n)=O(nlog_2n)$</p></li><li><p>归并排序仅需$floor(log_2n)$趟</p></li></ul>',64),r=[e];function u(t,o){return l(),a("div",null,r)}const c=i(g,[["render",u],["__file","排序.html.vue"]]);export{c as default};
