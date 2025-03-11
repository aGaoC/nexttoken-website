<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo">
        <img src="../images/logo.png">
      </router-link>
      
      <div class="menu-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/solutions" class="nav-link">解决方案</router-link>
        <router-link to="/products" class="nav-link">产品</router-link>
        <router-link to="/about" class="nav-link">关于我们</router-link>
        <router-link to="/contact" class="nav-link">联系我们</router-link>
      </div>

      <div class="nav-actions">

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 70px;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #007bff;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background: #333;
  transition: all 0.3s ease;
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.login-btn, .signup-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn {
  background: transparent;
  border: 1px solid #007bff;
  color: #007bff;
}

.signup-btn {
  background: #007bff;
  border: none;
  color: white;
}

.login-btn:hover, .signup-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-actions {
    display: none;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: calc(100vh - 70px);
    overflow-y: auto;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 15px 0;
    font-size: 1.1rem;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style> 