import React from "react";
export default function Navbar() {
  return (
    <div class="flex mb-6 justify-center">
      <a
        class="mx-2"
        href="https://www.npmjs.com/package/react-code-blocks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Version"
          src="https://img.shields.io/npm/v/react-code-blocks.svg"
        />
      </a>
      <a
        class="mx-2"
        href="https://www.npmjs.com/package/react-code-blocks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Downloads"
          src="https://img.shields.io/npm/dw/react-code-blocks"
        />
      </a>
      <a class="mx-2">
        <img src="https://img.shields.io/node/v/react-code-blocks" />
      </a>
      <a
        class="mx-2"
        href="https://react-code-blocks.rajinwonderland.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Documentation"
          src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"
        />
      </a>
      <a href="#" class="mx-2" target="_blank" rel="noopener noreferrer">
        <img
          alt="License: MIT"
          src="https://img.shields.io/badge/License-MIT-yellow.svg"
        />
      </a>
      <a
        class="mx-2"
        href="https://twitter.com/rajinwonderland"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Twitter: rajinwonderland"
          src="https://img.shields.io/twitter/follow/rajinwonderland.svg?style=social"
        />
      </a>
    </div>
  );
}
