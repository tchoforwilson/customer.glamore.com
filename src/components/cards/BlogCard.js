import styles from "./BlogCard.module.scss";

export default function ArticleCard({ article, className = "" }) {
  return (
    <article className={`${styles["blog-card"]} ${className}`}>
      <div className={styles["blog-card__inner"]}>
        <img
          src={article.image}
          alt={article.title}
          className={styles["blog-card__image"]}
        />
      </div>
      <div className={styles["blog-card__overlay"]}></div>
      <h3 className={styles["blog-card__title"]}>{article.title}</h3>
    </article>
  );
}
