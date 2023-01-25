import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/images/Logo.png'
import Ratio from 'public/images/Ratio.png'
import Kaleidor from 'public/images/Kaleidor.png'
import Shade from 'public/images/Shade.png'
import Splitz from 'public/images/Splitz.png'
import King from 'public/images/KingOfEther.png'
import Duffle from 'public/images/Duffle.png'

const Projects = () => {
	return (
		<div className="relative flex flex-col sm:flex-row justify-center font-Mono min-h-screen bg-[#05061D] sm:items-center py-4 sm:pt-0">
			<section className="text-white body-font max-w-md sm:max-w-6xl">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col font-Mono text-center w-full space-y-5">
						<h1 className="tracking-[.4em] text-md font-bold">PROJECTS</h1>
						<h1 className="tracking-[.4em] text-[.8em] ">LITTLE IDEAS, BIG PROJECTS.</h1>
					</div>
					{/* FORMAT BELOW FOR SINGLE ITEM W/NO PIC */}
					{/* <div className="p-4 lg:w-6/12 mt-20">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<h1 className="tracking-[.4em]  text-[.8em] r">LATTER</h1>

									<p className="text-[.8em] leading-6 h-22  ">
										Mini-implementation of Fractional Protocol. Ratio is a protocol that enables
										collective ownership and governance of one or more NFTs.
									</p>
									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/latter">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div> */}
					<div className="flex flex-col lg:flex-row items-center justify-center  space-y-20 lg:space-x-32">
						<div className="p-4 lg:w-6/12 mt-20">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<h1 className="tracking-[.4em] text-[.8em] font-normal">LATTER</h1>

									<p className="text-[.8em] leading-6 h-22  ">
										A mini-implementation of Affirm. Pay-in-four model is implemented, where 4
										payments are made every 2 weeks for an NFT. Mostly used for high ticket NFTs.
									</p>
									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/latter">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row space-y-20 lg:space-x-32">
						<div className="p-4 lg:w-6/12 mt-20">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5 ">
									{/* <div className="text-center flex-grow "> */}
									<Link href="http://ratio-flame.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={Ratio}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">RATIO</h1>

									<p className="mb-2 text-[.8em] leading-6 h-22 ">
										Mini-implementation of Fractional Protocol. Ratio is a protocol that enables
										collective ownership and governance of one or more NFTs.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/ratio-contracts.git">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-6/12 mt-10">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<Link href="https://kaleidor.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={Kaleidor}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">KALEIDOR</h1>

									<p className=" text-[.8em] leading-6 h-22  ">
										On-chain SVGs are pre-rendered so you see what you get. The price structure of
										the minted NFTs are based on VRGDAs.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/kaleidor-contracts">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row space-y-20 lg:space-x-32">
						<div className="p-4 lg:w-6/12 mt-20">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<Link href="https://shade-pi.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={Shade}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">SHADE</h1>

									<p className="text-[.8em] leading-6 h-22  ">
										111 NFTs, each one contains a different pattern with a white orb placed in
										random areas. On-chain NFTs are minted on frontend.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/shade-contracts">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-6/12 mt-10">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<Link href="https://splitz.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={Splitz}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">SPLITZ</h1>

									<p className="text-[.8em] leading-6 h-22  ">
										Mini-implementation of 0xSplitz, form groups of addresses. When formed, send
										funds to the group and funds are split automatically.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/splitz-contracts">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
										<Link href="https://twitter.com/willdphan/status/1592653086203731968?s=20&t=G-5bWljsM8H1CL05DOMm2w">
											<p className="decoration underline text-[.8em] cursor-pointer">Twitter</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row space-y-20 lg:space-x-32">
						<div className="p-4 lg:w-6/12 mt-20">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<Link href="https://duffle.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={Duffle}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">DUFFLE</h1>

									<p className="text-[.8em] leading-6 h-22  ">
										Quickly create groups or communities with Alchemy NFT API. Create proposals or
										solutions to these questions and vote.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/duffle-contracts">
											<p className="decoration underline text-[.8em] cursor-pointer">Contract</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-6/12 mt-10">
							<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
								<div className="text-center sm:w-[25em] space-y-5">
									<Link href="https://eth-kingdom.vercel.app/">
										<Image
											alt="team"
											width={200}
											height={125}
											className="flex-shrink-0 object-cover object-center sm:mb-0 cursor-pointer"
											src={King}
										/>
									</Link>
									<h1 className="tracking-[.4em] text-[.8em] font-normal">ETH KINGDOM</h1>

									<p className="text-[.8em] leading-6 h-22 ">
										Highest paying address gets their address ETH Domain listed on top of
										leaderboard. Users can deposit or withdraw funds if taken over.
									</p>

									<div className="flex justify-center space-x-10">
										<Link href="https://github.com/wdphan/eth-kingdom-contracts">
											<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Projects
