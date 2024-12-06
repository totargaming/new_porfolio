import { Download } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import HackerBtn from './animation/HackerBtn';

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4">
      <Link href="/resume.pdf" passHref legacyBehavior>
        <a download>
          <HackerBtn label="Download Resume" />
        </a>
      </Link>
    </div>
  );
}

export default DownLoadResumeBtn;