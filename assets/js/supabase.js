const SUPABASE_URL = 'https://kqaampgsnpqxsnzdazxo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxYWFtcGdzbnBxeHNuemRhenhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU0OTcxMDQsImV4cCI6MjEwMTA3MzEwNH0.HjFwScV2pmTFtvM57ZnO7Ra9BPWcSDTO0qO04lRTpvo';

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

async function handleViews() {
  const viewCountEl = document.getElementById('view-count');

  if (!viewCountEl) {
    return;
  }

  if (!supabaseClient || !SUPABASE_KEY || SUPABASE_KEY === 'YOUR_SUPABASE_ANON_KEY') {
    viewCountEl.textContent = '0';
    return;
  }

  try {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (!isLocalhost) {
      await supabaseClient.rpc('increment_page_view', { page_id: 'home_page' });
    }

    const { data, error } = await supabaseClient
      .from('page_views')
      .select('views')
      .eq('id', 'home_page')
      .limit(1);

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      viewCountEl.textContent = String(data[0].views ?? 0);
    } else {
      viewCountEl.textContent = '0';
    }
  } catch (error) {
    console.error('Failed to load page view count:', error);
    viewCountEl.textContent = '0';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', handleViews);
} else {
  handleViews();
}