<template>
  <div class="products-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>AI 产品与服务</h1>
        <p>为企业提供全方位的智能解决方案</p>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="products-grid">
      <div v-for="(product, index) in products" :key="index" class="product-card">
        <div class="product-icon">
          <i :class="product.icon"></i>
        </div>
        <h3>{{ product.title }}</h3>
        <p class="description">{{ product.description }}</p>
        <div class="highlights">
          <h4>技术亮点</h4>
          <ul>
            <li v-for="(point, idx) in product.highlights" :key="idx">{{ point }}</li>
          </ul>
        </div>
        <div class="case-study" v-if="product.caseStudy">
          <h4>标杆案例</h4>
          <p>{{ product.caseStudy }}</p>
        </div>
        <router-link :to="`/products/${product.id}`" class="learn-more">了解更多</router-link>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <h2>产品优势</h2>
      <div class="features-grid">
        <div class="feature-item">
          <i class="fas fa-rocket"></i>
          <h3>快速部署</h3>
          <p>标准化的部署流程，最快1周即可上线</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-shield-alt"></i>
          <h3>安全可靠</h3>
          <p>企业级安全标准，数据加密传输</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-chart-line"></i>
          <h3>持续优化</h3>
          <p>模型持续训练，性能不断提升</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-code"></i>
          <h3>开放集成</h3>
          <p>提供标准API，支持快速集成</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>需要定制化解决方案？</h2>
        <p>我们的专业团队可以根据您的具体需求，提供量身定制的 AI 解决方案</p>
        <button class="cta-button">联系我们</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        {
          id: 'knowledge-hub',
          title: 'AI企业知识库中枢',
          icon: 'fas fa-database',
          description: '构建企业级智能知识管理体系',
          highlights: [
            '多模态知识萃取：支持PDF/PPT/音视频等30+格式智能解析，知识提取准确率95%',
            '语义搜索引擎：问答响应速度提升80%以上，知识调用准确率达95%以上',
            '动态知识图谱：自动构建行业专属知识网络，更新时效性提升3倍'
          ],
          caseStudy: '某车企应用之后，销售人员查询效率提升210%',
        },
        {
          id: 'sales-training',
          title: '智能销售对练系统',
          icon: 'fas fa-user-tie',
          description: '打造智能化销售培训平台',
          highlights: [
            '多模态交互演练：支持语音/表情/话术实时分析反馈',
            '百万级情景库：覆盖公司所有产品详细介绍、客户对公司产品疑难点解答、异议处理等复杂销售场景',
            'AI陪练教练：NLP深度分析提供个性化改进建议'
          ],
          caseStudy: '某车企使用之后，销售培训成本降低50%以上，新人销售成单周期缩短30%，客户满意度提升32%',
        },
        {
          id: 'aigc-factory',
          title: 'AIGC营销工厂',
          icon: 'fas fa-magic',
          description: '智能内容生产与优化平台',
          highlights: [
            '智能内容生成：支持图文/视频/3D素材自动生产，创意产出效率提升20倍',
            '动态优化系统：基于GAN模型实时A/B测试，内容点击率自动提升23%-65%',
            '全渠道分发引擎：打通微信/抖音/海外社媒等20+平台，智能匹配最佳投放组合'
          ],
          caseStudy: '某车企利用AIGC内容生成平台，自动生成3000+条创意素材，内容生产成本降低20%',
        },
        {
          id: 'sentiment-monitor',
          title: '天网舆情监测',
          icon: 'fas fa-globe',
          description: '全网舆情实时监控与分析',
          highlights: [
            '全网实时监听：覆盖社交媒体、论坛、新闻等2000+信源，每分钟扫描10万条数据',
            '情感分析引擎：准确率98.7%，危机预警响应速度＜3分钟',
            '智能应对建议：自动生成公关话术与传播策略'
          ],
          caseStudy: '某车企危机事件中提前2小时预警，负面舆情控制效率提升70%',
        },
        {
          id: 'digital-human',
          title: '企业数字人',
          icon: 'fas fa-robot',
          description: '打造企业专属数字员工',
          highlights: [
            '超写实数字分身：支持4K级形象定制，表情动作误差＜0.1mm',
            '多场景交互能力：直播、客服、培训全支持，语音响应延迟＜200ms',
            '知识实时更新：与企业知识库无缝对接，回答准确率99%'
          ],
          caseStudy: '某银行数字客服替代40%人工坐席，客户满意度提升20%',
        },
        {
          id: 'marketing-decision',
          title: '智能营销决策平台',
          icon: 'fas fa-chart-line',
          description: '全域数据驱动的营销决策系统',
          highlights: [
            '全域数据融合：对接DMP、CDP、CRM、全网等15+数据源',
            '智能策略中枢：集成DeepSeek模型，ROI预测准确率达85%',
            '自动化营销云：从人群洞察到投放优化全流程AI驱动，策略迭代速度提升10倍'
          ],
          caseStudy: '某新能源汽车品牌实现线索转化率提升70%，单客维系成本降低20%',
        }
      ]
    }
  }
}
</script>

<style scoped>
.products-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 60px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.product-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.highlights h4, .case-study h4 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.highlights ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.highlights li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  color: #666;
}

.highlights li:before {
  content: "•";
  color: #007bff;
  position: absolute;
  left: 0;
}

.case-study {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.case-study p {
  color: #666;
  margin: 0;
}

.learn-more {
  display: inline-block;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.learn-more:hover {
  background: #0056b3;
}

.features-section {
  margin-bottom: 60px;
}

.features-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-item {
  text-align: center;
  padding: 30px;
  background: #f8f9fa;
  border-radius: 15px;
}

.feature-item i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.cta-section {
  background: linear-gradient(135deg, #007bff 0%, #00bcd4 100%);
  color: white;
  padding: 60px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 60px;
}

.cta-section h2 {
  margin-bottom: 20px;
}

.cta-section p {
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-button {
  padding: 15px 40px;
  font-size: 1.2rem;
  background: white;
  color: #007bff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style> 