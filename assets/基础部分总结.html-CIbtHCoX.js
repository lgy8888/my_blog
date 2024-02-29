import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as l,f as e}from"./app-OTaO6_y0.js";const r={},h=e('<h1 id="基础部分总结" tabindex="-1"><a class="header-anchor" href="#基础部分总结" aria-hidden="true">#</a> 基础部分总结</h1><h2 id="创建模型" tabindex="-1"><a class="header-anchor" href="#创建模型" aria-hidden="true">#</a> 创建模型</h2><ul><li>单层创建：nn.Linear</li><li>torch.nn.Sequential：按顺序创建多层模型</li><li>自定义类：继承自nn.Module</li></ul><h2 id="数据输入方式" tabindex="-1"><a class="header-anchor" href="#数据输入方式" aria-hidden="true">#</a> 数据输入方式</h2><ul><li>从ndarray创建tensor切片输入</li><li>使用torch.utils.data.TensorDataset创建dataset</li><li>使用torchvision的内置数据集</li><li>使用torch.utils.data.DataLoader封装</li></ul><h2 id="模型训练的步骤" tabindex="-1"><a class="header-anchor" href="#模型训练的步骤" aria-hidden="true">#</a> 模型训练的步骤</h2><ul><li><code>fit()</code>函数干的事</li></ul><ol><li>预处理数据</li><li>创建模型和优化方法</li><li>模型调用</li><li>计算损失</li><li>梯度归零</li><li>计算梯度</li><li>优化模型</li><li>打印指标</li></ol><h2 id="不同问题使用的损失函数和输出设置" tabindex="-1"><a class="header-anchor" href="#不同问题使用的损失函数和输出设置" aria-hidden="true">#</a> 不同问题使用的损失函数和输出设置</h2><h3 id="回归问题" tabindex="-1"><a class="header-anchor" href="#回归问题" aria-hidden="true">#</a> 回归问题</h3><ul><li>预测连续的值叫做回归问题</li><li>损失函数：MSE(均方误差)</li><li>输出层激活方式：无</li></ul><h3 id="二分类问题" tabindex="-1"><a class="header-anchor" href="#二分类问题" aria-hidden="true">#</a> 二分类问题</h3><ul><li>回答是和否的问题</li><li>损失函数：BCELoss(二元交叉熵)、CrossEntropyLoss(交叉熵)</li><li>输出层激活方式：sigmoid、无</li></ul><h3 id="多分类问题" tabindex="-1"><a class="header-anchor" href="#多分类问题" aria-hidden="true">#</a> 多分类问题</h3><ul><li>多个分类的问题，输出与分类个数相同长度的张量</li><li>损失函数：CrossEntropyLoss(交叉熵)、nn.NLLLoss(要求labels必须是独热编码格式)</li><li>输出层激活方式：无、torch.log_softmax</li></ul><hr>',16),t=[h];function d(n,s){return a(),l("div",null,t)}const u=i(r,[["render",d],["__file","基础部分总结.html.vue"]]);export{u as default};
