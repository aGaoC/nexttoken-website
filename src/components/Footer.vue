<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-grid">
        <!-- 关于我们 -->
        <div class="footer-section">
          <h3>关于我们</h3>
          <ul>
            <li><router-link to="/about">公司简介</router-link></li>
            <li><router-link to="/about#vision">企业愿景</router-link></li>
            <li><router-link to="/about#technology">技术优势</router-link></li>
            <li><router-link to="/about#development">发展历程</router-link></li>
          </ul>
        </div>

        <!-- 技术创新 -->
        <div class="footer-section">
          <h3>技术创新</h3>
          <ul>
            <li><router-link to="/technology/deepseek">DeepSeek大模型</router-link></li>
            <li><router-link to="/technology/multimodal">多模态AI技术</router-link></li>
            <li><router-link to="/technology/nlp">自然语言处理</router-link></li>
            <li><router-link to="/technology/computer-vision">计算机视觉</router-link></li>
          </ul>
        </div>

        <!-- 联系方式 -->
        <div class="footer-section contact-info">
          <h3>联系我们</h3>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>北京市海淀区科技园区</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <span>400-888-8888</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>contact@nexttoken.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="company-info">
          <img 
            src="/images/logo.png" 
            alt="NextToken Logo" 
            class="footer-logo"
          />
          <p>拓垦新界·智绘未来</p>
        </div>
        <p class="copyright">&copy; 2024 NextToken. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #1a237e;
  color: white;
  padding: 60px 0 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #fff;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: #007bff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
  display: inline-block;
}

.footer-section ul li a:hover {
  color: white;
  transform: translateX(5px);
}

.contact-info ul li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.contact-info i {
  color: #007bff;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  height: 30px; /* 根据实际需要调整大小 */
  width: auto;
  object-fit: contain;
  margin-bottom: 10px;
}

.company-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.company-info p {
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.9);
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-info ul li {
    justify-content: center;
  }
}
</style> 