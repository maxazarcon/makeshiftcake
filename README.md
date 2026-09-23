# MakeshiftCake

Website for MakeshiftCake, a Minecraft PvP and PvE server running since 2012.

This is the 2026 reboot: a single static page with no build step and no dependencies. The original 2012 site is kept on `master`.

## Run it locally

Any static file server works:

```sh
npx http-server .
# or
python3 -m http.server
```

Then open http://localhost:8080 (or :8000 for Python).

## Structure

```
index.html          The whole site, one section per topic
404.html            Not-found page (uses root-relative paths, so host at the domain root)
css/styles.css      All styles; colors and spacing are CSS custom properties at the top
js/main.js          Copy-IP button, live server status, active nav link, scroll reveal
assets/img/         Logo, cake, staff heads, grass strip, social share image
assets/fonts/       Pixelify Sans (self-hosted, OFL)
site.webmanifest    Icons and colors for "add to home screen"
```

## Common edits

- **Server address:** change `data-server` on the `.join` element and the text inside `.ip-value` in `index.html`. The live status badge looks up the same address through [mcsrvstat.us](https://mcsrvstat.us). When the server is offline or the lookup fails, it shows "Relaunching soon" instead.
- **Staff:** add an `<li class="card staff-card">` in the Staff section with a 40x40 head in `assets/img/staff/`. It's scaled up with pixelated rendering so it stays crisp.
- **Colors:** edit the variables in `:root` at the top of `css/styles.css`.

## What's in the reboot

- Semantic, accessible markup: landmarks, skip link, visible focus styles, alt text and sensible heading order
- Responsive from 360px phones up to wide desktops without breakpoint hacks, using fluid type and `auto-fit` grids
- Works with JavaScript off: navigation is plain anchor links, and JS only adds extras
- Respects `prefers-reduced-motion`
- Self-hosted font and optimized images, with no third-party scripts or trackers
- Open Graph and Twitter card metadata for nice link previews
