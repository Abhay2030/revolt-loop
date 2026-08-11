import React from 'react';
import { EsgReportService } from '@/services/esg/EsgReportService';
import * as motion from 'framer-motion/client';

export default async function EsgReportsPage() {
  const organizationId = 'org-123';
  
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 1);

  const metrics = await EsgReportService.generateReport(organizationId, startDate, endDate);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <motion.div 
      className="p-8 max-w-7xl mx-auto space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-outfit font-bold tracking-tight text-white">ESG & Scope 3 Reporting</h1>
          <p className="text-zinc-400 mt-2">Enterprise compliance and material recovery analytics.</p>
        </div>
        <button className="bg-[#00FF66] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#00cc52] transition-colors">
          Export CSV Report
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="CO2 Avoided" value={`${metrics.co2AvoidedKg.toLocaleString()} kg`} subtitle="Scope 3 Emissions Offset" />
        <MetricCard title="Landfill Diverted" value={`${metrics.landfillDivertedKg.toLocaleString()} kg`} subtitle="E-waste properly processed" />
        <MetricCard title="Devices Recycled" value={metrics.totalDevicesRecycled.toLocaleString()} subtitle="Secure chain of custody verified" />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all">
          <h3 className="text-xl font-semibold text-white mb-4">Raw Materials Recovered (Urban Mining)</h3>
          <div className="space-y-4">
            <MaterialRow name="Copper" amount={`${metrics.materialsRecovered.copperGrams.toLocaleString()} g`} color="bg-orange-500" width="w-[80%]" />
            <MaterialRow name="Gold" amount={`${metrics.materialsRecovered.goldGrams.toLocaleString()} g`} color="bg-yellow-400" width="w-[10%]" />
            <MaterialRow name="Lithium" amount={`${metrics.materialsRecovered.lithiumGrams.toLocaleString()} g`} color="bg-blue-400" width="w-[40%]" />
            <MaterialRow name="High-Grade Plastic" amount={`${metrics.materialsRecovered.plasticGrams.toLocaleString()} g`} color="bg-zinc-400" width="w-[100%]" />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Cryptographic Compliance</h3>
            <p className="text-zinc-400 mb-6">
              All recycling certificates are anchored to the Polygon blockchain for immutable proof-of-recycling. 
              Ready for EU CSRD and SEC climate disclosure audits.
            </p>
          </div>
          <div className="bg-black p-4 rounded-lg font-mono text-xs text-[#00FF66] break-all border border-zinc-800">
            Latest Merkle Root: 0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MetricCard({ title, value, subtitle }: { title: string, value: string, subtitle: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-[#00FF66] hover:shadow-[0_0_15px_rgba(0,255,102,0.1)]">
      <h3 className="text-zinc-400 text-sm font-medium">{title}</h3>
      <div className="text-4xl font-bold text-white mt-2 font-outfit">{value}</div>
      <div className="text-[#00FF66] text-xs mt-2">{subtitle}</div>
    </div>
  );
}

function MaterialRow({ name, amount, color, width }: { name: string, amount: string, color: string, width: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-zinc-300">{name}</span>
        <span className="text-white font-medium">{amount}</span>
      </div>
      <div className="h-2 w-full bg-black rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${color} ${width}`}
          initial={{ width: 0 }}
          animate={{ width: width.replace('w-[', '').replace(']', '') }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
