import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Search, MessageSquare, Trash2, Archive, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function MessagesAdminPage() {
  const messages = [
    {
      id: 1,
      name: "Sarah Jenkins",
      email: "sarah@example.com",
      subject: "Collaboration Opportunity",
      excerpt: "Hi Ariel, I saw your portfolio and was really impressed with your Next.js work. We're looking for...",
      date: "2h ago",
      isRead: false,
      isStarred: true
    },
    {
      id: 2,
      name: "Marcus Thorne",
      email: "m.thorne@design.co",
      subject: "Inquiry about Crypto Dashboard",
      excerpt: "Could you tell me more about the backend architecture you used for the crypto project? Specifically...",
      date: "Yesterday",
      isRead: true,
      isStarred: false
    },
    {
      id: 3,
      name: "Recruitment Team",
      email: "hr@techcorp.com",
      subject: "Job Application Update",
      excerpt: "Thank you for applying to the Senior Frontend Engineer position. We've reviewed your projects and...",
      date: "3 days ago",
      isRead: true,
      isStarred: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground italic text-sm">Review inquiries and contact for possible collaborations.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-border/40">
            <Archive className="mr-2 h-4 w-4" /> Archive All
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-3 space-y-2">
          <Button className="w-full justify-start font-bold bg-primary/10 text-primary border-none hover:bg-primary/20 transition-all">
            <Mail className="mr-3 h-4 w-4" /> Inbox
            <Badge className="ml-auto bg-primary text-primary-foreground border-none text-[10px]">1</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground font-medium">
            <Star className="mr-3 h-4 w-4" /> Starred
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground font-medium">
            <Archive className="mr-3 h-4 w-4" /> Archived
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground font-medium">
            <Trash2 className="mr-3 h-4 w-4" /> Trash
          </Button>
        </aside>

        <Card className="lg:col-span-9 border-border/40 overflow-hidden bg-card/30 backdrop-blur-sm">
          <CardHeader className="p-4 border-b border-border/40 bg-muted/5">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-10 h-10 border-border/40 bg-background text-xs" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border/40">
              {messages.map((msg) => (
                <div key={msg.id} className={`group flex items-start gap-4 p-4 hover:bg-primary/5 transition-all cursor-pointer ${!msg.isRead ? 'bg-primary/5 border-l-2 border-l-primary' : ''}`}>
                  <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                    <button className={`${msg.isStarred ? 'text-amber-500' : 'text-muted-foreground/30 hover:text-amber-500'}`}>
                      <Star className={`h-4 w-4 ${msg.isStarred ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className={`${!msg.isRead ? 'font-bold text-foreground' : 'font-medium text-muted-foreground'} text-sm truncate`}>
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase font-medium">{msg.date}</span>
                    </div>
                    <p className="text-sm font-semibold truncate leading-none mb-1">
                      {msg.subject}
                    </p>
                    <p className="text-xs text-muted-foreground italic line-clamp-1">
                      {msg.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
