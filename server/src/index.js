import robotText from "./robot-text.js";
import humanHtml from "./human-html.js";

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

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  },
};
