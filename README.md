# Waati AI - Website

A responsive, minimalist website for Waati AI - AI Consulting services.

## Project Structure

- `index.html` - Main HTML file with the website structure
- `styles.css` - CSS styles for the website
- `README.md` - This documentation file

## Features

- Responsive, mobile-first design
- Minimalist aesthetic with clean typography
- Optimized for fast loading (minimal dependencies)
- Google Form integration for contact requests

## Technologies Used

- HTML5
- CSS3
- Google Fonts (Poppins, Inter)

## Deployment to Google Cloud Storage

### Prerequisites

1. Google Cloud Platform account
2. Google Cloud SDK installed and configured

### Step 1: Create a Storage Bucket

1. Go to the Google Cloud Console (https://console.cloud.google.com/)
2. Navigate to Cloud Storage > Buckets
3. Click "Create Bucket"
4. Name your bucket (e.g., `www.waatiai.com` or `waatiai-website`)
5. Choose a Region close to your target audience
6. Set Storage Class to "Standard"
7. Under "Choose how to control access to objects", select "Fine-grained"
8. Uncheck "Enforce public access prevention on this bucket"
9. Choose "Public access" for access control
10. Click "Create"

### Step 2: Configure the Bucket for Website Hosting

1. Navigate to your newly created bucket
2. Go to the "Permissions" tab
3. Click "Add" and add a new entry:
   - New Principal: `allUsers`
   - Role: "Storage Object Viewer"
4. Click "Save"
5. Go to the "Website configuration" tab 
6. Set `index.html` as the main page
7. Optionally set an error page
8. Click "Save"

### Step 3: Upload the Website Files

Using the Google Cloud SDK, upload the files from your local directory:

```bash
# Navigate to your project folder
cd path/to/waati-website

# Upload all files to your bucket
gsutil -m cp -r * gs://YOUR-BUCKET-NAME/
```

Alternatively, you can use the Google Cloud Console web interface to upload files manually.

### Step 4: Set the Correct Content Types

For proper rendering of HTML and CSS files, set the correct content types:

```bash
gsutil setmeta -h "Content-Type:text/html" gs://YOUR-BUCKET-NAME/*.html
gsutil setmeta -h "Content-Type:text/css" gs://YOUR-BUCKET-NAME/*.css
```

### Step 5: Access Your Website

Your website is now accessible via the URL:
```
https://storage.googleapis.com/YOUR-BUCKET-NAME/index.html
```

### Optional: Set Up a Custom Domain

1. Verify your domain ownership in Google Search Console
2. Create a CNAME record pointing to `c.storage.googleapis.com`
3. Configure your bucket with your domain name

## Maintenance

To update the website, simply replace the files in the bucket with the updated versions:

```bash
gsutil -m cp -r path/to/updated/files/* gs://YOUR-BUCKET-NAME/
```

## License

All rights reserved. The content of this website is proprietary to Waati AI. 