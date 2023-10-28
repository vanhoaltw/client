import { User } from 'lucide-react';
import Link from 'next/link';

import { useLogout } from '@/hooks/base/useAuth';

import Avatar from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import useAuthStore from '@/store/auth';

const UserDropdown = () => {
  const { user, setOpenedLogin } = useAuthStore();
  const { doRequest: doLogout } = useLogout();

  const avatar = `${user?.avatar ?? ''}`;
  const initial = `${user?.username?.charAt(0) ?? ''}`;

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className='rounded-full'>
          <Avatar
            style={{ height: 36, width: 36 }}
            src={avatar}
            className='bg-red-200'
          >
            {user ? (
              initial
            ) : (
              <User size={18} className='text-muted-foreground' />
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-52'>
          {!user ? (
            <DropdownMenuItem onClick={() => setOpenedLogin(true)}>
              Đăng nhập
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem asChild>
                <Link href='/account'>Tài khoản</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>Danh sách yêu thích</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Hợp tác với Maoki</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={doLogout}
                className='cursor-pointer !text-red-500 hover:!bg-red-50'
              >
                Đăng xuất
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;
