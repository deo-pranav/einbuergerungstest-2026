#!/usr/bin/env python3
"""
Packages clean runtime web assets into www/ for Capacitor Android & Web hosting.
"""

import shutil
import os

DIST_DIR = 'www'

# Remove existing www
if os.path.exists(DIST_DIR):
    shutil.rmtree(DIST_DIR)

os.makedirs(DIST_DIR, exist_ok=True)

# Copy single files
for filename in ['index.html', 'manifest.json', 'sw.js']:
    if os.path.exists(filename):
        shutil.copy2(filename, os.path.join(DIST_DIR, filename))

# Copy directories
for dirname in ['css', 'js', 'data', 'assets']:
    if os.path.exists(dirname):
        shutil.copytree(dirname, os.path.join(DIST_DIR, dirname))

print(f"Successfully packaged clean web distribution into {DIST_DIR}/")
