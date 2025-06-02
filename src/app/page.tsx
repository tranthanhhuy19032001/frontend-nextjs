'use client'

import Body from '@/components/body/Body'

import ChatbotWidget from '@/components/chatbot/ChatbotWidget'
import Header from '@/components/header/Header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// Turn off load css file when refresh
config.autoAddCss = false

export default function Home() {
    return (
        <div>
            <div className="mb-16">
                <Header />
            </div>
            <Body />
            <ChatbotWidget />
        </div>
    )
}
