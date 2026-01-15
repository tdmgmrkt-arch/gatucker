import { NextRequest, NextResponse } from 'next/server';

const RECAPTCHA_SITE_KEY = '6LdK8EssAAAAAB-R5wUOej0apHMJrN4VhixbkJke';

interface RecaptchaAssessmentResponse {
  tokenProperties?: {
    valid: boolean;
    action?: string;
    invalidReason?: string;
  };
  riskAnalysis?: {
    score: number;
    reasons?: string[];
  };
  error?: {
    code: number;
    message: string;
    status: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { token, action } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA token is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RECAPTCHA_API_KEY;
    const projectId = process.env.RECAPTCHA_PROJECT_ID;

    if (!apiKey || !projectId) {
      console.error('Missing reCAPTCHA environment variables');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create assessment with reCAPTCHA Enterprise API
    const assessmentUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

    const assessmentResponse = await fetch(assessmentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token,
          siteKey: RECAPTCHA_SITE_KEY,
          expectedAction: action || 'submit',
        },
      }),
    });

    const assessmentData: RecaptchaAssessmentResponse = await assessmentResponse.json();

    // Check for API errors
    if (assessmentData.error) {
      console.error('reCAPTCHA API error:', assessmentData.error);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Check if token is valid
    if (!assessmentData.tokenProperties?.valid) {
      console.error('reCAPTCHA token invalid:', assessmentData.tokenProperties?.invalidReason);
      return NextResponse.json(
        { success: false, error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Check risk score (0.0 = likely bot, 1.0 = likely human)
    const score = assessmentData.riskAnalysis?.score ?? 0;

    if (score < 0.5) {
      console.warn('reCAPTCHA score too low:', score, assessmentData.riskAnalysis?.reasons);
      return NextResponse.json(
        { success: false, error: 'Verification failed - please try again' },
        { status: 400 }
      );
    }

    // reCAPTCHA passed
    return NextResponse.json({
      success: true,
      score
    });

  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
