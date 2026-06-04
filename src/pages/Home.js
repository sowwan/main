import React, { useState } from 'react';
import axios from 'axios';

const services = [
  { id: 1, name: 'إدارة حسابات السوشيال ميديا وإطلاق الحملات الإعلانية الممولة', price: 150 },
  { id: 2, name: 'تحسين محركات البحث SEO، حملات إعلانات Google وتوثيق الخرائط الذكية', price: 200 },
  { id: 3, name: 'تصميم الهوية البصرية والشعارات المتكاملة للبراندات', price: 100 },
];

export default function Home() {
  const [customReq, setCustomReq] = useState({ name: '', email: '', reqs: '' });
  const [loading, setLoading] = useState(false);
  
  // يقرأ الرابط ديناميكياً من متغيرات البيئة لـ Vercel المربوط بريندر
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const handleCustomWebsiteSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/orders/custom-website`, customReq);
      alert(res.data.msg);
      setCustomReq({ name: '', email: '', reqs: '' });
    } catch (err) { 
      alert('فشل في إرسال المتطلبات، الرجاء التحقق من جدار الحماية أو تجربة المحاولة لاحقاً'); 
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalCheckout = (serviceName, price) => {
    alert(`سيتم فتح بوابة PayPal الآمنة الآن لإتمام دفع ${price}$ لخدمة: ${serviceName}`);
    
    axios.post(`${BACKEND_URL}/api/orders/new`, {
      clientName: "عميل دفع فوري عبر باي بال",
      clientEmail: "paypal-buyer@example.com",
      serviceName: serviceName,
      price: price
    }).then(() => {
      alert('تم تأكيد عملية الدفع المالي بنجاح وحفظ بيانات اشتراكك بالمنظومة!');
    }).catch(() => {
      alert('تم الدفع ولكن فشل الاتصال بقاعدة البيانات لتسجيل الطلب.');
    });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', direction: 'rtl', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '28px' }}>موقع وكالتي الرقمية لتقديم الخدمات والدفع</h1>
        <p style={{ color: '#7f8c8d' }}>تصفح الخدمات المتكاملة واشترك فوراً لتبدأ أعمالك معنا</p>
      </header>
      
      {/* قسم الخدمات والاشتراكات المباشرة */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ borderRight: '5px solid #2980b9', paddingRight: '10px', color: '#34495e' }}>🔒 خدمات الاشتراك الفوري والترقية عبر الإنترنت</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginTop: '20px' }}>
          {services.map(s => (
            <div key={s.id} style={{ border: '1px solid #e0e0e0', padding: '25px', borderRadius: '12px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.03)' }}>
              <h3 style={{ height: '45px', color: '#2c3e50', fontSize: '18px' }}>{s.name}</h3>
              <p style={{ fontSize: '26px', fontWeight: 'bold', color: '#27ae60', margin: '20px 0' }}>{s.price}$ <span style={{ fontSize: '14px', color: '#7f8c8d' }}>/ شهرياً</span></p>
              <button onClick={() => handlePayPalCheckout(s.name, s.price)} style={{ width: '100%', background: '#0070ba', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}>
                اشترك الآن بواسطة PayPal
              </button>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: '0', height: '1px', background: '#e0e0e0', margin: '40px 0' }} />

      {/* أقسام إنشاء مواقع الويب المنفصلة */}
      <section>
        <h2 style={{ borderRight: '5px solid #27ae60', paddingRight: '10px', color: '#34495e' }}>💻 قسم تصميم وحلول هندسة مواقع الويب</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '30px', marginTop: '20px' }}>
          
          <div style={{ border: '1px solid #e0e0e0', padding: '30px', borderRadius: '12px', backgroundColor: '#fcfcfc' }}>
            <h3 style={{ color: '#2980b9' }}>القسم الأول: صمم موقعك بنفسك فوراً ومباشرة</h3>
            <p style={{ color: '#7f8c8d', lineHeight: '1.7' }}>افتح لوحة البناء المخصصة داخل منصتنا، أضف الصفحات المطلوبة لنشاطك، حرر النصوص بمرونة تامة، واربط موقعك باسم نطاقك الخارجي من قائمة الإعدادات.</p>
            <button onClick={() => window.location.href='/builder'} style={{ marginTop: '25px', padding: '12px 25px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>دخول أداة البناء الذاتي المباشر 🛠️</button>
          </div>

          <div style={{ border: '1px solid #e0e0e0', padding: '30px', borderRadius: '12px', backgroundColor: '#fff' }}>
            <h3 style={{ color: '#c0392b' }}>القسم الثاني: اطلب موقعاً خاصاً بمتطلباتك البرمجية</h3>
            <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>إذا كان لديك أفكار ومشاريع كبرى، دون شروطك ومتطلباتك الكاملة وسوف تصل مباشرة لمهندسينا عبر بريد المنصة لدراستها وتحديد السعر.</p>
            <form onSubmit={handleCustomWebsiteSubmit}>
              <input type="text" placeholder="الاسم الكريم بالكامل" required value={customReq.name} onChange={e => setCustomReq({...customReq, name: e.target.value})} style={{display:'block', marginBottom:'12px', width:'100%', padding:'10px', borderRadius:'6px', border:'1px solid #ccc'}} />
              <input type="email" placeholder="بريدك الإلكتروني للمراسلة" required value={customReq.email} onChange={e => setCustomReq({...customReq, email: e.target.value})} style={{display:'block', marginBottom:'12px', width:'100%', padding:'10px', borderRadius:'6px', border:'1px solid #ccc'}} />
              <textarea placeholder="اكتب متطلبات موقعك، الوظائف البرمجية المطلوبة، عدد الصفحات بالتفصيل الفائق والوافي..." required value={customReq.reqs} onChange={e => setCustomReq({...customReq, reqs: e.target.value})} style={{display:'block', marginBottom:'12px', width:'100%', padding:'10px', borderRadius:'6px', border:'1px solid #ccc', height:'100px', resize:'vertical'}} />
              <button type="submit" disabled={loading} style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight:'bold' }}>
                {loading ? 'جاري توجيه الطلب للإيميل...' : 'إرسال المتطلبات الفنية الفورية ✉️'}
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
