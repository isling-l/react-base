import * as React from 'react';
import Link from 'next/link';

type Props = {
  color: string;
  buttonBorder: string;
  logoWhite: boolean;
};

const Header: React.FunctionComponent<Props> = ({
  color,
  buttonBorder,
  logoWhite
}) => {
  const [fixed, setFixed] = React.useState(false);
  const offsetTop = React.useRef(32);

  const theme = {
    fixed: {
      position: 'fixed',
      bgColor: 'bg-white border-b border-gray-300',
      color: 'text-blue-600',
      paddingTop: '',
      buttonBorder: 'border-blue-500'
    },
    relative: {
      position: '',
      bgColor: '',
      color,
      paddingTop: 'pt-8',
      buttonBorder
    }
  };
  const style = fixed ? theme.fixed : theme.relative;

  const shouldFixed = () => {
    const { scrollY } = window;

    if (scrollY > offsetTop.current) {
      setFixed(true);
    }

    if (scrollY <= offsetTop.current) {
      setFixed(false);
    }
  };

  const handleScroll = () => {
    shouldFixed();
  };

  React.useEffect(() => {
    const headerContainer = document.getElementById('header-container');
    offsetTop.current = headerContainer ? headerContainer.offsetTop || 0 : 32;
    document.addEventListener('scroll', handleScroll);
    shouldFixed();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`h-0 w-full z-50 ${style.position}`}>
      <div className={style.bgColor}>
        <div className={`container mx-auto ${style.paddingTop}`}>
          <div
            className={`${style.color} flex items-center justify-between`}
            id='header-container'
          >
            <Link href='/'>
              <div className='brand flex cursor-pointer'>
                <img
                  src='/brand.png'
                  className={`object-scale-down float-left h-16 ${
                    logoWhite && !fixed ? 'logo-white' : ''
                  }`}
                  alt='logo'
                />
              </div>
            </Link>
            <div className='menu-bar flex'>
              <div>
                <Link href='/vi-sao-chon-doraemon'>
                  <a>Vì sao chọn Doraemon?</a>
                </Link>
              </div>
              <div>
                <Link href='/gioi-thieu'>
                  <a>Giới thiệu</a>
                </Link>
              </div>
              <div>
                <Link href='/dich-vu'>
                  <a>Dịch vụ</a>
                </Link>
              </div>
              <div>
                <Link href='/tuyen-dung'>
                  <a>Tuyển dụng</a>
                </Link>
              </div>
              <div>
                <Link href='/tin-tuc'>
                  <a>Tin tức</a>
                </Link>
              </div>
            </div>
            <div className='flex justify-end text-lg'>
              <a href='https://smartshipapp.com/b2b/drm/signin' target='blank'>
                <div className='btn btn-rounded px-4 py-2'>Đăng nhập</div>
              </a>
              <a
                href='https://smartshipapp.com/b2b/drm/register'
                target='blank'
              >
                <div
                  className={`btn btn-rounded px-6 py-2 border-2 font-semibold ${style.buttonBorder}`}
                >
                  Đăng ký
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
