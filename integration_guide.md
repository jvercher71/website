# Backend Integration Guide for VTOne

This document outlines the recommended approach for integrating the Vercher Technologies UI/UX frontend with your backend services.

## Architecture Overview
The frontend is built using **Vite, React, and React Router Dom**. It is designed as a decoupled SPA (Single Page Application) that communicates with backend services via REST APIs.

## 1. Environment Configuration
Create a `.env` file in the root directory to manage your API endpoints. Avoid hardcoding URLs in the components.

```env
VITE_API_URL=https://api.verchertechnologies.one
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

Access these in the code via `import.meta.env.VITE_API_URL`.

## 2. API Integration Patterns
We recommend using **Axios** or the native **Fetch API** within React `useEffect` hooks or custom hooks.

### Recommended Hook Pattern:
```javascript
import { useState, useEffect } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return { projects, loading };
};
```

## 3. Key Integration Points

### Project & Product Data
Currently, data is stored in local arrays within:
- `src/pages/ProjectsPage.jsx`
- `src/pages/ProductsPage.jsx`
- `src/pages/Home.jsx` (Pathway previews)

To integrate, replace the `const projects = [...]` and `const products = [...]` arrays with state populated from your API.

### Lead Capture Forms
The following pages contain functional HTML forms ready for `onSubmit` handlers:
- `/contact` (`ContactPage.jsx`): General and enterprise inquiries.
- `/products/shepherdscore/demo` (`ShepherdsCoreDemoPage.jsx`): Church-specific demo requests.

### Purchase Flow
- `/products/shepherdscore/buy` (`ShepherdsCoreBuyPage.jsx`): This page is ready for Stripe Elements or PayPal SDK integration inside the "Get Started" buttons.

## 4. Deployment (Vercel)
The project is optimized for Vercel. 
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Redirects**: A `vercel.json` has been included to handle client-side routing.

## 5. Logo Swap
The branding in `Header.jsx` and `App.jsx` handles text-based logos. To integrate the official logo, replace the `.logo-text` and `.logo-sub` spans with an `<img>` tag pointing to your asset in the `public/` directory.

---
*For technical questions, please consult the `walkthrough.md` for a visual overview of the component hierarchy.*
