const checkBtn = document.getElementById('checkBtn');
const statusEl = document.getElementById('status');

function runHealthCheck() {
  const checks = [
    { name: 'HTML loaded', pass: !!document.querySelector('main') },
    { name: 'Button present', pass: !!checkBtn },
    { name: 'Status element present', pass: !!statusEl },
  ];

  const failed = checks.filter((c) => !c.pass);
  if (failed.length === 0) {
    statusEl.textContent = 'All basic checks passed ✅';
    console.log('Health check passed', checks);
  } else {
    statusEl.textContent = `Checks failed: ${failed.map((f) => f.name).join(', ')}`;
    console.error('Health check failed', checks);
  }
}

checkBtn?.addEventListener('click', runHealthCheck);
