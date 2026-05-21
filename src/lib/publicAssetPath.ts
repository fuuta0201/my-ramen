const githubPagesBasePath = "/my-ramen";

export const getPublicAssetPath = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (process.env.GITHUB_PAGES !== "true") {
    return normalizedPath;
  }

  if (normalizedPath.startsWith(`${githubPagesBasePath}/`)) {
    return normalizedPath;
  }

  return `${githubPagesBasePath}${normalizedPath}`;
};
