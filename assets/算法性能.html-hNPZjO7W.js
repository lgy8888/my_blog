import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as i}from"./app-OTaO6_y0.js";const r={},l=i('<h1 id="算法性能" tabindex="-1"><a class="header-anchor" href="#算法性能" aria-hidden="true">#</a> 算法性能</h1><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3><p><strong>时间复杂度</strong>是用来衡量一个算法的执行，随着数据规模增大而增大的时间成本（不依赖于环境因素）</p><h3 id="大o表示法" tabindex="-1"><a class="header-anchor" href="#大o表示法" aria-hidden="true">#</a> 大o表示法</h3><p><strong>渐进上界</strong>：从某个 常数$n_0$开始，$c*g(n)$总是位于$f(n)$下方，那么记作$O(g(n))$</p><p><strong>渐进下界</strong>：从某个 常数$n_0$开始，$c*g(n)$总是位于$f(n)$上方，那么记作$\\Omega(g(n))$</p><p><strong>渐进上界</strong>：从某个 常数$n_0$开始，$f(n)$总是在$c_1<em>g(n)$和$c_2</em>g(n)$之间，那么记作$\\Theta(g(n))$</p><ul><li><p>$f(n)=3*n+3$ ==&gt; $g(n)=n$ ==&gt; $O(n)$</p></li><li><p>$f(n)=(floor(log_2(n))+1)*5+4$ ==&gt; $g(n)=log_2(n)$ ==&gt; $O(log_2(n))$</p></li><li><p>已知$f(n)$求$g(n)$</p><ul><li>取表达式中的最高次项</li><li>不同底数的对数，渐进上界可以用一个对数函数$log(n)$表示</li><li>对数的常数次幂可以省略</li></ul></li></ul><h3 id="常见时间复杂度排序" tabindex="-1"><a class="header-anchor" href="#常见时间复杂度排序" aria-hidden="true">#</a> 常见时间复杂度排序</h3><p>时间复杂度由快到慢，由好到坏，大致分为三个阶梯</p><ul><li>$O(1)$：常量时间</li><li>$O(log(n))$：对数时间 <ul><li>$O(n)$：线性时间</li><li>$O(n*log(n))$：拟线性时间 <ul><li>$O(n^2)$：平方时间</li><li>$O(2^n)$：指数时间</li><li>$O(n!)$：阶乘时间</li></ul></li></ul></li></ul><h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><p><strong>空间复杂度</strong>是用来衡量一个算法执行随着数据规模增大而增长的额外空间成本</p><h3 id="大o表示法-1" tabindex="-1"><a class="header-anchor" href="#大o表示法-1" aria-hidden="true">#</a> 大o表示法</h3><p><strong>二分查找</strong>：需要常熟个指针i，j，m，因此额外占用的空间是$O(1)$</p>',17),$=[l];function h(t,o){return a(),e("div",null,$)}const c=n(r,[["render",h],["__file","算法性能.html.vue"]]);export{c as default};
