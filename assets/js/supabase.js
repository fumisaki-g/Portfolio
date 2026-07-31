const SUPABASE_URL = 'https://kqaampgsnpqxsnzdazxo.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYWFtcGdzbnBxeHNuemRhenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0OTcxMDQsImV4cCI6MjEwMTA3MzEwNH0.HjFwScV2pmTFtvM57ZnO7Ra9BPWcSDTO0qO04lRTpvo';
// 2. เปลี่ยนชื่อตัวแปรรับค่าเป็น supabaseClient (ห้ามใช้ชื่อ supabase เฉยๆ)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ❌ ของเดิมที่คุณอาจจะใช้อยู่ (อันนี้ทำให้ขึ้น 406):
// .eq('id', 'home_page').single();

// ✅ ให้เปลี่ยนเป็นแบบนี้ครับ (ใช้ limit และ [0]):
async function handleViews() {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (!isLocalhost) {
    await supabaseClient.rpc('increment_page_view', { page_id: 'home_page' });
  }

  // ดึงข้อมูลแบบ array
  const { data, error } = await supabaseClient
    .from('page_views')
    .select('views')
    .eq('id', 'home_page');

  // เช็กว่ามีข้อมูลส่งกลับมาไหม แล้วดึงตัวแรก ([0]) มาใช้
  if (data && data.length > 0) {
    const viewCountEl = document.getElementById('view-count');
    if (viewCountEl) {
      viewCountEl.innerText = data[0].views;
    }
  } else {
    console.log("ยังไม่มีข้อมูลแถว home_page หรือดึงไม่ได้", error);
  }
}

handleViews();