import Link from "next/link";
import { Mail } from "lucide-react";

export function StatusIndicator() {
  return (
    <div className="flex items-center">
      <Link rel="noopener noreferrer" target="_blank" className="flex items-center justify-center gap-1.5" href="mailto:info.arielbatoon@gmail.com">
        {/* Pulsing Indicator */}
        <div className="flex items-center gap-1 shrink-0 size-[1.1em]">
          <div className="relative size-[.9em]">
            <div className="absolute inset-0 animate-ping rounded-full bg-emerald-700/30"></div>
            <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-700/30"></div>
            <div className="absolute inset-[3px] rounded-full bg-emerald-700"></div>
          </div>
        </div>

        {/* Status Text with Hover Effect */}
        <div className="relative cursor-pointer overflow-hidden">
          <p className="group text-muted-foreground">
            <span className="group-hover:-translate-y-full font-semibold items-center text-emerald-700 flex flex-col transition-all duration-500 ease-out">
              Message me
              <span className="invisible h-0">Reach out</span>
            </span>
            <span className="group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-500 ease-out">
              <Mail className="mr-1 w-4 h-4" />
              Reach out
            </span>
          </p>
        </div>
      </Link>
    </div>
  )
}