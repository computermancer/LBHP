import MainNavBar from '../components/MainNavBar';
import Link from 'next/link';

export default function ProgramOverview() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <MainNavBar />
      <main className="px-8 text-gray-200 font-sans">
      <div className="max-w-[500px] mx-auto py-20">
      <h1 className="text-orange-300 text-4xl font-bold mb-2">Program Overview</h1>
          <h2 className="text-orange-300 text-xl font-semibold mb-4">Tables for Weeks 1 - 5</h2>

          {/* Week 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 1: Awareness & Activation
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 1 - Day 1 - Groundwork and Awareness</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Posterior Pelvic Tilt on Wall</td>
                    <td className="border border-gray-600 p-2 text-base">Develop awareness of pelvic tilt and lumbar control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Belly Breathing</td>
                    <td className="border border-gray-600 p-2 text-base">Improve breath control and diaphragmatic function.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Pelvic Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Increase pelvic mobility and coordination.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine 90-90 Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance core stability and maintain rib-pelvis alignment.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring Press</td>
                    <td className="border border-gray-600 p-2 text-base">Activate hamstrings to stabilize pelvis and core.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 1 - Day 2 - Rib Expansion and Hip Hinge Focus</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Improve lateral ribcage expansion and breathing mechanics.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Thoracic Rotation</td>
                    <td className="border border-gray-600 p-2 text-base">Increase thoracic mobility and rotational control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Standing Hip Hinge with Wall Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Develop hip hinge awareness and control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Rock Back with Neutral Spine</td>
                    <td className="border border-gray-600 p-2 text-base">Promote pelvic control with neutral spine.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Squat Hold</td>
                    <td className="border border-gray-600 p-2 text-base">Build confidence in squat position with wall support.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 1 - Day 3 - Breath Control and Rhythmic Movement</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Breath Reset in Side-Lying</td>
                    <td className="border border-gray-600 p-2 text-base">Promote ribcage and diaphragm reset through focused breath.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Rhythmic Reach & Roll</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance rotational control and coordination.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supported Breath Patterning</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce steady breath control and rib awareness.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Relaxed Spine Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Encourage fluid motion through the pelvis and spine.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Gentle Bilateral Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Improve pelvic mobility and relaxation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 1 - Day 4 - Pelvic and Rib Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Diaphragm Reset</td>
                    <td className="border border-gray-600 p-2 text-base">Establish deeper diaphragmatic control and relaxation.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Improve awareness of pelvic positioning.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Thoracic Extension</td>
                    <td className="border border-gray-600 p-2 text-base">Strengthen thoracic extension and rib positioning.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Hip Shift with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Build control of pelvic shifts and core integration.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Breath with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Maintain ribcage and pelvis control with steady breath.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 1 - Day 5 - Breath, Spinal Flexion, and Core Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Diaphragmatic Breathing in Crocodile Position</td>
                    <td className="border border-gray-600 p-2 text-base">Encourage full 3D breath expansion.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Cat-Cow with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Develop spinal flexion and extension awareness.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Twist with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve thoracic rotation with controlled breathing.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Marching with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce pelvic and rib stability with leg movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Breath and Pelvic Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Increase awareness of breath and pelvic positioning.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Week 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 2: Rib Control & Hip Integration
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 2 - Day 1 - Rib Expansion and Hip Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Rib Expansion with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Increase ribcage awareness and diaphragmatic control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Hip Shifts</td>
                    <td className="border border-gray-600 p-2 text-base">Build control and awareness of hip shifting patterns.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Hip IR with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve internal hip rotation and breath coordination.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine 90-90 Leg Lowering</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce core stability and rib-pelvis alignment.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Heel Press</td>
                    <td className="border border-gray-600 p-2 text-base">Activate hamstrings to stabilize pelvis and reinforce control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 2 - Day 2 - Thoracic Rotation and Posterior Chain Activation</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Reach with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Develop thoracic rotation with stable ribcage control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Hip Hinge with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve hinge pattern and maintain core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Standing Posterior Weight Shift</td>
                    <td className="border border-gray-600 p-2 text-base">Develop posterior weight shift for balanced hip control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring Marching</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce posterior chain activation and pelvic control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Prone Hip IR and Extension Drill</td>
                    <td className="border border-gray-600 p-2 text-base">Build awareness of hip rotation and extension.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 2 - Day 3 - Pelvic Control and Hip Stability</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Pelvic Clocks</td>
                    <td className="border border-gray-600 p-2 text-base">Develop subtle awareness and control of pelvic tilt.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Diaphragm Reset with Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Refine breath control with active upper body reach.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Rotation with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Increase thoracic rotation with breath control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supported Side-Lying Hip Abduction</td>
                    <td className="border border-gray-600 p-2 text-base">Improve lateral hip strength and pelvic stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Deep Squat Hold</td>
                    <td className="border border-gray-600 p-2 text-base">Build confidence in deep squat position while maintaining control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 2 - Day 4 - Rib Shift and Thoracic Mobility</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Rib Shift with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance ribcage awareness and asymmetrical breath control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Maintain pelvic awareness and improve pelvic rhythm.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Thoracic Flexion/Extension</td>
                    <td className="border border-gray-600 p-2 text-base">Develop awareness of spinal flexion and extension.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Hip Shifts with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Build core and hip stability through shifting patterns.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Breath with Pelvic Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce breath and pelvic positioning control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 2 - Day 5 - Breath, Rotation, and Pelvic Coordination</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Crocodile Breathing with Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce full diaphragmatic breath expansion.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Cat-Cow with Rotational Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Improve spinal flexion/extension and incorporate rotation.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Twist with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Increase rotational control and scapular mobility.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Marching with Pelvic Control</td>
                    <td className="border border-gray-600 p-2 text-base">Strengthen rib-pelvis coordination and core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Breath with Hip Shifts</td>
                    <td className="border border-gray-600 p-2 text-base">Increase awareness of pelvic shifts while maintaining breath control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Week 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 3: Pelvic Control & Breath Integration
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 3 - Day 1 - Pelvic Control and Breath Integration</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Breath with Pelvic Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance breath control and establish awareness of pelvic movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Hip Shift with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Develop control of hip shifting with minimal ribcage movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Diaphragm Reset with Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce ribcage control during breath cycles.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Rock Back with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Improve pelvic mobility and maintain core stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Hinge with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Build posterior chain activation while maintaining rib control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 3 - Day 2 - Rib and Hip Coordination</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Rib Expansion with Breath Control</td>
                    <td className="border border-gray-600 p-2 text-base">Promote ribcage mobility and lateral breath expansion.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Marching with Core Control</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce pelvic stability while moving the legs.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Thoracic Rotation with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Develop rotational control and mobility.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring March with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Activate the posterior chain while maintaining rib stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Prone Hip IR and Extension Drill</td>
                    <td className="border border-gray-600 p-2 text-base">Build awareness of hip rotation and hip extension.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 3 - Day 3 - Spinal Mobility and Core Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Cat-Cow with Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Develop spinal flexion and extension with breath control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance awareness of pelvic motion in seated positions.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine 90-90 Rib Shift with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Build rib and pelvis coordination while breathing.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Deep Squat Hold with Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Increase squat stability with rib and pelvis awareness.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Spine Twist with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve thoracic rotation with controlled breath.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 3 - Day 4 - Hip and Ribcage Stability</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Hip Shifts with Rib Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Develop lateral hip mobility while maintaining rib stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Arm and Leg Reach with Control</td>
                    <td className="border border-gray-600 p-2 text-base">Improve balance and stability with controlled movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring Press with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce hamstring engagement and core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supported Side-Lying Hip Abduction</td>
                    <td className="border border-gray-600 p-2 text-base">Develop lateral hip strength and stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Twist with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Build thoracic rotation and control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 3 - Day 5 - Breath, Mobility, and Relaxation</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Crocodile Breathing with Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce full-body breath expansion.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Pelvic Rock with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Develop gentle pelvic motion with breath-guided movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance control of pelvis positioning in seated positions.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Marching with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce core and rib control during dynamic movements.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Hip IR and Breathing</td>
                    <td className="border border-gray-600 p-2 text-base">Improve hip mobility and breath control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Week 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 4: Rib and Pelvic Stability in Motion
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 1 - Rib and Pelvic Stability in Motion</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Rib Shift with Breath Control</td>
                    <td className="border border-gray-600 p-2 text-base">Develop lateral rib control while maintaining pelvis stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Hip Shifts with Breath Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce pelvic control and hip awareness in seated positions.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Rib Expansion with Marching</td>
                    <td className="border border-gray-600 p-2 text-base">Build core and rib stability while adding dynamic movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Hinge with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Strengthen posterior chain while maintaining ribcage control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Rock Back with Reach Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Improve pelvic mobility with controlled rib and breath awareness.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 2 - Core and Pelvic Stability in Action</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Thoracic Flexion and Extension</td>
                    <td className="border border-gray-600 p-2 text-base">Improve thoracic mobility while maintaining pelvis control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine 90-90 Leg Lowering with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce core control while lowering the legs with stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Rotation with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Develop rotational control and thoracic mobility.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring March with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Build posterior chain control while maintaining rib control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Prone Hip IR and Extension with Control</td>
                    <td className="border border-gray-600 p-2 text-base">Develop awareness of hip rotation and hip extension.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 3 - Spinal Control and Hip Mobility</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Cat-Cow with Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Develop spinal flexion and extension with breath control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Rocking</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance awareness of pelvic motion in seated positions.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine 90-90 Rib Shift with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Build rib and pelvis coordination while breathing.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Deep Squat Hold with Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Increase squat stability with rib and pelvis awareness.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Spine Twist with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve thoracic rotation with controlled breath.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 4 - Hip and Rib Control under Load</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Hip Shifts with Rib Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Develop lateral hip mobility while maintaining rib stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Quadruped Arm and Leg Reach with Control</td>
                    <td className="border border-gray-600 p-2 text-base">Improve balance and stability with controlled movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring Press with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce hamstring engagement and core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supported Side-Lying Hip Abduction</td>
                    <td className="border border-gray-600 p-2 text-base">Develop lateral hip strength and stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Twist with Arm Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Build thoracic rotation and control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 5 - Breath, Mobility, and Relaxation</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Crocodile Breathing with Rib Expansion</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce full-body breath expansion.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Pelvic Rock with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Develop gentle pelvic motion with breath-guided movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Posterior Pelvic Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance control of pelvis positioning in seated positions.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Marching with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce core and rib control during dynamic movements.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Hip IR and Breathing</td>
                    <td className="border border-gray-600 p-2 text-base">Improve hip mobility and breath control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Week 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 5: Strength and Control Progression
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 1 - Lower Body Control and Strength</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bodyweight Squats with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce squat mechanics with core stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Horse Stance Hold (Parallel to Floor)</td>
                    <td className="border border-gray-600 p-2 text-base">Develop isometric strength and endurance in the lower body.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Kickstand RDL with Hip Control</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance posterior chain and hip stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Supported Split Squat Hold</td>
                    <td className="border border-gray-600 p-2 text-base">Strengthen glutes, quads, and core in a split stance.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Marching with Core Control</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce pelvic stability during dynamic movement.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 2 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 2 - Single Leg and Hip Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Staggered Stance Squats with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Develop single-leg loading and pelvic control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Lateral Lunges with Breath Control</td>
                    <td className="border border-gray-600 p-2 text-base">Improve lateral hip control and rib stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Hip Abduction with Breath Focus</td>
                    <td className="border border-gray-600 p-2 text-base">Build lateral hip strength with breath control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Single-Leg Glute Bridge with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Develop posterior chain strength and hip control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Rib Shift with Core Engagement</td>
                    <td className="border border-gray-600 p-2 text-base">Develop core control with subtle rib shifting.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 3 - Posterior Chain and Hip Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Staggered Stance RDL with Hip Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Improve posterior chain strength and single-leg control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Forward Lunges with Rib Control</td>
                    <td className="border border-gray-600 p-2 text-base">Develop strength and stability in forward lunge patterns.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Hamstring Press with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Engage hamstrings and reinforce core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Bilateral Glute Bridge with Rib and Pelvic Control</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce hip extension and core stability.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Spine Twist with Breath</td>
                    <td className="border border-gray-600 p-2 text-base">Improve thoracic rotation with controlled breath.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 4 - Upper Body and Core Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Wall Pushups with Rib Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Introduce upper body pressing while maintaining core control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Chair Pushups with Pelvic Stability</td>
                    <td className="border border-gray-600 p-2 text-base">Progress pressing with greater load while maintaining control.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Floor Pushups with Rib and Pelvic Control</td>
                    <td className="border border-gray-600 p-2 text-base">Build upper body and core strength in a plank position.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Seated Spine Rotation with Reach</td>
                    <td className="border border-gray-600 p-2 text-base">Develop thoracic rotation and scapular movement.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Side-Lying Hip IR and Breathing</td>
                    <td className="border border-gray-600 p-2 text-base">Improve hip mobility and breath control.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 5 - Mobility, Breath, and Control</h3>
              <table className="w-full text-left border-collapse border border-gray-700 table-fixed">
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="border border-gray-600 p-2 text-lg">Drill Name</th>
                    <th className="border border-gray-600 p-2 text-base">Purpose/Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Horse Stance with Rib Control (Longer Hold)</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce isometric lower body endurance.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Calf Raises with Rib and Pelvic Control</td>
                    <td className="border border-gray-600 p-2 text-base">Strengthen calves while maintaining neutral alignment.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Tib Raises with Breath Awareness</td>
                    <td className="border border-gray-600 p-2 text-base">Develop anterior shin strength and balance.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Hooklying Rib Expansion with Marching</td>
                    <td className="border border-gray-600 p-2 text-base">Reinforce core and breath control with marching.</td>
                  </tr>
                  <tr className="hover:bg-gray-800">
                    <td className="border border-gray-600 p-2 text-base">Supine Pelvic Rock with Breath Control</td>
                    <td className="border border-gray-600 p-2 text-base">Enhance pelvic mobility and breath-guided awareness.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
