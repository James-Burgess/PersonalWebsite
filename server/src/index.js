import robotText from "./robot-text.js";
import humanHtml from "./human-html.js";
import { renderCV, renderPasswordForm } from "../../cv/template.js";
import { renderContactForm } from "./contact-form.js";
import defaultData from "../../cv/data/cv-default.json";
import conservationData from "../../cv/data/cv-conservation-volunteer.json";
import diveInstructorData from "../../cv/data/cv-dive-instructor.json";

const allCvs = [defaultData, conservationData, diveInstructorData];

function findCvByPassword(password) {
  return allCvs.find((cv) => cv.password === password) || null;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/robots") {
      const userAgent = request.headers.get("User-Agent") || "";
      const botPattern =
        /bot|crawler|spider|scraper|ai|gpt|llm|claude|gemini|copilot|perplexity|anthropic|openai|googlebot|bingbot|duckduckbot|baiduspider/i;
      const isBot = botPattern.test(userAgent);
      const hasQueryParams = url.searchParams.toString().length > 0;

      if (isBot || hasQueryParams) {
        return new Response(robotText, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      }

      return new Response(humanHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (url.pathname === "/resume") {
      const password = url.searchParams.get("password");

      if (!password) {
        return new Response(renderPasswordForm(false), {
          headers: { "Content-Type": "text/html" },
        });
      }

      const cvData = findCvByPassword(password);

      if (!cvData) {
        return new Response(renderPasswordForm(true), {
          headers: { "Content-Type": "text/html" },
        });
      }

      return new Response(renderCV(cvData), {
        headers: { "Content-Type": "text/html" },
      });
    }

    if (url.pathname === "/contact") {
      if (request.method === "GET") {
        return new Response(renderContactForm(false, false, env.TURNSTILE_SITE_KEY), {
          headers: { "Content-Type": "text/html" },
        });
      }

      if (request.method === "POST") {
        try {
          const formData = await request.formData();
          const turnstileToken = formData.get("cf-turnstile-response") || "";

          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
          });
          const verifyData = await verifyRes.json();

          if (!verifyData.success) {
            return new Response(renderContactForm(false, "captcha", env.TURNSTILE_SITE_KEY), {
              headers: { "Content-Type": "text/html" },
            });
          }

          const name = formData.get("name") || "";
          const email = formData.get("email") || "";
          const message = formData.get("message") || "";

          const ntfyBody = `From: ${name} <${email}>\n\n${message}`;

          const ntfyResponse = await fetch("https://ntfy.sh/jimmybcoza", {
            method: "POST",
            body: ntfyBody,
            headers: { "Title": "jimmyb.co.za contact" },
          });

          if (!ntfyResponse.ok) throw new Error("ntfy failed");

          return new Response(renderContactForm(true, false, env.TURNSTILE_SITE_KEY), {
            headers: { "Content-Type": "text/html" },
          });
        } catch (err) {
          return new Response(renderContactForm(false, "send", env.TURNSTILE_SITE_KEY), {
            headers: { "Content-Type": "text/html" },
          });
        }
      }
    }

      if (request.method === "POST") {
        try {
          const formData = await request.formData();
          const name = formData.get("name") || "";
          const email = formData.get("email") || "";
          const message = formData.get("message") || "";

          const ntfyBody = `From: ${name} <${email}>\n\n${message}`;

          const ntfyResponse = await fetch("https://ntfy.sh/jimmybcoza", {
            method: "POST",
            body: ntfyBody,
            headers: { "Title": "jimmyb.co.za contact" },
          });

          if (!ntfyResponse.ok) throw new Error("ntfy failed");

          return new Response(renderContactForm(true, false), {
            headers: { "Content-Type": "text/html" },
          });
        } catch (err) {
          return new Response(renderContactForm(false, true), {
            headers: { "Content-Type": "text/html" },
          });
        }
      }
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  },
};
