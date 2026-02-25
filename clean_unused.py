import os
import re

app_dir = r'c:\Michael SAT\Systems_of_Equations_App'
assets_dir = os.path.join(app_dir, 'assets')
files_to_check = [
    os.path.join(app_dir, 'index.html'),
    os.path.join(app_dir, 'app.js'),
    os.path.join(app_dir, 'style.css'),
    os.path.join(app_dir, 'data', 'questions.js')
]

content = ''
for f in files_to_check:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content += file.read()

used_images = set(re.findall(r'assets/([a-zA-Z0-9_.-]+\.png)', content))
used_images.update(re.findall(r'assets/([a-zA-Z0-9_.-]+\.jpg)', content))
used_images.update(re.findall(r'assets/([a-zA-Z0-9_.-]+\.jpeg)', content))
used_images.update(re.findall(r'assets/([a-zA-Z0-9_.-]+\.svg)', content))

# also check without assets/ prefix just in case it is loaded directly in CSS
used_images.update(re.findall(r'url\((?:[\'\"]?)assets/([a-zA-Z0-9_.-]+\.[a-z]+)(?:[\'\"]?)\)', content))

print("Used images:", used_images)

all_images = set()
if os.path.exists(assets_dir):
    all_images = set(os.listdir(assets_dir))

unused_images = all_images - used_images

print(f'\nTotal images: {len(all_images)}')
print(f'Used images referenced directly: {len(used_images)}')
print(f'Unused images: {len(unused_images)}')

for img in unused_images:
    img_path = os.path.join(assets_dir, img)
    if os.path.isfile(img_path):
        os.remove(img_path)
        print(f'Removed: {img}')
