import os
from pathlib import Path
import re
from tqdm import tqdm

class DescriptionCleaner:
    def __init__(self):
        self.base_path = Path("pages/espanol")
        self.report = {
            'total_files': 0,
            'files_processed': 0,
            'descriptions_removed': 0,
            'errors': []
        }

    def find_exercise_files(self):
        """Find all exercise files in the Spanish directory."""
        self.exercise_files = []
        
        # Walk through all directories
        for week_dir in self.base_path.glob("semana[1-5]"):
            for day_dir in week_dir.glob("dia[1-5]"):
                for exercise_file in day_dir.glob("ejercicio[1-5].js"):
                    self.exercise_files.append(exercise_file)
                    self.report['total_files'] += 1

    def process_file(self, file_path):
        """Process a single exercise file to remove descriptions."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Find all EspDrillNavBar components
            nav_bars = re.finditer(r'<EspDrillNavBar.*?>', content)
            
            # Process each nav bar
            for match in nav_bars:
                nav_bar = match.group(0)
                
                # Handle multiple description attributes
                desc_parts = re.split(r'(description="[^"]+")', nav_bar)
                cleaned_parts = []
                for part in desc_parts:
                    if part.startswith('description="'):
                        self.report['descriptions_removed'] += 1
                    else:
                        cleaned_parts.append(part)
                cleaned_nav = ''.join(cleaned_parts)
                
                # Replace the old nav bar with the cleaned version
                content = content.replace(match.group(0), cleaned_nav)

            # Also check for description in EspDrillBarTemplate
            template_match = re.search(r'<EspDrillBarTemplate.*?>', content)
            if template_match:
                template = template_match.group(0)
                desc_parts = re.split(r'(description="[^"]+")', template)
                cleaned_parts = []
                for part in desc_parts:
                    if part.startswith('description="'):
                        self.report['descriptions_removed'] += 1
                    else:
                        cleaned_parts.append(part)
                cleaned_template = ''.join(cleaned_parts)
                
                # Replace the old template with the cleaned version
                content = content.replace(template_match.group(0), cleaned_template)

            # Write changes back to file if any were made
            if self.report['descriptions_removed'] > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.report['files_processed'] += 1

        except Exception as e:
            self.report['errors'].append(f"Error processing {file_path}: {str(e)}")

    def generate_report(self):
        """Generate a report of the cleaning process."""
        print("\n=== CLEANING REPORT ===")
        print(f"Total files: {self.report['total_files']}")
        print(f"Files processed: {self.report['files_processed']}")
        print(f"Descriptions removed: {self.report['descriptions_removed']}")
        print(f"Errors: {len(self.report['errors'])}")

        if self.report['errors']:
            print("\n=== ERRORS ===")
            for error in self.report['errors']:
                print(f"- {error}")

    def run(self):
        """Run the cleaning process."""
        print("\nStarting description cleanup...")
        
        self.find_exercise_files()
        
        for file_path in tqdm(self.exercise_files, desc="Processing files", unit="file"):
            self.process_file(file_path)

        self.generate_report()

if __name__ == "__main__":
    cleaner = DescriptionCleaner()
    cleaner.run()
