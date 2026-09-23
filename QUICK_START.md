# 🚀 Quick Start - Enhanced Presentation System

## One-Command Build

```bash
# Step 1: Generate pathways + player for gastro-01
node classes/scripts/build_enhanced_decks.cjs gastro-01

# Step 2: Open in browser (copy/paste into address bar)
file:///d:/Anti/eunacom-publishing-hub/classes/decks/gastro-01_player.html
```

**That's it!** You now have:
- ✓ Beautiful ERGE & Barrett decision pathway
- ✓ Animated topic cards (click to expand)
- ✓ Full-width Q&A
- ✓ Smooth transitions

---

## Build Multiple Classes

```bash
# Build gastro-01 through gastro-26
node classes/scripts/build_enhanced_decks.cjs --batch gastro 1 26

# Then open any one:
# file:///d:/Anti/eunacom-publishing-hub/classes/decks/gastro-01_player.html
# file:///d:/Anti/eunacom-publishing-hub/classes/decks/gastro-02_player.html
# ...etc
```

---

## What You Get

### 📊 Clinical Pathways
Real flowcharts with:
- Entry points (grey boxes)
- Decision nodes (blue boxes)
- Branches (YES/NO splits)
- Conduct boxes (green for success, red for warning)

### 🎨 Animations
- Topics expand when clicked
- Sub-points pop in sequentially
- Smooth spring curves (not stiff)
- Professional transitions

### 📱 Full-Width Q&A
- Questions readable on any screen
- Options take 100% width
- Clear hover feedback
- Highlighted correct answers

### ⌨️ Navigation
- Arrow keys: Previous/Next
- Space: Play/pause audio
- Click: Expand/collapse cards

---

## Optional: Generate Videos

```bash
# Generate Remotion video compositions
node classes/scripts/build_enhanced_decks.cjs gastro-01 --with-video

# Then render to MP4 (requires: npm install remotion)
npx remotion render \
  classes/remotion_studio/src/compositions/gastro-01_composition.jsx \
  gastro-01_export \
  --output classes/dist/gastro-01_export.mp4
```

---

## File Outputs

```
classes/
├── pathways/gastro-01_pathway.json       ← Clinical decision path
└── decks/gastro-01_player.html           ← Interactive player

classes/remotion_studio/                  ← (Optional video)
└── src/compositions/gastro-01_composition.jsx

classes/dist/
└── gastro-01_export.mp4                  ← (Optional video output)
```

---

## Troubleshooting

**Player won't load?**
- Check console: `F12` → Console tab
- Ensure curriculum JSON exists

**Animations choppy?**
- Close other browser tabs
- Use Chrome (better performance than Firefox)

**Pathway not showing?**
- Run: `node classes/scripts/generate_clinical_pathways.cjs gastro-01` first
- Check: `classes/pathways/gastro-01_pathway.json` exists

---

## System Architecture

```
Your Slides
    ↓
build_enhanced_decks.cjs (Orchestrator)
    ├→ generate_clinical_pathways.cjs (creates flowcharts)
    ├→ player_template_enhanced.html (interactive player)
    ├→ remotion_composition_builder.cjs (video, optional)
    ↓
Interactive HTML Player
    ├ Beautiful pathways
    ├ Smooth animations
    ├ Full-width Q&A
    ↓
(OR) Video MP4
    ├ Animations synced with audio
    ├ 1080p Full HD
    ├ Ready to share
```

---

## What's Included

✅ **6 Pre-Written Pathways**
- gastro-01: ERGE & Barrett
- gastro-02: Dispepsia & Ulcera
- gastro-03: Hemorragia Digestiva Alta (Emergency)
- gastro-04: Enfermedad Inflamatoria Intestinal
- gastro-05: Cáncer Gástrico
- gastro-06: Síndrome de Intestino Irritable

✅ **Enhanced Player Template** with:
- Topic expansion animations
- Full-width Q&A layout
- Keyboard navigation
- Responsive design

✅ **Remotion Components** for video:
- ClinicalPathway.jsx
- TopicExpansion.jsx
- QuestionSlide.jsx

✅ **Build Orchestrator**
- Single command builds everything
- Batch processing for multiple classes
- Parallel composition generation

---

## Next Steps

### Now
1. Run: `node classes/scripts/build_enhanced_decks.cjs gastro-01`
2. Open player in browser
3. Click topics to see animations
4. Test keyboard navigation

### Today
1. Generate all 6 sample pathways
2. Try batch build: `--batch gastro 1 6`
3. Customize pathway text if needed

### This Week
1. Generate audio (need API key for ElevenLabs/Azure)
2. Create sample videos with Remotion
3. Gather feedback on animations/layout

### This Month
1. Build all 26 gastroenterology classes
2. Apply to other specialties
3. Deploy to production

---

## Commands Reference

```bash
# Generate single pathway
node classes/scripts/generate_clinical_pathways.cjs gastro-01

# Generate all pathways
node classes/scripts/generate_clinical_pathways.cjs --all

# Build single class
node classes/scripts/build_enhanced_decks.cjs gastro-01

# Build with video composition
node classes/scripts/build_enhanced_decks.cjs gastro-01 --with-video

# Batch build classes 1-26
node classes/scripts/build_enhanced_decks.cjs --batch gastro 1 26

# Batch build with video
node classes/scripts/build_enhanced_decks.cjs --batch gastro 1 26 --with-video
```

---

## Pro Tips

💡 **Customize Pathways:** Edit `classes/scripts/generate_clinical_pathways.cjs` (line ~50+) and add your own pathway structure

💡 **Adjust Animation Speed:** Edit `player_template_enhanced.html` CSS transitions (search for `--spring-curve`)

💡 **Change Colors:** Edit `:root` color variables in `player_template_enhanced.html`

💡 **Add Audio:** Place MP3 files in `classes/audio/` and update curriculum JSON with `audio` property

💡 **Responsive Layout:** All components work on mobile/tablet (tested at 320px-1920px width)

---

## Full Documentation

For complete details, see:
- `classes/docs/ENHANCED_PRESENTATION_SYSTEM.md` — Full docs
- `SYSTEM_DEMO.md` — Visual demo walkthrough
- `HANDOFF_CLASS_CREATION_ENGINE.md` — Project architecture

---

## Need Help?

Check the console for errors: `F12` in browser

Common issues:
```
❌ Player not loading
   → Check F12 console for errors
   → Verify deckData is injected

❌ Animations choppy
   → Use Chrome instead of Firefox
   → Close other browser tabs
   → Check if CPU-heavy tasks running

❌ Pathway missing
   → Run generate_clinical_pathways.cjs first
   → Verify JSON file exists
```

---

**You're ready to build! 🚀**

```bash
cd D:\Anti\eunacom-publishing-hub
node classes/scripts/build_enhanced_decks.cjs gastro-01
# Open: file:///d:/Anti/eunacom-publishing-hub/classes/decks/gastro-01_player.html
```
