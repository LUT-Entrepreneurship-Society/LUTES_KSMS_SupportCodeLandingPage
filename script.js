(function(){
  const SUPPORT_CODE = "SP10076";
  const PLUSSA_INFO_URL = "https://plussa.fi/k-plussa/kannata-ja-kerryta";
  const PLUSSA_SPONSOR_URL = "https://plussa.fi/sponsorship-targets";
  const AUTO_LINK = "https://login.kesko.fi/login?state=hKFo2SB0REpHcWx0czR6X1hOZ1FiYW41UVR3bmtKRkdZSWVweaFupWxvZ2luo3RpZNkgTnZtRTJraW5Yckd3TzlBVlNaNFpSY3NZZUdJT0NIQmujY2lk2SBBZ0NJTjcwMngzeWZOTEtoemNRdVJJenpFTHZzSGRCYw&client=AgCIN702x3yfNLKhzcQuRIzzELvsHdBc&protocol=oauth2&scope=openid+profile+email+legacy-ids+pseudo-ids+loyalty-api%3Aread&response_type=code&redirect_uri=https%3A%2F%2Fplussa.fi%2Fbackend%2Fcallback&audience=https%3A%2F%2Fapi.login.kesko.fi&lang=en&nonce=QVGS1R8TTnAn3ZN8MaKhqQIASvy4CJMTzOp5Twbpwlw&code_challenge_method=S256&code_challenge=KtEk_gUfx8DbQy53vyb9RrvU3c3F9oX45D-oUcK6mXk";

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

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
    // Open auto link then fallback to sponsorship page (helps if params are ignored)
    window.open(AUTO_LINK, '_blank', 'noopener');
    setTimeout(()=>window.open(PLUSSA_SPONSOR_URL, '_blank', 'noopener'), 350);
    // Pre-copy code to clipboard for convenience
    navigator.clipboard && navigator.clipboard.writeText(SUPPORT_CODE).catch(()=>{});
    hint.textContent = "1) Log in if asked  →  2) Click 'Become a supporter'  →  3) Paste code SP10076 (already copied)";
  });
})();

