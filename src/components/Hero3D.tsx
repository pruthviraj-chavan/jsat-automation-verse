
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Database } from 'lucide-react';

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const importThree = async () => {
        try {
          // Dynamically import Three.js
          const THREE = await import('three');
          const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
          
          if (!canvasRef.current) return;

          // Set up scene
          const scene = new THREE.Scene();
          scene.background = new THREE.Color(0x1A1F2C);

          // Set up camera
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.z = 5;

          // Set up renderer
          const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
          });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(window.devicePixelRatio);

          // Add ambient light
          const ambientLight = new THREE.AmbientLight(0x404040, 1);
          scene.add(ambientLight);

          // Add directional light
          const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
          directionalLight.position.set(1, 1, 1);
          scene.add(directionalLight);

          // Add point lights
          const pointLight1 = new THREE.PointLight(0x8B5CF6, 2, 10);
          pointLight1.position.set(2, 2, 2);
          scene.add(pointLight1);

          const pointLight2 = new THREE.PointLight(0x0EA5E9, 2, 10);
          pointLight2.position.set(-2, -2, -2);
          scene.add(pointLight2);

          // Create group for all objects
          const group = new THREE.Group();
          scene.add(group);

          // Create objects
          const geometry1 = new THREE.BoxGeometry(1, 1, 1);
          const material1 = new THREE.MeshPhongMaterial({ 
            color: 0x8B5CF6,
            shininess: 100,
            specular: 0x444444 
          });
          const cube = new THREE.Mesh(geometry1, material1);
          cube.position.x = -1.5;
          group.add(cube);

          const geometry2 = new THREE.SphereGeometry(0.7, 32, 32);
          const material2 = new THREE.MeshPhongMaterial({ 
            color: 0x0EA5E9,
            shininess: 100,
            specular: 0x444444
          });
          const sphere = new THREE.Mesh(geometry2, material2);
          sphere.position.x = 1.5;
          group.add(sphere);

          const geometry3 = new THREE.TorusGeometry(0.7, 0.2, 16, 100);
          const material3 = new THREE.MeshPhongMaterial({ 
            color: 0xFFFFFF,
            shininess: 100,
            specular: 0x444444
          });
          const torus = new THREE.Mesh(geometry3, material3);
          torus.position.y = 1.5;
          group.add(torus);

          // Connect objects with lines
          const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8B5CF6 });
          
          const points1 = [];
          points1.push(new THREE.Vector3(-1.5, 0, 0));
          points1.push(new THREE.Vector3(0, 1.5, 0));
          
          const points2 = [];
          points2.push(new THREE.Vector3(1.5, 0, 0));
          points2.push(new THREE.Vector3(0, 1.5, 0));
          
          const lineGeometry1 = new THREE.BufferGeometry().setFromPoints(points1);
          const lineGeometry2 = new THREE.BufferGeometry().setFromPoints(points2);
          
          const line1 = new THREE.Line(lineGeometry1, lineMaterial);
          const line2 = new THREE.Line(lineGeometry2, lineMaterial);
          
          group.add(line1);
          group.add(line2);

          // Add controls
          const controls = new OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.enableZoom = false;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.5;

          // Handle resize
          const handleResize = () => {
            if (!canvasRef.current) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          };

          window.addEventListener('resize', handleResize);

          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            
            sphere.rotation.y += 0.01;
            
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.01;
            
            controls.update();
            renderer.render(scene, camera);
          };

          animate();

          // Cleanup
          return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
          };
        } catch (error) {
          console.error("Failed to load Three.js:", error);
          // Fallback to a plain div if Three.js fails to load
          if (canvasRef.current) {
            canvasRef.current.style.display = 'none';
          }
        }
      };

      importThree();
    }
  }, []);

  return (
    <div className="relative w-full h-screen hero-gradient overflow-hidden">
      {/* 3D Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 grid-pattern opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <Cpu size={24} className="text-jspurple" />
            <span className="text-jspurple font-medium">Innovation & Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            At The Heart Of Your <span className="gradient-text">Innovation</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            JSat is a global technology company with over a decade of experience, specializing in automation, 
            IT/OT convergence, and compliance to expedite your transition to Industry 4.0 and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-jspurple hover:bg-jspurple/90">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-jspurple text-jspurple hover:bg-jspurple/10">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3">
              <Terminal className="text-jspurple" />
              <span>Process Control</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3">
              <Database className="text-jspurple" />
              <span>IT/OT Convergence</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3">
              <Cpu className="text-jspurple" />
              <span>Lab Automation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
