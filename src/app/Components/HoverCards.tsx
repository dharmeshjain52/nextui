"use client"

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect"


export function HoverCards(){
    return(
        <div className="p-12">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-white font-bold text-xl">FEATURED</h2>
                    <p className="text-gray-400 text-2xl font-bold px-4 my-2">HOVER EFFECT ON CARDS</p>
                </div>
                <div>
                    <HoverEffect
                    items={projects}
                    />
                </div>
                <div className="text-center my-4">
               <Link href={'/'}>     
                <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                            View All
                </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "/",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "/",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "/",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "/",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "/",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "/ ",
    },
  ];
  