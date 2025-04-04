import Nav from '../components/Nav';
import Link from 'next/link';

export default function ProgramOverview() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <Nav />
      </div>

      <main className="pt-20 p-8 text-gray-200 min-h-screen font-sans">
        <div className="max-w-[500px] mx-auto">
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
          </section>

          {/* Week 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 4: Rib and Pelvic Stability in Motion
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 1 - Rib and Pelvic Stability</h3>
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

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 3 - Hip and Ribcage Stability</h3>
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

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 4 - Day 4 - Hip and Ribcage Stability</h3>
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
          </section>

          {/* Week 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-200">
              Week 5: Strength and Control Progression
            </h2>

            {/* Day 1 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 1 - Strength and Control Progression</h3>
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
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 2 - Hip and Ribcage Stability</h3>
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

            {/* Day 3 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 3 - Hip and Ribcage Stability</h3>
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

            {/* Day 4 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 4 - Hip and Ribcage Stability</h3>
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

            {/* Day 5 */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Week 5 - Day 5 - Breath, Mobility, and Relaxation</h3>
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
          </section>
        </div>
      </main>
    </>
  );
}
