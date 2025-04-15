
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

const Hero3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const floatingObjectsRef = useRef<HTMLDivElement>(null);

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
          scene.background = new THREE.Color(isDarkMode ? 0x1A1F2C : 0xf5f8ff);

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
            color: isDarkMode ? 0xFFFFFF : 0x333333,
            shininess: 100,
            specular: 0x444444
          });
          const torus = new THREE.Mesh(geometry3, material3);
          torus.position.y = 1.5;
          group.add(torus);

          // Connect objects with lines
          const lineMaterial = new THREE.LineBasicMaterial({ 
            color: isDarkMode ? 0x8B5CF6 : 0x6D28D9 
          });
          
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
  }, [isDarkMode]);

  // Parallax effect for floating 3D elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingObjectsRef.current) return;
      
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      floatingObjectsRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${isDarkMode ? 'hero-dark-gradient' : 'hero-light-gradient'}`}>
      {/* 3D Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 md:block hidden"
      />
      
      {/* Floating 3D objects for mobile view where Three.js might not work well */}
      <div 
        ref={floatingObjectsRef}
        className="absolute right-5 top-1/3 z-10 md:hidden"
      >
        <div className="relative w-64 h-64">
          <motion.div 
            className="absolute w-12 h-12 bg-jspurple rounded-lg"
            animate={{
              rotate: 360,
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div 
            className="absolute w-12 h-12 bg-jsaccent rounded-full"
            style={{ left: '60%', top: '20%' }}
            animate={{
              rotate: -360,
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div 
            className="absolute w-14 h-14 border-2 border-white dark:border-gray-300 rounded-full"
            style={{ left: '30%', top: '60%' }}
            animate={{
              rotate: 180,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-10 grid-pattern opacity-40"></div>
      
      {/* Animated gradient background circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-jspurple/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-jsaccent/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.div 
            className="flex items-center space-x-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Cpu size={24} className="text-jspurple" />
            <span className="text-jspurple font-medium">Innovation & Technology</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At The Heart Of Your <span className="gradient-text">Innovation</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            JSat is a global technology company with over a decade of experience, specializing in automation, 
            IT/OT convergence, and compliance to expedite your transition to Industry 4.0 and beyond.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-jspurple hover:bg-jspurple/90 shadow-lg shadow-jspurple/30">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-jspurple text-jspurple hover:bg-jspurple/10">
              Contact Sales
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/30 dark:hover:bg-white/20 transition duration-300">
              <Terminal className="text-jspurple" />
              <span className="text-gray-800 dark:text-white">Process Control</span>
            </div>
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/30 dark:hover:bg-white/20 transition duration-300">
              <Database className="text-jspurple" />
              <span className="text-gray-800 dark:text-white">IT/OT Convergence</span>
            </div>
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center space-x-3 hover:bg-white/30 dark:hover:bg-white/20 transition duration-300">
              <Cpu className="text-jspurple" />
              <span className="text-gray-800 dark:text-white">Lab Automation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;
