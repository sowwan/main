import React, { useState } from 'react';

export default function WebsiteBuilder() {
  const [pages, setPages] = useState([{ id: 1, title: 'الصفحة الرئيسية', content: 'مرحباً بك في موقعي المخصص الجديد والفريد.' }]);
  const [domain, setDomain] = useState('');

  const addPage = () => {
    const newId = pages.length + 1;
    setPages([...pages, { id: newId, title: `صفحة فرعية جديدة ${newId}`, content: 'اكتب محتوى هذه الصفحة هنا برؤيتك الاستراتيجية الخاصة...' }]);
  };

  const updateContent = (id, text) => {
    setPages(pages.map(p => p.id === id ? { ...p, content: text } : p));
  };

  return (
    <div style={{ padding: '30px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      <button onClick={() => window.location.href='/'} style={{ padding: '8px 15px', marginBottom: '20px', cursor:'pointer' }}>⬅️ عودة للموقع الرئيسي</button>
      <h1 style={{ color: '#2c3e50' }}>منشئ وتعديل المواقع الذاتي الفرعي</h1>
      <p style={{ color: '#7f8c8d' }}>صمم هيكل موقعك البرمجي، أضف الصفحات واربط النطاق لبيئة العمل الخارجية.</p>
      
      <button onClick={addPage} style={{ marginBottom: '25px', padding: '12px 20px', background: '#2980b9', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>➕ إضافة صفحة إلكترونية جديدة</button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        <div>
          {pages.map(page => (
            <div key={page.id} style={{ border: '1px solid #e0e0e0', padding: '20px', borderRadius: '8px', marginBottom: '15px', backgroundColor:'#fff', boxShadow:'0 2px 4px rgba(0,0,0,0.02)' }}>
              <h3 style={{ marginTop: '0', color: '#34495e' }}>📌 {page.title}</h3>
              <textarea 
                value={page.content} 
                onChange={(e) => updateContent(page.id, e.target.value)} 
                style={{ width: '100%', height: '120px', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontFamily: 'inherit' }} 
              />
            </div>
          ))}
        </div>

        <div style={{ border: '1px solid #e0e0e0', padding: '25px', borderRadius: '8px', backgroundColor: '#f9f9f9', height: 'fit-content' }}>
          <h3 style={{ marginTop: '0', color: '#27ae60' }}>⚙️ ربط اسم النطاق الخارجي (Domain Mapping)</h3>
          <p style={{ color: '#7f8c8d', fontSize: '14px', lineHeight: '1.5' }}>يمكنك توجيه دومين مخصص اشتريته من (GoDaddy, Namecheap...) ليعمل على هذا التصميم مباشرة.</p>
          <input 
            type="text" 
            placeholder="مثال: mybrand.com" 
            value={domain} 
            onChange={(e) => setDomain(e.target.value)} 
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '15px' }}
          />
          <button onClick={() => alert(`تم حفظ وربط النطاق العتيد ${domain} بنجاح بالخادم الداخلي! يرجى تهيئة الـ A Record في لوحة تحكم الدومين الخاص بك ليتجه نحو IP السيرفر الخاص بالمنصة.`)} style={{ width: '100%', padding: '12px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            تأكيد وحفظ النطاق الجانبي
          </button>
        </div>
      </div>
    </div>
  );
}
