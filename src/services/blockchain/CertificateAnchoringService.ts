import crypto from 'crypto';

export interface CertificateMetadata {
  bookingId: string;
  organizationId: string;
  materialsRecovered: Record<string, number>; // e.g. { 'Copper': 1.2, 'Gold': 0.05 }
  co2Avoided: number;
  dataMethod: string;
  timestamp: number;
}

export class CertificateAnchoringService {
  /**
   * Generates a cryptographic SHA-256 hash representing the certificate metadata.
   * This hash acts as a Proof of Recycling.
   */
  static generateHash(metadata: CertificateMetadata): string {
    const sortedData = JSON.stringify(metadata, Object.keys(metadata).sort());
    return crypto.createHash('sha256').update(sortedData).digest('hex');
  }

  /**
   * Mocks anchoring the hash to the Polygon blockchain.
   * In production, this would use ethers.js or viem to submit a transaction
   * to a deployed smart contract, embedding the hash in the transaction data.
   */
  static async anchorToPolygon(hash: string): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return a mock transaction hash
    const mockTxHash = '0x' + crypto.randomBytes(32).toString('hex');
    console.log(`[Blockchain Mock] Anchored cert hash ${hash} to Polygon. Tx: ${mockTxHash}`);
    
    return mockTxHash;
  }
}
