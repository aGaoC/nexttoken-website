<template>
  <div class="careers-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>加入 DeepZero</h1>
        <p>与优秀的团队一起，创造 AI 技术的无限可能</p>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="why-join-us">
      <h2>为什么选择 DeepZero</h2>
      <div class="benefits-grid">
        <div v-for="(benefit, index) in benefits" :key="index" class="benefit-card">
          <i :class="benefit.icon"></i>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </div>
      </div>
    </section>

    <!-- Company Culture -->
    <section class="company-culture">
      <h2>公司文化</h2>
      <div class="culture-grid">
        <div v-for="(culture, index) in companyCultures" :key="index" class="culture-card">
          <img :src="culture.image" :alt="culture.title">
          <div class="culture-content">
            <h3>{{ culture.title }}</h3>
            <p>{{ culture.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="open-positions">
      <h2>开放职位</h2>
      <div class="positions-grid">
        <div v-for="(position, index) in positions" :key="index" class="position-card">
          <div class="position-header">
            <h3>{{ position.title }}</h3>
            <span class="department">{{ position.department }}</span>
          </div>
          <div class="position-details">
            <div class="detail-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>{{ position.location }}</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-briefcase"></i>
              <span>{{ position.type }}</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-graduation-cap"></i>
              <span>{{ position.experience }}</span>
            </div>
          </div>
          <p class="position-description">{{ position.description }}</p>
          <div class="position-requirements">
            <h4>任职要求</h4>
            <ul>
              <li v-for="(req, reqIndex) in position.requirements" :key="reqIndex">
                {{ req }}
              </li>
            </ul>
          </div>
          <button class="apply-btn" @click="applyPosition(position)">申请职位</button>
        </div>
      </div>
    </section>

    <!-- Life at DeepZero -->
    <section class="life-at-deepzero">
      <h2>在 DeepZero 的生活</h2>
      <div class="life-grid">
        <div v-for="(item, index) in lifeAtDeepZero" :key="index" class="life-card">
          <img :src="item.image" :alt="item.title">
          <div class="life-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="application-process">
      <h2>申请流程</h2>
      <div class="process-timeline">
        <div v-for="(step, index) in applicationSteps" :key="index" class="process-step">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>开启你的职业新篇章</h2>
        <p>加入 DeepZero，与优秀的团队一起创造未来</p>
        <button class="cta-button" @click="scrollToPositions">查看职位</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Careers',
  data() {
    return {
      benefits: [
        {
          icon: 'fas fa-rocket',
          title: '快速成长',
          description: '提供广阔的发展空间和职业晋升机会'
        },
        {
          icon: 'fas fa-coins',
          title: '具有竞争力的薪资',
          description: '提供行业领先的薪资待遇和福利'
        },
        {
          icon: 'fas fa-users',
          title: '优秀团队',
          description: '与行业顶尖人才共事，共同成长'
        },
        {
          icon: 'fas fa-laptop-code',
          title: '技术前沿',
          description: '参与前沿 AI 技术研发和应用'
        },
        {
          icon: 'fas fa-balance-scale',
          title: '工作生活平衡',
          description: '弹性工作制，注重员工身心健康'
        },
        {
          icon: 'fas fa-globe',
          title: '国际化视野',
          description: '参与全球化项目，拓展国际视野'
        }
      ],
      companyCultures: [
        {
          title: '创新驱动',
          description: '鼓励创新思维，支持技术突破',
          image: '/images/careers/innovation.jpg'
        },
        {
          title: '开放协作',
          description: '倡导开放沟通，促进团队协作',
          image: '/images/careers/collaboration.jpg'
        },
        {
          title: '持续学习',
          description: '提供丰富的学习资源和培训机会',
          image: '/images/careers/learning.jpg'
        }
      ],
      positions: [
        {
          title: '高级算法工程师',
          department: 'AI 研发部',
          location: '北京/上海',
          type: '全职',
          experience: '3-5年',
          description: '负责公司核心 AI 算法的研发和优化',
          requirements: [
            '计算机科学、数学或相关专业硕士及以上学历',
            '扎实的机器学习理论基础，熟悉深度学习框架',
            '有大规模 AI 系统开发经验',
            '良好的算法设计和优化能力'
          ]
        },
        {
          title: '产品经理',
          department: '产品部',
          location: '北京',
          type: '全职',
          experience: '3-5年',
          description: '负责 AI 产品的规划和设计',
          requirements: [
            '计算机科学或相关专业本科及以上学历',
            '有 AI 产品设计经验',
            '优秀的产品思维和用户洞察能力',
            '良好的沟通协调能力'
          ]
        }
      ],
      lifeAtDeepZero: [
        {
          title: '技术分享会',
          description: '定期举办技术分享，促进知识交流',
          image: '/images/careers/tech-sharing.jpg'
        },
        {
          title: '团建活动',
          description: '丰富多彩的团建活动，增进团队感情',
          image: '/images/careers/team-building.jpg'
        },
        {
          title: '办公环境',
          description: '舒适的办公环境，激发创造力',
          image: '/images/careers/office.jpg'
        }
      ],
      applicationSteps: [
        {
          title: '投递简历',
          description: '通过官网或招聘平台投递简历'
        },
        {
          title: '初步筛选',
          description: 'HR 团队进行简历筛选和初步沟通'
        },
        {
          title: '技术面试',
          description: '技术团队进行专业能力评估'
        },
        {
          title: '终面',
          description: '与团队负责人进行深入交流'
        },
        {
          title: 'Offer',
          description: '发放录用通知，办理入职手续'
        }
      ]
    }
  },
  methods: {
    applyPosition(position) {
      // 实现职位申请逻辑
      console.log('申请职位:', position.title)
    },
    scrollToPositions() {
      const positionsSection = document.querySelector('.open-positions')
      positionsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.careers-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

.why-join-us {
  margin-bottom: 60px;
}

.why-join-us h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.benefit-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.benefit-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.company-culture {
  margin-bottom: 60px;
}

.company-culture h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.culture-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.culture-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.culture-content {
  padding: 20px;
}

.open-positions {
  margin-bottom: 60px;
}

.open-positions h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.position-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.department {
  background: #e3f2fd;
  color: #007bff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.position-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
}

.detail-item i {
  color: #007bff;
}

.position-description {
  margin-bottom: 20px;
  color: #666;
}

.position-requirements {
  margin-bottom: 20px;
}

.position-requirements h4 {
  margin-bottom: 10px;
}

.position-requirements ul {
  list-style: none;
  padding: 0;
}

.position-requirements li {
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.position-requirements li:before {
  content: "•";
  color: #007bff;
  position: absolute;
  left: 0;
}

.apply-btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.apply-btn:hover {
  transform: translateY(-2px);
}

.life-at-deepzero {
  margin-bottom: 60px;
}

.life-at-deepzero h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.life-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.life-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.life-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.life-content {
  padding: 20px;
}

.application-process {
  margin-bottom: 60px;
}

.application-process h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.process-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  height: 2px;
  background: #007bff;
  z-index: 1;
}

.process-step {
  position: relative;
  z-index: 2;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 15px;
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

.cta-button {
  padding: 15px 40px;
  background: white;
  color: #007bff;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
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

  .position-details {
    grid-template-columns: 1fr;
  }

  .process-timeline::before {
    display: none;
  }
}
</style> 