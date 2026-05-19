'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/auth/login');
  }, [router]);

  return null;
}
