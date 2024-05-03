'use client'

import Body from '@/components/body/Body'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Header from '@/components/header/Header'
// Turn off load css file when refresh
config.autoAddCss = false

export default function Home() {
    return (
        <div>
            <div className="mb-16">
                <Header />
            </div>
            <Body />
        </div>
    )
}
