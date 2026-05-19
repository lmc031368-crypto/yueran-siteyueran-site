"use client";

import React from 'react';
// 必须引入 Next.js 官方专用的图片组件，否则 Vercel 会强行报红叉拦截
import Image from 'next/image';

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🔺 Thank you! Your inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃");
    e.target.reset();
  };

  return (
    <>
      {/* 原生注入内联 CSS：无缝包含你最爱的卡片弹起和图片内敛放大特效 */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        /* 卡片基础样式与 hover 弹起放大 */
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

        /* 图片容器：用于包裹图片，限制超出范围以实现内敛放大效果 */
        .image-container {
          width: 100%;
          height: 180px;
          position: relative;
          border-radius: 16px;
          overflow: hidden; /* 关键：超出部分隐藏，才能形成内敛放大 */
          margin-bottom: 16px;
        }
        
        /* 图片本身的 hover 缩放特效 */
        .featured-image {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .product-card:hover .featured-image {
          transform: scale(1.1); /* 鼠标移入卡片时，图片在内部放大 10% */
        }
      `}} />

      {/* 网页主体布局 */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh', 
        backgroundColor: '#f4f7f5',
        fontFamily: 'sans-serif'
      }}>
        <div className="product-card">
          
          {/* 符合 Next.js 严格规范的图片特效区块 */}
          <div className="image-container">
            <Image 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
              alt="项目展示图片"
              fill
              sizes="320px"
              style={{ objectFit: 'cover' }}
              className="featured-image"
              priority
            />
          </div>

          <h2 style={{ color: '#1b4332', marginBottom: '12px', fontSize: '20px' }}>林夕眠的全栈项目</h2>
          <p style={{ color: '#666', textAlign: 'center', fontSize: '14px', lineHeight: '1.6' }}>
            动效已完美加载：鼠标悬停时卡片将**向上弹起**，同时上方图片将在内部**平滑放大**。
          </p>
          
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '20px' }}>
            <button type="submit" style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#2d6a4f',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
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
