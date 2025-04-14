import csv
import os
from pathlib import Path
from tqdm import tqdm
import re

class ExerciseUpdater:
    def __init__(self):
        self.base_path = Path("pages/espanol")
        self.csv_path = Path("RESOURCES/spanishdrills.csv")
        self.report = {
            'total_files': 0,
            'updated_files': 0,
            'errors': [],
            'unchanged': [],
            'mismatches': []
        }

    def load_csv(self):
        """Load and parse the CSV file."""
        try:
            with open(self.csv_path, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                self.exercises = list(reader)
            return True
        except Exception as e:
            self.report['errors'].append(f"Error loading CSV: {str(e)}")
            return False

    def verify_file_structure(self):
        """Verify that all expected files exist."""
        expected_files = set()
        
        for ex in self.exercises:
            week = ex['Semana']
            day = ex['Día']
            number = ex['Ejercicio #']
            
            # Create full path with proper week/day numbering
            week_num = week.split()[1]  # Extract the number from "Semana X"
            day_num = day.split()[1]    # Extract the number from "Día X"
            
            file_path = self.base_path / f"semana{week_num}" / f"dia{day_num}" / f"ejercicio{number}.js"
            expected_files.add(file_path)
            
            if not file_path.exists():
                self.report['errors'].append(f"Missing file: {file_path}")
        
        self.report['total_files'] = len(expected_files)
        return len(self.report['errors']) == 0

    def update_file(self, file_path, exercise):
        """Update a single exercise file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Verify current content
            # Check for EspDrillBarTemplate title
            current_title = re.search(r'title="([^"]+)"', content)
            
            # Check for EspDrillNavBar
            current_nav = re.search(r'<EspDrillNavBar.*?>', content)
            
            if not (current_title and current_nav):
                self.report['errors'].append(f"Invalid format in {file_path}")
                return False

            # Check for duplicate description attributes in EspDrillNavBar
            desc_count = len(re.findall(r'description="([^"]+)"', current_nav.group(0)))
            if desc_count > 1:
                self.report['errors'].append(f"Duplicate description attributes in {file_path}")
                return False

            # Update EspDrillNavBar
            nav_bar_pattern = r'<EspDrillNavBar.*?>'
            
            # Get week and day numbers
            week_num = exercise['Semana'].split()[1]
            day_num = exercise['Día'].split()[1]
            
            # Calculate next exercise number
            next_num = int(exercise['Ejercicio #']) + 1
            
            # Create proper paths
            next_drill_path = f"/espanol/semana{week_num}/dia{day_num}/ejercicio{next_num}"
            current_day_path = f"/espanol/semana{week_num}/dia{day_num}"
            
            # Create updated nav bar
            nav_bar_update = f'''
      <EspDrillNavBar 
        currentDay="{current_day_path}" 
        nextDrill="{next_drill_path}" 
        disablePrevious={{ {exercise['Ejercicio #'] == '1'} }} 
        disableNext={{{False}}}
      />
    '''
            
            # Replace the old nav bar with the new one
            updated_content = re.sub(nav_bar_pattern, nav_bar_update, content)
            
            # Write changes back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
                self.report['updated_files'] += 1

            return True

            # Check for mismatches
            if current_title.group(1) != exercise['Ejercicio']:
                self.report['mismatches'].append({
                    'file': str(file_path),
                    'field': 'title',
                    'current': current_title.group(1),
                    'expected': exercise['Ejercicio']
                })

            if current_desc.group(1) != exercise['Descripción']:
                self.report['mismatches'].append({
                    'file': str(file_path),
                    'field': 'description',
                    'current': current_desc.group(1),
                    'expected': exercise['Descripción']
                })

            # Check for mismatches
            if current_title.group(1) != exercise['Ejercicio']:
                self.report['mismatches'].append({
                    'file': str(file_path),
                    'field': 'title',
                    'current': current_title.group(1),
                    'expected': exercise['Ejercicio']
                })

            if current_desc.group(1) != exercise['Descripción']:
                self.report['mismatches'].append({
                    'file': str(file_path),
                    'field': 'description',
                    'current': current_desc.group(1),
                    'expected': exercise['Descripción']
                })

            # Update content
            updated_content = content
            updated_content = re.sub(r'title="([^"]+)"', f'title="{exercise["Ejercicio"]}"', updated_content)
            updated_content = re.sub(r'description="([^"]+)"', f'description="{exercise["Descripción"]}"', updated_content)

            # Update EspDrillNavBar
            nav_bar_pattern = r'<EspDrillNavBar.*?>'
            
            # Get week and day numbers
            week_num = exercise['Semana'].split()[1]
            day_num = exercise['Día'].split()[1]
            
            # Calculate next exercise number
            next_num = int(exercise['Ejercicio #']) + 1
            
            # Create proper paths
            next_drill_path = f"/espanol/semana{week_num}/dia{day_num}/ejercicio{next_num}"
            current_day_path = f"/espanol/semana{week_num}/dia{day_num}"
            
            # Create updated nav bar
            nav_bar_update = f'''
      <EspDrillNavBar 
        currentDay="{current_day_path}" 
        nextDrill="{next_drill_path}" 
        disablePrevious={{ {exercise['Ejercicio #'] == '1'} }} 
        disableNext={{{False}}}
      />
    '''
            updated_content = re.sub(nav_bar_pattern, nav_bar_update, updated_content)

            # Write changes if needed
            if updated_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                self.report['updated_files'] += 1
            else:
                self.report['unchanged'].append(str(file_path))

            return True

        except Exception as e:
            self.report['errors'].append(f"Error updating {file_path}: {str(e)}")
            return False

    def generate_report(self):
        """Generate a detailed report of the update process."""
        print("\n=== UPDATE REPORT ===")
        print(f"Total files: {self.report['total_files']}")
        print(f"Files updated: {self.report['updated_files']}")
        print(f"Files unchanged: {len(self.report['unchanged'])}")
        print(f"Errors: {len(self.report['errors'])}")
        print(f"Mismatches found: {len(self.report['mismatches'])}")

        if self.report['errors']:
            print("\n=== ERRORS ===")
            for error in self.report['errors']:
                print(f"- {error}")

        if self.report['mismatches']:
            print("\n=== MISMATCHES ===")
            for mismatch in self.report['mismatches']:
                print(f"\nFile: {mismatch['file']}")
                print(f"Field: {mismatch['field']}")
                print(f"Current: {mismatch['current']}")
                print(f"Expected: {mismatch['expected']}")

        if self.report['unchanged']:
            print("\n=== UNCHANGED FILES ===")
            for file in self.report['unchanged']:
                print(f"- {file}")

    def run(self):
        """Run the update process."""
        if not self.load_csv():
            print("Failed to load CSV file. Aborting.")
            return

        if not self.verify_file_structure():
            print("File structure verification failed. Aborting.")
            return

        print("\nStarting update process...")
        
        for exercise in tqdm(self.exercises, desc="Updating exercises", unit="file"):
            week = exercise['Semana']
            day = exercise['Día']
            number = exercise['Ejercicio #']
            
            # Create full path with proper week/day numbering
            week_num = week.split()[1]  # Extract the number from "Semana X"
            day_num = day.split()[1]    # Extract the number from "Día X"
            
            file_path = self.base_path / f"semana{week_num}" / f"dia{day_num}" / f"ejercicio{number}.js"
            
            if file_path.exists():
                self.update_file(file_path, exercise)

        self.generate_report()

if __name__ == "__main__":
    updater = ExerciseUpdater()
    updater.run()
