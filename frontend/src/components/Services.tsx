import { CardInterface, BadgeInterface, ButtonInterface } from "../types";
import styles from '../styles/Services.module.css'; // Create and consolidate styles here

const Badge = ({ text, filled }: BadgeInterface) => {
  const filledClass = filled ? styles.filledBadge : "";
  return (
    <small className={`${styles.badge} uppercase ${filledClass}`}>{text}</small>
  );
};

const Button = ({ text, filled, type, href, icon }: ButtonInterface) => {
  const filledClass = filled ? styles.filledButton : "";
  return (
    <a href={href} className={`${styles.btn} ${styles[type.toLowerCase()]} ${filledClass}`}>
      <span>{text}</span>
      {icon}
    </a>
  );
};

const Card = ({ body, btn, title, badge, image, indicator, subtitle }: CardInterface) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
      {indicator && (
        <small className={styles.indicator}>{indicator}</small>
      )}
      {badge && (
        <Badge text={badge.text} filled={badge.filled} />
      )}
      {image && (
        <img src={image} alt="Random Image" className={styles.image} />
      )}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && (
          <small className={styles.subtitle}>{subtitle}</small>
        )}
      </div>
      <p className={styles.body}>{body}</p>
      <Button
        filled={btn.filled}
        type={btn.type}
        text={btn.text}
        href={btn.href}
        icon={btn.icon}
      />
    </article>
  );
};

export default Card;
