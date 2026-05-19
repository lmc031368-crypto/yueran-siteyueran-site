"use client";

import React from 'react';
// 引入 Next.js 专用图片组件，彻底解决 Vercel 的 <img> 编译拦截
import Image from 'next/image';

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔺 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  return (
    <>
      {/* 1. 安全注入原版全套视觉动效（卡片悬浮弹起、图片内敛放大、按钮 hover） */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          background-color: #f7f9f6;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #333;
        }
        
        /* 顶部大横幅容器 */
        .hero-banner {
          width: 100%;
          max-width: 1100px;
          height: 380px;
          position: relative;
          margin: 40px auto 20px auto;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.08);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          text-align: center;
          z-index: 2;
        }

        /* 核心产品网格布局 */
        .products-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          max-width: 1100px;
          margin: 30px auto;
          padding: 0 20px;
        }

        /* 完美的卡片 Hover 向上弹起放大特效 */
        .product-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 20px;
          width: 320px;
          box-sizing: border-box;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.12);
        }

        /* 图片容器与内敛放大特效 */
        .image-container {
          width: 100%;
          height: 240px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background-color: #f0f2f0;
          margin-bottom: 16px;
        }
        .zoom-image {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .product-card:hover .zoom-image {
          transform: scale(1.08);
        }

        /* 社交媒体小窗口与联系区块 */
        .social-contact-section {
          max-width: 1100px;
          margin: 40px auto 60px auto;
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
        }
        .social-window {
          flex: 1;
          min-width: 300px;
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
        }
        .social-icons {
          display: flex;
          gap: 16px;
          margin-top: 15px;
        }
        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f0f4f1;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #2d6a4f;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: #2d6a4f;
          color: #ffffff;
          transform: scale(1.1);
        }
      `}} />

      {/* 2. 页面主体：完全复刻你的 Lin Ximian 生物科技官网 */}
      <main>
        
        {/* 顶部绿色森林大横幅 */}
        <div className="hero-banner">
          <Image 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
            alt="Natural Forest Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay">
            <h1 style={{ fontSize: '36px', color: '#ffffff', margin: '0 0 12px 0', fontWeight: '700', letterSpacing: '1px' }}>
              Lin Ximian Biotechnology Co., Ltd.
            </h1>
            <p style={{ fontSize: '18px', color: '#e2f0e7', margin: '0 0 24px 0', letterSpacing: '0.5px' }}>
              Natural Skincare & Advanced Technology Solutions
            </p>
            <a href="#contact" style={{
              padding: '12px 32px',
              backgroundColor: '#2d6a4f',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1b4332'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2d6a4f'}
            >
              Inquire Now / 立即咨询
            </a>
          </div>
        </div>

        {/* 产品卡片展示网格（包含护肤品、宠物等精美图片） */}
        <div className="products-grid">
          
          {/* 产品卡片 1：高端自然护肤系列 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80" 
                alt="Natural Skincare"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="zoom-image"
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>高级天然护肤</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              萃取深林核心植物精华，融合现代尖端生物科技，为肌肤注入全天然的修护力量。
            </p>
          </div>

          {/* 产品卡片 2：科学宠物护理系列 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80" 
                alt="Pet Tech Solutions"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="zoom-image"
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>科技宠物护理</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              专为萌宠研发的温和生态健康配方，无刺激、深层滋养，科技守护毛孩子快乐成长。
            </p>
          </div>

          {/* 产品卡片 3：前沿生物技术研发 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80" 
                alt="Advanced Technology"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="zoom-image"
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>尖端生态研发</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              拥有行业领先的纯净生物实验室，精益求精，为您定制最安全、最高效的技术方案。
            </p>
          </div>

        </div>

        {/* 底部功能区：社交媒体小窗口 + 接口提交表单 */}
        <div className="social-contact-section" id="contact">
          
          {/* 社交媒体小窗口组件 */}
          <div className="social-window">
            <h3 style={{ color: '#1b4332', margin: '0 0 10px 0', fontSize: '18px' }}>关注夕眠生态</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              在社交媒体上获取我们最新的生物科技研发进展与限时优惠资讯：
            </p>
            <div className="social-icons">
              <a href="#" className="social-btn" title="WeChat">微信</a>
              <a href="#" className="social-btn" title="Xiaohongshu">小红书</a>
              <a href="#" className="social-btn" title="Instagram">Ins</a>
              <a href="#" className="social-btn" title="LinkedIn">领英</a>
            </div>
          </div>

          {/* 测试提交接口表单 */}
          <div className="social-window" style={{ minWidth: '320px' }}>
            <h3 style={{ color: '#1b4332', margin: '0 0 15px 0', fontSize: '18px' }}>商务意向咨询</h3>
            <form onSubmit={handleSubmit}>
              <button type="submit" style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#2d6a4f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(45, 106, 79, 0.15)',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1b4332'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2d6a4f'}
              >
                点击测试提交接口
              </button>
            </form>
          </div>

        </div>

      </main>
    </>
  );
}
