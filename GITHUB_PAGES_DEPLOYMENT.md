# GitHub Pages Deployment Guide for NeoFikr Website

This guide will walk you through how to deploy your NeoFikr website to GitHub Pages for free hosting.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your NeoFikr website files ready

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "neofikr" or any name you prefer)
4. Make sure it's set to "Public" (for free GitHub Pages hosting)
5. Click "Create repository"

## Step 2: Push Your Website Files to the Repository

Open a terminal/command prompt and run the following commands:

```bash
# Navigate to your website directory
cd path/to/neofikr

# Initialize Git repository
git init

# Add all files to staging
git add .

# Commit the files
git commit -m "Initial website commit"

# Link to your GitHub repository (replace USERNAME with your GitHub username and REPO with your repository name)
git remote add origin https://github.com/USERNAME/REPO.git

# Push the files
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. In the "Source" dropdown, select "main" branch
5. Click "Save"
6. Wait a few minutes for your site to deploy

## Step 4: Access Your Deployed Website

Your website will be available at:
`https://USERNAME.github.io/REPO`

For example, if your username is "johndoe" and your repository is "neofikr", your website URL will be:
`https://johndoe.github.io/neofikr`

## Customizing Your Domain (Optional)

If you want to use a custom domain (e.g., www.neofikr.com):

1. Purchase a domain from a domain registrar (like Namecheap, GoDaddy, Google Domains)
2. In your GitHub repository settings, under "GitHub Pages", enter your custom domain and click "Save"
3. Configure your domain's DNS settings to point to GitHub Pages:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`
   - CNAME record: `USERNAME.github.io`

## Making Updates

To update your website after making changes:

```bash
# Add all changed files to staging
git add .

# Commit the changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically redeploy your site with the changes.

## Troubleshooting

- If your site doesn't appear, check the GitHub Pages section in repository settings for error messages
- Make sure your HTML file is named "index.html" for it to serve as the homepage
- Verify that all file paths are relative and not absolute
- Check that all necessary files (CSS, JS, images) are included in your repository

## Need Help?

If you encounter any issues, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages) for more detailed information.
