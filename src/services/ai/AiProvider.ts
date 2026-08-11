export interface AiInferenceResult {
  prediction: string;
  confidence: number;
  condition: string;
  hazardous: boolean;
  model_version: string;
}

export interface AiProvider {
  classifyDevice(imageBuffer: Buffer): Promise<AiInferenceResult>;
  detectHazards(imageBuffer: Buffer): Promise<boolean>;
}

export class MockAiProvider implements AiProvider {
  async classifyDevice(imageBuffer: Buffer): Promise<AiInferenceResult> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // For MVP, randomly return one of the predefined categories with some randomness
    const categories = ['smartphone', 'laptop', 'tablet', 'battery', 'monitor', 'pcb'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const isHazardous = randomCategory === 'battery' || randomCategory === 'monitor';

    return {
      prediction: randomCategory,
      confidence: 0.85 + (Math.random() * 0.14),
      condition: Math.random() > 0.5 ? 'used' : 'broken',
      hazardous: isHazardous,
      model_version: 'mock_classifier_v1'
    };
  }

  async detectHazards(imageBuffer: Buffer): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return Math.random() > 0.8;
  }
}
