import React from 'react';
import { EprLedgerService } from '@/services/epr/EprLedgerService';

export default async function EprDashboardPage() {
  const oemId = 'oem-samsung';
  const ledger = await EprLedgerService.getOemLedger(oemId);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-outfit font-bold tracking-tight text-white">EPR Compliance Ledger</h1>
          <p className="text-zinc-400 mt-2">Extended Producer Responsibility tracking for {ledger.oemName}.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition-colors">
          Purchase Credits
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Regulatory Quota" value={`${ledger.regulatoryQuotaKg.toLocaleString()} kg`} color="text-white" />
        <MetricCard title="Fulfilled Quota" value={`${ledger.fulfilledQuotaKg.toLocaleString()} kg`} color="text-white" />
        <MetricCard title="Remaining Quota" value={`${ledger.remainingQuotaKg.toLocaleString()} kg`} color="text-red-400" />
        <MetricCard title="Compliance Status" value={`${ledger.compliancePercentage.toFixed(1)}%`} color="text-[#00FF66]" />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Available Market Credits</h3>
        <p className="text-zinc-400 mb-6">
          ReVolt Energy currently has <strong className="text-white">{ledger.creditsAvailableForPurchase.toLocaleString()} kg</strong> of unassigned, blockchain-verified recycling credits available for purchase to fulfill your EPR quota.
        </p>
        
        <div className="flex gap-4">
          <input 
            type="number" 
            placeholder="Amount to purchase (kg)" 
            className="bg-black border border-zinc-700 rounded-md px-4 py-2 text-white w-64 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-[#00FF66] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#00cc52] transition-colors">
            Execute Buy Order
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, color }: { title: string, value: string, color: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm">
      <h3 className="text-zinc-400 text-sm font-medium">{title}</h3>
      <div className={`text-3xl font-bold mt-2 font-outfit ${color}`}>{value}</div>
    </div>
  );
}
