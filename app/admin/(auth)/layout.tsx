import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <div className="absolute top-8 left-8">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </Button>
      </div>

      <div className="w-full flex justify-center p-4">
        {children}
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 text-center">
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Ariel Batoon Portfolio Admin
        </p>
      </div>
    </div>
  );
}
