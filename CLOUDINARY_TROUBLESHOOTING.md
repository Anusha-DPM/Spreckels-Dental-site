# Cloudinary Upload Error Troubleshooting

## Error: "Unknown API key"

This error means Cloudinary can't authenticate the upload request.

## ✅ Checklist to Fix

### 1. Verify Cloud Name (CRITICAL!)

The error "Unknown API key" often means the **cloud name is incorrect**.

**How to find your exact cloud name:**

1. Go to: https://cloudinary.com/console
2. At the very top of the dashboard, you'll see:
   ```
   Cloud name: your_cloud_name_here
   ```
3. Copy it EXACTLY as shown (case-sensitive, check for hyphens vs underscores)

**Common mistakes:**
- `speckles_dental` (underscore)
- `spreckels-dental` (hyphen) 
- `speckels_dental` (single 'c')
- `spreckles_dental` (double 'c')

### 2. Verify Upload Preset is "Unsigned"

**CRITICAL:** The upload preset MUST be set to "Unsigned" for client-side uploads.

**Steps:**

1. Go to: https://cloudinary.com/console/settings/upload
2. Find your upload preset: `speckles_dental`
3. Click to edit it
4. Check **Signing Mode**: 
   - ✅ Must be: **Unsigned**
   - ❌ If it's: **Signed** - change it to Unsigned
5. Click **Save**

### 3. Verify Upload Preset Settings

Your preset should have these settings:

```
Preset name: speckles_dental
Signing mode: Unsigned ⚠️
Folder: blog-images (optional)
Allowed formats: jpg, png, gif, webp
Access mode: public
```

## 🔧 What to Do Now

Please check your Cloudinary dashboard and tell me:

1. **What is your EXACT cloud name?** (copy it directly from the dashboard)
2. **Is your upload preset set to "Unsigned"?**

Once you confirm these, I'll update your configuration.
