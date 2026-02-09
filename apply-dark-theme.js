#!/usr/bin/env node

/**
 * Dark Theme Color Replacement Script
 * Replaces all light theme colors with dark theme equivalents
 */

const fs = require('fs');
const path = require('path');

// Color mappings: [oldColor, newColor]
const colorReplacements = [
    // Backgrounds
    ['bg-white', 'bg-background'],
    ['bg-gray-50', 'bg-background-dark'],
    ['bg-gray-100', 'bg-background-light'],
    ['bg-gray-900', 'bg-background-light'],

    // Text colors
    ['text-gray-900', 'text-text'],
    ['text-gray-800', 'text-text'],
    ['text-gray-700', 'text-text-muted'],
    ['text-gray-600', 'text-text-muted'],
    ['text-gray-500', 'text-text-dark'],

    // Borders
    ['border-gray-300', 'border-text/20'],
    ['border-gray-200', 'border-text/10'],
    ['border-gray-100', 'border-text/5'],

    // Specific patterns
    ['from-gray-50 to-white', 'from-background-dark to-background'],
];

const componentsDir = path.join(__dirname, 'src', 'components');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    colorReplacements.forEach(([oldColor, newColor]) => {
        if (content.includes(oldColor)) {
            content = content.replaceAll(oldColor, newColor);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated: ${path.basename(filePath)}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            replaceInFile(filePath);
        }
    });
}

console.log('🎨 Starting dark theme color replacement...\n');
processDirectory(componentsDir);
console.log('\n✨ Dark theme colors applied successfully!');
