<template>
  <div class="product-detail">
    <!-- Product Header -->
    <section class="product-header">
      <div class="header-content">
        <h1>{{ product.title }}</h1>
        <p class="subtitle">{{ product.subtitle }}</p>
      </div>
    </section>

    <!-- Product Overview -->
    <section class="product-overview">
      <div class="overview-content">
        <div class="overview-text">
          <h2>产品概述</h2>
          <p>{{ product.description }}</p>
          <div class="key-features">
            <div v-for="(feature, index) in product.keyFeatures" :key="index" class="feature-item">
              <i :class="feature.icon"></i>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <div class="overview-image">
          <img :src="product.overviewImage" :alt="product.title">
        </div>
      </div>
    </section>

    <!-- Product Features -->
    <section class="product-features">
      <h2>核心功能</h2>
      <div class="features-grid">
        <div v-for="(feature, index) in product.features" :key="index" class="feature-card">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="use-cases">
      <h2>应用场景</h2>
      <div class="cases-grid">
        <div v-for="(case_study, index) in product.useCases" :key="index" class="case-card">
          <img :src="case_study.image" :alt="case_study.title">
          <div class="case-content">
            <h3>{{ case_study.title }}</h3>
            <p>{{ case_study.description }}</p>
            <ul>
              <li v-for="(point, pointIndex) in case_study.points" :key="pointIndex">
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Specs -->
    <section class="technical-specs">
      <h2>技术规格</h2>
      <div class="specs-grid">
        <div v-for="(spec, index) in product.technicalSpecs" :key="index" class="spec-item">
          <h3>{{ spec.title }}</h3>
          <ul>
            <li v-for="(detail, detailIndex) in spec.details" :key="detailIndex">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>开始使用 {{ product.title }}</h2>
        <p>立即体验我们的产品，开启智能转型之旅</p>
        <div class="cta-buttons">
          <button class="demo-btn">预约演示</button>
          <button class="contact-btn">联系我们</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      productDetails: {
        'knowledge-hub': {
          title: 'AI企业知识库中枢',
          subtitle: '构建企业级智能知识管理体系',
          description: '通过多模态知识萃取、语义搜索引擎和动态知识图谱，为企业打造智能化知识管理平台。',
          overviewImage: '/images/products/knowledge-hub.jpg',
        keyFeatures: [
          {
              icon: 'fas fa-brain',
              title: '多模态知识萃取',
              description: '支持PDF/PPT/音视频等30+格式智能解析，知识提取准确率95%'
            },
            {
              icon: 'fas fa-search',
              title: '语义搜索引擎',
              description: '问答响应速度提升80%以上，知识调用准确率达95%以上'
            },
            {
              icon: 'fas fa-project-diagram',
              title: '动态知识图谱',
              description: '自动构建行业专属知识网络，更新时效性提升3倍'
            }
          ],
          features: [
            {
              icon: 'fas fa-database',
              title: '智能知识提取',
              description: '支持PDF/PPT/音视频等30+格式文档的智能解析与知识提取，准确率达95%'
            },
            {
              icon: 'fas fa-search',
              title: '语义搜索引擎',
              description: '基于深度学习的语义理解，支持自然语言问答，响应速度提升80%'
            },
            {
              icon: 'fas fa-project-diagram',
              title: '知识图谱构建',
              description: '自动构建行业专属知识网络，实现知识关联分析和推理'
            },
            {
              icon: 'fas fa-sync',
              title: '实时更新机制',
              description: '支持知识的实时更新和动态扩展，更新时效性提升3倍'
            }
          ],
          useCases: [
            {
              title: '企业培训知识库',
              description: '构建企业专属培训体系',
              image: '/images/products/knowledge-training.jpg',
              points: [
                '自动整理归档培训材料和课程内容',
                '智能推荐个性化学习路径',
                '实时追踪学习进度和效果',
                '某金融企业应用后培训效率提升85%'
              ]
            },
            {
              title: '销售知识助手',
              description: '提供实时销售支持',
              image: '/images/products/knowledge-sales.jpg',
              points: [
                '产品知识实时查询和推送',
                '竞品分析和对比建议',
                '销售话术智能推荐',
                '某车企销售人员查询效率提升210%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '知识处理能力',
              details: [
                '支持30+种文件格式解析',
                '知识提取准确率95%',
                '千万级知识点实时索引',
                '毫秒级响应速度'
              ]
            },
            {
              title: '系统性能',
              details: [
                '支持10000+并发访问',
                '知识更新延迟<5分钟',
                '系统可用性99.9%',
                '全文检索响应<100ms'
              ]
            }
          ]
        },
        'sales-training': {
          title: '智能销售对练系统',
          subtitle: '打造智能化销售培训平台',
          description: '通过多模态交互演练、百万级情景库和AI陪练教练，提供全方位销售培训解决方案。',
          overviewImage: '/images/products/sales-training.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-user-tie',
              title: '智能销售对练系统',
              description: '多模态交互演练，百万级情景库，AI陪练教练'
          }
        ],
        features: [
          {
            icon: 'fas fa-comments',
              title: '多模态交互',
              description: '支持语音、表情、话术的实时分析和反馈，全方位评估销售表现'
            },
            {
              icon: 'fas fa-sitemap',
              title: '场景库管理',
              description: '覆盖产品介绍、异议处理等百万级真实销售场景，支持自定义场景'
            },
            {
              icon: 'fas fa-chart-line',
              title: '能力评估体系',
              description: '多维度评估销售能力，生成个性化提升方案'
            },
            {
              icon: 'fas fa-user-graduate',
              title: 'AI教练指导',
              description: 'NLP深度分析提供专业改进建议，模拟真实教练指导'
            }
          ],
          useCases: [
            {
              title: '新人培训',
              description: '快速提升新人销售能力',
              image: '/images/products/sales-new.jpg',
              points: [
                '标准化销售流程训练',
                '真实场景模拟演练',
                '个性化改进建议',
                '新人培训周期缩短50%'
              ]
            },
            {
              title: '销售技能提升',
              description: '持续优化销售技巧',
              image: '/images/products/sales-improve.jpg',
              points: [
                '高阶销售技巧训练',
                '难点场景突破',
                'AI实时评估反馈',
                '销售转化率提升35%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '交互性能',
              details: [
                '语音识别准确率98%',
                '表情识别准确率95%',
                '实时反馈延迟<200ms',
                '支持多人同时对练'
              ]
            },
            {
              title: '场景覆盖',
              details: [
                '内置100万+训练场景',
                '支持场景自定义',
                '覆盖90%常见问题',
                '每周更新1000+场景'
              ]
            }
          ]
        },
        'aigc-factory': {
          title: 'AIGC营销工厂',
          subtitle: '智能内容生产与优化平台',
          description: '支持图文/视频/3D素材自动生产，基于GAN模型实时优化，打通全渠道分发。',
          overviewImage: '/images/products/aigc-factory.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-magic',
              title: 'AIGC营销工厂',
              description: '智能内容生成，动态优化系统，全渠道分发引擎'
            }
          ],
          features: [
            {
              icon: 'fas fa-magic',
              title: '智能内容生成',
              description: '一键生成图文/视频/3D素材，创意产出效率提升20倍'
            },
            {
              icon: 'fas fa-random',
              title: '动态优化系统',
              description: 'GAN模型实时A/B测试，内容点击率提升23%-65%'
            },
            {
              icon: 'fas fa-share-alt',
              title: '全渠道分发',
              description: '对接微信/抖音等20+平台，智能匹配最佳投放策略'
            },
            {
              icon: 'fas fa-palette',
              title: '品牌调性适配',
              description: '自动调整生成内容以匹配品牌调性，保持品牌一致性'
            }
          ],
          useCases: [
            {
              title: '营销内容生产',
              description: '高效生产多样化营销内容',
              image: '/images/products/aigc-marketing.jpg',
              points: [
                '一键生成多形态创意',
                '智能调整品牌调性',
                '自动适配多平台规格',
                '内容产出效率提升20倍'
              ]
            },
            {
              title: '社媒运营',
              description: '智能化社媒内容运营',
              image: '/images/products/aigc-social.jpg',
              points: [
                '热点话题内容生成',
                '互动话题优化建议',
                '多账号内容排期',
                '互动率提升40%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '生成能力',
              details: [
                '支持图文/视频/3D生成',
                '多风格模型迁移',
                '素材生成速度<10s',
                '支持批量化生产'
              ]
            },
            {
              title: '优化效果',
              details: [
                'A/B测试效率提升300%',
                '创意点击率提升65%',
                '内容分发准确率95%',
                '素材使用率提升45%'
              ]
            }
          ]
        },
        'sentiment-monitor': {
          title: '天网舆情监测',
          subtitle: '全网舆情实时监控与分析',
          description: '覆盖全网2000+信源，提供实时监测、情感分析和智能应对建议。',
          overviewImage: '/images/products/sentiment-monitor.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-brain',
              title: '天网舆情监测',
              description: '全网实时监听，情感分析引擎，智能应对建议'
            }
          ],
          features: [
            {
              icon: 'fas fa-globe',
              title: '全网监听',
              description: '覆盖社交媒体、论坛、新闻等2000+信源，实时扫描分析'
            },
            {
              icon: 'fas fa-heart',
              title: '情感分析',
              description: '准确率98.7%的情感分析引擎，深入理解舆情态势'
            },
            {
              icon: 'fas fa-exclamation-triangle',
              title: '预警机制',
              description: '危机预警响应速度小于3分钟，提前发现潜在风险'
            },
            {
              icon: 'fas fa-tasks',
              title: '处置方案',
              description: '智能生成危机公关话术与传播策略，提供全流程处置建议'
            }
          ],
          useCases: [
            {
              title: '品牌口碑监测',
              description: '全面把控品牌声誉',
              image: '/images/products/monitor-brand.jpg',
              points: [
                '全网口碑实时监控',
                '情感趋势分析',
                '竞品声量对比',
                '及时发现潜在风险'
              ]
            },
            {
              title: '危机预警处置',
              description: '快速应对舆情危机',
              image: '/images/products/monitor-crisis.jpg',
              points: [
                '提前2小时预警',
                '智能生成应对方案',
                '全流程危机处置',
                '负面影响降低70%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '监测范围',
              details: [
                '覆盖2000+信息源',
                '支持15种内容形式',
                '每日处理数据量100TB',
                '历史数据支持5年'
              ]
            },
            {
              title: '分析性能',
              details: [
                '情感分析准确率98.7%',
                '事件聚类准确率95%',
                '预警响应<3分钟',
                '报告生成<5分钟'
              ]
            }
          ]
        },
        'digital-human': {
          title: '企业数字人',
          subtitle: '打造企业专属数字员工',
          description: '提供超写实数字分身、多场景交互能力和实时知识更新的数字人解决方案。',
          overviewImage: '/images/products/digital-human.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-user-tie',
              title: '智能销售对练系统',
              description: '多模态交互演练，百万级情景库，AI陪练教练'
            }
          ],
          features: [
            {
              icon: 'fas fa-user-circle',
              title: '形象定制',
              description: '支持4K级形象定制，表情动作误差小于0.1mm'
            },
            {
              icon: 'fas fa-microphone-alt',
              title: '多场景交互',
              description: '支持直播、客服、培训等场景，语音响应延迟小于200ms'
            },
            {
              icon: 'fas fa-brain',
              title: '知识赋能',
              description: '与企业知识库无缝对接，实现专业领域对话'
            },
            {
              icon: 'fas fa-theater-masks',
              title: '情感表达',
              description: '支持多维度情感表达，提供自然流畅的交互体验'
          }
        ],
        useCases: [
          {
            title: '智能客服',
              description: '7*24小时在线服务',
              image: '/images/products/digital-service.jpg',
            points: [
                '多轮对话自然流畅',
                '情感化交互体验',
                '专业知识实时调用',
                '客户满意度提升40%'
              ]
            },
            {
              title: '品牌代言',
              description: '创新品牌营销方式',
              image: '/images/products/digital-brand.jpg',
            points: [
                '形象高度定制化',
                '多场景内容创作',
                '直播带货无限时',
                '营销成本降低50%'
            ]
          }
        ],
        technicalSpecs: [
          {
              title: '视觉效果',
              details: [
                '4K超高清画质',
                '面部表情300+',
                '动作细节误差<0.1mm',
                '渲染速度60fps'
              ]
            },
            {
              title: '交互能力',
            details: [
                '语音延迟<200ms',
                '多轮对话准确率95%',
                '情感识别准确率90%',
                '支持多人同时交互'
              ]
            }
          ]
        },
        'marketing-decision': {
          title: '智能营销决策平台',
          subtitle: '全域数据驱动的营销决策系统',
          description: '整合多源数据，提供智能策略决策和自动化营销执行能力。',
          overviewImage: '/images/products/marketing-decision.jpg',
          keyFeatures: [
            {
              icon: 'fas fa-chart-line',
              title: '智能营销决策平台',
              description: '全域数据融合，智能内容生成，智能策略中枢，自动化营销云'
            }
          ],
          features: [
            {
              icon: 'fas fa-database',
              title: '数据融合',
              description: '对接DMP、CDP、CRM等15+数据源，构建统一数据视图'
            },
            {
              icon: 'fas fa-users',
              title: '用户洞察',
              description: '多维度用户画像分析，精准把握用户需求'
            },
            {
              icon: 'fas fa-robot',
              title: '智能决策',
              description: '集成DeepSeek模型，ROI预测准确率达85%'
            },
            {
              icon: 'fas fa-cogs',
              title: '自动化执行',
              description: '全流程AI驱动，营销策略迭代速度提升10倍'
            }
          ],
          useCases: [
            {
              title: '精准获客',
              description: '智能化获客策略',
              image: '/images/products/marketing-acquire.jpg',
              points: [
                '多维度用户画像',
                '智能匹配目标人群',
                '自动优化投放策略',
                '获客成本降低30%'
              ]
            },
            {
              title: '客户增长',
              description: '数据驱动的增长方案',
              image: '/images/products/marketing-growth.jpg',
              points: [
                '客户生命周期管理',
                '个性化营销方案',
                '全渠道协同营销',
                '客户价值提升50%'
              ]
            }
          ],
          technicalSpecs: [
            {
              title: '数据处理',
            details: [
                '支持15+数据源接入',
                '日处理数据量>100TB',
                '实时计算延迟<1s',
                '数据准确率99.9%'
              ]
            },
            {
              title: '决策能力',
            details: [
                'ROI预测准确率85%',
                '策略优化迭代<1h',
                '支持千万级用户分析',
                '方案生成速度<5min'
              ]
            }
          ]
        }
      }
    }
  },
  computed: {
    product() {
      return this.productDetails[this.id] || null
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        if (!this.productDetails[newId]) {
          this.$router.push('/404')
        }
      }
    }
  }
}
</script>

<style scoped>
.product-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-header {
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

.header-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
}

.product-overview {
  margin-bottom: 60px;
}

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.overview-text h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.overview-text p {
  margin-bottom: 30px;
  line-height: 1.6;
  color: #666;
}

.key-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-item {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.feature-item i {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 15px;
}

.feature-item h3 {
  margin-bottom: 10px;
}

.overview-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-features {
  margin-bottom: 60px;
}

.product-features h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.use-cases {
  margin-bottom: 60px;
}

.use-cases h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.case-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.case-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.case-content {
  padding: 20px;
}

.case-content h3 {
  margin-bottom: 10px;
}

.case-content ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.case-content li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.case-content li:before {
  content: "•";
  color: #007bff;
  position: absolute;
  left: 0;
}

.technical-specs {
  margin-bottom: 60px;
}

.technical-specs h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.spec-item {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.spec-item h3 {
  margin-bottom: 20px;
  color: #333;
}

.spec-item ul {
  list-style: none;
  padding: 0;
}

.spec-item li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.spec-item li:before {
  content: "→";
  color: #007bff;
  position: absolute;
  left: 0;
}

.cta-section {
  background: linear-gradient(135deg, #007bff 0%, #00bcd4 100%);
  color: white;
  padding: 60px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 60px;
}

.cta-content h2 {
  margin-bottom: 20px;
}

.cta-content p {
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.demo-btn, .contact-btn {
  padding: 15px 40px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.demo-btn {
  background: white;
  color: #007bff;
  border: none;
}

.contact-btn {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.demo-btn:hover, .contact-btn:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .header-content h1 {
    font-size: 2rem;
  }

  .overview-content {
    grid-template-columns: 1fr;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }
}
</style> 