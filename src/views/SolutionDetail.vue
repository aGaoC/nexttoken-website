<template>
  <div v-if="currentSolution" class="solution-detail">
    <!-- 头部区域 -->
    <section class="solution-header">
      <div class="header-content">
        <h1>{{ currentSolution.title }}</h1>
        <p class="subtitle">{{ currentSolution.subtitle }}</p>
      </div>
    </section>

    <!-- 概述区域 -->
    <section class="solution-overview">
      <div class="overview-content">
        <div class="overview-text">
          <h2>解决方案概述</h2>
          <p>{{ currentSolution.overview }}</p>
          <div class="key-features">
            <div v-for="(feature, index) in currentSolution.keyFeatures" 
                 :key="index" 
                 class="feature-item">
              <i :class="feature.icon"></i>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section class="solution-features">
      <h2>核心功能</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in currentSolution.features" 
             :key="index" 
             class="feature-card">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="use-cases">
      <h2>应用场景</h2>
      <div class="cases-grid">
        <div v-for="(case_study, index) in currentSolution.useCases" 
             :key="index" 
             class="case-card">
          <img :src="case_study.image" :alt="case_study.title">
          <div class="case-content">
            <h3>{{ case_study.title }}</h3>
            <p>{{ case_study.description }}</p>
            <ul>
              <li v-for="(point, pointIndex) in case_study.points" 
                  :key="pointIndex">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术规格 -->
    <section class="technical-specs">
      <h2>技术规格</h2>
      <div class="specs-grid">
        <div v-for="(spec, index) in currentSolution.technicalSpecs" 
             :key="index" 
             class="spec-item">
          <h3>{{ spec.title }}</h3>
          <ul>
            <li v-for="(detail, detailIndex) in spec.details" 
                :key="detailIndex">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-section">
      <div class="contact-content">
        <h2>开始使用 {{ currentSolution.title }}</h2>
        <p>立即开启智能化转型之旅</p>
        <div class="contact-buttons">
          <button class="demo-btn" @click="requestDemo">预约演示</button>
          <button class="contact-btn" @click="contactUs">联系我们</button>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="not-found">
    <h2>未找到相关解决方案</h2>
    <router-link to="/solutions" class="back-btn">返回解决方案列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'SolutionDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      solutionDetails: {
        'new-energy': {
          title: '新能源汽车行业数字化解决方案',
          subtitle: '全域数字化建设，打造智能汽车生态系统',
          description: '深耕汽车和金融行业，提供全域数字化解决方案，并对数据资产进行持续建设。',
          // ... 其他详细信息
        },
        'knowledge-hub': {
          title: '行业知识库智能中枢解决方案',
          subtitle: '让企业知识流动创造价值',
          description: '解决企业知识分散、更新滞后、协作困难等痛点，构建统一的知识管理平台。',
          // ... 其他详细信息
        },
        'sales-training': {
          title: '智能销售训练系统解决方案',
          subtitle: '打造永不疲倦的AI销售教练',
          description: '针对汽车行业新人销售成单周期长、复杂场景应对失误率高、传统培训成本高等痛点，提供智能化销售培训解决方案。',
          // ... 其他详细信息
        },
        'digital-human': {
          title: '3D数字人智能交互解决方案',
          subtitle: '打造企业级超写实数字劳动力',
          description: '解决线下服务受限、专家资源稀缺、用户体验单一等行业痛点。',
          // ... 其他详细信息
        },
        'aigc-factory': {
          title: 'AIGC营销工厂解决方案',
          subtitle: '构建全渠道智能内容中枢，驱动品效合一增长新范式',
          description: '解决内容生产力瓶颈、渠道适配低效、合规风险剧增、数据价值断层等行业痛点。',
          // ... 其他详细信息
        },
        'sentiment-monitor': {
          title: '天网舆情监测解决方案',
          subtitle: '全域舆情感知中枢，AI驱动风险预警与声誉管理',
          description: '解决信息过载失控、风险识别滞后、研判精度不足、策略反馈断层等行业核心痛点。日均监测500万+条跨平台数据，提供实时预警和处置建议。',
          overviewImage: '/images/solutions/sentiment-monitor-overview.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-search-plus',
              title: '全网监测',
              description: '覆盖社交媒体、论坛、新闻等2000+信源，每分钟扫描10万条数据'
            },
            {
              icon: 'fas fa-exclamation-triangle',
              title: '风险预警',
              description: '情感分析准确率98.7%，危机预警响应速度<3分钟'
            },
            {
              icon: 'fas fa-chart-bar',
              title: '智能处置',
              description: '自动生成公关话术与传播策略，提供全流程处置建议'
            }
          ],
          features: [
            {
              icon: 'fas fa-layer-group',
              title: '深度语义解析',
              description: '基于Transformer-XL的上下文关联分析模型，准确识别潜在风险'
            },
            {
              icon: 'fas fa-database',
              title: '风险词库',
              description: '行业专属风险词库动态更新系统，覆盖最新风险类型'
            },
            {
              icon: 'fas fa-brain',
              title: '智能预警',
              description: '智能预警决策层，实时风险感知与等级评估'
            },
            {
              icon: 'fas fa-bolt',
              title: '快速响应',
              description: '与AIGC营销工厂API直连，1分钟启动修复内容矩阵投放'
            }
          ],
          useCases: [
            {
              title: '品牌声誉管理',
              description: '全方位品牌声誉监控与维护',
              image: '/images/solutions/sentiment-case1.jpg',
              points: [
                '提前2小时预警潜在风险',
                '负面舆情控制效率提升70%',
                '品牌声誉损失降低60%',
                '危机处理时间缩短80%'
              ]
            },
            {
              title: '竞品分析',
              description: '实时竞品动态监测',
              image: '/images/solutions/sentiment-case2.jpg',
              points: [
                '竞品信息实时追踪',
                '市场趋势提前预判',
                '竞争策略及时调整',
                '市场份额分析准确度95%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '监测能力',
              details: [
                '覆盖2000+信息源',
                '日处理数据量100TB',
                '实时监测延迟<1s',
                '数据准确率99.9%'
              ]
            },
            {
              title: '分析性能',
              details: [
                '情感分析准确率98.7%',
                '预警响应速度<3分钟',
                '事件分类准确率96%',
                '报告生成速度<5分钟'
              ]
            }
          ]
        },
        'marketing-platform': {
          title: '智能营销平台解决方案',
          subtitle: '全维数据融合×动态决策优化，激活存量用户100%价值裂变',
          description: '解决数据孤岛窒息、策略迭代迟滞、个性供给失焦、归因迷雾重重等行业痛点。通过全域数据融合和AI决策引擎，实现精准营销和价值最大化。',
          overviewImage: '/images/solutions/marketing-platform-overview.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-database',
              title: '全域数据熔炉',
              description: '对接DMP、CDP、CRM等15+数据源，构建统一用户视图'
            },
            {
              icon: 'fas fa-cogs',
              title: '智能决策中枢',
              description: 'ROI预测准确率85%，策略迭代速度提升10倍'
            },
            {
              icon: 'fas fa-bullseye',
              title: '精准营销引擎',
              description: '千万级用户个性化推荐，转化率提升70%'
            }
          ],
          features: [
            {
              icon: 'fas fa-project-diagram',
              title: '数据融合',
              description: '打通15+数据源，构建完整用户画像和行为轨迹'
            },
            {
              icon: 'fas fa-user-check',
              title: '用户洞察',
              description: '360°用户画像分析，精准把握用户需求'
            },
            {
              icon: 'fas fa-robot',
              title: '智能决策',
              description: '基于AI的营销策略智能决策，ROI预测准确率85%'
            },
            {
              icon: 'fas fa-chart-line',
              title: '效果优化',
              description: '全自动化策略优化，迭代速度提升10倍'
            }
          ],
          useCases: [
            {
              title: '精准获客',
              description: '智能化获客策略优化',
              image: '/images/solutions/marketing-case1.jpg',
              points: [
                '获客成本降低30%',
                '转化率提升70%',
                '营销ROI提升50%',
                '客户满意度提升40%'
              ]
            },
            {
              title: '存量经营',
              description: '提升存量用户价值',
              image: '/images/solutions/marketing-case2.jpg',
              points: [
                '客户活跃度提升60%',
                '复购率提升45%',
                '客户流失率降低35%',
                '客户价值提升50%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '平台性能',
              details: [
                '支持PB级数据处理',
                '毫秒级实时计算',
                '千万级用户分析',
                '系统可用性99.99%'
              ]
            },
            {
              title: '业务指标',
              details: [
                'ROI预测准确率85%',
                '策略优化效率提升10倍',
                '营销成本降低30%',
                '获客转化率提升70%'
              ]
            }
          ]
        }
      }
    }
  },
  computed: {
    currentSolution() {
      console.log('Current ID:', this.id)
      console.log('Available solutions:', Object.keys(this.solutionDetails))
      const solution = this.solutionDetails[this.id]
      console.log('Found solution:', solution)
      return solution || null
    }
  },
  methods: {
    requestDemo() {
      // 实现预约演示逻辑
      console.log('Request demo for:', this.currentSolution.title)
    },
    contactUs() {
      // 实现联系我们逻辑
      console.log('Contact us for:', this.currentSolution.title)
    }
  },
  created() {
    console.log('Component created with ID:', this.id)
    if (!this.currentSolution) {
      console.warn('Solution not found:', this.id)
    }
  }
}
</script>

<style scoped>
.solution-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.solution-header {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
  color: white;
  border-radius: 20px;
  margin: 40px 0;
  padding: 40px;
}

.header-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
}

.solution-overview {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.overview-content {
  max-width: 800px;
  margin: 0 auto;
}

.overview-text {
  margin-bottom: 40px;
}

.overview-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.overview-text p {
  color: #666;
  margin-bottom: 30px;
}

.key-features {
  display: flex;
  justify-content: space-between;
}

.feature-item {
  text-align: center;
}

.feature-item i {
  font-size: 2rem;
  margin-bottom: 10px;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.solution-features {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.solution-features h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.features-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.feature-card {
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  text-align: center;
}

.feature-icon {
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
}

.use-cases {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.use-cases h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.cases-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.case-card {
  width: calc(50% - 20px);
  margin-bottom: 40px;
  display: flex;
}

.case-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

.case-content {
  flex: 1;
}

.case-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.case-content p {
  color: #666;
}

.case-content ul {
  list-style: none;
  padding-left: 0;
}

.case-content li {
  margin-bottom: 10px;
}

.technical-specs {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.technical-specs h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.specs-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.spec-item {
  width: calc(50% - 20px);
  margin-bottom: 40px;
}

.spec-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.spec-item ul {
  list-style: none;
  padding-left: 0;
}

.spec-item li {
  margin-bottom: 10px;
}

.contact-section {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  margin-bottom: 40px;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-content h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.contact-content p {
  color: #666;
  margin-bottom: 30px;
}

.contact-buttons {
  display: flex;
  justify-content: space-between;
}

.demo-btn, .contact-btn {
  padding: 12px 30px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease;
}

.demo-btn:hover, .contact-btn:hover {
  background: #0056b3;
}

.not-found {
  text-align: center;
  padding: 100px 20px;
}

.back-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 20px;
  transition: background 0.3s;
}

.back-btn:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .solution-header {
    height: auto;
    padding: 60px 20px;
  }

  .header-content h1 {
    font-size: 2rem;
  }

  .features-grid, .cases-grid, .specs-grid {
    grid-template-columns: 1fr;
  }
}
</style> 