<template>
  <div class="solutions-page">
    <div class="page-header">
      <h1>解决方案</h1>
      <p>深耕行业智能化转型，提供全方位AI解决方案</p>
    </div>
    <div class="solutions-grid">
      <div v-for="solution in solutions" :key="solution.id" class="solution-card">
        <div class="solution-icon">
          <i :class="solution.icon"></i>
        </div>
        <div class="solution-content">
          <h3>{{ solution.title }}</h3>
          <p class="description">{{ solution.description }}</p>
          <div class="highlights">
            <h4>核心亮点</h4>
            <ul>
              <li v-for="(point, index) in solution.highlights" :key="index">
                {{ point }}
              </li>
            </ul>
          </div>
          <div class="case-study">
            <h4>案例效果</h4>
            <p>{{ solution.caseStudy }}</p>
          </div>
          <!-- <router-link :to="`/solutions/${solution.id}`" class="learn-more">
            了解更多
            <i class="fas fa-arrow-right"></i>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Solutions',
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      heroSlides: [
        {
          id: 1,
          title: '行业解决方案',
          description: '为不同行业提供专业的 AI 技术解决方案'
        },
        {
          id: 2,
          title: '智能金融科技',
          description: '打造智能风控、智能投顾、智能客服等全方位解决方案'
        },
        {
          id: 3,
          title: '智能制造升级',
          description: '助力制造业实现智能质检、预测性维护、生产优化'
        },
        {
          id: 4,
          title: '医疗健康创新',
          description: '提供智能诊断、医疗影像分析、智能随访等医疗AI解决方案'
        }
      ],
      solutions: [
        {
          id: 'new-energy',
          title: '新能源汽车行业数字化解决方案',
          icon: 'fas fa-car-battery',
          description: '深耕汽车和金融行业，提供全域数字化解决方案，并对数据资产进行持续建设',
          highlights: [
            '新能源行业App建设与全域数字化落地',
            '3D车机界面交互实现',
            '用户行为分析引擎，构建360°用户画像',
            '基于强化学习的服务匹配算法，推荐准确率92%'
          ],
          caseStudy: '通过动态定价算法，提升充电桩运营效率'
        },
        {
          id: 'knowledge-hub',
          title: '行业知识库智能中枢解决方案',
          icon: 'fas fa-brain',
          description: '让企业知识流动创造价值',
          highlights: [
            '支持PDF/PPT/3D模型/音视频等50+格式解析',
            '基于NLP的知识抽取+动态知识图谱构建',
            '多终端智能检索+联邦知识共享',
            'API开放平台'
          ],
          caseStudy: '解决技术文档分散、知识更新滞后、跨国协作困难等痛点'
        },
        {
          id: 'sales-training',
          title: '智能销售训练系统解决方案',
          icon: 'fas fa-user-tie',
          description: '打造永不疲倦的AI销售教练',
          highlights: [
            '百万级行业情景库+动态策略生成器',
            '多模态感知系统',
            '42维度能力模型+自适应学习引擎',
            '新人销售成单周期缩短50%'
          ],
          caseStudy: '某车企使用后培训成本降低50%以上，客户满意度提升32%'
        },
        {
          id: 'digital-human',
          title: '3D数字人智能交互解决方案',
          icon: 'fas fa-robot',
          description: '打造企业级超写实数字劳动力',
          highlights: [
            '4K级超写实建模+微表情控制系统',
            '多模态感知引擎+实时知识库对接',
            '直播/客服/培训/营销全场景支持',
            '语音响应延迟<200ms'
          ],
          caseStudy: '某银行数字客服替代40%人工坐席，客户满意度提升20%'
        },
        {
          id: 'aigc-factory',
          title: 'AIGC营销工厂解决方案',
          icon: 'fas fa-magic',
          description: '构建全渠道智能内容中枢，驱动品效合一增长新范式',
          highlights: [
            '混合式生成架构：DeepSeek大模型+品牌私有模型',
            '内容生成准确率超92%',
            '创意生产效率提升10倍',
            '全渠道内容分发与优化'
          ],
          caseStudy: '内容生产成本降低40%，创意素材转化率提升65%'
        },
        {
          id: 'sentiment-monitor',
          title: '天网舆情监测解决方案',
          icon: 'fas fa-globe',
          description: '全域舆情感知中枢，AI驱动风险预警与声誉管理',
          highlights: [
            '基于Transformer-XL的上下文关联分析模型',
            '行业专属风险词库动态更新系统',
            '智能预警决策层',
            '与AIGC营销工厂API直连，1分钟启动修复'
          ],
          caseStudy: '提前2小时预警，负面舆情控制效率提升70%'
        },
        {
          id: 'marketing-platform',
          title: '智能营销平台解决方案',
          icon: 'fas fa-chart-line',
          description: '全维数据融合×动态决策优化，激活存量用户100%价值裂变',
          highlights: [
            '全域数据熔炉，打通15+数据源',
            '智能决策中枢，ROI预测准确率85%',
            '策略迭代速度提升10倍',
            '获客转化率提升70%'
          ],
          caseStudy: '客户活跃度提升60%，营销成本降低30%'
        }
      ],
      successStories: [
        {
          id: 1,
          company: '某大型银行',
          industry: '金融',
          logo: '/images/logos/bank-logo.png',
          description: '通过部署 DeepZero 智能风控系统，实现风险预警准确率提升40%',
          results: [
            { value: '40%', label: '风险预警准确率提升' },
            { value: '60%', label: '人工审核效率提升' },
            { value: '30%', label: '运营成本降低' }
          ]
        },
        {
          id: 2,
          company: '某电商平台',
          industry: '零售',
          logo: '/images/logos/retail-logo.png',
          description: '使用 DeepZero 智能推荐系统，转化率提升50%',
          results: [
            { value: '50%', label: '转化率提升' },
            { value: '35%', label: '客单价提升' },
            { value: '45%', label: '用户满意度提升' }
          ]
        }
      ],
      processSteps: [
        {
          title: '需求分析',
          description: '深入了解企业需求，制定个性化解决方案'
        },
        {
          title: '方案设计',
          description: '设计完整的技术方案和实施计划'
        },
        {
          title: '系统开发',
          description: '根据方案进行系统开发和优化'
        },
        {
          title: '部署实施',
          description: '系统部署和集成，确保平稳运行'
        },
        {
          title: '持续优化',
          description: '持续监控和优化系统性能'
        }
      ]
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // 每5秒切换一次
    },
    stopAutoSlide() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    },
    goToDetail(id) {
      // 使用命名路由进行导航
      this.$router.push({
        name: 'SolutionDetail',
        params: { id }
      }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          console.error('Navigation error:', err)
          this.$router.push('/404')
        }
      })
    }
  }
}
</script>

<style scoped>
.solutions-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 16px;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.solution-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.solution-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #007bff, #00bcd4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.solution-icon i {
  font-size: 28px;
  color: white;
}

.solution-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.solution-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

.highlights {
  margin-bottom: 24px;
}

.highlights h4, .case-study h4 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 12px;
  font-weight: 600;
}

.highlights ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: #555;
  line-height: 1.5;
}

.highlights li::before {
  content: "•";
  color: #007bff;
  position: absolute;
  left: 0;
  font-size: 1.2em;
}

.case-study {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
}

.case-study p {
  color: #555;
  margin: 0;
  line-height: 1.5;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s ease;
  margin-top: auto;
  font-weight: 500;
  justify-content: center;
}

.learn-more i {
  margin-left: 8px;
  font-size: 0.9em;
}

.learn-more:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .solution-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .page-header {
    margin-bottom: 40px;
  }

  .solutions-grid {
    gap: 20px;
  }

  .solution-card h3 {
    font-size: 1.3rem;
  }
}
</style> 