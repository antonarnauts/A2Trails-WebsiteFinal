export function getAssetPath(path: string) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    // Standard GitHub Pages path is /repo-name/
    const pathname = window.location.pathname;
    const pathSegments = pathname.split('/').filter(Boolean);
    
    // If we have at least one segment (the repo name), use it as the base
    if (pathSegments.length > 0) {
      const repoName = pathSegments[0];
      return `/${repoName}/${cleanPath}`;
    }
  }
  
  return `./${cleanPath}`;
}
