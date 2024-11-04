"use client";
import { useState, useEffect } from 'react';

export default function ChatBox({ open, onClose }) {
    const CREATE_ASSISTANT_API = "/api/retrieveAssistant";
    const CREATE_THREAD_API = "/api/createThread";
    const ADD_MESSAGE_API = "/api/addMsg";
    const RUN_ASSISTANT_API = "/api/runAssistant";

    const [assistantId, setAssistantId] = useState(null);
    const [threadId, setThreadId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [activeRunId, setActiveRunId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const initializeAssistantAndThread = async () => {
            if (!assistantId) {
                await createAssistant();
            }

            if (!threadId && assistantId) {
                await createThread();
            }
        };

        if (open) {
            initializeAssistantAndThread();
        }
    }, [open, assistantId, threadId]);


    const createAssistant = async () => {
        try {
            const response = await fetch(CREATE_ASSISTANT_API, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setAssistantId(data.assistant.id);
        } catch (error) {
            console.error('Error creating assistant:', error);
        }
    };

    const createThread = async () => {
        try {
            const response = await fetch(CREATE_THREAD_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setThreadId(data.thread.id);
        } catch (error) {
            console.error('Error creating thread:', error);
        }
    };

    const addMessageToThread = async () => {
        try {
            const response = await fetch(ADD_MESSAGE_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ threadId, input }),
            });

            const data = await response.json();
            if (data.msg) {
                setMessages([...messages, data.msg]);
            } else {
                console.error('Failed to add message:', data.error);
            }
        } catch (error) {
            console.error('Error adding message to thread:', error);
        }
    };

    const runAssistant = async () => {
        try {
            const response = await fetch(RUN_ASSISTANT_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ threadId, assistantId }),
            });
            const data = await response.json();
            if (data.messages.runId) {
                setActiveRunId(data.messages.runId);
            }
            if (data.messages && data.messages.data) {
                const newAssistantMessages = data.messages.data
                    .filter((message) => message.role === 'assistant')
                    .map((message) => {
                        const cleanedContent = message.content
                            .map(item => item.type === 'text' ? item.text.value : '')
                            .join('');

                        return {
                            role: 'assistant',
                            content: cleanedContent,
                        };
                    });

                setMessages((prevMessages) => [
                    ...prevMessages,
                    ...newAssistantMessages.filter((newMsg) =>
                        !prevMessages.some((prevMsg) => prevMsg.content === newMsg.content)
                    ),
                ]);
            } else {
                console.log('No messages in response:', data);
            }
        } catch (error) {
            console.error('Error running assistant:', error);
            setMessages(prevMessages => [
                ...prevMessages,
                { role: 'assistant', content: 'Failed to get a response from the assistant.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const checkActiveRun = async () => {
        if (!activeRunId) return false;

        try {
            const response = await fetch(`${GET_RUN_STATUS_API}?runId=${activeRunId}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            return data.run.status === 'active';
        } catch (error) {
            console.error('Error checking run status:', error);
            return false;
        }
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!assistantId || !threadId) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        addMessageToThread();

        runAssistant();

        setInput('');
    };

    return (
        <div className={`fixed bottom-2 right-0 z-10 w-full max-w-[500px] p-1 xl:right-24 ${open ? 'block' : 'hidden'}`}>
            <button onClick={onClose} className="mb-1 ms-auto block">
                <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
            </button>
            <div className="flex h-[600px] flex-col rounded bg-current border shadow-xl">
                <div className="h-full overflow-y-auto p-3">
                    {isLoading && <div className="text-center text-gray-500">Assistant is typing...</div>}
                    {messages.map((msg, index) => (
                        <div key={msg.id || index} className={`mb-3 ${msg.role === 'assistant' ? 'text-blue-500' : 'text-white'}`}>
                            <div><strong>{msg.role === 'assistant' ? 'Assistant' : 'You'}</strong></div>
                            <div className="whitespace-pre-wrap">
                                {typeof msg.content === 'string' ? (
                                    msg.content
                                ) : Array.isArray(msg.content) ? (
                                    msg.content.map((item, idx) => {
                                        if (item.type === 'text') {
                                            return <p key={idx}>{item.text.value}</p>;
                                        }
                                        return null;
                                    })
                                ) : (
                                    <p>{msg.content.text?.value || 'Invalid content format'}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSendMessage} className="m-3 flex gap-1">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Please ask your question"
                        className="text-white w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-500"
                    />
                    <button type="submit" className="inline-flex items-center rounded-lg bg-blue-card hover:bg-blue-800 px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 duration-200 whitespace-nowrap">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}