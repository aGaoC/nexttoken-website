<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>联系我们</h1>
        <p>期待与您的合作，共创 AI 未来</p>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="contact-info">
      <div class="info-grid">
        <div v-for="(info, index) in contactInfo" :key="index" class="info-card">
          <i :class="info.icon"></i>
          <h3>{{ info.title }}</h3>
          <p>{{ info.content }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-form">
      <div class="form-container">
        <h2>发送消息</h2>
        <p>请填写以下表单，我们会尽快与您联系</p>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="phone">电话</label>
            <input type="tel" id="phone" v-model="form.phone">
          </div>
          <div class="form-group">
            <label for="company">公司</label>
            <input type="text" id="company" v-model="form.company">
          </div>
          <div class="form-group">
            <label for="subject">主题</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">请选择主题</option>
              <option v-for="(option, index) in subjectOptions" 
                      :key="index" 
                      :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">消息内容</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">发送消息</button>
        </form>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="office-locations">
      <h2>办公地点</h2>
      <div class="locations-grid">
        <div v-for="(location, index) in officeLocations" :key="index" class="location-card">
          <div class="location-header">
            <i class="fas fa-building"></i>
            <h3>{{ location.city }}</h3>
          </div>
          <div class="location-content">
            <p><i class="fas fa-map-marker-alt"></i> {{ location.address }}</p>
            <p><i class="fas fa-phone"></i> {{ location.phone }}</p>
            <p><i class="fas fa-envelope"></i> {{ location.email }}</p>
          </div>
          <div class="location-map">
            <img :src="location.mapImage" :alt="location.city + '地图'">
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <h2>常见问题</h2>
      <div class="faq-grid">
        <div v-for="(faq, index) in faqs" :key="index" class="faq-card">
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <i :class="['fas', faq.isOpen ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
          </div>
          <div class="faq-answer" v-show="faq.isOpen">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="social-media">
      <h2>关注我们</h2>
      <div class="social-grid">
        <a v-for="(social, index) in socialMedia" 
           :key="index" 
           :href="social.url" 
           target="_blank" 
           class="social-card">
          <i :class="social.icon"></i>
          <span>{{ social.name }}</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      contactInfo: [
        {
          icon: 'fas fa-map-marker-alt',
          title: '公司地址',
          content: '北京市朝阳区科技园区88号'
        },
        {
          icon: 'fas fa-phone',
          title: '联系电话',
          content: '+86 10 8888 8888'
        },
        {
          icon: 'fas fa-envelope',
          title: '电子邮箱',
          content: 'contact@deepzero.ai'
        },
        {
          icon: 'fas fa-clock',
          title: '工作时间',
          content: '周一至周五 9:00-18:00'
        }
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      },
      subjectOptions: [
        '产品咨询',
        '技术支持',
        '商务合作',
        '媒体采访',
        '其他'
      ],
      officeLocations: [
        {
          city: '北京',
          address: '北京市朝阳区科技园区88号',
          phone: '+86 10 8888 8888',
          email: 'beijing@deepzero.ai',
          mapImage: '/images/contact/beijing-map.jpg'
        },
        {
          city: '上海',
          address: '上海市浦东新区张江高科技园区',
          phone: '+86 21 6666 6666',
          email: 'shanghai@deepzero.ai',
          mapImage: '/images/contact/shanghai-map.jpg'
        }
      ],
      faqs: [
        {
          question: '如何开始使用 DeepZero 的产品？',
          answer: '您可以通过官网注册账号，或联系我们的销售团队获取产品演示和试用。',
          isOpen: false
        },
        {
          question: '是否提供技术支持？',
          answer: '是的，我们提供7*24小时技术支持服务，包括在线咨询、电话支持和现场服务。',
          isOpen: false
        },
        {
          question: '如何成为合作伙伴？',
          answer: '欢迎通过官网提交合作申请，我们的商务团队会尽快与您联系。',
          isOpen: false
        }
      ],
      socialMedia: [
        {
          name: '微信',
          icon: 'fab fa-weixin',
          url: '#'
        },
        {
          name: '微博',
          icon: 'fab fa-weibo',
          url: '#'
        },
        {
          name: '领英',
          icon: 'fab fa-linkedin',
          url: '#'
        }
      ]
    }
  },
  methods: {
    submitForm() {
      // 实现表单提交逻辑
      console.log('提交表单:', this.form)
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-info {
  margin-bottom: 60px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.contact-form {
  margin-bottom: 60px;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-container h2 {
  margin-bottom: 10px;
  text-align: center;
}

.form-container p {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.office-locations {
  margin-bottom: 60px;
}

.office-locations h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.location-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.location-header {
  padding: 20px;
  background: #007bff;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.location-header i {
  font-size: 1.5rem;
}

.location-content {
  padding: 20px;
}

.location-content p {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.location-content i {
  color: #007bff;
}

.location-map img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.faq-section {
  margin-bottom: 60px;
}

.faq-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.faq-grid {
  max-width: 800px;
  margin: 0 auto;
}

.faq-card {
  background: white;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
}

.faq-question i {
  color: #007bff;
}

.faq-answer {
  padding: 0 20px 20px;
  color: #666;
}

.social-media {
  margin-bottom: 60px;
}

.social-media h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.social-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 15px;
  text-decoration: none;
  color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.social-card:hover {
  transform: translateY(-5px);
}

.social-card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #007bff;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .form-container {
    padding: 20px;
  }
}
</style> 