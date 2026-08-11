export interface PricingBreakdown {
  baseFee: number;
  distanceFee: number;
  deviceAdjustment: number;
  discount: number;
  total: number;
  netRewardPoints: number;
}

export interface PricingParams {
  distanceKm: number;
  deviceCategories: string[];
  quantities: number[];
  isEnterprise: boolean;
  priorityPickup: boolean;
  campaignCode?: string;
}

export class PricingService {
  private static readonly BASE_PICKUP_FEE = 50.0;
  private static readonly FEE_PER_KM = 5.0;

  // Mock BOM (Bill of Materials) in grams for various device categories
  private static readonly DEVICE_BOM: Record<string, { copper: number, gold: number, lithium: number, plastic: number }> = {
    'smartphone': { copper: 15, gold: 0.03, lithium: 10, plastic: 40 },
    'laptop': { copper: 150, gold: 0.2, lithium: 100, plastic: 400 },
    'tablet': { copper: 60, gold: 0.08, lithium: 50, plastic: 150 },
    'monitor': { copper: 200, gold: 0.1, lithium: 0, plastic: 1500 }, // High plastic, low relative value
  };

  // Mock global spot prices per gram in INR (Would come from Metals-API in production)
  private static readonly SPOT_PRICES_INR: Record<string, number> = {
    'copper': 0.8,
    'gold': 6500,
    'lithium': 5,
    'plastic': -0.1 // Plastic costs money to recycle properly
  };

  static async getLiveSpotPrices() {
    // Simulated fetch to commodity market API
    return this.SPOT_PRICES_INR;
  }

  static calculatePricing(params: PricingParams): PricingBreakdown {
    const { distanceKm, deviceCategories, quantities, isEnterprise, priorityPickup } = params;

    let baseFee = this.BASE_PICKUP_FEE;
    let distanceFee = distanceKm * this.FEE_PER_KM;
    
    if (priorityPickup) {
      baseFee += 100;
    }

    let deviceAdjustment = 0;
    for (let i = 0; i < deviceCategories.length; i++) {
      const category = deviceCategories[i].toLowerCase();
      const bom = this.DEVICE_BOM[category] || { copper: 0, gold: 0, lithium: 0, plastic: 0 };
      const qty = quantities[i] || 1;
      
      const valuePerDevice = 
        (bom.copper * this.SPOT_PRICES_INR.copper) +
        (bom.gold * this.SPOT_PRICES_INR.gold) +
        (bom.lithium * this.SPOT_PRICES_INR.lithium) +
        (bom.plastic * this.SPOT_PRICES_INR.plastic);
        
      deviceAdjustment += valuePerDevice * qty;
    }

    // Enterprise contracts might waive pickup fees
    let discount = 0;
    if (isEnterprise) {
      discount = baseFee + distanceFee; // Waive logistics cost for enterprise
    }

    // A simple arbitrary conversion: 10 INR net value = 1 Reward Point
    let totalValue = deviceAdjustment - (baseFee + distanceFee - discount);
    
    // If it's negative, it means they have to pay. If positive, they earn points.
    // In our model, we might just give points regardless to encourage recycling, 
    // but give more points if the value is positive.
    let netRewardPoints = 50; // Base points for recycling
    
    if (totalValue > 0) {
      netRewardPoints += Math.floor(totalValue / 10);
    }

    // The user pays for the pickup if totalValue < 0, otherwise it's free.
    const totalToPay = totalValue < 0 ? Math.abs(totalValue) : 0;

    return {
      baseFee,
      distanceFee,
      deviceAdjustment,
      discount,
      total: totalToPay,
      netRewardPoints
    };
  }
}
