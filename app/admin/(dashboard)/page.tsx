import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  FileText,
  FolderKanban,
  MessageSquare,
  TrendingUp,
  Clock,
  Plus,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const stats = [
    {
      title: "Projects",
      value: "12",
      icon: FolderKanban,
      trend: "+15%",
      description: "2 new this month",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      gradient: "from-blue-500/10 to-transparent",
    },
    {
      title: "Blog Posts",
      value: "24",
      icon: FileText,
      trend: "+8%",
      description: "Weekly target met",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      gradient: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Inquiries",
      value: "07",
      icon: MessageSquare,
      trend: "-12%",
      description: "3 pending response",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      gradient: "from-orange-500/10 to-transparent",
    },
    {
      title: "Visits",
      value: "1,284",
      icon: TrendingUp,
      trend: "+24%",
      description: "New record today!",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      gradient: "from-violet-500/10 to-transparent",
    },
  ];

  const activities = [
    {
      id: 1,
      type: "project",
      title: "E-commerce Redesign",
      action: "moved to",
      status: "Completed",
      time: "2h ago",
      icon: CheckCircle2,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      id: 2,
      type: "blog",
      title: "Mastering React Server Components",
      action: "published",
      time: "5h ago",
      icon: Zap,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      id: 3,
      type: "contact",
      title: "New message from Sarah J.",
      action: "received",
      time: "Yesterday",
      icon: MessageSquare,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Admin Control Panel</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Ariel</h1>
          <p className="text-muted-foreground"> {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex border-border/60">
            Download Report
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-md shadow-primary/20">
            <Plus className="mr-2 h-4 w-4" /> New Content
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden border-border/50 group transition-all duration-300 hover:shadow-lg hover:border-primary/20">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} -mr-16 -mt-16 rounded-full transition-transform duration-500 group-hover:scale-150`} />
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{stat.title}</span>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Activity Feed */}
        <Card className="lg:col-span-8 border-border/50">
          <CardHeader className="border-b border-border/40 bg-muted/5 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
                <CardDescription>Your portfolio updates in real-time</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-xs h-8">
                View all activity <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-8">
              {activities.map((item) => (
                <div key={item.id} className="group relative flex items-start gap-4">
                  <div className={`mt-1.5 h-10 w-10 rounded-xl ${item.bgColor} flex items-center justify-center shrink-0 shadow-sm border border-black/5`}>
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">
                        {item.title}
                      </p>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground lowercase">
                        {item.action}
                      </span>
                      {item.status && (
                        <Badge variant="secondary" className="px-1.5 py-0 text-[10px] bg-emerald-500/10 text-emerald-600 border-none">
                          {item.status}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & System Info */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-border/50 overflow-hidden">
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Plus className="h-4 w-4" /> Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid gap-3">
              <Button variant="outline" className="w-full justify-between group hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all font-medium">
                Add New Project <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </Button>
              <Button variant="outline" className="w-full justify-between group hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all font-medium">
                Write Blog Post <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </Button>
              <Button variant="outline" className="w-full justify-between group hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all font-medium">
                Upload Media <Plus className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-muted/40 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Server Uptime</p>
                  <p className="text-sm font-bold">99.9% Reliable</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground tracking-tighter">
                  <span>Storage Usage</span>
                  <span>45%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden border border-black/5">
                  <div className="h-full w-[45%] bg-primary shadow-[0_0_8px_rgba(var(--primary),0.5)] transition-all duration-1000" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
