import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPENROUTER_API_KEY,
    defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000', // Đặt domain thật khi deploy
        'X-Title': 'Chatbot',
    },
})

export async function POST(req: Request) {
    try {
        const { message } = await req.json()
        console.log('message: ', message)

        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-3.5-turbo', // OpenRouter chấp nhận openai/gpt-4o hoặc openrouter/gpt-4o
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        })

        console.log("completion: ", completion)

        if (!completion.choices?.[0]?.message) {
            console.error('No message in choices:', completion)
            return NextResponse.json({ error: 'No response from model' }, { status: 500 })
        }

        return NextResponse.json({ reply: completion.choices[0].message })
    } catch (error: any) {
        console.error('❌ OpenRouter error:', error)

        return NextResponse.json({
            error: error?.message || 'Unknown error occurred',
        }, { status: 500 })
    }
}
