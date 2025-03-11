<template>
  <div class="home-page">
    <!-- 头部区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>拓肯预测 NextToken</h1>
        <p class="slogan">拓垦新界·智绘未来</p>
      </div>
    </section>

    <!-- 企业愿景 -->
    <section class="vision-section">
      <div class="section-content">
        <h2>企业愿景</h2>
        <p class="vision-text">
          我们致力于构建下一代企业智能中枢，通过自主创新的AI技术体系，推动营销决策从「经验驱动」向「认知智能」跃迁。
          聚焦市场洞察、销售增效、公关策略三大核心场景，打造覆盖「数据-决策-执行」全链路的数智化解决方案，让每家企业都拥有可进化的商业大脑。
        </p>
      </div>
    </section>

    <!-- 核心使命 -->
    <section class="mission-section">
      <div class="section-content">
        <h2>核心使命</h2>
        <div class="mission-grid">
          <div class="mission-card">
            <div class="icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3>让AI成为企业增长的基础设施</h3>
          </div>
          <div class="mission-card">
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>打造营销智能化的最短路径</h3>
          </div>
          <div class="mission-card">
            <div class="icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>构建人机协同的新型生产力</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- 行业深耕 -->
    <section class="industry-section">
      <div class="section-content">
        <h2>行业深耕</h2>
        <p class="subtitle">已为2大垂直领域注入智能动能</p>
        <div class="industry-grid">
          <div class="industry-card">
            <div class="icon">
              <i class="fas fa-car"></i>
            </div>
            <h3>汽车行业</h3>
            <p>新车上市策略生成效率提升100%</p>
          </div>
          <div class="industry-card">
            <div class="icon">
              <i class="fas fa-landmark"></i>
            </div>
            <h3>金融领域</h3>
            <p>理财产品销售转化率平均提升50%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-section">
      <div class="contact-content">
        <h2>开启智能化转型之旅</h2>
        <p>让我们助力您的企业实现数智化升级</p>
        <button class="contact-btn" @click="contactUs">立即咨询</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    contactUs() {
      // 实现联系我们的逻辑
      console.log('Contact button clicked')
    }
  }
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero-section {
  text-align: center;
  padding: 100px 0;
  background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
  color: white;
  border-radius: 20px;
  margin-bottom: 80px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
}

.slogan {
  font-size: 1.8rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

.section-content {
  text-align: center;
  margin-bottom: 80px;
}

h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
}

.vision-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  max-width: 900px;
  margin: 0 auto;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.mission-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-5px);
}

.mission-card .icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.mission-card h3 {
  font-size: 1.3rem;
  color: #333;
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.industry-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.industry-card:hover {
  transform: translateY(-5px);
}

.industry-card .icon {
  font-size: 3rem;
  color: #007bff;
  margin-bottom: 20px;
}

.industry-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.industry-card p {
  color: #666;
  line-height: 1.6;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.contact-section {
  text-align: center;
  padding: 60px;
  background: #f8f9fa;
  border-radius: 20px;
}

.contact-btn {
  padding: 15px 40px;
  font-size: 1.2rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-btn:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .slogan {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  .vision-text {
    font-size: 1.1rem;
  }

  .section-content {
    margin-bottom: 60px;
  }
}
</style> 