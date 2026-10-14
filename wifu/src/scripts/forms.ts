// Progressive enhancement for forms marked with [data-form].
// Without JS the form posts normally (Netlify/Formspree), opens the email app (mailto) or goes to the thank-you page.
// With JS it is sent in the background and the [data-success] block is shown in place.
function encode(data: FormData) {
  return new URLSearchParams(data as unknown as Record<string, string>).toString();
}

for (const form of document.querySelectorAll<HTMLFormElement>('form[data-form]')) {
  const root = form.closest('[data-form-root]') ?? form.parentElement!;
  const success = root.querySelector<HTMLElement>('[data-success]');
  const error = root.querySelector<HTMLElement>('[data-error]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const provider = form.dataset.provider;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    error?.classList.add('hidden');
    const label = button?.textContent;
    if (button) { button.disabled = true; button.textContent = button.dataset.sending ?? label ?? ''; }
    const data = new FormData(form);
    try {
      if (provider === 'netlify') {
        const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode(data) });
        if (!res.ok) throw new Error(String(res.status));
      } else if (provider === 'formspree' && form.action) {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
      } else if (provider === 'mailto') {
        const get = (k: string) => String(data.get(k) ?? '').trim();
        const subject = form.dataset.subject ?? 'Wifu';
        const body = `${get('message')}\n\n${get('name')}\n${get('email')}`;
        window.location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      // provider "none": nothing is sent, we just show the thank-you state.
      root.dispatchEvent(new CustomEvent('form:success', { detail: data }));
      form.classList.add('hidden');
      success?.classList.remove('hidden');
      success?.focus();
    } catch {
      error?.classList.remove('hidden');
    } finally {
      if (button) { button.disabled = false; button.textContent = label ?? ''; }
    }
  });

  root.querySelector('[data-reset]')?.addEventListener('click', () => {
    success?.classList.add('hidden');
    form.classList.remove('hidden');
    form.querySelector<HTMLElement>('input, textarea')?.focus();
  });
}
