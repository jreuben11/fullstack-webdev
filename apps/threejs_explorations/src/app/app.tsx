import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function RotatingBox() {
  return (
    <Box args={[1, 1, 1]} rotation={[0.5, 0.5, 0]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}

function BouncingSphere() {
  return (
    <Sphere args={[0.7, 32, 32]}>
      <meshStandardMaterial color="lightblue" wireframe />
    </Sphere>
  );
}

function SpinningTorus() {
  return (
    <Torus args={[0.7, 0.2, 16, 100]}>
      <meshStandardMaterial color="orange" />
    </Torus>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Three.js Explorations</h1>
        <p className="text-muted-foreground mb-8">
          Interactive 3D graphics experiments with React Three Fiber
        </p>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">

          {/* Large Featured Card - Spans 2 columns */}
          <Card className="lg:col-span-2 lg:row-span-2 overflow-hidden">
            <CardHeader>
              <CardTitle>Rotating Cube</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <Canvas camera={{ position: [3, 3, 3] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <RotatingBox />
                <OrbitControls />
              </Canvas>
            </CardContent>
          </Card>

          {/* Medium Card */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Wireframe Sphere</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <Canvas camera={{ position: [0, 0, 2] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <BouncingSphere />
                <OrbitControls />
              </Canvas>
            </CardContent>
          </Card>

          {/* Medium Card */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Torus Knot</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <Canvas camera={{ position: [0, 0, 2] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <SpinningTorus />
                <OrbitControls />
              </Canvas>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is a Three.js exploration workspace built with React Three Fiber,
                shadcn/ui, and Tailwind CSS. Each card contains an interactive 3D scene
                that you can rotate and explore using your mouse or touch.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500" />
                  <span className="text-sm">Click and drag to rotate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Scroll to zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm">Right-click drag to pan</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default App;
