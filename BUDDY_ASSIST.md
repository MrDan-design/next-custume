# Buddy Assist Integration

## Overview
CareerMentor now includes a Buddy Assist chat widget that provides intelligent customer support using a custom API connector.

## Configuration

### API Endpoint
- **URL:** `/api/buddy-assist`
- **Method:** `POST`
- **Project ID:** `6a0cf9eeaddb33fba4b3ca4a`
- **API Key:** `da_de4e93b6a195528aded94cb83ebb3a1594056b5f9bce70728de396290a286954`

### Environment Variables
```env
BUDDY_ASSIST_PROJECT_ID=6a0cf9eeaddb33fba4b3ca4a
BUDDY_ASSIST_API_KEY=da_de4e93b6a195528aded94cb83ebb3a1594056b5f9bce70728de396290a286954
BUDDY_ASSIST_SECRET=your-secret-key
```

## How It Works

1. **Widget Component** (`src/components/BuddyAssistWidget.tsx`)
   - Floating chat button in the bottom-right corner
   - Click to open/close the chat interface
   - Real-time message display with typing indicators
   - Result links for relevant content

2. **API Route** (`src/app/api/buddy-assist/route.ts`)
   - Handles requests from the Buddy Assist service
   - Searches through internal knowledge base
   - Returns results within 5 seconds
   - Validates project ID and signature

3. **Knowledge Base**
   - Pre-configured content about services, tools, pricing, and getting started
   - Easily extendable with more content
   - Plain text format for compatibility

## Features

✅ Real-time chat support
✅ Intelligent content search
✅ Quick links to relevant pages
✅ Conversation history
✅ Mobile responsive design
✅ Signature verification support
✅ Error handling

## Usage

The widget is automatically included on all pages. Users can:
1. Click the chat bubble in the bottom-right corner
2. Ask questions about services, tools, or getting started
3. Receive relevant answers with links to more information
4. Continue the conversation naturally

## API Response Format

### Request
```json
{
  "query": "How much does mentoring cost?",
  "project_id": "6a0cf9eeaddb33fba4b3ca4a",
  "timestamp": "2026-03-25T10:00:00Z"
}
```

### Response
```json
{
  "results": [
    {
      "title": "Mentoring Programs",
      "content": "Connect with industry experts starting at $140/hour...",
      "url": "/mentoring"
    }
  ]
}
```

## Customization

### Add More Content
Edit the `knowledgeBase` array in `src/app/api/buddy-assist/route.ts` to add more Q&A content.

### Change Widget Styling
Modify `src/components/BuddyAssistWidget.tsx` to customize colors, size, and position.

### Enable Signature Verification
Set a secure `BUDDY_ASSIST_SECRET` in `.env.local` for production deployments.

## Testing

Test the endpoint directly:
```bash
curl -X POST http://localhost:3000/api/buddy-assist \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What is CareerMentor?",
    "project_id": "6a0cf9eeaddb33fba4b3ca4a",
    "timestamp": "2026-03-25T10:00:00Z"
  }'
```

## Deployment

The widget works seamlessly on Vercel:
1. Add environment variables to Vercel project settings
2. Deploy with `git push`
3. Widget will be available at your deployment URL

## Support

For issues or questions about Buddy Assist integration, visit:
- Buddy Assist Documentation: https://docs.buddy-assist.ai
- CareerMentor Support: support@careermentor.com
