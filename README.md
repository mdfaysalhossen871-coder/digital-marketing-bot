# Digital Marketing Bot — MVP Starter

বাংলা-ভিত্তিক AI marketing dashboard + Chrome Extension starter.

## MVP scope
- Product/category/group management starter UI
- AI post/image generation placeholders (API integration required)
- Campaign queue and posting status tracking
- Pending approval reminders/status tracking
- Chrome Extension draft assistant (does not auto-submit or repeatedly post)
- FastAPI backend starter

## Run locally
### Backend
```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
API: http://127.0.0.1:8000/docs

### Dashboard
```bash
cd dashboard
npm install
npm run dev
```
Open http://localhost:3000

### Chrome Extension
1. Open `chrome://extensions`
2. Enable Developer mode
3. Choose Load unpacked
4. Select the `extension` folder

## Important platform note
Facebook Group publishing capabilities depend on Meta's current APIs, permissions, and each group's rules. This starter intentionally does not automate submitting posts to groups, bypass moderation, or repeatedly submit "Admin approve". The extension prepares/copies a draft; the user reviews and publishes through permitted Facebook UI features.

## Before production
- Add authentication and authorization
- Use PostgreSQL migrations
- Store secrets only in environment variables / secret manager
- Add a real AI provider for captions and image generation
- Add secure cloud object storage
- Add rate limits, audit logs, retry limits, and privacy controls
- Verify Meta policies and available publishing permissions
