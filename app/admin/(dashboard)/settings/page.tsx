import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Settings, Shield, Bell, Globe, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function SettingsAdminPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground italic text-sm">Update your personal information and application preferences.</p>
      </div>

      <div className="grid gap-8">
        {/* Profile Settings */}
        <Card className="border-border/40">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
              <User className="h-4 w-4 text-primary" />
              <CardTitle className="text-base font-bold">Profile Information</CardTitle>
            </div>
            <CardDescription className="text-xs italic">Customize how others see your public profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs uppercase font-bold tracking-widest text-muted-foreground/80">First Name</Label>
                <Input id="firstName" defaultValue="Ariel" className="bg-muted/30 border-border/40 text-sm h-10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs uppercase font-bold tracking-widest text-muted-foreground/80">Last Name</Label>
                <Input id="lastName" defaultValue="Batoon" className="bg-muted/30 border-border/40 text-sm h-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs uppercase font-bold tracking-widest text-muted-foreground/80">Email Address</Label>
              <Input id="email" defaultValue="admin@ariel.dev" className="bg-muted/30 border-border/40 text-sm h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-xs uppercase font-bold tracking-widest text-muted-foreground/80">Professional Bio</Label>
              <textarea
                id="bio"
                className="flex min-h-[100px] w-full rounded-md border border-border/40 bg-muted/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue="Full-stack developer with a passion for building high-performance web applications and beautiful user experiences."
              />
            </div>
          </CardContent>
          <CardFooter className="bg-muted/5 border-t border-border/40 flex justify-end py-3">
            <Button size="sm" className="font-bold text-[10px] uppercase tracking-widest">
              <Save className="mr-2 h-3.5 w-3.5" /> Save Changes
            </Button>
          </CardFooter>
        </Card>

        {/* Security Settings */}
        <Card className="border-border/40">
          <CardHeader>
            <div className="flex items-center gap-2 mb-1">
              <Shield className="h-4 w-4 text-primary" />
              <CardTitle className="text-base font-bold">Security</CardTitle>
            </div>
            <CardDescription className="text-xs italic">Manage your account security and authentication methods.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-sm font-bold">Password Management</p>
                <p className="text-xs text-muted-foreground">Last updated 12 days ago</p>
              </div>
              <Button variant="outline" size="sm" className="border-border/40 text-[10px] font-bold uppercase tracking-widest">
                Change Password
              </Button>
            </div>
            <Separator className="bg-border/40" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 tracking-tight">
              <div className="space-y-0.5">
                <p className="text-sm font-bold">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground italic">Add an extra layer of security to your account.</p>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-none px-2 py-0 text-[10px] uppercase font-black">
                Enabled
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
