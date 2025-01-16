interface AgoraTokenData {
  token: string
  uid: string
  channel: string
}

interface ConversationPlaceholderProps {
  agoraData: AgoraTokenData | null
}

export default function ConversationPlaceholder({ agoraData }: ConversationPlaceholderProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Conversation Placeholder</h2>
      <p>The conversation component will be implemented here in the next step.</p>
      {agoraData && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Agora Connection Data:</h3>
          <p>UID: {agoraData.uid}</p>
          <p>Channel: {agoraData.channel}</p>
          <p className="truncate">Token: {agoraData.token}</p>
        </div>
      )}
    </div>
  )
}

