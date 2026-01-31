export default {
  async fetch(request, env) {
    // --- CORS (so your website can call this) ---
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,Authorization",
      "Content-Type": "application/json",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    try {

      const url = new URL(request.url);

      const username = url.searchParams.get("u") || "kashsuks";

      const now = new Date();
      const year = now.getUTCFullYear();
      const from = new Date(Date.UTC(year, 0, 1, 0, 0, 0)).toISOString();
      const to = now.toISOString();

      if (!env.GITHUB_TOKEN) {
        return new Response(JSON.stringify({ error: "Missing GITHUB_TOKEN secret" }), {
          status: 500,
          headers: corsHeaders,
        });
      }

      const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              totalCommitContributions
            }
          }
        }
      `;

      const ghRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "User-Agent": "commit-counter-worker",
        },
        body: JSON.stringify({
          query,
          variables: { username, from, to },
        }),
      });

      const json = await ghRes.json();

      if (!ghRes.ok || json.errors) {
        return new Response(
          JSON.stringify({
            error: "GitHub GraphQL error",
            status: ghRes.status,
            details: json.errors || json,
          }),
          { status: 502, headers: corsHeaders }
        );
      }

      const totalCommits =
        json?.data?.user?.contributionsCollection?.totalCommitContributions ?? 0;

      return new Response(JSON.stringify({ username, year, totalCommits }), {
        status: 200,
        headers: {
          ...corsHeaders,
          "Cache-Control": "public, max-age=900",
        },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Server error", details: String(e) }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};