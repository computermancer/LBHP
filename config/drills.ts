import { DrillConfig } from '../types/drill';
import { VIDEO_CONFIG } from './drillConfig';

export const DRILLS: Record<string, DrillConfig> = {
  'supine-rib-shift': {
    id: 'supine-rib-shift',
    title: "Supine Rib Shift with Breath",
    videoTimestamp: VIDEO_CONFIG.timestamp,
    setup: [
      "Lie on back with knees bent, feet flat.",
      "Place hands on lower ribs."
    ],
    instructions: [
      "Inhale to prepare.",
      "Exhale while shifting ribs side to side.",
      "Keep movement slow and controlled.",
      "Return to center after each shift."
    ],
    setsReps: [
      "Sets: 2–3",
      "Reps: 8–10 slow reps per side",
      "Breath: Exhale during shift, inhale to return",
      "Rest: As needed"
    ],
    whatToFeel: [
      "Controlled movement through ribs and spine"
    ],
    whatToAvoid: [
      "Over-rotating or tensing neck"
    ],
    redFlags: [
      "Pain in ribs or spine"
    ],
    regression: [
      "Reduce range of motion if needed."
    ]
  },
  'seated-pelvic-rocking': {
    id: 'seated-pelvic-rocking',
    title: "Seated Posterior Pelvic Rocking",
    videoTimestamp: VIDEO_CONFIG.timestamp,
    setup: [
      "Sit upright in a firm chair with feet flat.",
      "Place hands on thighs."
    ],
    instructions: [
      "Inhale to prepare.",
      "Exhale while rocking pelvis backward and forward.",
      "Maintain smooth control throughout movement."
    ],
    setsReps: [
      "Sets: 2–3",
      "Reps: 8–10 slow reps",
      "Breath: Exhale during rocking, inhale to return",
      "Rest: As needed"
    ],
    whatToFeel: [
      "Smooth motion through pelvis and lumbar spine"
    ],
    whatToAvoid: [
      "Jerky or rushed movements"
    ],
    redFlags: [
      "Pain or discomfort in lower back"
    ],
    regression: [
      "Place hands on hips for additional feedback."
    ]
  },
  // Add more drills here...
}; 