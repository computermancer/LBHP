export interface DrillData {
  title: string;
  videoUrl: string;
  videoTimestamp: number;
  setup: string[];
  instructions: string[];
  setsReps: string[];
  whatToFeel: string[];
  whatToAvoid: string[];
  redFlags: string[];
  regression: string[];
}

export interface DrillConfig {
  id: string;
  title: string;
  videoTimestamp: number;
  setup: string[];
  instructions: string[];
  setsReps: string[];
  whatToFeel: string[];
  whatToAvoid: string[];
  redFlags: string[];
  regression: string[];
} 