// app/docs/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from './mdx-components';

function getAllMdxFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllMdxFiles(filePath, arrayOfFiles);
    } else if (file.endsWith('.mdx')) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

export default async function DocsPage() {
  const docsDirectory = path.join(process.cwd(), 'app', 'docs');
  const mdxFilePaths = getAllMdxFiles(docsDirectory);

  const mdxContents = mdxFilePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContents);

    return content;
  });

  return (
    <div className="flex flex-col min-h-screen">     
      <div className="flex flex-1">        
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-10 flex-1">
          {mdxContents.map((content, index) => (
            <div
              key={index}
              className="prose prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-500 prose-a:hover:text-blue-700 dark:prose-invert"
            >
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
}