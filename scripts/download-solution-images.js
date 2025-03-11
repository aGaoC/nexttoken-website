const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');

// 图片配置
const imageConfig = {
  solutions: {
    finance: {
      header: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
      risk: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
      investment: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop'
    },
    retail: {
      header: 'https://images.unsplash.com/photo-1556742393-75aa5a16b70f?w=1200&h=600&fit=crop',
      recommendation: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      'supply-chain': 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=600&fit=crop'
    },
    manufacturing: {
      header: 'https://images.unsplash.com/photo-1581091226825-c6c3b9a9d5c5?w=1200&h=600&fit=crop',
      quality: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop',
      maintenance: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop'
    },
    healthcare: {
      header: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
      diagnosis: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop',
      imaging: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop'
    }
  },
  logos: {
    bank: 'https://images.unsplash.com/photo-1563986768609-322da59675a5?w=200&h=200&fit=crop',
    securities: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=200&h=200&fit=crop',
    retail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop',
    supermarket: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=200&fit=crop',
    electronics: 'https://images.unsplash.com/photo-1581091226825-c6c3b9a9d5c5?w=200&h=200&fit=crop',
    machinery: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200&h=200&fit=crop',
    hospital: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop',
    imaging: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop'
  }
};

// 创建目录
const createDirectories = () => {
  const dirs = [
    'public/images/solutions',
    'public/images/logos'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// 下载并处理图片
const downloadAndProcessImage = async (url, outputPath, width, height) => {
  try {
    // 下载图片
    const response = await axios({
      url,
      responseType: 'arraybuffer'
    });

    // 处理图片
    await sharp(response.data)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 80 })
      .toFile(outputPath);

    console.log(`Successfully processed: ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${url}:`, error.message);
  }
};

// 下载所有解决方案图片
const downloadSolutionImages = async () => {
  for (const [solution, types] of Object.entries(imageConfig.solutions)) {
    for (const [type, url] of Object.entries(types)) {
      const outputPath = path.join('public', 'images', 'solutions', `${solution}-${type}.jpg`);
      await downloadAndProcessImage(url, outputPath, 1200, 600);
    }
  }
};

// 下载所有logo图片
const downloadLogoImages = async () => {
  for (const [name, url] of Object.entries(imageConfig.logos)) {
    const outputPath = path.join('public', 'images', 'logos', `${name}-logo.png`);
    await downloadAndProcessImage(url, outputPath, 200, 200);
  }
};

// 执行下载
const main = async () => {
  try {
    createDirectories();
    await downloadSolutionImages();
    await downloadLogoImages();
    console.log('All images downloaded and processed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};

main(); 