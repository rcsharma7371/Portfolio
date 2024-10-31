import { easeInOut, motion } from "framer-motion";
import "./Hero.css";
export default function Motion({component:Component,direction}) {

  return (
    <>
      <motion.div
      variants={{
        visible: { opacity: 1, x:0,y:0  }, // Final position
        hidden: { opacity: 0, x:direction.x,y:direction.y} // Start from the left
        
      }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease : 'easeInOut'  }}
        
        
      >
        {/* {console.log(direction.x)} */}
        <Component />
        
      </motion.div>
    </>
  );
}
