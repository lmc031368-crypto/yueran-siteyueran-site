"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🔺 Thank you, ${formData.name || 'Dear'}!\nYour inquiry has been submitted successfully.\n提交成功！我们会尽快与您联系 🍃`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; background-color: #f7f9f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #333; }
        .hero-banner { width: 100%; max-width: 1100px; height: 380px; position: relative; margin: 40px auto 20px auto; border-radius: 32px; overflow: hidden; box-shadow: 0 20px 40px rgba(27, 67, 50, 0.08); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)); display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; text-align: center; z-index: 2; }
        .products-grid { display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; max-width: 1100px; margin: 30px auto; padding: 0 20px; }
        .product-card { background: #ffffff; border-radius: 24px; padding: 20px; width: 320px; box-sizing: border-box; box-shadow: 0 10px 25px rgba(0,0,0,0.03); cursor: pointer; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
        .product-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 20px 40px rgba(27, 67, 50, 0.12); }
        .image-container { width: 100%; height: 240px; position: relative; border-radius: 16px; overflow: hidden; background-color: #f0f2f0; margin-bottom: 16px; }
        .zoom-image { transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important; }
        .product-card:hover .zoom-image { transform: scale(1.08); }
        .bottom-section { max-width: 1100px; margin: 40px auto 80px auto; padding: 0 20px; display: flex; flex-wrap: wrap; gap: 30px; width: 100%; box-sizing: border-box; }
        .card-window { flex: 1; min-width: 320px; background: #ffffff; border-radius: 24px; padding: 30px; box-shadow: 0 10px 25px rgba(0,0,0,0.03); box-sizing: border-box; }
        .social-icons { display: flex; gap: 14px; margin-top: 20px; }
        .social-btn { padding: 10px 18px; border-radius: 50px; background: #f0f4f1; color: #2d6a4f; text-decoration: none; font-weight: 600; font-size: 13px; transition: all 0.2s; }
        .social-btn:hover { background: #2d6a4f; color: #ffffff; transform: translateY(-2px); }
        .form-group { margin-bottom: 16px; }
        .form-group label { display: block; margin-bottom: 6px; font-size: 13px; color: #2d6a4f; font-weight: 600; }
        .form-input { width: 100%; padding: 12px; border: 1px solid #e0e6e2; border-radius: 12px; background-color: #fbfcfb; font-size: 14px; box-sizing: border-box; transition: border 0.2s; }
        .form-input:focus { outline: none; border-color: #2d6a4f; background-color: #ffffff; }
      `}} />

      <main>
        <div className="hero-banner">
          <Image 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
            alt="Lin Ximian Biotechnology Banner"
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
            <a href="#inquiry-form-section" style={{ padding: '12px 32px', backgroundColor: '#2d6a4f', color: '#ffffff', textDecoration: 'none', borderhtmlRadius: '50px', fontWeight: '600', fontSize: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              Inquire Now / 立即咨询
            </a>
          </div>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="image-container">
              <Image src="https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=600&q=80" alt="Product 1" fill sizes="320px" style={{ objectFit: 'cover' }} className="zoom-image" />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>高级天然护肤</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              萃取深林核心植物精华，融合现代尖端生物科技，为肌肤注入全天然的修护力量。
            </p>
          </div>

          <div className="product-card">
            <div className="image-container">
              <Image src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80" alt="Product 2" fill sizes="320px" style={{ objectFit: 'cover' }} className="zoom-image" />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>科技宠物护理</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              专为萌宠研发的温和生态健康配方，无刺激、深层滋养，科技守护毛孩子快乐成长。
            </p>
          </div>

          <div className="product-card">
            <div className="image-container">
              <Image src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80" alt="Product 3" fill sizes="320px" style={{ objectFit: 'cover' }} className="zoom-image" />
            </div>
            <h3 style={{ color: '#1b4332', margin: '0 0 8px 0', fontSize: '18px' }}>尖端生态研发</h3>
            <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              拥有行业领先的纯净生物实验室，精益求精，为您定制最安全、最高效的技术方案。
            </p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="card-window">
            <h3 style={{ color: '#1b4332', margin: '0 0 12px 0', fontSize: '20px' }}>关注夕眠生态</h3>
            <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              在各个社交媒体平台上关注我们，获取关于绿色生物科技、纯素护肤配方的最新研发动态与限时惊喜。
            </p>
            <div className="social-icons">
              <a href="#" className="social-btn">微信公众号</a>
              <a href="#" className="social-btn">小红书</a>
              <a href="#" className="social-btn">Instagram</a>
            </div>
          </div>

          <div className="card-window" id="inquiry-form-section">
            <h3 style={{ color: '#1b4332', margin: '0 0 6px 0', fontSize: '20px' }}>商务意向登记</h3>
            <p style={{ color: '#888', fontSize: '13px', margin: '0 0 20px 0' }}>请留下您的联系方式，我们的团队会尽快与您取得联系。</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>您的姓名 / Name</label>
                <input type="text" name="name" required className="form-input" placeholder="例如：林先生/女士" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>电子邮箱 / Email Address</label>
                <input type="email" name="email" required className="form-input" placeholder="username@example.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>咨询留言 / Message</label>
                <textarea name="message" rows="3" required className="form-input" style={{ resize: 'none', fontFamily: 'inherit' }} placeholder="请简单描述您的代理、采购或研发定制需求..." value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#2d6a4f', color: '#ffffff', border: 'none', borderRadius: '14px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px', marginTop: '10px', boxShadow: '0 4px 12px rgba(45, 106, 79, 0.15)' }}>
                提交询盘 / Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

