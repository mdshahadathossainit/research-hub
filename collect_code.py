import os

def collect_project_code(root_dir, output_file):
    # যে ফোল্ডার বা ফাইলগুলো আমরা বাদ দিতে চাই
    exclude_dirs = {'.git', '.venv', '__pycache__', 'venv', 'node_modules', 'staticfiles'}
    exclude_files = {'db.sqlite3', 'project_summary.txt', 'collect_code.py', '.env'}

    with open(output_file, 'w', encoding='utf-8') as f:
        for root, dirs, files in os.walk(root_dir):
            # বাদ দেওয়া ডিরেক্টরিগুলো এড়িয়ে চলা
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                if file in exclude_files:
                    continue
                
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, root_dir)
                
                f.write(f"\n{'='*50}\n")
                f.write(f"FILE PATH: {relative_path}\n")
                f.write(f"{'='*50}\n\n")
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as code_file:
                        f.write(code_file.read())
                except Exception as e:
                    f.write(f"Could not read file: {e}")
                f.write("\n\n")

if __name__ == "__main__":
    # বর্তমান ডিরেক্টরি থেকেই কাজ শুরু করবে
    current_directory = os.getcwd()
    output_filename = "project_summary.txt"
    collect_project_code(current_directory, output_filename)
    print(f"Done! All code collected in: {output_filename}")
