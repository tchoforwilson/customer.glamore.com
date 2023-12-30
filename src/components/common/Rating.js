import styles from './Rating.module.scss';

 const Rating = () => {
   return (
    <div className={styles['rating']}>
      <input type="radio" id="star5" name="rating" className={styles['input']} value="5" />
      <label for="star5" className={styles['label']}></label>
      <input type="radio" id="star4" name="rating" value="4" className={styles['input']} />
      <label for="star4" className={styles['label']}></label>
      <input type="radio" id="star3" name="rating" value="3" className={styles['input']} />
      <label for="star3" className={styles['label']}></label>
      <input type="radio" id="star2" name="rating" value="2" className={styles['input']} />
      <label for="star2" className={styles['label']}></label>
      <input type="radio" id="star1" name="rating" value="1" className={styles['input']} />
      <label for="star1" className={styles['label']}></label>
    </div>
   )
 }

export default Rating;
