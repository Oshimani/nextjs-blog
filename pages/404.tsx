import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <div className="container max-w-xl px-0 py-4 mx-auto mt-24 mb-24">
                <div className="flex flex-col items-center">
                    <div className="text-6xl">❗</div>
                    <h1 className="font-bold">404 - Go home, you're drunk!</h1>

                    <div className="text-2xl mt-6">
                        <Link href="/">
                            <a>🏠 ← 🏃 </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
