import {
	useState,
	useCallback,
	useEffect,
	useRef,
} from "preact/hooks"

import cn from "classnames"
import style from "./style"

const Mun = ({altStyle=false}) => {
	const [visible, setVisible] = useState(-2)
	const updateVisibility = useCallback(() => {
		setVisible(visible+1)
	}, [visible])
	const	textureLoader = new THREE.TextureLoader()
	const normal = textureLoader.load("assets/images/mun_n.png", updateVisibility())
	const bump = textureLoader.load("assets/images/mun_d.png", updateVisibility())

	const container = useRef(null)
	let mun, scene, camera, renderer

	useEffect(() => {
		initScene()
		makeMun()

		update()
	}, [])

	const initScene = () => {
		scene = new THREE.Scene()
		camera = new THREE.PerspectiveCamera(60, 1, 1, 4000)
		camera.position.set(0, 0, 430)

		renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap
		renderer.toneMapping = THREE.ACESFilmicToneMapping

		renderer.setSize(400, 400)

		const key = new THREE.SpotLight(0xffffff, 8, 800, Math.PI/6, 0.2)
		key.position.set(-300, 0, 400)
		key.castShadow = true
		scene.add(key)

		const rim = new THREE.SpotLight(0xffffff, 8, 500, Math.PI/6, 0.1)
		rim.position.set(400, 0, -200)
		rim.castShadow = true
		scene.add(rim)

		container.current.appendChild(renderer.domElement)
	}

	const makeMun = () => {
		mun = new THREE.Mesh(
			new THREE.SphereGeometry(200, 128, 64),
			new THREE.MeshStandardMaterial({
				color: 0xfffdfa,
				roughness: 0.75,
				metalness: 0.1,

				displacementMap: bump,
				displacementScale: -40,
				displacementBias: 0,

				normalMap: normal,
			})
		)
		mun.castShadow = true
		mun.receiveShadow = true
		scene.add(mun)
	}

	const update = () => {
		requestAnimationFrame(update)

		mun.rotation.y -= 0.001
		mun.rotation.z -= 0.0005

		renderer.render(scene, camera)
	}

	return (
		<div
			ref={container}
			class={cn(style.mun, {
				[style.visible]: visible === 0,
				[style.dark]: altStyle,
			})}
			/>
	)
}

export default Mun