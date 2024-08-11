import Link from "next/link";
import {Button} from './ui/moving-border'

export default function MainDisplay(){
    return (
        <div className="h-auto md:h-[40rem] w-full flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10">
            <div className="p-4 z-10 w-full text-center text-white">
                <h1
                className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master The NextJS UI</h1>
                <p
                className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >This UI is made using nextJS framework as an attempt to learn about the basics of nextJS</p>
                <div className="mt-4">
                    <Link href={"/courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black  text-white border-black"
                    >
                        Explore
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

