import { NextResponse } from 'next/server';

const AGENT_ROUTER_URL = process.env.NEXT_PUBLIC_AGENT_ROUTER_URL;
const AGENT_UID = process.env.NEXT_PUBLIC_AGENT_UID;
interface AgentResponse {
  clientID: string;
  status: string;
}

export async function POST(request: Request) {
  try {
    if (!AGENT_ROUTER_URL) {
      throw new Error('AGENT_ROUTER_URL is not configured');
    }

    const body = await request.json();
    const { channel_name } = body;

    const response = await fetch(`${AGENT_ROUTER_URL}/start_agent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        channel_name,
        uid: AGENT_UID,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to start conversation');
    }

    const data: AgentResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error starting conversation:', error);
    return NextResponse.json(
      { error: 'Failed to start conversation' },
      { status: 500 }
    );
  }
}
