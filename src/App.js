import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
          className="flex h-full w-full items-center justify-center bg-white"
        >
          <img src="/nike-logo.png" alt="" className="w-80" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -650, x: -650 }}
        animate={{ y: 0, x: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 1,
          delay: 1.5,
        }}
        className="absolute top-0 left-0 right-0 h-full w-full"
      >
        <img src="/bg-blur-cp.png" alt="" className="h-full w-full scale-[2]" />
      </motion.div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 3.3,
            }}
            className="mr-80 mb-72 text-9xl font-black italic tracking-widest text-white"
          >
            NIKE
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 3.3,
            }}
            className="ml-80 mt-96 text-9xl font-black italic tracking-widest text-white"
          >
            ZOOM
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{ scale: 4, opacity: 0, rotate: 20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{
            ease: 'easeInOut',
            type: 'spring',
            duration: 2.2,
            delay: 3.3,
          }}
          className="flex h-full w-full items-center justify-center"
        >
          <img src="/shoes.png" alt="" className="mr-10 w-[1150px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
