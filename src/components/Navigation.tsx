
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-slate-800">
            PhotoVault
          </Link>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/photos" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Photos
                </Link>
                <Link to="/profile" className="text-slate-600 hover:text-slate-800 transition-colors">
                  Profile
                </Link>
                <Button
                  variant="ghost"
                  onClick={handleSignOut}
                  className="text-slate-600 hover:text-slate-800"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
