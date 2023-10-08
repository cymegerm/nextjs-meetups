import { Button } from '@/components/shadcn-ui/button';
import { useRouter } from 'next/navigation';

interface NavButtonProps {
  route: string;
  text: string;
}

const NavButton = ({ route, text }: NavButtonProps) => {
  const router = useRouter();

  return <Button onClick={() => router.push(route)}>{text}</Button>;
};

export default NavButton;
