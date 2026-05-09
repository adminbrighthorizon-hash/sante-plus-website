import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

const deployTarget = process.env.DEPLOY_TARGET;
const [repoOwner, repoName] = (process.env.GITHUB_REPOSITORY || "/").split("/");
const isGitHubPagesDeploy = deployTarget === "github-pages" && !!repoOwner && !!repoName;

// https://astro.build/config
export default defineConfig({
  site: isGitHubPagesDeploy ? `https://${repoOwner}.github.io` : "http://localhost:4321",
  base: isGitHubPagesDeploy ? `/${repoName}/` : "/",
  integrations: [tailwind(), robotsTxt()],
});
