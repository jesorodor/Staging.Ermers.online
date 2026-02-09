'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function EMonogram() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useFrame((state) => {
    if (!meshRef.current) return
    
    // Slow rotation
    meshRef.current.rotation.y += 0.002
    
    // Mouse parallax (subtle)
    const targetX = mousePos.x * 0.1
    const targetY = mousePos.y * 0.1
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05
    meshRef.current.rotation.z += (targetX - meshRef.current.rotation.z) * 0.05
  })

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    })
  }

  return (
    <group ref={meshRef}>
      {/* Abstract "E" shape made from boxes */}
      {/* Vertical bar */}
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[0.4, 3, 0.4]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Top horizontal */}
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[2, 0.4, 0.4]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#60a5fa"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Middle horizontal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.6, 0.4, 0.4]} />
        <meshStandardMaterial 
          color="#93c5fd" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#93c5fd"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Bottom horizontal */}
      <mesh position={[0, -1.3, 0]}>
        <boxGeometry args={[2, 0.4, 0.4]} />
        <meshStandardMaterial 
          color="#60a5fa" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#60a5fa"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
      <EMonogram />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={false}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  )
}
