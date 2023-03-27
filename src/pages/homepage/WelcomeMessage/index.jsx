import style from './WelcomeMessage.module.scss';

const WelcomeMessage = () => {
  return (
    <div className={style.welcomeMessage}>
      <h2>Merhaba</h2>
      <h3>Nereyi keşfetmek istersiniz?</h3>
    </div>
  );
};

export { WelcomeMessage };
