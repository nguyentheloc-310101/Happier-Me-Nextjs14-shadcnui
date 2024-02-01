import { Footer } from '@/components/layout/Footer';
import { NavBar } from '@/components/layout/NavBar';

export default function ResLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <>{children}</>
      <Footer />
    </>
  );
}
