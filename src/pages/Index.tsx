
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-800 mb-4 sm:text-5xl">
          Your Personal Photo Vault
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Securely store and organize your precious memories in one place
        </p>
        <Link to="/login">
          <Button size="lg" className="font-semibold">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
