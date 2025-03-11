<template>
  <div class="about-page">
    <!-- 头部区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>拓肯预测 NextToken</h1>
        <p class="slogan">拓垦新界·智绘未来——AI数智化营销的行业深耕者</p>
      </div>
    </section>

    <!-- 技术领航 -->
    <section class="tech-leadership section">
      <div class="section-content">
        <h2>技术领航</h2>
        <div class="tech-grid">
          <div class="tech-card">
            <div class="icon">
              <i class="fas fa-brain"></i>
            </div>
            <h3>顶尖科研团队</h3>
            <ul>
              <li>中科院计算所博士领衔的核心算法团队</li>
              <li>20+资深AI工程师与行业专家</li>
              <li>累计发表顶会顶刊10+篇</li>
              <li>累计获得50+项技术专利</li>
            </ul>
          </div>
          <div class="tech-card">
            <div class="icon">
              <i class="fas fa-rocket"></i>
            </div>
            <h3>核心技术优势</h3>
            <ul>
              <li>DeepSeek大模型自主研发</li>
              <li>多模态AI技术深度整合</li>
              <li>行业专属模型定制能力</li>
              <li>端到端解决方案交付</li>
            </ul>
          </div>
          <div class="tech-card">
            <div class="icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>行业影响力</h3>
            <ul>
              <li>服务300+企业客户</li>
              <li>10+行业解决方案</li>
              <li>平均提升效率200%</li>
              <li>客户满意度95%+</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="history-section section">
      <div class="section-content">
        <h2>发展历程</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="year">2023</div>
            <div class="content">
              <h3>技术突破</h3>
              <p>DeepSeek大模型研发成功，获得多项国家级认证</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2022</div>
            <div class="content">
              <h3>规模扩张</h3>
              <p>服务客户突破300家，解决方案覆盖10+行业</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="year">2021</div>
            <div class="content">
              <h3>产品升级</h3>
              <p>AI营销工厂2.0发布，效能提升200%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业愿景 -->
    <section class="vision-section section">
      <div class="section-content">
        <h2>企业愿景</h2>
        <div class="vision-grid">
          <div class="vision-card">
            <div class="icon">
              <i class="fas fa-eye"></i>
            </div>
            <h3>使命</h3>
            <p>用AI技术重构企业营销价值链，助力企业数智化转型</p>
          </div>
          <div class="vision-card">
            <div class="icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3>愿景</h3>
            <p>成为全球领先的AI营销科技公司</p>
          </div>
          <div class="vision-card">
            <div class="icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>价值观</h3>
            <p>创新、专注、协作、共赢</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-section section">
      <div class="contact-content">
        <h2>联系我们</h2>
        <p>期待与您共创AI智能化未来</p>
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>北京市海淀区科技园区</p>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <p>400-888-8888</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <p>contact@nexttoken.com</p>
          </div>
        </div>
        <button class="contact-btn" @click="contactUs">立即咨询</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
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

.tech-leadership {
  margin-bottom: 60px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.tech-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  height: 200px;
  overflow: hidden;
}

.icon i {
  font-size: 3rem;
  color: #007bff;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tech-card h3 {
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
}

.tech-card ul {
  list-style: none;
  padding: 0 20px 20px;
}

.tech-card li {
  margin-bottom: 10px;
}

.history-section {
  margin-bottom: 60px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007bff;
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 40px;
}

.year {
  background: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 0 20px;
  font-weight: bold;
}

.timeline-item .content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  max-width: 300px;
}

.timeline-item h3 {
  margin-bottom: 10px;
}

.timeline-item p {
  color: #666;
}

.vision-section {
  margin-bottom: 60px;
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.vision-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s ease;
}

.vision-card:hover {
  transform: translateY(-5px);
}

.vision-card h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.vision-card p {
  color: #666;
}

.contact-section {
  background: linear-gradient(135deg, #007bff 0%, #00bcd4 100%);
  color: white;
  padding: 60px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 60px;
}

.contact-content h2 {
  margin-bottom: 20px;
}

.contact-content p {
  margin-bottom: 30px;
  opacity: 0.9;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-item i {
  color: #007bff;
  font-size: 1.2rem;
}

.contact-btn {
  display: inline-block;
  padding: 15px 40px;
  background: white;
  color: #007bff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.contact-btn:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    flex-direction: column;
    margin-left: 20px;
  }

  .year {
    margin-bottom: 10px;
  }

  .contact-info {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>

<script>
export default {
  name: 'About',
  methods: {
    contactUs() {
      // 实现联系我们的逻辑
      console.log('Contact button clicked')
    }
  }
}
</script> 