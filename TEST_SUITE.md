# 🧪 Comprehensive Test Suite for Property AI Chatbot

This document contains an extensive list of test questions to verify all features, edge cases, and functionality of the Property AI Chatbot.

## 📋 Test Categories

### 1. Property-Specific Queries (Unit Information)

#### Basic Property Info
- ✅ "What's the WiFi password at Unit 1?"
- ✅ "Does Unit 5 have parking?"
- ✅ "What's the address of Unit 3?"
- ✅ "Tell me about Unit 2"
- ✅ "What amenities does Unit 4 have?"
- ✅ "What's the check-in time for Unit 1?"

#### Advanced Property Queries
- "What's the door lock code for Unit 3?"
- "Does Unit 5 have a pool?"
- "What's the WiFi speed at Unit 2?"
- "Who owns Unit 1?"
- "What's the trash day for Unit 4?"
- "Does Unit 3 have cameras?"
- "What's the pool temperature at Unit 5?"
- "Can I have pets at Unit 2?"
- "What's the handyman number for Unit 1?"
- "What's the BBQ grill info for Unit 4?"
- "Does Unit 3 have a washer and dryer?"
- "What's the quiet hours for Unit 2?"
- "What's the owner's closet code for Unit 5?"
- "What's the storage room password for Unit 1?"
- "What's the early check-in fee link for Unit 3?"

#### Alternative Phrasings
- "Unit 1 WiFi"
- "WiFi for unit 5"
- "Parking at Unit 3?"
- "What about Unit 2's address?"
- "Give me info on Unit 4"
- "Unit 5 details"
- "Show me Unit 1"
- "I need the lock code for Unit 3"

#### Edge Cases
- "What's at Unit 999?" (non-existent unit)
- "Tell me about Unit" (incomplete)
- "Unit 0" (edge case)
- "What's the WiFi at unit one?" (word instead of number)
- "Unit 1, 2, and 3" (multiple units)

---

### 2. Dataset Queries (Multiple Properties)

#### Property Lists by Features
- ✅ "Which properties have pools?"
- ✅ "Show me properties under $200"
- ✅ "Which properties sleep 8+ guests?"
- ✅ "Which properties are villas?"
- ✅ "Which property is a mansion?"

#### More Dataset Queries
- "Which properties don't have cameras?"
- "Show me properties above $150 per night"
- "Properties with 3+ bedrooms"
- "Which properties have WiFi faster than 100 Mbps?"
- "Properties with hot tubs"
- "Show me the highest-rated property"
- "What's the lowest-rated property?"
- "Properties with parking"
- "Which properties are apartments?"
- "Show me mansion-style properties"
- "Properties with pools and hot tubs"

#### Owner-Based Queries
- "Which owner has the most properties?"
- "How many properties does [owner name] have?"
- "List all properties owned by [owner name]"
- "Who owns the most properties?"

#### Price-Based Queries
- "Properties under $100"
- "Properties above $250"
- "Show me properties between $150 and $200"
- "Cheapest property"
- "Most expensive property"

#### Guest Capacity Queries
- "Properties that sleep 6 guests"
- "Which properties accommodate 10+ guests?"
- "Properties for large groups (8+)"
- "Smallest property by guest capacity"

#### Bedroom Queries
- "Properties with 2 bedrooms"
- "Properties with 4+ bedrooms"
- "Which properties have the most bedrooms?"

#### WiFi Speed Queries
- "Properties with fast WiFi (100+ Mbps)"
- "Which properties have WiFi faster than 50 Mbps?"
- "Properties with slow WiFi"

#### Style/Type Queries
- "Which properties are mansions?"
- "Show me villa properties"
- "Properties with modern style"
- "Which properties are condos?"
- "Show me house-type properties"

---

### 3. Greetings & General Chat

#### Greetings
- ✅ "Hi"
- ✅ "Hello"
- ✅ "Hey"
- "Good morning"
- "Good afternoon"
- "How are you?"
- "What can you help me with?"

#### General Questions
- "What do you do?"
- "How does this work?"
- "What information do you have?"
- "Can you help me find a property?"

#### Edge Cases
- "What's your favorite color?" (should redirect to property topics)
- "Tell me a joke" (should redirect)
- "What's the weather?" (should redirect)

---

### 4. Testing New Features

#### Quick Action Buttons
- ✅ Test initial welcome screen shows Quick Actions
- ✅ Click "Which properties have pools?" button
- ✅ Click "Show me properties under $200" button
- ✅ Click "What's the WiFi password at Unit 1?" button
- ✅ Verify buttons trigger chat messages

#### Property Cards
- ✅ Ask "Which properties have pools?" and verify Property Cards appear
- ✅ Verify each card shows property name/number
- ✅ Test "Ask about this property" button on cards
- ✅ Verify cards are clickable and trigger follow-up queries

#### Smart Suggestions
- ✅ After asking about a property, verify context-aware suggestions appear
- ✅ After dataset query, verify relevant suggestions
- ✅ Test suggestions change based on conversation flow
- ✅ Verify suggestions are relevant to the current context

#### Dark Mode
- ✅ Toggle dark mode button in header
- ✅ Verify theme persists on page reload
- ✅ Test all UI elements in dark mode:
  - Chat messages
  - Input field
  - Buttons
  - Cards
  - Header
  - Background gradients

#### Message Streaming
- ✅ Verify bot messages stream in with typewriter effect
- ✅ Test with short messages
- ✅ Test with long messages (property lists)
- ✅ Verify streaming completes properly
- ✅ Test multiple messages in sequence

---

### 5. Complex & Multi-Part Queries

#### Compound Questions
- "What's the WiFi and parking for Unit 3?"
- "Does Unit 5 have a pool and parking?"
- "Tell me about Unit 2's amenities and address"
- "What's the price and guest capacity for Unit 1?"

#### Comparison Queries
- "Which property is cheaper, Unit 1 or Unit 2?"
- "Compare Unit 3 and Unit 5"
- "What's the difference between Unit 2 and Unit 4?"

#### Sequential Queries (Context Testing)
1. "Which properties have pools?"
2. "Tell me more about Unit 3" (from the list)
3. "What's the WiFi password there?"
4. "Does it have parking?"

---

### 6. Error Handling & Edge Cases

#### Invalid Inputs
- "" (empty message)
- "   " (whitespace only)
- "Unit" (incomplete)
- "Property 999" (non-existent)
- "asdfghjkl" (gibberish)

#### Missing Data Scenarios
- Ask about a field that doesn't exist in the sheet
- Ask about a property that exists but has missing data
- Query for a style/type that doesn't exist

#### Boundary Cases
- "Unit 0"
- "Unit -1"
- "Properties above $0"
- "Properties with 0 bedrooms"
- "Properties that sleep 0 guests"

---

### 7. Performance & UX Tests

#### Response Time
- ✅ Verify responses are fast (< 3 seconds for simple queries)
- ✅ Test with slow network (throttle in DevTools)
- ✅ Verify caching works (second query should be faster)

#### UI Responsiveness
- ✅ Test on mobile viewport
- ✅ Test on tablet viewport
- ✅ Test on desktop
- ✅ Verify auto-scroll works
- ✅ Test keyboard shortcuts (Enter to send)

#### Loading States
- ✅ Verify typing indicator appears while loading
- ✅ Verify input is disabled during loading
- ✅ Verify error messages display properly

---

### 8. Integration Tests

#### API Integration
- ✅ Verify Groq API calls work
- ✅ Verify Google Sheets API calls work
- ✅ Test with invalid API keys (should show error)
- ✅ Test with invalid Sheet ID (should show error)

#### Data Accuracy
- ✅ Verify responses match Google Sheet data exactly
- ✅ Test that property names are matched correctly
- ✅ Verify field mappings work (WiFi, parking, etc.)
- ✅ Test fuzzy matching for property names

---

## 🎯 Priority Test Checklist

Before deploying, ensure these critical tests pass:

### Must Pass (Critical)
- [ ] "What's the WiFi password at Unit 1?" → Returns actual WiFi from sheet
- [ ] "Which properties have pools?" → Returns list from sheet data
- [ ] "Which property is a mansion?" → Returns properties with "mansion" style
- [ ] Quick Actions appear on initial load
- [ ] Property Cards render for list responses
- [ ] Dark mode toggle works and persists
- [ ] Messages stream in with animation
- [ ] Smart suggestions appear after queries

### Should Pass (Important)
- [ ] All dataset query types work
- [ ] Error messages are user-friendly
- [ ] Mobile responsive design works
- [ ] Loading states display correctly
- [ ] Auto-scroll works properly

### Nice to Have (Enhancement)
- [ ] Complex multi-part queries handled
- [ ] Comparison queries work
- [ ] Context-aware follow-ups work perfectly

---

## 📝 Testing Instructions

### Local Testing
```bash
cd deploy
npm install
npx vercel dev
# Open http://localhost:3000
```

### Production Testing
1. Deploy to Vercel
2. Open deployed URL
3. Run through priority test checklist
4. Test on different devices/browsers

### Automated Testing (Future)
Consider adding:
- Unit tests for intent extraction
- Unit tests for field resolution
- Integration tests for API endpoints
- E2E tests with Playwright/Cypress

---

## 🐛 Known Issues to Watch For

1. **Property Name Matching**: Ensure fuzzy matching handles variations
2. **Field Mapping**: Verify all field types resolve correctly
3. **Sheet Caching**: Test that cache refreshes after 10 minutes
4. **Error Handling**: Ensure graceful error messages
5. **Streaming**: Verify streaming doesn't break on long responses

---

## 📊 Test Results Template

```
Date: [DATE]
Tester: [NAME]
Environment: [Local/Production]
URL: [URL]

Results:
- Property Queries: [X/Y passed]
- Dataset Queries: [X/Y passed]
- New Features: [X/Y passed]
- Edge Cases: [X/Y passed]
- Performance: [X/Y passed]

Issues Found:
1. [Issue description]
2. [Issue description]

Notes:
[Additional observations]
```

---

## 🚀 Next Steps After Testing

1. Fix any critical issues found
2. Document any limitations
3. Update user documentation if needed
4. Deploy to production
5. Monitor error logs in Vercel dashboard

