import Link from "next/link";
import Image from "next/image";

export function CardShowcase() {
  return (
    <div className="group h-full w-full transition-all duration-300 hover:translate-y-[-4px]">
      <Link href="#" className="flex flex-col h-full w-full rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-card-foreground/10">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image src="/media/placeholder.jpg" alt="Project 1" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow">
          <h3 className="text-sm font-medium text-foreground line-clamp-2">Everything you need to know about Ollama in 2024</h3>
        </div>
      </Link>
    </div>
  );
}