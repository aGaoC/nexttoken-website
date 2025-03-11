<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img 
        src="/images/logo.png" 
        alt="NextToken" 
        class="logo-image"
      />
    </router-link>
    <router-link to="/solutions" class="nav-link">解决方案</router-link>
    <router-link to="/about" class="nav-link">关于我们</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 40px; /* 根据实际需要调整大小 */
  width: auto;
  object-fit: contain;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.router-link-active {
  color: #007bff;
  background-color: #e6f0ff;
}
</style> 