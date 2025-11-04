(function(){
  const SUPPORT_CODE = "SP10076";
  const PLUSSA_INFO_URL = "https://plussa.fi/k-plussa/kannata-ja-kerryta";
  const PLUSSA_SPONSOR_URL = "https://plussa.fi/sponsorship-targets";
  const AUTO_LINK = PLUSSA_INFO_URL + "?code=" + encodeURIComponent(SUPPORT_CODE); // may or may not be honored

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Click counter (internal tracking - stored in localStorage)
  const COUNTER_KEY = 'lutes_supporter_clicks';
  
  function getClickCount() {
    const count = localStorage.getItem(COUNTER_KEY);
    return count ? parseInt(count, 10) : 0;
  }
  
  function incrementCounter() {
    const currentCount = getClickCount();
    const newCount = currentCount + 1;
    localStorage.setItem(COUNTER_KEY, newCount.toString());
    return newCount;
  }

  // Copy
  const hint = document.getElementById('hint');
  const copyBtn = document.getElementById('copy');
  copyBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(SUPPORT_CODE);
      copyBtn.textContent = '✅ Copied: ' + SUPPORT_CODE;
      hint.textContent = 'Code copied! Paste it to the field on Plussa page.';
      setTimeout(()=>{copyBtn.textContent = 'Copy code: ' + SUPPORT_CODE;}, 2200);
    }catch(e){
      hint.textContent = "Couldn't access clipboard. Long‑press the code to copy.";
    }
  });

  // CTA
  document.getElementById('cta').addEventListener('click', () => {
    // Increment click counter
    incrementCounter();
    
    // Open auto link then fallback to sponsorship page (helps if params are ignored)
    window.open(AUTO_LINK, '_blank', 'noopener');
    setTimeout(()=>window.open(PLUSSA_SPONSOR_URL, '_blank', 'noopener'), 350);
    // Pre-copy code to clipboard for convenience
    navigator.clipboard && navigator.clipboard.writeText(SUPPORT_CODE).catch(()=>{});
    hint.textContent = "1) Log in if asked  →  2) Click 'Become a supporter'  →  3) Paste code SP10076 (already copied)";
  });
})();

