import Link from "next/link";
import { BackgroundGradientComp } from "./BackgroundGradientComp";

export default function Cards(){
    return(
        <div className=" text-white">
            <div className="text-center">
                <div>
                    <h2 className=" text-gray-400 font-semibold tracking-wide uppercase text-2xl">FEATURED</h2>
                    <p className="my-6 text-3xl font-extrabold tracking-tight sm:text-4xl">Learn From Following Sources</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
                    <BackgroundGradientComp 
                    title="Next.js 15 RC" 
                    description="The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.
                    React RC
                    Caching defaults changes
                    Incremental Partial Prerendering adoption
                    next/after (Experimental)
                    New create-next-app design
                    Bundling external packages (Stable)"
                    buttontext="Learn More"
                    />
                    
                    <BackgroundGradientComp title="Next.js 14"
                    description="As we announced at Next.js Conf, Next.js 14 is our most focused release with:
                    Turbopack
                    53% faster local server startup
                    94% faster code updates
                    Server Actions (Stable)
                    Partial Prerendering (Preview)
                    Next.js Learn (New)"
                    buttontext="Learn More"/>
                    <BackgroundGradientComp title="How to Think About Security in Next.js"
                    description="React Server Components (RSC) in App Router is a novel paradigm that eliminates much of the redundancy and potential risks linked with conventional methods. Given the newness, developers and subsequently security teams may find it challenging to align their existing security protocols with this model."
                    buttontext="Learn More"/>
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/"} className="">
                    <button 
                    className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    View All
                    </button>                
                </Link>
            </div>
        </div>
    )
}
      