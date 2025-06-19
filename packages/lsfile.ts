import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import Table from 'cli-table3';

interface FileInfo {
    name: string;
    type: string;
    size: string;
    modified: string;
}

// format ขนาดไฟล์
function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

// format วันที่
function formatDate(date: Date): string {
    return date.toISOString().replace('T', ' ').split('.')[0];
}

// recursive อ่านไฟล์และคืนค่า FileInfo[]
async function listDir(dir: string, maxDepth = 0, currentDepth = 0, relativePath = ''): Promise<FileInfo[]> {
    if (currentDepth > maxDepth) return [];

    const entries = await fs.readdir(dir);
    const results: FileInfo[] = [];

    for (const name of entries) {
        if (['node_modules', '.git', 'dist'].includes(name)) continue;

        const fullPath = path.join(dir, name);
        const stat = await fs.stat(fullPath);
        const displayName = path.join(relativePath, stat.isDirectory() ? name : name);

        results.push({
            name: displayName,
            type: stat.isDirectory() ? 'dir' : 'file',
            size: stat.isDirectory() ? '-' : formatBytes(stat.size),
            modified: formatDate(stat.mtime),
        });

        if (stat.isDirectory()) {
            const nested = await listDir(fullPath, maxDepth, currentDepth + 1, path.join(relativePath, name));
            results.push(...nested);
        }
    }

    return results;
}

// สร้างและแสดงตารางด้วยสี
export async function showDirTable(root: string, maxDepth = 1) {
    const data = await listDir(root, maxDepth);

    const table = new Table({
        head: ['#', 'name', 'type', 'size', 'modified'],
        colWidths: [5, 40, 10, 10, 25],
        wordWrap: true,
    });

    data.forEach((item, idx) => {
        table.push([
            idx + 1,
            item.type === 'dir' ? chalk.blue(item.name) : item.name,
            item.type,
            item.size,
            item.modified,
        ]);
    });

    console.log(table.toString());
}

