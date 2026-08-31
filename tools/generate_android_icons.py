#!/usr/bin/env python3
"""
Generates high-resolution Android launcher icons across all mipmap density buckets.
"""

import subprocess
import os

ICON_SIZES = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192
}

RES_DIR = 'android/app/src/main/res'
SRC_SVG = 'tools/app_icon.svg'

for folder, size in ICON_SIZES.items():
    target_dir = os.path.join(RES_DIR, folder)
    os.makedirs(target_dir, exist_ok=True)
    
    # Square / standard launcher
    out_sq = os.path.join(target_dir, 'ic_launcher.png')
    subprocess.run(['magick', SRC_SVG, '-resize', f'{size}x{size}', out_sq], check=True)
    
    # Round launcher
    out_rd = os.path.join(target_dir, 'ic_launcher_round.png')
    subprocess.run(['magick', SRC_SVG, '-resize', f'{size}x{size}', out_rd], check=True)
    
    # Foreground
    out_fg = os.path.join(target_dir, 'ic_launcher_foreground.png')
    subprocess.run(['magick', SRC_SVG, '-resize', f'{size}x{size}', out_fg], check=True)

print("Successfully generated all Android launcher icons in android/app/src/main/res/!")
