# LUTES × K-Supermarket Sammonlahti Support Landing Page

A landing page that helps supporters link their Plussa card to K-Supermarket Sammonlahti to automatically support LUTES with 1% of their purchases.

## Functionality

### Main Features

1. **Automatic Supporter Link**
   - Primary button opens the Plussa sponsorship page with the supporter code (SP10076)
   - Automatically copies the code to clipboard for easy pasting
   - Opens a fallback page if the automatic link doesn't work

2. **Copy Code Button**
   - Secondary button copies the supporter code (SP10076) to clipboard
   - Shows visual feedback when code is copied

3. **Manual Instructions**
   - Step-by-step guide for adding the code manually in the K-Ruoka app
   - Web fallback instructions for desktop users
   - Numbered steps with clear instructions

4. **Impact Information**
   - Explains why supporting matters
   - Shows example impact calculations

5. **Click Counter (Internal)**
   - Tracks clicks on the primary CTA button
   - Stores count in browser localStorage
   - For internal analytics only (not displayed to users)
   - Access count via browser console: `localStorage.getItem('lutes_supporter_clicks')`

### Technical Details

- **Support Code**: SP10076
- **Target URL**: Opens Plussa sponsorship page with code parameter
- **Mobile-first**: Fully vertical layout optimized for mobile devices
- **Dark theme**: Matches LUTES website design
- **Fully static**: No backend required, works as a static site

## Setup

Simply open `index.html` in a web browser or serve it using any static file server.

For local development:
- Python: `python -m http.server 8000`
- Node.js: `npx serve`
- Or any other static file server

## Deployment

Deploy the static files (HTML, CSS, JS, logos) to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

The page is fully static and works without a backend server.
