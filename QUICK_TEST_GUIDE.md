# ⚡ Quick Test Guide - New Features

Quick reference for testing the 5 priority features added to the chatbot.

## 🎯 5-Minute Feature Test

### 1. Quick Action Buttons ⚡
**What to test:**
- Open the chatbot (fresh page load)
- ✅ You should see 3-4 clickable buttons on the welcome screen
- Click "Which properties have pools?"
- ✅ Button should send the message and trigger a response

**Expected:** Buttons appear on empty chat, clicking sends message

---

### 2. Property Cards 🏠
**What to test:**
- Ask: "Which properties have pools?" or "Show me properties under $200"
- ✅ Response should show **Property Cards** (not just text)
- Each card should show:
  - Property name/number
  - Quick action button "Ask about this property"
- Click the button on a card
- ✅ Should send a follow-up query about that property

**Expected:** List responses render as cards with interactive buttons

---

### 3. Dark Mode 🌙
**What to test:**
- Look for the sun/moon icon in the header (top right)
- Click the toggle
- ✅ Entire UI should switch to dark theme
- ✅ Colors should be inverted (dark backgrounds, light text)
- Refresh the page
- ✅ Dark mode preference should persist

**Expected:** Toggle works, theme persists across page reloads

---

### 4. Smart Suggestions 💡
**What to test:**
- Ask: "What's the WiFi password at Unit 1?"
- ✅ After the response, you should see **context-aware suggestion buttons**
- Suggestions should be relevant (e.g., "Does Unit 1 have parking?")
- Ask: "Which properties have pools?"
- ✅ Suggestions should change to dataset-related queries

**Expected:** Suggestions appear after messages and adapt to context

---

### 5. Message Streaming ✨
**What to test:**
- Ask any question (e.g., "Tell me about Unit 2")
- ✅ Bot response should **stream in character by character** (typewriter effect)
- ✅ Not all at once - should animate smoothly
- Test with a long response (e.g., "Which properties have pools?")
- ✅ Streaming should work for long messages too

**Expected:** Messages animate in, not instant display

---

## 🚨 Quick Troubleshooting

### Quick Actions Not Showing?
- Clear browser cache
- Check browser console for errors
- Verify `QuickActions` component is imported in `App.jsx`

### Property Cards Not Rendering?
- Check if response contains "Unit" or bullet points (•)
- Verify `PropertyCard` component exists
- Check browser console for errors

### Dark Mode Not Working?
- Check `tailwind.config.js` has `darkMode: 'class'`
- Verify `useDarkMode` hook is working
- Check if `dark` class is applied to `<html>` element

### Smart Suggestions Not Appearing?
- Verify `useSmartSuggestions` hook is imported
- Check that `currentIntent` state is being set
- Ensure suggestions array is not empty

### Streaming Not Working?
- Check `StreamingMessage` component is used (not `ChatMessage`)
- Verify component receives `text` prop correctly
- Check for JavaScript errors in console

---

## ✅ All Features Working Checklist

- [ ] Quick Actions appear on welcome screen
- [ ] Property Cards render for list responses
- [ ] Dark mode toggle works and persists
- [ ] Smart suggestions appear after messages
- [ ] Messages stream in with animation
- [ ] All features work on mobile
- [ ] All features work in dark mode
- [ ] No console errors

---

## 🎬 Demo Flow

Try this sequence to test all features:

1. **Open chatbot** → See Quick Actions ✅
2. **Click "Which properties have pools?"** → See Property Cards ✅
3. **Click "Ask about this property" on a card** → See streaming message ✅
4. **After response, see Smart Suggestions** → Click one ✅
5. **Toggle dark mode** → See theme change ✅
6. **Refresh page** → Dark mode persists ✅

If all steps work, all features are functioning! 🎉

---

## 📱 Mobile Testing

Test on mobile viewport (or actual device):
- [ ] Quick Actions are touch-friendly
- [ ] Property Cards are readable
- [ ] Dark mode toggle is accessible
- [ ] Smart Suggestions are easy to tap
- [ ] Streaming animation is smooth
- [ ] Input field is usable

---

## 🌐 Browser Compatibility

Test in:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

---

**Time to complete:** ~5 minutes  
**Priority:** Test before deployment

