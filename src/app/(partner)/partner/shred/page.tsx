'use client';
import React, { useState } from 'react';

export default function PartnerShreddingPage() {
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulateShred = async () => {
    setVerifying(true);
    setResult(null);
    
    // Simulate server action call
    setTimeout(() => {
      setResult({
        serialNumberDetected: `WD-WCC6Y9012`,
        isDestroyed: true,
        confidenceScore: 98.7,
        anomalyDetected: false
      });
      setVerifying(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-outfit font-bold tracking-tight text-white">AI Destruction Audit</h1>
          <p className="text-zinc-400 mt-2">Automated physical shredding verification via computer vision.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Camera Feed Mock */}
        <div className="bg-black border border-zinc-800 rounded-xl overflow-hidden relative h-64 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          {!verifying && !result && (
            <div className="text-center z-10">
              <div className="w-16 h-16 border-2 border-dashed border-zinc-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-zinc-500 text-xs">NO FEED</span>
              </div>
              <p className="text-zinc-400">Waiting for hardware input...</p>
            </div>
          )}

          {verifying && (
            <div className="text-center z-10">
              <div className="w-16 h-16 border-2 border-[#00FF66] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-[#00FF66] font-mono animate-pulse">ANALYZING FRAMES...</p>
            </div>
          )}

          {result && (
            <div className="absolute inset-0 border-4 border-[#00FF66] z-10 flex items-end p-4">
              <div className="bg-black/80 backdrop-blur px-3 py-1 text-[#00FF66] font-mono text-xs rounded border border-[#00FF66]/50">
                SHREDDER_CAM_01 - MATCH FOUND
              </div>
            </div>
          )}
        </div>

        {/* Verification Controls & Output */}
        <div className="space-y-6">
          <button 
            onClick={handleSimulateShred}
            disabled={verifying}
            className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {verifying ? 'Running AI Model...' : 'Trigger Conveyor Belt (Simulate)'}
          </button>

          {result && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4 animate-in slide-in-from-bottom-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></div>
                Verification Complete
              </h3>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">Serial OCR:</span>
                  <span className="text-white">{result.serialNumberDetected}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">Status:</span>
                  <span className="text-[#00FF66]">DESTROYED</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">Confidence:</span>
                  <span className="text-white">{result.confidenceScore.toFixed(2)}%</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-zinc-500">
                ESG Certificate successfully minted and anchored to ledger.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
