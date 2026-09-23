const root = document.documentElement;
root.classList.add("js");

const join = document.querySelector(".join");
const serverAddress = join?.dataset.server ?? "";

// Footer year
const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

// Toast
const toast = document.querySelector("[data-toast]");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (toast.hidden = true), 2200);
}

// Copy server IP
const copyButton = document.querySelector("[data-copy-ip]");
const copyAction = copyButton?.querySelector(".ip-action");
copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(serverAddress);
    showToast("Server IP copied. See you in game!");
    if (copyAction) {
      copyAction.textContent = "Copied";
      setTimeout(() => (copyAction.textContent = "Copy"), 2000);
    }
  } catch {
    // Clipboard API unavailable (e.g. insecure context): select the text instead
    const range = document.createRange();
    range.selectNodeContents(copyButton.querySelector(".ip-value"));
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    showToast("Press Ctrl+C / Cmd+C to copy");
  }
});

// Live server status. If the lookup fails or the server is offline we keep the
// "Relaunching soon" copy rather than advertising the server as down.
const status = document.querySelector("[data-status]");
const statusText = document.querySelector("[data-status-text]");
async function loadStatus() {
  if (!status || !serverAddress) return;
  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(serverAddress)}`, {
      signal: AbortSignal.timeout(6000),
    });
    if (!res.ok) return;
    const data = await res.json();
    if (!data.online) return;
    const { online = 0, max } = data.players ?? {};
    status.dataset.state = "online";
    statusText.textContent = `Online now · ${online}${max ? ` / ${max}` : ""} playing`;
  } catch {
    // Network error or timeout: leave the default text
  }
}
loadStatus();

// Highlight the nav link for the section in view
const navLinks = [...document.querySelectorAll(".nav-links a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      }
    }
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

// Fade sections in as they scroll into view. Only content below the fold is
// hidden, so nothing visible on load flashes.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  document.querySelectorAll(".section .container > *").forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}
