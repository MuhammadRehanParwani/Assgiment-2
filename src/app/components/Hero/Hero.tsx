
import styles from './hero.module.css';

const Hero = () => {
    return (
      <div className={styles.hero}>
        
        <div className={styles.content}>
          <h1 className={styles.title}>Hero</h1>       
           <button className={styles.cta}>Learn More</button> 
        </div>
      </div>
    );
  };
  
  export default Hero;