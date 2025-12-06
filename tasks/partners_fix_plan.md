<h1> Partners & Disclaimer Fix Plan

## Objective
Fix the visibility of partner logos and adjust the footer disclaimer font size as requested.

## Diagnosis
1. **Disclaimer Size**: The user feels the disclaimer is still too large. We will reduce it to a very small, yet legible size (e.g., 10px -> 8px).
2. **Logos Visibility**: Logos are not appearing. Potential causes:
    - **Contrast**: Logos might be white text on transparent backgrounds (meant for dark mode), making them invisible on the current white partner cards.
    - **Path/Loading**: Next.js Image component might have issues with the specific file types or paths, though unlikely given they are standard formats now.
    - **Corrupted Files**: Files might not be valid images.

## Plan

### Step 1: Debug Partner Logos
- Create a diagnostic page `public/test-logos.html` to display all logos on both **white** and **black** backgrounds.
- This allows us to verify:
    - If the browser can load the files (verifying paths).
    - The color of the logos (verifying contrast).
- **User Action**: We will ask the user to view this page.

### Step 2: Fix Partner Logos (Based on Findings)
- **If logos are white**: We will change the partner card background to `slate-900` (dark) or a suitable dark color to make them visible.
- **If logos do not load**: We will investigate file permissions or corruption.

### Step 3: Refine Footer
- Update `Footer.tsx` to reduce the disclaimer font size to `text-[8px]`.
- Ensure the "Legal" links are strictly right-aligned as requested.

## Proposed Changes
1. **`src/components/Footer.tsx`**: Update font size and alignment classes.
2. **`public/test-logos.html`**: Create debugging aid.
3. **`src/components/Partners.tsx`**: Update background styling based on test results (Tentatively switching to dark theme for safety if logos are white).

</h1>
