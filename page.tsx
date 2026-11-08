'use client';
import { useState } from 'react';
type Product={name:string;category:string;price:string};
type Group={name:string;category:string;status:string};
export default function Home(){
 const [products,setProducts]=useState<Product[]>([{name:'Logic Three 360 Pro',category:'Software',price:'৳ —'}]);
 const [groups,setGroups]=useState<Group[]>([{name:'Software Deals BD',category:'Software',status:'অনুমোদিত তালিকা'},{name:'Digital Products BD',category:'Digital Product',status:'যাচাই প্রয়োজন'}]);
 const [pname,setPname]=useState(''); const [pcat,setPcat]=useState('Digital Product'); const [price,setPrice]=useState('');
 const [gname,setGname]=useState(''); const [gcat,setGcat]=useState('Software');
 const [notice,setNotice]=useState('');
 function addProduct(){if(!pname.trim())return;setProducts([...products,{name:pname,category:pcat,price:price||'নির্ধারিত নয়'}]);setPname('');setNotice('প্রোডাক্ট যোগ হয়েছে।')}
 function addGroup(){if(!gname.trim())return;setGroups([...groups,{name:gname,category:gcat,status:'যাচাই প্রয়োজন'}]);setGname('');setNotice('গ্রুপ তালিকায় যোগ হয়েছে।')}
 return <main>
  <header className="top"><div><h1>Digital Marketing Bot</h1><div className="muted">আপনার AI ডিজিটাল প্রোডাক্ট মার্কেটিং কন্ট্রোল প্যানেল</div></div><span className="pill">বাংলা • Cloud-ready MVP</span></header>
  <section className="grid">
   <div className="card"><div className="muted">মোট প্রোডাক্ট</div><div className="num">{products.length}</div></div>
   <div className="card"><div className="muted">গ্রুপ তালিকা</div><div className="num">{groups.length}</div></div>
   <div className="card"><div className="muted">পোস্ট কিউ</div><div className="num">0</div></div>
   <div className="card"><div className="muted">Pending</div><div className="num">0</div></div>
  </section>
  <section className="section cols">
   <div className="card"><h2>প্রোডাক্ট ম্যানেজার</h2><div className="formgrid">
    <div><label>প্রোডাক্টের নাম</label><input value={pname} onChange={e=>setPname(e.target.value)} placeholder="যেমন: Premium Software"/></div>
    <div><label>ক্যাটাগরি</label><select value={pcat} onChange={e=>setPcat(e.target.value)}><option>Digital Product</option><option>Software</option><option>Extension</option><option>Course</option></select></div>
   </div><label>দাম</label><input value={price} onChange={e=>setPrice(e.target.value)} placeholder="যেমন: ৳৫০০"/><button className="btn" onClick={addProduct}>প্রোডাক্ট যোগ করুন</button>
   <div className="section">{products.map((p,i)=><div className="row" key={i}><div><b>{p.name}</b><div className="muted">{p.category} • {p.price}</div></div><span className="tag ok">সক্রিয়</span></div>)}</div></div>
   <div className="card"><h2>গ্রুপ ম্যানেজার</h2><label>গ্রুপের নাম / লিংক</label><input value={gname} onChange={e=>setGname(e.target.value)} placeholder="গ্রুপের নাম বা URL"/><label>ক্যাটাগরি</label><select value={gcat} onChange={e=>setGcat(e.target.value)}><option>Software</option><option>Digital Product</option><option>Freelancing</option><option>Online Business</option></select><button className="btn" onClick={addGroup}>গ্রুপ যোগ করুন</button>
   <div className="section">{groups.map((g,i)=><div className="row" key={i}><div><b>{g.name}</b><div className="muted">{g.category}</div></div><span className="tag">{g.status}</span></div>)}</div></div>
  </section>
  <section className="section cols">
   <div className="card"><h2>AI পোস্ট স্টুডিও</h2><p className="muted">প্রোডাক্ট ও গ্রুপ ক্যাটাগরি বেছে পোস্টের খসড়া তৈরি করুন। AI API যুক্ত হলে এখানে ক্যাপশন ও ছবিও তৈরি হবে।</p><label>প্রোডাক্ট</label><select>{products.map((p,i)=><option key={i}>{p.name}</option>)}</select><label>পোস্টের ভাষা</label><select><option>বাংলা</option></select><textarea rows={4} placeholder="AI তৈরি করা পোস্ট এখানে দেখাবে..."/><button className="btn secondary" onClick={()=>setNotice('AI API যুক্ত হলে পোস্ট তৈরি হবে।')}>পোস্টের খসড়া তৈরি</button></div>
   <div className="card"><h2>Pending Approval Monitor</h2><p className="muted">Pending পোস্ট শনাক্ত হলে গ্রুপ, সময় ও স্ট্যাটাস এখানে দেখাবে। পুনরায় পোস্ট বা moderation bypass করা হবে না।</p><div className="row"><span>Pending পোস্ট</span><span className="tag">0</span></div><div className="row"><span>অনুমোদিত</span><span className="tag ok">0</span></div><div className="row"><span>প্রত্যাখ্যাত</span><span className="tag">0</span></div></div>
  </section>
  {notice&&<p className="muted" role="status">{notice}</p>}
  <p className="muted section">MVP demo: তথ্য এখন ব্রাউজারের state-এ থাকে; production database এখনো সংযুক্ত নয়।</p>
 </main>
}
