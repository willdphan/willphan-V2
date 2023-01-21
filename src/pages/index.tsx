import { FC, useRef } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Image from 'next/image'
import logo from 'public/images/Logo.png'
import styles from 'src/styles/vertical.module.css'
import Figure from 'src/components/figure.js'
import Link from 'next/link'
import Dropdown from 'src/components/LearningsDropdown'

const Home: FC = () => {
	return (
		<div className="relative flex flex-col sm:flex-row justify-center  bg-[#05061D] sm:items-center py-4 sm:pt-0">
			<section className="container mx-auto flex flex-col px-5  min-h-screen items-center justify-center ">
				<div className="text-center space-x-[-3em] flex">
					{/* perfect */}
					<h1 className={styles.vertical}>
						<a className="animate-flash">τ</a>
						<a className="animate-flash1">έ</a>
						<a className="animate-flash2">λ</a>
						<a className="animate-flash3">ε</a>
						<a className="animate-flash4">ι</a>
						<a className="animate-flash5">ο</a>
					</h1>

					{/* imperfectly */}
					<h1 className={styles.vertical}>
						<a className="animate-flash5">α</a>
						<a className="animate-flash4">τ</a>
						<a className="animate-flash3">ε</a>
						<a className="animate-flash2">λ</a>
						<a className="animate-flash1">ώ</a>
						<a className="animate-flash">ς</a>
					</h1>
				</div>
				<div className="w-[20rem] h-[22rem] -z-1">
					<Figure />
				</div>
				<div className=" z-10 text-center font-Didot font-normal text-white">
					<h1 className="tracking-[.4em]">
						<a className="animate-flash1">W</a>
						<a className="animate-flash2">I</a>
						<a className="animate-flash3">L</a>
						<a className="animate-flash4">L</a>
						<a className="animate-flash5">I</a>
						<a className="animate-flash6">A</a>
						<a className="animate-flash7">M</a>
					</h1>
					<h1 className="mt-1 tracking-[.4em]">
						<a className="animate-flash3">P</a>
						<a className="animate-flash2">H</a>
						<a className="animate-flash1">A</a>
						<a className="animate-flash">N</a>
					</h1>
				</div>
			</section>
			<section className=" min-h-screen container mx-auto flex flex-col px-5 mt-24 sm:mt-0 py-24 items-center justify-center ">
				<div className=" z-10 text-center font-Didot font-normal text-white space-y-10">
					<Dropdown />
					<Link href="/projects">
						<h1 className="tracking-[.4em] text-[.8em] cursor-pointer hover:underline">PROJECTS</h1>
					</Link>

					<Link href="https://frost-sloop-bbc.notion.site/Library-034fc60526034e6c85f1f4fa605095e7">
						<h1 className=" tracking-[.4em] text-[.8em] cursor-pointer hover:underline">LIBRARY</h1>
					</Link>

					<h1 className=" tracking-[.4em] text-[.8em] cursor-pointer ">
						<Link href="https://twitter.com/willdphan">
							<a className="hover:underline"> TWITTER</a>
						</Link>{' '}
						|{' '}
						<Link href="mailto:willdphan@gmail.com">
							<a className="hover:underline"> MAIL </a>
						</Link>
					</h1>
				</div>
			</section>
		</div>
	)
}

export default Home
