import Link from "next/link"


function Footer(){
    return(
        <footer>
            <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-8 px-4">
                <div
                className="w-[20rem]"
                >
                <h2 className="text-2xl font-bold text-slate-400">About Us</h2>
                <p className="overflow-hidden py-2 sm:py-4 text-lg text-gray-400">This is the About us section of the project which in turn is a part of the footer</p>
                </div>
                <div
                className="w-[20rem]"
                >
                <h2 className="text-2xl font-bold text-slate-400">Quick Links</h2>
                <ul className="py-2 sm:py-4 text-xl text-gray-400">
                    <Link href={"/"}>
                    <li>
                        Services
                    </li>
                    </Link>
                    <Link href={"/"}>
                    <li
                    className="my-2"
                    >
                        Products
                    </li>
                    </Link>
                    <Link href={"/"}>
                    <li
                    className="my-2"
                    >
                        Pricing
                    </li>
                    </Link>
                </ul>   
                </div>
                <div
                className="w-[20rem]"
                >
                <h1 className="text-2xl font-bold text-slate-400">Follow Us</h1>
                <div className="flex flex-col items-start justify-center text-xl text-gray-400 py-2 sm:py-4 gap-2">
                    <p>Mention</p>
                    <p>Your</p>
                    <p>Socials</p>
                    <p>Here</p>
                </div>
                </div>
                <div
                className=""
                >
                <h1 className="text-2xl font-bold text-slate-400">Contact Us</h1>
                <div className="flex flex-col items-start justify-center text-xl text-gray-400 py-2 sm:py-4 gap-2">
                    <p>City</p>
                    <p>Country,Pincode</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>
                </div>
            </div>
            <div
            className="text-lg text-slate-400 w-full text-center my-12"
            >
                   © 2024 Rights Reserved
            </div>
        </footer>
    )
}

export default Footer