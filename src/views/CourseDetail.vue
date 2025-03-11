<template>
  <div class="course-detail">
    <div class="course-header">
      <div class="course-header-content">
        <h1>{{ course.title }}</h1>
        <p class="course-description">{{ course.description }}</p>
        <div class="course-meta">
          <span><i class="fas fa-clock"></i> {{ course.duration }}</span>
          <span><i class="fas fa-signal"></i> {{ course.level }}</span>
          <span><i class="fas fa-users"></i> {{ course.students }} 名学生</span>
        </div>
        <button class="enroll-btn">立即报名</button>
      </div>
    </div>

    <div class="course-content">
      <div class="course-main">
        <div class="course-sections">
          <h2>课程大纲</h2>
          <div v-for="(section, index) in course.sections" :key="index" class="section">
            <h3>{{ section.title }}</h3>
            <ul>
              <li v-for="(lesson, lessonIndex) in section.lessons" :key="lessonIndex">
                {{ lesson.title }}
                <span class="lesson-duration">{{ lesson.duration }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="course-instructor">
          <h2>讲师介绍</h2>
          <div class="instructor-info">
            <img :src="course.instructor.avatar" :alt="course.instructor.name">
            <div class="instructor-details">
              <h3>{{ course.instructor.name }}</h3>
              <p>{{ course.instructor.title }}</p>
              <p class="instructor-bio">{{ course.instructor.bio }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="course-sidebar">
        <div class="course-card">
          <h3>课程信息</h3>
          <ul>
            <li><i class="fas fa-calendar"></i> 开课时间：{{ course.startDate }}</li>
            <li><i class="fas fa-clock"></i> 课程时长：{{ course.duration }}</li>
            <li><i class="fas fa-signal"></i> 难度级别：{{ course.level }}</li>
            <li><i class="fas fa-users"></i> 适合人群：{{ course.targetAudience }}</li>
          </ul>
          <div class="course-price">
            <span class="price">¥{{ course.price }}</span>
            <button class="enroll-btn">立即报名</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetail',
  data() {
    return {
      course: {
        title: '人工智能基础课程',
        description: '从零开始学习人工智能的核心概念和实践应用，掌握机器学习、深度学习等关键技术。',
        duration: '8周',
        level: '入门',
        students: 1234,
        price: 999,
        startDate: '2024-04-01',
        targetAudience: '对AI感兴趣的初学者',
        instructor: {
          name: '张教授',
          title: '人工智能专家',
          avatar: '/images/instructor.jpg',
          bio: '拥有10年AI研究经验，曾在多家知名科技公司担任技术顾问。'
        },
        sections: [
          {
            title: '第一周：人工智能概述',
            lessons: [
              { title: '人工智能发展历史', duration: '45分钟' },
              { title: '人工智能应用领域', duration: '60分钟' },
              { title: '机器学习基础概念', duration: '90分钟' }
            ]
          },
          {
            title: '第二周：机器学习基础',
            lessons: [
              { title: '监督学习算法', duration: '90分钟' },
              { title: '无监督学习算法', duration: '90分钟' },
              { title: '模型评估与优化', duration: '60分钟' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.course-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.course-header {
  background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
}

.course-header-content {
  max-width: 800px;
  margin: 0 auto;
}

.course-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.course-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.course-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.enroll-btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.enroll-btn:hover {
  transform: translateY(-3px);
}

.course-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}

.course-sections, .course-instructor {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section {
  margin-bottom: 2rem;
}

.section h3 {
  margin-bottom: 1rem;
  color: #333;
}

.section ul {
  list-style: none;
}

.section li {
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}

.lesson-duration {
  color: #666;
}

.instructor-info {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.instructor-info img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.instructor-details h3 {
  margin-bottom: 0.5rem;
}

.instructor-bio {
  margin-top: 1rem;
  color: #666;
}

.course-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.course-card h3 {
  margin-bottom: 1.5rem;
}

.course-card ul {
  list-style: none;
  margin-bottom: 2rem;
}

.course-card li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #666;
}

.course-price {
  text-align: center;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #007bff;
  display: block;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .course-content {
    grid-template-columns: 1fr;
  }

  .instructor-info {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style> 