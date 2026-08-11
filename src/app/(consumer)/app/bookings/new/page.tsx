'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Smartphone, Camera, Calendar, CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { motion, AnimatePresence } from "framer-motion";

export default function NewBookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const toggleDevice = (device: string) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices(prev => prev.filter(d => d !== device));
    } else {
      setSelectedDevices(prev => [...prev, device]);
    }
  };

  const steps = [
    { num: 1, label: "Location", icon: MapPin },
    { num: 2, label: "Devices", icon: Smartphone },
    { num: 3, label: "AI Scan", icon: Camera },
    { num: 4, label: "Schedule", icon: Calendar },
    { num: 5, label: "Done", icon: CheckCircle2 }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        {step > 1 && step < 5 ? (
          <button onClick={handleBack} className="p-2 hover:bg-surface-2 rounded-full transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
        ) : (
          <Link href="/app" className="p-2 hover:bg-surface-2 rounded-full transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        )}
        <PageHeader title="Schedule Pickup" className="mb-0" />
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between relative px-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-2 rounded-full z-0" />
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-accent rounded-full z-0 transition-all duration-500 ease-out" 
          style={{ width: `${((step - 1) / 4) * 100}%` }}
        />
        {steps.map((s) => (
          <div key={s.num} className="relative z-10 flex flex-col items-center gap-2 bg-background px-2">
            <motion.div 
              initial={false}
              animate={{ 
                backgroundColor: step >= s.num ? 'var(--accent-soft)' : 'var(--surface-2)',
                borderColor: step >= s.num ? 'var(--accent)' : 'var(--border)',
                color: step >= s.num ? 'var(--foreground)' : 'var(--muted-foreground)'
              }}
              className="h-10 w-10 rounded-full flex items-center justify-center border-2"
            >
              <s.icon className="h-4 w-4" />
            </motion.div>
            <span className={`text-xs font-medium ${step >= s.num ? 'text-foreground' : 'text-muted-foreground'}`}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <Card className="min-h-[400px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-medium font-[family-name:var(--font-outfit)]">Pickup Location</h2>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-muted-foreground">Select saved address</label>
                <div className="p-4 border border-accent bg-accent/5 rounded-xl cursor-pointer">
                  <div className="font-medium text-foreground flex items-center justify-between">
                    Home <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">123 Tech Park, Sector 4, Mumbai, 400001</div>
                </div>
                <Button variant="outline" className="w-full border-dashed border-border h-14 rounded-xl">
                  + Add new address
                </Button>
              </div>
              <div className="pt-6 flex justify-end">
                <Button onClick={handleNext} className="rounded-xl px-8">Continue</Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-medium font-[family-name:var(--font-outfit)]">What are we picking up?</h2>
              <div className="grid grid-cols-2 gap-4">
                {['Smartphone', 'Laptop', 'Tablet', 'Monitor', 'Cables', 'Other'].map(type => (
                  <div 
                    key={type} 
                    onClick={() => toggleDevice(type)}
                    className={`p-4 border rounded-xl cursor-pointer transition-colors ${
                      selectedDevices.includes(type) ? 'border-accent bg-accent/5' : 'border-border hover:border-accent/50 bg-surface-1'
                    }`}
                  >
                    <div className="font-medium flex justify-between items-center">
                      {type}
                      {selectedDevices.includes(type) && <CheckCircle2 className="h-4 w-4 text-accent" />}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-6 flex justify-end">
                <Button onClick={handleNext} disabled={selectedDevices.length === 0} className="rounded-xl px-8">Continue</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 text-center"
            >
              <h2 className="text-xl font-medium font-[family-name:var(--font-outfit)]">AI Classification (Optional)</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">Upload a photo of your items to get a faster estimate and instantly classify hazardous materials.</p>
              <div className="h-48 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-muted-foreground hover:bg-surface-2 transition-colors cursor-pointer">
                <Camera className="h-8 w-8 mb-2" />
                <span>Tap to capture or upload</span>
              </div>
              <div className="pt-6 flex justify-between">
                <Button variant="ghost" onClick={handleNext} className="text-muted-foreground">Skip this step</Button>
                <Button onClick={handleNext} className="rounded-xl px-8">Analyze & Continue</Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-medium font-[family-name:var(--font-outfit)]">Choose a schedule</h2>
              <div className="grid grid-cols-3 gap-4">
                {['Tomorrow, 10 AM', 'Tomorrow, 2 PM', 'Oct 14, 10 AM'].map((time, i) => (
                  <div key={time} className={`p-4 border rounded-xl cursor-pointer text-center ${i === 0 ? 'border-accent bg-accent/5' : 'border-border bg-surface-1'}`}>
                    <div className="text-sm font-medium">{time}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 border border-border rounded-2xl bg-surface-2">
                <h3 className="font-medium mb-4 text-sm text-muted-foreground uppercase tracking-wider">Estimated Settlement</h3>
                <div className="flex justify-between items-center mb-2">
                  <span>Pickup Fee</span>
                  <span>₹50.00</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Estimated Value</span>
                  <span className="text-accent">+ ₹120.00</span>
                </div>
                <div className="border-t border-border my-4" />
                <div className="flex justify-between items-center font-medium">
                  <span>Net Reward</span>
                  <span className="text-accent font-bold">70 Points</span>
                </div>
              </div>

              <div className="pt-6 flex justify-end">
                <Button onClick={handleNext} className="rounded-xl px-8">Confirm Booking</Button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center py-12"
            >
              <div className="h-24 w-24 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12" />
              </div>
              <h2 className="text-3xl font-medium font-[family-name:var(--font-outfit)]">Booking Confirmed!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">Your pickup ID is #REV-8492. Our driver will arrive at the scheduled time.</p>
              <div className="pt-8">
                <Link href="/app">
                  <Button variant="outline" className="rounded-xl px-8">Go to Dashboard</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
}
