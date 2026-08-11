'use client';
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Package, Award, AlertCircle, CheckCircle2 } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Pickup Scheduled Successfully",
      message: "Your pickup #REV-8492 for 3 items has been scheduled for tomorrow at 10:00 AM.",
      time: "2 hours ago",
      type: "success",
      icon: CheckCircle2,
      read: false,
    },
    {
      id: 2,
      title: "Driver is on the way",
      message: "Ravi Kumar is 15 minutes away from your location.",
      time: "Yesterday, 14:30",
      type: "info",
      icon: Bell,
      read: true,
    },
    {
      id: 3,
      title: "Points Awarded!",
      message: "You have earned 150 points for your recent recycling contribution.",
      time: "Oct 10, 2026",
      type: "accent",
      icon: Award,
      read: true,
    },
    {
      id: 4,
      title: "Action Required: Update Address",
      message: "Please update your default address for future pickups to avoid delays.",
      time: "Oct 8, 2026",
      type: "warning",
      icon: AlertCircle,
      read: true,
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader 
        title="Notifications" 
        description="Stay updated on your pickups, rewards, and platform alerts."
      />

      <div className="space-y-4">
        {notifications.map((notif) => (
          <Card 
            key={notif.id} 
            className={`p-5 flex gap-4 transition-colors ${notif.read ? 'opacity-80 hover:opacity-100' : 'border-accent/40 bg-accent/5'}`}
          >
            <div className="mt-1">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                notif.type === 'success' ? 'bg-success/20 text-success' :
                notif.type === 'accent' ? 'bg-accent/20 text-accent' :
                notif.type === 'warning' ? 'bg-warning/20 text-warning' :
                'bg-info/20 text-info'
              }`}>
                <notif.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-semibold ${!notif.read ? 'text-foreground' : 'text-foreground/90'}`}>
                  {notif.title}
                </h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                  {notif.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {notif.message}
              </p>
              {!notif.read && (
                <Badge variant="info" size="sm">New</Badge>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
