import EspDrillBarTemplate from '../../../../components/EspDrillBarTemplate';
import EspDrillNavBar from '../../../../components/EspDrillNavBar';
import VideoCard from '../../../../components/VideoCard';
import Link from 'next/link';

// Replace FUNCTION_NAME with the appropriate function name
export default function FUNCTION_NAME() {
  return (
    <EspDrillBarTemplate
      title="" // Replace with exact title from CONTENT file
      backButtonText="" // Replace with appropriate back button text
      videoId="" // Replace with appropriate video ID
      videoStart={0} // Replace with appropriate start time
      setup={[
        "", // Replace with setup instructions from CONTENT file
        "" // Add additional setup instructions as needed
      ]}
      instructions={[
        "", // Replace with instructions from CONTENT file
        "", // Add additional instructions as needed
        "" // Add more instructions as needed
      ]}
      setsReps={[
        "Conjuntos: ", // Replace with exact number from CONTENT file
        "Repeticiones: ", // Replace with exact number from CONTENT file
        "Respira: ", // Add this line if present in CONTENT file
        "Descanso: " // Add this line if present in CONTENT file
      ]}
      whatToFeel={[
        "", // Replace with what to feel from CONTENT file
        "" // Add additional what to feel items as needed
      ]}
      whatToAvoid={[
        "", // Replace with what to avoid from CONTENT file
        "" // Add additional what to avoid items as needed
      ]}
      redFlags={[
        "", // Replace with red flags from CONTENT file
        "" // Add additional red flags as needed
      ]}
      regression={[
        "", // Replace with regression options from CONTENT file
        "" // Add additional regression options as needed
      ]}
    >
      <EspDrillNavBar 
        prevDrill="" // Replace with previous drill path
        currentDay="" // Replace with current day path
        nextDrill="" // Replace with next drill path
        disablePrevious={false} // Set to true if this is the first exercise
      />
    </EspDrillBarTemplate>
  );
}
