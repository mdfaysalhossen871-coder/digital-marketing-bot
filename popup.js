const draft = document.getElementById('draft');
const msg = document.getElementById('msg');
chrome.storage.local.get(['draft'], data => { if (data.draft) draft.value = data.draft; });
draft.addEventListener('input', () => chrome.storage.local.set({draft: draft.value}));
document.getElementById('copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(draft.value); msg.textContent = 'কপি হয়েছে। প্রকাশের আগে গ্রুপের নিয়ম যাচাই করুন।'; }
  catch { msg.textContent = 'কপি করা যায়নি; টেক্সট নির্বাচন করে কপি করুন।'; }
});
