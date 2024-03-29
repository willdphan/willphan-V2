import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { AsciiEffect } from 'three-stdlib'

// 3d figure

function Large() {
	return (
		<Canvas>
			<color attach="background" args={['black']} />
			<spotLight position={[10, 20, 10]} angle={0.3} penumbra={1} />
			<pointLight position={[-10, -10, -10]} />
			<Torusknot />
			<AsciiRenderer invert />
		</Canvas>
	)
}

// added p and q parameters which determine figure loops and intersections
function Torusknot(props, p, q) {
	const ref = useRef()
	const [clicked, click] = useState(false)
	const [hovered, hover] = useState(false)
	// useCursor(hovered)
	useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta / 2))
	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1.8}
			onClick={() => click(!clicked)}
			onPointerOver={() => hover(true)}
			onPointerOut={() => hover(false)}
		>
			<torusKnotGeometry
				args={[
					0.8,
					0.1,
					120,
					32,
					(p = 1), // added
					(q = 5), // added
				]}
			/>
			<meshStandardMaterial color="orange" />
		</mesh>
	)
}

// function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=%@#$', ...options }) {
function AsciiRenderer({ renderIndex = 1, characters = ' .:-+*=|||', ...options }) {
	// Reactive state
	const { size, gl, scene, camera } = useThree()

	// Create effect
	const effect = useMemo(() => {
		const effect = new AsciiEffect(gl, characters, options)
		effect.domElement.style.position = 'absolute'
		effect.domElement.style.top = '0px'
		effect.domElement.style.left = '0px'
		effect.domElement.style.color = 'black'
		effect.domElement.style.backgroundColor = 'white'
		effect.domElement.style.pointerEvents = 'none'
		return effect
	}, [characters, options.invert])

	// Append on mount, remove on unmount
	useEffect(() => {
		gl.domElement.parentNode.appendChild(effect.domElement)
		return () => gl.domElement.parentNode.removeChild(effect.domElement)
	}, [effect])

	// Set size
	useEffect(() => {
		effect.setSize(size.width, size.height)
	}, [effect, size])

	// Take over render-loop (that is what the index is for)
	useFrame(state => {
		effect.render(scene, camera)
	}, renderIndex)
}

export default Large
