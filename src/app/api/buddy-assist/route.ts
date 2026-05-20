import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Verify the Buddy Assist signature
function verifySignature(body: string, signature: string, secret: string): boolean {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return hash === signature;
}

// Mock knowledge base - replace with your actual data
const knowledgeBase = [
  {
    title: 'Interview Preparation',
    content: 'Our interview preparation courses cover technical interviews, behavioral questions, and HR screening. We provide mock interviews with expert feedback and personalized coaching.',
    url: '/interviews',
    category: 'services'
  },
  {
    title: 'Mentoring Programs',
    content: 'Connect with industry experts who have 10+ years of experience. Our mentors specialize in tech, product, design, startup, and data fields. Book sessions starting at $140/hour.',
    url: '/mentoring',
    category: 'services'
  },
  {
    title: 'Professional Coaching',
    content: 'Intensive coaching programs for leadership, communication, career transitions, and startup growth. Programs range from 6-16 weeks with personalized support.',
    url: '/coaching',
    category: 'services'
  },
  {
    title: 'Tool Marketplace',
    content: 'Access 1000+ premium career tools including Resume Builder Pro, Interview Question Bank, LinkedIn Optimizer, System Design Master, and more. Get money-saving bundles.',
    url: '/marketplace',
    category: 'services'
  },
  {
    title: 'Resume Builder Pro',
    content: 'AI-powered resume builder with ATS optimization. Create professional resumes with 50+ templates. Includes export options and LinkedIn integration.',
    url: '/marketplace',
    category: 'tools',
    price: '$49.99'
  },
  {
    title: 'Interview Question Bank',
    content: 'Database of 5000+ interview questions with detailed answers and video solutions. Includes difficulty levels and practice mode for comprehensive interview prep.',
    url: '/marketplace',
    category: 'tools',
    price: '$29.99'
  },
  {
    title: 'LinkedIn Optimizer',
    content: 'Optimize your LinkedIn profile to attract recruiters. Get profile audit, keyword optimization, headline suggestions, and analytics to land more interviews.',
    url: '/marketplace',
    category: 'tools',
    price: '$39.99'
  },
  {
    title: 'Pricing and Plans',
    content: 'Interview prep courses start at $29.99. Mentoring sessions range from $140-250/hour. Coaching programs cost $1,500-3,500. Tools available individually or in bundles.',
    url: '/marketplace',
    category: 'pricing'
  },
  {
    title: 'Success Stories',
    content: 'Our users have successfully landed roles at Google, Microsoft, and Apple. Average time to offer is 2-5 months with our comprehensive preparation programs.',
    url: '/',
    category: 'testimonials'
  },
  {
    title: 'How to Get Started',
    content: 'Create an account, browse our services, and book your first session or purchase tools. New users get personalized recommendations based on their career goals.',
    url: '/signup',
    category: 'getting-started'
  }
];

// Helper function to add CORS headers
function corsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-BuddyAssist-Signature');
  return response;
}

export async function GET() {
  // Health check endpoint for Buddy Assist
  const response = NextResponse.json(
    { status: 'ok', message: 'Buddy Assist endpoint is working' },
    { status: 200 }
  );
  return corsHeaders(response);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('X-BuddyAssist-Signature') || '';
    const secret = process.env.BUDDY_ASSIST_SECRET || 'your-secret-key';

    // Verify signature if secret is configured
    if (secret !== 'your-secret-key') {
      if (!verifySignature(body, signature, secret)) {
        const response = NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
        return corsHeaders(response);
      }
    }

    const data = JSON.parse(body);
    const { query, project_id } = data;

    // Validate project ID
    if (project_id !== '6a0cf9eeaddb33fba4b3ca4a') {
      const response = NextResponse.json(
        { error: 'Invalid project ID' },
        { status: 400 }
      );
      return corsHeaders(response);
    }

    // Enhanced search with intent detection
    const searchQuery = query.toLowerCase();
    const queryWords = searchQuery.split(/\s+/).filter((w: string) => w.length > 0);
    
    // Define keywords for different intents
    const keywordMap: { [key: string]: string[] } = {
      interview: ['interview', 'prep', 'questions', 'technical', 'behavioral', 'mock', 'screening'],
      mentoring: ['mentoring', 'mentor', 'expert', 'coach', 'guidance', 'experienced'],
      coaching: ['coaching', 'program', 'leadership', 'career', 'transition', 'startup'],
      tools: ['tool', 'tools', 'marketplace', 'builder', 'optimizer', 'system', 'design'],
      pricing: ['price', 'pricing', 'cost', 'free', 'money', 'pay', 'afford', 'bundle'],
      resume: ['resume', 'cv', 'profile', 'linkedin', 'atp'],
      questions: ['question', 'answer', 'database', 'video'],
      general: ['service', 'product', 'offer', 'have', 'do', 'help', 'what']
    };
    
    // Detect intent from query
    const detectedIntents: string[] = [];
    Object.entries(keywordMap).forEach(([intent, keywords]) => {
      if (keywords.some((keyword: string) => queryWords.includes(keyword))) {
        detectedIntents.push(intent);
      }
    });

    const results = knowledgeBase
      .map(item => {
        const titleLower = item.title.toLowerCase();
        const contentLower = item.content.toLowerCase();
        let score = 0;
        
        // Exact phrase match
        if (titleLower.includes(searchQuery)) score += 15;
        if (contentLower.includes(searchQuery)) score += 10;
        
        // Word-based matching
        queryWords.forEach((word: string) => {
          if (word.length > 2) {
            if (titleLower.includes(word)) score += 5;
            if (contentLower.includes(word)) score += 2;
          }
        });
        
        // Intent-based matching
        detectedIntents.forEach(intent => {
          const itemTitle = titleLower;
          const itemContent = contentLower;
          const itemCategory = item.category?.toLowerCase();
          
          if (intent === 'interview' && (itemTitle.includes('interview') || itemCategory === 'tools')) score += 4;
          if (intent === 'mentoring' && (itemTitle.includes('mentor') || itemCategory === 'services')) score += 4;
          if (intent === 'coaching' && itemTitle.includes('coaching')) score += 4;
          if (intent === 'tools' && (itemCategory === 'tools' || itemTitle.includes('marketplace'))) score += 4;
          if (intent === 'pricing' && (itemCategory === 'pricing' || itemContent.includes('price') || itemContent.includes('cost'))) score += 6;
          if (intent === 'resume' && (itemTitle.includes('resume') || itemTitle.includes('linkedin'))) score += 5;
          if (intent === 'questions' && itemTitle.includes('question')) score += 5;
        });
        
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, detectedIntents.length > 0 ? 2 : 3)
      .map(({ item }) => ({
        title: item.title,
        content: item.content,
        url: item.url
      }));

    // If still no results, provide helpful suggestions
    const finalResults = results.length > 0 ? results : [
      {
        title: 'Our Main Services',
        content: 'We offer Interview Preparation, Mentoring Programs, Professional Coaching, and a Tool Marketplace. What would you like to know more about?',
        url: '/'
      }
    ];

    const response = NextResponse.json(
      {
        results: finalResults
      },
      { status: 200 }
    );
    return corsHeaders(response);
  } catch (error) {
    console.error('Buddy Assist API error:', error);
    const response = NextResponse.json(
      { 
        results: [],
        error: 'Failed to process query'
      },
      { status: 500 }
    );
    return corsHeaders(response);
  }
}

export async function OPTIONS() {
  const response = NextResponse.json({ status: 'ok' }, { status: 200 });
  return corsHeaders(response);
}
