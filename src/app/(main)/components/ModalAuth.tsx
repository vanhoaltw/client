'use client';

import { Loader2 } from 'lucide-react';
import { RiFacebookFill } from 'react-icons/ri';

import { useLogin } from '@/hooks/base/useAuth';

import GoogleLogin from '@/components/buttons/GoogleLogin';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import useAuthStore from '@/store/auth';

const ModalAuth = () => {
  const { doRequest: doLogin, isLoading } = useLogin();
  const { openedLogin, setOpenedLogin, setRequestLoading } = useAuthStore();

  const toggleOpen = (open: boolean) => {
    // if (isLoading) return;
    if (!open) {
      setRequestLoading(false);
    }
    setOpenedLogin(open);
  };

  return (
    <Dialog open={openedLogin} onOpenChange={(open) => toggleOpen(open)}>
      <DialogContent>
        {isLoading && (
          <div className='absolute flex h-full w-full select-none items-center justify-center bg-white/80'>
            <Loader2 className='h-8 w-8 animate-spin' />
          </div>
        )}
        <div className='text-center'>
          <p className='mb-3 text-2xl font-semibold leading-5 '>
            Đăng nhập vào Maoki
          </p>
          <p className='text-foreground/60 mt-2 leading-4'>
            Chào mừng bạn trở lại với Maoki
          </p>
        </div>

        <div className='mt-7 flex flex-col gap-2'>
          <GoogleLogin onSuccess={doLogin} />

          <Button
            // onClick={() => handleSignIn('facebook')}
            className='gap-3 !bg-[#4267B2] !text-white transition-transform hover:opacity-80 active:scale-95'
            variant='ghost'
            size='lg'
          >
            <RiFacebookFill size={18} />
            Tiếp tục với Facebook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAuth;
