import { createFileRoute } from '@tanstack/react-router'
import { Canvas } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Mesh } from 'three'

function Box(props: any) {
  const ref = useRef<Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function ThreeFiberDemo() {
  return (
    <div className="min-h-screen">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">React Three Fiber Demo</h1>
        <p className="mb-4 text-gray-600">
          Click on the cube to scale it, hover to change color
        </p>
      </div>
      
      <div className="h-96">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/demo/three-fiber')({
  component: ThreeFiberDemo,
})