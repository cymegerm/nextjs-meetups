import { Button } from '@/app/components/ui/button';

interface Props {
  route: string;
  text: string;
}

const NavButton = ({ route, text }: Props) => {
  const handleClick = () => {
    alert(route);
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default NavButton;
