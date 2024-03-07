import Body from '@/components/body/Body'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
// Turn off load css file when refresh
config.autoAddCss = false

export default function Home() {
    const isUserPage: boolean = true
    return (
        <div>
            <main className="flex justify-center">
                {isUserPage ? <Body /> : ''}
            </main>
        </div>
    )
}
