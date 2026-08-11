'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Smartphone, Camera, Calendar, CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewBookingPage() {
  const [step, setStep] = useState(1);
  const [devices, setDevices] = useState<{type: string, condition: string, image?: string, aiResult?: any}[]>([]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        {step > 1 ? (
          <button onClick={handleBack} className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : (
          <Link href="/app" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        )}
        <h1 className="text-2xl font-outfit font-medium tracking-tight">Schedule Pickup</h1>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/5 rounded-full z-0" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent rounded-full z-0 transition-all duration-300" 
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        />
        {[
          { num: 1, label: "Location", icon: MapPin },
          { num: 2, label: "Devices", icon: Smartphone },
          { num: 3, label: "AI Scan", icon: Camera },
          { num: 4, label: "Schedule", icon: Calendar },
          { num: 5, label: "Done", icon: CheckCircle2 }
        ].map((s) => (
          <div key={s.num} className="relative z-10 flex flex-col items-center gap-2 bg-background px-2">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 transition-colors ${step >= s.num ? 'border-accent bg-accent/10 text-accent' : 'border-white/10 bg-secondary/20 text-muted-foreground'}`}>
              <s.icon className="h-4 w-4" />
            </div>
            <span className={`text-xs font-medium ${step >= s.num ? 'text-white' : 'text-muted-foreground'}`}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mt-8 p-8 border border-white/5 rounded-3xl bg-secondary/10 min-h-[400px]">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium font-outfit">Pickup Location</h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-muted-foreground">Select saved address</label>
              <div className="p-4 border border-accent bg-accent/5 rounded-xl cursor-pointer">
                <div className="font-medium text-white flex items-center justify-between">
                  Home <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <div className="text-sm text-muted-foreground mt-1">123 Tech Park, Sector 4, Mumbai, 400001</div>
              </div>
              <Button variant="outline" className="w-full border-dashed border-white/20 h-14 rounded-xl">
                + Add new address
              </Button>
            </div>
            <div className="pt-6 flex justify-end">
              <Button onClick={handleNext} className="rounded-xl px-8 bg-accent text-accent-foreground hover:bg-accent/90">Continue</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium font-outfit">What are we picking up?</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Smartphone', 'Laptop', 'Tablet', 'Monitor', 'Cables', 'Other'].map(type => (
                <div key={type} className="p-4 border border-white/10 hover:border-accent/50 rounded-xl cursor-pointer bg-white/5 transition-colors">
                  <div className="font-medium">{type}</div>
                </div>
              ))}
            </div>
            <div className="pt-6 flex justify-end">
              <Button onClick={handleNext} className="rounded-xl px-8 bg-accent text-accent-foreground hover:bg-accent/90">Continue</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-medium font-outfit">AI Classification (Optional)</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">Upload a photo of your items to get a faster estimate and instantly classify hazardous materials.</p>
            <div className="h-48 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center text-muted-foreground hover:bg-white/5 transition-colors cursor-pointer">
              <Camera className="h-8 w-8 mb-2" />
              <span>Tap to capture or upload</span>
            </div>
            <div className="pt-6 flex justify-between">
              <Button variant="ghost" onClick={handleNext} className="text-muted-foreground">Skip this step</Button>
              <Button onClick={handleNext} className="rounded-xl px-8 bg-accent text-accent-foreground hover:bg-accent/90">Analyze & Continue</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium font-outfit">Choose a schedule</h2>
            <div className="grid grid-cols-3 gap-4">
              {['Tomorrow, 10 AM', 'Tomorrow, 2 PM', 'Oct 14, 10 AM'].map((time, i) => (
                <div key={time} className={`p-4 border rounded-xl cursor-pointer text-center ${i === 0 ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'}`}>
                  <div className="text-sm font-medium">{time}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 border border-white/10 rounded-2xl bg-black/20">
              <h3 className="font-medium mb-4 text-sm text-muted-foreground uppercase tracking-wider">Estimated Settlement</h3>
              <div className="flex justify-between items-center mb-2">
                <span>Pickup Fee</span>
                <span>₹50.00</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Estimated Value</span>
                <span className="text-accent">+ ₹120.00</span>
              </div>
              <div className="border-t border-white/10 my-4" />
              <div className="flex justify-between items-center font-medium">
                <span>Net Reward</span>
                <span className="text-accent">70 Points</span>
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <Button onClick={handleNext} className="rounded-xl px-8 bg-accent text-accent-foreground hover:bg-accent/90">Confirm Booking</Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6 text-center py-12">
            <div className="h-24 w-24 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-medium font-outfit">Booking Confirmed!</h2>
            <p className="text-muted-foreground max-w-md mx-auto">Your pickup ID is #REV-8492. Our driver will arrive at the scheduled time.</p>
            <div className="pt-8">
              <Link href="/app">
                <Button className="rounded-xl px-8 bg-white text-black hover:bg-white/90">Go to Dashboard</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
