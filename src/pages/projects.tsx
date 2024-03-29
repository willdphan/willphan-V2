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
import Large from 'src/components/largefigure.js'
import Small from 'src/components/smallfigure.js'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Projects = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			// runs every time visibility changes
			entries.forEach(entry => {
				console.log(entry)
				if (entry.isIntersecting) {
					entry.target.classList.add('show')
				}
			})
		})

		const scrollElements = document.querySelectorAll('.scroll')
		scrollElements.forEach(el => observer.observe(el))
	}, [])

	return (
		<motion.div
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.3 }}
			className="flex flex-col sm:flex-row  font-Mono  bg-white  sm:pt-0"
		>
			<Link href="/">
				<svg
					className="absolute top-6 left-6 cursor-pointer"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" />
				</svg>
			</Link>
			<section className="container mx-auto flex min-h-screen sm:max-h-screen items-center  justify-center flex-col px-5 ">
				<div className="text-md text-black font-Mono text-center font-bold sm:fixed ">
					<div>
						<Small />
					</div>
					<div className="flex tracking-[.4em] text-sm items-center justify-center">
						<a className="animate-flash">I</a>
						<a className="animate-flash1">M</a>
						<a className="animate-flash2">A</a>
						<a className="animate-flash3">G</a>
						<a className="animate-flash4">I</a>
						<a className="animate-flash5">N</a>
						<a className="animate-flash4">A</a>
						<a className="animate-flash3">T</a>
						<a className="animate-flash2">I</a>
						<a className="animate-flash1">O</a>
						<a className="animate-flash">N</a>
					</div>

					<div className="w-[20rem] h-[18rem] -z-1">
						<Large />
					</div>
					<div className="flex tracking-[.4em] text-sm  items-center justify-center">
						<a className="animate-flash4">R</a>
						<a className="animate-flash5">E</a>
						<a className="animate-flash6">A</a>
						<a className="animate-flash7">L</a>
						<a className="animate-flash6">I</a>
						<a className="animate-flash5">T</a>
						<a className="animate-flash4">Y</a>
					</div>
				</div>
			</section>
			<section className="container px-5 py-24 mx-auto text-white bg-[#05061D]   body-font  sm:max-w-full">
				<div className="flex flex-col items-center">
					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
								<h1 className="tracking-[.4em] text-[.8em] font-normal">LATTER</h1>

								<p className=" text-[.8em] leading-6 h-22  ">
									A mini-implementation of Affirm. Pay-in-four model is implemented, where 4 payments
									are made every 2 weeks for an NFT. Mostly used for high ticket NFTs.
								</p>
								<div className="flex justify-center space-x-10">
									<Link href="https://github.com/wdphan/latter">
										<p className=" first-letter:decoration underline text-[.8em] cursor-pointer">
											Contracts
										</p>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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

								<p className=" text-[.8em] leading-6 h-22  ">
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

					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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
									On-chain SVGs are pre-rendered so you see what you get. The price structure of the
									minted NFTs are based on VRGDAs.
								</p>

								<div className="flex justify-center space-x-10">
									<Link href="https://github.com/wdphan/kaleidor-contracts">
										<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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
									111 NFTs, each one contains a different pattern with a white orb placed in random
									areas. On-chain NFTs are minted on frontend.
								</p>

								<div className="flex justify-center space-x-10">
									<Link href="https://github.com/wdphan/shade-contracts">
										<p className="decoration underline text-[.8em] cursor-pointer">Contracts</p>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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
									Mini-implementation of 0xSplitz, form groups of addresses. When formed, send funds
									to the group and funds are split automatically.
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

					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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
					<div className="p-4 w-full sm:w-10/12 mt-20">
						<div className="h-full flex sm:flex-row flex-col content-center items-center justify-center text-center sm:text-left text-white">
							<div className="scroll text-center sm:w-[25em] space-y-5">
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
									Highest paying address gets their address ETH Domain listed on top of leaderboard.
									Users can deposit or withdraw funds if taken over.
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
			</section>
		</motion.div>
	)
}

export default Projects
