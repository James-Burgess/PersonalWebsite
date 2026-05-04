import { renderCV, renderPasswordForm } from "../server/src/template.js";
import defaultData from "../data/cv-default.json";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serve the CV page dynamically
    // Usage: /cv or /cv?data=marine-conservation&password=secret
    if (url.pathname === "/cv") {
      const dataFile = url.searchParams.get("data") || "default";
      const password = url.searchParams.get("password");

      let cvData;
      try {
        // Try to load the specified JSON file
        if (dataFile === "default") {
          cvData = defaultData;
        } else {
          const response = await fetch(
            `${url.origin}/data/cv-${dataFile}.json`,
          );
          if (!response.ok) throw new Error("Data file not found");
          cvData = await response.json();
        }
      } catch (error) {
        // Fall back to default data if file not found
        cvData = defaultData;
      }

      // Check if password is required and validate
      if (cvData.password) {
        if (!password) {
          // No password provided, show password form
          const html = renderPasswordForm(dataFile, false);
          return new Response(html, {
            headers: { "Content-Type": "text/html" },
          });
        } else if (password !== cvData.password) {
          // Incorrect password, show form with error
          const html = renderPasswordForm(dataFile, true);
          return new Response(html, {
            headers: { "Content-Type": "text/html" },
          });
        }
        // Password is correct, continue to render CV
      }

      const html = renderCV(cvData);
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Serve all other files as static assets
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    // Fallback for dev mode - return 404
    return new Response("Not found", { status: 404 });
  },
};
