# Fany's Enchanted Greenhouse Portfolio

A responsive single-page portfolio inspired by the approved dark fantasy greenhouse concept. Built with plain HTML, CSS and JavaScript.

## Run it
Open `index.html` in a browser, or use the VS Code Live Server extension.

## Personalize before publishing
- Replace `[Your professional role]` with your real role or area of study.
- Update the introduction and About Me copy so it accurately describes you.
- Replace the three sample project names, summaries, preview images and `href` destinations with your real work.
- Add your real email and GitHub profile in the Contact section.
- Edit the skills list to include only skills you can demonstrate.
- Replace `assets/pixel-avatar.jpg` with your own pixel-art avatar if you prefer.
- The greenhouse hero art and project previews are cropped from the approved concept artwork. Replace them with licensed artwork or your own assets if needed for public/commercial use.

## Publish on GitHub Pages
1. Create a GitHub repository and upload all files, keeping `index.html` in the root.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Open the Pages URL after deployment finishes.

## Accessibility / responsive notes
- Semantic landmarks and heading hierarchy are included.
- Navigation works on mobile.
- Images have alt text.
- Keyboard focus is visible.
- Reduced-motion preferences are respected.


## Updated portfolio structure
- About Me appears in its own full-width section.
- Projects is now the main gallery with five editable project cards; the first three are marked as featured.
- My Skills no longer lists Python or UI Design.
- Certifications includes two editable certificate entries.
- Contact includes Fany's email and placeholders for LinkedIn and GitHub.

To personalize the project cards and certifications, edit `index.html`. Replace the placeholder titles, descriptions, and `href` values with your own details and links.


## Replace the profile photo
The hero now includes a portrait placeholder beside the name **Fany Figueroa**. To use your own picture, save a square JPG or PNG as `assets/profile-photo.jpg` and change the image path in `index.html` from `assets/profile-photo.svg` to `assets/profile-photo.jpg`. The decorative greenhouse background is a clean original SVG illustration (`assets/greenhouse-background.svg`), not a screenshot of a website.


## Project details

Project descriptions, links, categories and collaborators are stored in each project's `data-project-*` attributes in `index.html`. The first three projects are marked as featured.
