# GitHub Pages Deployment Troubleshooting

If you're experiencing issues with your GitHub Pages deployment, please follow these troubleshooting steps:

## 1. Check Your Repository Structure

Make sure you have these essential files for the blog:
- `blog.md` at the root 
- Blog layout files in `_layouts/` directory
- A `blog/` directory with an `index.html` file inside

## 2. Verify Branch Configuration

GitHub Pages can deploy from either `main` or `master` branch. Check which one you're using:

```bash
# Check which branches exist in your repository
git branch
```

The branch with an asterisk (*) is your current branch. Make sure your GitHub Pages settings match this branch name.

## 3. Fix 404 Errors for Blog Pages

If you're getting 404 errors for blog pages, try these fixes:

1. Update any direct links to the blog to include the full path:
   - Change: `href="blog/"`
   - To: `href="/neofikr/blog/"`

2. Create a `blog/` directory with an `index.html` file if it doesn't exist.

3. Make sure your `_config.yml` is properly configured:
   ```yaml
   baseurl: "/neofikr"
   url: "https://m0shaban.github.io"
   permalink: /blog/:year/:month/:day/:title/
   ```

## 4. Redeployment

After making changes:

```bash
# Add your changes
git add .

# Commit with a message
git commit -m "Fix blog structure and links"

# Push to the appropriate branch (use 'master' or 'main' as needed)
git push origin master
```

## 5. Clear Cache

After deployment, you may need to clear your browser cache to see the changes.
