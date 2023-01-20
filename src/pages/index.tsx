import { FC } from 'react'
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
					{/* <div className=" tracking-[.4em] text-center uppercase font-Didot font-normal text-white mb-[1.5em] z-99" */}
					{/* perfect */}
					<h1 className={styles.vertical}>τέλειο</h1>
					{/* imperfectly */}
					<h1 className={styles.vertical}>ατελώς</h1>
				</div>
				<div className="w-[20rem] h-[22rem] -z-1">
					<Figure />
				</div>
				<div className=" z-10 text-center font-Didot font-normal text-white">
					<h1 className="tracking-[.4em]">WILLIAM</h1>
					<h1 className="mt-1 tracking-[.4em]">PHAN</h1>
				</div>
			</section>
			<section className=" min-h-screen container mx-auto flex flex-col px-5 mt-24 sm:mt-0 py-24 items-center justify-center ">
				<div className=" z-10 text-center font-Didot font-normal text-white space-y-10">
					<Dropdown />
					<Link href="/projects">
						<h1 className="tracking-[.4em] text-[.8em] cursor-pointer">PROJECTS</h1>
					</Link>

					<Link href="https://frost-sloop-bbc.notion.site/Library-034fc60526034e6c85f1f4fa605095e7">
						<h1 className=" tracking-[.4em] text-[.8em] cursor-pointer">LIBRARY</h1>
					</Link>
					<Link href="/ratio">
						<h1 className=" tracking-[.4em] text-[.8em] cursor-pointer">
							<a href="https://twitter.com/willdphan"> TWITTER</a> |{' '}
							<a href="mailto:willdphan@gmail.com"> MAIL </a>
						</h1>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Home
