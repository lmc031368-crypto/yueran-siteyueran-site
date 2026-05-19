"use client";

import React from 'react';
// 引入 Next.js 专用的图片组件（防止 Vercel 编译拦截）
import Image from 'next/image';

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔺 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  return (
    <>
      {/* 1. 安全注入你原版设计的所有 CSS 动效（卡片悬浮弹起 + 图片内部平滑放大） */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          padding: 0;
          background-color: #f4f7f5;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .grid-layout {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          justify-content: center;
          width: 100%;
          margin-top: 30px;
        }
        /* 你最核心的卡片弹起动效 */
        .product-card {
          background-color: #ffffff;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 12px 30px rgba(27, 67, 50, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          width: 320px;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(27, 67, 50, 0.12);
        }
        /* 图片剪裁容器（实现内敛放大效果的关键） */
        .image-container {
          width: 100%;
          height: 200px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
        }
        /* 图片平滑缩放动效 */
        .featured-image {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .product-card:hover .featured-image {
          transform: scale(1.1);
        }
      `}} />

      {/* 2. 还原你原本完整的精美多卡片展示页面 */}
      <div className="main-container">
        <h1 style={{ color: '#1b4332', marginBottom: '10px' }}>林夕眠的全栈空间</h1>
        <p style={{ color: '#666', fontSize: '16px' }}>探索前端动态视觉与后端的无限可能</p>

        {/* 还原多卡片视图网格 */}
        <div className="grid-layout">
          
          {/* 卡片 1 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
                alt="项目视角 1"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="featured-image"
                priority
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 10px 0' }}>动态交互组件</h3>
            <p style={{ color: '#666', textAlign: 'center', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              移入时卡片轻微拔高，内部图片向外扩张，提供极佳的微交互反馈。
            </p>
          </div>

          {/* 卡片 2 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
                alt="项目视角 2"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="featured-image"
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 10px 0' }}>全栈接口对接</h3>
            <p style={{ color: '#666', textAlign: 'center', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              集成 Node.js 后端路由，支持安全跨域的数据提交与实时状态响应。
            </p>
          </div>

          {/* 卡片 3 */}
          <div className="product-card">
            <div className="image-container">
              <Image 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" 
                alt="项目视角 3"
                fill
                sizes="320px"
                style={{ objectFit: 'cover' }}
                className="featured-image"
              />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 10px 0' }}>云端自动化部署</h3>
            <p style={{ color: '#666', textAlign: 'center', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              联动 GitHub 仓库与 Vercel 平台，实现敏捷开发下的全自动化打包。
            </p>
          </div>

        </div>

        {/* 底部表单测试区块 */}
        <div style={{ marginTop: '50px', width: '100%', maxWidth: '320px' }}>
          <form onSubmit={handleSubmit}>
            <button type="submit" style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#2d6a4f',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(45, 106, 79, 0.2)',
              transition: 'background 0.2s'
            }}>
              点击测试提交接口
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
