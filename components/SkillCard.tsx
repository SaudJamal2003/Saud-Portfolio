import styles from '../style/SkillsPage.module.css';

interface SkillCardProps {
  name: string;
  logo: string;
}

const SkillCard = ({ name, logo }: SkillCardProps) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillLogo}>
        <img src={logo} alt={`${name} logo`} />
      </div> 
      <div className={styles.skillName}>{name}</div>
    </div>
  );
};

export default SkillCard;