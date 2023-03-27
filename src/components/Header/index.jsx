import style from './Header.module.scss';

const Header = ({ className, color }) => {
  return (
    <div className={`${style.header} ${className} ${style[color]}`}>
      <a href="https://turkishairlines.com/">turkishairlines.com</a>
      <div>
        search<b>Flight Challenge</b>
      </div>
    </div>
  );
};

export { Header };
