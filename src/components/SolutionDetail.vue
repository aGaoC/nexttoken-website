<template>
  <div class="solution-detail">
    <!-- 解决方案头部 -->
    <section class="solution-header">
      <div class="header-content">
        <h1>{{ solution.title }}</h1>
        <p class="subtitle">{{ solution.subtitle }}</p>
      </div>
      <div class="header-image">
        <img :src="solution.headerImage" :alt="solution.title">
      </div>
    </section>

    <!-- 解决方案概述 -->
    <section class="solution-overview">
      <div class="container">
        <h2>解决方案概述</h2>
        <div class="overview-content">
          <div class="overview-text">
            <p>{{ solution.overview }}</p>
            <ul class="key-points">
              <li v-for="(point, index) in solution.keyPoints" :key="index">
                <i class="fas fa-check"></i>
                {{ point }}
              </li>
            </ul>
          </div>
          <div class="overview-stats">
            <div v-for="(stat, index) in solution.stats" :key="index" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心功能 -->
    <section class="core-features">
      <div class="container">
        <h2>核心功能</h2>
        <div class="features-grid">
          <div v-for="(feature, index) in solution.features" :key="index" class="feature-card">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="use-cases">
      <div class="container">
        <h2>应用场景</h2>
        <div class="cases-grid">
          <div v-for="(case_, index) in solution.useCases" :key="index" class="case-card">
            <img :src="case_.image" :alt="case_.title">
            <div class="case-content">
              <h3>{{ case_.title }}</h3>
              <p>{{ case_.description }}</p>
              <ul class="case-points">
                <li v-for="(point, pointIndex) in case_.points" :key="pointIndex">
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section class="tech-advantages">
      <div class="container">
        <h2>技术优势</h2>
        <div class="advantages-grid">
          <div v-for="(advantage, index) in solution.advantages" :key="index" class="advantage-item">
            <div class="advantage-icon">
              <i :class="advantage.icon"></i>
            </div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例 -->
    <section class="customer-cases">
      <div class="container">
        <h2>客户案例</h2>
        <div class="cases-slider">
          <div v-for="(case_, index) in solution.customerCases" :key="index" class="case-slide">
            <div class="case-header">
              <img :src="case_.logo" :alt="case_.company">
              <div class="case-info">
                <h3>{{ case_.company }}</h3>
                <span>{{ case_.industry }}</span>
              </div>
            </div>
            <p class="case-description">{{ case_.description }}</p>
            <div class="case-results">
              <div v-for="(result, resultIndex) in case_.results" :key="resultIndex" class="result-item">
                <span class="result-value">{{ result.value }}</span>
                <span class="result-label">{{ result.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="contact-section">
      <div class="container">
        <h2>开启智能转型之旅</h2>
        <p>我们的专业团队将为您提供全方位的解决方案支持</p>
        <div class="contact-buttons">
          <button class="demo-btn">预约演示</button>
          <button class="contact-btn">联系我们</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SolutionDetail',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.solution-detail {
  padding-top: 70px;
}

.solution-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.header-image {
  margin-top: 40px;
}

.header-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

.overview-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.key-points {
  list-style: none;
  margin-top: 20px;
}

.key-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.key-points i {
  color: #007bff;
}

.overview-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5px;
}

.stat-label {
  color: #666;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon i {
  font-size: 1.5rem;
  color: #007bff;
}

.cases-grid {
  display: grid;
  gap: 40px;
}

.case-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.case-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-content {
  padding: 30px;
}

.case-points {
  list-style: none;
  margin-top: 20px;
}

.case-points li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.case-points li::before {
  content: '•';
  color: #007bff;
  position: absolute;
  left: 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-item {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.advantage-icon {
  width: 50px;
  height: 50px;
  background: #f8f9fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.advantage-icon i {
  font-size: 1.2rem;
  color: #007bff;
}

.cases-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.case-slide {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.case-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.case-header img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.case-info h3 {
  margin-bottom: 5px;
}

.case-info span {
  color: #666;
}

.case-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.result-item {
  text-align: center;
}

.result-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 5px;
}

.result-label {
  color: #666;
  font-size: 0.9rem;
}

.contact-section {
  background: linear-gradient(135deg, #007bff 0%, #00bcd4 100%);
  color: white;
  text-align: center;
  padding: 60px 0;
}

.contact-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.demo-btn, .contact-btn {
  padding: 15px 40px;
  border-radius: 30px;
  font-size: 1.1rem;
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
  .overview-content {
    grid-template-columns: 1fr;
  }

  .case-card {
    grid-template-columns: 1fr;
  }

  .case-card img {
    height: 200px;
  }

  .contact-buttons {
    flex-direction: column;
  }
}
</style> 