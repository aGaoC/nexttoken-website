const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// 解决方案配置
const solutions = {
  finance: {
    header: {
      title: '金融科技解决方案',
      subtitle: '为金融机构提供智能风控、智能投顾、智能客服等全方位解决方案',
      gradient: ['#1a237e', '#0d47a1']
    },
    risk: {
      title: '智能风控系统',
      subtitle: '为大型银行提供智能风控解决方案',
      gradient: ['#1565c0', '#1976d2']
    },
    investment: {
      title: '智能投顾平台',
      subtitle: '为证券公司提供智能投顾服务',
      gradient: ['#1976d2', '#2196f3']
    }
  },
  retail: {
    header: {
      title: '零售电商解决方案',
      subtitle: '助力零售企业实现智能化运营、个性化营销、智能供应链管理',
      gradient: ['#2e7d32', '#388e3c']
    },
    recommendation: {
      title: '智能推荐系统',
      subtitle: '为电商平台提供智能推荐服务',
      gradient: ['#388e3c', '#4caf50']
    },
    'supply-chain': {
      title: '智能供应链管理',
      subtitle: '为连锁超市提供供应链解决方案',
      gradient: ['#4caf50', '#66bb6a']
    }
  },
  manufacturing: {
    header: {
      title: '智能制造解决方案',
      subtitle: '为制造业提供智能质检、预测性维护、生产优化等解决方案',
      gradient: ['#f57c00', '#ff9800']
    },
    quality: {
      title: '智能质检系统',
      subtitle: '为电子制造企业提供质检解决方案',
      gradient: ['#ff9800', '#ffa726']
    },
    maintenance: {
      title: '预测性维护系统',
      subtitle: '为机械制造企业提供维护解决方案',
      gradient: ['#ffa726', '#ffb74d']
    }
  },
  healthcare: {
    header: {
      title: '医疗健康解决方案',
      subtitle: '提供智能诊断、医疗影像分析、智能随访等医疗AI解决方案',
      gradient: ['#c2185b', '#d81b60']
    },
    diagnosis: {
      title: '智能诊断系统',
      subtitle: '为医院提供智能诊断解决方案',
      gradient: ['#d81b60', '#e91e63']
    },
    imaging: {
      title: '医疗影像分析',
      subtitle: '为影像科提供智能分析解决方案',
      gradient: ['#e91e63', '#f06292']
    }
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

// 生成HTML内容
const generateHTML = (config) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
          }
          .container {
            text-align: center;
            color: white;
            padding: 20px;
            border-radius: 10px;
            background: linear-gradient(135deg, ${config.gradient[0]} 0%, ${config.gradient[1]} 100%);
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
          p {
            font-size: 24px;
            margin: 0;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${config.title}</h1>
          <p>${config.subtitle}</p>
        </div>
      </body>
    </html>
  `;
};

// 生成图片
const generateImage = async (browser, html, outputPath) => {
  const page = await browser.newPage();
  await page.setContent(html);
  await page.screenshot({
    path: outputPath,
    type: 'jpeg',
    quality: 80
  });
  await page.close();
  console.log(`Generated: ${outputPath}`);
};

// 生成所有解决方案图片
const generateSolutionImages = async (browser) => {
  for (const [solution, types] of Object.entries(solutions)) {
    for (const [type, config] of Object.entries(types)) {
      const html = generateHTML(config);
      const outputPath = path.join('public', 'images', 'solutions', `${solution}-${type}.jpg`);
      await generateImage(browser, html, outputPath);
    }
  }
};

// 生成公司logo
const generateCompanyLogos = async (browser) => {
  const logos = [
    { name: 'bank', color: '#1a237e' },
    { name: 'securities', color: '#0d47a1' },
    { name: 'retail', color: '#2e7d32' },
    { name: 'supermarket', color: '#388e3c' },
    { name: 'electronics', color: '#f57c00' },
    { name: 'machinery', color: '#ff9800' },
    { name: 'hospital', color: '#c2185b' },
    { name: 'imaging', color: '#d81b60' }
  ];

  for (const logo of logos) {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              width: 200px;
              height: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: Arial, sans-serif;
            }
            .logo {
              width: 200px;
              height: 200px;
              background: ${logo.color};
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 48px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="logo">${logo.name.charAt(0).toUpperCase()}</div>
        </body>
      </html>
    `;
    const outputPath = path.join('public', 'images', 'logos', `${logo.name}-logo.png`);
    await generateImage(browser, html, outputPath);
  }
};

// 主函数
const main = async () => {
  try {
    createDirectories();
    const browser = await puppeteer.launch();
    await generateSolutionImages(browser);
    await generateCompanyLogos(browser);
    await browser.close();
    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
};

main(); 