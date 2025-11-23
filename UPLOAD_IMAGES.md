# How to Upload Your Own Images

## Step 1: Locate the Images Folder

Navigate to: `changemaker_map/public/images/`

This folder is where all gallery images are stored.

## Step 2: Add Your Images

You have **3 options** to add images:

### Option A: Drag and Drop (Easiest)
1. Open File Explorer
2. Navigate to `changemaker_map/public/images/`
3. Drag your image files from your computer into this folder

### Option B: Copy and Paste
1. Right-click on your image file
2. Select "Copy"
3. Navigate to `changemaker_map/public/images/`
4. Right-click in the folder and select "Paste"

### Option C: Using VS Code/Cursor
1. In your editor, open the `public/images/` folder
2. Right-click in the folder
3. Select "Upload" or "Paste" your images

## Step 3: Name Your Files Correctly

**IMPORTANT:** Your images must be named exactly as shown below (case-sensitive):

### For Bayside Food Distribution:
- `bayside-food-1.jpg`
- `bayside-food-2.jpg`

### For Pancakes Serving Up Hope:
- `pancakes-1.jpg`
- `pancakes-2.jpg`

### For USD Tree Planting Day:
- `tree-planting-1.jpg`
- `tree-planting-2.jpg`

## Step 4: Supported File Formats

- `.jpg` or `.jpeg` (recommended)
- `.png`
- `.webp`

## Step 5: View Your Images

After uploading:
1. The images will automatically appear in the Gallery section
2. No code changes needed!
3. If running locally, refresh your browser
4. If deployed, Railway will automatically rebuild

## Troubleshooting

**Images not showing?**
- Check that file names match exactly (including capitalization)
- Make sure files are in `public/images/` not `src/images/`
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for 404 errors

**Want to add more images?**
- You can add more images with different names
- Then update `src/data/mockData.ts` to include them in the `mockGalleryImages` array

