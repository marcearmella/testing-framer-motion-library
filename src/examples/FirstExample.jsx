import { color, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
    odd: {
        color: '#c609ff',
        background: '#88ff09',
        transition: {
            duration: 1.5
        }
    },
    even: {
        color: '#88ff09',
        background: '#c609ff',
        transition: {
            duration: 0.5
        }
    }
}

function FirstExample() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="example_container">
            <motion.h1
                initial={{
                    y: 0,
                    color: '#fcff9d',
                    scale: 1
                }}
                animate={{
                    y: [10,20,10,0],
                    color: '#fff',
                    scale: 1.2
                }}
                transition={{
                    duration: 1
                }}
            >
                Hello World!
            </motion.h1>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <motion.div
                    className='cube-one'
                    animate={{
                        scale: [1, 1.4, 1.4, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ['20%', '20%', '50%', '50%', '20%']
                    }}
                    transition={{
                        duration: 2
                    }}
                >
                    <motion.div
                        className='cube-two'
                        variants={variants}
                        animate={counter % 2 == 0 ? 'even' : 'odd'}
                    >
                        {counter}
                    </motion.div>
                </motion.div>
                <motion.button 
                    className='counter' onClick={() => setCounter(counter => counter + 1)}
                    whileHover={{ 
                        color: '#fff',
                        backgroundColor: '#000'
                    }}
                    whileTap={{scale: 1.1}}
                >
                    +
                </motion.button>
            </div>
        </div>
    )
  }
  
  export default FirstExample